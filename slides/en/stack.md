---
label: works with your stack
---

## works with the stack you already run.

<div class="mt-[20px] flex flex-col gap-[8px]">
  <div class="e2e-surface flex items-center gap-[20px] px-[20px] py-[8px]">
    <span class="type-caption w-[160px] shrink-0 text-e2e-neutral-400">your tests</span>
    <span class="type-body-l text-e2e-blank">TypeScript: agent steps, locators, exact assertions, your test data helpers</span>
  </div>
  <div class="flex items-center gap-[20px] bg-e2e-pipeline px-[20px] py-[8px]">
    <span class="type-caption w-[160px] shrink-0 text-e2e-blank">e2e</span>
    <span class="type-body-l text-e2e-blank">runner · agents · replay cache · secrets · reports</span>
  </div>
  <div class="grid grid-cols-4 gap-[8px]">
    <div v-for="engine in [['web', 'Chromium, Firefox, WebKit'], ['ios', 'simulators'], ['android', 'emulators and devices'], ['your engine', 'desktop, TV or any other platform']]" :key="engine[0]" class="e2e-surface p-[20px]">
      <h3>{{ engine[0] }}</h3>
      <div class="type-body-s mt-[8px] text-e2e-neutral-400">{{ engine[1] }}</div>
    </div>
  </div>
</div>

<div class="mt-[20px] grid grid-cols-4 gap-[8px]">
  <Feature index="01" title="any model">OpenAI, Anthropic, Gemini, Azure OpenAI, Amazon Bedrock or a self-hosted model, with your own keys.</Feature>
  <Feature index="02" title="any ci">GitHub Actions, GitLab, Jenkins, Azure Pipelines, Bitbucket, CircleCI.</Feature>
  <Feature index="03" title="any agent">Claude Code, Codex and Cursor, plus Copilot, Gemini CLI, OpenCode and Zed.</Feature>
  <Feature index="04" title="your machines">Runs on your laptop and in your CI, next to the code. Apache-2.0.</Feature>
</div>

<!--
Three layers: your tests in TypeScript, the e2e core, and one engine per platform.
The web engine runs on Playwright (Chromium, Firefox, WebKit). The mobile engine covers iOS simulators, Android emulators and plugged-in phones.
Desktop, TV or anything else needs a custom engine, which you write against the public engine API. There is no official desktop engine.
Any model through your own keys, any CI that runs Node, and a skill folder that Claude Code, Codex, Cursor, Copilot, Gemini CLI, OpenCode and Zed all read.
The full list is in the docs: e2e.com/docs.
-->
