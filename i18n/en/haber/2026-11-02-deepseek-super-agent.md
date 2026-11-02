---
title: "DeepSeek open-sources Super-Agent, which listens to team chats and writes code"
excerpt: "DeepSeek has released the code of Super-Agent, an experimental coding agent that follows requests on GitHub and Feishu and opens pull requests, under the MIT license."
hook: "The code agent that shows up without being called"
fact: "MIT"
factLabel: "Super-Agent's open source license"
category: "News"
---
Chinese AI company DeepSeek published the code of Super-Agent, an experimental coding agent designed for software teams, on GitHub on October 31. According to Bloomberg, the company aims to compete with tools such as Anthropic's Claude Code with this agent.

## What does it do?

Super-Agent works for a single GitHub repository. It listens to conversations on GitHub and, optionally, to group chats on Feishu, ByteDance's workplace messaging app. When an authorized team member asks for a task, the agent opens a separate task in its own session, does the work and posts the result, for example a pull request, under the conversation the request came from. Tasks that need a human decision are listed in a web dashboard.

According to the project's handbook, the goal is to get work done while asking the team for "as little attention as possible". DeepSeek's philosophy document stresses that the agent acts only when it is asked to or when a rule set by the team allows it. The company warns that an agent working on behalf of a whole team can also waste that team's attention.

The code was released under the MIT license, which means anyone can download it, modify it and use it commercially. The repository collected more than 9,000 stars within two days of its release.

## What are its limits?

DeepSeek describes Super-Agent as a "research prototype" and states clearly that it is not an official product. The open source version is not the same as the one the company uses internally. Some ideas in the announcement post are not yet in the code. The document also admits that hard problems such as authorization, review and trust have not been solved; users are asked to review the code before running it.

## Why does it matter?

Until now, coding agents have mostly been tools that wait for a single developer's command. Super-Agent instead tests the idea of a "teammate" that settles into the team's chat and takes on work itself, and it does so in the open, where anyone can inspect it. If the idea catches on, the question of how much authority to give agents will move to the top of software teams' agendas. We told how the first software "bug" was a real moth in our article [the moth of 1947](/yazi/ilk-bilgisayar-bocegi-1947/).
