---
layout: closing
label: thank you
---

# questions?

<div class="flex items-end gap-[80px]">
  <Person :name="$slidev.configs.presenter" :role="$slidev.configs.role" :contact="$slidev.configs.contact" :photo="$slidev.configs.photo" />
  <div class="flex flex-col gap-[8px]">
    <a href="https://e2e.com" class="e2e-link type-body-l">e2e.com</a>
    <a href="https://e2e.com/docs" class="e2e-link type-body-l">e2e.com/docs</a>
  </div>
</div>

<!--
Your name, role, contact and photo come from the deck's headmatter. The links stay clickable in a PDF.
Questions that come up most, with slides you can add from slides/en: "how do I know a passing test is real?" (trust.md) and "where does it run in my pipeline?" (how-you-ship.md).
-->
