<script setup lang="ts">
defineProps<{
  label: string;
  title?: string;
  term?: string;
  logo?: boolean;
  surface?: "pipeline";
  items: string[];
}>();
</script>

<!--
  `logo` shows the e2e logotype at its 96 px step instead of typing "e2e" (hard rule 1).
  `surface: pipeline` sets the card on Pipeline with Blank text, to call out one offer.
-->
<template>
  <div
    class="flex flex-col p-[20px]"
    :class="surface === 'pipeline' ? 'on-pipeline bg-e2e-pipeline' : 'e2e-surface'"
  >
    <Label>{{ label }}</Label>
    <div class="mt-[20px] flex h-[54px] items-center gap-[8px]">
      <img
        v-if="logo"
        src="../assets/e2e-logotype-blank.svg"
        alt="e2e"
        class="block w-[96px] h-auto"
      />
      <span v-else class="type-statement text-e2e-blank">{{ title }}</span>
      <span v-if="term" class="e2e-caption">{{ term }}</span>
    </div>
    <ul class="!mt-[20px]">
      <li v-for="item in items" :key="item" class="type-body-m">{{ item }}</li>
    </ul>
  </div>
</template>
