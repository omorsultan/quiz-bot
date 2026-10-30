/* Turns pasted text into the QUESTIONS format used by the quiz.

   Accepted input
   1) The same layout as your notes:
        ### Question 1
        Question text ...
        A. option
        B. option
        C. option
        D. option
        Answer: B. option
        Explanation: text (formulas like \\[ ... \\] and \\( ... \\) are cleaned up)
   2) A JSON list: [{"q":"...","o":["a","b","c","d"],"a":1,"e":"..."}]

   window.QuizParser.parse(text) returns { questions: [...], skipped: [...] } */
(function () {
  'use strict';

  var SYMBOLS = {
    times: ' × ', cdot: ' · ', div: ' ÷ ', pm: ' ± ', cup: ' ∪ ', cap: ' ∩ ',
    leq: ' ≤ ', geq: ' ≥ ', neq: ' ≠ ', le: ' ≤ ', ge: ' ≥ ', ne: ' ≠ ', approx: ' ≈ ',
    rightarrow: ' → ', infty: '∞', sum: '∑',
    mu: 'μ', alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', lambda: 'λ', sigma: 'σ',
    theta: 'θ', pi: 'π', eta: 'η',
    log: 'log ', ln: 'ln ', left: '', right: ''
  };
  var SYMBOL_RE = new RegExp('\\\\(' + Object.keys(SYMBOLS).sort(function (a, b) { return b.length - a.length; }).join('|') + ')', 'g');

  var ANSWER_RE = /^\s*(?:\*\*)?(?:Correct\s+)?Ans(?:wer)?(?:\*\*)?\s*[:\-–]\s*(?:\*\*)?\(?([A-Fa-f])\b/i;
  var EXPLAIN_RE = /^\s*(?:\*\*)?(?:Explanation|Reason|Solution)(?:\*\*)?\s*[:\-–]\s*(.*)$/i;
  var OPTION_RE = /^\s*(?:[-*]\s+)?\(?([A-Fa-f])[.)]\s*(.+?)\s*$/;
  var HEAD_RE = /^\s*(?:#{1,6}\s*)?(?:\*\*)?\s*(?:Question|Q)\s*\.?\s*(\d+)\s*(?:\*\*)?\s*[.:)\-]?\s*(.*)$/i;
  var NUMBERED_RE = /^\s*(\d+)[.)]\s+(.+)$/;

  /* ---------- text helpers ---------- */
  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function wrap(x) {
    x = x.trim();
    return /^[\w.Ͱ-Ͽ]+$/.test(x) ? x : '(' + x + ')';
  }

  // LaTeX-ish text (already HTML-escaped) to readable HTML
  function tex(s) {
    s = s.replace(/\\\\/g, '\\');
    s = s.replace(/\\text\{([^{}]*)\}/g, '$1')
         .replace(/\\(?:mathrm|mathbf|textbf|operatorname)\{([^{}]*)\}/g, '$1');
    s = s.replace(/\\(log|ln)_(\d+|[a-z])/g, ' $1<sub>$2</sub> ');
    s = s.replace(SYMBOL_RE, function (m, k) { return SYMBOLS[k]; });
    s = s.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, function (m, a, b) { return wrap(a) + ' / ' + wrap(b); });
    s = s.replace(/\\[ ,;:!]/g, ' ').replace(/\\%/g, '%').replace(/\\([{}_#$])/g, '$1');
    s = s.replace(/_\{([^{}]*)\}/g, '<sub>$1</sub>').replace(/_(\d+|[A-Za-zͰ-Ͽ])/g, '<sub>$1</sub>');
    s = s.replace(/\^\{([^{}]*)\}/g, '<sup>$1</sup>').replace(/\^(\d+|[A-Za-z])/g, '<sup>$1</sup>');
    s = s.replace(/\\/g, '');
    return s.replace(/ {2,}/g, ' ').trim();
  }

  // One line of text: `code`, \( inline math \), **bold**
  function inline(raw) {
    var codes = [];
    var s = esc(raw);
    s = s.replace(/`([^`]+)`/g, function (m, c) { codes.push(c); return '\u0000' + (codes.length - 1) + '\u0000'; });
    s = s.replace(/\\{1,2}\(([\s\S]*?)\\{1,2}\)/g, function (m, a) { return tex(a); });
    s = s.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
    s = s.replace(/\u0000(\d+)\u0000/g, function (m, i) { return '<code>' + codes[i] + '</code>'; });
    return s;
  }

  // Explanation lines to HTML: paragraphs, bullet lists, formula boxes
  function explainHtml(lines) {
    var text = lines.join('\n');
    var disp = [];
    text = text.replace(/\\{1,2}\[([\s\S]*?)\\{1,2}\]/g, function (m, a) {
      disp.push(a);
      return '\n@@D' + (disp.length - 1) + '@@\n';
    });

    var out = [];       // {type:'p'|'f'|'ul', html|items}
    var list = null;
    function closeList() { if (list) { out.push({ type: 'ul', items: list }); list = null; } }

    text.split('\n').forEach(function (line) {
      var t = line.replace(/\\$/, '').trim();
      if (!t) { closeList(); return; }
      var d = t.match(/^@@D(\d+)@@$/);
      if (d) {
        closeList();
        var html = tex(esc(disp[d[1]]));
        var last = out[out.length - 1];
        if (last && last.type === 'f') last.parts.push(html);
        else out.push({ type: 'f', parts: [html] });
        return;
      }
      var li = t.match(/^[-*•]\s+(.*)$/);
      if (li) { if (!list) list = []; list.push(inline(li[1])); return; }
      closeList();
      out.push({ type: 'p', html: inline(t) });
    });
    closeList();

    if (!out.length) return '<p>No explanation was given for this question.</p>';
    return out.map(function (b) {
      if (b.type === 'f') return "<div class='f'>" + b.parts.join('<br>') + '</div>';
      if (b.type === 'ul') return '<ul>' + b.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
      return '<p>' + b.html + '</p>';
    }).join('');
  }

  /* ---------- markdown-style input ---------- */
  function parseMarkdown(text) {
    var lines = text.replace(/\r\n?/g, '\n').split('\n');
    var matchHead = function (l) { var m = HEAD_RE.exec(l); return m ? { num: m[1], rest: m[2] } : null; };
    if (!lines.some(matchHead)) {
      matchHead = function (l) { var m = NUMBERED_RE.exec(l); return m ? { num: m[1], rest: m[2] } : null; };
    }

    var questions = [], skipped = [];
    var cur = null, state = 'none', inFence = false;

    function finish() {
      if (!cur) return;
      var n = cur.num;
      var stem = cur.stem.join(' ').trim();
      if (!stem && !cur.code.length) skipped.push('Q' + n + ' (no question text)');
      else if (cur.opts.length < 2) skipped.push('Q' + n + ' (needs at least 2 options A, B, ...)');
      else if (cur.ans < 0 || cur.ans >= cur.opts.length) skipped.push('Q' + n + ' (no valid "Answer: X" line)');
      else {
        var q = { q: inline(stem), o: cur.opts.map(inline), a: cur.ans, e: explainHtml(cur.exp) };
        if (cur.code.length) q.code = cur.code.join('\n').replace(/\s+$/, '');
        questions.push(q);
      }
      cur = null;
    }

    lines.forEach(function (line) {
      if (state === 'stem' && /^\s*```/.test(line)) { inFence = !inFence; return; }
      if (state === 'stem' && inFence) { cur.code.push(line); return; }

      var h = matchHead(line);
      if (h) {
        finish();
        cur = { num: h.num, stem: [], code: [], opts: [], ans: -1, exp: [] };
        state = 'stem';
        inFence = false;
        if (h.rest.trim()) cur.stem.push(h.rest.replace(/\\$/, '').trim());
        return;
      }
      if (/^\s*#{1,6}\s+\S/.test(line)) { finish(); state = 'none'; return; }
      if (state === 'none') return;

      var t = line.replace(/\\$/, '').trim();

      if (state === 'stem' || state === 'opts') {
        var a = ANSWER_RE.exec(t);
        if (a) { cur.ans = a[1].toUpperCase().charCodeAt(0) - 65; state = 'ans'; return; }
        var e = EXPLAIN_RE.exec(t);
        if (e) { state = 'exp'; if (e[1]) cur.exp.push(e[1]); return; }
        var o = OPTION_RE.exec(t);
        if (o && (state === 'opts' || /^a$/i.test(o[1]))) { cur.opts.push(o[2]); state = 'opts'; return; }
        if (!t) return;
        if (state === 'opts') cur.opts[cur.opts.length - 1] += ' ' + t;
        else cur.stem.push(t);
        return;
      }

      if (state === 'ans') {
        var e2 = EXPLAIN_RE.exec(t);
        if (e2) { state = 'exp'; if (e2[1]) cur.exp.push(e2[1]); return; }
        if (t) { state = 'exp'; cur.exp.push(line.replace(/\\$/, '')); }
        return;
      }

      cur.exp.push(line.replace(/\\$/, ''));   // state === 'exp'
    });
    finish();

    return { questions: questions, skipped: skipped };
  }

  /* ---------- JSON input ---------- */
  function parseJson(text) {
    var data = JSON.parse(text);
    if (!Array.isArray(data)) data = data.questions;
    if (!Array.isArray(data)) throw new Error('not a list');
    var questions = [], skipped = [];
    data.forEach(function (item, i) {
      var opts = item.o || item.options;
      var ans = item.a !== undefined ? item.a : item.answer;
      if (typeof ans === 'string') ans = ans.trim().toUpperCase().charCodeAt(0) - 65;
      var q = item.q || item.question;
      if (!q || !Array.isArray(opts) || opts.length < 2 || opts.length > 6 || !(ans >= 0 && ans < opts.length)) {
        skipped.push('item ' + (i + 1) + ' (needs q, 2-6 options and a valid answer)');
        return;
      }
      var out = {
        q: inline(String(q)),
        o: opts.map(function (x) { return inline(String(x)); }),
        a: ans,
        e: explainHtml(String(item.e || item.explanation || '').split('\n'))
      };
      if (item.code) out.code = String(item.code);
      questions.push(out);
    });
    return { questions: questions, skipped: skipped };
  }

  window.QuizParser = {
    parse: function (text) {
      var t = String(text || '').trim();
      if (/^[\[{]/.test(t)) {
        try { return parseJson(t); } catch (err) { /* not JSON, read it as text */ }
      }
      return parseMarkdown(String(text || ''));
    }
  };
})();
