import { defineShikiSetup } from "@slidev/types";

/**
 * The brand code theme (brand hub, code blocks): almost monochrome on Terminal.
 * One blue for keywords, a lighter blue for names, strings and punctuation in grey,
 * comments quietest. Pass and Fail never colour code; no italics or bold.
 */
const e2eDark = {
  name: "e2e-dark",
  type: "dark",
  colors: {
    "editor.background": "#000000",
    "editor.foreground": "#F7F7F7",
  },
  tokenColors: [
    { settings: { foreground: "#F7F7F7" } },
    {
      scope: ["variable", "variable.other", "meta.definition.variable"],
      settings: { foreground: "#F7F7F7", fontStyle: "" },
    },
    {
      scope: [
        "keyword",
        "storage",
        "storage.type",
        "storage.modifier",
        "keyword.control",
        "constant",
        "constant.numeric",
        "constant.language",
        "entity.name.tag",
      ],
      settings: { foreground: "#88B0FF", fontStyle: "" },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "meta.function-call",
        "entity.name.type",
        "support.type",
        "support.class",
        "entity.name.class",
        "entity.other.attribute-name",
        "variable.other.property",
        "variable.other.object.property",
        "meta.object-literal.key",
        "support.variable.property",
      ],
      settings: { foreground: "#ACC8FF", fontStyle: "" },
    },
    {
      scope: [
        "string",
        "string.quoted",
        "string.template",
        "punctuation",
        "meta.brace",
        "keyword.operator",
        "storage.type.function.arrow",
      ],
      settings: { foreground: "#B1B1B1", fontStyle: "" },
    },
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: "#8D8D8D", fontStyle: "" },
    },
  ],
};

export default defineShikiSetup(() => ({
  themes: {
    dark: e2eDark,
    light: e2eDark,
  },
}));
