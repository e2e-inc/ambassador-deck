// Builds the public preview: the main deck at the root and the pattern gallery under
// /patterns/, as one static folder in dist/site. Anyone can view it; nobody can edit it.
//
//   pnpm site
//
// The preview shows whichever typeface this machine builds with: Cassette when its files
// sit in theme/assets/fonts, Geist when they do not.
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { entryOf } from "./deck.mjs";

const root = resolve(import.meta.dirname, "..");
const out = join(root, "dist", "site");
const slidev = fileURLToPath(import.meta.resolve("@slidev/cli/bin/slidev.mjs"));

/**
 * Builds one deck into the site.
 * @param {string} deck deck name
 * @param {string} base URL path the deck is served from, with a trailing slash
 */
function build(deck, base) {
  const target = base === "/" ? out : join(out, base);
  const { status } = spawnSync(
    process.execPath,
    [slidev, "build", entryOf(deck), "--base", base, "--out", target],
    { stdio: "inherit" },
  );
  if (status !== 0) process.exit(status ?? 1);
}

// Keep the Vercel project link (dist/site/.vercel) between builds.
if (existsSync(out)) {
  for (const name of readdirSync(out)) {
    if (name !== ".vercel") rmSync(join(out, name), { recursive: true, force: true });
  }
}

build("main", "/");
build("patterns", "/patterns/");

// Each deck is a single-page app: unknown paths fall back to its index.html.
writeFileSync(
  join(out, "vercel.json"),
  `${JSON.stringify(
    {
      $schema: "https://openapi.vercel.sh/vercel.json",
      framework: null,
      rewrites: [
        { source: "/patterns/:path*", destination: "/patterns/index.html" },
        { source: "/:path*", destination: "/index.html" },
      ],
    },
    null,
    2,
  )}\n`,
);
console.log(`\nbuilt ${out}`);
