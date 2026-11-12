#!/usr/bin/env node
// 构建后自动校验：跑完 `npx astro build` 立即执行 `node scripts/verify.mjs`
// 目的是把审计里的硬指标固化成断言，防止后续改动回退。
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const LANGS = ['yua', 'vi', 'th', 'it', 'ja', 'tr', 'pt', 'es', 'fa', 'ko', 'ms', 'ar'];
const EXPECT_ALTERNATE = LANGS.length + 2; // 12 语言 + en + x-default

const results = [];
const fail = (name, detail) => results.push({ ok: false, name, detail });
const pass = (name, detail) => results.push({ ok: true, name, detail });

function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, acc);
    else if (e === 'index.html') acc.push(p);
  }
  return acc;
}

function unescapeHtml(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

if (!existsSync(DIST)) {
  console.error('dist/ 不存在，请先运行 npx astro build');
  process.exit(1);
}

const files = walk(DIST);
const pages = files.map((f) => {
  const html = readFileSync(f, 'utf8');
  const head = html.slice(0, html.indexOf('</head>'));
  const title = (head.match(/<title>([\s\S]*?)<\/title>/) || [, ''])[1];
  const desc = (head.match(/name="description" content="([^"]*)"/) || [, ''])[1];
  return {
    path: '/' + relative(DIST, f).replace(/index\.html$/, '').replace(/\/$/, ''),
    title: unescapeHtml(title),
    desc: unescapeHtml(desc),
    alternates: (head.match(/rel="alternate"/g) || []).length,
    noindex: /content="noindex/.test(head),
  };
});

const indexable = pages.filter((p) => !p.noindex);

// 1. hreflang：每页 alternate 数必须为 14
const badAlt = indexable.filter((p) => p.alternates !== EXPECT_ALTERNATE);
badAlt.length
  ? fail(`hreflang 数量 = ${EXPECT_ALTERNATE}`, `${badAlt.length} 页不符，例如 ${badAlt[0].path} (${badAlt[0].alternates})`)
  : pass(`hreflang 数量 = ${EXPECT_ALTERNATE}`, `${indexable.length} 页全部通过`);

// 2. description 长度 ∈ [50, 160]
const badDesc = indexable.filter((p) => p.desc.length < 50 || p.desc.length > 160);
badDesc.length
  ? fail('description 长度 ∈ [50,160]', `${badDesc.length} 页越界，例如 ${badDesc[0].path} (${badDesc[0].desc.length})`)
  : pass('description 长度 ∈ [50,160]', `${indexable.length} 页全部通过`);

// 3. title 长度：> 60 告警，> 70 判失败
const over70 = indexable.filter((p) => p.title.length > 70);
const over60 = indexable.filter((p) => p.title.length > 60);
over70.length
  ? fail('title ≤ 70 字符', `${over70.length} 页超长，例如 ${over70[0].path} (${over70[0].title.length})`)
  : pass('title ≤ 70 字符', over60.length ? `通过（${over60.length} 页在 61-70 区间，可继续优化）` : '全部 ≤ 60');

// 4. title 无重复
const titleMap = new Map();
for (const p of indexable) titleMap.set(p.title, [...(titleMap.get(p.title) || []), p.path]);
const dupes = [...titleMap.entries()].filter(([, v]) => v.length > 1);
dupes.length
  ? fail('title 无重复', `${dupes.length} 组重复，例如 "${dupes[0][0]}" → ${dupes[0][1].join(' , ')}`)
  : pass('title 无重复', `${titleMap.size} 个唯一标题`);

// 5. sitemap 内容
const smPath = join(DIST, 'sitemap-0.xml');
if (!existsSync(smPath)) {
  fail('sitemap 存在', 'sitemap-0.xml 缺失');
} else {
  const sm = readFileSync(smPath, 'utf8');
  const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const banned = locs.filter((u) => /\/(cart|checkout|my-account)\/?$|\/category\//.test(u));
  banned.length
    ? fail('sitemap 无 cart/checkout/category', `${banned.length} 条不该出现，例如 ${banned[0]}`)
    : pass('sitemap 无 cart/checkout/category', `${locs.length} 条 URL`);

  /<lastmod>/.test(sm) ? pass('sitemap 含 lastmod', '') : fail('sitemap 含 lastmod', '缺少 lastmod');
}

// 6. noindex 页面覆盖
const mustNoindex = ['/cart', '/checkout', '/my-account'];
const needIdx = pages.filter((p) => mustNoindex.includes(p.path) && !p.noindex);
const catIdx = pages.filter((p) => /\/category\/[^/]+$/.test(p.path) && !p.noindex);
needIdx.length || catIdx.length
  ? fail('cart/checkout/my-account/category 全部 noindex', `${needIdx.length + catIdx.length} 页未标 noindex`)
  : pass('cart/checkout/my-account/category 全部 noindex', `${pages.filter((p) => p.noindex).length} 页已标记`);

// 7. 内部断链
const pageSet = new Set(pages.map((p) => (p.path === '/' ? '/' : p.path + '/')));
let broken = 0;
let brokenExample = '';
for (const f of files) {
  const html = readFileSync(f, 'utf8').replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '');
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1];
    if (/\.(jpg|jpeg|png|svg|webp|pdf|xml|ico|css|js|txt|json|webmanifest)$/.test(href)) continue;
    const norm = href === '/' ? '/' : href.endsWith('/') ? href : href + '/';
    if (!pageSet.has(norm)) {
      broken++;
      if (!brokenExample) brokenExample = `${relative(DIST, f)} → ${href}`;
    }
  }
}
broken ? fail('内部断链 = 0', `${broken} 条，例如 ${brokenExample}`) : pass('内部断链 = 0', '');

