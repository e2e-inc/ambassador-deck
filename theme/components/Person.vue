<script setup lang="ts">
import { computed } from "vue";
import { contactHref, contactLabel } from "../utils/contact";

const props = defineProps<{
  name: string;
  role?: string;
  /** An email address or a URL. An email becomes a mailto link. */
  contact?: string;
  /** Kept for decks written before `contact`. */
  email?: string;
  /** An image in the deck's `public` folder, from the root: `/me.jpg`. */
  photo?: string;
}>();

const target = computed(() => props.contact ?? props.email);
</script>

<!-- A person card as e2e.com/team sets it: square photo, name and role in mono, then the contact. -->
<template>
  <div class="flex items-end gap-[20px]">
    <img v-if="photo" :src="photo" alt="" class="block size-[120px] object-cover" />
    <div class="flex flex-col gap-[4px]">
      <div class="type-mono-m text-e2e-blank">{{ name }}</div>
      <div v-if="role" class="type-caption text-e2e-neutral-400">{{ role }}</div>
      <a v-if="target" :href="contactHref(target)" class="e2e-link type-body-l mt-[8px]">{{
        contactLabel(target)
      }}</a>
    </div>
  </div>
</template>
