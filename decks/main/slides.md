---
theme: e2e
title: e2e
lang: en
event: Your Meetup
city: your city
date: month 2026
presenter: Your Name
role: e2e ambassador · your city
about: One sentence on what you build and where you use e2e.
contact: github.com/your-handle
photo: /me.svg
src: ../../slides/en/cover.md
---

---
src: ../../slides/en/speaker.md
---

---
src: ../../slides/en/problem.md
---

---
src: ../../slides/en/intention.md
---

---
src: ../../slides/en/coding-agents.md
---

---
src: ../../slides/en/replay-cache.md
---

---
src: ../../slides/en/two-ways.md
---

---
src: ../../slides/en/live-demo.md
---

---
src: ../../slides/en/explore.md
---

---
src: ../../slides/en/bug-bash.md
---

---
src: ../../slides/en/real-test.md
---

---
src: ../../slides/en/software-factory.md
---

---
src: ../../slides/en/pr-proof.md
---

---
src: ../../slides/en/agents.md
---

---
src: ../../slides/en/stack.md
---

---
src: ../../slides/en/adopt-gradually.md
---

---
layout: split
label: my project
---

## how i use e2e.

<p class="type-body-l">Replace this with your project: what it is, which flow you test, and what the test caught.</p>

::right::

<Terminal title="tests/your-flow.e2e.ts">

```ts
test('describe your flow in one line', async ({ app, agent, screen }) => {
  await app.open('/');

  await agent.act('what a user does, in plain language');
  await agent.assert('what must be true on the screen afterwards');

  await expect(screen.getByRole('status')).toContainText('done');
});
```

</Terminal>

<!--
This slide is yours, and it is the one the room remembers. Show a real test from your project and say what it caught or what it saved you.
Copy a layout from patterns/slides.md if you want a screenshot, a number or a second slide. Keep your own slides in this file; the shared slides in slides/ stay as they are.
-->

---
src: ../../slides/en/numbers.md
---

---
src: ../../slides/en/get-started.md
---

---
src: ../../slides/en/closing.md
---
