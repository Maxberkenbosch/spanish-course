const STORE_KEY = "camino-a1-progress-v1";
const PRONOUNS = ["yo", "tú", "él/usted", "nosotros", "vosotros", "ellos/ustedes"];

const state = {
  view: "home",
  unitId: null,
  lessonId: null,
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
  return { lessons: {}, practice: {}, quizzes: {}, exam: null };
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
  if (["exam", "phrasebook", "verbs", "how"].includes(parts[0])) return { view: parts[0] };
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
  });
}

function renderPractice(unit) {
  const items = unit.practice.map((ex, i) => renderExercise(ex, i, "p")).join("");
  renderShell(`
    <p class="kicker">Unit ${unit.num}</p>
    <h1>Practice</h1>
    <p class="lead">Answer every item. Your score saves when the last one is checked.</p>
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
  state.menuOpen = state.menuOpen && window.innerWidth <= 860;

  const routeKey = [route.view, route.unitId, route.lessonId].join("|");
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
  if (e.key === "Escape" && state.menuOpen) {
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
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
