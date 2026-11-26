<script setup lang="ts">
import { contactHref, contactLabel } from "../utils/contact";

defineProps<{
  name?: string;
  role?: string;
  about?: string;
  contact?: string;
  /** An image in the deck's `public` folder, from the root: `/me.jpg`. */
  photo?: string;
}>();
</script>

<!--
  The speaker, large: photo, name, role, one sentence and a contact. Every value falls back
  to the deck's headmatter (presenter, role, about, contact, photo). A person's name keeps
  its own capitals.
-->
<template>
  <div class="flex items-end gap-[40px]">
    <img
      v-if="photo ?? $slidev.configs.photo"
      :src="photo ?? $slidev.configs.photo"
      alt=""
      class="block size-[320px] shrink-0 object-cover"
    />
    <div class="flex flex-col gap-[20px]">
      <h2 class="!normal-case">{{ name ?? $slidev.configs.presenter }}</h2>
      <div class="e2e-caption">{{ role ?? $slidev.configs.role }}</div>
      <p v-if="about ?? $slidev.configs.about" class="type-body-xl !text-e2e-blank">
        {{ about ?? $slidev.configs.about }}
      </p>
      <a
        v-if="contact ?? $slidev.configs.contact"
        :href="contactHref(contact ?? $slidev.configs.contact)"
        class="e2e-link type-body-l w-fit"
        >{{ contactLabel(contact ?? $slidev.configs.contact) }}</a
      >
    </div>
  </div>
</template>
