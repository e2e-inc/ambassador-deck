<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    index: string;
    calls: number | string;
    steps?: string;
    total?: number;
    note: string;
  }>(),
  { total: 15 },
);
</script>

<!--
  One run of a replay cache slide, in one of two modes.
  `steps` (for example "rrrarr"), with the 64 px count it always had: one square per recorded step, Pass when it
  replayed, an outline when the agent worked it out live.
  No `steps`: one square per model call of the first run (`total`), Signal when
  this run makes the call, an outline when the cache saved it, so fewer blue
  squares means fewer calls.
-->
<template>
  <div class="border-t border-e2e-neutral-700 pt-[20px]">
    <div class="type-caption text-e2e-pass">[ {{ index }} ]</div>
    <div class="mt-[20px] flex items-baseline gap-[8px]">
      <span
        class="text-e2e-blank"
        :class="props.steps ? 'font-heading text-[64px] leading-none' : 'type-number-l'"
        >{{ calls }}</span
      >
      <span class="e2e-caption">{{ Number(calls) === 1 ? "model call" : "model calls" }}</span>
    </div>
    <div v-if="props.steps" class="mt-[20px] flex gap-[8px]">
      <span
        v-for="(step, i) in props.steps.split('')"
        :key="i"
        class="size-[36px] border"
        :class="step === 'r' ? 'border-e2e-pass bg-e2e-pass' : 'border-e2e-neutral-500'"
      />
    </div>
    <div v-else class="mt-[20px] flex gap-[4px]">
      <span
        v-for="n in props.total"
        :key="n"
        class="size-[20px] border"
        :class="n <= Number(calls) ? 'border-e2e-signal bg-e2e-signal' : 'border-e2e-neutral-700'"
      />
    </div>
    <div class="e2e-caption mt-[20px]">{{ note }}</div>
  </div>
</template>
