---
label: get started
---

## your verification layer starts with just one command.

<div class="mt-[80px] grid grid-cols-3 gap-[40px]">
  <div v-for="step in [['01', 'set up', 'npx e2e init'], ['02', 'run', 'npx e2e run'], ['03', 'explore', 'npx e2e explore \'your goal\'']]" :key="step[0]" class="border-t border-e2e-neutral-700 pt-[20px]">
    <div class="step-index type-caption">[ {{ step[0] }} ]</div>
    <h3 class="!mt-[20px]">{{ step[1] }}</h3>
    <Command class="mt-[20px]">{{ step[2] }}</Command>
  </div>
</div>

<div class="mt-auto flex gap-[40px]">
  <a href="https://e2e.com/docs" class="e2e-link type-body-l">e2e.com/docs</a>
  <a href="https://github.com/e2e-inc/e2e" class="e2e-link type-body-l">github.com/e2e-inc/e2e</a>
  <a href="https://e2e.com/discord" class="e2e-link type-body-l">e2e.com/discord</a>
</div>

<!--
The call to action is the command itself. Say it out loud and leave this slide up while people type.
`npx e2e init` sets e2e up in an existing project. `npx e2e run` runs the suite. `npx e2e explore` with a goal in quotes sends an agent to test new work.
Docs, code and the Discord are all open. e2e.com/discord redirects to the invite.
-->
