// Check the exercise sets: `node tools/check-course.mjs`
// Fails if practice, quiz and exam repeat each other, or an item is malformed.

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = readFileSync(join(root, "js/course.js"), "utf8");
const COURSE = new Function(`${source}; return COURSE;`)();

const norm = (value) =>
  String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// What the item actually tests, so rephrased duplicates still collide.
// Bracketed hints like "(where)" are dropped, otherwise they hide a repeat.
function target(ex) {
  if (ex.type === "type") return `type:${norm(ex.answers[0])}`;
  if (ex.type === "order") return `order:${norm(ex.answer)}`;
  if (ex.type === "match") return `match:${ex.pairs.map((p) => norm(p[0])).sort().join("|")}`;
  return `${ex.type}:${norm(String(ex.q).replace(/\([^)]*\)/g, " "))}`;
}

const problems = [];
const report = [];

function checkShape(ex, where) {
  const at = `${where} [${ex.type}]`;
  if (!ex.type) return problems.push(`${where}: missing type`);
  if (ex.type === "mc") {
    if (!Array.isArray(ex.options) || ex.options.length < 3) problems.push(`${at} needs at least 3 options: ${ex.q}`);
    if (typeof ex.answer !== "number" || ex.answer < 0 || ex.answer >= (ex.options || []).length) {
      problems.push(`${at} answer index out of range: ${ex.q}`);
    }
    if (new Set((ex.options || []).map(norm)).size !== (ex.options || []).length) {
      problems.push(`${at} has duplicate options: ${ex.q}`);
    }
    if (!ex.q) problems.push(`${at} missing question`);
  }
  if (ex.type === "tf") {
    if (typeof ex.answer !== "boolean") problems.push(`${at} answer must be true/false: ${ex.q}`);
    if (ex.answer === false && !ex.explain) problems.push(`${at} a false statement needs an explain: ${ex.q}`);
  }
  if (ex.type === "type") {
    if (!Array.isArray(ex.answers) || !ex.answers.length) problems.push(`${at} needs answers: ${ex.q}`);
    if ((ex.answers || []).some((a) => !norm(a))) problems.push(`${at} has an empty answer: ${ex.q}`);
  }
  if (ex.type === "order") {
    const words = norm((ex.words || []).join(" ")).split(" ").filter(Boolean).sort();
    const answer = norm(ex.answer).split(" ").filter(Boolean).sort();
    if (words.join("|") !== answer.join("|")) {
      problems.push(`${at} words do not add up to the answer: ${ex.q} => words[${words}] answer[${answer}]`);
    }
  }
  if (ex.type === "match") {
    if (!Array.isArray(ex.pairs) || ex.pairs.length < 3) problems.push(`${at} needs at least 3 pairs: ${ex.q}`);
    const spanish = (ex.pairs || []).map((p) => norm(p[0]));
    const english = (ex.pairs || []).map((p) => norm(p[1]));
    if (new Set(spanish).size !== spanish.length) problems.push(`${at} repeats a Spanish word: ${ex.q}`);
    // Two identical meanings would make the exercise unsolvable.
    if (new Set(english).size !== english.length) problems.push(`${at} repeats a meaning: ${ex.q}`);
  }
}

const seenGlobally = new Map();

for (const unit of COURSE.units) {
  const practice = unit.practice || [];
  const quiz = unit.quiz || [];
  practice.forEach((ex) => checkShape(ex, `u${unit.num} practice`));
  quiz.forEach((ex) => checkShape(ex, `u${unit.num} quiz`));

  const practiceTargets = new Set(practice.map(target));
  const repeated = quiz.filter((ex) => practiceTargets.has(target(ex)));
  if (repeated.length) {
    problems.push(`u${unit.num}: ${repeated.length} quiz item(s) repeat practice`);
    repeated.forEach((ex) => problems.push(`   ${ex.q || ex.answer}`));
  }

  for (const [list, name] of [[practice, "practice"], [quiz, "quiz"]]) {
    const local = new Map();
    list.forEach((ex) => {
      const t = target(ex);
      if (local.has(t)) problems.push(`u${unit.num} ${name}: duplicate item "${ex.q || ex.answer}"`);
      local.set(t, true);
      const prior = seenGlobally.get(t);
      if (prior) problems.push(`u${unit.num} ${name}: also used in ${prior} — "${ex.q || ex.answer}"`);
      else seenGlobally.set(t, `u${unit.num} ${name}`);
    });
  }

  const count = (list) => {
    const by = {};
    list.forEach((ex) => { by[ex.type] = (by[ex.type] || 0) + 1; });
    return Object.entries(by).map(([k, v]) => `${k} ${v}`).join(", ");
  };
  report.push(`u${String(unit.num).padEnd(2)} practice ${String(practice.length).padStart(2)} (${count(practice)})`);
  report.push(`    quiz     ${String(quiz.length).padStart(2)} (${count(quiz)})`);
}

const exam = COURSE.exam || [];
exam.forEach((ex) => checkShape(ex, "exam"));
const examRepeats = exam.filter((ex) => seenGlobally.has(target(ex)));
if (examRepeats.length) {
  problems.push(`exam: ${examRepeats.length} item(s) repeat a unit exercise`);
  examRepeats.forEach((ex) => problems.push(`   ${ex.q || ex.answer}`));
}

console.log(report.join("\n"));
console.log(`\nexam ${exam.length} items`);
console.log(`total ${COURSE.units.reduce((n, u) => n + u.practice.length + u.quiz.length, 0) + exam.length} exercises`);

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  problems.forEach((p) => console.error(`  ${p}`));
  process.exit(1);
}
console.log("\nNo overlap, no malformed items.");
