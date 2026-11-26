<script setup lang="ts">
defineProps<{ title?: string; tabs?: string[]; active?: number }>();
</script>

<!-- Terminal frame (brand hub terminal output): Terminal ground, 1 px neutral/700 line, 28 px tab row. -->
<template>
  <div class="relative flex flex-col border border-e2e-neutral-700 bg-e2e-terminal text-left">
    <div class="flex h-[28px] shrink-0 items-stretch border-b border-e2e-neutral-700">
      <div v-if="tabs" class="flex items-stretch">
        <span
          v-for="(tab, index) in tabs"
          :key="tab"
          class="flex items-center px-[20px] type-code-s"
          :class="
            index === (active ?? 0) ? 'bg-e2e-neutral-700 text-e2e-blank' : 'text-e2e-neutral-500'
          "
          >{{ tab }}</span
        >
      </div>
      <span
        v-else
        class="flex items-center bg-e2e-neutral-700 px-[20px] type-code-s text-e2e-blank"
        >{{ title }}</span
      >
    </div>
    <div class="terminal-body p-[20px]">
      <slot />
    </div>
  </div>
</template>
