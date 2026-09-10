// 多语言站点配置
// 每种语言的 locale 信息 + 翻译目标语言描述
export interface LangConfig {
  /** 子目录前缀（URL 前缀 + 内容集合前缀） */
  code: string;
  /** HTML lang 属性 */
  htmlLang: string;
  /** Open Graph locale */
  ogLocale: string;
  /** 目标语言中文名（用于日志/提示） */
  name: string;
  /** 目标语言自带名称（用于语言选择菜单，如 English/Español/日本語） */
  nativeName: string;
  /** 翻译系统提示里描述目标语言（英文） */
  translateHint: string;
  /** RTL 语言（阿拉伯语等） */
  rtl?: boolean;
}

export const LANGUAGES: LangConfig[] = [
  {
    code: 'yua',
    htmlLang: 'zh-Hant',
    ogLocale: 'zh_Hant_HK',
    name: '粵語',
    nativeName: '粵語',
    translateHint: 'Cantonese (粵語/廣東話, written in Traditional Chinese with Cantonese-specific characters like 係/嘅/唔/咗)',
  },
  {
    code: 'vi',
    htmlLang: 'vi',
    ogLocale: 'vi_VN',
    name: '越南語',
    nativeName: 'Tiếng Việt',
    translateHint: 'Vietnamese (Tiếng Việt)',
  },
  {
    code: 'th',
    htmlLang: 'th',
    ogLocale: 'th_TH',
    name: '泰語',
    nativeName: 'ไทย',
    translateHint: 'Thai (ภาษาไทย)',
  },
  {
    code: 'it',
    htmlLang: 'it',
    ogLocale: 'it_IT',
    name: '意大利語',
    nativeName: 'Italiano',
    translateHint: 'Italian (Italiano)',
  },
  {
    code: 'ja',
    htmlLang: 'ja',
    ogLocale: 'ja_JP',
    name: '日語',
    nativeName: '日本語',
    translateHint: 'Japanese (日本語)',
  },
  {
    code: 'tr',
    htmlLang: 'tr',
    ogLocale: 'tr_TR',
    name: '土耳其語',
    nativeName: 'Türkçe',
    translateHint: 'Turkish (Türkçe)',
  },
  {
    code: 'pt',
    htmlLang: 'pt',
    ogLocale: 'pt_PT',
    name: '葡萄牙語',
    nativeName: 'Português',
    translateHint: 'European Portuguese (Português)',
  },
  {
    code: 'es',
    htmlLang: 'es',
    ogLocale: 'es_ES',
    name: '西班牙語',
    nativeName: 'Español',
    translateHint: 'Spanish (Español)',
  },
  {
    code: 'fa',
    htmlLang: 'fa',
    ogLocale: 'fa_IR',
    name: '波斯語',
    nativeName: 'فارسی',
    translateHint: 'Persian (فارسی)',
    rtl: true,
  },
  {
    code: 'ko',
    htmlLang: 'ko',
    ogLocale: 'ko_KR',
    name: '韓語',
    nativeName: '한국어',
    translateHint: 'Korean (한국어)',
  },
  {
    code: 'ms',
    htmlLang: 'ms',
    ogLocale: 'ms_MY',
    name: '馬來語',
    nativeName: 'Bahasa Melayu',
    translateHint: 'Malay (Bahasa Melayu)',
  },
  {
    code: 'ar',
    htmlLang: 'ar',
    ogLocale: 'ar_SA',
    name: '阿拉伯語',
    nativeName: 'العربية',
    translateHint: 'Arabic (العربية)',
    rtl: true,
  },
];

export function getLang(code: string): LangConfig | undefined {
  return LANGUAGES.find((l) => l.code === code);
}
