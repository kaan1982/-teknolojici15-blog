---
title: "Google unveils two new TPUs: the encrypted 8tx and the dual-chip 8i Max"
excerpt: "Google has added two systems to its eighth-generation TPU family: TPU 8tx, which keeps data protected even while it is being processed, and TPU 8i Max, which combines two chips in a single package."
hook: "Two chips in one package"
fact: "2x"
factLabel: "Memory bandwidth increase in the 8i Max"
category: "News"
---
On 9 November, Google added two new systems to the eighth generation of its in-house TPU (Tensor Processing Unit) accelerators: TPU 8tx and TPU 8i Max. In April the company had introduced TPU 8t for training and TPU 8i for inference, so the family has reached four systems within the same year.

## TPU 8tx: encryption during processing

TPU 8tx uses the same silicon as TPU 8t but adds "confidential computing" at the hardware level. The goal is for data and model weights to stay protected even while they are being processed. The chip is paired with servers running 5th-generation AMD EPYC processors. Google says it delivers up to 2 times lower latency than TPU 8t and almost no performance loss from the security layer; however, there is no independent test of these claims yet. The target audience is regulated companies and public institutions that work with sensitive data.

## TPU 8i Max: two chips, one package

TPU 8i Max combines two TPU 8i chips in a single package. According to Google, this doubles the compute power, the on-chip SRAM memory and the HBM memory bandwidth compared with a single TPU 8i. Because twice as much silicon fits into the same rack space, the compute power per square meter and per watt in the data center also increases. Google Cloud executive Mark Lohmeyer compared this approach to adding a new lane to a highway.

Google did not give pricing, a general availability date or regional information. According to Data Center Knowledge, some customers will be able to install TPU 8tx in their own data centers; Google has not officially confirmed this.

## Why it matters

In the chip market, some of Nvidia's strongest rivals are cloud companies that design their own chips. Google releasing four different TPU systems in one year shows that custom chips are now splitting by type of workload instead of being a single general-purpose product. For the humble beginnings of Google's hardware adventure, see our [Lego server](/yazi/google-lego-sunucu/) article.
