// 每种语言的 UI 文案字典（路由里硬编码的界面文字）
// code -> 字典。key 固定，value 是翻译后的界面文字。
export interface UIDict {
  home: string;
  products: string;
  blog: string;
  requestQuote: string;
  oemCustom: string;
  publishedDate: string;
  skuLabel: string;
  noImage: string;
  productsIntro: string;
  blogIntro: string;
  // 站点导航项（Header 用）
  nav: Record<string, string>;
  // 分类名（产品分类 + 博客分类）
  productCategories: Record<string, { name: string; desc: string }>;
  blogCategories: Record<string, { name: string; desc: string }>;
}

// 产品分类 slug
export const PRODUCT_CATEGORY_SLUGS = [
  'instant-mashed-potato',
  'potato-flakes',
  'frozen-french-fries',
  'seed-potatoes',
  'potato-starch',
] as const;

// 博客分类 slug
export const BLOG_CATEGORY_SLUGS = [
  'mashed-potatoes-recipe',
  'potato-flakes-and-flavored-mashed-potato-blog',
  'potato-products',
] as const;

// 英文基准（默认）
const en: UIDict = {
  home: 'Home',
  products: 'Products',
  blog: 'Blog',
  requestQuote: 'Request a Quote',
  oemCustom: 'OEM / Custom',
  publishedDate: 'Published',
  skuLabel: 'SKU',
  noImage: 'No image',
  productsIntro: 'Potato flakes and flavored instant mashed potatoes are our core products.',
  blogIntro: 'Potato flakes guides, recipes and industry insights.',
  nav: {
    home: 'Home',
    'about-us': 'About Us',
    'brand-story': 'Brand Story',
    product: 'Product',
    production: 'Production',
    services: 'Services',
    blog: 'Blog',
    contact: 'Contact',
  },
  productCategories: {
    'instant-mashed-potato': { name: 'Instant Mashed Potato OEM', desc: 'Flavored instant mashed potato powder OEM supply with multiple flavors and custom packaging.' },
    'potato-flakes': { name: 'Potato Flakes Wholesale', desc: 'We are a potato flakes manufacturer based in Hebei Province, China with an annual capacity of 10,000 tons.' },
    'frozen-french-fries': { name: 'Frozen French Fries', desc: 'Crinkle-cut and straight-cut frozen french fries, direct from the manufacturer.' },
    'seed-potatoes': { name: 'Seed Potatoes', desc: 'Quality seed potatoes for sale, popular potato seed varieties in China.' },
    'potato-starch': { name: 'Potato Starch', desc: 'Original unmodified potato starch wholesale, native manufacturer in Hebei, China.' },
  },
  blogCategories: {
    'mashed-potatoes-recipe': { name: 'Mashed Potatoes Recipe', desc: 'Delicious mashed potato recipes using XION potato flakes and instant mashed potatoes.' },
    'potato-flakes-and-flavored-mashed-potato-blog': { name: 'Potato Flakes and Flavored Mashed Potato', desc: 'Guides, comparisons and industry insights on potato flakes and flavored mashed potatoes.' },
    'potato-products': { name: 'Potato Products', desc: 'Industry news and product insights.' },
  },
};

