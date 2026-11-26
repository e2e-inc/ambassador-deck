---
layout: split
label: agents
---

## Your agent. Fully under your control.

::right::

<Terminal title="e2e.config.ts">

```ts
const context = 'Plans are called tiers. Billing is under Settings.';

export default {
  targets: [{ engine: web(), app: { url: process.env.APP_URL } }],
  agents: {
    default: {
      model: openai('gpt-6-luna-fast'),
      context,
      tools: { seedCart },
    },
    auditor: {
      model: anthropic('claude-opus-5'),
      context,
      system: 'Verify every number on screen before concluding.',
      judge: openai('gpt-6-luna'),
    },
  },
} satisfies E2EConfig;
```

</Terminal>

<!--
You pick the model, the prompt and the vocabulary for each agent.
`context` holds facts about the app, read by every model call. `system` says how this tester behaves.
A judge never sees `system`, so a persona cannot lower the bar for a verdict.
Run the same tests once per agent with --agent default,auditor. Tools let the agent seed data through your own APIs.
-->
