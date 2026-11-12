// 列表页 / 分类页的本地化 SEO 文案。
// ui.ts 里的 blogIntro / productsIntro 太短，不足以作为 meta description；
// 这里为各语言补一份可直接用于 title / description 的完整文案。

export interface ListSeo {
  blogTitle: string;
  blogDesc: string;
  productTitle: string;
  productDesc: string;
  /** 产品分类页在 cat.desc 后追加的一句补充（避免过短） */
  catSuffix: string;
  /** 首页 meta description（heroSub 过短时的替代文案） */
  homeDesc?: string;
}

export const LIST_SEO: Record<string, ListSeo> = {
  en: {
    blogTitle: 'Potato Flakes Blog: Guides, Recipes & Industry Insights',
    blogDesc:
      'Technical guides, application notes, recipes and market insights on potato flakes, instant mashed potato and frozen potato products, written by the XION production and QA team in Hebei, China.',
    productTitle: 'Bulk Potato Flakes, Instant Mashed Potato & Frozen Fries',
    productDesc:
      'Browse XION bulk potato flakes, flavoured instant mashed potato, frozen french fries, seed potatoes and native potato starch. Specifications, packaging options, MOQ and reference prices for B2B buyers.',
    catSuffix:
      'Specifications, packaging options, MOQ and reference pricing are listed on each product page; final quotation on request.',
  },
  ja: {
    blogTitle: 'ポテトフレーク専門ブログ｜技術解説・レシピ・業界動向',
    blogDesc:
      'ポテトフレーク、インスタントマッシュポテト、冷凍ポテト製品について、中国河北省のXION生産・品質管理チームが技術解説、用途別の知見、レシピ、市場動向をお届けします。',
    productTitle: '業務用ポテトフレーク・即席マッシュポテト・冷凍フライドポテト',
    productDesc:
      'XIONの業務用ポテトフレーク、フレーバー付きインスタントマッシュポテト、冷凍フライドポテト、種芋、天然ポテトスターチの一覧です。規格、包装、最小ロット、参考価格を掲載しています。',
    catSuffix: '各製品ページに規格・包装形態・最小ロット・参考価格を掲載しています。最終価格はお問い合わせください。',
  },
  ko: {
    blogTitle: '감자 플레이크 전문 블로그 | 기술 가이드·레시피·업계 동향',
    blogDesc:
      '감자 플레이크, 인스턴트 매시드 포테이토, 냉동 감자 제품에 관한 기술 가이드와 용도별 노하우, 레시피, 시장 동향을 중국 허베이성 XION 생산·품질관리팀이 정리해 전합니다.',
    productTitle: '업소용 감자 플레이크·인스턴트 매시드 포테이토·냉동 감자튀김',
    productDesc:
      'XION의 업소용 감자 플레이크, 향 첨가 인스턴트 매시드 포테이토, 냉동 감자튀김, 종서, 천연 감자 전분을 소개합니다. 규격, 포장 형태, 최소 주문량, 참고 가격을 확인하세요.',
    catSuffix: '각 제품 페이지에 규격, 포장 형태, 최소 주문량, 참고 가격을 안내하고 있습니다. 최종 견적은 문의해 주세요.',
  },
  yua: {
    blogTitle: '薯仔片專業博客｜技術指南、食譜同業界動向',
    blogDesc:
      '關於薯仔片（薯粉片）、即食薯蓉同急凍薯仔製品嘅技術指南、應用經驗、食譜同市場動向，由中國河北 XION 生產同品質管理團隊撰寫。',
    productTitle: '大批量薯仔片、即食薯蓉同急凍薯條',
    productDesc:
      'XION 大批量薯仔片、調味即食薯蓉、急凍薯條、種薯同天然薯仔澱粉一覽。每頁列明規格、包裝、起訂量同參考價，方便 B2B 買家採購。',
    catSuffix: '每款產品頁都列明規格、包裝方式、起訂量同參考價，最終報價歡迎查詢。',
  },
  es: {
    blogTitle: 'Blog de copos de patata: guías técnicas, recetas y tendencias',
    blogDesc:
      'Guías técnicas, notas de aplicación, recetas y análisis de mercado sobre copos de patata, puré instantáneo y productos de patata congelados, elaborados por el equipo de producción y calidad de XION.',
    productTitle: 'Copos de patata, puré instantáneo y patatas fritas congeladas',
    productDesc:
      'Catálogo de XION: copos de patata a granel, puré de patata instantáneo con sabores, patatas fritas congeladas, patatas de siembra y almidón nativo de patata. Especificaciones, envases, MOQ y precios de referencia.',
    catSuffix: 'Cada ficha de producto incluye especificaciones, formatos de envase, pedido mínimo y precio de referencia.',
  },
  pt: {
    blogTitle: 'Blog de flocos de batata: guias técnicos, receitas e tendências',
    blogDesc:
      'Guias técnicos, notas de aplicação, receitas e análises de mercado sobre flocos de batata, puré instantâneo e produtos de batata congelados, pela equipa de produção e qualidade da XION.',
    productTitle: 'Flocos de batata, puré instantâneo e batatas fritas congeladas',
    productDesc:
      'Catálogo XION: flocos de batata a granel, puré de batata instantâneo com sabores, batatas fritas congeladas, batata-semente e amido nativo de batata. Especificações, embalagens, MOQ e preços de referência.',
    catSuffix: 'Cada ficha de produto indica especificações, formatos de embalagem, quantidade mínima e preço de referência.',
  },
  it: {
    blogTitle: 'Blog sui fiocchi di patata: guide tecniche, ricette e tendenze',
    blogDesc:
      'Guide tecniche, note applicative, ricette e analisi di mercato su fiocchi di patata, purè istantaneo e prodotti di patata surgelati, a cura del team di produzione e qualità XION.',
    productTitle: 'Fiocchi di patata, purè istantaneo e patatine surgelate',
    productDesc:
      'Catalogo XION: fiocchi di patata sfusi, purè di patata istantaneo aromatizzato, patatine fritte surgelate, patate da seme e amido nativo di patata. Specifiche, imballaggi, MOQ e prezzi indicativi.',
    catSuffix: 'Ogni scheda prodotto riporta specifiche, formati di imballaggio, quantità minima e prezzo indicativo.',
  },
  tr: {
    blogTitle: 'Patates pulu blogu: teknik rehberler, tarifler ve sektör trendleri',
    blogDesc:
      'Patates pulu, hazır patates püresi ve dondurulmuş patates ürünleri hakkında teknik rehberler, uygulama notları, tarifler ve pazar analizleri; XION üretim ve kalite ekibi tarafından hazırlanır.',
    productTitle: 'Toplu patates pulu, hazır patates püresi ve dondurulmuş patates',
    productDesc:
      'XION kataloğu: toplu patates pulu, aromalı hazır patates püresi, dondurulmuş patates kızartması, tohumluk patates ve doğal patates nişastası. Teknik özellikler, ambalaj, MOQ ve referans fiyatlar.',
    catSuffix: 'Her ürün sayfasında teknik özellikler, ambalaj seçenekleri, minimum sipariş ve referans fiyat yer alır.',
  },
  fa: {
    blogTitle: 'وبلاگ پولک سیب‌زمینی: راهنماهای فنی، دستور پخت و روند بازار',
    blogDesc:
      'راهنماهای فنی، نکات کاربرد، دستور پخت و تحلیل بازار درباره پولک سیب‌زمینی، پوره فوری و محصولات منجمد سیب‌زمینی، تهیه‌شده توسط تیم تولید و کنترل کیفیت XION در هبی چین.',
    productTitle: 'پولک سیب‌زمینی عمده، پوره فوری و سیب‌زمینی سرخ‌کرده منجمد',
    productDesc:
      'کاتالوگ XION: پولک سیب‌زمینی عمده، پوره سیب‌زمینی فوری طعم‌دار، سیب‌زمینی سرخ‌کرده منجمد، سیب‌زمینی بذری و نشاسته طبیعی سیب‌زمینی. مشخصات، بسته‌بندی، حداقل سفارش و قیمت مرجع.',
    catSuffix: 'در هر صفحه محصول مشخصات، گزینه‌های بسته‌بندی، حداقل سفارش و قیمت مرجع درج شده است.',
  },
  ms: {
    blogTitle: 'Blog kepingan kentang: panduan teknikal, resipi dan trend industri',
    blogDesc:
      'Panduan teknikal, nota aplikasi, resipi dan analisis pasaran tentang kepingan kentang, puri kentang segera dan produk kentang beku, disediakan oleh pasukan pengeluaran dan kawalan mutu XION.',
    productTitle: 'Kepingan kentang pukal, puri segera dan kentang goreng beku',
    productDesc:
      'Katalog XION: kepingan kentang pukal, puri kentang segera berperisa, kentang goreng beku, kentang benih dan kanji kentang asli. Spesifikasi, pilihan pembungkusan, MOQ dan harga rujukan.',
    catSuffix: 'Setiap halaman produk menyenaraikan spesifikasi, pilihan pembungkusan, kuantiti pesanan minimum dan harga rujukan.',
  },
  ar: {
    blogTitle: 'مدونة رقائق البطاطس: أدلة فنية ووصفات واتجاهات السوق',
    blogDesc:
      'أدلة فنية وملاحظات تطبيقية ووصفات وتحليلات سوق حول رقائق البطاطس والبطاطس المهروسة الفورية ومنتجات البطاطس المجمدة، يعدها فريق الإنتاج ومراقبة الجودة في XION بمقاطعة خبي الصينية.',
    productTitle: 'رقائق البطاطس بالجملة والبطاطس المهروسة الفورية والبطاطس المجمدة',
    productDesc:
      'كتالوج XION: رقائق بطاطس بالجملة، بطاطس مهروسة فورية بنكهات، بطاطس مقلية مجمدة، بطاطس تقاوي ونشا بطاطس طبيعي. المواصفات وخيارات التعبئة والحد الأدنى للطلب وأسعار مرجعية.',
    catSuffix: 'تعرض كل صفحة منتج المواصفات وخيارات التعبئة والحد الأدنى للطلب والسعر المرجعي، والعرق النهائي عند الطلب.',
  },
  th: {
    blogTitle: 'บล็อกเกล็ดมันฝรั่ง: คู่มือเทคนิค สูตรอาหาร และแนวโน้มอุตสาหกรรม',
    blogDesc:
      'คู่มือเทคนิค บันทึกการใช้งาน สูตรอาหาร และบทวิเคราะห์ตลาดเกี่ยวกับเกล็ดมันฝรั่ง มันฝรั่งบดสำเร็จรูป และผลิตภัณฑ์มันฝรั่งแช่แข็ง จัดทำโดยทีมผลิตและควบคุมคุณภาพของ XION',
    productTitle: 'เกล็ดมันฝรั่งจำนวนมาก มันฝรั่งบดสำเร็จรูป และมันฝรั่งทอดแช่แข็ง',
    productDesc:
      'แคตตาล็อก XION: เกล็ดมันฝรั่งจำนวนมาก มันฝรั่งบดสำเร็จรูปปรุงรส มันฝรั่งทอดแช่แข็ง มันฝรั่งพันธุ์ปลูก และแป้งมันฝรั่งธรรมชาติ พร้อมสเปก บรรจุภัณฑ์ MOQ และราคาอ้างอิง',
    catSuffix: 'แต่ละหน้าสินค้าระบุสเปก ตัวเลือกบรรจุภัณฑ์ ปริมาณสั่งซื้อขั้นต่ำ และราคาอ้างอิง',
  },
  vi: {
    blogTitle: 'Blog vảy khoai tây: hướng dẫn kỹ thuật, công thức và xu hướng',
    blogDesc:
      'Hướng dẫn kỹ thuật, ghi chú ứng dụng, công thức và phân tích thị trường về vảy khoai tây, khoai tây nghiền ăn liền và sản phẩm khoai tây đông lạnh, do đội sản xuất và QA của XION thực hiện.',
    productTitle: 'Vảy khoai tây số lượng lớn, khoai tây nghiền và khoai tây chiên đông lạnh',
    productDesc:
      'Danh mục XION: vảy khoai tây số lượng lớn, khoai tây nghiền ăn liền có hương vị, khoai tây chiên đông lạnh, khoai tây giống và tinh bột khoai tây tự nhiên. Thông số, bao bì, MOQ và giá tham khảo.',
    catSuffix: 'Mỗi trang sản phẩm nêu rõ thông số, hình thức đóng gói, số lượng đặt tối thiểu và giá tham khảo.',
  },
};

