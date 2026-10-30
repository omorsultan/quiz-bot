/* Size Metrics Quiz: logic, 40-second timer and the flower rain.
   Questions live in data.js (the global QUESTIONS array). */
(function () {
  'use strict';

  var TIME_LIMIT = 40;                    // seconds per question
  var RING_LENGTH = 2 * Math.PI * 26;     // circumference of the timer ring
  var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
  var STORE_KEY = 'sizeQuiz.pastedText';
  var BUILTIN = window.QUESTIONS.slice();   // the questions from data.js
  var PRAISE = ['Beautiful!', 'Spot on!', 'Well done!', 'Exactly right!', 'Lovely!'];

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function $(sel) { return document.querySelector(sel); }

  var screens = {
    start: $('#screen-start'),
    quiz: $('#screen-quiz'),
    result: $('#screen-result')
  };
  var el = {
    qNum: $('#qNum'), qTotal: $('#qTotal'), score: $('#score'), streak: $('#streak'),
    timer: $('#timer'), ring: $('#ring'), timeText: $('#timeText'), dots: $('#dots'),
    card: $('#qCard'), qLabel: $('#qLabel'), qText: $('#qText'), qCode: $('#qCode'), opts: $('#opts'),
    feedback: $('#feedback'), verdict: $('#verdict'), explain: $('#explain'), next: $('#btn-next'),
    rScore: $('#rScore'), rTotal: $('#rTotal'), rTitle: $('#rTitle'), rMsg: $('#rMsg'),
    rCorrect: $('#rCorrect'), rWrong: $('#rWrong'), rTimeout: $('#rTimeout'), rAvg: $('#rAvg'),
    review: $('#review'), again: $('#btn-again'), missed: $('#btn-missed')
  };

  var deck = [];        // indexes into QUESTIONS for the current run
  var idx = 0;          // position inside deck
  var results = [];     // {status, picked, time} per deck position
  var locked = true;    // true while the answer is already revealed
  var deadline = 0;
  var timerId = null;
  var score = 0;
  var streak = 0;

  /* ---------------------------------------------------------------- screens */
  function show(name) {
    Object.keys(screens).forEach(function (key) {
      screens[key].classList.toggle('is-active', key === name);
    });
    window.scrollTo(0, 0);
  }

  /* ---------------------------------------------------------------- run */
  function startQuiz(list) {
    deck = list.slice();
    results = deck.map(function () { return null; });
    idx = 0;
    score = 0;
    streak = 0;
    el.qTotal.textContent = deck.length;
    buildDots();
    show('quiz');
    renderQuestion();
  }

  function buildDots() {
    el.dots.innerHTML = '';
    deck.forEach(function () {
      var d = document.createElement('span');
      d.className = 'dot';
      el.dots.appendChild(d);
    });
  }

  function updateDots() {
    var kids = el.dots.children;
    for (var i = 0; i < kids.length; i++) {
      var cls = 'dot';
      if (results[i]) cls += ' ' + results[i].status;
      else if (i === idx) cls += ' current';
      kids[i].className = cls;
    }
  }

  function renderQuestion() {
    var q = QUESTIONS[deck[idx]];
    locked = false;

    el.card.classList.remove('shake');
    el.feedback.hidden = true;
    el.qLabel.textContent = 'Question ' + (deck[idx] + 1);
    el.qNum.textContent = idx + 1;
    el.score.textContent = score;
    el.qText.innerHTML = q.q;

    if (q.code) {
      el.qCode.textContent = q.code;
      el.qCode.hidden = false;
    } else {
      el.qCode.hidden = true;
    }

    el.opts.innerHTML = '';
    q.o.forEach(function (text, k) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'opt';
      b.innerHTML = '<span class="badge">' + LETTERS[k] + '</span><span class="txt">' + text + '</span>';
      b.addEventListener('click', function () { answer(k); });
      el.opts.appendChild(b);
    });

    updateDots();
    startTimer();
  }

  /* ---------------------------------------------------------------- timer */
  function startTimer() {
    clearInterval(timerId);
    deadline = Date.now() + TIME_LIMIT * 1000;
    tick();
    timerId = setInterval(tick, 100);
  }

  function tick() {
    var left = Math.max(0, (deadline - Date.now()) / 1000);
    el.ring.style.strokeDashoffset = String(RING_LENGTH * (1 - left / TIME_LIMIT));
    el.timeText.textContent = Math.ceil(left);
    el.timer.classList.toggle('warn', left <= 10 && left > 5);
    el.timer.classList.toggle('danger', left <= 5);
    if (left <= 0) answer(null);
  }

  /* ---------------------------------------------------------------- answering */
  function answer(picked) {
    if (locked) return;
    locked = true;
    clearInterval(timerId);

    var q = QUESTIONS[deck[idx]];
    var spent = Math.min(TIME_LIMIT, TIME_LIMIT - Math.max(0, (deadline - Date.now()) / 1000));
    var status = picked === null ? 'timeout' : (picked === q.a ? 'correct' : 'wrong');
    results[idx] = { status: status, picked: picked, time: spent };

    // Show right and wrong options
    var buttons = el.opts.children;
    for (var i = 0; i < buttons.length; i++) {
      var b = buttons[i];
      b.disabled = true;
      if (i === q.a) {
        b.classList.add('correct');
        b.insertAdjacentHTML('beforeend', '<span class="mark" aria-hidden="true">&#10003;</span>');
      } else if (i === picked) {
        b.classList.add('wrong');
        b.insertAdjacentHTML('beforeend', '<span class="mark" aria-hidden="true">&#10005;</span>');
      } else {
        b.classList.add('dim');
      }
    }

    // Verdict text
    var letter = LETTERS[q.a];
    if (status === 'correct') {
      score++;
      streak++;
      el.verdict.className = 'verdict good';
      el.verdict.textContent = PRAISE[Math.floor(Math.random() * PRAISE.length)] +
        ' The answer is ' + letter + '.' + (streak >= 3 ? ' ' + streak + ' in a row.' : '');
      celebrate(streak >= 3 ? 70 : 44);
    } else if (status === 'wrong') {
      streak = 0;
      el.verdict.className = 'verdict bad';
      el.verdict.textContent = 'Not this time. The answer is ' + letter + '.';
      shake();
    } else {
      streak = 0;
      el.verdict.className = 'verdict late';
      el.verdict.textContent = "Time's up. The answer is " + letter + '.';
      shake();
    }

    el.score.textContent = score;
    if (streak >= 2) {
      el.streak.textContent = 'Streak ' + streak;
      el.streak.hidden = false;
    } else {
      el.streak.hidden = true;
    }

    // Explanation
    el.explain.innerHTML = q.e;
    el.next.textContent = idx === deck.length - 1 ? 'See results' : 'Next question';
    el.feedback.hidden = false;
    updateDots();

    el.feedback.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
    el.next.focus({ preventScroll: true });
  }

  function shake() {
    if (reduceMotion) return;
    el.card.classList.remove('shake');
    void el.card.offsetWidth;   // restart the animation
    el.card.classList.add('shake');
  }

  function next() {
    idx++;
    if (idx >= deck.length) showResults();
    else { renderQuestion(); window.scrollTo(0, 0); }
  }

  /* ---------------------------------------------------------------- results */
  function showResults() {
    var total = deck.length;
    var wrong = 0, timeout = 0, spent = 0, missed = [];

    results.forEach(function (r, i) {
      spent += r.time;
      if (r.status === 'wrong') wrong++;
      if (r.status === 'timeout') timeout++;
      if (r.status !== 'correct') missed.push(i);
    });

    var pct = total ? Math.round(score / total * 100) : 0;
    var title, msg;
    if (pct === 100) { title = 'A perfect garden'; msg = 'Every answer was right. You are ready for this chapter.'; }
    else if (pct >= 80) { title = 'In full bloom'; msg = 'Very strong result. Check the few you missed and you are done.'; }
    else if (pct >= 60) { title = 'Growing well'; msg = 'A good base. Review the missed questions, especially NCLOC, CLOC, ES and DSI.'; }
    else { title = 'Needs more sunlight'; msg = 'Read the explanations again, then retry the missed questions.'; }

    el.rTotal.textContent = total;
    el.rTitle.textContent = title;
    el.rMsg.textContent = msg;
    el.rCorrect.textContent = score;
    el.rWrong.textContent = wrong;
    el.rTimeout.textContent = timeout;
    el.rAvg.textContent = Math.round(spent / total) + 's';

    // Review list of every question that was not answered correctly
    el.review.innerHTML = '';
    if (!missed.length) {
      el.review.innerHTML = '<li class="perfect">No mistakes. Nothing to review.</li>';
    } else {
      missed.forEach(function (i) {
        var q = QUESTIONS[deck[i]];
        var r = results[i];
        var li = document.createElement('li');
        var tag = r.status === 'timeout' ? '<span class="tag timeout">Timed out</span>' : '<span class="tag wrong">Wrong</span>';
        li.innerHTML = '<p class="rq">' + (deck[i] + 1) + '. ' + q.q + '</p>' +
          '<p class="ra">' + tag + 'Correct answer: <b>' + LETTERS[q.a] + '. ' + q.o[q.a] + '</b></p>';
        el.review.appendChild(li);
      });
    }

    el.missed.hidden = !missed.length;
    el.missed.onclick = function () { startQuiz(missed.map(function (i) { return deck[i]; })); };

    show('result');
    countUp(el.rScore, score);
    if (pct >= 70) setTimeout(function () { celebrate(120); }, 250);
  }

  function countUp(node, target) {
    if (reduceMotion || !target) { node.textContent = target; return; }
    var start = performance.now(), dur = 900;
    function step(now) {
      var t = Math.min(1, (now - start) / dur);
      node.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------------------------------------------------------------- flowers */
  var canvas = $('#petals');
  var ctx = canvas.getContext('2d');
  var flowers = [];
  var rafId = 0;
  var W = 0, H = 0, dpr = 1;

  // [petal colour, centre colour]
  var PALETTE = [
    ['#ff8fb1', '#ffd166'], ['#ffb3c7', '#f2b84b'], ['#fff1f5', '#f29e4c'],
    ['#c9a8ff', '#ffe28a'], ['#ffd0a6', '#e85d75'], ['#ff6f91', '#ffe9a8'],
    ['#ffffff', '#f2b84b'], ['#f7a8d8', '#fff0a8']
  ];

  function rand(a, b) { return a + Math.random() * (b - a); }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }

  function resizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
  }

  function celebrate(count) {
    if (reduceMotion) count = Math.min(count, 12);
    count = Math.min(count, 140);
    for (var i = 0; i < count; i++) {
      var size = rand(13, 34);
      flowers.push({
        x: rand(0, W),
        y: -rand(30, 420),                 // staggered start above the screen
        vy: rand(1.6, 3.6) * (size > 26 ? 0.85 : 1),
        sway: rand(14, 46),
        swaySpeed: rand(0.8, 2),
        phase: rand(0, Math.PI * 2),
        size: size,
        rot: rand(0, Math.PI * 2),
        vr: rand(-0.035, 0.035),
        flip: rand(0, Math.PI * 2),
        flipSpeed: rand(0.02, 0.06),
        petals: pick([5, 5, 6, 8]),
        pal: pick(PALETTE),
        baseX: 0, t: 0
      });
      flowers[flowers.length - 1].baseX = flowers[flowers.length - 1].x;
    }
    if (!rafId) rafId = requestAnimationFrame(frame);
  }

  function drawFlower(f) {
    var x = f.baseX + Math.sin(f.phase + f.t * f.swaySpeed * 0.05) * f.sway;
    var s = f.size;
    ctx.save();
    ctx.translate(x, f.y);
    ctx.rotate(f.rot);
    ctx.scale(1, 0.55 + 0.45 * Math.abs(Math.cos(f.flip)));   // tumbling look
    ctx.fillStyle = f.pal[0];
    ctx.strokeStyle = 'rgba(214, 51, 108, .35)';
    ctx.lineWidth = 1;
    for (var i = 0; i < f.petals; i++) {
      ctx.save();
      ctx.rotate(i * (Math.PI * 2 / f.petals));
      ctx.beginPath();
      ctx.ellipse(0, -s * 0.52, s * 0.27, s * 0.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
    ctx.fillStyle = f.pal[1];
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function frame() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    var alive = [];
    for (var i = 0; i < flowers.length; i++) {
      var f = flowers[i];
      f.t++;
      f.y += f.vy;
      f.rot += f.vr;
      f.flip += f.flipSpeed;
      if (f.y < H + 60) {
        alive.push(f);
        if (f.y > -40) drawFlower(f);
      }
    }
    flowers = alive;

    if (flowers.length) rafId = requestAnimationFrame(frame);
    else { rafId = 0; ctx.clearRect(0, 0, W, H); }
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  /* ---------------------------------------------------------------- events */
  $('#btn-start').addEventListener('click', function () {
    var all = QUESTIONS.map(function (_, i) { return i; });
    startQuiz(all);
  });

  el.next.addEventListener('click', next);

  el.again.addEventListener('click', function () {
    var all = QUESTIONS.map(function (_, i) { return i; });
    startQuiz(all);
  });

  // Keyboard: 1-4 or A-D chooses an answer
  document.addEventListener('keydown', function (e) {
    if (locked || e.ctrlKey || e.metaKey || e.altKey) return;
    if (!screens.quiz.classList.contains('is-active')) return;
    var key = e.key.toLowerCase();
    var n = '123456'.indexOf(key);
    if (n < 0) n = 'abcdef'.indexOf(key);
    if (n >= 0 && n < QUESTIONS[deck[idx]].o.length) answer(n);
  });

  /* ---------------------------------------------------------------- paste your own questions */
  var pasteBox = $('#paste-input');
  var pasteMsg = $('#paste-msg');

  function allIndexes() { return QUESTIONS.map(function (_, i) { return i; }); }

  function setQuestions(list) {
    window.QUESTIONS = list;
    $('#countText').textContent = list.length;
  }

  function say(text, kind) {
    pasteMsg.textContent = text;
    pasteMsg.className = 'paste-msg ' + (kind || '');
  }

  try {
    var saved = localStorage.getItem(STORE_KEY);
    if (saved) { pasteBox.value = saved; $('#paste').open = true; }
  } catch (err) { /* storage is optional */ }

  $('#btn-load').addEventListener('click', function () {
    var text = pasteBox.value;
    if (!text.trim()) { say('Paste your questions in the box first.', 'err'); return; }

    var res = window.QuizParser.parse(text);
    if (!res.questions.length) {
      say('No questions found. Each one needs a "Question N" heading, options A. B. C. D., and an "Answer: X" line.' +
        (res.skipped.length ? ' Problems: ' + res.skipped.join(', ') + '.' : ''), 'err');
      return;
    }

    try { localStorage.setItem(STORE_KEY, text); } catch (err) { /* optional */ }
    setQuestions(res.questions);

    if (res.skipped.length) {
      say('Loaded ' + res.questions.length + ' questions. Skipped: ' + res.skipped.join(', ') +
        '. Fix them and press Load again, or press Start quiz to continue with these.', 'warn');
      return;
    }
    say('Loaded ' + res.questions.length + ' questions.', 'ok');
    startQuiz(allIndexes());
  });

  $('#btn-builtin').addEventListener('click', function () {
    setQuestions(BUILTIN.slice());
    say('Back to the built-in ' + BUILTIN.length + ' questions.', 'ok');
  });
})();
