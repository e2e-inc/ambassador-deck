---
layout: split
label: adopt gradually
---

## Start where tests break the most.

::right::

<Terminal title="MIGRATION.md">

<table class="md-table">
  <thead><tr><th>Playwright</th><th>e2e</th><th>Status</th><th>Assertions</th></tr></thead>
  <tbody>
    <tr><td>billing.spec.ts</td><td>billing.e2e.ts</td><td class="s-ported">ported</td><td>5 → 5</td></tr>
    <tr><td>checkout.spec.ts</td><td>checkout.e2e.ts</td><td class="s-ported">ported</td><td>8 → 8</td></tr>
    <tr><td>onboarding.spec.ts</td><td>onboarding.e2e.ts</td><td class="s-ported">ported</td><td>4 → 4</td></tr>
    <tr><td>settings.spec.ts</td><td></td><td class="s-todo">todo</td><td>6 →</td></tr>
    <tr><td>admin.spec.ts</td><td></td><td>stays</td><td>3 →</td></tr>
  </tbody>
</table>

<pre class="term mt-[20px]"><span class="t-dim">Next</span>  settings.spec.ts, needs signInAdmin()</pre>

</Terminal>

<!--
You do not rewrite a suite in one go. In Claude Code or Codex, /migrate-to-e2e moves one slice per session while both suites stay green.
MIGRATION.md keeps the state: what moved, assertion counts checked against the source, and what is next. Any later session picks up from it.
The team decides when an old test goes. Stable Playwright tests can stay.
There are guides for Playwright, Cypress, Selenium, Detox and Maestro in the docs.
-->
