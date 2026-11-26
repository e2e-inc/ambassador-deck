---
layout: split
label: intention-based testing
---

## Test the intention, not the implementation.

::right::

<Terminal title="tests/billing.e2e.ts">

````md magic-move
```ts
test('a member upgrades to Pro', async ({ page }) => {
  await page.goto('/settings/billing');
  await page.getByTestId('ds-plan-card-pro').click();
  await page.getByTestId('ds-btn-upgrade').click();
  await page.getByTestId('ds-btn-confirm').click();
  await expect(page.getByTestId('ds-plan-status')).toHaveText('Pro');
});
```
```ts
test('a member upgrades to Pro', async ({ app, agent, screen }) => {
  await app.open('/settings/billing');

  await agent.act('upgrade the workspace to the Pro plan');
  await agent.assert('the invoice preview shows a prorated amount');

  await expect(screen.getByRole('status')).toContainText('Pro');
});
```
````

</Terminal>

<!--
One click: the same flow, written as the goal, plus a check the script never made (the prorated invoice).
The first version targets four test ids. A redesign that renames them breaks the test. In the second there is nothing to rename: the agent finds the path on the current screen.
agent.act does the steps. agent.assert is a plain-language check, judged on the live screen. The expect line is plain code with no model, so exact values stay exact.
The example app is illustrative, the same one the e2e README uses.
In a PDF this slide shows only the second version. For a handout, use what-e2e-is.md instead: both versions side by side.
-->
