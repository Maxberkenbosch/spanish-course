const STORE_KEY = "camino-a1-progress-v1";
const PRONOUNS = ["yo", "tú", "él/usted", "nosotros", "vosotros", "ellos/ustedes"];

const state = {
  view: "home",
  unitId: null,
  lessonId: null,
  storyId: null,
  storyShowEn: false,
  menuOpen: false,
  quizIndex: 0,
  quizAnswers: [],
  examIndex: 0,
  examAnswers: [],
  verb: { i: 0, person: 0, streak: 0 }
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || defaultProgress();
  } catch {
    return defaultProgress();
  }
}

function defaultProgress() {
  return { lessons: {}, practice: {}, quizzes: {}, stories: {}, storyPages: {}, exam: null };
}

function saveProgress(p) {
  localStorage.setItem(STORE_KEY, JSON.stringify(p));
}

function progress() {
  return loadProgress();
}

function markLesson(unitId, lessonId) {
  const p = progress();
  p.lessons[`${unitId}:${lessonId}`] = true;
  saveProgress(p);
}

function markPractice(unitId, score, total) {
  const p = progress();
  p.practice[unitId] = { score, total };
  saveProgress(p);
}

function markQuiz(unitId, score, total) {
  const p = progress();
  p.quizzes[unitId] = { score, total };
  saveProgress(p);
}

// Stories are extra reading, not an A1 requirement, so they stay out of courseStats().
function markStory(storyId) {
  const p = progress();
  p.stories = p.stories || {};
  p.stories[storyId] = true;
  saveProgress(p);
}

function storiesRead() {
  return Object.keys(progress().stories || {}).length;
}

// Remembers the furthest chapter opened, so a book reopens where you stopped.
function markStoryPage(storyId, index) {
  const p = progress();
  p.storyPages = p.storyPages || {};
  if ((p.storyPages[storyId] || 0) >= index) return;
  p.storyPages[storyId] = index;
  saveProgress(p);
}

function storyFurthestPage(storyId) {
  return (progress().storyPages || {})[storyId] || 0;
}

function unitDone(unit) {
  const p = progress();
  const lessonsOk = unit.lessons.every((l) => p.lessons[`${unit.id}:${l.id}`]);
  const quiz = p.quizzes[unit.id];
  return lessonsOk && quiz && quiz.score / quiz.total >= 0.75;
}

function courseStats() {
  const p = progress();
  const lessonTotal = COURSE.units.reduce((n, u) => n + u.lessons.length, 0);
  const lessonDone = Object.keys(p.lessons).length;
  const quizDone = Object.keys(p.quizzes).length;
  const examDone = p.exam ? 1 : 0;
  const total = lessonTotal + COURSE.units.length + COURSE.units.length + 1;
  const done = lessonDone + Object.keys(p.practice).length + quizDone + examDone;
  return { pct: Math.round((done / total) * 100), lessonDone, lessonTotal, quizDone };
}

function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  const es = voices.find((v) => v.lang.startsWith("es"));
  if (es) u.voice = es;
  u.lang = es ? es.lang : "es-ES";
  u.rate = 0.88;
  speechSynthesis.speak(u);
}

if (window.speechSynthesis) {
  speechSynthesis.onvoiceschanged = () => {};
}

function norm(s) {
  return String(s)
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿¡.,;:!?«»"'()`]/g, "")
    .replace(/\s+/g, " ");
}

function checkType(value, answers) {
  const n = norm(value);
  return answers.some((a) => norm(a) === n);
}

