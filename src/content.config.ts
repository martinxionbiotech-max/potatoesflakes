import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { LANGUAGES } from './languages';

// 注意：Astro 5 中 `slug` 是保留字段，由文件名自动生成（entry.id / entry.slug），
// 不能在 schema 中自定义 slug 字段。

const products = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),        // 产品分类 slug
    categoryName: z.string(),    // 产品分类显示名
    sku: z.string().optional(),
    image: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),         // YYYY-MM 或 YYYY-MM-DD
    category: z.string().optional(),
    image: z.string().optional(),
  }),
});

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

// 多语言集合：为每种语言建立独立的 products/blog/pages 集合
// 命名规则：<lang>_<type>，例如 yua_products = 繁中粤语版产品
// 内容放在 src/content/<lang>/<type>/ 目录，用 glob loader 显式指定 base
// generateId 只取文件名（不含子目录前缀），保证 slug 与英文版一致
function makeCollections(lang: string) {
  const base = `src/content/${lang}`;
  const idOf = ({ entry }: { entry: string }) => entry.split('/').pop()!.replace(/\.md$/, '');
  return {
    [`${lang}_products`]: defineCollection({
      loader: glob({ base, pattern: 'products/*.md', generateId: idOf }),
      schema: products.schema,
    }),
    [`${lang}_blog`]: defineCollection({
      loader: glob({ base, pattern: 'blog/*.md', generateId: idOf }),
      schema: blog.schema,
    }),
    [`${lang}_pages`]: defineCollection({
      loader: glob({ base, pattern: 'pages/*.md', generateId: idOf }),
      schema: pages.schema,
    }),
  };
}

export const collections = {
  products,
  blog,
  pages,
  // 多语言：为每种语言建立独立的 products/blog/pages 集合
  // 原站前缀：yua(粤语) vi th it ja tr pt es fa ko ms ar
  ...Object.assign({}, ...LANGUAGES.map((l) => makeCollections(l.code))),
};
