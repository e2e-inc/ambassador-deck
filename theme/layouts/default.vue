<script setup lang="ts">
defineProps<{ label?: string; surface?: "terminal" | "pipeline" }>();
</script>

<!--
  80 px rail, 40 px to the content; label, 8 px, headline, then the slot (slides 30, 36).
  `surface: pipeline` fills everything below the rail with Pipeline; the rail stays on
  Terminal because the logo never sits on Pipeline (hard rule 3).
-->
<template>
  <div
    class="slidev-layout default !pt-[120px]"
    :class="surface === 'pipeline' ? 'on-pipeline' : ''"
  >
    <div
      v-if="surface === 'pipeline'"
      class="absolute inset-x-0 bottom-0 top-[80px] bg-e2e-pipeline"
    />
    <SlideChrome />
    <div class="relative z-10 flex h-full flex-col">
      <Label v-if="label" class="mb-[8px]">{{ label }}</Label>
      <div class="flex flex-1 flex-col gap-[20px]">
        <slot />
      </div>
    </div>
  </div>
</template>
