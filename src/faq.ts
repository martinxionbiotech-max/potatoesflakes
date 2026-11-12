// 从 markdown 正文中提取 FAQ 段落，用于生成 FAQPage 结构化数据。
// 站点内容里的 FAQ 统一写法：
//   ## FAQs（或各语言对应标题）
//   - **问题？**
//
//   答案段落（可能多行）
//   - **下一个问题？**
//   ...
// 提取失败时返回 undefined，不生成 schema（不编造内容）。

const FAQ_HEADING = /^#{2,4}\s*.*(?:FAQ|Frequently\s+Asked|Preguntas|Perguntas|Domande|よくある|常見問題|常见问题|أسئلة|سوالات|Soalan|자주|Sıkça|Câu\s*[Hh]ỏi|thường gặp|Preguntas\s+frecuentes).*$/im;

export interface QA {
  q: string;
  a: string;
}

/**
 * @param body markdown 正文（不含 frontmatter）
 * @param lang 语言代码，用于长度校验宽松度
 */
export function extractFaq(body: string, _lang = 'en'): QA[] | undefined {
  const m = FAQ_HEADING.exec(body);
  if (!m) return undefined;

  const section = body.slice(m.index + m[0].length);
  const lines = section.split('\n');

  const items: QA[] = [];
  let cur: QA | null = null;
  const answerLines: string[] = [];

  const flush = () => {
    if (cur) {
      const a = answerLines
        .join(' ')
        .replace(/\s+/g, ' ')
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // markdown 链接 → 纯文本
        .replace(/[*_`]/g, '')
        .trim();
      if (a.length >= 2) items.push({ q: cur.q, a });
    }
    answerLines.length = 0;
  };

  for (const raw of lines) {
    const line = raw.trim();

    // 遇到同级或更高级标题，FAQ 段结束
    if (/^#{1,4}\s/.test(line)) break;

    const qm = /^[-*]\s+\*\*(.+?)\*\*\s*$/.exec(line);
    if (qm) {
      flush();
      cur = { q: qm[1].trim(), a: '' };
      continue;
    }

    if (!cur) continue;
    // 新列表项（无加粗的）通常是答案里的 bullet，保留为文本
    if (line.length) answerLines.push(line.replace(/^[-*]\s+/, ''));
  }
  flush();

  // 过滤掉明显是标题/导航的伪问答
  const cleaned = items.filter((i) => i.q.length >= 4 && i.q.length <= 300 && i.a.length >= 10 && i.a.length <= 1200);
  return cleaned.length ? cleaned.slice(0, 12) : undefined;
}
