# e2e ambassador deck: instructions for coding agents

This repository holds e2e's main talk deck and the decks ambassadors make from it. The decks
are Slidev markdown on the e2e design system. Your job is to help one person make their own
deck: fill in their details, translate it, add their slides. The result must still look and
read like e2e.

Read [brand.md](brand.md) before you write or change a slide. It holds the rules the checks
below enforce, and the reasons for them.

```
theme/                  the e2e look: layouts, components, styles. Never edit.
slides/en/<topic>.md    the main deck, one slide per file. Never edit.
slides/<lang>/          translations of those slides. Edit only your language.
patterns/slides.md      one example of every slide pattern. Copy from here.
decks/main/slides.md    the main deck: a list of slide imports. Never edit.
decks/<name>/           one person's deck. This is where you work.
media/                  images and videos used by the shared slides.
```

## The four jobs

### 1. Start a deck

```bash
pnpm install
pnpm new <name>            # for example ada-prague-2026-12-10
pnpm dev <name>            # http://localhost:3030
```

Then set the headmatter at the top of `decks/<name>/slides.md`:

| Field | What it is | Example |
| --- | --- | --- |
| `event` | the meetup, conference or workshop | `Prague Cursor Meetup` |
| `date` | as it should read on the cover | `10 dec 2026` |
| `presenter` | the speaker's name, with its own capitals | `Ada Lovelace` |
| `role` | one mono line under the name | `e2e ambassador · prague` |
| `about` | one sentence on what they build | |
| `contact` | an email or a URL without `https://` | `github.com/ada` |
| `photo` | a square image in `decks/<name>/public` | `/me.jpg` |
| `lang` | the deck's language code | `en`, `ja`, `ko`, `pl` |

Ask the person for these. Do not invent an event, a date or a contact.

### 2. Change which slides are shown

A slide whose frontmatter is `src: ../../slides/en/<topic>.md` shows that shared slide.
Remove the block to drop the slide, move it to reorder, add a block to bring in another.
`slides/en` also holds slides the main deck does not show: `trust.md`, `how-you-ship.md`
and `what-e2e-is.md`.

For a five-minute talk keep the cover, `intention`, `replay-cache`, `live-demo`,
`get-started` and the closing slide.

### 3. Add a slide

1. Find the nearest pattern in `patterns/slides.md` (`pnpm dev patterns` shows them).
2. Copy that slide into `decks/<name>/slides.md`, between two `---` lines, and change the
   words. Keep its layout and components.
3. Put images in `decks/<name>/public` and reference them from the root: `src="/shot.png"`.

Use only the layouts, the components in `theme/components`, the `type-*` text styles and the
`e2e-*` colours. If no pattern fits what the person wants, say so and offer the closest one.
Do not write a new layout, a new component or a `<style>` block with your own values.

The "my project" slide in every new deck is a placeholder. Replace it with the person's own
test, from their own project. Never present invented code or invented results as real.

### 4. Translate

1. `pnpm new <name> --lang <code>` points the deck at `slides/<code>/` wherever a translated
   slide exists, and at English where none does yet.
2. To translate a slide, copy `slides/en/<topic>.md` to `slides/<code>/<topic>.md`, translate
   it, then run `pnpm check --stamp slides/<code>/<topic>.md`. The stamp records which
   English version the translation was made from.
3. Change the deck's `src:` line to the translated file.

What to translate: headlines, body copy, labels and speaker notes.

What stays exactly as it is:

- `e2e`, always lowercase.
- Commands, code, file names, terminal output and URLs.
- Names of products, companies and people.
- Numbers and their format: `14K`, `5.5M`, `2.1 s`.
- Markup: tags, classes, frontmatter keys, `src:` paths.

Keep the meaning and the length. A translation that runs longer than the English will leave
the slide: shorten the wording, never shrink the type. Reuse one translation for each term
across the deck, and write it into `slides/<code>/glossary.md` so the next translator uses
the same word.

Japanese and Korean: set `lang: ja` or `lang: ko` in the headmatter. The theme then switches
the fallback typeface and the line breaking. Nothing else is needed.

## Check your work, every time

```bash
pnpm check <name>     # the rules, then a render pass: overflow, missing images, typeface
pnpm shots <name>     # one PNG per slide in shots/<name>/
```

A deck is not done until `pnpm check <name>` reports nothing to fix and you have looked at
the PNG of every slide you changed. The check cannot see taste: look for crowded slides, a
headline that breaks badly and a slide that says two things.

If the check fails, fix the slide. Do not edit `scripts/check.mjs`, `theme/` or `brand.md`
to make it pass.

`pnpm install` downloads the headless browser these commands use. If one of them reports a
missing browser, run `pnpm exec playwright install chromium`.

## Hard limits

- Never edit `theme/`, `slides/en/`, `decks/main/`, `patterns/`, `scripts/` or `brand.md`
  in a personal deck. If something there is wrong, tell the person and suggest an issue or a
  pull request to e2e.
- Never commit font files. Cassette is licensed by e2e; `theme/assets/fonts` is ignored by
  git for that reason. Do not move the files, rename them or add them with `git add -f`.
- Never add the e2e logo to a slide, and never redraw, recolour or resize it. The layouts
  place it in the top rail.
- No em or en dashes anywhere: slides, notes, commit messages.
- Talking points go in speaker notes (`<!-- -->` at the end of a slide), not on the slide.
- Do not state numbers, customers, prices or roadmap dates that are not in the shared slides
  or on e2e.com. Open source users are not customers.
- Never set `stroke`, `fill`, `width` or similar as plain attributes on an element: UnoCSS
  reads them as utility classes. Use `style` or a class.

## Presenting and sharing

```bash
pnpm dev <name>       # present from the browser; /presenter shows your notes
pnpm export <name>    # dist/<name>.pdf
pnpm build <name>     # dist/<name>, a static site you can host
```

A PDF shows only the last step of a slide that animates on click. For a handout, swap
`intention.md` for `what-e2e-is.md`.

Edit this `AGENTS.md`; `CLAUDE.md` is a symlink to it.
