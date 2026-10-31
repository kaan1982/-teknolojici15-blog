---
title: "Four AI giants unite behind one robots.txt signal: \"Don't train on me\""
excerpt: "OpenAI, Google, Microsoft and Anthropic will support a shared robots.txt signal that lets websites opt out of AI training with a single line."
hook: "Saying no to AI with one line"
fact: "4 companies"
factLabel: "Giants backing the shared signal"
category: "News"
---
On October 30, OpenAI, Google, Microsoft and Anthropic announced that they will support a shared signal that lets websites withdraw their content from AI training with a single setting. Until now, a site owner had to block each company's crawler bot separately in the robots.txt file.

## What happened?

The new signal is called `__usage_ai-training`. A site owner writes it into the robots.txt file like any ordinary rule, effectively saying "don't use my content to train AI models." The proposal was submitted to the Internet Engineering Task Force (IETF) as a draft written by Kevin Kelley, who leads standards work at Anthropic. It isn't a finalized standard yet; unless the draft is updated, it expires in May 2027.

The companies' timelines differ. Anthropic said it has started implementing support. OpenAI's support will arrive in the coming months. Google and Microsoft are aiming for 2027. For Bing, Microsoft is also adding a separate control that distinguishes training from "grounding," meaning a chatbot looking at a source while answering. Google said it will treat sites that use this signal but haven't written their own Google-Extended rule as if they had blocked Google-Extended. Meta showed interest in a shared signal but didn't say whether it will honor it.

## Why does it matter?

Publishers have complained for years that their content is used to train models without permission; The New York Times sued OpenAI over it. A one-line signal makes things much easier for small site owners. But it has limits: compliance is voluntary, there is no oversight or enforcement, and smaller labs and open-source projects are outside the agreement. And the signal covers training only; it doesn't address problems such as AI summaries reducing the visitors who reach websites.

## A link from history

The robots.txt rule appeared in 1994, when the web was still very young, as a way to tell bots "don't go here." We told the story of where the web began in our post [The first website is still online: the story of info.cern.ch](/yazi/ilk-web-sitesi-hala-yayinda-1991/). Thirty years later, the same little file has become a bargaining table for the AI age.