// 8. FAQPage schema
const faqCount = files.filter((f) => readFileSync(f, 'utf8').includes('"FAQPage"')).length;
faqCount > 0 ? pass('FAQPage schema 已注入', `${faqCount} 页`) : fail('FAQPage schema 已注入', '0 页');

// 9. Organization sameAs
const homeHtml = readFileSync(join(DIST, 'index.html'), 'utf8');
const sameAsCount = (homeHtml.match(/"sameAs":\[([^\]]*)\]/) || [, ''])[1].split('"http').length - 1;
sameAsCount >= 3 ? pass('Organization sameAs ≥ 3', `${sameAsCount} 条`) : fail('Organization sameAs ≥ 3', `${sameAsCount} 条`);

// 10. 旧博客 301 覆盖
const redirects = readFileSync('public/_redirects', 'utf8');
const blogSlugs = readdirSync('src/content/blog')
  .filter((f) => f.endsWith('.md'))
  .map((f) => f.replace(/\.md$/, ''));
const missingRedirect = blogSlugs.filter((s) => !redirects.includes(`/${s}/  `) && !redirects.includes(`/${s}/ `));
missingRedirect.length
  ? fail('旧博客 URL 全部 301', `${missingRedirect.length} 个 slug 缺 301，例如 ${missingRedirect[0]}`)
  : pass('旧博客 URL 全部 301', `${blogSlugs.length} 个 slug × 13 语言`);

// ── 输出 ──
console.log('\n' + '═'.repeat(72));
console.log(`potatoesflakes.com 构建校验   页面 ${pages.length} / 可索引 ${indexable.length}`);
console.log('═'.repeat(72));
for (const r of results) {
  console.log(`${r.ok ? '✅' : '❌'}  ${r.name}${r.detail ? `   — ${r.detail}` : ''}`);
}
const failed = results.filter((r) => !r.ok);
console.log('═'.repeat(72));
console.log(failed.length ? `❌ ${failed.length} 项未通过` : '✅ 全部通过');
console.log('');
process.exit(failed.length ? 1 : 0);
