# releases/

本目录存放可交付的源码包快照，便于随时取回未经构建的完整源码。

## 为什么放这里

- 机器无 GitHub token 时也能拿到完整源码
- 每次重大修复后留一个可对照的时间点快照
- 包内**不含** `node_modules/`、`dist/`、`.astro/`、`.git/`

## 清单

| 文件 | 日期 | 大小 | SHA-256 | 说明 |
|---|---|---:|---|---|
| `potatoesflakes-src-20261112.tar.gz` | 2026-11-12 | 54 MB | `eff279630bdb287eb0246eb37d80c523b0d362747b066b2d6abe234dcd01bdcf` | SEO 全量修复版：hreflang 修复 + 559 条 301 + 索引收量 + FAQPage/sameAs/图片尺寸 |

## 使用

```bash
tar -xzf releases/potatoesflakes-src-20261112.tar.gz
cd potatoesflakes-astro
npm install
npm run build          # → dist/
node scripts/verify.mjs   # 11 项构建校验
```

## 校验

```bash
sha256sum releases/potatoesflakes-src-20261112.tar.gz
# 应等于上表值
```

## 注意

- 包体积主要来自 `public/wp-content/` 的 54 MB 图片（这些文件本身也在 git 里跟踪）。
  若只需代码，可直接 `git clone` 本仓库，无需下载 tarball。
- GitHub 对单文件 >50 MB 会给出警告（硬上限 100 MB）。当前包在限制内，但后续若继续增大，
  建议改用 GitHub Release 附件而非提交进 git 历史。
