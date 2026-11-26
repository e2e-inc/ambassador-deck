---
theme: e2e
title: e2e slide patterns
lang: en
event: Pattern gallery
date: every layout, once
presenter: Ada Lovelace
role: e2e ambassador · london
about: One sentence on what you build and where you use e2e.
contact: github.com/your-handle
photo: /me.svg
layout: cover
---

<Label>cover · <span class="normal-case">{{ $slidev.configs.event }}</span></Label>

<h1 class="cover-title">
  <span class="block">one headline on two lines,</span>
  <span class="block text-right">the second set to the right.</span>
</h1>

<style>
.cover-title { width: 1200px; }
</style>

<!--
COVER. `layout: cover` in the first slide's frontmatter. A label, one h1 on two lines, nothing else but an optional row of facts.
Every slide in this file is one pattern. To add a slide to your deck, copy the nearest pattern and change the words.
-->

---
label: headline and steps
---

## a headline says the one thing this slide is for.

<div class="mt-[40px] grid grid-cols-4 gap-[40px]">
  <Step index="01" title="first">One short sentence under each title.</Step>
  <Step index="02" title="second">Two to four steps fit on a row.</Step>
  <Step index="03" title="third">Titles are one or two words.</Step>
  <Step index="04" title="fourth">Body copy stays under three lines.</Step>
</div>

<!--
HEADLINE AND STEPS. The default layout: `label` in the frontmatter, an h2, then a grid. Use it for a list of two to four things.
-->

---
label: on pipeline
surface: pipeline
---

## the same slide on pipeline, for the one or two slides that matter most.

<div class="mt-[40px] grid grid-cols-3 gap-[40px]">
  <Step index="01" title="sparingly">Two or three Pipeline slides in a deck, never two in a row.</Step>
  <Step index="02" title="blank text">Text on Pipeline is always Blank.</Step>
  <Step index="03" title="no logo">The rail stays on Terminal, so the logo never sits on Pipeline.</Step>
</div>

<!--
PIPELINE SURFACE. Add `surface: pipeline` to the frontmatter of a default-layout slide.
-->

---
layout: statement
label: statement
---

<p class="type-statement !text-e2e-blank">One sentence, alone on the slide, when the sentence is the point.</p>

<!--
STATEMENT. `layout: statement`. One sentence at statement size, with the sign drawn as lines on the right. For a line that lights up on each click, use <Lit :at="0">, <Lit :at="1"> and set `clicks` in the frontmatter (see slides/en/coding-agents.md).
-->

---
layout: split
label: split with code
---

## a short headline beside the code.

::right::

<Terminal title="tests/checkout.e2e.ts">

```ts
test('a guest checks out', async ({ app, agent, screen }) => {
  await app.open('/cart');

  await agent.act('check out as a guest with the test card');
  await agent.assert('the order confirmation shows the total');

  await expect(screen.getByRole('status')).toContainText('paid');
});
```

</Terminal>

<!--
SPLIT WITH CODE. `layout: split`, the headline on the left, `::right::`, then a <Terminal> with a fenced code block. Keep the code under 20 lines. For two versions that morph on a click, use magic-move (see slides/en/intention.md).
-->

---
layout: split
label: split with terminal output
---

## what the command printed.

::right::

<Terminal title="npx e2e run">

<pre class="term"><span class="t-hi">RUN</span>  <span class="t-dim">e2e</span>

  <span class="t-ok">✓</span> a guest checks out  <span class="t-dim">4.1s · replayed</span>
  <span class="t-ok">✓</span> a member upgrades  <span class="t-dim">3.8s · replayed</span>
  <span class="t-bad">✕</span> a refund is issued  <span class="t-dim">line 42</span>

  <span class="t-dim">Tests</span>  2 passed <span class="t-dim">|</span> <span class="t-bad">1 failed</span></pre>

</Terminal>

<!--
TERMINAL OUTPUT. A <pre class="term"> inside a <Terminal>. Spans: t-ok for a pass mark, t-bad for a failure, t-dim for quiet text, t-hi for emphasis. Paste real output; never invent a run.
-->

