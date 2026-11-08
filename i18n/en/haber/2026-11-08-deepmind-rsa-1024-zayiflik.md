---
title: "DeepMind's AI agents find two weaknesses in legacy 1024-bit RSA encryption"
excerpt: "Google DeepMind says AI agents working under human supervision found two weaknesses in legacy 1024-bit RSA; keys of 2048 bits and above are not affected."
hook: "Two cryptanalysis steps in weeks"
fact: "~1,600x"
factLabel: "Theoretical gain, 32-byte scenario"
category: "News"
---
On 6 November, Google DeepMind announced that its AI agents had found two significant weaknesses in legacy 1024-bit RSA encryption systems. The agents worked under human supervision. The study was led by Dj Dvijotham and Abhradeep Thakurta of DeepMind, and the team also included cryptanalysis experts Nadia Heninger (UC San Diego and Inria) and Emmanuel Thomé (Inria).

## First weakness: padding in signatures

In digital signatures, a fixed block of data called "padding" is added to the message. According to the research, if an attacker can control roughly half or more of the signed block, the padding provides almost no extra protection. The agents tested this in a sandboxed environment against a 1024-bit test key that had previously been solved in an academic study. The result was reproduced with 3.5 times less processor time and with less than a thousandth of the power needed to break the key directly.

In the harder scenario, where the attacker controls only a 32-byte fingerprint, the agents found a new algorithm. It is estimated to deliver an improvement of about 1,600 times over the best known method; this figure is a theoretical calculation, not a measured speed.

## Second weakness: batch factoring

Because RSA keys are usually the same size, a large precomputation can be spread across many keys. With the algorithm the agents found, the average cost of factoring each additional 1024-bit key drops by about 30 times compared with previous batch methods.

DeepMind stresses that the findings do not affect today's encryption. Banking, messaging and software updates almost everywhere use keys of 2048 bits or larger. Pushmeet Kohli, the company's vice president for science, said AI-assisted cryptanalysis could help test future systems.

## Why it matters

Progress in cryptanalysis usually takes years. AI agents cutting that down to weeks shows that systems still using old keys need to speed up their migration. We tell the short history of passwords in our [first computer password](/yazi/ilk-bilgisayar-sifresi-ctss/) article.