function shuffled(list) {
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// A shuffle where nothing keeps its own place, so no word sits next to its answer.
function shuffledApart(count) {
  const places = Array.from({ length: count }, (_, n) => n);
  for (let attempt = 0; attempt < 50; attempt += 1) {
    const order = shuffled(places);
    if (order.every((value, n) => value !== n)) return order;
  }
  return places.map((n) => (n + 1) % count);
}

function unitById(id) {
  return COURSE.units.find((u) => u.id === id);
}

function go(hash) {
  location.hash = hash;
}

function parseHash() {
  const raw = (location.hash || "#/").replace(/^#/, "");
  const parts = raw.split("/").filter(Boolean);
  if (!parts.length) return { view: "home" };
  if (parts[0] === "unit" && parts[1]) {
    const unitId = parts[1];
    if (parts[2] === "practice") return { view: "practice", unitId };
    if (parts[2] === "quiz") return { view: "quiz", unitId };
    if (parts[2] === "lesson" && parts[3]) return { view: "lesson", unitId, lessonId: parts[3] };
    return { view: "unit", unitId };
  }
  if (parts[0] === "story" && parts[1]) {
    return { view: "story", storyId: parts[1], storyPage: parts[2] ? Number(parts[2]) : null };
  }
  if (["exam", "phrasebook", "verbs", "how", "stories"].includes(parts[0])) return { view: parts[0] };
  return { view: "home" };
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content;
}

function speakBtn(text) {
  return `<button class="speak" type="button" data-speak="${escapeAttr(text)}" aria-label="Play pronunciation">▶</button>`;
}

function escapeAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderShell(mainHtml) {
  const stats = courseStats();
  const navUnits = COURSE.units.map((u) => {
    const active = state.unitId === u.id ? " active" : "";
    const done = unitDone(u) ? " done" : "";
    return `<button class="nav-link${active}${done}" data-go="#/unit/${u.id}"><span class="num">${u.num}</span>${escapeHtml(u.title)}</button>`;
  }).join("");

  document.getElementById("app").innerHTML = `
    <div class="overlay${state.menuOpen ? " show" : ""}" data-close-menu></div>
    <div class="app">
      <aside class="sidebar${state.menuOpen ? " open" : ""}" id="sidebar">
        <a class="brand" href="#/" data-go="#/">
          <small>CEFR beginner</small>
          <strong>Camino A1</strong>
        </a>
        <div class="progress-box">
          <p>Course progress · ${stats.pct}%</p>
          <div class="bar"><span style="width:${stats.pct}%"></span></div>
        </div>
        <button class="nav-link${state.view === "home" ? " active" : ""}" data-go="#/">Home</button>
        <button class="nav-link${state.view === "how" ? " active" : ""}" data-go="#/how">How to reach A1</button>
        <div class="nav-label">Units</div>
        ${navUnits}
        <div class="nav-label">Tools</div>
        <button class="nav-link${state.view === "phrasebook" ? " active" : ""}" data-go="#/phrasebook">Phrasebook</button>
        <button class="nav-link${state.view === "stories" || state.view === "story" ? " active" : ""}" data-go="#/stories">Reading</button>
        <button class="nav-link${state.view === "verbs" ? " active" : ""}" data-go="#/verbs">Verb trainer</button>
        <button class="nav-link${state.view === "exam" ? " active" : ""}" data-go="#/exam">Final A1 exam</button>
      </aside>
      <main class="main">
        <div class="topbar">
          <button class="menu-btn" data-toggle-menu type="button" aria-controls="sidebar" aria-expanded="${state.menuOpen}">Menu</button>
          <span class="topbar-progress">${stats.pct}% done</span>
        </div>
        ${mainHtml}
      </main>
    </div>
  `;
  document.documentElement.classList.toggle("menu-open", state.menuOpen);
  bindGlobal();
}

function bindGlobal() {
  document.querySelectorAll("[data-go]").forEach((b) => {
    b.addEventListener("click", () => {
      const target = b.getAttribute("data-go");
      state.menuOpen = false;
      // Tapping the page you are already on fires no hashchange, so redraw by hand.
      if (target === (location.hash || "#/")) render({ scrollToTop: true });
      else go(target);
    });
  });
  document.querySelectorAll("[data-toggle-menu]").forEach((b) => {
    b.addEventListener("click", () => {
      state.menuOpen = !state.menuOpen;
      render();
    });
  });
  document.querySelectorAll("[data-close-menu]").forEach((b) => {
    b.addEventListener("click", () => {
      state.menuOpen = false;
      render();
    });
  });
  document.querySelectorAll("[data-speak]").forEach((b) => {
    b.addEventListener("click", () => speak(b.getAttribute("data-speak")));
  });
}

function renderHome() {
  const stats = courseStats();
  const cards = COURSE.units.map((u) => {
    const done = unitDone(u);
    return `
      <button class="card unit-card" data-go="#/unit/${u.id}">
        <div class="meta"><span>Unit ${u.num}</span><span>${done ? "Passed" : u.hours + " h"}</span></div>
        <h3>${escapeHtml(u.title)}</h3>
        <p>${escapeHtml(u.subtitle)}</p>
      </button>
    `;
  }).join("");

  renderShell(`
    <p class="kicker">Self-paced Spanish</p>
    <h1>From zero to A1.</h1>
    <p class="lead">Finish this course and you will be able to introduce yourself, handle shops, food, directions, and simple plans — the official CEFR A1 level. About ${COURSE.hours} hours if you speak out loud and do every exercise.</p>
    <div class="grid">
      <div class="card"><h3>${stats.lessonDone} / ${stats.lessonTotal}</h3><p>Lessons opened and marked done</p></div>
      <div class="card"><h3>${stats.quizDone} / 10</h3><p>Unit quizzes completed</p></div>
      <div class="card"><h3>${stats.pct}%</h3><p>Whole-course progress</p></div>
    </div>
    <div class="actions">
      <button class="btn" data-go="#/unit/u1">Start unit 1</button>
      <button class="btn secondary" data-go="#/how">Study plan</button>
      <button class="btn olive" data-go="#/exam">Final exam</button>
    </div>
    <h2 style="margin-top:40px">The path</h2>
    <div class="grid">${cards}</div>
  `);
}

function renderHow() {
  renderShell(`
    <p class="kicker">Method</p>
    <h1>How to actually reach A1</h1>
    <p class="lead">A1 is not “I watched some videos.” It means you can do the jobs below, slowly, with mistakes, when the other person helps you.</p>
    <div class="card section">
      <h3>What A1 speakers can do</h3>
      <ul class="can-do">
        <li>Introduce themselves and ask basic personal questions</li>
        <li>Talk about family, home, work or studies, and daily routine</li>
        <li>Order food, shop, and ask where something is</li>
        <li>Understand set phrases if people speak slowly and clearly</li>
        <li>Write a few short sentences about their life</li>
      </ul>
    </div>
    <div class="card section">
      <h3>A realistic timetable</h3>
      <p>Instituto Cervantes-style A1 is roughly 60–90 classroom hours. Alone, plan <strong>50–70 focused hours</strong>.</p>
      <ul class="can-do">
        <li><strong>45 minutes a day for 10 weeks</strong> — the steady path</li>
        <li><strong>90 minutes a day for 5 weeks</strong> — faster</li>
        <li>One unit every 4–6 days: lesson → speak the dialogues → practice → quiz (75% to pass)</li>
      </ul>
    </div>
    <div class="card section">
      <h3>Rules that make this work</h3>
      <ul class="can-do">
        <li>Press ▶ and repeat every new word out loud. Silent study does not become speaking.</li>
        <li>Write answers yourself. Do not peek, then immediately retry the ones you missed.</li>
        <li>After each unit, record yourself doing the “can-do” list on the unit page.</li>
        <li>Pass all 10 quizzes and the final exam at 75% or higher.</li>
        <li>Then do the speaking and writing prompts without notes. That is A1 in real life.</li>
      </ul>
    </div>
    <p class="note">This course uses international Spanish: <em>tú</em> and <em>ustedes</em>. <em>Vosotros</em> appears in tables because you will see it in Spain. Accents are taught; answers accept them with or without marks.</p>
  `);
}

function renderUnit(unit) {
  const p = progress();
  const chips = unit.lessons.map((l, i) => {
    const done = p.lessons[`${unit.id}:${l.id}`];
    return `<button class="chip${done ? " done" : ""}" data-go="#/unit/${unit.id}/lesson/${l.id}">${i + 1}. ${escapeHtml(l.title)}</button>`;
  }).join("");
  const quiz = p.quizzes[unit.id];
  const prac = p.practice[unit.id];

  renderShell(`
    <p class="kicker">Unit ${unit.num} · ${unit.hours} hours</p>
    <h1>${escapeHtml(unit.title)}</h1>
    <p class="lead">${escapeHtml(unit.subtitle)}</p>
    <div class="card section">
      <h3>After this unit you can</h3>
      <ul class="can-do">${unit.canDo.map((c) => `<li>${escapeHtml(c)}</li>`).join("")}</ul>
    </div>
    <div class="lesson-nav">${chips}</div>
    <div class="actions">
      <button class="btn" data-go="#/unit/${unit.id}/lesson/${unit.lessons[0].id}">Open first lesson</button>
      <button class="btn secondary" data-go="#/unit/${unit.id}/practice">Practice${prac ? ` · ${prac.score}/${prac.total}` : ""}</button>
      <button class="btn olive" data-go="#/unit/${unit.id}/quiz">Unit quiz${quiz ? ` · ${quiz.score}/${quiz.total}` : ""}</button>
    </div>
  `);
}

function renderBlock(block) {
  if (block.type === "p") return `<div class="section"><p>${block.html}</p></div>`;
  if (block.type === "note") return `<p class="note">${block.html}</p>`;
  if (block.type === "vocab") {
    const rows = block.items.map((it) => `
      <div class="vocab-row">
        ${speakBtn(it.es)}
        <div class="es">${escapeHtml(it.es)}</div>
        <div class="en">${escapeHtml(it.en)}</div>
      </div>
    `).join("");
    return `<div class="section"><h3>${escapeHtml(block.title)}</h3><div class="vocab">${rows}</div></div>`;
  }
  if (block.type === "table") {
    const head = `<tr>${block.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr>`;
    const body = block.rows.map((r) => `<tr>${r.map((c) => `<td>${escapeHtml(c)}</td>`).join("")}</tr>`).join("");
    return `<div class="section"><h3>${escapeHtml(block.caption)}</h3><div class="table-wrap"><table>${head}${body}</table></div></div>`;
  }
  if (block.type === "dialogue") {
    const lines = block.lines.map((ln) => `
      <div class="bubble ${ln.side}">
        <div class="who">${escapeHtml(ln.who)}</div>
        <div>${speakBtn(ln.es)} <strong>${escapeHtml(ln.es)}</strong></div>
        <div class="tr">${escapeHtml(ln.en)}</div>
      </div>
    `).join("");
    return `<div class="section"><h3>${escapeHtml(block.title)}</h3><div class="dialogue">${lines}</div></div>`;
  }
  return "";
}

function renderLesson(unit, lesson) {
  const idx = unit.lessons.findIndex((l) => l.id === lesson.id);
  const prev = unit.lessons[idx - 1];
  const next = unit.lessons[idx + 1];
  const body = lesson.blocks.map(renderBlock).join("");
  renderShell(`
    <p class="kicker">Unit ${unit.num} · Lesson ${idx + 1} of ${unit.lessons.length}</p>
    <h1>${escapeHtml(lesson.title)}</h1>
    ${body}
    <div class="footer-nav">
      <button class="btn secondary" data-go="${prev ? `#/unit/${unit.id}/lesson/${prev.id}` : `#/unit/${unit.id}`}">${prev ? "Previous" : "Unit overview"}</button>
      <button class="btn" data-mark-lesson>Mark done & continue</button>
    </div>
  `);
  document.querySelector("[data-mark-lesson]").addEventListener("click", () => {
    markLesson(unit.id, lesson.id);
    if (next) go(`#/unit/${unit.id}/lesson/${next.id}`);
    else go(`#/unit/${unit.id}/practice`);
  });
}

function renderExercise(ex, i, mode) {
  const id = `${mode}-${i}`;
  if (ex.type === "mc") {
    const opts = ex.options.map((o, n) => `<button class="option" type="button" data-ex="${id}" data-n="${n}">${escapeHtml(o)}</button>`).join("");
    return `<div class="exercise" id="${id}"><h3>${i + 1}. ${escapeHtml(ex.q)}</h3><div class="options">${opts}</div></div>`;
  }
  if (ex.type === "tf") {
    return `<div class="exercise" id="${id}"><h3>${i + 1}. ${escapeHtml(ex.q)}</h3>
      <div class="options">
        <button class="option" data-ex="${id}" data-tf="true">True</button>
        <button class="option" data-ex="${id}" data-tf="false">False</button>
      </div></div>`;
  }
  if (ex.type === "type") {
    return `<div class="exercise" id="${id}"><h3>${i + 1}. ${escapeHtml(ex.q)}</h3>
      <input type="text" data-type="${id}" autocomplete="off" placeholder="Type in Spanish" />
      <div class="actions"><button class="btn secondary" data-check-type="${id}">Check</button></div></div>`;
  }
  if (ex.type === "order") {
    const buttons = ex.words.map((w, n) => `<button type="button" data-order-word="${id}" data-w="${escapeAttr(w)}" data-n="${n}">${escapeHtml(w)}</button>`).join("");
    return `<div class="exercise" id="${id}"><h3>${i + 1}. ${escapeHtml(ex.q)}</h3>
      <p class="en" data-order-out="${id}"></p>
      <div class="order-words">${buttons}</div>
      <div class="actions">
        <button class="btn secondary" data-order-reset="${id}">Reset</button>
        <button class="btn" data-order-check="${id}">Check</button>
      </div></div>`;
  }
  if (ex.type === "match") {
    // Rows are interleaved so both columns line up; the meanings are shuffled.
    const order = shuffledApart(ex.pairs.length);
    const cells = ex.pairs.map((pair, n) => {
      const meaning = ex.pairs[order[n]][1];
      return `<button class="match-item" type="button" data-match-left="${id}" data-n="${n}">${escapeHtml(pair[0])}</button>
        <button class="match-item" type="button" data-match-right="${id}" data-n="${order[n]}">${escapeHtml(meaning)}</button>`;
    }).join("");
    return `<div class="exercise" id="${id}"><h3>${i + 1}. ${escapeHtml(ex.q)}</h3>
      <p class="en">Tap a Spanish word, then its meaning.</p>
      <div class="match-grid">${cells}</div></div>`;
  }
  return "";
}

function bindExercises(list, mode, onDone) {
  const answers = new Array(list.length).fill(null);

  function finishIfReady() {
    if (answers.every((a) => a !== null)) {
      const score = answers.filter(Boolean).length;
      onDone(score, list.length);
    }
  }

  function markBox(id, ok, message) {
    const box = document.getElementById(id);
    let r = box.querySelector(".result");
    if (!r) {
      r = document.createElement("div");
      r.className = "result";
      box.appendChild(r);
    }
    r.className = `result ${ok ? "ok" : "bad"}`;
    r.textContent = message;
  }

  list.forEach((ex, i) => {
    const id = `${mode}-${i}`;
    if (ex.type === "mc") {
      document.querySelectorAll(`[data-ex="${id}"]`).forEach((btn) => {
        btn.addEventListener("click", () => {
          const n = Number(btn.dataset.n);
          const ok = n === ex.answer;
          answers[i] = ok;
          document.querySelectorAll(`[data-ex="${id}"]`).forEach((b) => {
            b.classList.remove("selected", "correct", "wrong");
            if (Number(b.dataset.n) === ex.answer) b.classList.add("correct");
          });
          if (!ok) btn.classList.add("wrong");
          markBox(id, ok, ok ? "Correct." : `Answer: ${ex.options[ex.answer]}`);
          finishIfReady();
        });
      });
    }
    if (ex.type === "tf") {
      document.querySelectorAll(`[data-ex="${id}"]`).forEach((btn) => {
        btn.addEventListener("click", () => {
          const val = btn.dataset.tf === "true";
          const ok = val === ex.answer;
          answers[i] = ok;
          document.querySelectorAll(`[data-ex="${id}"]`).forEach((b) => b.classList.remove("selected", "correct", "wrong"));
          btn.classList.add(ok ? "correct" : "wrong");
          const extra = !ok && ex.explain ? ` ${ex.explain}` : "";
          markBox(id, ok, (ok ? "Correct." : `False — the statement is ${ex.answer}.`) + extra);
          finishIfReady();
        });
      });
    }
    if (ex.type === "type") {
      document.querySelector(`[data-check-type="${id}"]`).addEventListener("click", () => {
        const val = document.querySelector(`[data-type="${id}"]`).value;
        const ok = checkType(val, ex.answers);
        answers[i] = ok;
        markBox(id, ok, ok ? "Correct." : `A good answer: ${ex.answers[0]}`);
        finishIfReady();
      });
    }
    if (ex.type === "order") {
      const chosen = [];
      const out = document.querySelector(`[data-order-out="${id}"]`);
      document.querySelectorAll(`[data-order-word="${id}"]`).forEach((btn) => {
        btn.addEventListener("click", () => {
          chosen.push(btn.dataset.w);
          btn.disabled = true;
          out.textContent = chosen.join(" ");
        });
      });
      document.querySelector(`[data-order-reset="${id}"]`).addEventListener("click", () => {
        chosen.length = 0;
        out.textContent = "";
        document.querySelectorAll(`[data-order-word="${id}"]`).forEach((b) => { b.disabled = false; });
      });
      document.querySelector(`[data-order-check="${id}"]`).addEventListener("click", () => {
        const ok = norm(chosen.join(" ")) === norm(ex.answer);
        answers[i] = ok;
        markBox(id, ok, ok ? "Correct." : `Answer: ${ex.answer}`);
        finishIfReady();
      });
    }
    if (ex.type === "match") {
      const lefts = document.querySelectorAll(`[data-match-left="${id}"]`);
      const rights = document.querySelectorAll(`[data-match-right="${id}"]`);
      let picked = null;
      let misses = 0;
      let solved = 0;

      lefts.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (btn.disabled) return;
          lefts.forEach((b) => b.classList.remove("selected"));
          btn.classList.add("selected");
          picked = btn;
        });
      });

      rights.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (btn.disabled || !picked) return;
          if (btn.dataset.n !== picked.dataset.n) {
            misses += 1;
            btn.classList.add("wrong");
            setTimeout(() => btn.classList.remove("wrong"), 450);
            return;
          }
          picked.classList.remove("selected");
          picked.classList.add("correct");
          btn.classList.add("correct");
          picked.disabled = true;
          btn.disabled = true;
          picked = null;
          solved += 1;
          if (solved < ex.pairs.length) return;
          // The pair only counts as known if it was found first time.
          answers[i] = misses === 0;
          markBox(id, misses === 0, misses === 0
            ? "All matched, no mistakes."
            : `All matched, but ${misses} wrong ${misses === 1 ? "try" : "tries"}. Review these words.`);
          finishIfReady();
        });
      });
    }
  });
}

