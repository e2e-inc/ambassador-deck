---
layout: split
label: explore
---

## Find the bugs nobody wrote a test for.

::right::

<Terminal title="npx e2e explore 'buy a book like a first-time buyer'">

<pre class="term"><span class="t-badge">web</span> <span class="t-hi">Exploring</span>  <span class="t-dim">the bookshop like a first-time buyer</span>

  <span class="t-ok">✓</span> <span class="t-dim">1</span>  Catalog browsing  <span class="t-dim">31.46s · 7 actions</span>
    <span class="t-bad">⚑ high</span>     Neuromancer has negative stock
    <span class="t-hi">⚑ medium</span>   Home greeting shows a raw {userName}

  <span class="t-ok">✓</span> <span class="t-dim">2</span>  Cart quantities  <span class="t-dim">19.47s · 4 actions</span>
    <span class="t-bad">⚑ high</span>     Cart total ignores quantity changes
    <span class="t-dim">⚑ trivial  Newsletter label misspells Receive</span>

    <span class="t-dim">Findings</span>  <span class="t-bad">2 issues</span> <span class="t-dim">|</span> 2 warnings
       <span class="t-dim">Steps</span>  2 of 30 <span class="t-dim">· ended: the agent covered the goal</span></pre>

</Terminal>

<!--
Real output from the example app in the e2e docs. No test was written: the goal is one sentence.
Each finding comes with steps to reproduce and a screenshot. An issue fails the run, a warning does not.
You set the limits: steps, time and cost.
-->
