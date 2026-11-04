/* ------------------------------------------------------------------
   Script Font Fixer
   - Detects Arabic / Bangla / other text runs
   - Lets you choose a font per language
   - Copies clean HTML (with Word-specific font styles) so fonts don't break
------------------------------------------------------------------- */

// ---- Font lists -------------------------------------------------
const FONTS = {
  ar: [
    "Amiri", "Noto Naskh Arabic", "Scheherazade New", "Lateef", "Cairo",
    "Tajawal", "Almarai", "Reem Kufi", "Aref Ruqaa", "Harmattan",
    "El Messiri", "Markazi Text",
    "Traditional Arabic (Word)", "Simplified Arabic (Word)", "Sakkal Majalla (Word)",
    "Arial (Word)", "Times New Roman (Word)", "Tahoma (Word)"
  ],
  bn: [
    "Noto Sans Bengali", "Noto Serif Bengali", "Hind Siliguri",
    "Vrinda (Word)", "Nirmala UI (Word)", "Shonar Bangla (Word)",
    "SolaimanLipi", "Kalpurush", "Nikosh", "Siyam Rupali"
  ],
  en: [
    "Times New Roman (Word)", "Arial (Word)", "Calibri (Word)", "Cambria (Word)",
    "Georgia", "Roboto", "Open Sans"
  ]
};

const LABELS = { ar: "Arabic", bn: "Bangla", en: "English / Others" };

// Default setting per language
const settings = {
  ar: { font: "Amiri",                  size: "" },
  bn: { font: "Noto Sans Bengali",      size: "" },
  en: { font: "Times New Roman (Word)", size: "" }
};

// ---- Script detection ------------------------------------------
const AR = "\\u0600-\\u06FF\\u0750-\\u077F\\u08A0-\\u08FF\\uFB50-\\uFDFF\\uFE70-\\uFEFF";
const BN = "\\u0980-\\u09FF";
// punctuation allowed *between* two words of the same language
const MID = "[ \\t\\u200c\\u200d.,:;!?()\\[\\]«»\"'\\-–—/]*";

const RUN_RE = new RegExp(
  `(?<ar>[${AR}]+(?:${MID}[${AR}]+)*)|(?<bn>[${BN}]+(?:${MID}[${BN}]+)*)`,
  "g"
);
const ARABIC_ONLY_LINE = new RegExp(`^[\\s\\d${AR}.,:;!?()\\[\\]«»"'\\-–—/\\u200c\\u200d]*[${AR}][\\s\\d${AR}.,:;!?()\\[\\]«»"'\\-–—/\\u200c\\u200d]*$`);

function splitRuns(line) {
  const parts = [];
  let last = 0, m;
  RUN_RE.lastIndex = 0;
  while ((m = RUN_RE.exec(line)) !== null) {
    if (m.index > last) parts.push({ type: "en", text: line.slice(last, m.index) });
    parts.push({ type: m.groups.ar ? "ar" : "bn", text: m[0] });
    last = m.index + m[0].length;
  }
  if (last < line.length) parts.push({ type: "en", text: line.slice(last) });
  return parts;
}

// ---- Helpers ----------------------------------------------------
const $ = (id) => document.getElementById(id);

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function cleanFont(name) {            // remove " (Word)" tag
  return name.replace(/\s*\(Word\)\s*$/, "");
}

function spanStyle(type) {
  const f = cleanFont(settings[type].font);
  const size = settings[type].size;
  let st = `font-family:'${f}';`;
  // Word-specific properties: Arabic & Bangla are "complex scripts" in Word,
  // so Word reads mso-bidi-* for them. English uses mso-ascii / hansi.
  if (type === "en") {
    st += `mso-ascii-font-family:'${f}';mso-hansi-font-family:'${f}';`;
  } else {
    st += `mso-bidi-font-family:'${f}';`;
  }
  if (size) {
    st += `font-size:${size}pt;`;
    if (type !== "en") st += `mso-bidi-font-size:${size}pt;`;
  }
  return st;
}