function renderPractice(unit) {
  const items = unit.practice.map((ex, i) => renderExercise(ex, i, "p")).join("");
  renderShell(`
    <p class="kicker">Unit ${unit.num}</p>
    <h1>Practice</h1>
    <p class="lead">Drill the building blocks: word pairs, verb endings, and short answers. Answer every item — your score saves when the last one is checked.</p>
    ${items}
    <div id="practice-score"></div>
    <div class="footer-nav">
      <button class="btn secondary" data-go="#/unit/${unit.id}">Back to unit</button>
      <button class="btn" data-go="#/unit/${unit.id}/quiz">Unit quiz</button>
    </div>
  `);
  bindExercises(unit.practice, "p", (score, total) => {
    markPractice(unit.id, score, total);
    document.getElementById("practice-score").innerHTML = `<div class="card section"><p class="score">${score} / ${total}</p><p>${score / total >= 0.75 ? "Solid. Go to the quiz." : "Review the lesson and retry the ones you missed."}</p></div>`;
  });
}

function renderQuiz(unit) {
  const items = unit.quiz.map((ex, i) => renderExercise(ex, i, "q")).join("");
  renderShell(`
    <p class="kicker">Unit ${unit.num} · ${unit.quiz.length} questions · pass at 75%</p>
    <h1>Unit quiz</h1>
    <p class="lead">This is a checkpoint, not a recap. Full sentences, lookalike forms, and common traps. Take it without notes.</p>
    ${items}
    <div id="quiz-score"></div>
    <div class="footer-nav">
      <button class="btn secondary" data-go="#/unit/${unit.id}">Back to unit</button>
    </div>
  `);
  bindExercises(unit.quiz, "q", (score, total) => {
    markQuiz(unit.id, score, total);
    const ok = score / total >= 0.75;
    document.getElementById("quiz-score").innerHTML = `<div class="card section"><p class="score">${score} / ${total}</p><p>${ok ? "Unit passed." : "Need 75%. Review and try again."}</p></div>`;
  });
}

