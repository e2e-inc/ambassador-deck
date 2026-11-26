import { defineConfig } from "unocss";

/** The e2e brand hub palette: the core six and the web scales (slides 21, 23). */
const palette = {
  signal: "#1a5fff",
  pipeline: "#0032a8",
  terminal: "#000000",
  blank: "#f7f7f7",
  pass: "#64ff9d",
  fail: "#d00045",
  blue: {
    200: "#cfe0ff",
    300: "#acc8ff",
    400: "#88b0ff",
    500: "#558cff",
    600: "#1a5fff",
    700: "#0032a8",
  },
  neutral: {
    100: "#f7f7f7",
    200: "#dfdfdf",
    300: "#c8c8c8",
    400: "#b1b1b1",
    500: "#8d8d8d",
    600: "#686868",
    700: "#434343",
    800: "#1c1c1c",
    900: "#000000",
  },
  green: {
    200: "#b9ffcc",
    300: "#64ff9d",
    400: "#25e17b",
    700: "#007139",
  },
  cyan: {
    400: "#00e6ef",
  },
  // Earlier names, kept for the decks written before the brand hub.
  black: "#000000",
  navy: "#0032a8",
  "off-white": "#f7f7f7",
  mint: "#8af9ff",
  gray: "#b1b1b1",
};

/**
 * UnoCSS cannot parse a nested color group whose name contains a digit, so
 * `colors.e2e.green` never matched `text-e2e-green`. Flat `e2e-*` keys keep
 * the same class names and resolve.
 */
const colors: Record<string, string> = {};
for (const [name, value] of Object.entries(palette)) {
  if (typeof value === "string") {
    colors[`e2e-${name}`] = value;
    continue;
  }
  for (const [step, shade] of Object.entries(value)) colors[`e2e-${name}-${step}`] = shade;
}
// `e2e-blue` and `e2e-green` stay the core Signal and Pass for older decks.
colors["e2e-blue"] = palette.signal;
colors["e2e-green"] = palette.pass;

export default defineConfig({
  theme: {
    colors,
    fontFamily: {
      sans: "var(--e2e-font-sans)",
      heading: "var(--e2e-font-sans)",
      mono: "var(--e2e-font-mono)",
      code: "var(--e2e-font-mono)",
    },
  },
  shortcuts: {
    // The twelve text styles (slide 29), nothing in between.
    "type-number-xl": "font-heading font-normal text-[170px] leading-[0.9] tracking-normal",
    "type-number-l": "font-heading font-normal text-[82px] leading-[1.1] tracking-normal",
    "type-h1": "font-heading font-normal lowercase text-[71px] leading-[0.95] tracking-[-0.03em]",
    "type-h2": "font-heading font-normal lowercase text-[56px] leading-[1.1] tracking-[-0.03em]",
    "type-statement":
      "font-heading font-normal lowercase text-[45px] leading-[1.2] tracking-normal",
    "type-h5": "font-heading font-normal lowercase text-[29px] leading-[1.1] tracking-normal",
    "type-body-xl": "font-sans font-normal text-[22px] leading-[1.4]",
    "type-body-l": "font-sans font-normal text-[18px] leading-[1.4]",
    "type-body-m": "font-sans font-normal text-[16px] leading-[1.4]",
    "type-body-s": "font-sans font-normal text-[14px] leading-[1.4]",
    "type-caption": "font-mono font-normal text-[12px] leading-[1.2] tracking-[0.04em] lowercase",
    "type-mono-m": "font-mono font-normal text-[15px] leading-[15px] tracking-normal",
    "type-code": "font-code font-normal text-[14px] leading-[24px]",
    "type-code-s": "font-code font-normal text-[12px] leading-[20px]",

    "e2e-caption": "type-caption text-e2e-neutral-400",
    "e2e-heading": "font-heading font-normal lowercase text-e2e-blank",
    "e2e-surface": "border border-e2e-neutral-700 bg-e2e-terminal",
  },
});
