# e2e brand rules for slides

The short version of e2e's brand guidelines, for anyone who writes a slide: a person or a
coding agent. The theme in `theme/` already applies them. These rules are for what you add.

## the governing rule

**One bar is the module.** The logo, the sign and the line fields are all drawn from one
horizontal bar, and every edge sits on its row grid. Test anything new against it:
horizontal bars on a grid belong. Diagonals, dots, curves, grain and gradients do not.

## the hard rules

The logo

1. The logo is a fixed drawing. Never typeset, rebuild, stretch, rotate, outline or recolour it.
2. The layouts place the logo in the top rail. Do not add it to a slide yourself.
3. The logo never sits on Pipeline, Pass or Fail.
4. A sub-brand or a community never gets a logo of its own: e2e plus one lowercase word.

Colour and type

5. Pass and Fail only report states. There is no warning colour, and neither one decorates.
6. Set text only in the listed pairs (below).
7. One weight: Regular 400. Never bold, never italic.
8. Headlines are lowercase, even e2e. No Title Case, no exclamation marks, no ellipsis.

Graphic elements and layout

9. Line fields are horizontal lines only: no diagonals, dots, noise or gradients.
10. Spacing comes from the scale only: 4 · 8 · 20 · 40 · 80 · 120 · 320 px.
11. One highlight per slide, and it marks a fact, never praise.
12. Square corners. No shadows, no blur.

Character

13. No mascot and no cartoon look.
14. No stock photos and no decoration for its own sake.
15. No overpromising: say what e2e does, with a number or a command.
16. No swipes at other tools or at the people who test.

## colour

Six colours, by name. Use the names in conversation and the classes in markup.

| name | value | class | use |
| --- | --- | --- | --- |
| Terminal | `#000000` | `bg-e2e-terminal` | the ground of every slide |
| Blank | `#f7f7f7` | `text-e2e-blank` | headlines and emphasised text |
| Signal | `#1a5fff` | `bg-e2e-signal` | one highlight, key visuals |
| Pipeline | `#0032a8` | `bg-e2e-pipeline` | a full surface, two or three slides per deck |
| Pass | `#64ff9d` | `text-e2e-pass` | labels, and the passed state |
| Fail | `#d00045` | `bg-e2e-fail` | the failed state only |

Greys for hierarchy: `e2e-neutral-400` body copy, `e2e-neutral-500` quiet text,
`e2e-neutral-700` lines and borders, `e2e-neutral-800` raised surfaces.

Allowed text pairs: Blank, neutral/400 or neutral/500 on Terminal. Pass on Terminal for
labels. Blank on Signal, Pipeline or Fail. Terminal on Pass. Pipeline is never a text colour.

## type

One typeface, Cassette, in one weight. Cassette Mono for labels, commands and code. Without
the Cassette files the deck falls back to Geist and Geist Mono. Japanese and Korean text is
set in Noto Sans, because Cassette has no glyphs for them; Latin letters, numbers and code
stay in Cassette.

Twelve text styles and nothing in between. Use the class, never a font size of your own.

| class | size | for |
| --- | --- | --- |
| `type-number-xl` | 170 | the one number of a slide |
| `type-number-l` | 82 | secondary numbers |
| `type-h1` | 71 | cover and section headlines |
| `type-h2` | 56 | slide headlines |
| `type-statement` | 45 | a sentence alone, or a headline beside code |
| `type-h5` | 29 | card titles |
| `type-body-xl` `-l` `-m` `-s` | 22 · 18 · 16 · 14 | body copy |
| `type-caption` | 12 mono | labels and captions |
| `type-mono-m` | 15 mono | commands |
| `type-code` `type-code-s` | 14 · 12 mono | code |

A markdown `#`, `##` and `###` already take the h1, h2 and h5 styles.

## the order of a slide

Label, headline, body. In that order, every time.

- **Label**: mono, lowercase, in brackets. Set it with `label:` in the frontmatter:
  `[ replay cache ]`. A middle dot separates two parts: `[ open source · built for agents ]`.
- **Headline**: lowercase, short, with a full stop. One idea.
- **Body**: under 60 characters a line. Three lines at most under a card title.

One slide says one thing. If it needs a second headline, it is two slides.

## voice

e2e writes the way its command line reads: short, exact, lowercase.

**Developer tool first, AI advantage second.** Lead with the command, the code and what the
developer controls. AI is the advantage, never the headline.

| write | not |
| --- | --- |
| e2e, lowercase, headlines included | E2E, E2e |
| end-to-end testing, for the category | "e2e tests" for the generic kind |
| verification layer | AI testing tool, agentic QA platform |
| agentic + deterministic | AI-powered, self-healing tests, magic |
| verified steps are cached and replay without calling the model | autonomous testing, "testing happens by itself" |
| works with your coding agent | AI-powered |
| the command: `$ npx e2e init` | install button, "get started" |
| `14K`, `5.5M`, `60+`, `2.1 s` | "over 14,000", "almost 6 million" |

- Precise, not rigid: exact words and real numbers, still said by a person.
- Minimal, not empty: short sentences, enough said to act on.
- Technical, not stiff: written for people who read code.
- Confident without shouting: no "!", no superlatives.
- e2e never sounds like it replaces anyone. Testers and QA teams are part of the audience.

Capitals appear in one place only: a `<Badge>` that reports a state, such as `FIXED`,
`CACHED` or `ERROR DETECTED`. Names of people, products and companies keep their own spelling.

## what the check enforces

`pnpm check` reads every slide for: spacing off the scale, colours outside the tokens, any
weight but 400, capitals, rounded corners, shadows, gradients, rotation, em and en dashes,
exclamation marks in headlines, components the theme does not have, a logo added by hand,
and missing files. With a deck name it also opens the deck in a browser and reports text
that leaves the slide.

It cannot check tone, crowding or whether a claim is true. Those stay with you.
