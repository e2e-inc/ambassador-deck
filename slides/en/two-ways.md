---
label: two ways to test
---

## One framework. Two jobs.

<div class="mt-[40px] grid grid-cols-2 gap-[20px]">
<Panel label="Regression" title="Deterministic suites">

```bash
npx e2e run
```

</Panel>
<Panel label="Exploration" title="Agents that test new work">

```bash
npx e2e explore 'try to break checkout'
```

</Panel>
</div>

<!--
Left: the suite you keep. Tests written as intentions, replayed from cache, run in CI on every pull request.
Right: testing new work before a test exists. You give an agent a goal in one sentence and it reports what it found.
The next slides show both.
-->
