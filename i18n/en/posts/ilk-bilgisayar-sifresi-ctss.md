---
title: "The First Computer Password Was Stolen in Its Very First Year"
excerpt: "MIT's CTSS system brought the password to computers. Soon after, a PhD student printed out all the passwords. The story of the first password and the first hack."
hook: "The first password was the first one hacked"
fact: "1962"
factLabel: "The first known password theft"
category: "Firsts"
---

The password you type dozens of times a day has a birthplace: a single giant computer at MIT in the early 1960s. Even more interesting, the world's first known computer passwords were stolen in bulk shortly after they came into use. And not by a gang of hackers, but by a PhD student who wanted more computer hours.

## One computer, dozens of users

In the early 1960s, computers were machines that filled rooms and did one job at a time. You punched your program onto cards, put them in a queue, and got the result hours later. At MIT, Fernando Corbató's team wanted to change this: a system where many people could use the same machine at once from terminals, that is, "time-sharing".

The system was named CTSS (Compatible Time-Sharing System). It was first demonstrated in November 1961 on MIT's modified IBM 709 and in the following years ran on IBM 7094s. As Wikipedia also notes, CTSS is considered the first computer system to implement login with a password.

## Why was a password needed?

The problem was simple: dozens of people had files and allocated computer time on the same machine. A way to tell who was who was needed. Corbató later told Wired that putting a password on each user as a lock had seemed like "a very simple solution".

Corbató was also careful about declaring himself "first". He said IBM's 1960 Sabre reservation system probably used passwords too, but since no records remain, nothing is known for certain. Sources also differ about exactly which year passwords were added to CTSS. What we know is this: in the spring of 1962 the password system was running, because that spring it was stolen.

## Allan Scherr's Friday night plan

Allan Scherr was a researcher doing his PhD at MIT, running complex simulations. According to Wired, he was allotted only four hours a week on CTSS (some sources say four hours a day). That wasn't enough for him.

His solution was clever but also mischievous. Using the system's offline printing feature, he prepared a punched card requesting a printout of the password file. He put the card in the queue late on a Friday night and came back early Saturday morning to pick up the printout. Now he had everyone's password in the system.

To cover his tracks, he shared the passwords with other users too. According to Wired, one of them, J.C.R. Licklider, logged into the account of lab director Robert Fano and left mocking messages. Scherr was never caught, and about a quarter century after the incident he confessed it to Fano in person. Fano assured him that his doctorate would not be taken back.

> **Did you know?** This wasn't the only password crisis at CTSS. In 1966 a mistake by an administrator swapped the password file with the "message of the day" file, and everyone who logged in saw all the passwords in plain sight on their screens. According to the system's developer Tom Van Vleck, this incident was the starting point for the idea of storing passwords with one-way encryption. Of course, it happened at five on a Friday evening, and Van Vleck had to spend hours changing passwords.

## Then and now

| Then (1960s) | Now |
|---|---|
| Plain-text passwords in a single file | One-way hashed passwords |
| A single punched card was enough to get a printout | Access logs, layers of authorization |
| Goal: sharing computer time | Goal: protecting identity, money, personal data |
| One machine, one campus | Dozens of accounts per person |

This story is still instructive today because the password has been tested by human behavior since the day it was invented. Scherr didn't mount a complex attack to break the system; he simply used a feature the system already offered in an unexpected way. A significant share of today's leaks also stems from similarly simple mistakes.

Corbató received the Turing Award in 1990 for his work on time-sharing. The lock his team added as a "simple solution" now stands at every door, from your email to your bank, and the weakest link is still often the person using that lock.

Do you think we're ready today to drop passwords entirely and switch fully to biometrics or passkeys?
