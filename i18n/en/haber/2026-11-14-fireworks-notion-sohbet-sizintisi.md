---
title: "AI provider Fireworks hacked; Notion AI chats exposed"
excerpt: "Attackers broke into Fireworks AI's storage systems; AI chats from fewer than 1 percent of Notion workspaces were affected."
hook: "A copy of the chat lived elsewhere"
fact: "UNDER 1%"
factLabel: "Affected Notion workspaces"
category: "News"
---
Notes and workspace app Notion has told some of its customers that their AI chat logs were exposed in a data breach. The leak did not happen in Notion's own systems but at Fireworks AI, the infrastructure provider it uses to run open-weight AI models.

## How did the attack happen?

Fireworks was targeted twice in October: once with stolen internal credentials, and once through a third-party cloud provider hosting the company's research and development machines. On 24 October, the attackers used this route to run an unauthorised workload and reached some storage systems. Fireworks says it contained the incident the same day and that the evidence points to a financially motivated group that sells model access obtained through unauthorised means. In early November, Fireworks informed Notion that chat logs were among this data.

## What data was affected?

The exposed records were Notion AI chats that had been classified for Insights, a feature that shows Notion customers how they use AI. Notion said fewer than 1 percent of workspaces were affected and that most of the records contained no information that could be matched to a user or a company. The company cut its connection to Fireworks, turned off the Insights feature and asked customers who had pasted secrets such as passwords or API keys into chats to change them immediately. Fireworks, for its part, says it saw no impact on its real-time inference service, which runs with "zero data retention" by default, and that the problem was in batch jobs that store data and in its storage systems.

## Why it matters

When you use an AI feature, your data often passes through the servers of other companies you never see. This incident shows that a password pasted into a chat box is only as safe as the weakest link in the supply chain. We explain how old password theft really is in our article on [the first computer password](/yazi/ilk-bilgisayar-sifresi-ctss/).
