/* Library page: loads every registered chapter and renders a card for each. */
(function () {
  'use strict';
  const list = window.CHAPTER_LIST || [];
  window.MIS_CHAPTERS = window.MIS_CHAPTERS || {};
  const grid = document.getElementById('chgrid');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* theme (shared with chapter pages) */
  const themeBtn = document.getElementById('themeBtn');
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
    try { localStorage.setItem('mis_theme', t); } catch (e) { /* ignore */ }
  }
  let saved = null; try { saved = localStorage.getItem('mis_theme'); } catch (e) { /* ignore */ }
  setTheme(saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  themeBtn.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));

  function progress(id, data) {
    let S = null;
    try { S = JSON.parse(localStorage.getItem('mis_' + id + '_interactive_v1')); } catch (e) { /* ignore */ }
    const total = data.topics.reduce((n, t) => n + t.questions.length, 0);
    let a = 0, c = 0;
    if (S && S.answers) Object.keys(S.answers).forEach(k => { a++; if (S.answers[k].ok) c++; });
    const best = S && S.mock && S.mock.length ? Math.max.apply(null, S.mock.map(m => Math.round(m.score / m.total * 100))) : null;
    return { total, a, c, best };
  }

  function render() {
    let totalA = 0, totalQ = 0;
    grid.innerHTML = list.map((ch, i) => {
      const d = window.MIS_CHAPTERS[ch.id];
      if (!d) {
        return `<div class="chcard broken" style="--h:${ch.hue || 245}"><div class="chnum">!</div><h3>${esc(ch.id)}</h3><p>Could not load <b>${esc(ch.file)}</b>. Check the path in chapters.js.</p></div>`;
      }
      const p = progress(ch.id, d);
      totalA += p.a; totalQ += p.total;
      const pct = p.total ? Math.round(p.a / p.total * 100) : 0;
      const status = p.a === 0 ? 'Not started' : p.a === p.total ? 'Completed' : 'In progress';
      return `<a class="chcard fade" style="--h:${ch.hue || 245};animation-delay:${i * 70}ms" href="chapter.html?c=${encodeURIComponent(ch.id)}">
        <div class="chtop"><span class="chicon">${ch.icon || '📘'}</span><span class="chstatus">${status}</span></div>
        <h3>${esc(d.title)}</h3>
        <p>${esc(d.subtitle || '')}</p>
        <div class="chmeta">
          <span><b>${d.topics.length}</b> topics</span>
          <span><b>${p.total}</b> MCQs</span>
          <span><b>${d.revision.length}</b> flashcards</span>
        </div>
        <div class="meta"><span>${p.a ? `${p.c}/${p.a} correct` : 'No answers yet'}</span><span>${p.best != null ? 'Best mock ' + p.best + '%' : pct + '%'}</span></div>
        <div class="bar ${pct === 100 ? 'good' : ''}"><i style="width:${pct}%"></i></div>
        <span class="chgo">${p.a ? 'Continue' : 'Open chapter'} →</span>
      </a>`;
    }).join('') || '<div class="empty"><div class="big">📭</div>No chapters registered yet. Add one in chapters.js.</div>';
    document.getElementById('libPill').textContent = `${list.length} chapter${list.length === 1 ? '' : 's'} · ${totalA}/${totalQ} answered`;
  }

  let pending = list.length;
  if (!pending) { render(); return; }
  const done = () => { if (--pending === 0) render(); };
  list.forEach(ch => {
    if (window.MIS_CHAPTERS[ch.id]) { done(); return; }
    const s = document.createElement('script');
    s.src = ch.file; s.onload = done; s.onerror = done;
    document.body.appendChild(s);
  });
  window.addEventListener('pageshow', e => { if (e.persisted && pending <= 0) render(); });
})();