function renderExam() {
  const p = progress();
  const items = COURSE.exam.map((ex, i) => renderExercise(ex, i, "e")).join("");
  const speak = COURSE.speaking.map((s) => `<li>${escapeHtml(s)}</li>`).join("");
  const write = COURSE.writing.map((s) => `<li>${escapeHtml(s)}</li>`).join("");
  const prev = p.exam ? `<p class="note">Last score: ${p.exam.score} / ${p.exam.total} (${Math.round(p.exam.score / p.exam.total * 100)}%)</p>` : "";

  renderShell(`
    <p class="kicker">DELE-style checkpoint</p>
    <h1>Final A1 exam</h1>
    <p class="lead">40 scored items covering the whole course. 75% is a pass — the level you wanted. Then do the speaking and writing tasks out loud / on paper. Those are not auto-scored on purpose.</p>
    ${prev}
    ${items}
    <div id="exam-score"></div>
    <div class="card section">
      <h3>Speaking — record yourself</h3>
      <ul class="can-do">${speak}</ul>
    </div>
    <div class="card section">
      <h3>Writing — no translator</h3>
      <ul class="can-do">${write}</ul>
    </div>
  `);
  bindExercises(COURSE.exam, "e", (score, total) => {
    const pr = progress();
    pr.exam = { score, total, at: Date.now() };
    saveProgress(pr);
    const pct = Math.round((score / total) * 100);
    const pass = pct >= 75;
    document.getElementById("exam-score").innerHTML = `
      <div class="card section">
        <p class="kicker">${pass ? "A1 reached" : "Not yet"}</p>
        <p class="score">${score} / ${total}</p>
        <p>${pass
          ? "That is A1 on the grammar and vocabulary this course teaches. Finish the speaking and writing prompts to make it real."
          : "Below 75%. Revisit the weakest units, then retake. A1 is close — do not skip the missed items."}</p>
      </div>`;
  });
}

