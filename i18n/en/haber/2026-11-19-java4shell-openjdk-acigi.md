---
title: "Java4Shell: an unauthenticated remote code execution flaw in OpenJDK"
excerpt: "A memory overflow in Java's Base64 decoder can open the door to remotely taking over software such as Jira, Jenkins and Keycloak on x86 servers with AVX-512 support."
hook: "One malformed Base64 string may suffice"
fact: "9.2 / 10"
factLabel: "CVSS 4.0 severity score given by Calif"
category: "News"
---
On November 17, security company Calif published details of a vulnerability that put the Java world on alert. The bug, dubbed "Java4Shell" and tracked as CVE-2026-114938, sits in OpenJDK's Base64 decoder. Calif rates the flaw 9.2 on the CVSS 4.0 scale, which means critical.

## Where is the problem?

The bug lies in the HotSpot virtual machine's Base64 decoding path, which is accelerated with AVX-512 instructions. A specially malformed Base64 input causes data to be written 62 or 63 bytes past the end of an array before Java rejects the input. On its own, this usually just crashes the program; but Calif says that, combined with the target application's memory behavior, remote code execution without logging in is possible.

## Who is affected?

Affected are OpenJDK 17.0.6 and later, plus all versions from 18 onward (including 21, 25 and 27), but only on x86-64 processors with AVX-512 VBMI support. This covers newer Intel server chips and AMD Zen 4 and later. Java 8 and 11, ARM64 systems (AWS Graviton, Apple silicon) and processors that do not support this instruction set are not affected.

Calif says it demonstrated unauthenticated attacks against default installations of Jira, Confluence, Jenkins, Keycloak, Artifactory and PingFederate. Endor Labs notes that these claims have not yet been independently verified and that, as of November 17, no real-world attack had been detected.

## Patch status

The fix is included in OpenJDK 27.0.1.1; Oracle lists versions 17.0.21.1 and 21.0.13.1 as fixed builds. Other distributions are releasing patches on their own schedules. Until a patch arrives, the recommended workaround is to start the JVM with flags such as `-XX:UseAVX=2` to turn off the vulnerable acceleration.

## Why does it matter?

Java runs behind the scenes on countless servers, from banks to government agencies. The similarity in the name is deliberate: like Log4Shell in 2021, an everyday library function can put millions of systems at risk. We explained in [our Creeper article](/yazi/creeper-ilk-virus-zararsizdi/) that the first computer virus was actually harmless.
