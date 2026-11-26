---
label: what e2e is
---

## a test describes what the user does.

<div class="code-pair mt-[40px] grid grid-cols-[4fr_5fr] gap-[20px]">
  <div class="flex flex-col">
    <div class="e2e-caption mb-[8px]">a script</div>
<Terminal title="tests/billing.spec.ts">

```ts
test('a member upgrades to Pro', async ({ page }) => {
  await page.goto('/settings/billing');
  await page.getByTestId('ds-plan-card-pro').click();
  await page.getByTestId('ds-btn-upgrade').click();
  await page.getByTestId('ds-btn-confirm').click();
  await expect(page.getByTestId('ds-plan-status'))
    .toHaveText('Pro');
});
```

</Terminal>
    <p class="type-body-m !mt-[20px]">Four test IDs to keep in sync with the UI. Rename one in a redesign and the test fails.</p>
  </div>
  <div class="flex flex-col">
    <div class="type-caption mb-[8px] text-e2e-pass">the same flow in e2e</div>
<Terminal title="tests/billing.e2e.ts">

```ts
test('a member upgrades to Pro', async ({ app, agent, screen }) => {
  await app.open('/settings/billing');

  await agent.act('upgrade the workspace to the Pro plan');
  await agent.assert('the invoice preview shows a prorated amount');

  await expect(screen.getByRole('status')).toContainText('Pro');
});
```

</Terminal>
    <p class="type-body-m !mt-[20px] !text-e2e-blank">One goal for the agent, one check it must pass, and one exact assertion in code. After a redesign the agent finds the new path, and the checks stay the same.</p>
  </div>
</div>

<style>
.code-pair .terminal-body .slidev-code { font-size: 12px !important; line-height: 20px !important; }
</style>

<!--
The handout version of intention.md: both tests side by side, with no click. Use it when the deck is read as a PDF.
The example app is illustrative, the same one the e2e README uses.
Left: four test ids to keep in sync with the UI. Right: agent.act finds the path on the current screen, agent.assert is judged on the live screen, and expect is plain code with no model.
Once a check confirms an agent step, e2e records it. Later runs replay it without the model until the screen changes.
-->
