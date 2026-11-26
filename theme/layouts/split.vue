<script setup lang="ts">
withDefaults(defineProps<{ label?: string; left?: string }>(), { left: "4fr" });
</script>

<template>
  <div class="slidev-layout split !pt-[120px]">
    <SlideChrome />
    <div
      class="relative z-10 grid h-full items-center gap-[40px]"
      :style="{ gridTemplateColumns: `${left} 8fr` }"
    >
      <div class="flex flex-col">
        <Label v-if="label" class="mb-[8px]">{{ label }}</Label>
        <div class="flex flex-col gap-[20px]">
          <slot />
        </div>
      </div>
      <div class="min-w-0">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>
