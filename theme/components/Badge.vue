<script setup lang="ts">
withDefaults(defineProps<{ tone?: "pass" | "fail" }>(), { tone: "pass" });
</script>

<!-- A solid block that reports a state; the only place capitals appear (slide 42). -->
<template>
  <span
    class="inline-block px-[10px] py-[4px] type-mono-m uppercase"
    :class="tone === 'fail' ? 'bg-e2e-fail text-e2e-blank' : 'bg-e2e-pass text-e2e-terminal'"
    ><slot
  /></span>
</template>
