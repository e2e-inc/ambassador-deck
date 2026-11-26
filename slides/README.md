# Shared slides

`en/` is the main deck, one slide per file. e2e owns these files: numbers, wording and
speaker notes are kept current here, and every deck that imports a slide gets the update.

Every other folder is a translation, named by language code: `ja/`, `ko/`, `pl/`, `pt-br/`.

## Translating a slide

```bash
cp slides/en/problem.md slides/ja/problem.md
# translate headlines, body copy, labels and speaker notes
pnpm check --stamp slides/ja/problem.md
```

The stamp is a `source:` line in the slide's frontmatter. It records which version of the
English slide the translation was made from. When e2e changes the English slide later,
`pnpm check` says which translations are out of date.

Keep `e2e`, commands, code, file names, URLs, product names and numbers as they are.
[AGENTS.md](../AGENTS.md) has the full list.

Add a `glossary.md` to the language folder with the wording you chose for e2e's terms
(verification layer, replay cache, agent step). The next translator starts from it.

Translations are welcome as pull requests. A second speaker of your language then starts
from a deck that is already translated.
