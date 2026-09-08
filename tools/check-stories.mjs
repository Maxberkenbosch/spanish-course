// Check the stories: `node tools/check-stories.mjs`
// Fails if a word in a story has no meaning to show when tapped, or a question is malformed.

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = readFileSync(join(root, "js/stories.js"), "utf8");
const { STORIES, GLOSS, STORY_LEVELS } = new Function(`${source}; return { STORIES, GLOSS, STORY_LEVELS };`)();

// Both must match js/app.js, or the checker passes words the app cannot look up.
const TOKENS = /([^\p{L}\p{M}\u2019'-]+)/u;

const norm = (value) =>
  String(value ?? "")
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿¡.,;:!?«»"'()`]/g, "")
    .replace(/\s+/g, " ");

const words = (text) => text.split(TOKENS).filter((part, i) => i % 2 === 0 && part);

// Must match pageParagraphs() in js/app.js.
const paragraphsOf = (page) =>
  page.paragraphs ? page.paragraphs.map((par) => par.lines || par) : [page.lines || []];

const looseGloss = new Map();
for (const [key, value] of Object.entries(GLOSS)) {
  const loose = norm(key);
  if (!looseGloss.has(loose)) looseGloss.set(loose, value);
}

function glossFor(word, story) {
  const key = word.toLowerCase();
  if (story.gloss && key in story.gloss) return story.gloss[key];
  if (key in GLOSS) return GLOSS[key];
  return looseGloss.get(norm(key)) || null;
}

const problems = [];
const warnings = [];
const report = [];

function checkQuestion(ex, where) {
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
    const given = norm((ex.words || []).join(" ")).split(" ").filter(Boolean).sort();
    const answer = norm(ex.answer).split(" ").filter(Boolean).sort();
    if (given.join("|") !== answer.join("|")) {
      problems.push(`${at} words do not add up to the answer: ${ex.q}`);
    }
  }
  if (ex.type === "match") {
    if (!Array.isArray(ex.pairs) || ex.pairs.length < 3) problems.push(`${at} needs at least 3 pairs: ${ex.q}`);
  }
}

const ids = new Set();

for (const story of STORIES) {
  const where = `${story.id}`;
  if (ids.has(story.id)) problems.push(`duplicate story id "${story.id}"`);
  ids.add(story.id);

  const level = STORY_LEVELS.find((l) => l.level === story.level);
  if (!level) problems.push(`${where}: level ${story.level} is not in STORY_LEVELS`);
  if (!story.pages?.length) problems.push(`${where}: no pages`);

  const unique = new Set();
  const missing = new Set();
  const usedGloss = new Set();
  let count = 0;

  story.pages.forEach((page, p) => {
    if (!page.title) problems.push(`${where} chapter ${p + 1}: needs a title`);
    const paragraphs = paragraphsOf(page);
    if (!paragraphs.length || !paragraphs[0].length) problems.push(`${where} chapter ${p + 1}: no text`);
    paragraphs.forEach((par, pi) => {
      par.forEach((line, i) => {
        const at = `${where} chapter ${p + 1} paragraph ${pi + 1} sentence ${i + 1}`;
        if (!line.es || !line.en) problems.push(`${at}: needs both es and en`);
        words(line.es || "").forEach((word) => {
          count += 1;
          const key = word.toLowerCase();
          unique.add(key);
          if (story.gloss && key in story.gloss) usedGloss.add(key);
          if (!glossFor(word, story)) missing.add(key);
        });
      });
    });
  });

  if (missing.size) {
    problems.push(`${where}: ${missing.size} word(s) with no meaning — add them to GLOSS`);
    problems.push(`   ${[...missing].sort().join(", ")}`);
  }

  // An unused key is almost always a typo, so the word next to it stays unexplained.
  const unused = Object.keys(story.gloss || {}).filter((key) => !usedGloss.has(key));
  if (unused.length) problems.push(`${where}: gloss key(s) never used in the text: ${unused.join(", ")}`);

  (story.questions || []).forEach((ex) => checkQuestion(ex, `${where} question`));
  if (!story.questions?.length) warnings.push(`${where}: no comprehension questions`);
  if (!story.vocab?.length) warnings.push(`${where}: no vocab list`);

  if (level && (count < level.words[0] || count > level.words[1])) {
    warnings.push(`${where}: ${count} words, outside the level ${story.level} range ${level.words.join("–")}`);
  }

  report.push(
    `${String(story.id).padEnd(10)} level ${story.level}  ${String(story.pages.length).padStart(2)} chapters  ` +
    `${String(count).padStart(4)} words  ${String(unique.size).padStart(3)} unique  ` +
    `${String((story.questions || []).length).padStart(2)} questions`
  );
}

console.log(report.join("\n"));
console.log(`\n${STORIES.length} story/stories, ${Object.keys(GLOSS).length} shared gloss entries`);

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log(`  ${w}`));
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  problems.forEach((p) => console.error(`  ${p}`));
  process.exit(1);
}
console.log("\nEvery word has a meaning, every question is well formed.");
