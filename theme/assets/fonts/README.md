# Cassette goes here

e2e's typeface is Cassette, by Displaay. e2e holds the licence, so the font files are not
in this repository and must never be committed to it or passed on.

If you are an e2e ambassador, download the font from the ambassador guide and put these
two files in this folder:

```
Cassette-Regular.woff2
CassetteMono-Regular.woff2
```

Git ignores them. Restart `pnpm dev` and the deck renders in Cassette. `pnpm check` tells
you which face a deck rendered in.

Without the files the deck uses Geist and Geist Mono, the brand's fallback faces. It still
builds, presents and exports.
