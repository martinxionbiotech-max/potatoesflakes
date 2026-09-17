// 产品公开参考价格区间（B2B 询单模式）
// 用途：Product schema 的 AggregateOffer（lowPrice/highPrice/priceCurrency），
// 满足 GSC「应指定 price 或 priceSpecification.price（在 offers 中）」的验证要求。
//
// ⚠️ 只有业务方确认过的价格才能写入本文件。
// 未在此登记的分类：产品页保留询单型 Offer（不带 price），不会编造价格。
export interface PriceRange {
  /** 区间最低价（USD 数值） */
  low: number;
  /** 区间最高价（USD 数值） */
  high: number;
  /** 计价单位（如 'per metric ton' / 'per kg'） */
  unit: string;
  /** 起订量说明（如 'MOQ 5 tons'） */
  moq: string;
}

// key = product.data.category 分类 slug（多语言内容共用同一 slug，categoryName 是翻译文本不能用作 key）
// slug 取值：potato-flakes / frozen-french-fries / instant-mashed-potato / potato-starch / seed-potatoes
export const REFERENCE_PRICES: Record<string, PriceRange> = {
  'potato-flakes': { low: 1200, high: 1600, unit: 'per metric ton', moq: 'MOQ 5 tons' },
  'frozen-french-fries': { low: 1.1, high: 1.5, unit: 'per kg', moq: 'MOQ 20 tons' },
};

export function getPriceRange(categorySlug: string): PriceRange | undefined {
  return REFERENCE_PRICES[categorySlug];
}
