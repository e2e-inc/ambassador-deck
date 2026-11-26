# e2e ambassador deck

The main e2e talk, as a deck you can make your own: add your name and your project,
translate it, add slides, and it still looks like e2e.

It is written in [Slidev](https://sli.dev) markdown on the e2e design system, and it is
built to be edited with a coding agent. Open the folder in Claude Code, Cursor, Codex or
any other agent and ask for what you need. [AGENTS.md](AGENTS.md) tells the agent the rules.

## Start

You need Node 22 or newer and [pnpm](https://pnpm.io/installation).

```bash
git clone https://github.com/e2e-inc/ambassador-deck
cd ambassador-deck
pnpm install
pnpm new ada-prague-2026-12-10     # your deck: decks/ada-prague-2026-12-10/slides.md
pnpm dev ada-prague-2026-12-10     # http://localhost:3030
```

Then tell your agent something like:

> Set up my deck in decks/ada-prague-2026-12-10. I am Ada Lovelace, I speak at the Prague
> Cursor Meetup on 10 Dec 2026, my GitHub is github.com/ada. Replace the "my project"
> slide with the checkout test from ~/code/shop/tests/checkout.e2e.ts.

## What you can ask for

| You want | Ask your agent |
| --- | --- |
| Your name, photo, event and date on the deck | "fill in my details" |
| A shorter talk | "cut this to a five-minute version" |
| Your own slide | "add a slide after the demo that shows this screenshot" |
| Another language | "translate my deck to Japanese" |
| A PDF to share | "export my deck" |

## Commands

```bash
pnpm dev <deck>       # edit and present; /presenter shows your speaker notes
pnpm check <deck>     # are all slides on the design system, and does anything overflow
pnpm shots <deck>     # one PNG per slide, in shots/<deck>/
pnpm export <deck>    # a PDF, in dist/
pnpm build <deck>     # a static site you can host, in dist/<deck>/
pnpm dev patterns     # every slide pattern you can copy
```

`pnpm install` also downloads the headless browser that `check`, `shots` and `export` use.

## What is in here

```
decks/main/         the main deck
decks/<yours>/      your deck
slides/en/          the main deck's slides, one per file
slides/<lang>/      translations
patterns/           one example of every slide pattern
theme/              the e2e look: layouts, components, styles
brand.md            the brand rules behind the theme
```

Work in your own deck folder. The theme and the shared slides stay as they are, so you can
pull updates from this repository without conflicts: new numbers, new slides, fixes.

## The typeface

e2e's typeface is Cassette. e2e holds the licence, so the font files are not in this
repository. Without them the deck uses Geist, which works for editing and presenting.

e2e ambassadors get Cassette from the ambassador guide. Put the two files in
`theme/assets/fonts/`; git ignores that folder. Please do not commit the files or pass
them on.

## Translations

`slides/<lang>/` holds translated slides, and everyone who speaks that language shares
them. If you translate the deck, send a pull request. See [slides/README.md](slides/README.md).

## Give a talk about e2e

- Docs: [e2e.com/docs](https://e2e.com/docs)
- Code: [github.com/e2e-inc/e2e](https://github.com/e2e-inc/e2e)
- Community: [e2e.com/discord](https://e2e.com/discord)
- Ambassador programme: [e2e.com/ambassadors](https://e2e.com/ambassadors)
