/* =========================================================
   NEW CHAPTER TEMPLATE
   1. Copy this file to data/ch3.js (change `ch3` below to match)
   2. Fill in title, subtitle, topics, revision, mini, examTip
   3. Add one line to chapters.js:
        { id: 'ch3', file: 'data/ch3.js', icon: '📘', hue: 20 }
   ========================================================= */
(function () {
  // Q(number, question, [A, B, C, D], 'correct letter', 'short explanation')
  // Question numbers must be UNIQUE inside the chapter (1, 2, 3 …).
  const Q = (n, q, o, a, e) => ({ n, q, options: o, answer: "ABCD".indexOf(a), explain: e });

  const topics = [
    {
      id: "first-topic",          // unique, no spaces
      num: 1,
      icon: "📘",
      title: "Topic title",
      short: "One-line summary shown on the topic card.",
      // HTML for the explanation. Ready-made styles you can use:
      //   <p> <h4> <ul>/<ol> <table class="tbl"> <div class="example"> <div class="callout">
      //   <div class="steps"><div><b>..</b><span>..</span></div></div>
      //   <div class="cards2"> / <div class="cards3"> (each child <div><b>..</b><p>..</p></div>)
      //   <div class="chips"><span>..</span></div>
      html: `
        <p>Explain the topic here.</p>
        <ul><li>Point one</li><li>Point two</li></ul>
        <div class="example"><b>Example:</b> …</div>
      `,
      // Every topic needs at least one question.
      questions: [
        Q(1, "Sample question?", ["Option A", "Option B", "Option C", "Option D"], "B", "Why B is correct.")
      ]
    }
    // , { id: "second-topic", num: 2, ... }
  ];

  // Flashcards + cheat-sheet table
  const revision = [
    { term: "Term", fact: "Key fact to remember" }
  ];

  // Mini test (answers are hidden until submit). Use M(index, ...)
  const M = (i, q, o, a, e) => ({ n: "M" + i, q, options: o, answer: "ABCD".indexOf(a), explain: e });
  const mini = [
    M(1, "Sample mini-test question?", ["A", "B", "C", "D"], "A", "Explanation.")
  ];

  (window.MIS_CHAPTERS = window.MIS_CHAPTERS || {}).ch3 = {
    title: "MIS · Chapter 3",
    subtitle: "Short description shown on the chapter card",
    topics,
    revision,
    mini,
    examTip: "Exam tip text shown on the dashboard."
  };
})();