// 自动生成的多语言 UI 文案（来源：gen_ui.py + DeepSeek）
const translations: Record<string, UIDict> = {
  yua: {
  "home": "主頁",
  "products": "產品",
  "blog": "博客",
  "requestQuote": "索取報價",
  "oemCustom": "OEM / 定制",
  "publishedDate": "發布日期",
  "skuLabel": "貨號",
  "noImage": "沒有圖片",
  "productsIntro": "薯粉片及調味即食薯蓉係我哋嘅核心產品。",
  "blogIntro": "薯粉片指南、食譜及行業見解。",
  "nav": {
    "home": "主頁",
    "about-us": "關於我哋",
    "brand-story": "品牌故事",
    "product": "產品",
    "production": "生產",
    "services": "服務",
    "blog": "博客",
    "contact": "聯絡我哋"
  },
  "productCategories": {
    "instant-mashed-potato": {
      "name": "即食薯蓉批發 OEM",
      "desc": "調味即食薯蓉粉 OEM 供應，多種口味及包裝定制。"
    },
    "potato-flakes": {
      "name": "薯粉片批發",
      "desc": "我哋係位於中國河北省嘅薯粉片製造商，年產能達 10,000 噸。"
    },
    "frozen-french-fries": {
      "name": "急凍薯條",
      "desc": "波浪紋及直切急凍薯條，廠家直供。"
    },
    "seed-potatoes": {
      "name": "種薯",
      "desc": "優質種薯出售，中國熱門馬鈴薯種薯品種。"
    },
    "potato-starch": {
      "name": "馬鈴薯澱粉",
      "desc": "原裝未改性馬鈴薯澱粉批發，中國河北原產地製造商。"
    }
  },
  "blogCategories": {
    "mashed-potatoes-recipe": {
      "name": "薯蓉食譜",
      "desc": "用 XION 薯粉片及即食薯蓉炮製嘅美味薯蓉食譜。"
    },
    "potato-flakes-and-flavored-mashed-potato-blog": {
      "name": "薯粉片及調味薯蓉",
      "desc": "關於薯粉片及調味薯蓉嘅指南、比較及行業見解。"
    },
    "potato-products": {
      "name": "馬鈴薯產品",
      "desc": "行業新聞及產品見解。"
    }
  }
},
  vi: {
  "home": "Trang chủ",
  "products": "Sản phẩm",
  "blog": "Blog",
  "requestQuote": "Yêu cầu báo giá",
  "oemCustom": "OEM / Tùy chỉnh",
  "publishedDate": "Ngày xuất bản",
  "skuLabel": "Mã SKU",
  "noImage": "Không có hình ảnh",
  "productsIntro": "Vảy khoai tây và khoai tây nghiền hòa tan có hương vị là sản phẩm cốt lõi của chúng tôi.",
  "blogIntro": "Hướng dẫn về vảy khoai tây, công thức nấu ăn và hiểu biết sâu sắc về ngành.",
  "nav": {
    "home": "Trang chủ",
    "about-us": "Về chúng tôi",
    "brand-story": "Câu chuyện thương hiệu",
    "product": "Sản phẩm",
    "production": "Sản xuất",
    "services": "Dịch vụ",
    "blog": "Blog",
    "contact": "Liên hệ"
  },
  "productCategories": {
    "instant-mashed-potato": {
      "name": "OEM Khoai tây nghiền hòa tan",
      "desc": "Cung cấp OEM bột khoai tây nghiền hòa tan có hương vị với nhiều hương vị và bao bì tùy chỉnh."
    },
    "potato-flakes": {
      "name": "Bán buôn vảy khoai tây",
      "desc": "Chúng tôi là nhà sản xuất vảy khoai tây có trụ sở tại tỉnh Hà Bắc, Trung Quốc với công suất hàng năm 10.000 tấn."
    },
    "frozen-french-fries": {
      "name": "Khoai tây chiên đông lạnh",
      "desc": "Khoai tây chiên đông lạnh cắt sóng và cắt thẳng, trực tiếp từ nhà sản xuất."
    },
    "seed-potatoes": {
      "name": "Khoai tây giống",
      "desc": "Khoai tây giống chất lượng để bán, các giống khoai tây phổ biến tại Trung Quốc."
    },
    "potato-starch": {
      "name": "Tinh bột khoai tây",
      "desc": "Bán buôn tinh bột khoai tây nguyên chất chưa biến tính, nhà sản xuất bản địa tại Hà Bắc, Trung Quốc."
    }
  },
  "blogCategories": {
    "mashed-potatoes-recipe": {
      "name": "Công thức khoai tây nghiền",
      "desc": "Công thức khoai tây nghiền ngon sử dụng vảy khoai tây XION và khoai tây nghiền hòa tan."
    },
    "potato-flakes-and-flavored-mashed-potato-blog": {
      "name": "Vảy khoai tây và khoai tây nghiền hòa tan có hương vị",
      "desc": "Hướng dẫn, so sánh và hiểu biết sâu sắc về ngành đối với vảy khoai tây và khoai tây nghiền hòa tan có hương vị."
    },
    "potato-products": {
      "name": "Sản phẩm khoai tây",
      "desc": "Tin tức ngành và hiểu biết sâu sắc về sản phẩm."
    }
  }
},
  th: {
  "home": "หน้าแรก",
  "products": "สินค้า",
  "blog": "บล็อก",
  "requestQuote": "ขอใบเสนอราคา",
  "oemCustom": "OEM / ตามสั่ง",
  "publishedDate": "เผยแพร่เมื่อ",
  "skuLabel": "SKU",
  "noImage": "ไม่มีรูปภาพ",
  "productsIntro": "เกล็ดมันฝรั่งและมันฝรั่งบดสำเร็จรูปปรุงรสเป็นผลิตภัณฑ์หลักของเรา",
  "blogIntro": "คำแนะนำเกี่ยวกับเกล็ดมันฝรั่ง สูตรอาหาร และข้อมูลเชิงลึกในอุตสาหกรรม",
  "nav": {
    "home": "หน้าแรก",
    "about-us": "เกี่ยวกับเรา",
    "brand-story": "เรื่องราวแบรนด์",
    "product": "ผลิตภัณฑ์",
    "production": "การผลิต",
    "services": "บริการ",
    "blog": "บล็อก",
    "contact": "ติดต่อเรา"
  },
  "productCategories": {
    "instant-mashed-potato": {
      "name": "มันฝรั่งบดสำเร็จรูป OEM",
      "desc": "จำหน่ายผงมันฝรั่งบดสำเร็จรูปปรุงรสแบบ OEM หลากหลายรสชาติและบรรจุภัณฑ์ที่กำหนดเอง"
    },
    "potato-flakes": {
      "name": "เกล็ดมันฝรั่งขายส่ง",
      "desc": "เราเป็นผู้ผลิตเกล็ดมันฝรั่งในมณฑลเหอเป่ย์ ประเทศจีน กำลังการผลิต 10,000 ตันต่อปี"
    },
    "frozen-french-fries": {
      "name": "เฟรนช์ฟรายส์แช่แข็ง",
      "desc": "เฟรนช์ฟรายส์แช่แข็งแบบหยักและแบบตรง ส่งตรงจากผู้ผลิต"
    },
    "seed-potatoes": {
      "name": "มันฝรั่งพันธุ์",
      "desc": "จำหน่ายมันฝรั่งพันธุ์คุณภาพ พันธุ์ยอดนิยมในประเทศจีน"
    },
    "potato-starch": {
      "name": "แป้งมันฝรั่ง",
      "desc": "ขายส่งแป้งมันฝรั่งดั้งเดิมไม่ดัดแปลง ผู้ผลิตในท้องถิ่นในมณฑลเหอเป่ย์ ประเทศจีน"
    }
  },
  "blogCategories": {
    "mashed-potatoes-recipe": {
      "name": "สูตรมันฝรั่งบด",
      "desc": "สูตรมันฝรั่งบดแสนอร่อยโดยใช้เกล็ดมันฝรั่ง XION และมันฝรั่งบดสำเร็จรูป"
    },
    "potato-flakes-and-flavored-mashed-potato-blog": {
      "name": "เกล็ดมันฝรั่งและมันฝรั่งบดปรุงรส",
      "desc": "คำแนะนำ การเปรียบเทียบ และข้อมูลเชิงลึกในอุตสาหกรรมเกี่ยวกับเกล็ดมันฝรั่งและมันฝรั่งบดปรุงรส"
    },
    "potato-products": {
      "name": "ผลิตภัณฑ์มันฝรั่ง",
      "desc": "ข่าวสารอุตสาหกรรมและข้อมูลเชิงลึกเกี่ยวกับผลิตภัณฑ์"
    }
  }
},
  it: {
  "home": "Home",
  "products": "Prodotti",
  "blog": "Blog",
  "requestQuote": "Richiedi un preventivo",
  "oemCustom": "OEM / Personalizzato",
  "publishedDate": "Pubblicato",
  "skuLabel": "SKU",
  "noImage": "Nessuna immagine",
  "productsIntro": "I fiocchi di patata e il purè di patate istantaneo aromatizzato sono i nostri prodotti principali.",
  "blogIntro": "Guide sui fiocchi di patata, ricette e approfondimenti del settore.",
  "nav": {
    "home": "Home",
    "about-us": "Chi Siamo",
    "brand-story": "Storia del Marchio",
    "product": "Prodotto",
    "production": "Produzione",
    "services": "Servizi",
    "blog": "Blog",
    "contact": "Contatti"
  },
  "productCategories": {
    "instant-mashed-potato": {
      "name": "Purè di Patate Istantaneo OEM",
      "desc": "Fornitura OEM di purè di patate istantaneo aromatizzato con più gusti e confezioni personalizzate."
    },
    "potato-flakes": {
      "name": "Vendita all'ingrosso di Fiocchi di Patata",
      "desc": "Siamo un produttore di fiocchi di patata con sede nella provincia di Hebei, in Cina, con una capacità annuale di 10.000 tonnellate."
    },
    "frozen-french-fries": {
      "name": "Patatine Fritte Surgelate",
      "desc": "Patatine fritte surgelate taglio ondulato e dritto, direttamente dal produttore."
    },
    "seed-potatoes": {
      "name": "Patate da Seme",
      "desc": "Patate da seme di qualità in vendita, varietà popolari di patate da seme in Cina."
    },
    "potato-starch": {
      "name": "Amido di Patata",
      "desc": "Vendita all'ingrosso di amido di patata originale non modificato, produttore nativo nella provincia di Hebei, in Cina."
    }
  },
  "blogCategories": {
    "mashed-potatoes-recipe": {
      "name": "Ricette di Purè di Patate",
      "desc": "Deliziose ricette di purè di patate utilizzando i fiocchi di patata XION e il purè di patate istantaneo."
    },
    "potato-flakes-and-flavored-mashed-potato-blog": {
      "name": "Fiocchi di Patata e Purè di Patate Aromatizzato",
      "desc": "Guide, confronti e approfondimenti del settore su fiocchi di patata e purè di patate aromatizzato."
    },
    "potato-products": {
      "name": "Prodotti a Base di Patata",
      "desc": "Notizie del settore e approfondimenti sui prodotti."
    }
  }
},
  ja: {
  "home": "ホーム",
  "products": "製品",
  "blog": "ブログ",
  "requestQuote": "見積もりを依頼する",
  "oemCustom": "OEM / カスタム",
  "publishedDate": "公開日",
  "skuLabel": "SKU",
  "noImage": "画像なし",
  "productsIntro": "ポテトフレークとフレーバー付きインスタントマッシュポテトが当社の主力製品です。",
  "blogIntro": "ポテトフレークのガイド、レシピ、業界情報。",
  "nav": {
    "home": "ホーム",
    "about-us": "会社概要",
    "brand-story": "ブランドストーリー",
    "product": "製品",
    "production": "生産",
    "services": "サービス",
    "blog": "ブログ",
    "contact": "お問い合わせ"
  },
  "productCategories": {
    "instant-mashed-potato": {
      "name": "インスタントマッシュポテトOEM",
      "desc": "多種多様なフレーバーとカスタムパッケージに対応した、フレーバー付きインスタントマッシュポテトパウダーのOEM供給。"
    },
    "potato-flakes": {
      "name": "ポテトフレーク卸売",
      "desc": "中国河北省に拠点を置くポテトフレークメーカーで、年間生産能力は10,000トンです。"
    },
    "frozen-french-fries": {
      "name": "冷凍フライドポテト",
      "desc": "ウェーブカットとストレートカットの冷凍フライドポテトをメーカーから直接お届けします。"
    },
    "seed-potatoes": {
      "name": "種芋",
      "desc": "高品質の種芋を販売。中国で人気のジャガイモ品種を取り揃えています。"
    },
    "potato-starch": {
      "name": "馬鈴薯でん粉",
      "desc": "中国河北省のメーカー直販による、未加工の馬鈴薯でん粉の卸売。"
    }
  },
  "blogCategories": {
    "mashed-potatoes-recipe": {
      "name": "マッシュポテトレシピ",
      "desc": "XIONポテトフレークとインスタントマッシュポテトを使った美味しいマッシュポテトレシピ。"
    },
    "potato-flakes-and-flavored-mashed-potato-blog": {
      "name": "ポテトフレークとフレーバー付きマッシュポテト",
      "desc": "ポテトフレークとフレーバー付きマッシュポテトに関するガイド、比較、業界情報。"
    },
    "potato-products": {
      "name": "ポテト製品",
      "desc": "業界ニュースと製品情報。"
    }
  }
},
  tr: {
  "home": "Ana Sayfa",
  "products": "Ürünler",
  "blog": "Blog",
  "requestQuote": "Teklif İste",
  "oemCustom": "OEM / Özel",
  "publishedDate": "Yayınlanma",
  "skuLabel": "SKU",
  "noImage": "Görsel yok",
  "productsIntro": "Patates pulları ve aromalı hazır patates püresi ana ürünlerimizdir.",
  "blogIntro": "Patates pulları rehberleri, tarifler ve sektör içgörüleri.",
  "nav": {
    "home": "Ana Sayfa",
    "about-us": "Hakkımızda",
    "brand-story": "Marka Hikayesi",
    "product": "Ürün",
    "production": "Üretim",
    "services": "Hizmetler",
    "blog": "Blog",
    "contact": "İletişim"
  },
  "productCategories": {
    "instant-mashed-potato": {
      "name": "Hazır Patates Püresi OEM",
      "desc": "Çoklu aromalar ve özel paketleme ile aromalı hazır patates püresi tozu OEM tedariki."
    },
    "potato-flakes": {
      "name": "Patates Pulu Toptan Satışı",
      "desc": "Çin'in Hebei Eyaleti'nde yıllık 10.000 ton kapasiteli bir patates pulu üreticisiyiz."
    },
    "frozen-french-fries": {
      "name": "Dondurulmuş Patates Kızartması",
      "desc": "Dalgalı ve düz kesim dondurulmuş patates kızartması, doğrudan üreticiden."
    },
    "seed-potatoes": {
      "name": "Tohumluk Patates",
      "desc": "Satılık kaliteli tohumluk patatesler, Çin'de popüler patates tohumu çeşitleri."
    },
    "potato-starch": {
      "name": "Patates Nişastası",
      "desc": "Orijinal modifiye edilmemiş patates nişastası toptan satışı, Çin Hebei'de yerli üretici."
    }
  },
  "blogCategories": {
    "mashed-potatoes-recipe": {
      "name": "Patates Püresi Tarifi",
      "desc": "XION patates pulları ve hazır patates püresi kullanılarak yapılan lezzetli patates püresi tarifleri."
    },
    "potato-flakes-and-flavored-mashed-potato-blog": {
      "name": "Patates Pulları ve Aromalı Patates Püresi",
      "desc": "Patates pulları ve aromalı patates püresi hakkında rehberler, karşılaştırmalar ve sektör içgörüleri."
    },
    "potato-products": {
      "name": "Patates Ürünleri",
      "desc": "Sektör haberleri ve ürün içgörüleri."
    }
  }
},
  pt: {
  "home": "Início",
  "products": "Produtos",
  "blog": "Blog",
  "requestQuote": "Solicitar um Orçamento",
  "oemCustom": "OEM / Personalizado",
  "publishedDate": "Publicado",
  "skuLabel": "SKU",
  "noImage": "Sem imagem",
  "productsIntro": "Flocos de batata e puré de batata instantâneo com sabor são os nossos produtos principais.",
  "blogIntro": "Guias de flocos de batata, receitas e informações do setor.",
  "nav": {
    "home": "Início",
    "about-us": "Sobre Nós",
    "brand-story": "História da Marca",
    "product": "Produto",
    "production": "Produção",
    "services": "Serviços",
    "blog": "Blog",
    "contact": "Contacto"
  },
  "productCategories": {
    "instant-mashed-potato": {
      "name": "Puré de Batata Instantâneo OEM",
      "desc": "Fornecimento OEM de puré de batata instantâneo com sabor, com vários sabores e embalagem personalizada."
    },
    "potato-flakes": {
      "name": "Flocos de Batata por Grosso",
      "desc": "Somos um fabricante de flocos de batata baseado na Província de Hebei, China, com uma capacidade anual de 10.000 toneladas."
    },
    "frozen-french-fries": {
      "name": "Batatas Fritas Congeladas",
      "desc": "Batatas fritas congeladas onduladas e retas, diretamente do fabricante."
    },
    "seed-potatoes": {
      "name": "Batatas de Semente",
      "desc": "Batatas de semente de qualidade à venda, variedades populares de batata de semente na China."
    },
    "potato-starch": {
      "name": "Amido de Batata",
      "desc": "Amido de batata original não modificado por grosso, fabricante nativo em Hebei, China."
    }
  },
  "blogCategories": {
    "mashed-potatoes-recipe": {
      "name": "Receita de Puré de Batata",
      "desc": "Receitas deliciosas de puré de batata usando flocos de batata XION e puré de batata instantâneo."
    },
    "potato-flakes-and-flavored-mashed-potato-blog": {
      "name": "Flocos de Batata e Puré de Batata com Sabor",
      "desc": "Guias, comparações e informações do setor sobre flocos de batata e puré de batata com sabor."
    },
    "potato-products": {
      "name": "Produtos de Batata",
      "desc": "Notícias do setor e informações sobre produtos."
    }
  }
},
  es: {
  "home": "Inicio",
  "products": "Productos",
  "blog": "Blog",
  "requestQuote": "Solicitar presupuesto",
  "oemCustom": "OEM / Personalizado",
  "publishedDate": "Publicado",
  "skuLabel": "SKU",
  "noImage": "Sin imagen",
  "productsIntro": "Los copos de patata y el puré de patatas instantáneo con sabor son nuestros productos principales.",
  "blogIntro": "Guías de copos de patata, recetas y perspectivas de la industria.",
  "nav": {
    "home": "Inicio",
    "about-us": "Sobre nosotros",
    "brand-story": "Historia de la marca",
    "product": "Producto",
    "production": "Producción",
    "services": "Servicios",
    "blog": "Blog",
    "contact": "Contacto"
  },
  "productCategories": {
    "instant-mashed-potato": {
      "name": "Puré de patata instantáneo OEM",
      "desc": "Suministro OEM de puré de patata instantáneo con sabor, con múltiples sabores y empaque personalizado."
    },
    "potato-flakes": {
      "name": "Venta al por mayor de copos de patata",
      "desc": "Somos un fabricante de copos de patata con sede en la provincia de Hebei, China, con una capacidad anual de 10,000 toneladas."
    },
    "frozen-french-fries": {
      "name": "Patatas fritas congeladas",
      "desc": "Patatas fritas congeladas de corte ondulado y recto, directamente del fabricante."
    },
    "seed-potatoes": {
      "name": "Patatas de siembra",
      "desc": "Patatas de siembra de calidad a la venta, variedades populares de patata de siembra en China."
    },
    "potato-starch": {
      "name": "Almidón de patata",
      "desc": "Venta al por mayor de almidón de patata original sin modificar, fabricante nativo en Hebei, China."
    }
  },
  "blogCategories": {
    "mashed-potatoes-recipe": {
      "name": "Recetas de puré de patatas",
      "desc": "Deliciosas recetas de puré de patatas con copos de patata XION y puré de patatas instantáneo."
    },
    "potato-flakes-and-flavored-mashed-potato-blog": {
      "name": "Copos de patata y puré de patatas con sabor",
      "desc": "Guías, comparaciones y perspectivas de la industria sobre copos de patata y puré de patatas con sabor."
    },
    "potato-products": {
      "name": "Productos de patata",
      "desc": "Noticias de la industria y perspectivas de productos."
    }
  }
},
  fa: {
  "home": "خانه",
  "products": "محصولات",
  "blog": "وبلاگ",
  "requestQuote": "درخواست قیمت",
  "oemCustom": "OEM / سفارشی",
  "publishedDate": "منتشر شده",
  "skuLabel": "SKU",
  "noImage": "بدون تصویر",
  "productsIntro": "پرک سیب‌زمینی و پوره سیب‌زمینی فوری طعم‌دار محصولات اصلی ما هستند.",
  "blogIntro": "راهنماهای پرک سیب‌زمینی، دستور پخت و بینش‌های صنعت.",
  "nav": {
    "home": "خانه",
    "about-us": "درباره ما",
    "brand-story": "داستان برند",
    "product": "محصول",
    "production": "تولید",
    "services": "خدمات",
    "blog": "وبلاگ",
    "contact": "تماس"
  },
  "productCategories": {
    "instant-mashed-potato": {
      "name": "OEM پوره سیب‌زمینی فوری",
      "desc": "تأمین OEM پودر پوره سیب‌زمینی فوری طعم‌دار با طعم‌های متعدد و بسته‌بندی سفارشی."
    },
    "potato-flakes": {
      "name": "عمده فروشی پرک سیب‌زمینی",
      "desc": "ما تولیدکننده پرک سیب‌زمینی در استان هبی چین هستیم با ظرفیت سالانه ۱۰,۰۰۰ تن."
    },
    "frozen-french-fries": {
      "name": "سیب‌زمینی سرخ‌کرده منجمد",
      "desc": "سیب‌زمینی سرخ‌کرده منجمد برش راه‌راه و مستقیم، مستقیم از تولیدکننده."
    },
    "seed-potatoes": {
      "name": "بذر سیب‌زمینی",
      "desc": "بذر سیب‌زمینی با کیفیت برای فروش، ارقام محبوب بذر سیب‌زمینی در چین."
    },
    "potato-starch": {
      "name": "نشاسته سیب‌زمینی",
      "desc": "عمده فروشی نشاسته سیب‌زمینی اصل بدون تغییر، تولیدکننده بومی در هبی چین."
    }
  },
  "blogCategories": {
    "mashed-potatoes-recipe": {
      "name": "دستور پخت پوره سیب‌زمینی",
      "desc": "دستورهای پخت پوره سیب‌زمینی خوشمزه با استفاده از پرک سیب‌زمینی XION و پوره سیب‌زمینی فوری."
    },
    "potato-flakes-and-flavored-mashed-potato-blog": {
      "name": "پرک سیب‌زمینی و پوره سیب‌زمینی فوری طعم‌دار",
      "desc": "راهنماها، مقایسه‌ها و بینش‌های صنعت درباره پرک سیب‌زمینی و پوره سیب‌زمینی فوری طعم‌دار."
    },
    "potato-products": {
      "name": "محصولات سیب‌زمینی",
      "desc": "اخبار صنعت و بینش‌های محصول."
    }
  }
},
  ko: {
  "home": "홈",
  "products": "제품",
  "blog": "블로그",
  "requestQuote": "견적 요청",
  "oemCustom": "OEM / 맞춤 제작",
  "publishedDate": "게시일",
  "skuLabel": "SKU",
  "noImage": "이미지 없음",
  "productsIntro": "감자 플레이크와 향이 나는 인스턴트 매시드 포테이토가 당사의 핵심 제품입니다.",
  "blogIntro": "감자 플레이크 가이드, 레시피 및 업계 인사이트.",
  "nav": {
    "home": "홈",
    "about-us": "회사 소개",
    "brand-story": "브랜드 스토리",
    "product": "제품",
    "production": "생산",
    "services": "서비스",
    "blog": "블로그",
    "contact": "문의"
  },
  "productCategories": {
    "instant-mashed-potato": {
      "name": "인스턴트 매시드 포테이토 OEM",
      "desc": "다양한 맛과 맞춤 포장이 가능한 향 첨가 인스턴트 매시드 포테이토 파우더 OEM 공급."
    },
    "potato-flakes": {
      "name": "감자 플레이크 도매",
      "desc": "중국 허베이성에 위치한 감자 플레이크 제조업체로 연간 생산 능력 10,000톤입니다."
    },
    "frozen-french-fries": {
      "name": "냉동 감자튀김",
      "desc": "주름진 컷과 직선 컷 냉동 감자튀김, 제조업체에서 직접 공급."
    },
    "seed-potatoes": {
      "name": "종자 감자",
      "desc": "판매용 우수한 품질의 종자 감자, 중국에서 인기 있는 감자 종자 품종."
    },
    "potato-starch": {
      "name": "감자 전분",
      "desc": "변형되지 않은 순수 감자 전분 도매, 중국 허베이의 원산지 제조업체."
    }
  },
  "blogCategories": {
    "mashed-potatoes-recipe": {
      "name": "매시드 포테이토 레시피",
      "desc": "XION 감자 플레이크와 인스턴트 매시드 포테이토를 사용한 맛있는 매시드 포테이토 레시피."
    },
    "potato-flakes-and-flavored-mashed-potato-blog": {
      "name": "감자 플레이크 및 향 첨가 매시드 포테이토",
      "desc": "감자 플레이크와 향 첨가 매시드 포테이토에 대한 가이드, 비교 및 업계 인사이트."
    },
    "potato-products": {
      "name": "감자 제품",
      "desc": "업계 뉴스 및 제품 인사이트."
    }
  }
},
  ms: {
  "home": "Utama",
  "products": "Produk",
  "blog": "Blog",
  "requestQuote": "Minta Sebut Harga",
  "oemCustom": "OEM / Tersuai",
  "publishedDate": "Diterbitkan",
  "skuLabel": "SKU",
  "noImage": "Tiada imej",
  "productsIntro": "Kepingan kentang dan kentang lenyek segera berperisa adalah produk teras kami.",
  "blogIntro": "Panduan kepingan kentang, resipi dan pandangan industri.",
  "nav": {
    "home": "Utama",
    "about-us": "Tentang Kami",
    "brand-story": "Kisah Jenama",
    "product": "Produk",
    "production": "Pengeluaran",
    "services": "Perkhidmatan",
    "blog": "Blog",
    "contact": "Hubungi"
  },
  "productCategories": {
    "instant-mashed-potato": {
      "name": "OEM Kentang Lenyek Segera",
      "desc": "Bekalan OEM serbuk kentang lenyek segera berperisa dengan pelbagai perisa dan pembungkusan tersuai."
    },
    "potato-flakes": {
      "name": "Pemborong Kepingan Kentang",
      "desc": "Kami adalah pengilang kepingan kentang yang berpangkalan di Wilayah Hebei, China dengan kapasiti tahunan 10,000 tan."
    },
    "frozen-french-fries": {
      "name": "Kentang Goreng Beku",
      "desc": "Kentang goreng beku potongan beralun dan lurus, terus dari pengilang."
    },
    "seed-potatoes": {
      "name": "Kentang Benih",
      "desc": "Kentang benih berkualiti untuk dijual, varieti kentang benih popular di China."
    },
    "potato-starch": {
      "name": "Kanji Kentang",
      "desc": "Pemborong kanji kentang asli tidak diubah suai, pengilang tempatan di Hebei, China."
    }
  },
  "blogCategories": {
    "mashed-potatoes-recipe": {
      "name": "Resipi Kentang Lenyek",
      "desc": "Resipi kentang lenyek yang lazat menggunakan kepingan kentang XION dan kentang lenyek segera."
    },
    "potato-flakes-and-flavored-mashed-potato-blog": {
      "name": "Kepingan Kentang dan Kentang Lenyek Berperisa",
      "desc": "Panduan, perbandingan dan pandangan industri tentang kepingan kentang dan kentang lenyek berperisa."
    },
    "potato-products": {
      "name": "Produk Kentang",
      "desc": "Berita industri dan pandangan produk."
    }
  }
},
  ar: {
  "home": "الرئيسية",
  "products": "المنتجات",
  "blog": "المدونة",
  "requestQuote": "اطلب عرض سعر",
  "oemCustom": "OEM / مخصص",
  "publishedDate": "تاريخ النشر",
  "skuLabel": "رمز SKU",
  "noImage": "لا توجد صورة",
  "productsIntro": "رقائق البطاطس والبطاطس المهروسة الفورية المنكهة هي منتجاتنا الأساسية.",
  "blogIntro": "أدلة رقائق البطاطس ووصفات ورؤى صناعية.",
  "nav": {
    "home": "الرئيسية",
    "about-us": "من نحن",
    "brand-story": "قصة العلامة التجارية",
    "product": "المنتجات",
    "production": "الإنتاج",
    "services": "الخدمات",
    "blog": "المدونة",
    "contact": "اتصل بنا"
  },
  "productCategories": {
    "instant-mashed-potato": {
      "name": "OEM للبطاطس المهروسة الفورية",
      "desc": "توريد OEM لمسحوق البطاطس المهروسة الفورية المنكهة بنكهات متعددة وتغليف مخصص."
    },
    "potato-flakes": {
      "name": "جملة رقائق البطاطس",
      "desc": "نحن مصنع رقائق البطاطس ومقرنا في مقاطعة خبي، الصين بطاقة إنتاجية سنوية تبلغ 10,000 طن."
    },
    "frozen-french-fries": {
      "name": "بطاطس مقلية مجمدة",
      "desc": "بطاطس مقلية مجمدة مموجة ومستقيمة، مباشرة من المصنع."
    },
    "seed-potatoes": {
      "name": "بطاطس البذور",
      "desc": "بطاطس بذور عالية الجودة للبيع، أصناف شائعة من بطاطس البذور في الصين."
    },
    "potato-starch": {
      "name": "نشا البطاطس",
      "desc": "نشا بطاطس أصلي غير معدل بالجملة، من مصنع محلي في خبي، الصين."
    }
  },
  "blogCategories": {
    "mashed-potatoes-recipe": {
      "name": "وصفات البطاطس المهروسة",
      "desc": "وصفات لذيذة للبطاطس المهروسة باستخدام رقائق بطاطس XION والبطاطس المهروسة الفورية."
    },
    "potato-flakes-and-flavored-mashed-potato-blog": {
      "name": "رقائق البطاطس والبطاطس المهروسة المنكهة",
      "desc": "أدلة ومقارنات ورؤى صناعية حول رقائق البطاطس والبطاطس المهروسة المنكهة."
    },
    "potato-products": {
      "name": "منتجات البطاطس",
      "desc": "أخبار الصناعة ورؤى المنتجات."
    }
  }
},
};

export const UI: Record<string, UIDict> = { en, ...translations };
