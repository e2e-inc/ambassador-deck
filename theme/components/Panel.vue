<script setup lang="ts">
defineProps<{ label: string; title: string }>();
</script>

<template>
  <div class="flex flex-col e2e-surface p-[20px]">
    <Label>{{ label }}</Label>
    <h3 class="!mt-[20px]">{{ title }}</h3>
    <div class="panel-body mt-[20px]">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.panel-body :deep(li) {
  font-size: 16px;
}
</style>
