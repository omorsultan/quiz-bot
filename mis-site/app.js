/* =========================================================
   MIS Chapter 1 — App logic
   Routes: #/home  #/topic/<id>  #/quiz  #/mistakes  #/revision  #/search/<q>
   ========================================================= */
(function () {
  'use strict';

  const D = window.MIS_DATA;
  document.title = D.title + ' · Study Hub';
  const brandTitle = document.querySelector('.brand b'); if (brandTitle) brandTitle.textContent = D.title;
  const topics = D.topics;
  const L = 'ABCD';

  /* ---------- data indexes ---------- */
  const allQ = [];
  topics.forEach((t, i) => {
    t.idx = i;
    t.hue = Math.round((i * 360) / topics.length + 215) % 360;
    t.questions.forEach(q => { q.topic = t.id; allQ.push(q); });
  });
  const byN = {};
  allQ.forEach(q => { byN[q.n] = q; });
  const topicById = {};
  topics.forEach(t => { topicById[t.id] = t; });

  /* ---------- persistent state ---------- */
  const KEY = 'mis_' + window.MIS_ID + '_interactive_v1';
  let S = { answers: {}, known: {}, mock: [], theme: null };
  try { const r = JSON.parse(localStorage.getItem(KEY)); if (r) S = Object.assign(S, r); } catch (e) { /* ignore */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } };

  /* ---------- helpers ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const view = $('#view');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffle = a => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; };
  const fmt = s => { s = Math.max(0, Math.round(s)); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
  const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const plain = html => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent.replace(/\s+/g, ' ').trim(); };

  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toast.id); toast.id = setTimeout(() => t.classList.remove('show'), 2400);
  }

  function confetti() {
    const colors = ['#5b5bf0', '#8b5cf6', '#06b6d4', '#22c55e', '#f59e0b', '#ef4444'];
    for (let i = 0; i < 70; i++) {
      const c = document.createElement('i');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = colors[i % colors.length];
      c.style.animationDuration = 2 + Math.random() * 2 + 's';
      c.style.animationDelay = Math.random() * .6 + 's';
      c.style.borderRadius = Math.random() > .5 ? '50%' : '2px';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4800);
    }
  }

  /* ---------- stats ---------- */
  function topicStats(t) {
    let a = 0, c = 0;
    t.questions.forEach(q => { const r = S.answers[q.n]; if (r) { a++; if (r.ok) c++; } });
    return { a, c, total: t.questions.length };
  }
  function overall() {
    let a = 0, c = 0;
    allQ.forEach(q => { const r = S.answers[q.n]; if (r) { a++; if (r.ok) c++; } });
    return { a, c, total: allQ.length };
  }
  const wrongList = () => allQ.filter(q => S.answers[q.n] && !S.answers[q.n].ok);
  function mastered() {
    return topics.filter(t => { const s = topicStats(t); return s.a === s.total && s.c / s.total >= 0.8; }).length;
  }
  function record(q, sel) {
    if (!byN[q.n]) return; // mini-test questions are not part of tracked progress
    S.answers[q.n] = { sel, ok: sel === q.answer };
    save();
  }

  function ring(pct, size, label, cls) {
    const r = size / 2 - 10, c = 2 * Math.PI * r, h = size / 2;
    return `<svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle class="ring-bg" cx="${h}" cy="${h}" r="${r}"/>
      <circle class="ring-fg ${cls || ''}" cx="${h}" cy="${h}" r="${r}" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct / 100)}" style="--c:${c}" transform="rotate(-90 ${h} ${h})"/>
      <text class="ring-text" x="50%" y="50%" text-anchor="middle" dy=".35em">${label != null ? label : Math.round(pct) + '%'}</text></svg>`;
  }

  /* =========================================================
     Sidebar / topbar
     ========================================================= */
  function refreshSidebar() {
    const h = location.hash || '#/home';
    const o = overall();
    const wrong = wrongList().length;
    const link = (href, ico, label, badge) =>
      `<a href="${href}" class="${h === href ? 'active' : ''}"><span class="ico">${ico}</span><span class="lbl">${esc(label)}</span>${badge || ''}</a>`;
    let html = '<a href="index.html"><span class="ico">📚</span><span class="lbl">All chapters</span></a><div class="group">Overview</div>';
    html += link('#/home', '🏠', 'Dashboard');
    html += link('#/revision', '⚡', 'Final Revision', `<span class="badge">${Object.keys(S.known).length}/${D.revision.length}</span>`);
    html += '<div class="group">Practice</div>';
    html += `<a href="#/quiz" data-act="start-mini"><span class="ico">📝</span><span class="lbl">Mini Test (${D.mini.length})</span></a>`;
    html += `<a href="#/quiz" data-act="start-quick"><span class="ico">🎲</span><span class="lbl">Quick Quiz (15)</span></a>`;
    html += `<a href="#/quiz" data-act="start-mock"><span class="ico">⏱️</span><span class="lbl">Full Mock Exam (${allQ.length})</span></a>`;
    html += link('#/mistakes', '🩹', 'My Mistakes', `<span class="badge ${wrong ? 'bad' : ''}">${wrong}</span>`);
    html += '<div class="group">Topics</div>';
    topics.forEach(t => {
      const s = topicStats(t);
      const done = s.a === s.total;
      html += link('#/topic/' + t.id, t.icon, t.num + '. ' + t.title,
        `<span class="badge ${done ? 'done' : ''}">${s.a}/${s.total}</span>`);
    });
    $('#nav').innerHTML = html;
    $('#progressPill').textContent = `${o.a} / ${o.total} answered`;
  }

  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    $('#themeBtn').textContent = t === 'dark' ? '☀️' : '🌙';
    S.theme = t; save(); try { localStorage.setItem('mis_theme', t); } catch (e) { /* ignore */ }
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let globalTheme = null; try { globalTheme = localStorage.getItem('mis_theme'); } catch (e) { /* ignore */ }
  setTheme(globalTheme || S.theme || (prefersDark ? 'dark' : 'light'));
  $('#themeBtn').addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
  $('#menuBtn').addEventListener('click', () => document.body.classList.toggle('nav-open'));
  $('#scrim').addEventListener('click', () => document.body.classList.remove('nav-open'));
  $('#searchForm').addEventListener('submit', e => {
    e.preventDefault();
    const v = $('#searchInput').value.trim();
    if (v) location.hash = '#/search/' + encodeURIComponent(v);
  });

  /* =========================================================
     Question card (practice mode, persisted)
     ========================================================= */
  function explainHTML(q, sel) {
    const ok = sel === q.answer;
    const head = sel == null ? `💡 Answer: ${L[q.answer]}` : ok ? '✅ Correct!' : `❌ Not quite — the correct answer is ${L[q.answer]}`;
    return `<strong>${head}</strong><p>${esc(q.explain)}</p>`;
  }
  function qCard(q, sel, reveal) {
    const show = sel != null || reveal;
    const opts = q.options.map((o, i) => {
      let cls = 'opt';
      if (show) cls += i === q.answer ? ' correct' : i === sel ? ' wrong' : ' dim';
      return `<button class="${cls}" data-i="${i}" ${show ? 'disabled' : ''}><span class="letter">${L[i]}</span><span>${esc(o)}</span></button>`;
    }).join('');
    const state = sel == null ? '' : sel === q.answer ? 'ok' : 'no';
    return `<article class="qcard" data-n="${q.n}">
      <div class="qhead"><span class="qnum">Q${q.n}</span><h4>${esc(q.q)}</h4></div>
      <div class="opts">${opts}</div>
      <div class="explain ${show ? 'show' : ''} ${state}">${show ? explainHTML(q, sel) : ''}</div>
      ${show ? '' : '<button class="link reveal">Show answer</button>'}
    </article>`;
  }

  /* =========================================================
     Views
     ========================================================= */
  function renderHome() {
    const o = overall();
    const acc = o.a ? Math.round((o.c / o.a) * 100) : 0;
    const best = S.mock.length ? Math.max.apply(null, S.mock.map(m => Math.round((m.score / m.total) * 100))) : null;
    view.innerHTML = `
      <section class="fade">
        <div class="hero">
          <div>
            <h1>Master ${esc(D.title)} 🎓</h1>
            <p>${esc(D.subtitle)}. Learn each of the ${topics.length} topics, practise ${allQ.length} MCQs with instant explanations, then test yourself in a timed mock exam.</p>
            <div class="row">
              <a class="btn primary" href="#/topic/${topics[0].id}">Start learning →</a>
              <a class="btn" href="#/quiz" data-act="start-mock">⏱️ Mock exam</a>
              <a class="btn" href="#/revision">⚡ Flashcards</a>
            </div>
          </div>
          <div class="ring-wrap">${ring(o.total ? (o.a / o.total) * 100 : 0, 150)}</div>
        </div>

        <div class="stats">
          <div class="stat"><b>${o.a}<small class="muted"> / ${o.total}</small></b><span>Questions answered</span></div>
          <div class="stat"><b>${o.a ? acc + '%' : '—'}</b><span>Accuracy so far</span></div>
          <div class="stat"><b>${mastered()}<small class="muted"> / ${topics.length}</small></b><span>Topics mastered (≥ 80%)</span></div>
          <div class="stat"><b>${best == null ? '—' : best + '%'}</b><span>Best mock exam score</span></div>
        </div>

        <h2 class="sec-title">📚 ${topics.length} Topics</h2>
        <div class="tgrid">
          ${topics.map(t => {
            const s = topicStats(t);
            const pct = Math.round((s.a / s.total) * 100);
            return `<a class="tcard" href="#/topic/${t.id}" style="--h:${t.hue}">
              <div class="top"><span class="em">${t.icon}</span><span class="num">TOPIC ${t.num}</span></div>
              <h3>${esc(t.title)}</h3>
              <p>${esc(t.short)}</p>
              <div class="meta"><span>${s.total} questions</span><span>${s.a ? `${s.c}/${s.a} correct` : 'Not started'}</span></div>
              <div class="bar ${pct === 100 ? 'good' : ''}"><i style="width:${pct}%"></i></div>
            </a>`;
          }).join('')}
        </div>

        <div class="tip"><span class="e">💡</span><div><b>Exam tip</b><br>${esc(D.examTip)}</div></div>
        <div class="row" style="margin-top:22px"><button class="btn sm ghost" data-act="reset-all">Reset all progress</button></div>
      </section>`;
  }

  function renderTopic(id) {
    const t = topicById[id];
    if (!t) { location.hash = '#/home'; return; }
    const s = topicStats(t);
    const prev = topics[t.idx - 1], next = topics[t.idx + 1];
    view.innerHTML = `
      <section class="fade" style="--h:${t.hue}">
        <div class="crumbs"><a href="#/home">Dashboard</a> › <span>Topic ${t.num}</span></div>
        <div class="thead">
          <div class="em">${t.icon}</div>
          <div><div class="kicker">Topic ${t.num} of ${topics.length}</div><h1>${esc(t.title)}</h1></div>
        </div>

        <div class="card explain-card">${t.html}</div>

        <div class="practice-head">
          <h2>📝 Practice · ${t.questions.length} MCQs</h2>
          <div class="row">
            <span class="muted" id="tprog">${s.a}/${s.total} answered · ${s.c} correct</span>
            <button class="btn sm primary" data-act="start-topic" data-id="${t.id}">Quiz mode</button>
            <button class="btn sm ghost" data-act="reset-topic" data-id="${t.id}">Reset</button>
          </div>
        </div>
        <div class="bar" style="margin-bottom:16px"><i id="tbar" style="width:${(s.a / s.total) * 100}%"></i></div>
        <div class="practice">
          ${t.questions.map(q => qCard(q, S.answers[q.n] ? S.answers[q.n].sel : null, false)).join('')}
        </div>

        <div class="tnav">
          ${prev ? `<a class="btn" href="#/topic/${prev.id}">← ${esc(prev.title)}</a>` : '<span></span>'}
          ${next ? `<a class="btn primary" href="#/topic/${next.id}">Next: ${esc(next.title)} →</a>` : `<a class="btn primary" href="#/revision">Final revision →</a>`}
        </div>
      </section>`;
  }

  /* ---------- Quiz runner ---------- */
  let quiz = null;
  let timerId = null;

  function startQuiz(kind, id) {
    let list, title, instant = true, timed = 0;
    if (kind === 'mini') { list = D.mini.slice(); title = `Mini Test · ${D.mini.length} Questions`; instant = false; }
    else if (kind === 'mock') { list = shuffle(allQ); title = `Full Mock Exam · ${allQ.length} Questions`; instant = false; timed = Math.max(10, Math.round(allQ.length * 0.5)); }
    else if (kind === 'quick') { list = shuffle(allQ).slice(0, 15); title = 'Quick Quiz · 15 Random Questions'; }
    else if (kind === 'topic') { const t = topicById[id]; list = t.questions.slice(); title = 'Topic ' + t.num + ' · ' + t.title; }
    else if (kind === 'mistakes') { list = shuffle(wrongList()); title = 'Practice My Mistakes'; }
    if (!list || !list.length) { toast('No questions available for this quiz yet.'); return; }
    clearInterval(timerId);
    quiz = { kind, id, title, list, idx: 0, sel: list.map(() => null), instant, timed, start: Date.now(), done: false, remaining: timed ? timed * 60 : null };
    if (timed) {
      timerId = setInterval(() => {
        if (!quiz || quiz.done) { clearInterval(timerId); return; }
        quiz.remaining--;
        const el = $('#timer');
        if (el) { el.textContent = '⏱ ' + fmt(quiz.remaining); el.classList.toggle('low', quiz.remaining <= 60); }
        if (quiz.remaining <= 0) { toast("Time's up! Submitting…"); finishQuiz(); }
      }, 1000);
    }
    if (location.hash === '#/quiz') route(); else location.hash = '#/quiz';
  }

  function paletteHTML() {
    return quiz.list.map((q, i) => {
      const s = quiz.sel[i];
      let cls = 'pal';
      if (s != null) cls += quiz.instant ? (s === q.answer ? ' ok' : ' no') : ' answered';
      if (i === quiz.idx) cls += ' cur';
      return `<button class="${cls}" data-go="${i}">${i + 1}</button>`;
    }).join('');
  }

  function renderQuiz() {
    if (!quiz) { location.hash = '#/home'; return; }
    if (quiz.done) { renderResult(); return; }
    const q = quiz.list[quiz.idx];
    const sel = quiz.sel[quiz.idx];
    const locked = quiz.instant && sel != null;
    const last = quiz.idx === quiz.list.length - 1;
    const opts = q.options.map((o, i) => {
      let cls = 'opt';
      if (locked) cls += i === q.answer ? ' correct' : i === sel ? ' wrong' : ' dim';
      else if (sel === i) cls += ' picked';
      return `<button class="${cls}" data-i="${i}" ${locked ? 'disabled' : ''}><span class="letter">${L[i]}</span><span>${esc(o)}</span></button>`;
    }).join('');
    const answered = quiz.sel.filter(x => x != null).length;
    view.innerHTML = `
      <section class="quiz fade">
        <div class="quizbar">
          <div><h2>${esc(quiz.title)}</h2><span class="muted">Question ${quiz.idx + 1} of ${quiz.list.length} · ${answered} answered</span></div>
          ${quiz.timed ? `<div class="timer ${quiz.remaining <= 60 ? 'low' : ''}" id="timer">⏱ ${fmt(quiz.remaining)}</div>` : ''}
        </div>
        <div class="bar"><i style="width:${((quiz.idx + 1) / quiz.list.length) * 100}%"></i></div>

        <article class="qcard" id="quizbox">
          <div class="qhead"><span class="qnum">${String(q.n).startsWith('M') ? 'Q' + (quiz.idx + 1) : 'Q' + q.n}</span><h4>${esc(q.q)}</h4></div>
          <div class="opts">${opts}</div>
          <div class="explain ${locked ? 'show ' + (sel === q.answer ? 'ok' : 'no') : ''}">${locked ? explainHTML(q, sel) : ''}</div>
          <p class="hint">Tip: press <b>A–D</b> to answer, <b>←</b>/<b>→</b> to move.</p>
        </article>

        <div class="quiznav">
          <button class="btn" data-act="prev" ${quiz.idx === 0 ? 'disabled' : ''}>← Previous</button>
          <div class="row">
            ${last
              ? `<button class="btn good" data-act="submit">${quiz.kind === 'mini' ? 'Submit answers' : 'Finish & see results'} ✓</button>`
              : `<button class="btn primary" data-act="next">Next →</button>`}
          </div>
        </div>

        <details class="palette" open>
          <summary>Question palette</summary>
          <div class="pgrid">${paletteHTML()}</div>
          ${quiz.instant ? '' : '<p class="hint">Answers are revealed after you submit. You can change an answer any time before that.</p>'}
        </details>
      </section>`;
  }

  function finishQuiz() {
    if (!quiz || quiz.done) return;
    clearInterval(timerId);
    quiz.done = true;
    quiz.elapsed = Math.round((Date.now() - quiz.start) / 1000);
    quiz.list.forEach((q, i) => { if (quiz.sel[i] != null) record(q, quiz.sel[i]); });
    const score = quiz.list.reduce((n, q, i) => n + (quiz.sel[i] === q.answer ? 1 : 0), 0);
    if (quiz.kind === 'mock') {
      S.mock.push({ date: Date.now(), score, total: quiz.list.length, time: quiz.elapsed });
      S.mock = S.mock.slice(-20); save();
    }
    refreshSidebar();
    if (location.hash === '#/quiz') renderResult(); else location.hash = '#/quiz';
  }

  let reviewFilter = 'all';
  function renderResult() {
    const n = quiz.list.length;
    const score = quiz.list.reduce((c, q, i) => c + (quiz.sel[i] === q.answer ? 1 : 0), 0);
    const skipped = quiz.sel.filter(x => x == null).length;
    const pct = Math.round((score / n) * 100);
    const cls = pct >= 75 ? 'good' : pct >= 50 ? 'mid' : 'low';
    const msg = pct >= 90 ? 'Outstanding! 🏆' : pct >= 75 ? 'Great job! 🎉' : pct >= 50 ? 'Good start — review the explanations 📘' : 'Keep practising, you will get there 💪';
    if (pct >= 80 && !quiz.celebrated) { quiz.celebrated = true; setTimeout(confetti, 250); }
    const items = quiz.list.map((q, i) => {
      const s = quiz.sel[i];
      const st = s == null ? 'skip' : s === q.answer ? 'ok' : 'no';
      return { q, i, s, st };
    }).filter(x => reviewFilter === 'all' || (reviewFilter === 'wrong' && x.st !== 'ok'));
    view.innerHTML = `
      <section class="fade">
        <div class="card result">
          ${ring(pct, 170, pct + '%', cls)}
          <h2>${msg}</h2>
          <p class="muted">${esc(quiz.title)}</p>
          <div class="rstats">
            <div><b>${score}/${n}</b><span>Score</span></div>
            <div><b>${n - score - skipped}</b><span>Wrong</span></div>
            <div><b>${skipped}</b><span>Skipped</span></div>
            <div><b>${fmt(quiz.elapsed)}</b><span>Time</span></div>
          </div>
          <div class="row" style="justify-content:center">
            <button class="btn primary" data-act="retry">↻ Try again</button>
            ${score < n ? '<button class="btn" data-act="start-mistakes">🩹 Practice mistakes</button>' : ''}
            <a class="btn" href="#/home">Dashboard</a>
          </div>
        </div>

        <h2 class="sec-title">🔎 Review</h2>
        <div class="tabs">
          <button class="${reviewFilter === 'all' ? 'on' : ''}" data-act="filter" data-f="all">All (${n})</button>
          <button class="${reviewFilter === 'wrong' ? 'on' : ''}" data-act="filter" data-f="wrong">Wrong / skipped (${n - score})</button>
        </div>
        <div class="review">
          ${items.length ? items.map(({ q, i, s, st }) => `
            <div class="ritem ${st}">
              <h4>${i + 1}. ${esc(q.q)}</h4>
              <div class="ans"><span class="tag ${st}">${st === 'ok' ? 'CORRECT' : st === 'no' ? 'WRONG' : 'SKIPPED'}</span>
                ${s == null ? 'You did not answer this question.' : `Your answer: <b>${L[s]}. ${esc(q.options[s])}</b>`}</div>
              ${st === 'ok' ? '' : `<div class="ans"><span class="tag ok">ANSWER</span><b>${L[q.answer]}. ${esc(q.options[q.answer])}</b></div>`}
              <div class="why">💡 ${esc(q.explain)}</div>
            </div>`).join('') : '<div class="empty"><div class="big">🎉</div>Everything was correct!</div>'}
        </div>
      </section>`;
  }

  /* ---------- Mistakes ---------- */
  function renderMistakes() {
    const w = wrongList();
    view.innerHTML = `
      <section class="fade">
        <h1 style="margin-bottom:6px">🩹 My Mistakes</h1>
        <p class="muted" style="margin-bottom:18px">Questions you answered incorrectly. Review them, then practise until they are all green.</p>
        ${w.length ? `
          <div class="row" style="margin-bottom:18px">
            <button class="btn primary" data-act="start-mistakes">Practice ${w.length} mistake${w.length > 1 ? 's' : ''}</button>
          </div>
          <div class="review">
            ${w.map(q => { const s = S.answers[q.n].sel; return `
              <div class="ritem no">
                <h4>Q${q.n}. ${esc(q.q)}</h4>
                <div class="ans"><span class="tag no">YOUR ANSWER</span>${L[s]}. ${esc(q.options[s])}</div>
                <div class="ans"><span class="tag ok">CORRECT</span><b>${L[q.answer]}. ${esc(q.options[q.answer])}</b></div>
                <div class="why">💡 ${esc(q.explain)} · <a class="link" href="#/topic/${q.topic}">Open topic</a></div>
              </div>`; }).join('')}
          </div>` : `
          <div class="card empty"><div class="big">🎉</div>
            <h3>No mistakes recorded</h3>
            <p>${overall().a ? 'Everything you answered so far is correct. Keep going!' : 'Answer some questions first — wrong answers will appear here.'}</p>
            <div class="row" style="justify-content:center;margin-top:14px"><button class="btn primary" data-act="start-quick">Take a quick quiz</button></div>
          </div>`}
      </section>`;
  }

  /* ---------- Revision (flashcards + table) ---------- */
  let fc = null;
  function renderRevision() {
    if (!fc) fc = { deck: D.revision.slice(), i: 0, flip: false, tab: 'cards' };
    const knownCount = Object.keys(S.known).length;
    let body;
    if (fc.tab === 'cards') {
      const c = fc.deck[fc.i];
      body = `
        <div class="fc-wrap">
          <div class="fc ${fc.flip ? 'flip' : ''}" data-act="flip" tabindex="0" aria-label="Flashcard, click to flip">
            <div class="fc-inner">
              <div class="fc-face fc-front"><small>Term</small><b>${esc(c.term)}</b></div>
              <div class="fc-face fc-back"><small>Key fact</small><b>${esc(c.fact)}</b></div>
            </div>
          </div>
          <div class="fc-count">Card ${fc.i + 1} of ${fc.deck.length} · ✅ ${knownCount} marked as known ${S.known[c.term] ? '· <b>this one is known</b>' : ''}</div>
          <div class="fc-ctl">
            <button class="btn" data-act="fc-prev">← Prev</button>
            <button class="btn" data-act="flip">↻ Flip</button>
            <button class="btn" data-act="fc-next">Next →</button>
          </div>
          <div class="fc-ctl">
            <button class="btn good sm" data-act="fc-known">✓ I know this</button>
            <button class="btn sm" data-act="fc-again">✗ Review again</button>
            <button class="btn sm ghost" data-act="fc-shuffle">🔀 Shuffle</button>
            <button class="btn sm ghost" data-act="fc-clear">Clear known</button>
          </div>
          <p class="hint" style="text-align:center">Keyboard: <b>Space</b> flips · <b>←</b>/<b>→</b> navigate</p>
        </div>`;
    } else {
      body = `<div class="card"><table class="tbl"><thead><tr><th>Topic</th><th>Important fact</th></tr></thead><tbody>
        ${D.revision.map(r => `<tr><td><b>${esc(r.term)}</b></td><td>${esc(r.fact)}</td></tr>`).join('')}
        </tbody></table></div>`;
    }
    view.innerHTML = `
      <section class="fade">
        <h1 style="margin-bottom:6px">⚡ Final Revision</h1>
        <p class="muted">The most important MCQ facts to memorize before your exam.</p>
        <div class="tabs" style="margin-top:14px">
          <button class="${fc.tab === 'cards' ? 'on' : ''}" data-act="rev-tab" data-tab="cards">🃏 Flashcards</button>
          <button class="${fc.tab === 'table' ? 'on' : ''}" data-act="rev-tab" data-tab="table">📋 Cheat-sheet</button>
        </div>
        ${body}
        <div class="tip"><span class="e">💡</span><div><b>Exam tip</b><br>${esc(D.examTip)}</div></div>
      </section>`;
  }

  /* ---------- Search ---------- */
  let topicText = null;
  function renderSearch(raw) {
    const query = decodeURIComponent(raw || '').trim();
    $('#searchInput').value = query;
    if (!topicText) topicText = topics.map(t => ({ t, text: plain(t.html) }));
    const q = query.toLowerCase();
    const mark = s => query ? esc(s).replace(new RegExp(reEsc(esc(query)), 'gi'), m => `<mark>${m}</mark>`) : esc(s);
    const tHits = query ? topicText.filter(x => (x.t.title + ' ' + x.text).toLowerCase().includes(q)) : [];
    const qHits = query ? allQ.filter(x => (x.q + ' ' + x.options.join(' ') + ' ' + x.explain).toLowerCase().includes(q)) : [];
    const snippet = (text) => {
      const i = text.toLowerCase().indexOf(q);
      if (i < 0) return text.slice(0, 140);
      const a = Math.max(0, i - 60);
      return (a ? '…' : '') + text.slice(a, i + query.length + 90) + '…';
    };
    view.innerHTML = `
      <section class="fade">
        <h1 style="margin-bottom:6px">🔍 Search</h1>
        <p class="muted" style="margin-bottom:18px">${query ? `${tHits.length} topic${tHits.length === 1 ? '' : 's'} and ${qHits.length} question${qHits.length === 1 ? '' : 's'} match “${esc(query)}”` : 'Type something in the search box above.'}</p>
        ${tHits.length ? `<h3 class="sec-title" style="margin-top:6px">Topics</h3>` + tHits.map(x => `
          <a class="hit" href="#/topic/${x.t.id}"><b>${x.t.icon} Topic ${x.t.num}: ${mark(x.t.title)}</b><span>${mark(snippet(x.text))}</span></a>`).join('') : ''}
        ${qHits.length ? `<h3 class="sec-title">Questions</h3>` + qHits.map(x => `
          <a class="hit" href="#/topic/${x.topic}"><b>Q${x.n}. ${mark(x.q)}</b><span>Answer: ${L[x.answer]}. ${mark(x.options[x.answer])} — ${mark(x.explain)}</span></a>`).join('') : ''}
        ${query && !tHits.length && !qHits.length ? '<div class="empty"><div class="big">🤷</div>No matches found. Try another keyword like “ERP”, “ETL” or “culture”.</div>' : ''}
      </section>`;
  }

  /* =========================================================
     Router
     ========================================================= */
  function route() {
    const hash = location.hash || '#/home';
    const parts = hash.slice(2).split('/');
    document.body.classList.remove('nav-open');
    switch (parts[0]) {
      case 'topic': renderTopic(parts[1]); break;
      case 'quiz': reviewFilter = quiz && !quiz.done ? 'all' : reviewFilter; renderQuiz(); break;
      case 'mistakes': renderMistakes(); break;
      case 'revision': renderRevision(); break;
      case 'search': renderSearch(parts.slice(1).join('/')); break;
      default: renderHome();
    }
    refreshSidebar();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  /* =========================================================
     Events (delegation)
     ========================================================= */
  function updateTopicProgress(t) {
    const s = topicStats(t);
    const p = $('#tprog'), b = $('#tbar');
    if (p) p.textContent = `${s.a}/${s.total} answered · ${s.c} correct`;
    if (b) b.style.width = (s.a / s.total) * 100 + '%';
  }

  function handleAct(act, el) {
    switch (act) {
      case 'start-mini': startQuiz('mini'); break;
      case 'start-quick': startQuiz('quick'); break;
      case 'start-mock':
        startQuiz('mock'); break;
      case 'start-topic': startQuiz('topic', el.dataset.id); break;
      case 'start-mistakes': startQuiz('mistakes'); break;
      case 'prev': if (quiz.idx > 0) { quiz.idx--; renderQuiz(); } break;
      case 'next': if (quiz.idx < quiz.list.length - 1) { quiz.idx++; renderQuiz(); } break;
      case 'submit': {
        const left = quiz.sel.filter(x => x == null).length;
        if (left && !window.confirm(`You have ${left} unanswered question${left > 1 ? 's' : ''}. Submit anyway?`)) return;
        finishQuiz(); break;
      }
      case 'retry': startQuiz(quiz.kind, quiz.id); break;
      case 'filter': reviewFilter = el.dataset.f; renderResult(); break;
      case 'reset-topic': {
        const t = topicById[el.dataset.id];
        t.questions.forEach(q => { delete S.answers[q.n]; });
        save(); renderTopic(t.id); refreshSidebar(); toast('Topic progress reset'); break;
      }
      case 'reset-all':
        if (window.confirm('Reset ALL progress, mock results and flashcard marks?')) {
          S.answers = {}; S.known = {}; S.mock = []; save(); route(); toast('Progress reset');
        }
        break;
      case 'flip': fc.flip = !fc.flip; renderRevision(); break;
      case 'fc-prev': fc.i = (fc.i - 1 + fc.deck.length) % fc.deck.length; fc.flip = false; renderRevision(); break;
      case 'fc-next': fc.i = (fc.i + 1) % fc.deck.length; fc.flip = false; renderRevision(); break;
      case 'fc-known': S.known[fc.deck[fc.i].term] = 1; save(); fc.i = (fc.i + 1) % fc.deck.length; fc.flip = false; renderRevision(); refreshSidebar(); break;
      case 'fc-again': delete S.known[fc.deck[fc.i].term]; save(); fc.i = (fc.i + 1) % fc.deck.length; fc.flip = false; renderRevision(); refreshSidebar(); break;
      case 'fc-shuffle': fc.deck = shuffle(D.revision); fc.i = 0; fc.flip = false; renderRevision(); break;
      case 'fc-clear': S.known = {}; save(); renderRevision(); refreshSidebar(); break;
      case 'rev-tab': fc.tab = el.dataset.tab; renderRevision(); break;
    }
  }

  document.addEventListener('click', e => {
    const act = e.target.closest('[data-act]');
    if (act) {
      // sidebar quiz links keep their href; stop navigation duplication
      if (act.tagName === 'A') e.preventDefault();
      handleAct(act.dataset.act, act);
      return;
    }
    const opt = e.target.closest('.opt');
    if (opt && !opt.disabled) {
      const i = +opt.dataset.i;
      if (opt.closest('#quizbox')) {
        if (!quiz || quiz.done) return;
        if (quiz.instant && quiz.sel[quiz.idx] != null) return;
        quiz.sel[quiz.idx] = i;
        if (quiz.instant) record(quiz.list[quiz.idx], i), refreshSidebar();
        renderQuiz();
        return;
      }
      const card = opt.closest('.qcard');
      if (card && card.closest('.practice')) {
        const q = byN[card.dataset.n];
        record(q, i);
        card.outerHTML = qCard(q, i, false);
        updateTopicProgress(topicById[q.topic]);
        refreshSidebar();
      }
      return;
    }
    const rev = e.target.closest('.reveal');
    if (rev) {
      const card = rev.closest('.qcard');
      const q = byN[card.dataset.n];
      card.outerHTML = qCard(q, null, true);
      return;
    }
    const pal = e.target.closest('.pal');
    if (pal && quiz) { quiz.idx = +pal.dataset.go; renderQuiz(); }
  });

  document.addEventListener('keydown', e => {
    if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    const h = location.hash || '';
    if (h === '#/quiz' && quiz && !quiz.done) {
      const k = e.key.toLowerCase();
      const idx = 'abcd'.indexOf(k);
      const q = quiz.list[quiz.idx];
      if (idx > -1 && idx < q.options.length) {
        if (quiz.instant && quiz.sel[quiz.idx] != null) return;
        quiz.sel[quiz.idx] = idx;
        if (quiz.instant) record(q, idx), refreshSidebar();
        renderQuiz();
      } else if (e.key === 'ArrowRight' && quiz.idx < quiz.list.length - 1) { quiz.idx++; renderQuiz(); }
      else if (e.key === 'ArrowLeft' && quiz.idx > 0) { quiz.idx--; renderQuiz(); }
    } else if (h === '#/revision' && fc && fc.tab === 'cards') {
      if (e.key === ' ') { e.preventDefault(); handleAct('flip'); }
      else if (e.key === 'ArrowRight') handleAct('fc-next');
      else if (e.key === 'ArrowLeft') handleAct('fc-prev');
    }
  });

  /* ---------- boot ---------- */
  route();
})();
