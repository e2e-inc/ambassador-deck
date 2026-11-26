import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const args = process.argv.slice(2);
const name = args.find((a) => !a.startsWith("--"));
const langFlag = args.indexOf("--lang");
const lang = langFlag === -1 ? "en" : args[langFlag + 1];

if (!name || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name) || !/^[a-z]{2}(-[a-z]{2})?$/.test(lang ?? "")) {
  console.error(
    "usage: pnpm new <name> [--lang <code>]\n" +
      "name: lowercase with hyphens, for example ada-prague-2026-12-10\n" +
      "lang: a language code such as ja, ko, pl or pt-br; default en",
  );
  process.exit(1);
}

const target = join(root, "decks", name);
if (existsSync(target)) {
  console.error(`decks/${name} already exists`);
  process.exit(1);
}

/**
 * Points a shared slide import at the deck's language when that translation exists,
 * and leaves it on English when it does not.
 * @param {string} topic file name of the shared slide, such as problem.md
 * @returns {string} path for the `src:` line
 */
function slidePath(topic) {
  const translated = join(root, "slides", lang, topic);
  return `../../slides/${existsSync(translated) ? lang : "en"}/${topic}`;
}

const main = readFileSync(join(root, "decks", "main", "slides.md"), "utf8");
const deck = main
  .replace(/^lang: .*$/m, `lang: ${lang}`)
  .replace(/^src: \.\.\/\.\.\/slides\/en\/(.+\.md)$/gm, (_, topic) => `src: ${slidePath(topic)}`);

mkdirSync(target, { recursive: true });
writeFileSync(join(target, "slides.md"), deck);
cpSync(join(root, "decks", "main", "public"), join(target, "public"), { recursive: true });

const missing = [...deck.matchAll(/^src: \.\.\/\.\.\/slides\/en\/(.+\.md)$/gm)].map((m) => m[1]);
console.log(`created decks/${name}/slides.md`);
if (lang !== "en" && missing.length) {
  console.log(
    `${missing.length} slides have no ${lang} translation yet and stay in English:\n  ${missing.join(", ")}\n` +
      `translate one with: copy slides/en/<topic>.md to slides/${lang}/<topic>.md, then see AGENTS.md`,
  );
}
console.log(`next: edit the headmatter in decks/${name}/slides.md, then pnpm dev ${name}`);
