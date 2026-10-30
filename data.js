/* Question data for the Chapter 8 quiz.
   q = question (HTML allowed), code = optional code block (plain text),
   o = options, a = index of the correct option (0 = A), e = explanation (HTML). */
var QUESTIONS = [
  { q: "Which of the following is an example of a software internal product size measure?",
    o: ["Number of execution errors", "Number of source code lines", "Time required to execute a program", "Number of users"],
    a: 1,
    e: "<p>LOC measures the size of software using its source code. It does not require program execution.</p>" },

  { q: "Which property states that the size of an empty software product is zero?",
    o: ["Additivity", "Nonnegativity", "Null value", "Productivity"],
    a: 2,
    e: "<p>The null value property means that an empty system has a size of zero.</p>" },

  { q: "A program has 120 NCLOC and 30 CLOC. What is its total LOC?",
    o: ["90", "120", "150", "180"],
    a: 2,
    e: "<div class='f'>LOC = NCLOC + CLOC<br>= 120 + 30 = 150</div>" },

  { q: "Which measure counts only executable statements?",
    o: ["CLOC", "DSI", "ES", "CHAR"],
    a: 2,
    e: "<p>ES (Executable Statements) counts executable statements but excludes declarations, comments, and blank lines.</p>" },

  { q: "Two software components have sizes of 20 and 15 elements. They share 5 common elements. What is their combined size?",
    o: ["40", "35", "30", "25"],
    a: 2,
    e: "<div class='f'>Size(A &cup; B) = 20 + 15 &minus; 5 = 30</div><p>This demonstrates the additivity property.</p>" },

  { q: "Which of the following is excluded from NCLOC?",
    o: ["Executable statements", "Variable declarations", "Blank lines", "Non-commented code"],
    a: 2,
    e: "<p>NCLOC excludes blank lines and comments but includes declarations and executable statements.</p>" },

  { q: "Halstead's approach is based on counting which two things?",
    o: ["Functions and classes", "Operators and operands", "Comments and blank lines", "Errors and failures"],
    a: 1,
    e: "<ul><li>Operators: <code>+</code>, <code>-</code>, <code>=</code>, <code>*</code></li><li>Operands: variables and values such as <code>x</code>, <code>y</code>, <code>10</code></li></ul>" },

  { q: "A developer produces 2,400 LOC in 200 hours. What is the productivity?",
    o: ["10 LOC/hour", "12 LOC/hour", "15 LOC/hour", "20 LOC/hour"],
    a: 1,
    e: "<div class='f'>Productivity = Size / Effort<br>= 2400 / 200 = 12 LOC/hour</div>" },

  { q: "Which measure counts comments in source code?",
    o: ["NCLOC", "ES", "CLOC", "DSI"],
    a: 2,
    e: "<p>CLOC means Comment Lines of Code. It measures comment lines.</p>" },

  { q: "What is the main limitation of LOC when comparing different programming languages?",
    o: ["LOC cannot be counted.", "Every language has the same syntax.", "One line can represent different amounts of functionality.", "LOC requires program execution."],
    a: 2,
    e: "<p>A single Python line may perform the same functionality as several C++ lines. Therefore, direct comparison can be misleading.</p>" },

  { q: "If a program contains 40 comment lines and 160 NCLOC, what is its comment density?",
    o: ["10%", "20%", "25%", "40%"],
    a: 1,
    e: "<div class='f'>LOC = 40 + 160 = 200<br>Comment density = 40 / 200 &times; 100 = 20%</div>" },

  { q: "Which of the following is included in DSI but excluded from ES?",
    o: ["Comments", "Blank lines", "Declarations", "Headings"],
    a: 2,
    e: "<p>DSI includes declarations and headings, whereas ES counts executable statements only.</p>" },

  { q: "In Halstead's approach, what does N<sub>1</sub> represent?",
    o: ["Number of distinct operators", "Total occurrences of operators", "Number of distinct operands", "Total occurrences of operands"],
    a: 1,
    e: "<ul><li>&mu;<sub>1</sub> = distinct operators</li><li>&mu;<sub>2</sub> = distinct operands</li><li>N<sub>1</sub> = total operators</li><li>N<sub>2</sub> = total operands</li></ul>" },

  { q: "A program has 500 defects and a size of 25,000 LOC. What is its defect density?",
    o: ["0.01 defects/LOC", "0.02 defects/LOC", "0.05 defects/LOC", "0.2 defects/LOC"],
    a: 1,
    e: "<div class='f'>Defect density = 500 / 25000 = 0.02</div>" },

  { q: "Which of the following is NOT a valid property of software size?",
    o: ["Nonnegativity", "Null value", "Additivity", "Negativity"],
    a: 3,
    e: "<p>Software size cannot be negative. The three properties are nonnegativity, null value, and additivity.</p>" },

  { q: "If a program has 5 distinct operators and 4 distinct operands, what is its Halstead vocabulary?",
    o: ["5", "9", "20", "1"],
    a: 1,
    e: "<div class='f'>&mu; = &mu;<sub>1</sub> + &mu;<sub>2</sub> = 5 + 4 = 9</div>" },

  { q: "Which measure calculates the storage required for program text?",
    o: ["ES", "CLOC", "Byte count", "NCLOC"],
    a: 2,
    e: "<p>Byte count measures the amount of computer storage occupied by program text.</p>" },

  { q: "A program has 100 LOC and an average of 50 characters per line. What is its CHAR count?",
    o: ["500", "1,000", "5,000", "10,000"],
    a: 2,
    e: "<div class='f'>CHAR = &alpha; &times; LOC<br>= 50 &times; 100 = 5000</div>" },

  { q: "Which statement about software size is correct?",
    o: ["Size directly measures software quality.", "Size directly measures development cost.", "Size can help estimate development effort.", "Size always determines productivity."],
    a: 2,
    e: "<p>Size alone cannot directly measure cost, effort, productivity, or quality. However, it can help estimate and compare projects.</p>" },

  { q: "What does KLOC represent?",
    o: ["100 lines of code", "1,000 lines of code", "10,000 lines of code", "1,000 executable statements"],
    a: 1,
    e: "<p>KLOC = 1,000 LOC. Similarly, KDSI = 1,000 delivered source instructions.</p>" },

  { q: "Consider the following code. If declarations are excluded, how many executable statements are there?",
    code: "int x = 5;\nx = x + 1;\nprintf(\"%d\", x);",
    o: ["1", "2", "3", "4"],
    a: 1,
    e: "<p>The declaration <code>int x = 5;</code> is excluded. The remaining two lines are executable statements.</p>" },

  { q: "Which of the following creates a problem when measuring software size in visual programming environments?",
    o: ["Comments are too long.", "Visual components may not be represented by ordinary source-code lines.", "LOC becomes negative.", "Operators cannot be counted."],
    a: 1,
    e: "<p>Visual editors can create buttons, menus, and other components without much handwritten code. LOC cannot fully represent their size.</p>" },

  { q: "In Halstead's formula, program volume is calculated by:",
    o: ["V = N + &mu;", "V = N &times; &mu;", "V = N log<sub>2</sub> &mu;", "V = N / &mu;"],
    a: 2,
    e: "<div class='f'>V = N log<sub>2</sub> &mu;</div><p>Where:</p><ul><li>N = N<sub>1</sub> + N<sub>2</sub></li><li>&mu; = &mu;<sub>1</sub> + &mu;<sub>2</sub></li></ul>" },

  { q: "Which statement correctly describes external code?",
    o: ["Code written only by the current developer.", "Code supplied by vendors or reused from existing systems.", "Code that contains only comments.", "Code that cannot be executed."],
    a: 1,
    e: "<p>External code may be generated automatically, supplied by vendors, or reused from existing software. It should be distinguished from newly developed code.</p>" },

  { q: "Which statement about Halstead's metrics is most accurate?",
    o: ["All Halstead metrics are fully validated.", "Halstead measures only comment lines.", "Some Halstead metrics, such as difficulty and effort, lack sufficient validation and a clear measurement foundation.", "Halstead does not use operators."],
    a: 2,
    e: "<p>Halstead's approach provides a way to measure program size through operators and operands, but some of its other metrics have limitations in validation and measurement foundations.</p>" }
];
