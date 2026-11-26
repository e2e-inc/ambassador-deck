---
layout: cover
---

<Label><span class="normal-case">{{ $slidev.configs.event }}</span> · {{ $slidev.configs.date }}</Label>

<h1 class="cover-title">
  <span class="block">the software verification layer</span>
  <span class="block text-right">for the agentic coding era.</span>
</h1>

<div class="mt-[20px] flex gap-[40px]">
  <div v-for="stat in [['14K', 'github stars'], ['5.5M', 'npm downloads']]" :key="stat[1]">
    <div class="type-statement !normal-case text-e2e-blank">{{ stat[0] }}</div>
    <div class="e2e-caption mt-[8px]">{{ stat[1] }}</div>
  </div>
  <div>
    <div class="type-statement text-e2e-blank">open source</div>
    <a href="https://e2e.com/docs" class="e2e-link type-caption mt-[8px] block w-fit">e2e.com/docs</a>
  </div>
</div>

<style>
.cover-title { width: 1200px; }
</style>

<!--
Set event, date, presenter, role, contact and photo in your deck's headmatter. They fill this cover, the speaker slide and the closing slide.
The headline is e2e's own line from e2e.com, on two lines. Keep it as written in English; in a translated deck, translate it once and reuse that wording everywhere.
Numbers, from e2e.com on 26 Nov 2026: 14K GitHub stars (github.com/e2e-inc/e2e) and 5.5M npm downloads since the first release (npmjs.com/package/e2e). Check both before your talk and update them here if they moved.
-->
