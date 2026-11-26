---
label: replay cache
clicks: 2
---

## the agent works a step out once.

<div class="mt-[40px] grid grid-cols-3 gap-[40px]">
  <CacheRun index="first run" :calls="15" note="the agent fills a card payment form and pays, then the steps are recorded" />
  <CacheRun v-click="1" index="every run after" :calls="1" note="the recorded actions replay, only the final check calls the model" />
  <CacheRun v-click="2" index="after a text change" :calls="2" note="the actions replay, the agent confirms the new screen once, and the step is recorded again" />
</div>

<div class="mt-[40px] flex gap-[40px] e2e-caption">
  <span class="flex items-center gap-[8px]"><span class="size-[12px] bg-e2e-signal" />one model call</span>
  <span class="flex items-center gap-[8px]"><span class="size-[12px] border border-e2e-neutral-700" />a call the replay cache saved</span>
</div>

<p class="type-body-s mt-[20px]">In CI, steps replay when the recordings are committed with the tests. CI does not record new ones by default.</p>

<!--
Two clicks, one column each. Each square is one model call, out of the 15 the first run makes.
Real runs of the card payment test on the next slides, from e2e's public iframes example (github.com/e2e-inc/e2e-iframes), measured in November 2026:
- First run: 15 model calls, 55 s. The agent works out the form and pays.
- Every run after: 1 model call, 17 s. The actions replay; the one call is the final plain-language check, which is judged on every run.
- After rewording the confirmation text: 2 model calls. The actions replay, the agent confirms the new screen once and the step is recorded again.
Recordings are plain JSON in .e2e/cache. Commit them with the tests if you want CI to replay. With --strict-cache a step that no longer matches fails the build instead of going back to the agent.
Do not say "no tokens after the first run": plain-language checks call the model on every run.
-->
