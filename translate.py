#!/usr/bin/env python3
"""将英文内容翻译为粤语繁体，输出到 yua 内容集合。
用法: python3 translate.py <type> [--limit N] [--start M]
type: products | blog | pages
"""
import os, sys, json, re, time, urllib.request

KEY = "sk-f63224259b084e24949d779acf045980"
API = "https://api.deepseek.com/v1/chat/completions"
MODEL = "deepseek-chat"

LANG = "yua"
SRC_BASE = "src/content"
DST_BASE = f"src/content/{LANG}"

TYPE_MAP = {
    "products": "products",
    "blog": "blog",
    "pages": "pages",
}

SYSTEM = """你係一個專業嘅粵語文案翻譯，任務係將英文網站內容翻譯成粵語（香港/廣府粵語習慣用語）。
嚴格要求：
1. 用粵語繁體字（用「係、嘅、唔、哋、咁、嚟、呢、邊、咗」等粵語字），唔好用書面語普通話。
2. 保留 Markdown 格式（標題 #、加粗 **、列表 -、表格、圖片 ![alt](path)）完全唔變。
3. 圖片鏈接、圖片 alt 文本一律保留原文，唔翻譯。
4. 內鏈 URL 嘅 slug 部分保留，只翻譯鏈接文字。網址 /xxx/ 唔好改。
5. frontmatter 喺輸入輸出都係 YAML，你只翻譯 title、description、categoryName 呢啲字值，其他字段（category、sku、image、gallery、pubDate 等）原樣保留。
6. 專有名詞保留：XION、DinWeys、Pepsi、Orion、FSSC 22000、FDA、ISO9001、Halal、Kosher、TR CU 021、OEM、SKU 等唔翻譯。
7. 只輸出翻譯結果，唔好加任何解釋、前言、後記、代碼圍欄。
"""

def chat(messages, temperature=0.3, max_tokens=6000):
    body = json.dumps({
        "model": MODEL,
        "messages": messages,
        "temperature": temperature,
        "max_tokens": max_tokens,
    }).encode()
    req = urllib.request.Request(API, data=body, headers={
        "Content-Type": "application/json",
        "Authorization": f"Bearer {KEY}",
    })
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                d = json.load(r)
            return d["choices"][0]["message"]["content"]
        except Exception as e:
            print(f"  [重試 {attempt+1}] {e}", file=sys.stderr)
            time.sleep(3 * (attempt + 1))
    raise RuntimeError("translate failed")

def translate_md(text):
    user = f"請將以下英文內容翻譯成粵語繁體。只輸出翻譯後嘅完整內容（含 frontmatter），唔好加任何其他嘢：\n\n{text}"
    return chat([{"role": "system", "content": SYSTEM}, {"role": "user", "content": user}])

def main():
    typ = sys.argv[1]
    if typ not in TYPE_MAP:
        print("用法: translate.py products|blog|pages [N 起始] [M 结束]"); sys.exit(1)
    limit_start = int(sys.argv[2]) if len(sys.argv) > 2 else 0
    limit_end = int(sys.argv[3]) if len(sys.argv) > 3 else None

    src_dir = os.path.join(SRC_BASE, TYPE_MAP[typ])
    dst_dir = os.path.join(DST_BASE, TYPE_MAP[typ])
    os.makedirs(dst_dir, exist_ok=True)

    files = sorted(f for f in os.listdir(src_dir) if f.endswith(".md"))
    batch = files[limit_start:limit_end] if limit_end is not None else files[limit_start:]
    total = len(batch)
    print(f"=== 翻译 {typ}: {len(batch)} 個文件 ===", flush=True)

    for i, fn in enumerate(batch):
        src_path = os.path.join(src_dir, fn)
        dst_path = os.path.join(dst_dir, fn)
        if os.path.exists(dst_path):
            print(f"[{i+1}/{total}] 跳過(已存在) {fn}", flush=True)
            continue
        with open(src_path, encoding="utf-8") as f:
            text = f.read()
        try:
            out = translate_md(text)
            out = out.strip()
            # 去掉可能的代码围栏
            if out.startswith("```"):
                out = re.sub(r"^```[a-z]*\n", "", out)
                out = re.sub(r"\n```$", "", out)
            with open(dst_path, "w", encoding="utf-8") as f:
                f.write(out + "\n")
            print(f"[{i+1}/{total}] OK {fn} ({len(out)}字)", flush=True)
        except Exception as e:
            print(f"[{i+1}/{total}] 失敗 {fn}: {e}", flush=True)
        time.sleep(0.3)

if __name__ == "__main__":
    main()
