/* MIS Chapter 1 – interactive revision app. Content lives in data.js (MIS_DATA). */
(() => {
  let D = CHAPTERS.ch1.data, CHID = "ch1";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const view = $("#view");
  let KEY = "mis-ch1-v1";

  /* ---------- state (separate progress per chapter) ---------- */
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  let S = { read: [], check: [], known: [], best: 0 };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };
  const getTheme = () => { try { return localStorage.getItem("mis-theme"); } catch { return null; } };
  const setTheme = t => { try { localStorage.setItem("mis-theme", t); } catch {} };
  const toggle = (arr, v) => { const i = arr.indexOf(v); i < 0 ? arr.push(v) : arr.splice(i, 1); };
  const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const strip = h => h.replace(/<[^>]+>/g, "");
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 1800);
  }
  function confetti(n = 60) {
    const colors = ["#5b5bf0", "#8a5cf6", "#ff7a59", "#17a673", "#f5a623"];
    for (let i = 0; i < n; i++) {
      const c = document.createElement("i"); c.className = "confetti";
      c.style.left = Math.random() * 100 + "vw"; c.style.background = colors[i % colors.length];
      c.style.animationDuration = 2 + Math.random() * 2 + "s"; c.style.animationDelay = Math.random() * .6 + "s";
      document.body.appendChild(c); setTimeout(() => c.remove(), 5000);
    }
  }

  /* ---------- theme ---------- */
  function applyTheme() {
    const t = getTheme() || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = t; $("#themeBtn").textContent = t === "dark" ? "☀️" : "🌙";
  }
  $("#themeBtn").onclick = () => { setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"); applyTheme(); };

  /* ---------- progress + nav ---------- */
  function updateProgress() {
    const total = D.topics.length + D.checklist.length;
    const done = S.read.length + S.check.length;
    const pct = Math.round(done / total * 100);
    $("#ringFg").style.strokeDashoffset = 100 - pct; $("#ringText").textContent = pct + "%";
    $$("#topicNav a").forEach(a => { $(".dot", a).textContent = S.read.includes(a.dataset.id) ? "✅" : ""; });
  }
  function buildNav() {
    $("#topicNav").innerHTML = D.topics.map(t =>
      `<a href="#/learn/${t.id}" data-id="${t.id}"><span class="num">${t.num}</span>${t.title}${t.important ? " ⭐" : ""}<span class="dot"></span></a>`).join("");
  }
  function setActive(route, id) {
    $$(".sidebar a").forEach(a => a.classList.remove("active"));
    if (id) $(`#topicNav a[data-id="${id}"]`)?.classList.add("active");
    else $(`.sidebar a[data-route="${route}"]`)?.classList.add("active");
  }
  const closeMenu = () => { $("#sidebar").classList.remove("open"); $("#scrim").classList.remove("show"); };
  $("#menuBtn").onclick = () => { $("#sidebar").classList.toggle("open"); $("#scrim").classList.toggle("show"); };
  $("#scrim").onclick = closeMenu;

  /* ---------- router ---------- */
  function route() {
    const [, page = "home", arg] = location.hash.split("/");
    closeMenu(); $("#search").value = "";
    const pages = { home: renderHome, learn: () => arg ? renderTopic(arg) : renderLearn(), flashcards: renderFlash, quiz: renderQuiz, match: renderMatch, checklist: renderChecklist };
    (pages[page] || renderHome)();
    setActive(page, page === "learn" ? arg : null);
    updateProgress(); window.scrollTo({ top: 0 }); view.focus({ preventScroll: true });
  }
  addEventListener("hashchange", route);

  /* ---------- HOME ---------- */
  function renderHome() {
    const stars = D.topics.filter(t => t.important);
    view.innerHTML = `
      <section class="hero">
        <h1>Master ${D.title}</h1>
        <p>Learn the notes, flip flashcards, test yourself with a quiz and tick off the memorization checklist. Your progress is saved automatically.</p>
        <a class="btn" href="#/learn">Start learning →</a>
      </section>
      <div class="stats">
        <div class="card stat"><b>${D.topics.length}</b><span>Topics</span></div>
        <div class="card stat"><b>${D.flashcards.length}</b><span>Flashcards</span></div>
        <div class="card stat"><b>${D.quiz.length}</b><span>Quiz questions</span></div>
        <div class="card stat"><b>${S.best}%</b><span>Best quiz score</span></div>
      </div>
      <h2>Choose a mode</h2>
      <div class="mode-grid" style="margin-top:14px">
        ${[["learn", "📚", "Learn", `Read all ${D.topics.length} topics with clean cards and tables.`],
           ["flashcards", "🃏", "Flashcards", "Flip, mark as known, and shuffle."],
           ["quiz", "📝", "Quiz", "10 random questions with instant feedback."],
           ["match", "🔗", "Match game", "Pair terms with their meanings."],
           ["checklist", "✅", "Checklist", `The ${D.checklist.length}-point last-minute memorization list.`]]
          .map(([r, i, t, p]) => `<a class="card mode" href="#/${r}"><div class="big">${i}</div><h3>${t}</h3><p>${p}</p></a>`).join("")}
      </div>
      <div class="callout"><b>Exam tip:</b> ${D.examTip} (Starred topics: ${stars.map(t => t.num).join(", ")}.)</div>`;
  }

  /* ---------- LEARN ---------- */
  function renderLearn() {
    view.innerHTML = `<h1>Learn</h1><p class="lead">Tap a topic. Starred topics (⭐) are the most important for the exam.</p>
      <div class="topic-grid">${D.topics.map(t => `
        <a class="card topic-card" href="#/learn/${t.id}">
          <span class="read">${S.read.includes(t.id) ? "✅" : ""}</span>
          <div class="ico">${t.icon}</div><h3>${t.num}. ${t.title}</h3><p>${t.summary}</p>
          ${t.important ? '<span class="chip star">⭐ Important</span>' : '<span class="chip">Topic ' + t.num + "</span>"}
        </a>`).join("")}</div>`;
  }

  function sectionHTML(s) {
    let body = "";
    if (s.type === "list") body = `<ul class="bullets ${s.ordered ? "ordered" : ""}">${s.items.map(i => `<li>${i}</li>`).join("")}</ul>`;
    else if (s.type === "text") body = `<p>${s.body}</p>`;
    else if (s.type === "table") body = `<table><thead><tr>${s.headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${s.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
    else if (s.type === "formula") body = `<div class="formula">${s.body}</div>`;
    else if (s.type === "terms") body = s.items.map((i, n) => `<div class="term"><strong>${s.ordered ? n + 1 + ". " : ""}${i.term}</strong><span class="def">${i.def}</span></div>`).join("");
    return `<section class="section"><h3>${s.heading}</h3>${body}</section>`;
  }

  function renderTopic(id) {
    const i = D.topics.findIndex(t => t.id === id); const t = D.topics[i];
    if (!t) return renderLearn();
    const prev = D.topics[i - 1], next = D.topics[i + 1];
    view.innerHTML = `
      <div class="card">
        <div class="topic-head"><div class="ico">${t.icon}</div>
          <div><span class="chip ${t.important ? "star" : ""}">${t.important ? "⭐ Important" : "Topic " + t.num}</span>
          <h1>${t.num}. ${t.title}</h1><p class="lead">${t.summary}</p></div></div>
        <div class="row" style="margin-top:16px">
          <button class="btn" id="hideBtn">🙈 Quiz myself (hide answers)</button>
          <button class="btn ${S.read.includes(t.id) ? "good" : "primary"}" id="readBtn">${S.read.includes(t.id) ? "✅ Marked as read" : "Mark as read"}</button>
        </div>
        ${t.sections.map(sectionHTML).join("")}
        ${t.flow ? `<div class="flow">${t.flow.map((f, n) => `<span class="step" style="animation-delay:${n * .15}s">${f}</span>`).join('<span class="arrow">→</span>')}</div>` : ""}
        ${t.mnemonic ? `<div class="callout">${t.mnemonic}</div>` : ""}
      </div>
      <div class="pager">
        ${prev ? `<a class="btn" href="#/learn/${prev.id}">← ${prev.title}</a>` : "<span></span>"}
        ${next ? `<a class="btn primary" href="#/learn/${next.id}">${next.title} →</a>` : `<a class="btn primary" href="#/quiz">Take the quiz →</a>`}
      </div>`;
    $("#readBtn").onclick = () => {
      toggle(S.read, t.id); save(); renderTopic(id); updateProgress();
      if (S.read.includes(t.id)) { toast("Nice! Topic marked as read"); if (S.read.length === D.topics.length) { confetti(); toast("🎉 You finished every topic!"); } }
    };
    $("#hideBtn").onclick = e => {
      const on = e.currentTarget.dataset.on !== "1"; e.currentTarget.dataset.on = on ? "1" : "";
      e.currentTarget.textContent = on ? "👀 Show answers" : "🙈 Quiz myself (hide answers)";
      $$(".def, .bullets li, td:not(:first-child)", view).forEach(el => { el.classList.toggle("cover", on); el.classList.remove("shown"); el.onclick = on ? () => el.classList.toggle("shown") : null; });
      if (on) toast("Tap any blurred text to reveal it");
    };
  }

  /* ---------- SEARCH ---------- */
  function runSearch(q) {
    q = q.trim().toLowerCase();
    if (!q) return route();
    const hits = [];
    D.topics.forEach(t => {
      const pieces = [t.title, t.summary];
      t.sections.forEach(s => { pieces.push(s.heading); if (s.body) pieces.push(s.body); (s.items || []).forEach(i => pieces.push(typeof i === "string" ? i : i.term + " – " + i.def)); (s.rows || []).forEach(r => pieces.push(r.join(" – "))); });
      pieces.map(strip).filter(p => p.toLowerCase().includes(q)).slice(0, 3).forEach(p => hits.push({ t, p }));
    });
    const re = new RegExp("(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
    view.innerHTML = `<h1>Search</h1><p class="lead">${hits.length} result${hits.length === 1 ? "" : "s"} for “${esc(q)}”</p>
      <div class="results">${hits.map(h => `<a class="card result" href="#/learn/${h.t.id}"><span class="chip">${h.t.num}. ${h.t.title}</span><p style="margin-top:6px">${esc(h.p).replace(re, '<mark class="hl">$1</mark>')}</p></a>`).join("") || '<div class="card">Nothing found. Try another word.</div>'}</div>`;
    setActive("");
  }
  $("#search").addEventListener("input", e => runSearch(e.target.value));
  addEventListener("keydown", e => { if (e.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); $("#search").focus(); } });

  /* ---------- FLASHCARDS ---------- */
  const F = { deck: [], i: 0, topic: "All", onlyUnknown: false };
  function flashDeck() {
    return D.flashcards.map((c, idx) => ({ ...c, idx })).filter(c => (F.topic === "All" || c.topic === F.topic) && (!F.onlyUnknown || !S.known.includes(c.idx)));
  }
  function renderFlash(reset = true) {
    if (reset) { F.deck = flashDeck(); F.i = 0; }
    const topics = ["All", ...new Set(D.flashcards.map(c => c.topic))];
    const c = F.deck[F.i];
    view.innerHTML = `<h1>Flashcards</h1><p class="lead">Click the card (or press Space) to flip. Use ← → to move.</p>
      <div class="row" style="margin-top:14px">
        <select id="fTopic" class="btn">${topics.map(t => `<option ${t === F.topic ? "selected" : ""}>${t}</option>`).join("")}</select>
        <button class="btn" id="fShuffle">🔀 Shuffle</button>
        <label class="btn"><input type="checkbox" id="fUnknown" ${F.onlyUnknown ? "checked" : ""}/> Hide known</label>
      </div>
      <div class="fc-wrap">${c ? `
        <div class="fc-meta"><span>Card ${F.i + 1} / ${F.deck.length}</span><span>Known: ${S.known.length} / ${D.flashcards.length}</span></div>
        <div class="progress"><i style="width:${(S.known.length / D.flashcards.length) * 100}%"></i></div>
        <div class="flip" id="flip"><div class="flip-inner">
          <div class="face front"><small>${c.topic} · Question</small>${c.q}<em>click to flip</em></div>
          <div class="face back"><small>Answer</small>${c.a}</div></div></div>
        <div class="row center">
          <button class="btn" id="fPrev">←</button>
          <button class="btn bad" id="fNo">✗ Still learning</button>
          <button class="btn good" id="fYes">✓ I know it</button>
          <button class="btn" id="fNext">→</button>
        </div>` : `<div class="card" style="margin-top:20px;text-align:center"><h2>🎉 Nothing left in this deck!</h2><p class="lead" style="margin:8px auto">You have marked every card here as known.</p><button class="btn primary" id="fReset" style="margin-top:14px">Reset known cards</button></div>`}</div>`;
    $("#fTopic").onchange = e => { F.topic = e.target.value; renderFlash(); };
    $("#fUnknown").onchange = e => { F.onlyUnknown = e.target.checked; renderFlash(); };
    $("#fShuffle").onclick = () => { F.deck = shuffle(F.deck); F.i = 0; renderFlash(false); toast("Shuffled"); };
    if ($("#fReset")) $("#fReset").onclick = () => { S.known = []; save(); renderFlash(); };
    if (c) {
      const go = d => { F.i = (F.i + d + F.deck.length) % F.deck.length; renderFlash(false); };
      $("#flip").onclick = () => $("#flip").classList.toggle("flipped");
      $("#fPrev").onclick = () => go(-1); $("#fNext").onclick = () => go(1);
      $("#fYes").onclick = () => { if (!S.known.includes(c.idx)) S.known.push(c.idx); save(); if (F.onlyUnknown) { F.deck.splice(F.i, 1); F.i = Math.min(F.i, F.deck.length - 1); renderFlash(false); } else go(1); };
      $("#fNo").onclick = () => { S.known = S.known.filter(k => k !== c.idx); save(); go(1); };
    }
  }
  addEventListener("keydown", e => {
    if (location.hash !== "#/flashcards" || /INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return;
    if (e.key === " ") { e.preventDefault(); $("#flip")?.classList.toggle("flipped"); }
    if (e.key === "ArrowRight") $("#fNext")?.click(); if (e.key === "ArrowLeft") $("#fPrev")?.click();
  });

  /* ---------- QUIZ ---------- */
  const Q = { list: [], i: 0, score: 0, answers: [] };
  function renderQuiz() {
    view.innerHTML = `<div class="quiz-wrap card" style="text-align:center"><div style="font-size:3rem">📝</div><h1>Ready for a quiz?</h1>
      <p class="lead" style="margin:8px auto">10 random questions from the whole chapter. Your best score: <b>${S.best}%</b></p>
      <div class="row center" style="margin-top:18px"><button class="btn primary" id="start10">Start 10 questions</button><button class="btn" id="startAll">All ${D.quiz.length} questions</button></div></div>`;
    $("#start10").onclick = () => startQuiz(10); $("#startAll").onclick = () => startQuiz(D.quiz.length);
  }
  function startQuiz(n) { Q.list = shuffle(D.quiz).slice(0, n).map(q => { const order = shuffle(q.options.map((o, i) => i)); return { ...q, order }; }); Q.i = 0; Q.score = 0; Q.answers = []; quizStep(); }
  function quizStep() {
    if (Q.i >= Q.list.length) return quizEnd();
    const q = Q.list[Q.i];
    view.innerHTML = `<div class="quiz-wrap"><div class="fc-meta"><span>Question ${Q.i + 1} / ${Q.list.length}</span><span>Score: ${Q.score}</span></div>
      <div class="progress"><i style="width:${(Q.i / Q.list.length) * 100}%"></i></div>
      <div class="card" style="margin-top:16px"><div class="q-text">${q.q}</div>
        <div class="opts">${q.order.map((oi, k) => `<button class="opt" data-o="${oi}"><span class="k">${"ABCD"[k]}</span>${q.options[oi]}</button>`).join("")}</div>
        <div id="why"></div></div></div>`;
    $$(".opt").forEach(b => b.onclick = () => {
      const pick = +b.dataset.o, ok = pick === q.answer;
      $$(".opt").forEach(x => { x.disabled = true; if (+x.dataset.o === q.answer) x.classList.add("correct"); });
      if (!ok) b.classList.add("wrong"); else Q.score++;
      Q.answers.push({ q: q.q, ok, right: q.options[q.answer], why: q.why });
      $("#why").innerHTML = `<div class="why">${ok ? "✅ Correct!" : "❌ Not quite."} ${q.why}</div><div class="row" style="margin-top:14px;justify-content:flex-end"><button class="btn primary" id="nextQ">${Q.i + 1 === Q.list.length ? "See results" : "Next →"}</button></div>`;
      $("#nextQ").onclick = () => { Q.i++; quizStep(); }; $("#nextQ").focus();
    });
  }
  function quizEnd() {
    const pct = Math.round(Q.score / Q.list.length * 100);
    const newBest = pct > S.best; if (newBest) { S.best = pct; save(); }
    if (pct >= 80) confetti();
    const msg = pct === 100 ? "Perfect! 🏆" : pct >= 80 ? "Excellent work! 🎉" : pct >= 50 ? "Good, keep practicing 💪" : "Review the notes and try again 📚";
    view.innerHTML = `<div class="quiz-wrap card"><div class="score-big grad">${pct}%</div>
      <h2 style="text-align:center">${msg}</h2><p class="lead" style="text-align:center;margin:6px auto">${Q.score} of ${Q.list.length} correct${newBest ? " · new best score!" : ""}</p>
      <div class="row center" style="margin-top:16px"><button class="btn primary" id="again">Try again</button><a class="btn" href="#/learn">Back to notes</a></div>
      <div class="review">${Q.answers.map(a => `<div class="${a.ok ? "ok" : "no"}"><b>${a.ok ? "✓" : "✗"}</b> ${a.q}${a.ok ? "" : `<br><small>Answer: ${a.right}</small>`}</div>`).join("")}</div></div>`;
    $("#again").onclick = () => startQuiz(Q.list.length); updateProgress();
  }

  /* ---------- MATCH ---------- */
  function renderMatch() {
    const pairs = shuffle(D.match).slice(0, 6);
    const tiles = shuffle(pairs.flatMap((p, i) => [{ id: i, text: p.term, kind: "term" }, { id: i, text: p.def, kind: "def" }]));
    let sel = null, matched = 0, tries = 0, start = null, lock = false;
    view.innerHTML = `<h1>Match game</h1><p class="lead">Click a term, then click its meaning. Match all 6 pairs.</p>
      <div class="row" style="margin-top:12px"><span class="chip" id="mInfo">Matched 0 / 6 · Tries 0</span><button class="btn" id="mNew">🔄 New round</button></div>
      <div class="match-board">${tiles.map((t, k) => `<button class="tile t-${t.kind}" data-k="${k}">${t.text}</button>`).join("")}</div>`;
    $("#mNew").onclick = renderMatch;
    $$(".tile").forEach(el => el.onclick = () => {
      if (lock) return; start ??= Date.now();
      const t = tiles[+el.dataset.k];
      if (!sel) { sel = { el, t }; el.classList.add("sel"); return; }
      if (sel.el === el) { el.classList.remove("sel"); sel = null; return; }
      tries++;
      if (sel.t.id === t.id && sel.t.kind !== t.kind) {
        [sel.el, el].forEach(x => { x.classList.remove("sel"); x.classList.add("done"); }); matched++; sel = null;
        if (matched === 6) { confetti(); toast(`🎉 Done in ${Math.round((Date.now() - start) / 1000)}s with ${tries} tries`); }
      } else {
        lock = true; const a = sel.el; a.classList.add("miss"); el.classList.add("miss");
        setTimeout(() => { a.classList.remove("sel", "miss"); el.classList.remove("miss"); sel = null; lock = false; }, 450);
      }
      $("#mInfo").textContent = `Matched ${matched} / 6 · Tries ${tries}`;
    });
  }

  /* ---------- CHECKLIST ---------- */
  function renderChecklist() {
    const n = S.check.length, tot = D.checklist.length;
    view.innerHTML = `<h1>Last-minute memorization checklist</h1><p class="lead">Tick each item when you can recite it from memory.</p>
      <div class="card" style="margin-top:18px"><div class="fc-meta"><span><b>${n} / ${tot}</b> revised</span><span>${Math.round(n / tot * 100)}%</span></div><div class="progress"><i style="width:${n / tot * 100}%"></i></div></div>
      <div class="check-list">${D.checklist.map((c, i) => `<label class="check ${S.check.includes(i) ? "on" : ""}" data-i="${i}"><input type="checkbox" ${S.check.includes(i) ? "checked" : ""}/><span class="box">✓</span><span class="t">${c}</span></label>`).join("")}</div>
      <div class="row" style="margin-top:18px"><button class="btn" id="cReset">Reset checklist</button></div>
      <div class="callout"><b>Exam tip:</b> ${D.examTip}</div>`;
    $$(".check").forEach(l => l.onclick = e => {
      e.preventDefault(); toggle(S.check, +l.dataset.i); save(); renderChecklist(); updateProgress();
      if (S.check.length === tot) { confetti(90); toast("🏆 Everything revised. Good luck in the exam!"); }
    });
    $("#cReset").onclick = () => { S.check = []; save(); renderChecklist(); updateProgress(); };
  }

  /* ---------- boot ---------- */
  function setChapter(id) {
    if (!CHAPTERS[id]) id = "ch1";
    CHID = id; D = CHAPTERS[id].data; KEY = `mis-${id}-v1`;
    S = Object.assign({ read: [], check: [], known: [], best: 0 }, load());
    try { localStorage.setItem("mis-chapter", id); } catch {}
    document.title = `${D.title} · Interactive Revision`;
    Object.assign(F, { deck: [], i: 0, topic: "All", onlyUnknown: false });
    $("#chapterSel").value = id; buildNav();
  }
  $("#chapterSel").innerHTML = Object.entries(CHAPTERS).map(([k, c]) => `<option value="${k}">${c.label}</option>`).join("");
  $("#chapterSel").onchange = e => { setChapter(e.target.value); location.hash = "#/home"; route(); toast(`Switched to ${D.title}`); };

  applyTheme();
  let saved = null; try { saved = localStorage.getItem("mis-chapter"); } catch {}
  setChapter(saved);
  if (!location.hash) location.hash = "#/home"; else route();
})();
