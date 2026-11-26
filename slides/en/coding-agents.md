---
layout: statement
label: why it matters with coding agents
clicks: 2
---

<Lit :at="0">Agents write tests that pass.</Lit>
<Lit :at="1">Intentions are judged on the real app.</Lit>
<Lit :at="2">Verified steps replay from cache, without the model.</Lit>

<!--
Two clicks, one line lit at a time.
1. A coding agent that writes a scripted test mirrors its own implementation, so the test passes by construction.
2. An intention ("the invoice preview shows a prorated amount") knows nothing about the implementation. It is judged on the live screen.
3. Once a check confirms an agent step, e2e records it. Later runs replay the recording without calling the model, until the screen changes. Plain-language checks are still judged on every run.
-->
