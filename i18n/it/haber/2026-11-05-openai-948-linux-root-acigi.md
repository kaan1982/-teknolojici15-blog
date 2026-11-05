---
title: "Gli agenti di OpenAI hanno trovato e sfruttato 948 falle root nel kernel Linux"
excerpt: "OpenAI ha annunciato che, con un modello di cybersicurezza non ancora pubblicato, ha prodotto exploit funzionanti per 948 falle uniche di escalation dei privilegi nel kernel Linux."
hook: "1.279 dollari per falla"
fact: "948"
factLabel: "Exploit root funzionanti"
category: "Notizie"
---
In una ricerca pubblicata il 4 novembre, OpenAI ha annunciato che i suoi agenti di intelligenza artificiale hanno trovato nel kernel Linux 948 falle uniche di escalation locale dei privilegi (LPE) e hanno scritto per ciascuna un exploit funzionante. Una falla di questo tipo permette a chi entra nel sistema come utente comune di ottenere i privilegi di "root", cioè di amministratore completo.

## Come è stato fatto?

Secondo Unite.AI, l'esperimento si è svolto a metà ottobre su una diffusa distribuzione Linux desktop, in macchine virtuali con le normali protezioni di sicurezza attive. Gli agenti, basati su un modello di cybersicurezza non ancora pubblicato, hanno analizzato 2,8 milioni di righe di codice, circa il 7 per cento del kernel. In 12 ore sono emersi 2.308 risultati candidati; in 30 ore 1.724 di questi sono stati riprodotti nell'ambiente virtuale. Alla fine si è ottenuto codice funzionante per 948 falle root uniche.

Secondo The Hacker News, il costo totale è stato di circa 1,21 milioni di dollari in crediti API, cioè intorno ai 1.279 dollari per falla. OpenAI ritiene che gli agenti abbiano scoperto almeno 10 nuove tecniche di exploit, ma per motivi di sicurezza non ha condiviso i dettagli. In un test simile condotto a giugno erano state trovate solo 24 falle.

## A che punto sono le patch?

Gli agenti hanno scritto anche una bozza di patch per ogni falla, che però non è ancora stata approvata dagli sviluppatori di Linux. Ogni exploit e ogni patch vengono prima esaminati da ricercatori umani. Secondo Unite.AI, al termine della scansione 61 falle erano già state corrette; OpenAI ha segnalato centinaia di falle critiche e condividerà le restanti in modo graduale. Poiché il modello non è stato pubblicato, per ora non è possibile verificare i risultati in modo indipendente.

## Perché è importante?

Trovare una falla root era un lavoro da esperti che richiedeva settimane; ora costa qualche migliaio di dollari. È una grande opportunità per chi difende i sistemi, ma lo stesso strumento funziona anche in mani malintenzionate. L'avvertimento di OpenAI va proprio in questa direzione: su un sistema non aggiornato, un account comune dovrebbe essere considerato, nel prossimo futuro, di fatto come un account amministratore. Se vi chiedete quanto innocenti siano stati gli inizi dei virus informatici, leggete il nostro articolo [il primo virus, Creeper, era in realtà innocuo](/yazi/creeper-ilk-virus-zararsizdi/).
