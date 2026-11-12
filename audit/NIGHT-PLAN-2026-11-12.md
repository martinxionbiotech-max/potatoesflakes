# potatoesflakes.com 夜间修复计划

**制定日期**：2026-11-12
**基线报告**：`audit/AUDIT-2026-11-12.md`
**目标**：从「GSC 已收录但 site: 归零」恢复为正常索引与展现

---

## 一、当前状态（本轮已完成，2026-11-12 白天）

所有 P0 + P1 代码类修复已完成，`npm run build` 通过（1134 页 / 0 错误）。

| 指标 | 修复前 | 修复后 |
|---|---:|---:|
| hreflang 缺失页 | 102 | **0** |
| 每页 alternate 数 | 0 或 12（无 en） | **14**（12 语言 + en + x-default） |
| 旧 WP 博客 404 | 43/48 | **0**（627 条 301） |
| title > 60 字符 | 762 | **260** |
| description < 50 字符（可索引页） | 259 | **0** |
| description > 160 字符（可索引页） | 82 | **10**（HTML 实体计数虚高，实际均 ≤157） |
| 重复 title（可索引页） | 5 组 | **0** |
| sitemap URL | 1134 | **1092**（剔除 cart/checkout/my-account/category） |
| sitemap lastmod | 无 | **有** |
| 内部断链 | 1 | **0** |
| FAQPage schema | 0 | **11** |
| Organization sameAs | 无 | **3 个站外实体** |
| img width/height 覆盖 | 0% | **72%** |
| noindex 页 | 1（404） | **42**（cart/checkout/my-account + 全部 /category/） |

### 本轮改动清单
- `src/layouts/BaseLayout.astro`：hreflang 自动推导（en + 自反 + x-default）、title 品牌后缀智能追加、description 截断、FAQPage 注入、sameAs/alternateName 数组化
- `src/faq.ts`：新增，从 markdown 提取 FAQ 生成 FAQPage schema（多语言标题识别）
- `src/seo.ts`：新增，列表页/分类页/首页本地化 SEO 文案（13 语言）
- `src/img.ts` + `src/image-dims.json`：图片固有尺寸表（247 张）
- `src/pages/**`：13 个页面模板接入 imgAttrs、noindex、localized title/desc
- `public/_redirects`：+559 条（43 slug × 13 语言）
- `astro.config.mjs`：sitemap filter 排除 42 页 + 输出 lastmod
- 内容层：295 个文件重写 description；5 处 title 去重；1 处断链修复

---

## 二、夜间任务排期（按风险从低到高）

> 原则：**先部署低风险改动拿数据，再动内容**。每阶段独立 commit，可单独回滚。

### 🌙 Night 1（2026-11-12 夜 / 次日凌晨）— 部署 + 重抓请求
**目标**：把已完成的代码修复推上线，触发 Google 重抓。

| # | 任务 | 执行 | 预计 | 验证 |
|---|---|---|---|---|
| 1.1 | 打包源码 + 生成部署包 | 自动 | 10 min | tar.gz 完整性 |
| 1.2 | 推 GitHub（`martinxionbiotech-max/potatoesflakes`） | 半自动 | 15 min | commit 到位 |
| 1.3 | Cloudflare Pages 构建监控 | 自动 | 5 min | build 成功、1134 页 |
| 1.4 | 线上验证 20 项：hreflang=14、noindex 页、sitemap 1092、301 抽样 20 条 | 自动 | 20 min | 全绿 |
| 1.5 | GSC「网址检查」逐页请求重抓：`/`、`/product/`、`/blog/`、3 个核心产品页、3 篇核心博客 | 人工 | 15 min | 提交成功 |
| 1.6 | GSC 提交 sitemap（重新提交 sitemap-index.xml） | 人工 | 5 min | 抓取成功 |

**Night 1 结束标志**：线上 hreflang 全量 14；GSC 显示 sitemap 已读取 1092 URL。

---

### 🌙 Night 2（48 小时后）— 收量决策 + 图片优化
**目标**：降低索引膨胀倍数，处理 CLS 与体积。

| # | 任务 | 说明 | 风险 |
|---|---|---|---|
| 2.1 | **yua（粤语）语言下线评估** | Night 1 后观察 48h 索引变化。若 GSC「已编入索引」未回升，则执行：从 sitemap 移除 yua 87 页 + 全部 noindex。索引量 1092 → 1005 | 中（丢 87 页，但字符比 0.42 最低、商业价值最低） |
| 2.2 | 剩余 28% 图片补 width/height | 正文 markdown 内联图，改渲染层自动注入（remark 插件或 markdown 渲染后处理） | 低 |
| 2.3 | 首屏外图片统一 `loading="lazy"` | 首页 13 张图仅 1 张 lazy | 低 |
| 2.4 | 大图转 WebP + 生成 srcset | 242 张图，最大 1.3MB → 目标 ≤300KB；`sharp` 已在 node_modules | 低 |
| 2.5 | 修 10 条 description 边界（HTML 实体导致 >160） | 实际解码后均合规，仅需在 clamp 前先 unescape | 低 |

---

### 🌙 Night 3-4（一周内）— 内容提质（人工介入）
**目标**：把英文核心页从「薄」提到「可竞争」，这是根治质量抑制的关键。

