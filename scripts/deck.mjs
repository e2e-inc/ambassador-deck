import { spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(import.meta.dirname, "..");
const decksDir = join(root, "decks");
const slidev = fileURLToPath(import.meta.resolve("@slidev/cli/bin/slidev.mjs"));
const [command, deck, ...rest] = process.argv.slice(2);

/**
 * Finds a deck's entry file: a folder in decks/, or `patterns` for the pattern gallery.
 * @param {string | undefined} name deck name as typed
 * @returns {string | undefined} absolute path to slides.md, if the deck exists
 */
export function entryOf(name) {
  if (!name) return undefined;
  const entry = name === "patterns" ? join(root, "patterns", "slides.md") : join(decksDir, name, "slides.md");
  return existsSync(entry) ? entry : undefined;
}

/** Lists every deck that can be passed to a command. */
export function deckNames() {
  const names = readdirSync(decksDir).filter((d) => existsSync(join(decksDir, d, "slides.md")));
  return [...names, "patterns"];
}

/**
 * Builds the Slidev arguments for a deck command.
 * @param {string} name deck name
 * @param {string} entry absolute path to the deck's slides.md
 * @returns {string[] | undefined} arguments, or undefined for an unknown command
 */
function slidevArgs(name, entry) {
  const dist = join(root, "dist");
  switch (command) {
    case "dev":
      return [entry, "--open"];
    case "build":
      return ["build", entry, "--out", join(dist, name)];
    case "export":
      return ["export", entry, "--output", join(dist, `${name}.pdf`)];
    case "shots":
      // One PNG per slide, so you or your coding agent can look at every slide.
      return ["export", entry, "--format", "png", "--output", join(root, "shots", name)];
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const entry = entryOf(deck);
  const args = entry && slidevArgs(deck, entry);
  if (!args) {
    console.error(
      `usage: pnpm <dev|build|export|shots> <deck> [slidev flags]\ndecks: ${deckNames().join(", ")}`,
    );
    process.exit(1);
  }
  const { status } = spawnSync(process.execPath, [slidev, ...args, ...rest], { stdio: "inherit" });
  process.exit(status ?? 1);
}
