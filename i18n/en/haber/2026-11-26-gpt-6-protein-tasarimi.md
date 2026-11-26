---
title: "OpenAI: GPT-6 designed a protein on its own, 35 of 322 attempts held up in the lab"
excerpt: "OpenAI says its general purpose GPT-6 models designed protein shapes without calling any specialist biology model; in the lab, 35 of 322 designs bound to their target."
hook: "A chat model designed a protein"
fact: "35/322"
factLabel: "designs that bound in the lab"
category: "News"
---
In a preprint published on November 24, OpenAI announced that its general purpose GPT-6 models can design proteins. The striking part of the claim: the model produces three dimensional protein shapes without calling on biology models built for the job, reasoning in text alone and running code it writes itself.

## What happened in the lab?

Proteins are chains of building blocks called amino acids; the order of the chain decides how the protein folds, and the folding decides what it does. Together with its research partner Onava, OpenAI actually made and tested the small proteins (minibinders) that GPT-6.2 designed.

The result: of 322 designs tried against five targets, 35, that is 10.9 percent, bound to their target. The targets were PD-L1, IL-7Rα, TrkA, VEGF-A and IL-17A; 18 of the binders came from IL-17A alone. On easier tasks, such as writing a new amino acid sequence onto an existing structure, the rate was much higher: 128 of 182 pieces bound in the redesign of antibody loops, and 179 of 272 in therapeutic antibody fragments.

## What should not be overstated?

The model produced the shape of the chain, but the rest of the work still fell to the old tools: SolubleMPNN and ProteinMPNN proposed the sequences, and Boltz-2, OpenDDE and ESMFold2 filtered which candidates went to the bench. OpenAI itself writes that there is no proof its models can make a protein end to end on their own.

At predicting a whole protein structure from a sequence, the model is still weak: the average TM score is 0.38 for the in house model, against 0.93 for the specialist ESMFold2. The strongest benchmark results also come from an unnamed internal model that nobody can reach, and none of them has been verified outside the company.

## Why does it matter?

Binding is the first step on the road to a drug; tests for selectivity, stability and safety come later. Even so, a general purpose model doing real work in a field held for years by models trained for a single job could change how lab software is put together from here on. In the same paper OpenAI also says the capability could be misused and that it assessed the biosecurity risks against its own framework. If you are curious about the days when computers were born as the calculator of science, [the story of the 30 ton ENIAC](/yazi/eniac-30-ton/) is here.
