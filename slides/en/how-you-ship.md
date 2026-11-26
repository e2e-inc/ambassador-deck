---
label: how you ship
---

## e2e at every stage, from code to production.

<div class="mt-[40px] grid grid-cols-5 gap-[8px]">
  <template v-for="(s, i) in [
    ['develop', 'Your coding agent runs the tests as it builds and fixes failures.'],
    ['pull request', 'CI runs the suite on every pull request, with results and evidence.'],
    ['merge', 'e2e is a required check, so a failing test blocks the merge.'],
    ['staging', 'The full suite runs on each release, and agents explore new work.'],
    ['production', 'A scheduled CI job runs key journeys with a test account.'],
  ]" :key="s[0]">
    <div class="flex flex-col">
      <div class="flex items-center justify-between border border-e2e-neutral-700 p-[20px]">
        <h3>{{ s[0] }}</h3>
        <span v-if="i < 4" class="type-code-s text-e2e-neutral-500">→</span>
      </div>
      <div class="mx-auto h-[20px] w-px bg-e2e-pipeline" />
      <div class="flex flex-1 flex-col bg-e2e-pipeline p-[20px]">
        <div class="type-caption text-e2e-blank">[ e2e ]</div>
        <p class="type-body-m !mt-[8px] !text-e2e-blank">{{ s[1] }}</p>
      </div>
    </div>
  </template>
</div>

<p class="type-body-s mt-[40px] whitespace-nowrap">Runs in GitHub Actions, GitLab, Jenkins, Azure Pipelines, Bitbucket or any CI with Node. Reports as JUnit, JSON and markdown.</p>

<!--
Five places e2e runs, from the first line of code to production.
Develop and pull request are where most teams start: the coding agent runs the tests while it builds, and CI runs the suite on every pull request.
Making e2e a required check, running it on staging and on a schedule in production are steps a team adds when it trusts the suite.
It runs in any CI with Node. Reports come as JUnit, JSON and markdown.
-->
