---
title: "Moonshot opens the weights of 2.8 trillion parameter Kimi K3.1 Pro"
excerpt: "China's Moonshot AI has published the model weights of Kimi K3.1 Pro on Hugging Face; the company says it deliberately trimmed the model's cyberattack skills."
hook: "Hacking skills cut on purpose"
fact: "2.8 trillion"
factLabel: "Total number of parameters"
category: "News"
---
Chinese AI company Moonshot AI has published the weights of its flagship model, Kimi K3.1 Pro, on Hugging Face. According to a TechNode report dated 5 November, this means the model is no longer available only through the Kimi apps and the API: anyone can now run it on their own servers. The company unveiled the model at the end of October and had announced that it would open the weights by 4 November.

## Huge but selective

According to TechNode, K3.1 Pro is a "mixture of experts" (MoE) model. It has about 2.8 trillion parameters in total, but only around 104 billion of them are active for each response. The context window is about 1 million tokens, and the model can process images as well as text. Training focused on coding, 3D design, financial research and long-running agent tasks. Huawei also announced support for running the model on its own Ascend chips.

According to Moonshot's own measurements, as reported by The Next Web, the model scored 65.7% on Terminal-Bench 4.0, which tests coding agents. That is very close to Claude Opus 5.5's 66.4% and above GPT-6 Astra's 58.2%. The company also says the model's rate of making false claims has dropped from 23.4% to 8.3%. These figures have not yet been independently verified.

## A skill weakened on purpose

The most striking part of the story is safety. Moonshot said it removed training material related to cyberattacks before the open release. In the company's internal test, the untrimmed version solved 90.5% of tasks involving exploiting real software vulnerabilities, while the released model managed 81%. Experts, however, point out that open weights cannot be recalled once they have been downloaded.

## Why it matters

The gap between open weight models and closed US models keeps narrowing. For developers that means a cheap and flexible option; for regulators, a powerful tool that is getting harder to control. We explain ways to use AI tools safely in our [skill safety](/yapay-zeka/skill-guvenligi/) chapter.
