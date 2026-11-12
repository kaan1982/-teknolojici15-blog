---
title: "DeepMind's AlphaGenome 2 now reads DNA cell by cell"
excerpt: "DeepMind's AlphaGenome 2 model predicts what a DNA change does in which cell, and finds almost twice as many causal variants."
hook: "Same DNA, different cell"
fact: "30%"
factLabel: "Share of causal variants found"
category: "News"
---
On 11 November, Google DeepMind introduced AlphaGenome 2. This AI model predicts how a small change in DNA (a variant) affects the way genes work. What is new: the model no longer looks at the average of a whole tissue, but at individual cell types and the state a cell is in at that moment.

## What has changed?

Every cell in our body carries the same DNA, but each cell reads it differently. The first AlphaGenome produced fixed predictions for tissues. AlphaGenome 2, on the other hand, takes not only a DNA sequence but also the information "which cell, in which state". Researchers can choose from a ready-made cell catalogue or supply their own single-cell data.

The model was trained on more than 100 million single-cell profiles from humans and mice, spread across 68 tissues. Sources put this figure at over 107 million.

## Results

In the TenK10K test, which covers 28 immune cell types, AlphaGenome 2 found 30 percent of the causal variants. The first model and other specialised tools had stopped at 16 percent. The rate of correctly predicting whether a variant increases or decreases gene activity also rose from 23 percent to 43 percent.

In one example, the model showed that a variant linked to severe COVID-19 is stronger in active T cells than in resting ones.

## Limits

The model is offered through a free API for non-commercial research; there is a private preview for companies. DeepMind stresses that the model has not been validated for clinical or diagnostic use. The model still catches only a minority of causal variants, and its predictions need to be confirmed in the lab.

## Why it matters

Most disease-linked DNA changes lie outside genes, in regions that switch genes on and off, and their effects only appear in certain cells. Being able to predict in advance which change causes trouble in which cell could make it easier to find drug targets and cut down the number of experiments.
