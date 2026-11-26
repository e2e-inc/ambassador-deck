---
label: trust
---

## how you know a passing test is real.

<div class="mt-[40px] grid grid-cols-3 gap-x-[40px] gap-y-[40px]">
  <Step compact index="01" title="exact checks">Values that must be right are checked in code, with no model involved.</Step>
  <Step compact index="02" title="separate verdicts">Each plain-language check is judged on its own, from the current screen, never the earlier steps.</Step>
  <Step compact index="03" title="no guessing">Thin evidence fails the check. With strict replay in CI, a stale step fails the build.</Step>
  <Step compact index="04" title="screenshots">Failures keep a screenshot when the engine can take one, and visual checks save the screen they judged.</Step>
  <Step compact index="05" title="video">Turn on video to replay every step the agent took, on every run or only on failures.</Step>
  <Step compact index="06" title="run reports">A report for every run with its model calls, cost when the provider reports it, and a trace for every failure.</Step>
</div>

<!--
The question every room asks: "how do I know the agent did not just make the test green?"
- exact checks: locator checks (screen, expect) make no model call.
- separate verdicts: a judgment reads the instruction and the current screen, never the earlier steps or the acting agent's account. Set `judge` to use a second model for verdicts.
- no guessing: thin evidence fails the check. With --strict-cache in CI, a recorded step that no longer matches fails the build without calling the model.
- screenshots: a failure keeps a screenshot whenever the engine can take one.
- video: off by default. Turn it on for every run or only for failures, and use test accounts because a video masks nothing.
- run reports: a report for every run, with model calls and tokens per step, and cost when the provider reports it.
-->
