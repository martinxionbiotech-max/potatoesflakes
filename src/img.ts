// 图片固有尺寸查询表，用于给 <img> 补 width/height，避免布局偏移（CLS）。
// 数据由 sharp 扫描 public/wp-content 生成（src/image-dims.json）。
import dimsData from './image-dims.json';

const dims: Record<string, [number, number]> = dimsData as Record<string, [number, number]>;

/** 返回可直接展开到 <img> 的 width/height 属性；查不到返回空对象（不编造尺寸） */
export function imgAttrs(src?: string | null): { width?: number; height?: number } {
  if (!src) return {};
  const key = src.startsWith('http') ? new URL(src).pathname : src;
  const d = dims[key];
  if (!d) return {};
  return { width: d[0], height: d[1] };
}
