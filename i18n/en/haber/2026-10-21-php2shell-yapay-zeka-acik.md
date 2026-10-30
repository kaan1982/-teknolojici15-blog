---
title: "AI Finds Critical Flaws in PHP, the Language Behind 70 Percent of Websites"
excerpt: "Two flaws called PHP2Shell allow code to run on a server without logging in. Models such as GPT-5.6 Sol and Gemini 4 Argon were used in the discovery."
hook: "AI found the giant hole in PHP"
fact: "CVSS 9.2"
factLabel: "Highest score of the PHP2Shell flaws"
category: "AI"
---
On October 21, PHP developers released an emergency patch for two critical security flaws in the core engine of the language. The flaws, named "PHP2Shell" and numbered CVE-2026-109618 and CVE-2026-109619, were found with the help of AI tools.

## What happened?

According to Fortune, AI security testing firm Calif found the first piece of the chain on August 1 with GPT-5.6 Sol; Wiz independently identified the first flaw on August 19 and reported it to the PHP security team on August 24. The discovery used Wiz's own tool Wiz Atlas together with OpenAI's GPT-5.6 Sol and Google's Gemini 4 Argon models.

The flaws let an attacker run code remotely on a server without logging in and leak data from memory. According to Wiz, almost every PHP release of the past decade, going back as far as 5.4, is affected. The highest severity score on the CVSS scale is 9.2. PHP runs behind roughly 70 percent of the world's websites; WordPress alone powers about 40 percent of sites. According to Fortune's updated report, the flaws began to be widely exploited after the patch.

## Why does it matter?

This is one of the clearest examples that AI can now be not just a helper in security research but the one making the discovery. But the same tools are in attackers' hands too, and the time between a patch being released and exploitation starting is getting shorter. Every site owner who uses PHP needs to update their server right away. In the wider picture, hidden bugs in the internet's decades-old code may now come to light much faster. We told the story of the first program that moved around a network on its own in our [Creeper post](/yazi/creeper-ilk-virus-zararsizdi/).
