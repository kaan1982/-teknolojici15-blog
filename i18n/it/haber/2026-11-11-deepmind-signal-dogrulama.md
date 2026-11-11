---
title: "L'IA di DeepMind verifica in quattro settimane il codice della cifratura di Signal"
excerpt: "Il sistema AlphaProof Code di Google DeepMind ha verificato le proprietà di sicurezza fondamentali nel codice reale del protocollo Signal con dimostrazioni controllate da una macchina."
hook: "Il lavoro di anni in quattro settimane"
fact: "6 milioni di righe"
factLabel: "Dimostrazione scritta in linguaggio Lean"
category: "Notizie"
---
Il 10 novembre Google DeepMind ha presentato un nuovo sistema di intelligenza artificiale chiamato AlphaProof Code e ha annunciato anche il suo primo grande lavoro: dimostrare con la "verifica formale" le proprietà di sicurezza fondamentali del protocollo di messaggistica Signal. Oltre che nell'app Signal, il protocollo Signal è usato, in versioni modificate, anche in WhatsApp e Google Messages.

## Come funziona?

Nella verifica formale si dimostra matematicamente che un software rispetta una determinata regola di sicurezza in ogni situazione, e un programma per computer controlla la dimostrazione passo per passo. Normalmente questo lavoro richiede anni a team di esperti.

Con AlphaProof Code sono stati prima degli esperti umani di crittografia a scrivere che cosa andava dimostrato. Per esempio, che i messaggi successivi restino protetti anche se un dispositivo viene compromesso per un breve periodo. Poi agenti di IA che lavorano insieme hanno prodotto le dimostrazioni nel linguaggio formale Lean. Il risultato è una dimostrazione di oltre sei milioni di righe. Il lavoro del team di cinque persone è durato quattro settimane. Gli agenti hanno segnalato solo l'1 per cento del codice per un secondo controllo umano.

Per mostrare che il sistema sa davvero distinguere, il team ha reinserito in una copia isolata del codice due bug reali già corretti in passato. In entrambi i casi AlphaProof Code ha dimostrato che quelle versioni non erano sicure.

## I limiti

La verifica non copre l'intera app Signal, ma alcune proprietà di sicurezza selezionate del protocollo. Nelle parti esaminate non è stata trovata alcuna nuova vulnerabilità. Una dimostrazione è solida solo quanto le regole e le ipotesi scritte; per esempio, si presume che gli algoritmi di cifratura siano impeccabili. Anche il ricercatore di DeepMind Swarat Chaudhuri ha detto che la strada per estendere il metodo a tutto il software del mondo è ancora molto lunga. Google non ha reso noto il costo; le dimostrazioni e le regole vengono pubblicate come open source.

## Perché è importante?

L'intelligenza artificiale aiuta anche gli aggressori a trovare vulnerabilità. Usare la stessa tecnologia per dimostrare che un software è sicuro è un passo importante per chi difende. Se siete curiosi dei primi giorni della sicurezza informatica, leggete la storia della [prima password informatica](/yazi/ilk-bilgisayar-sifresi-ctss/).
