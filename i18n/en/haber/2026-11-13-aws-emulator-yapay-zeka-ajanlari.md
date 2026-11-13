---
title: "AI agents wrote AWS's free local cloud emulator from start to finish"
excerpt: "AWS Emulator mimics more than 200 AWS services on your computer; according to Amazon, humans did not write or review a single line of the code."
hook: "Agents wrote it and agents fixed it"
fact: "200+"
factLabel: "AWS services emulated"
category: "News"
---
On 11 November, Amazon Web Services released a free developer tool called AWS Emulator. It imitates more than 200 services of the AWS cloud on the developer's own computer, so software can be tested without opening an AWS account or paying a cloud bill. The most striking part, though, is who wrote it.

## No humans, only agents

According to Matt Goldberg, a senior principal engineer at AWS, autonomous AI agents wrote the entire emulator; his team neither wrote nor reviewed a single line of the code. The project began as a weekend experiment Goldberg ran with Amazon's coding tool Kiro: the first imitation of a simple message queue service came together in about 15 minutes.

Today the work is run by three teams of agents. The first team writes tests and checks them against real AWS. The second runs the same tests on the emulator and files the differences as bug reports. In the third team, each agent fixes a single bug. Changes are not merged until they pass build, code style, security and backward-compatibility checks. According to Goldberg, hundreds of agents close thousands of bugs a day. The humans' job is to design the tests, the rules and these gates.

## Its limits

The code is written in Rust and released under the public-domain CC0 license. Amazon says the tool should not be used for live systems or security testing: it does not evaluate permission policies the way real AWS does, and it does not yet imitate throttling, outages or regional differences. Unsupported operations return an HTTP 501 error, and usage data collection is on by default.

## Why it matters

This is one of the rare cases where a large company openly says it produced a widely used product with no human hands on the code. The center of gravity in software engineering may be shifting from writing code to building the tests that measure correctness. For the story of the very first "bug" in software, see our article on [the first computer bug](/yazi/ilk-bilgisayar-bocegi-1947/).
