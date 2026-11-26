import { defineAppSetup } from "@slidev/types";
import configs from "#slidev/configs";

/**
 * Cassette is licensed by e2e and is never committed here. `import.meta.glob` finds the
 * files when they sit in theme/assets/fonts and finds nothing when they do not, so the
 * deck builds either way and falls back to Geist.
 */
const files = import.meta.glob<string>("../assets/fonts/*.woff2", {
  eager: true,
  query: "?url",
  import: "default",
});

/** Returns the bundled URL of a font file in theme/assets/fonts, if it is there. */
const file = (name: string) => files[`../assets/fonts/${name}`];

export default defineAppSetup(() => {
  if (typeof document === "undefined") return;

  // `lang` in a deck's headmatter picks the fallback faces and the line-breaking rules.
  const lang = (configs as { lang?: string }).lang;
  if (lang) document.documentElement.lang = lang;

  const sans = file("Cassette-Regular.woff2");
  const mono = file("CassetteMono-Regular.woff2");
  const faces = [
    sans &&
      `@font-face{font-family:"Cassette";src:url("${sans}") format("woff2");font-weight:400;font-display:block}`,
    mono &&
      `@font-face{font-family:"Cassette Mono";src:url("${mono}") format("woff2");font-weight:400;font-display:block;ascent-override:104%;descent-override:29.6%;line-gap-override:0%}`,
  ].filter(Boolean);
  document.documentElement.dataset.e2eFont = faces.length === 2 ? "cassette" : "geist";
  if (!faces.length) return;

  const style = document.createElement("style");
  style.dataset.e2eFonts = "";
  style.textContent = faces.join("\n");
  document.head.append(style);
});
