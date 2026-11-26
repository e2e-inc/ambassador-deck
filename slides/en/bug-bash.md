---
layout: split
left: 3fr
label: bug bash
---

## Every finding proven by a failing test.

::right::

<video src="../../media/bug-bash.mp4" autoplay muted loop playsinline class="block w-full border border-e2e-neutral-700" />

<!--
You ask your coding agent: "bug bash the checkout and account settings on this branch."
1. It reads the routes and the branch diff.
2. It writes a handful of charters: one area and one way of using it each (first-time user, edge input, reload, error paths).
3. It runs several explore sessions at once, each in its own browser. That is this video.
4. It drops findings with a known cause, such as test data or intended design.
5. It writes a test that reproduces each remaining finding. Only a failing test counts as a bug.
Those tests stay out of the merge gate and become regression tests after the fix.
-->
