// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://potatoesflakes.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      // 排除不应被索引的页面：购物车流程（静态目录无真实交易）与重复的 /category/ 路由
      filter: (page) => {
        const p = new URL(page).pathname;
        if (/^\/(cart|checkout|my-account)\/?$/.test(p)) return false;
        // /category/* 与 /product-category/*、/blog/ 重复，已 noindex
        if (/^\/[a-z]{2,3}\/category\//.test(p) || /^\/category\//.test(p)) return false;
        return true;
      },
      // 输出 lastmod，给搜索引擎一个重抓信号（取构建时间）
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  trailingSlash: 'always',
});
