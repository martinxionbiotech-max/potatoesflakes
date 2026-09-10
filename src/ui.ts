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
  // 首页营销文案（hero / 信任条 / about / 产品 / why choose us）
  homePage: Record<string, string>;
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
  homePage: {
    heroEyebrow: 'The Top Chinese Supplier',
    heroTitle: 'Bulk Potato Flakes & Instant Mashed Potato',
    heroSub: 'Providing Customized High-Quality Instant Mashed Potato Products. Competitive Prices, Superior Service.',
    contactUsNow: 'Contact Us Now',
    viewProducts: 'View Products',
    trust1Title: 'Top-Quality',
    trust1Sub: 'Certified and Exporting to 20+ Countries',
    trust2Title: 'Flexible OEM',
    trust2Sub: 'Multiple Flavors and Packaging Sizes',
    trust3Title: 'Competitive Price',
    trust3Sub: 'Creating Greater Value Space for Clients',
    trust4Title: 'Excellent Services',
    trust4Sub: 'Our experts are available 24/7 to serve and solve',
    aboutEyebrow: 'About XION',
    aboutTitle: 'A Large-Scale Potato Flakes & Mashed Potato Manufacturer',
    aboutP1: 'We are Xion Biotech Co., Ltd. (The company name was changed to Dingwei Biotech Co., Ltd. Trading name: DinWeys in 2024), a large-scale potato flakes and mashed potato manufacturer, as well as the supplier for Pepsi, Orion, and other brands, headquartered in Hebei, China.',
    aboutP2: 'For over a decade, we have specialized in developing and customizing potato flake products. We have a fully certified food production factory and a product development and testing laboratory. Our high level of production processes and quality is confirmed by the FSSC 22000, FDA, ISO9001, Halal, Kosher certificates, and the TR CU 021 Declaration of Compliance.',
    learnMore: 'Learn More About Us',
    ourProducts: 'Our Products',
    ourProductsSub: 'Potato flakes, instant mashed potatoes, french fries, seed potatoes & potato starch',
    viewAllProducts: 'View All Products',
    whyChooseUs: 'Why Choose Us',
    why1Title: 'Customized Design Solutions',
    why1Sub: 'Professional services for the customized development and production of flavored instant mashed potato products to meet client specifications and preferences.',
    why2Title: 'Convenient International Export',
    why2Sub: 'One of the few Chinese factories registered and qualified to export potato flakes and instant mashed potatoes. We make the process simple for you.',
    why3Title: 'Personalized Experience and More Choices',
    why3Sub: 'Most potato flour factories do not offer sample and small batch order services, but we can do it to meet your business development needs.',
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
  },
  "homePage": {
    "heroEyebrow": "頂尖中國供應商",
    "heroTitle": "大批量薯片同即食薯蓉",
    "heroSub": "提供訂製高品質即食薯蓉產品。價格有競爭力，服務一流。",
    "contactUsNow": "即刻聯絡我哋",
    "viewProducts": "睇吓產品",
    "trust1Title": "頂級品質",
    "trust1Sub": "已獲認證並出口到20多個國家",
    "trust2Title": "靈活OEM",
    "trust2Sub": "多種口味同包裝尺寸",
    "trust3Title": "有競爭力嘅價格",
    "trust3Sub": "為客戶創造更大嘅價值空間",
    "trust4Title": "優質服務",
    "trust4Sub": "我哋嘅專家24/7隨時候命為你服務同解決問題",
    "aboutEyebrow": "關於XION",
    "aboutTitle": "大型薯片同薯蓉製造商",
    "aboutP1": "我哋係Xion Biotech Co., Ltd.（公司名喺2024年改為Dingwei Biotech Co., Ltd.，交易名稱：DinWeys），一間大型薯片同薯蓉製造商，亦係Pepsi、Orion同其他品牌嘅供應商，總部設喺中國河北。",
    "aboutP2": "十多年嚟，我哋專注於開發同訂製薯片產品。我哋有全面認證嘅食品生產工廠同產品開發及測試實驗室。我哋高水平嘅生產流程同品質獲FSSC 22000、FDA、ISO9001、Halal、Kosher證書同TR CU 021合規聲明确認。",
    "learnMore": "了解更多關於我哋",
    "ourProducts": "我哋嘅產品",
    "ourProductsSub": "薯片、即食薯蓉、薯條、種薯同馬鈴薯澱粉",
    "viewAllProducts": "睇晒所有產品",
    "whyChooseUs": "點解揀我哋",
    "why1Title": "訂製設計方案",
    "why1Sub": "專業服務，為你訂製開發同生產調味即食薯蓉產品，滿足客戶嘅規格同喜好。",
    "why2Title": "方便嘅國際出口",
    "why2Sub": "少數註冊並合資格出口薯片同即食薯蓉嘅中國工廠之一。我哋幫你簡化流程。",
    "why3Title": "個人化體驗同更多選擇",
    "why3Sub": "大部分薯粉工廠都唔提供樣品同小批量訂單服務，但我哋可以做到，滿足你嘅業務發展需要。",
  },
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
  },
  "homePage": {
    "heroEyebrow": "Nhà Cung Cấp Hàng Đầu Trung Quốc",
    "heroTitle": "Bột Khoai Tây Số Lượng Lớn & Khoai Tây Nghiền Ăn Liền",
    "heroSub": "Cung cấp Sản Phẩm Khoai Tây Nghiền Ăn Liền Chất Lượng Cao Theo Yêu Cầu. Giá Cạnh Tranh, Dịch Vụ Vượt Trội.",
    "contactUsNow": "Liên Hệ Ngay",
    "viewProducts": "Xem Sản Phẩm",
    "trust1Title": "Chất Lượng Hàng Đầu",
    "trust1Sub": "Được Chứng Nhận và Xuất Khẩu Đến Hơn 20 Quốc Gia",
    "trust2Title": "OEM Linh Hoạt",
    "trust2Sub": "Nhiều Hương Vị và Kích Cỡ Bao Bì",
    "trust3Title": "Giá Cạnh Tranh",
    "trust3Sub": "Tạo Không Gian Giá Trị Lớn Hơn Cho Khách Hàng",
    "trust4Title": "Dịch Vụ Xuất Sắc",
    "trust4Sub": "Các chuyên gia của chúng tôi sẵn sàng 24/7 để phục vụ và giải quyết",
    "aboutEyebrow": "Về XION",
    "aboutTitle": "Nhà Sản Xuất Bột Khoai Tây & Khoai Tây Nghiền Quy Mô Lớn",
    "aboutP1": "Chúng tôi là Xion Biotech Co., Ltd. (Tên công ty đã được đổi thành Dingwei Biotech Co., Ltd. Tên giao dịch: DinWeys vào năm 2024), một nhà sản xuất bột khoai tây và khoai tây nghiền quy mô lớn, đồng thời là nhà cung cấp cho Pepsi, Orion và các thương hiệu khác, có trụ sở tại Hà Bắc, Trung Quốc.",
    "aboutP2": "Trong hơn một thập kỷ, chúng tôi đã chuyên phát triển và tùy chỉnh các sản phẩm bột khoai tây. Chúng tôi có nhà máy sản xuất thực phẩm được chứng nhận đầy đủ và phòng thí nghiệm phát triển và kiểm nghiệm sản phẩm. Quy trình sản xuất và chất lượng cao của chúng tôi được xác nhận bởi các chứng nhận FSSC 22000, FDA, ISO9001, Halal, Kosher và Tuyên Bố Tuân Thủ TR CU 021.",
    "learnMore": "Tìm Hiểu Thêm Về Chúng Tôi",
    "ourProducts": "Sản Phẩm Của Chúng Tôi",
    "ourProductsSub": "Bột khoai tây, khoai tây nghiền ăn liền, khoai tây chiên, khoai tây giống & tinh bột khoai tây",
    "viewAllProducts": "Xem Tất Cả Sản Phẩm",
    "whyChooseUs": "Tại Sao Chọn Chúng Tôi",
    "why1Title": "Giải Pháp Thiết Kế Tùy Chỉnh",
    "why1Sub": "Dịch vụ chuyên nghiệp cho việc phát triển và sản xuất tùy chỉnh các sản phẩm khoai tây nghiền ăn liền có hương vị để đáp ứng thông số kỹ thuật và sở thích của khách hàng.",
    "why2Title": "Xuất Khẩu Quốc Tế Thuận Tiện",
    "why2Sub": "Một trong số ít nhà máy Trung Quốc được đăng ký và đủ điều kiện xuất khẩu bột khoai tây và khoai tây nghiền ăn liền. Chúng tôi làm cho quy trình trở nên đơn giản cho bạn.",
    "why3Title": "Trải Nghiệm Cá Nhân Hóa và Nhiều Lựa Chọn Hơn",
    "why3Sub": "Hầu hết các nhà máy bột khoai tây không cung cấp dịch vụ mẫu và đơn hàng nhỏ, nhưng chúng tôi có thể làm điều đó để đáp ứng nhu cầu phát triển kinh doanh của bạn.",
  },
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
  },
  "homePage": {
    "heroEyebrow": "ซัพพลายเออร์ชั้นนำจากจีน",
    "heroTitle": "เกล็ดมันฝรั่งและมันฝรั่งบดสำเร็จรูปจำนวนมาก",
    "heroSub": "ให้บริการผลิตภัณฑ์มันฝรั่งบดสำเร็จรูปคุณภาพสูงแบบปรับแต่งได้ ราคาแข่งขันได้ บริการเหนือระดับ",
    "contactUsNow": "ติดต่อเราทันที",
    "viewProducts": "ดูสินค้า",
    "trust1Title": "คุณภาพชั้นเลิศ",
    "trust1Sub": "ได้รับการรับรองและส่งออกไปกว่า 20 ประเทศ",
    "trust2Title": "OEM ยืดหยุ่น",
    "trust2Sub": "หลากหลายรสชาติและขนาดบรรจุภัณฑ์",
    "trust3Title": "ราคาแข่งขันได้",
    "trust3Sub": "สร้างพื้นที่แห่งมูลค่าเพิ่มที่มากขึ้นให้กับลูกค้า",
    "trust4Title": "บริการยอดเยี่ยม",
    "trust4Sub": "ผู้เชี่ยวชาญของเราพร้อมให้บริการและแก้ไขปัญหา 24/7",
    "aboutEyebrow": "เกี่ยวกับ XION",
    "aboutTitle": "ผู้ผลิตเกล็ดมันฝรั่งและมันฝรั่งบดขนาดใหญ่",
    "aboutP1": "เราคือ Xion Biotech Co., Ltd. (ชื่อบริษัทเปลี่ยนเป็น Dingwei Biotech Co., Ltd. ชื่อทางการค้า: DinWeys ในปี 2024) ผู้ผลิตเกล็ดมันฝรั่งและมันฝรั่งบดขนาดใหญ่ รวมถึงเป็นซัพพลายเออร์ให้กับ Pepsi, Orion และแบรนด์อื่น ๆ โดยมีสำนักงานใหญ่ตั้งอยู่ที่มณฑลเหอเป่ย ประเทศจีน",
    "aboutP2": "กว่าทศวรรษที่เรามุ่งเน้นการพัฒนาและปรับแต่งผลิตภัณฑ์เกล็ดมันฝรั่ง เรามีโรงงานผลิตอาหารที่ได้รับการรับรองครบถ้วนและห้องปฏิบัติการพัฒนาและทดสอบผลิตภัณฑ์ กระบวนการผลิตและคุณภาพระดับสูงของเราได้รับการยืนยันจากใบรับรอง FSSC 22000, FDA, ISO9001, Halal, Kosher และประกาศความสอดคล้อง TR CU 021",
    "learnMore": "เรียนรู้เพิ่มเติมเกี่ยวกับเรา",
    "ourProducts": "ผลิตภัณฑ์ของเรา",
    "ourProductsSub": "เกล็ดมันฝรั่ง มันฝรั่งบดสำเร็จรูป เฟรนช์ฟรายส์ มันฝรั่งพันธุ์ปลูก และแป้งมันฝรั่ง",
    "viewAllProducts": "ดูสินค้าทั้งหมด",
    "whyChooseUs": "ทำไมต้องเลือกเรา",
    "why1Title": "โซลูชันการออกแบบเฉพาะบุคคล",
    "why1Sub": "บริการระดับมืออาชีพสำหรับการพัฒนาและผลิตผลิตภัณฑ์มันฝรั่งบดสำเร็จรูปรสชาติต่าง ๆ ตามความต้องการและความชอบของลูกค้า",
    "why2Title": "การส่งออกระหว่างประเทศที่สะดวก",
    "why2Sub": "หนึ่งในไม่กี่โรงงานในจีนที่ขึ้นทะเบียนและมีคุณสมบัติในการส่งออกเกล็ดมันฝรั่งและมันฝรั่งบดสำเร็จรูป เราทำให้กระบวนการง่ายสำหรับคุณ",
    "why3Title": "ประสบการณ์เฉพาะบุคคลและตัวเลือกที่มากขึ้น",
    "why3Sub": "โรงงานแป้งมันฝรั่งส่วนใหญ่ไม่มีบริการตัวอย่างและคำสั่งซื้อจำนวนน้อย แต่เราสามารถทำได้เพื่อตอบสนองความต้องการในการพัฒนาธุรกิจของคุณ",
  },
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
  },
  "homePage": {
    "heroEyebrow": "Il principale fornitore cinese",
    "heroTitle": "Fiocchi di patate sfusi e purè di patate istantaneo",
    "heroSub": "Forniamo prodotti personalizzati di alta qualità a base di purè di patate istantaneo. Prezzi competitivi, servizio superiore.",
    "contactUsNow": "Contattaci ora",
    "viewProducts": "Visualizza i prodotti",
    "trust1Title": "Qualità superiore",
    "trust1Sub": "Certificati ed esportiamo in oltre 20 paesi",
    "trust2Title": "OEM flessibile",
    "trust2Sub": "Molteplici gusti e formati di confezionamento",
    "trust3Title": "Prezzo competitivo",
    "trust3Sub": "Creiamo un maggiore spazio di valore per i clienti",
    "trust4Title": "Servizi eccellenti",
    "trust4Sub": "I nostri esperti sono disponibili 24/7 per servire e risolvere",
    "aboutEyebrow": "Informazioni su XION",
    "aboutTitle": "Un produttore su larga scala di fiocchi di patate e purè di patate",
    "aboutP1": "Siamo Xion Biotech Co., Ltd. (il nome dell'azienda è stato cambiato in Dingwei Biotech Co., Ltd. Nome commerciale: DinWeys nel 2024), un produttore su larga scala di fiocchi di patate e purè di patate, nonché fornitore per Pepsi, Orion e altri marchi, con sede a Hebei, Cina.",
    "aboutP2": "Da oltre un decennio ci specializziamo nello sviluppo e nella personalizzazione di prodotti a base di fiocchi di patate. Disponiamo di uno stabilimento di produzione alimentare completamente certificato e di un laboratorio di sviluppo e collaudo dei prodotti. Il nostro elevato livello di processi produttivi e qualità è confermato dalle certificazioni FSSC 22000, FDA, ISO9001, Halal, Kosher e dalla Dichiarazione di conformità TR CU 021.",
    "learnMore": "Scopri di più su di noi",
    "ourProducts": "I nostri prodotti",
    "ourProductsSub": "Fiocchi di patate, purè di patate istantaneo, patatine fritte, patate da seme e amido di patate",
    "viewAllProducts": "Visualizza tutti i prodotti",
    "whyChooseUs": "Perché sceglierci",
    "why1Title": "Soluzioni di design personalizzate",
    "why1Sub": "Servizi professionali per lo sviluppo e la produzione personalizzati di prodotti a base di purè di patate istantaneo aromatizzato per soddisfare le specifiche e le preferenze del cliente.",
    "why2Title": "Esportazione internazionale conveniente",
    "why2Sub": "Una delle poche fabbriche cinesi registrate e qualificate per esportare fiocchi di patate e purè di patate istantaneo. Rendiamo il processo semplice per te.",
    "why3Title": "Esperienza personalizzata e più scelte",
    "why3Sub": "La maggior parte delle fabbriche di farina di patate non offre servizi di campionatura e ordini di piccoli lotti, ma noi possiamo farlo per soddisfare le tue esigenze di sviluppo aziendale.",
  },
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
  },
  "homePage": {
    "heroEyebrow": "中国トップサプライヤー",
    "heroTitle": "業務用ポテトフレーク＆インスタントマッシュポテト",
    "heroSub": "カスタマイズされた高品質なインスタントマッシュポテト製品を提供。競争力のある価格、優れたサービス。",
    "contactUsNow": "今すぐお問い合わせ",
    "viewProducts": "製品を見る",
    "trust1Title": "最高品質",
    "trust1Sub": "認証取得済み、20カ国以上へ輸出",
    "trust2Title": "柔軟なOEM対応",
    "trust2Sub": "多様なフレーバーと包装サイズ",
    "trust3Title": "競争力のある価格",
    "trust3Sub": "お客様により大きな価値空間を創出",
    "trust4Title": "優れたサービス",
    "trust4Sub": "専門家が24時間365日対応し、解決します",
    "aboutEyebrow": "XIONについて",
    "aboutTitle": "大規模ポテトフレーク＆マッシュポテトメーカー",
    "aboutP1": "当社はXion Biotech Co., Ltd.（2024年に社名をDingwei Biotech Co., Ltd.に変更。商号：DinWeys）であり、大規模なポテトフレークおよびマッシュポテトメーカーであり、Pepsi、Orionなどのブランドのサプライヤーでもあり、中国河北省に本社を置いています。",
    "aboutP2": "10年以上にわたり、ポテトフレーク製品の開発とカスタマイズを専門としてきました。完全に認証された食品生産工場と製品開発・試験ラボを有しています。当社の高水準な生産プロセスと品質は、FSSC 22000、FDA、ISO9001、Halal、Kosherの認証、およびTR CU 021適合宣言によって確認されています。",
    "learnMore": "当社について詳しく見る",
    "ourProducts": "製品ラインナップ",
    "ourProductsSub": "ポテトフレーク、インスタントマッシュポテト、フライドポテト、種芋、ポテトスターチ",
    "viewAllProducts": "すべての製品を見る",
    "whyChooseUs": "選ばれる理由",
    "why1Title": "カスタマイズ設計ソリューション",
    "why1Sub": "お客様の仕様と好みに合わせたフレーバー付きインスタントマッシュポテト製品のカスタマイズ開発と生産のための専門サービス。",
    "why2Title": "便利な国際輸出",
    "why2Sub": "ポテトフレークとインスタントマッシュポテトの輸出登録・資格を持つ数少ない中国の工場の一つです。プロセスを簡単にします。",
    "why3Title": "パーソナライズされた体験とより多くの選択肢",
    "why3Sub": "ほとんどのポテト粉工場はサンプルや小ロット注文サービスを提供していませんが、当社はお客様のビジネス開発ニーズに応えることができます。",
  },
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
  },
  "homePage": {
    "heroEyebrow": "En İyi Çinli Tedarikçi",
    "heroTitle": "Toptan Patates Püresi ve Hazır Patates Püresi",
    "heroSub": "Özelleştirilmiş Yüksek Kaliteli Hazır Patates Püresi Ürünleri Sunuyoruz. Rekabetçi Fiyatlar, Üstün Hizmet.",
    "contactUsNow": "Hemen Bize Ulaşın",
    "viewProducts": "Ürünleri Görüntüle",
    "trust1Title": "En Yüksek Kalite",
    "trust1Sub": "Sertifikalı ve 20'den Fazla Ülkeye İhracat",
    "trust2Title": "Esnek OEM",
    "trust2Sub": "Çoklu Lezzetler ve Ambalaj Boyutları",
    "trust3Title": "Rekabetçi Fiyat",
    "trust3Sub": "Müşteriler İçin Daha Büyük Değer Alanı Yaratmak",
    "trust4Title": "Mükemmel Hizmetler",
    "trust4Sub": "Uzmanlarımız 7/24 hizmet ve çözüm için hazır",
    "aboutEyebrow": "XION Hakkında",
    "aboutTitle": "Büyük Ölçekli Patates Püresi ve Patates Püresi Üreticisi",
    "aboutP1": "Biz Xion Biotech Co., Ltd. (Şirket adı 2024 yılında Dingwei Biotech Co., Ltd. olarak değiştirilmiştir. Ticari adı: DinWeys), büyük ölçekli bir patates püresi ve patates püresi üreticisi ve Pepsi, Orion ve diğer markaların tedarikçisiyiz, merkezimiz Çin'in Hebei kentindedir.",
    "aboutP2": "On yıldan fazla bir süredir patates püresi ürünlerinin geliştirilmesi ve özelleştirilmesi konusunda uzmanlaşmış bulunmaktayız. Tam sertifikalı bir gıda üretim fabrikamız ve bir ürün geliştirme ve test laboratuvarımız var. Üretim süreçlerimizin ve kalitemizin yüksek seviyesi FSSC 22000, FDA, ISO9001, Helal, Koşer sertifikaları ve TR CU 021 Uygunluk Beyanı ile onaylanmıştır.",
    "learnMore": "Hakkımızda Daha Fazla Bilgi Edinin",
    "ourProducts": "Ürünlerimiz",
    "ourProductsSub": "Patates püresi, hazır patates püresi, patates kızartması, tohumluk patates ve patates nişastası",
    "viewAllProducts": "Tüm Ürünleri Görüntüle",
    "whyChooseUs": "Neden Bizi Seçmelisiniz",
    "why1Title": "Özelleştirilmiş Tasarım Çözümleri",
    "why1Sub": "Müşteri spesifikasyonları ve tercihlerini karşılamak için lezzetli hazır patates püresi ürünlerinin özelleştirilmiş geliştirilmesi ve üretimi için profesyonel hizmetler.",
    "why2Title": "Kolay Uluslararası İhracat",
    "why2Sub": "Patates püresi ve hazır patates püresi ihraç etmek için kayıtlı ve kalifiye olan az sayıda Çin fabrikasından biri. Süreci sizin için basitleştiriyoruz.",
    "why3Title": "Kişiselleştirilmiş Deneyim ve Daha Fazla Seçenek",
    "why3Sub": "Çoğu patates unu fabrikası numune ve küçük parti sipariş hizmeti sunmaz, ancak iş geliştirme ihtiyaçlarınızı karşılamak için bunu yapabiliriz.",
  },
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
  },
  "homePage": {
    "heroEyebrow": "O Melhor Fornecedor Chinês",
    "heroTitle": "Flocos de Batata a Granel e Puré de Batata Instantâneo",
    "heroSub": "Fornecemos Produtos de Puré de Batata Instantâneo Personalizados de Alta Qualidade. Preços Competitivos, Serviço Superior.",
    "contactUsNow": "Contacte-nos Agora",
    "viewProducts": "Ver Produtos",
    "trust1Title": "Qualidade Superior",
    "trust1Sub": "Certificado e a Exportar para Mais de 20 Países",
    "trust2Title": "OEM Flexível",
    "trust2Sub": "Múltiplos Sabores e Tamanhos de Embalagem",
    "trust3Title": "Preço Competitivo",
    "trust3Sub": "Criando Maior Espaço de Valor para os Clientes",
    "trust4Title": "Serviços Excelentes",
    "trust4Sub": "Os nossos especialistas estão disponíveis 24/7 para servir e resolver",
    "aboutEyebrow": "Sobre a XION",
    "aboutTitle": "Um Fabricante de Grande Escala de Flocos de Batata e Puré de Batata",
    "aboutP1": "Somos a Xion Biotech Co., Ltd. (O nome da empresa foi alterado para Dingwei Biotech Co., Ltd. Nome comercial: DinWeys em 2024), um fabricante de grande escala de flocos de batata e puré de batata, bem como fornecedor da Pepsi, Orion e outras marcas, com sede em Hebei, China.",
    "aboutP2": "Durante mais de uma década, especializámo-nos no desenvolvimento e personalização de produtos de flocos de batata. Temos uma fábrica de produção alimentar totalmente certificada e um laboratório de desenvolvimento e testes de produtos. O nosso elevado nível de processos de produção e qualidade é confirmado pelos certificados FSSC 22000, FDA, ISO9001, Halal, Kosher e pela Declaração de Conformidade TR CU 021.",
    "learnMore": "Saiba Mais Sobre Nós",
    "ourProducts": "Os Nossos Produtos",
    "ourProductsSub": "Flocos de batata, puré de batata instantâneo, batatas fritas, batatas de semente e amido de batata",
    "viewAllProducts": "Ver Todos os Produtos",
    "whyChooseUs": "Porque Escolher-nos",
    "why1Title": "Soluções de Design Personalizadas",
    "why1Sub": "Serviços profissionais para o desenvolvimento e produção personalizados de produtos de puré de batata instantâneo com sabor, para atender às especificações e preferências do cliente.",
    "why2Title": "Exportação Internacional Conveniente",
    "why2Sub": "Uma das poucas fábricas chinesas registadas e qualificadas para exportar flocos de batata e puré de batata instantâneo. Tornamos o processo simples para si.",
    "why3Title": "Experiência Personalizada e Mais Escolhas",
    "why3Sub": "A maioria das fábricas de farinha de batata não oferece serviços de amostras e encomendas de pequenos lotes, mas nós podemos fazê-lo para atender às suas necessidades de desenvolvimento de negócio.",
  },
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
  },
  "homePage": {
    "heroEyebrow": "El Proveedor Chino Líder",
    "heroTitle": "Copos de Patata a Granel y Puré de Patata Instantáneo",
    "heroSub": "Ofrecemos productos personalizados de alta calidad de puré de patata instantáneo. Precios competitivos, servicio superior.",
    "contactUsNow": "Contáctenos Ahora",
    "viewProducts": "Ver Productos",
    "trust1Title": "Máxima Calidad",
    "trust1Sub": "Certificados y exportando a más de 20 países",
    "trust2Title": "OEM Flexible",
    "trust2Sub": "Múltiples sabores y tamaños de envase",
    "trust3Title": "Precio Competitivo",
    "trust3Sub": "Creando un mayor espacio de valor para los clientes",
    "trust4Title": "Servicios Excelentes",
    "trust4Sub": "Nuestros expertos están disponibles 24/7 para atender y resolver",
    "aboutEyebrow": "Sobre XION",
    "aboutTitle": "Un Fabricante a Gran Escala de Copos de Patata y Puré de Patata",
    "aboutP1": "Somos Xion Biotech Co., Ltd. (El nombre de la empresa cambió a Dingwei Biotech Co., Ltd. Nombre comercial: DinWeys en 2024), un fabricante a gran escala de copos de patata y puré de patata, así como proveedor de Pepsi, Orion y otras marcas, con sede en Hebei, China.",
    "aboutP2": "Durante más de una década, nos hemos especializado en el desarrollo y la personalización de productos de copos de patata. Contamos con una fábrica de producción de alimentos totalmente certificada y un laboratorio de desarrollo y análisis de productos. Nuestro alto nivel de procesos de producción y calidad está confirmado por los certificados FSSC 22000, FDA, ISO9001, Halal, Kosher y la Declaración de Conformidad TR CU 021.",
    "learnMore": "Conozca Más Sobre Nosotros",
    "ourProducts": "Nuestros Productos",
    "ourProductsSub": "Copos de patata, puré de patata instantáneo, patatas fritas, patatas de siembra y almidón de patata",
    "viewAllProducts": "Ver Todos los Productos",
    "whyChooseUs": "Por Qué Elegirnos",
    "why1Title": "Soluciones de Diseño Personalizadas",
    "why1Sub": "Servicios profesionales para el desarrollo y la producción personalizados de productos de puré de patata instantáneo con sabor para satisfacer las especificaciones y preferencias del cliente.",
    "why2Title": "Exportación Internacional Conveniente",
    "why2Sub": "Una de las pocas fábricas chinas registradas y calificadas para exportar copos de patata y puré de patata instantáneo. Hacemos que el proceso sea sencillo para usted.",
    "why3Title": "Experiencia Personalizada y Más Opciones",
    "why3Sub": "La mayoría de las fábricas de harina de patata no ofrecen servicios de muestras y pedidos de lotes pequeños, pero nosotros podemos hacerlo para satisfacer sus necesidades de desarrollo comercial.",
  },
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
  },
  "homePage": {
    "heroEyebrow": "برترین تأمین‌کننده چینی",
    "heroTitle": "پوره سیب‌زمینی فله و پوره سیب‌زمینی فوری",
    "heroSub": "ارائه محصولات پوره سیب‌زمینی فوری با کیفیت بالا و سفارشی‌سازی شده. قیمت‌های رقابتی، خدمات برتر.",
    "contactUsNow": "همین حالا با ما تماس بگیرید",
    "viewProducts": "مشاهده محصولات",
    "trust1Title": "کیفیت برتر",
    "trust1Sub": "دارای گواهینامه و صادرات به بیش از ۲۰ کشور",
    "trust2Title": "OEM انعطاف‌پذیر",
    "trust2Sub": "طعم‌های متنوع و اندازه‌های بسته‌بندی مختلف",
    "trust3Title": "قیمت رقابتی",
    "trust3Sub": "ایجاد فضای ارزشی بیشتر برای مشتریان",
    "trust4Title": "خدمات عالی",
    "trust4Sub": "کارشناسان ما به صورت ۲۴/۷ برای خدمت و حل مشکلات در دسترس هستند",
    "aboutEyebrow": "درباره XION",
    "aboutTitle": "تولیدکننده بزرگ پوره سیب‌زمینی فله و پوره سیب‌زمینی",
    "aboutP1": "ما Xion Biotech Co., Ltd. هستیم (نام شرکت در سال ۲۰۲۴ به Dingwei Biotech Co., Ltd. تغییر یافت. نام تجاری: DinWeys)، یک تولیدکننده بزرگ پوره سیب‌زمینی فله و پوره سیب‌زمینی، و همچنین تأمین‌کننده برای Pepsi، Orion و سایر برندها، با مرکزیت در هبی، چین.",
    "aboutP2": "برای بیش از یک دهه، ما در توسعه و سفارشی‌سازی محصولات پوره سیب‌زمینی تخصص داشته‌ایم. ما یک کارخانه تولید مواد غذایی کاملاً تأیید شده و یک آزمایشگاه توسعه و تست محصول داریم. سطح بالای فرآیندهای تولید و کیفیت ما توسط گواهینامه‌های FSSC 22000، FDA، ISO9001، Halal، Kosher و اعلامیه انطباق TR CU 021 تأیید شده است.",
    "learnMore": "درباره ما بیشتر بدانید",
    "ourProducts": "محصولات ما",
    "ourProductsSub": "پوره سیب‌زمینی، پوره سیب‌زمینی فوری، سیب‌زمینی سرخ‌کرده، سیب‌زمینی بذری و نشاسته سیب‌زمینی",
    "viewAllProducts": "مشاهده همه محصولات",
    "whyChooseUs": "چرا ما را انتخاب کنید",
    "why1Title": "راه‌حل‌های طراحی سفارشی",
    "why1Sub": "خدمات حرفه‌ای برای توسعه و تولید سفارشی محصولات پوره سیب‌زمینی فوری طعم‌دار مطابق با مشخصات و ترجیحات مشتری.",
    "why2Title": "صادرات بین‌المللی آسان",
    "why2Sub": "یکی از معدود کارخانه‌های چینی ثبت‌شده و واجد شرایط برای صادرات پوره سیب‌زمینی فله و پوره سیب‌زمینی فوری. ما فرآیند را برای شما ساده می‌کنیم.",
    "why3Title": "تجربه شخصی‌سازی‌شده و انتخاب‌های بیشتر",
    "why3Sub": "اکثر کارخانه‌های آرد سیب‌زمینی خدمات نمونه و سفارش دسته کوچک را ارائه نمی‌دهند، اما ما می‌توانیم این کار را برای برآورده کردن نیازهای توسعه کسب‌وکار شما انجام دهیم.",
  },
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
  },
  "homePage": {
    "heroEyebrow": "최고의 중국 공급업체",
    "heroTitle": "대량 감자 플레이크 & 인스턴트 매시드 포테이토",
    "heroSub": "맞춤형 고품질 인스턴트 매시드 포테이토 제품을 제공합니다. 경쟁력 있는 가격, 우수한 서비스.",
    "contactUsNow": "지금 문의하기",
    "viewProducts": "제품 보기",
    "trust1Title": "최고 품질",
    "trust1Sub": "인증 완료 및 20개국 이상 수출",
    "trust2Title": "유연한 OEM",
    "trust2Sub": "다양한 맛과 포장 크기",
    "trust3Title": "경쟁력 있는 가격",
    "trust3Sub": "고객을 위한 더 큰 가치 창출",
    "trust4Title": "우수한 서비스",
    "trust4Sub": "전문가가 24시간 연중무휴로 서비스 및 해결",
    "aboutEyebrow": "XION 소개",
    "aboutTitle": "대규모 감자 플레이크 & 매시드 포테이토 제조업체",
    "aboutP1": "우리는 Xion Biotech Co., Ltd.(2024년에 회사명을 Dingwei Biotech Co., Ltd.로 변경, 상호: DinWeys)로, 대규모 감자 플레이크 및 매시드 포테이토 제조업체이며 Pepsi, Orion 및 기타 브랜드의 공급업체로서 중국 허베이에 본사를 두고 있습니다.",
    "aboutP2": "10년 이상 동안 우리는 감자 플레이크 제품 개발 및 맞춤화를 전문으로 해왔습니다. 우리는 완전히 인증된 식품 생산 공장과 제품 개발 및 테스트 실험실을 보유하고 있습니다. 우리의 높은 수준의 생산 공정과 품질은 FSSC 22000, FDA, ISO9001, Halal, Kosher 인증서 및 TR CU 021 적합성 선언에 의해 확인됩니다.",
    "learnMore": "회사 소개 더 보기",
    "ourProducts": "우리 제품",
    "ourProductsSub": "감자 플레이크, 인스턴트 매시드 포테이토, 감자 튀김, 종자 감자 & 감자 전분",
    "viewAllProducts": "모든 제품 보기",
    "whyChooseUs": "우리를 선택하는 이유",
    "why1Title": "맞춤형 디자인 솔루션",
    "why1Sub": "고객 사양과 선호도에 맞춘 맛있는 인스턴트 매시드 포테이토 제품의 맞춤 개발 및 생산을 위한 전문 서비스.",
    "why2Title": "편리한 국제 수출",
    "why2Sub": "감자 플레이크와 인스턴트 매시드 포테이토를 수출할 수 있도록 등록되고 자격을 갖춘 몇 안 되는 중국 공장 중 하나입니다. 우리는 귀하를 위해 과정을 간단하게 만듭니다.",
    "why3Title": "개인화된 경험과 더 많은 선택",
    "why3Sub": "대부분의 감자 가루 공장은 샘플 및 소량 주문 서비스를 제공하지 않지만, 우리는 귀하의 비즈니스 개발 요구를 충족시키기 위해 제공할 수 있습니다.",
  },
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
  },
  "homePage": {
    "heroEyebrow": "Pembekal Terkemuka dari China",
    "heroTitle": "Kepingan Kentang Pukal & Kentang Lenyek Segera",
    "heroSub": "Menyediakan Produk Kentang Lenyek Segera Berkualiti Tinggi yang Disesuaikan. Harga Kompetitif, Perkhidmatan Unggul.",
    "contactUsNow": "Hubungi Kami Sekarang",
    "viewProducts": "Lihat Produk",
    "trust1Title": "Kualiti Terbaik",
    "trust1Sub": "Bertauliah dan Dieksport ke Lebih 20 Negara",
    "trust2Title": "OEM Fleksibel",
    "trust2Sub": "Pelbagai Perisa dan Saiz Pembungkusan",
    "trust3Title": "Harga Kompetitif",
    "trust3Sub": "Mewujudkan Ruang Nilai Lebih Besar untuk Pelanggan",
    "trust4Title": "Perkhidmatan Cemerlang",
    "trust4Sub": "Pakar kami tersedia 24/7 untuk berkhidmat dan menyelesaikan masalah",
    "aboutEyebrow": "Tentang XION",
    "aboutTitle": "Pengilang Kepingan Kentang & Kentang Lenyek Berskala Besar",
    "aboutP1": "Kami ialah Xion Biotech Co., Ltd. (Nama syarikat telah ditukar kepada Dingwei Biotech Co., Ltd. Nama dagangan: DinWeys pada tahun 2024), pengilang kepingan kentang dan kentang lenyek berskala besar, serta pembekal untuk Pepsi, Orion, dan jenama lain, yang beribu pejabat di Hebei, China.",
    "aboutP2": "Selama lebih sedekad, kami pakar dalam membangunkan dan menyesuaikan produk kepingan kentang. Kami mempunyai kilang pengeluaran makanan yang bertauliah sepenuhnya serta makmal penyelidikan dan pembangunan produk. Tahap proses pengeluaran dan kualiti kami yang tinggi disahkan oleh sijil FSSC 22000, FDA, ISO9001, Halal, Kosher, dan Deklarasi Pematuhan TR CU 021.",
    "learnMore": "Ketahui Lebih Lanjut Tentang Kami",
    "ourProducts": "Produk Kami",
    "ourProductsSub": "Kepingan kentang, kentang lenyek segera, kentang goreng, benih kentang & kanji kentang",
    "viewAllProducts": "Lihat Semua Produk",
    "whyChooseUs": "Mengapa Pilih Kami",
    "why1Title": "Penyelesaian Reka Bentuk Tersuai",
    "why1Sub": "Perkhidmatan profesional untuk pembangunan dan pengeluaran tersuai produk kentang lenyek segera berperisa bagi memenuhi spesifikasi dan keutamaan pelanggan.",
    "why2Title": "Eksport Antarabangsa yang Mudah",
    "why2Sub": "Salah satu daripada beberapa kilang di China yang berdaftar dan berkelayakan untuk mengeksport kepingan kentang dan kentang lenyek segera. Kami memudahkan prosesnya untuk anda.",
    "why3Title": "Pengalaman Peribadi dan Lebih Banyak Pilihan",
    "why3Sub": "Kebanyakan kilang tepung kentang tidak menawarkan perkhidmatan sampel dan pesanan kelompok kecil, tetapi kami boleh melakukannya untuk memenuhi keperluan pembangunan perniagaan anda.",
  },
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
  },
  "homePage": {
    "heroEyebrow": "أفضل مورد صيني",
    "heroTitle": "رقائق البطاطس بالجملة والبطاطس المهروسة الفورية",
    "heroSub": "نقدم منتجات البطاطس المهروسة الفورية عالية الجودة والمخصصة. أسعار تنافسية وخدمة متميزة.",
    "contactUsNow": "اتصل بنا الآن",
    "viewProducts": "عرض المنتجات",
    "trust1Title": "أعلى جودة",
    "trust1Sub": "معتمد ونصدر إلى أكثر من 20 دولة",
    "trust2Title": "تصنيع OEM مرن",
    "trust2Sub": "نكهات متعددة وأحجام تغليف متنوعة",
    "trust3Title": "سعر تنافسي",
    "trust3Sub": "نخلق مساحة قيمة أكبر للعملاء",
    "trust4Title": "خدمات ممتازة",
    "trust4Sub": "خبراؤنا متاحون على مدار الساعة طوال أيام الأسبوع للخدمة والحل",
    "aboutEyebrow": "عن XION",
    "aboutTitle": "شركة تصنيع كبيرة لرقائق البطاطس والبطاطس المهروسة",
    "aboutP1": "نحن شركة Xion Biotech Co., Ltd. (تم تغيير اسم الشركة إلى Dingwei Biotech Co., Ltd. والاسم التجاري: DinWeys في عام 2024)، وهي شركة تصنيع كبيرة لرقائق البطاطس والبطاطس المهروسة، بالإضافة إلى كونها مورداً لشركات Pepsi وOrion وغيرها من العلامات التجارية، ويقع مقرها الرئيسي في خبي، الصين.",
    "aboutP2": "لأكثر من عقد من الزمان، تخصصنا في تطوير وتخصيص منتجات رقائق البطاطس. لدينا مصنع إنتاج غذائي معتمد بالكامل ومختبر لتطوير المنتجات واختبارها. يتم تأكيد مستوى عمليات الإنتاج والجودة العالية لدينا من خلال شهادات FSSC 22000 وFDA وISO9001 وHalal وKosher وإعلان المطابقة TR CU 021.",
    "learnMore": "اعرف المزيد عنا",
    "ourProducts": "منتجاتنا",
    "ourProductsSub": "رقائق البطاطس، البطاطس المهروسة الفورية، البطاطس المقلية، بطاطس التقاوي ونشا البطاطس",
    "viewAllProducts": "عرض جميع المنتجات",
    "whyChooseUs": "لماذا تختارنا",
    "why1Title": "حلول تصميم مخصصة",
    "why1Sub": "خدمات احترافية لتطوير وإنتاج منتجات البطاطس المهروسة الفورية المنكهة حسب مواصفات وتفضيلات العميل.",
    "why2Title": "تصدير دولي مريح",
    "why2Sub": "واحدة من المصانع الصينية القليلة المسجلة والمؤهلة لتصدير رقائق البطاطس والبطاطس المهروسة الفورية. نحن نجعل العملية بسيطة بالنسبة لك.",
    "why3Title": "تجربة شخصية وخيارات أكثر",
    "why3Sub": "معظم مصانع دقيق البطاطس لا تقدم خدمات العينات والطلبات بكميات صغيرة، لكننا نستطيع القيام بذلك لتلبية احتياجات تطوير أعمالك.",
  },
},
};

export const UI: Record<string, UIDict> = { en, ...translations };
