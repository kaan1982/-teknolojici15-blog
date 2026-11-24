---
title: "La cinese Zhipu lancia GLM-5.4, il modello che esegue i suoi strati due volte"
excerpt: "GLM-5.4 di Zhipu porta su un grande modello l'architettura Loop Transformer, che esegue 28 strati per due giri; ci sono anche un contesto da 1 milione di token e l'input visivo."
hook: "Il modello che passa due volte dagli stessi strati"
fact: "750 miliardi"
factLabel: "parametri del modello di base"
category: "Notizie"
---
L'azienda cinese di intelligenza artificiale Zhipu (Z.ai) ha reso disponibile il 23 novembre il modello GLM-5.4. La vera novità sta nell'architettura: è il primo modello di punta "Loop Transformer" dell'azienda.

## A cosa serve il ciclo?

In un modello linguistico classico ogni strato viene eseguito una sola volta. GLM-5.4 invece esegue per due giri i 28 strati del modello di base GLM-5, che conta circa 750 miliardi di parametri; il secondo giro rielabora e migliora i risultati intermedi prodotti dal primo. Così il modello può ragionare in modo più "profondo" senza aggiungere nuovi pesi. Zhipu afferma di aver raggiunto in questo modo un livello di intelligenza paragonabile a quello di modelli da 2 a 3 trilioni di parametri. Secondo l'azienda, inoltre, in test come GPQA-Diamond e MMLU-Pro il modello svolge lo stesso lavoro con risposte più brevi dal 10 al 14 per cento.

Il modello offre una finestra di contesto da 1 milione di token e ora sa leggere anche le immagini: gli sviluppatori possono fornire lo screenshot di un'interfaccia difettosa insieme al codice.

## Dove si può usare?

Per ora GLM-5.4 è disponibile con l'abbonamento GLM Coding Plan, nello strumento di programmazione ZCode e sul sito di chat di Z.ai. Secondo WinBuzzer la quota degli abbonati è aumentata del 50 per cento e il costo di 10.000 token in ingresso è sceso da 6,9 a 4,6 crediti. L'API generale e i pesi aperti arriveranno invece dopo una valutazione di sicurezza.

Le misurazioni indipendenti sono più prudenti: nel test di programmazione KingBench 4 citato da WinBuzzer, il modello si è classificato settimo su 19 modelli, ottenendo il 55,3 per cento dei punti. L'azienda non ha ancora pubblicato risultati dettagliati dei test.

## Perché è importante?

Mettere gli strati in ciclo si sta affermando come un nuovo modo per rendere i modelli più potenti senza ingrandirli, e una delle prime aziende a provarci su larga scala è cinese. Per capire quanto sia grande un contesto da 1 milione di token basta guardare [il primo floppy disk da 80 KB](/yazi/ilk-disket-ibm-1971-80-kb/).
