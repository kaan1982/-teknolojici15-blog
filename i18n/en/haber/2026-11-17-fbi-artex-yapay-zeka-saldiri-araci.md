---
title: "FBI warns: AI attack tool ARTEX breaches networks in under 3 hours"
excerpt: "According to the FBI, the open source AI penetration testing tool ARTEX is in attackers' hands; some attacks went from target selection to privileged access in under 3 hours."
hook: "The attacker sleeps, the agent works"
fact: "< 3 hours"
factLabel: "Shortest time from target to privileged access"
category: "News"
---
In an urgent cybersecurity alert (FLASH) dated November 13, the US Federal Bureau of Investigation (FBI) announced that an open source AI tool called ARTEX has been weaponized by attackers. The alert was reported in detail on November 16 by TechCrunch and the healthcare industry publication Becker's.

## What does ARTEX do?

ARTEX is actually a penetration testing platform written to test network defenses. The user describes the goal in a plain sentence, and the tool turns it into commands run by AI agents. It can connect to Anthropic's Claude, OpenAI's GPT and Chinese models such as DeepSeek. According to the FBI, the tool scans the network quickly, exploits weak protections and exposed or stolen passwords, then spreads toward databases and email inboxes. Some attacks went from initial target selection to privileged access in under 3 hours.

The tool was published on GitHub in July 2026 by a developer called "Autumn-27". The developer took down the repository on October 8 and made the tool closed source, but the old version keeps circulating through copies, archives and a commercial edition. In early November, researchers counted more than 1,600 ARTEX panels exposed to the internet without a password.

## Which attacks was it used in?

In an attack disclosed by Microsoft on October 21 and most likely attributed to Chinese hackers, the Microsoft 365 environments of at least 2,250 customers were accessed through the IT management company ConnectWise. In South Korea, the data of at least 68,000 people was stolen from financial institutions with weak multi-factor authentication. Security company Barracuda also disclosed on November 11 that it had been breached with ARTEX because of an unrevoked credential belonging to a vendor it had stopped working with, and it rotated all customer credentials.

The target list includes finance, government, technology, defense, energy, telecom, legal and healthcare. The FBI recommends taking inventory of internet-facing applications, restricting admin panels to trusted networks and investigating unexpected connections to AI providers.

## Why does it matter?

ARTEX lets someone with little technical knowledge run several attacks at once. For defenders, the message is clear: once attack speed outpaces human reaction time, forgotten passwords and old connections can now cost you within hours. For the early days of malware, take a look at our article on [Creeper, the harmless first virus](/yazi/creeper-ilk-virus-zararsizdi/).
