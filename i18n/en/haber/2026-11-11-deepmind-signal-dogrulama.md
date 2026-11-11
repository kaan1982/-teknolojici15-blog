---
title: "DeepMind's AI mathematically verified the code of Signal's encryption in four weeks"
excerpt: "Google DeepMind's AlphaProof Code system verified key security properties in the real code of the Signal protocol with machine-checked proofs."
hook: "Years of work in four weeks"
fact: "6 million lines"
factLabel: "Proof written in Lean"
category: "News"
---
On 10 November, Google DeepMind introduced a new AI system called AlphaProof Code and announced its first major job: proving the core security properties of the Signal messaging protocol through "formal verification". Besides the Signal app, modified versions of the Signal protocol are also used in WhatsApp and Google Messages.

## How does it work?

In formal verification, it is proven mathematically that a piece of software follows a given security rule in every situation, and a computer program checks the proof step by step. This work normally takes expert teams years.

With AlphaProof Code, human cryptography experts first wrote down what was to be proven. One example: protecting later messages even if a device is briefly compromised. Then AI agents working together produced the proofs in a formal language called Lean. The result was a proof of more than six million lines. The work of the five-person team took four weeks. The agents flagged only 1 percent of the code for a second human check.

To show that the system can really tell the difference, the team put two real bugs that had been fixed earlier back into an isolated copy of the code. In both cases, AlphaProof Code proved that these versions were insecure.

## Limits

The verification covers selected security properties of the protocol, not the entire Signal app. No new vulnerability was found in the parts that were examined. A proof is only as strong as the rules and assumptions written for it; for example, the encryption algorithms are assumed to be flawless. DeepMind researcher Swarat Chaudhuri also said there is still a very long way to go before the method spreads to all the world's software. Google did not disclose the cost; the proofs and rules are being published as open source.

## Why it matters

AI is also helping attackers find vulnerabilities. Using the same technology to prove that software is secure is an important step for the defending side. If you are curious about the early days of computer security, read the story of the [first computer password](/yazi/ilk-bilgisayar-sifresi-ctss/).
