---
title: "OpenAI's agents found and exploited 948 root flaws in the Linux kernel"
excerpt: "OpenAI says its as yet unreleased cyber model produced working exploit code for 948 unique privilege escalation flaws in the Linux kernel."
hook: "About $1,279 per flaw"
fact: "948"
factLabel: "Working root exploits"
category: "News"
---
In research published on 4 November, OpenAI said its AI agents had found 948 unique local privilege escalation (LPE) flaws in the Linux kernel and written a working exploit for each one. A flaw of this kind lets someone who logs in as an ordinary user gain "root", meaning full administrator rights.

## How was it done?

As Unite.AI reported, the experiment ran in mid October on a widely used desktop Linux distribution, in virtual machines with standard security protections switched on. Agents running on an as yet unreleased cybersecurity model scanned 2.8 million lines of code, about 7 percent of the kernel. Within 12 hours they had 2,308 candidate findings; within 30 hours, 1,724 of them had been reproduced in the virtual environment. In the end, working code was obtained for 948 unique root flaws.

According to The Hacker News, the total cost was about $1.21 million in API credits, or roughly $1,279 per flaw. OpenAI believes the agents discovered at least 10 new exploitation techniques but did not share the details for security reasons. In a similar trial in June, only 24 flaws had been found.

## What about the patches?

The agents also wrote a draft patch for each flaw, but these have not yet been approved by Linux developers. Every exploit and patch is first reviewed by human researchers. According to Unite.AI, 61 flaws had already been patched by the time the scan finished; OpenAI has reported hundreds of critical flaws and will share the rest gradually. Because the model has not been released, the results cannot yet be independently verified.

## Why it matters

Finding a root flaw used to be expert work that took weeks; now it costs a few thousand dollars. That is a big opportunity for defenders, but the same tool works just as well in malicious hands. OpenAI's own warning points the same way: on an unpatched system, an ordinary account should in the near future be treated as effectively an administrator account. If you are curious how innocently computer viruses began, see our article [the first virus, Creeper, was actually harmless](/yazi/creeper-ilk-virus-zararsizdi/).
