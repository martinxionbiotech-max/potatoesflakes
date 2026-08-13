import { defineCollection, z } from 'astro:content';

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

export const collections = { products, blog, pages };
