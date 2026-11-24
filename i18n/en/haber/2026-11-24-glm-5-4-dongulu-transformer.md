---
title: "China's Zhipu releases GLM-5.4, a model that runs its layers twice"
excerpt: "Zhipu's GLM-5.4 brings the Loop Transformer architecture, which runs 28 layers in two passes, to a large model; it also offers a 1 million token context and image input."
hook: "A model that passes through the same layers twice"
fact: "750 billion"
factLabel: "parameters in the base model"
category: "News"
---
Chinese AI company Zhipu (Z.ai) made its GLM-5.4 model available on November 23. The model's real novelty lies in its architecture: it is the company's first "Loop Transformer" flagship.

## What does the loop do?

In a conventional language model, each layer runs once. GLM-5.4 instead runs the 28 layers of the GLM-5 base model, which has around 750 billion parameters, in two passes; the second pass reprocesses and refines the intermediate results produced by the first. This lets the model think more "deeply" without adding new weights. Zhipu says this brings it to a level of intelligence comparable to models with 2 to 3 trillion parameters. According to the company, the model also does the same job with answers 10 to 14 percent shorter on tests such as GPQA-Diamond and MMLU-Pro.

The model offers a 1 million token context window and can now read images too: developers can hand it a screenshot of a broken interface together with the code.

## Where can you use it?

For now, GLM-5.4 is available through the GLM Coding Plan subscription, the ZCode coding tool and the Z.ai chat site. According to WinBuzzer, subscribers' quota has increased by 50 percent, and the cost of 10 thousand input tokens has dropped from 6.9 credits to 4.6 credits. A general API and open weights will follow after a safety review.

Independent measurements are more cautious: on the KingBench 4 coding test cited by WinBuzzer, the model placed seventh among 19 models with 55.3 percent of the points. The company has not yet published detailed benchmark results.

## Why does it matter?

Looping layers is emerging as a new way to make models stronger without making them bigger, and a Chinese company is among the first to try it at large scale. To get a sense of how big a 1 million token context is, just look at [the first 80 KB floppy disk](/yazi/ilk-disket-ibm-1971-80-kb/).