// ---- Build HTML -------------------------------------------------
function buildHTML(forPreview) {
  const text = $("input").value.replace(/\r\n/g, "\n");
  const target = $("scriptSelect").value;
  const highlight = forPreview && $("hlCheck").checked;
  const autoRTL = $("rtlCheck").checked;

  const lines = text.split("\n");
  let html = "";

  for (const line of lines) {
    if (line.trim() === "") { html += `<p style="margin:0">&nbsp;</p>`; continue; }

    const rtl = autoRTL && ARABIC_ONLY_LINE.test(line);
    let inner = "";

    for (const part of splitRuns(line)) {
      const cls = highlight && part.type === target ? ` class="hl"` : "";
      const lang = part.type === "ar" ? ` lang="ar-SA"` : part.type === "bn" ? ` lang="bn-BD"` : "";
      const dir = part.type === "ar" ? ` dir="rtl"` : "";
      inner += `<span${cls}${lang}${dir} style="${spanStyle(part.type)}">${esc(part.text)}</span>`;
    }

    const pAttr = rtl ? ` dir="rtl" style="margin:0 0 6pt;text-align:right"` : ` style="margin:0 0 6pt"`;
    html += `<p${pAttr}>${inner}</p>`;
  }
  return html;
}

function plainText() {
  return $("input").value;
}

// ---- UI ---------------------------------------------------------
function fillFontSelect() {
  const t = $("scriptSelect").value;
  const sel = $("fontSelect");
  sel.innerHTML = "";
  FONTS[t].forEach((f) => {
    const o = document.createElement("option");
    o.value = f;
    o.textContent = f;
    sel.appendChild(o);
  });
  if (!FONTS[t].includes(settings[t].font)) {
    const o = document.createElement("option");
    o.value = settings[t].font;
    o.textContent = settings[t].font;
    sel.appendChild(o);
  }
  sel.value = settings[t].font;
  $("sizeInput").value = settings[t].size;
}

function updateStatus() {
  const text = $("input").value;
  const counts = { ar: 0, bn: 0, en: 0 };
  text.split("\n").forEach((l) => splitRuns(l).forEach((p) => {
    counts[p.type] += p.text.replace(/\s/g, "").length;
  }));
  const t = $("scriptSelect").value;
  $("statusLine").textContent =
    `Selected: ${LABELS[t]} (${counts[t]} characters).  ` +
    `Arabic ${counts.ar} · Bangla ${counts.bn} · English/Others ${counts.en}`;
}

function render() {
  $("output").innerHTML = buildHTML(true);
  updateStatus();
}

// ---- Events -----------------------------------------------------
$("input").addEventListener("input", render);
$("scriptSelect").addEventListener("change", () => { fillFontSelect(); render(); });
$("fontSelect").addEventListener("change", (e) => {
  settings[$("scriptSelect").value].font = e.target.value;
  render();
});
$("sizeInput").addEventListener("input", (e) => {
  settings[$("scriptSelect").value].size = e.target.value;
  render();
});
$("hlCheck").addEventListener("change", render);
$("rtlCheck").addEventListener("change", render);

$("clearBtn").addEventListener("click", () => { $("input").value = ""; render(); });
$("sampleBtn").addEventListener("click", () => {
  $("input").value =
`আজকের পাঠ: সূরা ফাতিহা (Surah Al-Fatiha) - আয়াত ১ থেকে ৭
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
অর্থ: সকল প্রশংসা আল্লাহর জন্য, যিনি সকল জগতের প্রতিপালক।
Total verses: 7`;
  render();
});

// Copy
function flash(msg) {
  const m = $("msg");
  m.textContent = msg;
  setTimeout(() => (m.textContent = ""), 2500);
}

$("copyBtn").addEventListener("click", async () => {
  const html = buildHTML(false);                      // no highlight
  const wrapped = `<html><body>${html}</body></html>`;
  try {
    await navigator.clipboard.write([
      new ClipboardItem({
        "text/html": new Blob([wrapped], { type: "text/html" }),
        "text/plain": new Blob([plainText()], { type: "text/plain" })
      })
    ]);
    flash("Copied! Paste in Word.");
  } catch (err) {
    // Fallback for older browsers / file:// pages
    const box = document.createElement("div");
    box.contentEditable = "true";
    box.style.position = "fixed";
    box.style.left = "-9999px";
    box.innerHTML = html;
    document.body.appendChild(box);
    const range = document.createRange();
    range.selectNodeContents(box);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    const ok = document.execCommand("copy");
    sel.removeAllRanges();
    document.body.removeChild(box);
    flash(ok ? "Copied! Paste in Word." : "Copy failed - use Download .doc");
  }
});

// Download .doc (Word opens HTML saved as .doc and keeps the fonts)
$("docBtn").addEventListener("click", () => {
  const html =
`<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="utf-8"><title>Document</title></head>
<body>${buildHTML(false)}</body></html>`;
  const blob = new Blob(["\ufeff", html], { type: "application/msword" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "document.doc";
  a.click();
  URL.revokeObjectURL(a.href);
  flash("Downloaded.");
});

// Init
fillFontSelect();
render();
