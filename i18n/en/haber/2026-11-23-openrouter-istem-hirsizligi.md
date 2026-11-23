---
title: "Middlemen were reading AI requests: OpenRouter drops 3 providers"
excerpt: "Dragos research using 2 million trap requests exposed prompt and key theft at cheap AI providers; OpenRouter removed 3 providers."
hook: "Someone else may be reading your prompt"
fact: "2 million"
factLabel: "Trap requests sent in the study"
category: "News"
---
Cybersecurity company Dragos ran an unusual experiment to measure whose hands requests to AI models pass through on the way. The results spurred OpenRouter, which offers different models through a single interface, into action: the platform removed three providers from its list and withdrew the "Zero Data Retention" approval of 125 endpoints.

## How was the experiment done?

Between July and November 2026, the researchers sent about 2 million requests. Inside each request they planted fake passwords and hidden links that give themselves away the moment they are used, in other words "canary" traps. According to The Decoder, at least three providers turned out to have been compromised by attackers, with data stolen for months. None of the providers was aware of the situation until Dragos told them.

In the largest incident, the attackers collected hundreds of AWS keys and tried some of them within a few hours. Some middlemen working like a marketplace did not even need to find a flaw: listing the model at the cheapest price and switching on logging was enough to read customer requests. Settings that promised "we do not retain data" were also found to be broken frequently.

## What did OpenRouter do?

The company emailed affected users, warning them that their requests to MiniMax models may have been read by third parties. Providers such as Novita, Phala and Together published preliminary investigation reports.

## Why does it matter?

Every password, code snippet or company document pasted into an AI chat can pass through more than one middleman before it reaches the model, and each middleman can see the entire request. Dragos's advice is clear: never put real credentials in requests, and do not let price decide which route your data takes. If you are curious how the password was born, take a look at [our post on the first computer password](/yazi/ilk-bilgisayar-sifresi-ctss/).
