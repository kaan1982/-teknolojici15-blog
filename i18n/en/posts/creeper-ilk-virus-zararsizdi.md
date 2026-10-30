---
title: "Creeper, the First Computer \"Virus\", Deleted Nothing"
excerpt: "Creeper, which roamed ARPANET in 1971, touched no data and only printed a taunt on the screen. The first antivirus, Reaper, was written to catch it."
hook: "The first virus deleted nothing!"
fact: "1971"
factLabel: "Creeper, written at BBN"
category: "Computing"
---

Say "computer virus" and we think of something that deletes files, holds data hostage or locks the screen. Yet the program most sources call the "first virus" did none of that. All it did was print a small taunt on the screen and hop to the next computer.

Its name was Creeper.

## 1971, BBN and ARPANET

Creeper was written in 1971 by Bob Thomas as an experimental program at BBN (Bolt Beranek and Newman) in Massachusetts. BBN was the company that played a key role in building ARPANET, regarded as the ancestor of the internet.

The program moved between DEC PDP-10 mainframes connected to ARPANET and running the TENEX operating system. According to Wikipedia, the number of TENEX systems on ARPANET at the time was 28, so that was the most computers Creeper could reach.

Bob Thomas's real aim wasn't mischief but to answer a question: can a program move from one machine to another across a network on its own?

## One sentence on the screen

When Creeper reached a machine, it printed this message on the teletype (the terminal with a printer):

"I'M THE CREEPER : CATCH ME IF YOU CAN"

That's all. It deleted no files and corrupted no data. Wikipedia reports that operators cooperated in the experiment and that no unwanted effects were reported.

The first version didn't even copy itself: moving from one machine to another, it traveled without leaving a copy behind. Later Ray Tomlinson, better known as the inventor of email, modified the program so that it copied itself onto other machines. This self-replicating version is considered the first computer worm, by general agreement.

## Virus or worm?

A small but important correction is needed here. Technically Creeper was not a virus but a worm. A virus spreads by attaching itself to another program or file; a worm moves across the network on its own. Creeper falls into the second group. Still, many publications call it "the world's first computer virus"; a Guardian quote cited on Wikipedia uses exactly that phrase. That is the popular version of the concept, but technically the right label is "the first worm".

The term "computer virus" itself was born 12 years after Creeper. According to ESET's WeLiveSecurity article, Fred Cohen, a student at the University of Southern California, wrote a self-spreading program on November 3, 1983, and his professor Len Adleman suggested the term by likening this infection-like spread to viruses in biology. Cohen prepared the program on a VAX 11/750 running Unix, in about eight hours of work.

> **Did you know?** Ray Tomlinson, who invented email and brought the @ sign into addresses, is also the creator of the program regarded as the first antivirus. So the same person wrote both the internet's best-loved tool and its first "cleaner".

## Reaper: the first antivirus

Once there was a program copying itself across the network, something was needed to stop it. In 1972 Ray Tomlinson wrote a program called Reaper. Reaper also roamed ARPANET, deleting Creeper wherever it found it. Wikipedia describes it as the first antivirus software.

There's a nice irony in this story: the world's first antivirus was itself a program that roamed the network on its own. In other words, one "worm" had been written to catch another.

| Then | Now |
|---|---|
| 1971: at most 28 TENEX machines | Billions of connected devices |
| A single joke sentence on the screen | Ransomware, data theft |
| Reaper: a cleaner with one target | Constantly updated security software |

## The long shadow of an innocent experiment

Creeper was harmless, but it opened a door: if a program could spread across a network on its own, someone could use that power for malicious purposes too. That is exactly what happened in the following decades, and the words "virus", "worm" and "antivirus" entered our everyday language.

Today, if a security researcher released a similar experiment onto the internet without permission, they would most likely end up in serious trouble. The ARPANET of 1971, however, was a small community of researchers who knew one another, and the experiment, as Wikipedia reports, was carried out with the operators' cooperation.

Even so, the starting point was curiosity, not an attack. An engineer asked "I wonder if it can be done?" and gave the answer with a single sentence on a screen.

If Creeper were written today, would it count as a harmless experiment or a security breach?
