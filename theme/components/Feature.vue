<script setup lang="ts">
defineProps<{ index: string; title: string }>();
</script>

<template>
  <div class="border-l border-e2e-neutral-700 pl-[20px]">
    <div class="step-index type-caption">[ {{ index }} ]</div>
    <h3 class="!mt-[20px]">{{ title }}</h3>
    <p v-if="$slots.default" class="type-body-s !mt-[8px]">
      <slot />
    </p>
  </div>
</template>