function renderPhrasebook() {
  const groups = COURSE.phrasebook.map((g) => {
    const rows = g.items.map((it) => `
      <div class="vocab-row">
        ${speakBtn(it.es)}
        <div class="es">${escapeHtml(it.es)}</div>
        <div class="en">${escapeHtml(it.en)}</div>
      </div>`).join("");
    return `<div class="section"><h2>${escapeHtml(g.group)}</h2><div class="vocab">${rows}</div></div>`;
  }).join("");
  renderShell(`<p class="kicker">Carry these</p><h1>Phrasebook</h1><p class="lead">Memorize these before you travel. Tap ▶ and copy the melody of the sentence.</p>${groups}`);
}

// Splitting on a capture group keeps the punctuation in place, so only words become tappable.
const STORY_TOKENS = /([^\p{L}\p{M}\u2019'-]+)/u;

function storyWords(text) {
  return text.split(STORY_TOKENS).filter((part, i) => i % 2 === 0 && part);
}

// A chapter is a list of paragraphs, each a list of sentences. A bare list of
// sentences is accepted too, and reads as one paragraph.
function pageParagraphs(page) {
  return page.paragraphs ? page.paragraphs.map((par) => par.lines || par) : [page.lines || []];
}

function storyWordCount(story) {
  return story.pages.reduce((n, page) => n + pageParagraphs(page).reduce(
    (m, par) => m + par.reduce((k, line) => k + storyWords(line.es).length, 0),
    0
  ), 0);
}

// Accent-blind fallback, tried last: «el» and «él» must not collapse into one entry.
let glossLoose = null;

function looseGloss() {
  if (glossLoose) return glossLoose;
  glossLoose = new Map();
  for (const [key, value] of Object.entries(GLOSS)) {
    const loose = norm(key);
    if (!glossLoose.has(loose)) glossLoose.set(loose, value);
  }
  return glossLoose;
}

function glossFor(word, story) {
  const key = word.toLowerCase();
  if (story.gloss && key in story.gloss) return story.gloss[key];
  if (key in GLOSS) return GLOSS[key];
  return looseGloss().get(norm(key)) || null;
}

// Spans, not buttons: inline buttons break badly across lines, and one delegated
// listener on the page beats several hundred listeners in a long story.
function storyLineHtml(es, lineId) {
  return es
    .split(STORY_TOKENS)
    .map((part, i) => {
      if (i % 2 === 1 || !part) return escapeHtml(part);
      return `<span class="w" data-w="${escapeAttr(part)}" data-line="${lineId}">${escapeHtml(part)}</span>`;
    })
    .join("");
}

function renderStories() {
  const read = progress().stories || {};
  const groups = STORY_LEVELS.map((lvl) => {
    const stories = STORIES.filter((s) => s.level === lvl.level);
    if (!stories.length) return "";
    const cards = stories.map((s) => {
      const furthest = storyFurthestPage(s.id);
      const status = read[s.id]
        ? "Read"
        : furthest
          ? `Chapter ${furthest + 1} of ${s.pages.length}`
          : `${s.minutes} min`;
      return `
        <button class="card story-card" data-go="#/story/${s.id}${furthest ? `/${furthest + 1}` : ""}">
          <div class="meta"><span>${s.pages.length} chapters · ${storyWordCount(s)} words</span><span>${status}</span></div>
          <h3>${escapeHtml(s.title)}</h3>
          <p>${escapeHtml(s.summary)}</p>
        </button>`;
    }).join("");
    return `
      <div class="section">
        <h2>Level ${lvl.level} · ${escapeHtml(lvl.title)}</h2>
        <p class="en">After unit ${lvl.after}. ${escapeHtml(lvl.note)}</p>
        <div class="grid">${cards}</div>
      </div>`;
  }).join("");

  renderShell(`
    <p class="kicker">Reading</p>
    <h1>Cuentos</h1>
    <p class="lead">Little books that use only the grammar you have already met. Read one chapter at a time, and tap any word to see what it means and how the whole sentence reads.</p>
    <div class="card section"><h3>${storiesRead()} / ${STORIES.length}</h3><p>Books finished</p></div>
    ${groups}
    <p class="note">Nothing is locked. The level only tells you which units a book leans on, so a level 3 book will feel easier once unit 8 is behind you. A book you have started reopens at the chapter you stopped in.</p>
  `);
}

// Filled during render so the word sheet can show the sentence a word came from.
let storyLines = new Map();

function renderStory(story, pageNumber) {
  const total = story.pages.length;
  const furthest = storyFurthestPage(story.id);
  // No chapter in the URL means "carry on where I stopped".
  const wanted = Number.isFinite(pageNumber) ? pageNumber : furthest + 1;
  const n = Math.min(Math.max(wanted, 1), total);
  const page = story.pages[n - 1];
  const last = n === total;
  markStoryPage(story.id, n - 1);
  storyLines = new Map();

  const index = story.pages.map((pg, i) => {
    const active = i + 1 === n ? " active" : "";
    const done = i < furthest ? " done" : "";
    return `<button class="chip${active}${done}" data-go="#/story/${story.id}/${i + 1}"
      title="${escapeAttr(pg.title)}" aria-label="Chapter ${i + 1}: ${escapeAttr(pg.title)}">${i + 1}</button>`;
  }).join("");

  const paragraphs = pageParagraphs(page).map((par, pi) => {
    const es = par.map((line, i) => {
      const id = `${pi}-${i}`;
      storyLines.set(id, line);
      return `<span class="story-sent">${storyLineHtml(line.es, id)}</span>`;
    }).join(" ");
    const en = par.map((line) => escapeHtml(line.en)).join(" ");
    return `<p class="story-par">${es}</p><p class="story-en">${en}</p>`;
  }).join("");

  const pageText = pageParagraphs(page).flatMap((par) => par.map((line) => line.es)).join(" ");

  // The hint belongs on the first chapter only, not on all eight.
  const hint = n === 1
    ? `<p class="note">Read a chapter out loud before you tap anything. Guessing from context is the skill you are building — the meanings are there for when guessing fails.</p>`
    : "";

  const ending = last ? `
    <div class="section">
      <h3>Words worth keeping</h3>
      <div class="vocab">${story.vocab.map((it) => `
        <div class="vocab-row">
          ${speakBtn(it.es)}
          <div class="es">${escapeHtml(it.es)}</div>
          <div class="en">${escapeHtml(it.en)}</div>
        </div>`).join("")}</div>
    </div>
    <h2>Did you follow it?</h2>
    <p class="lead">Seven questions about the whole book, in Spanish.</p>
    ${story.questions.map((ex, i) => renderExercise(ex, i, "s")).join("")}
    <div id="story-score"></div>` : "";

  renderShell(`
    <div class="story-view">
      <p class="kicker">${escapeHtml(story.title)} · Capítulo ${n} de ${total}</p>
      <h1>${escapeHtml(page.title)}</h1>
      <div class="bar story-bar"><span style="width:${Math.round((n / total) * 100)}%"></span></div>
      <div class="lesson-nav">${index}</div>
      <div class="actions">
        ${speakBtn(pageText)}
        <button class="btn secondary" data-toggle-en type="button">${state.storyShowEn ? "Hide English" : "Show English"}</button>
      </div>
      ${hint}
      <div class="story-body${state.storyShowEn ? " show-en" : ""}">
        <span class="story-scene" aria-hidden="true">${escapeHtml(page.scene || "")}</span>
        ${paragraphs}
      </div>
      ${ending}
      <div class="footer-nav">
        <button class="btn secondary" data-go="${n > 1 ? `#/story/${story.id}/${n - 1}` : "#/stories"}">${n > 1 ? "Previous chapter" : "All books"}</button>
        ${last
          ? `<button class="btn" data-mark-story type="button">Finish the book</button>`
          : `<button class="btn" data-go="#/story/${story.id}/${n + 1}">Next chapter</button>`}
      </div>
    </div>
    <div class="sheet" id="word-sheet" hidden></div>
  `);

  const body = document.querySelector(".story-body");
  body.addEventListener("click", (e) => {
    const word = e.target.closest(".w");
    if (!word) return;
    document.querySelectorAll(".w.active").forEach((el) => el.classList.remove("active"));
    word.classList.add("active");
    openWordSheet(story, word.dataset.w, word.dataset.line);
  });

  const toggle = document.querySelector("[data-toggle-en]");
  toggle.addEventListener("click", () => {
    state.storyShowEn = !state.storyShowEn;
    body.classList.toggle("show-en", state.storyShowEn);
    toggle.textContent = state.storyShowEn ? "Hide English" : "Show English";
  });

  if (!last) return;

  document.querySelector("[data-mark-story]").addEventListener("click", () => {
    markStory(story.id);
    go("#/stories");
  });

  bindExercises(story.questions, "s", (score, total2) => {
    markStory(story.id);
    document.getElementById("story-score").innerHTML = `<div class="card section"><p class="score">${score} / ${total2}</p><p>${
      score === total2 ? "You read it, not guessed it. Pick the next book." : "Reread the chapters you are unsure about with English on, then retry."
    }</p></div>`;
  });
}

function openWordSheet(story, word, lineId) {
  const line = storyLines.get(lineId);
  const meaning = glossFor(word, story);
  const sheet = document.getElementById("word-sheet");
  if (!sheet || !line) return;

  sheet.innerHTML = `
    <div class="sheet-row">
      <div>
        <p class="sheet-word">${escapeHtml(word)}</p>
        <p class="sheet-meaning">${meaning ? escapeHtml(meaning) : "No meaning noted for this word yet."}</p>
      </div>
      ${speakBtn(word)}
    </div>
    <div class="sheet-line">
      <div class="sheet-row">
        <p class="es">${escapeHtml(line.es)}</p>
        ${speakBtn(line.es)}
      </div>
      <p class="en">${escapeHtml(line.en)}</p>
    </div>
    <button class="btn secondary" data-close-sheet type="button">Close</button>
  `;
  sheet.hidden = false;
  // These listeners die with the nodes on the next tap, so nothing accumulates.
  sheet.querySelectorAll("[data-speak]").forEach((b) => {
    b.addEventListener("click", () => speak(b.getAttribute("data-speak")));
  });
  sheet.querySelector("[data-close-sheet]").addEventListener("click", closeWordSheet);
}

function closeWordSheet() {
  const sheet = document.getElementById("word-sheet");
  if (sheet) sheet.hidden = true;
  document.querySelectorAll(".w.active").forEach((n) => n.classList.remove("active"));
}

function renderVerbs() {
  const v = COURSE.verbs[state.verb.i % COURSE.verbs.length];
  const person = state.verb.person;
  renderShell(`
    <p class="kicker">Drill · streak ${state.verb.streak}</p>
    <h1>Verb trainer</h1>
    <p class="lead">A1 lives or dies on these forms. Type the correct present-tense form.</p>
    <div class="card section">
      <p class="kicker">${escapeHtml(v.en)}</p>
      <h2>${escapeHtml(v.inf)}</h2>
      <p>Person: <strong>${PRONOUNS[person]}</strong></p>
      <input type="text" id="verb-in" autocomplete="off" placeholder="Type the form" />
      <div class="actions">
        <button class="btn" id="verb-check">Check</button>
        <button class="btn secondary" id="verb-next">Skip</button>
      </div>
      <div id="verb-out"></div>
    </div>
    <div class="section">
      <h3>All A1 verbs in this trainer</h3>
      <div class="table-wrap"><table>
        <tr><th>Verb</th><th>Meaning</th><th>yo</th><th>tú</th><th>él</th></tr>
        ${COURSE.verbs.map((x) => `<tr><td>${escapeHtml(x.inf)}</td><td>${escapeHtml(x.en)}</td><td>${escapeHtml(x.forms[0])}</td><td>${escapeHtml(x.forms[1])}</td><td>${escapeHtml(x.forms[2])}</td></tr>`).join("")}
      </table></div>
    </div>
  `);
  const input = document.getElementById("verb-in");
  // On a phone, only grab focus mid-drill: opening the keyboard on arrival is jarring.
  if (state.verb.focusInput || !matchMedia("(pointer: coarse)").matches) {
    input.focus({ preventScroll: true });
  }
  state.verb.focusInput = false;
  const check = () => {
    const ok = checkType(input.value, [v.forms[person]]);
    state.verb.streak = ok ? state.verb.streak + 1 : 0;
    document.getElementById("verb-out").innerHTML = `<div class="result ${ok ? "ok" : "bad"}">${ok ? "Correct." : `Answer: ${v.forms[person]}`}</div>`;
    if (ok) setTimeout(nextVerb, 550);
  };
  document.getElementById("verb-check").addEventListener("click", check);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
  document.getElementById("verb-next").addEventListener("click", nextVerb);
}

function nextVerb() {
  state.verb.i += 1;
  state.verb.person = Math.floor(Math.random() * 6);
  state.verb.focusInput = true;
  render();
}

function renderRoute(route) {
  if (route.view === "how") return renderHow();
  if (route.view === "phrasebook") return renderPhrasebook();
  if (route.view === "stories") return renderStories();
  if (route.view === "story") {
    const story = STORIES.find((s) => s.id === route.storyId);
    if (!story) return renderStories();
    return renderStory(story, route.storyPage);
  }
  if (route.view === "verbs") return renderVerbs();
  if (route.view === "exam") return renderExam();
  if (route.unitId) {
    const unit = unitById(route.unitId);
    if (!unit) return renderHome();
    if (route.view === "practice") return renderPractice(unit);
    if (route.view === "quiz") return renderQuiz(unit);
    if (route.view === "lesson") {
      const lesson = unit.lessons.find((l) => l.id === route.lessonId);
      if (!lesson) return renderUnit(unit);
      return renderLesson(unit, lesson);
    }
    return renderUnit(unit);
  }
  renderHome();
}

function markScrollableTables() {
  document.querySelectorAll(".table-wrap").forEach((wrap) => {
    wrap.classList.toggle("is-scrollable", wrap.scrollWidth > wrap.clientWidth + 1);
  });
}

let lastRouteKey = null;

function render({ scrollToTop = false } = {}) {
  const route = parseHash();
  state.view = route.view;
  state.unitId = route.unitId || null;
  state.lessonId = route.lessonId || null;
  state.storyId = route.storyId || null;
  state.menuOpen = state.menuOpen && window.innerWidth <= 860;

  const routeKey = [route.view, route.unitId, route.lessonId, route.storyId, route.storyPage].join("|");
  const routeChanged = routeKey !== lastRouteKey;
  lastRouteKey = routeKey;

  renderRoute(route);
  markScrollableTables();

  // A new page starts at the top; opening the menu or answering a drill must not jump.
  if (routeChanged || scrollToTop) window.scrollTo(0, 0);
}

window.addEventListener("hashchange", () => {
  state.menuOpen = false;
  render();
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 860 && state.menuOpen) {
    state.menuOpen = false;
    render();
    return;
  }
  markScrollableTables();
});
window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const sheet = document.getElementById("word-sheet");
  if (sheet && !sheet.hidden) {
    closeWordSheet();
    return;
  }
  if (state.menuOpen) {
    state.menuOpen = false;
    render();
  }
});

render();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  const hadController = Boolean(navigator.serviceWorker.controller);
  let reloading = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    // Only reload when a newer worker replaces an old one, not on first install.
    if (!hadController || reloading) return;
    reloading = true;
    location.reload();
  });

  function checkForUpdate() {
    navigator.serviceWorker.getRegistration().then((reg) => {
      if (reg) reg.update();
    }).catch(() => {});
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then(checkForUpdate).catch(() => {});
  });
  // Opening the home-screen app again should look for a newer course.
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") checkForUpdate();
  });
}
