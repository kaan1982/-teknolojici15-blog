---
title: "WhatsApp patches three security flaws: one may have been used in scams"
excerpt: "WhatsApp fixed three security flaws, including an Android bug that could leak IP information and is suspected of being used in a scam campaign."
hook: "One message could reveal your IP address"
fact: "3 flaws"
factLabel: "Security flaws patched in November"
category: "News"
---
In security advisories published on November 20, WhatsApp announced that it had fixed three flaws. One of them is an Android bug that the company suspects was used in a scam campaign.

## What are the flaws?

The first is tracked as CVE-2026-23871 and affects WhatsApp and WhatsApp Business for Android before version 2.26.17.4. As reported by Business Upturn, external addresses in replies to "Click to WhatsApp" ads were not checked properly. When a specially crafted message appeared in a chat, the device could expose its IP information to the other party. WhatsApp said it found the bug while trying to block a scam campaign and believes a scammer used it to make a fake message look more convincing. It did not say how many people were affected.

The second flaw, CVE-2026-102769, is an SQL injection in Android versions before 2.26.35.74. Tapping a fake order message sent from an unofficial app could delete some of the files WhatsApp stores on the phone. A researcher reported this flaw through Meta's bug bounty program.

The third, CVE-2026-44908, concerns certificate validation in the connection to Meta AI's private computing infrastructure and affected the Android, iOS and Mac apps. To exploit it, an attacker would have needed to be positioned inside Meta's own infrastructure. WhatsApp says it found no evidence that the last two flaws were used in real attacks.

## What should you do?

The company's advice is simple: keep WhatsApp and your phone's operating system up to date. Checking for updates in the app store is enough to close these flaws.

## Why does it matter?

In an app used by billions of people, a leaked IP address can make it possible to roughly guess someone's location and open the door to targeted scams. It is striking that scammers are no longer relying only on fake messages but also on the app's own bugs. We told the story of how WhatsApp was founded in [our Brian Acton article](/yazi/whatsapp-brian-acton-facebook-reddi/).