export function listSeo(lang: string): ListSeo {
  return LIST_SEO[lang] ?? LIST_SEO.en;
}

// 首页 meta description：ui.ts 的 heroSub 在部分语言下过短（<50 字符），
// 这里提供完整版文案，专用于 <meta name="description">。
export const HOME_DESC: Record<string, string> = {
  en: 'XION is a Chinese manufacturer and exporter of bulk potato flakes, flavoured instant mashed potato and frozen potato products, supplying food processors, importers and private-label buyers worldwide.',
  ja: 'XIONは中国河北省の業務用ポテトフレーク・インスタントマッシュポテトメーカーです。食品工場、輸入業者、PB向けに、規格・包装・OEMを柔軟にご提案し、20カ国以上へ輸出しています。',
  ko: 'XION은 중국 허베이성의 업소용 감자 플레이크·인스턴트 매시드 포테이토 제조사입니다. 식품 가공업체, 수입업체, 자체 브랜드 구매자를 위해 규격과 포장, OEM을 유연하게 지원합니다.',
  yua: 'XION 係中國河北嘅業務用薯仔片同即食薯蓉製造商，專為食品廠、進口商同自家品牌客戶供貨，提供規格、包裝同 OEM 定製，產品出口 20 個以上國家。',
  es: 'XION es un fabricante y exportador chino de copos de patata a granel, puré de patata instantáneo con sabores y productos de patata congelados para fábricas de alimentos, importadores y marcas blancas.',
  pt: 'A XION é uma fabricante e exportadora chinesa de flocos de batata a granel, puré de batata instantâneo com sabores e produtos de batata congelados, para indústrias alimentares, importadores e marcas próprias.',
  it: 'XION è un produttore ed esportatore cinese di fiocchi di patata sfusi, purè di patata istantaneo aromatizzato e prodotti di patata surgelati per industrie alimentari, importatori e private label.',
  tr: 'XION; toplu patates pulu, aromalı hazır patates püresi ve dondurulmuş patates ürünleri üreten ve ihraç eden bir Çinli üreticidir. Gıda işletmeleri, ithalatçılar ve özel etiketli alıcılara tedarik sağlar.',
  fa: 'XION یک تولیدکننده و صادرکننده چینی پولک سیب‌زمینی عمده، پوره سیب‌زمینی فوری طعم‌دار و محصولات منجمد سیب‌زمینی برای کارخانه‌های مواد غذایی، واردکنندگان و برندهای اختصاصی است.',
  ms: 'XION ialah pengeluar dan pengeksport China bagi kepingan kentang pukal, puri kentang segera berperisa dan produk kentang beku untuk kilang makanan, pengimport dan pembeli label peribadi di seluruh dunia.',
  ar: 'XION مصنع ومصدّر صيني لرقائق البطاطس بالجملة والبطاطس المهروسة الفورية المنكهة ومنتجات البطاطس المجمدة، يورّد لمصانع الأغذية والمستوردين وأصحاب العلامات الخاصة حول العالم.',
  th: 'XION เป็นผู้ผลิตและผู้ส่งออกเกล็ดมันฝรั่งจำนวนมาก มันฝรั่งบดสำเร็จรูปปรุงรส และผลิตภัณฑ์มันฝรั่งแช่แข็งจากจีน สำหรับโรงงานอาหาร ผู้นำเข้า และแบรนด์ของลูกค้า',
  vi: 'XION là nhà sản xuất và xuất khẩu Trung Quốc các sản phẩm vảy khoai tây số lượng lớn, khoai tây nghiền ăn liền có hương vị và khoai tây đông lạnh, cung cấp cho nhà máy thực phẩm, nhà nhập khẩu và nhãn riêng.',
};