---
label: number
surface: pipeline
---

<div class="mt-auto border-t border-e2e-neutral-700 pt-[20px]">
  <div class="type-number-xl text-e2e-blank">312K</div>
  <div class="e2e-caption mt-[20px]">what the number counts, and since when</div>
</div>

<div class="mt-[40px] grid grid-cols-3 gap-[40px]">
  <Stat value="60+" label="a second number" />
  <Stat value="2.1 s" label="a third number" />
  <Stat value="11.7K" label="a fourth number" />
</div>

<!--
NUMBER. One number at Number XL with a caption, then up to three <Stat>. No headline. Write counts as 312K, 11.7K, 60+ and units after a space: 2.1 s. Say in the notes where each number comes from.
-->

---
label: two panels
---

## two things side by side.

<div class="mt-[40px] grid grid-cols-2 gap-[20px]">
<Panel label="one" title="the first option">

```bash
npx e2e run
```

</Panel>
<Panel label="two" title="the second option">

```bash
npx e2e explore 'your goal'
```

</Panel>
</div>

<!--
TWO PANELS. Two <Panel> in a two-column grid. A panel holds a label, a title and a command, a short list or a sentence.
-->

---
label: commands
---

## commands are shown exactly as typed.

<div class="mt-[40px] flex flex-col gap-[20px]">
  <Command>npx e2e init</Command>
  <p class="type-body-l">In a sentence, a command looks like this: <code>npx e2e run</code>.</p>
</div>

<!--
COMMAND. <Command> for a command on its own line, backticks inside a sentence. Never rename a command to "install" or "get started".
-->

---
label: image
---

## a screenshot, with a caption that says what it shows.

<img src="/me.svg" alt="" class="mt-[20px] block h-[320px] w-fit border border-e2e-neutral-700" />

<div class="e2e-caption mt-[8px]">where the screenshot comes from</div>

<!--
IMAGE. Put the file in your deck's `public` folder and reference it from the root: src="/shot.png". A 1 px neutral/700 border, square corners, no shadow. Videos take the same classes: <video src="/run.mp4" autoplay muted loop playsinline>.
-->

---
label: list
---

## a short list.

- Three to five lines.
- Each line is one idea.
- A list marker is a short bar, never a dot.

<mark>One highlight per slide marks a fact.</mark>

<!--
LIST. A plain markdown list. <mark> puts one Signal block behind one fact; use it once per slide and never for praise.
-->

---
label: badges
---

## states are reported with a badge.

<div class="mt-[40px] flex gap-[20px]">
  <Badge>fixed</Badge>
  <Badge>cached</Badge>
  <Badge tone="fail">error detected</Badge>
</div>

<!--
BADGE. The only place capitals appear. Pass and Fail colours report a state and nothing else: never use them to decorate.
-->

---
label: speaker
---

<Speaker class="mt-[80px]" />

<!--
SPEAKER. <Speaker /> reads presenter, role, about, contact and photo from the headmatter. Pass props to show someone else: <Speaker name="..." role="..." photo="/them.jpg" />.
-->

---
layout: section
label: section
---

# a divider between two parts

<!--
SECTION. `layout: section`. One h1. Use it before a demo or between two halves of a long talk.
-->

---
layout: closing
label: thank you
---

# questions?

<div class="flex items-end gap-[80px]">
  <Person :name="$slidev.configs.presenter" :role="$slidev.configs.role" :contact="$slidev.configs.contact" :photo="$slidev.configs.photo" />
  <div class="flex flex-col gap-[8px]">
    <a href="https://e2e.com" class="e2e-link type-body-l">e2e.com</a>
    <a href="https://e2e.com/docs" class="e2e-link type-body-l">e2e.com/docs</a>
  </div>
</div>

<!--
CLOSING. `layout: closing`. It mirrors the cover. A <Person> card and links with class="e2e-link", which stay clickable in a PDF.
-->
