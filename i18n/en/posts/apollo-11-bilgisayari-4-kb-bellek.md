---
title: "The Apollo 11 Computer: What Does \"4 KB of Memory\" Really Mean?"
excerpt: "The computer that landed Apollo 11 on the Moon had about 4 KB of RAM. Its programs lived in roughly 72 KB of ROM that was literally woven by hand."
hook: "They landed on the Moon with 4 KB of RAM"
fact: "4 KB"
factLabel: "The AGC's erasable memory (RAM)"
category: "Computing"
---
You've surely heard the line "the memory of the computer that went to the Moon was smaller than a photo". In the video we said "4 KB" too. That figure is right, but on its own it's incomplete. The Apollo Guidance Computer (AGC for short) actually had two separate memories, and "4 KB" describes only the smaller one.

Let's unpack this famous number together.

## What exactly does "4 KB" describe?

The AGC's working memory, the erasable memory we'd call RAM today, consisted of 2,048 "words". Each word was 16 bits long: 15 bits of data and 1 bit of parity for error checking. If we count a word as 2 bytes, 2,048 words come to about 4 KB. So "4 KB" is the size of the scratch pad the computer used while calculating during flight.

The programs weren't stored in this memory. It held the current position, speed, counters and intermediate results passed between tasks. The memory was built from tiny rings called magnetic cores, and it kept its contents even when the power went out.

The programs lived somewhere else entirely: in 36,864 words of fixed memory, that is, ROM. By the same calculation that's about 72 KB. In short, the more accurate sentence is: Apollo 11 landed on the Moon with about 4 KB of RAM and about 72 KB of ROM.

## The programs were woven

The AGC's ROM was "core rope" memory, and it was quite literally woven by hand. If a wire passed through a magnetic core, that bit was a 1; if it went around the core, it was a 0. In other words, software was turned into hardware by weaving it like fabric.

This work was done by Raytheon employees in Waltham, Massachusetts. According to Ken Shirriff's detailed study, a significant share of those hired were women from the local textile industry, chosen for their sewing skills. Weaving a single module took about 8 weeks and cost $15,000. Each module held 6 thousand words, and six modules made up the total of 36,864 words.

The side effect was significant: the software had to be frozen months before the flight. There was no such thing as a last-minute patch, because fixing a bug meant weaving it again.

> **Did you know?** Apollo 11 had not one but two AGCs: one in the Command Module and one in the Lunar Module. Each weighed about 32 kg (70 lb) and ran on a 2.048 MHz crystal clock.

## The alarm minutes before landing

During the landing on July 20, 1969, the Lunar Module's computer showed a 1202 alarm and then a 1201 alarm. Both meant "executive overflow": the computer was being given more work than it could handle. According to the detailed account on Wikipedia, the cause was spurious signals from the rendezvous radar, which had been left on standby, keeping the processor busy. The problem was not a programming error, a pilot error or a hardware failure. At its root it came from a flaw in the interface document between two systems.

What's really interesting is what the software did in this situation. The AGC ran on a priority-based scheduler. When overloaded, it quickly restarted itself, dropped low-priority jobs and carried on with critical tasks such as flying the landing. In other words, that famously small memory was enough because it was managed cleverly.

There was one more detail that made things harder. The 1668 command that Buzz Aldrin entered into the computer during the descent added extra load to the already strained processor and triggered one more 1202 alarm. The software got through that the same way, and the Eagle touched down on the lunar surface.

The software was developed at the MIT Instrumentation Laboratory. The Command Module software (COLOSSUS) and the Lunar Module software (LUMINARY) were handled by different teams. Putting the details into practice was up to the team led by Margaret Hamilton.

## Then and now

| Apollo Guidance Computer (1969) | Today's cell phone |
|---|---|
| About 4 KB of erasable memory (RAM) | Gigabytes of RAM |
| About 72 KB of hand-woven ROM | Hundreds of gigabytes of storage |
| Months of weaving for a software update | Updates that install themselves overnight |
| About 32 kg (70 lb) | Fits in the palm of your hand |

## The real lesson of the number

The "4 KB" figure is often told as "look how primitive it was". Yet the heart of the story is the opposite: limited memory forced engineers to account for every bit. That's how software was born that prioritized tasks and recovered itself under overload.

Today the devices in our pockets have incomparably more memory, but most apps aren't written with that much care. A single update to a messaging app can be many times larger than all of Apollo's software.

Do you think limits make better engineers, or does abundance?