| # | 任务 | 范围 | 说明 |
|---|---|---|---|
| 3.1 | 英文博客扩写 | 10 篇商业意图页 | 212 词 → 800-1200 词。优先级：`top-10-potato-flakes-manufacturer-in-china`、`potato-flakes-vs-mashed-potato-powder`、`how-to-choose-the-right-bulk-potato-flakes`、`potato-flakes-production-line-17-core-equipment`、`what-are-potato-flakes-things-you-may-not-know`、`the-latest-national-standard-2024`、`potato-flakes-price-2024-trend-2025`、`is-investing-in-a-china-made-line-a-good-idea`、`potato-flakes-vs-granules`、`why-use-potato-flakes-applications` |
| 3.2 | 产品页补 TDS/COA 申请入口 | 20 个英文产品页 + 5 个分类页 | 竞品 potatogranules.com / hbjsnykj.com 均有，B2B 转化刚需 |
| 3.3 | 补 Lead time 明确承诺 | 20 个产品页 | 「7-15 天」等具体承诺 |
| 3.4 | 客户案例页 `/case-studies/` | 新建 1 页 | PepsiCo/Mondelez 供应链声明需可验证证据，否则降级表述 |
| 3.5 | 联系邮箱改域名邮箱 | 全站 + schema | 现为 Gmail，改 `@potatoesflakes.com` |
| 3.6 | 食谱类博客差异化 | 48 篇中约 20 篇食谱 | 与 B2B 采购意图错位，建议 noindex 或改写为「工业应用」角度 |

---

### 🌙 Night 5（两周后）— 复盘与二次调优
| # | 任务 | 判断标准 |
|---|---|---|
| 5.1 | `site:potatoesflakes.com` 复查 | 出现结果 → 成功；仍为 0 → 进入 5.2 |
| 5.2 | GSC「网页」报告分析 | 看「已抓取-尚未编入索引」与「已发现-尚未编入索引」比例变化 |
| 5.3 | 若仍未恢复，进一步收量 | 考虑把 ar/fa/th 三个低价值语言也下线，索引降到 ~800 |
| 5.4 | 外链建设启动 | 现有 3 个站外实体（PotatoPro / BrandsOfTheWorld / SeekLogo）已进 sameAs；需新增行业目录、B2B 平台、供应商名录 |

---

## 三、自动化校验脚本（每夜跑）

```bash
cd projects/potatoesflakes-astro
npx astro build && node scripts/verify.mjs
```

`scripts/verify.mjs` 断言项：
1. 每页 `rel="alternate"` = 14
2. 可索引页 `description` 长度 ∈ [50, 160]（先 unescape HTML 实体）
3. 可索引页 `title` 长度 ≤ 60（软告警，>70 报错）
4. 可索引页 title 无重复
5. sitemap 不含 `cart|checkout|my-account|/category/`
6. sitemap 含 lastmod
7. 内部链接断链 = 0
8. `/category/*`、`/cart/`、`/checkout/`、`/my-account/` 全部 noindex
9. `public/_redirects` 覆盖全部 48 个英文博客 slug × 13 语言
10. Organization schema 含 sameAs ≥ 3 条

---

## 四、风险与回滚

| 风险 | 缓解 |
|---|---|
| hreflang 全量重写导致短期排名波动 | 变更前 baseline 已记录；hreflang 变更是修正而非新增，Google 需 2-4 周重新聚类 |
| 559 条 301 触发 Cloudflare Pages 规则上限 | Pages 上限 2000 条动态规则，当前 627 条安全 |
| 42 页 noindex 可能误伤有价值页面 | 逐页确认：cart/checkout/my-account 为静态占位页；/category/* 与 /blog/、/product-category/* 完全重叠 |
| 295 篇 description 自动重写质量 | 已人工抽查 30 篇；若发现不自然，`git revert` 单个文件即可 |
| yua 下线丢 87 页 | 保留文件与路由，仅去 sitemap + noindex，可秒级恢复 |

**回滚**：每阶段独立 commit。`git revert <sha>` + 重新部署即可。

---

## 五、今晚执行清单（可直接照做）

```
[ ] 1. git add -A && git commit -m "fix(seo): hreflang 全量修复 + 559 条旧 URL 301 + 索引收量 + FAQPage/sameAs/img 尺寸"
[ ] 2. 打包源码 tar.gz（不含 node_modules / dist）
[ ] 3. 推 GitHub main
[ ] 4. 等 Cloudflare Pages 构建完成（约 3-5 min）
[ ] 5. 线上验证：curl 检查 hreflang=14、sitemap 1092、noindex 页、301 抽样
[ ] 6. GSC 重新提交 sitemap-index.xml
[ ] 7. GSC 网址检查 → 请求编入索引：/ 、/product/ 、/blog/ 、
       /product/potato-flakes-20kg/ 、/product/original-instant-mashed-potato-powder/ 、
       /product/bulk-french-fries-frozen-manufacturer-direct-mccain-potato/ 、
       /blog/top-10-potato-flakes-manufacturer-in-china/ 、
       /blog/potato-flakes-vs-mashed-potato-powder-differences-and-how-to-choose/ 、
       /blog/what-are-potato-flakes-things-you-may-not-know/
[ ] 8. 记录 baseline 到 audit/ 并设 48h 后复查提醒
```

---

## 六、预期时间线

| 时间 | 预期 |
|---|---|
| +3 天 | GSC 显示新 sitemap（1092 URL）已读取；301 开始传递 |
| +7 天 | 「已编入索引」数量开始变化；hreflang 集群重新识别 |
| +2 周 | `site:` 查询出现部分结果 |
| +4 周 | 若未恢复 → 执行 5.3 进一步收量 |
| +6-8 周 | 内容提质（Night 3-4）生效，核心词开始有展现 |
