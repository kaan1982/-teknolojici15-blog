---
title: "Microsoft fixed more than 1,000 flaws in November; an Outlook flaw was used in attacks"
excerpt: "Microsoft's November security update fixes 1,093 vulnerabilities, including an Outlook flaw that attackers are already exploiting."
hook: "A thousand flaws in one month"
fact: "1,093"
factLabel: "Vulnerabilities in the November update"
category: "News"
---
On 10 November, Microsoft released the November edition of the security update it publishes on the second Tuesday of every month. The package fixes 1,093 security vulnerabilities across 287 products and components. In counts that also include flaws in the Edge browser, the number rises to 1,235.

## Breakdown of the flaws

Of the flaws, 63 are rated "critical" and 1,029 "important". Nearly half (535) are the kind that let an attacker elevate privileges on a system, and 296 allow remote code execution. The most flaws were found in Word, Excel and SQL Server.

Huge packages like this are becoming routine: the October update was even bigger, with 1,411 flaws. According to Netizen's assessment, part of the increase comes from Microsoft using AI-assisted tools to hunt for vulnerabilities.

## The Outlook flaw used in attacks

The most urgent item in the package is the Outlook flaw tracked as CVE-2026-124194. Microsoft confirmed that it was used in attacks before the patch came out. The attacker gets the victim to open a specially crafted file. Outlook connects to the attacker's server without showing an external content warning and leaks the user's password hash (NTLMv2). With this information, the attacker can impersonate the user. The preview pane is not an attack vector; the file has to be opened.

The flaw has a score of 6.5 and Microsoft rates it "moderate". The affected products are Office LTSC 2021, Office LTSC 2024 and Microsoft 365 Apps. Who the attackers and victims are has not been disclosed. According to Tenable, the researcher who found the flaw got help from Anthropic's Claude model.

## Why it matters

Everyone who uses Windows and Office, especially companies, should install the update as soon as possible. At the same time, AI speeding up the discovery of flaws means patches are growing too. If you wonder where the idea of a computer "bug" comes from, see our article on the [first computer bug](/yazi/ilk-bilgisayar-bocegi-1947/).
