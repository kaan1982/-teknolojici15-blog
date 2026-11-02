---
title: "DeepSeek rende open source Super-Agent, l'agente che ascolta le chat del team e scrive codice"
excerpt: "DeepSeek ha pubblicato con licenza MIT il codice di Super-Agent, un agente di programmazione sperimentale che segue le richieste su GitHub e Feishu e apre pull request."
hook: "L'agente di codice che si mette al lavoro senza essere chiamato"
fact: "MIT"
factLabel: "La licenza open source di Super-Agent"
category: "Notizie"
---
L'azienda cinese di intelligenza artificiale DeepSeek ha pubblicato il 31 ottobre su GitHub il codice di Super-Agent, un agente di programmazione sperimentale pensato per i team di sviluppo software. Secondo Bloomberg, con questo agente l'azienda punta a competere con strumenti come Claude Code di Anthropic.

## Che cosa fa?

Super-Agent lavora su un singolo repository GitHub. Ascolta le conversazioni su GitHub e, facoltativamente, le chat di gruppo su Feishu, l'app di messaggistica aziendale di ByteDance. Quando un membro autorizzato del team chiede un lavoro, l'agente apre un'attività separata nella propria sessione, svolge il compito e pubblica il risultato, per esempio una pull request, sotto la conversazione da cui è arrivata la richiesta. I lavori che richiedono una decisione umana vengono invece elencati in un pannello web.

Secondo il manuale del progetto, l'obiettivo è produrre lavoro chiedendo al team "la minore attenzione possibile". Il documento sulla filosofia di DeepSeek sottolinea che l'agente entra in azione solo quando gli viene chiesto o quando lo permette una regola fissata dal team. L'azienda avverte che un agente che lavora per conto di tutto il team può anche sprecare l'attenzione di quel team.

Il codice è stato pubblicato con licenza MIT: chiunque può scaricarlo, modificarlo e usarlo anche a fini commerciali. Nei due giorni successivi alla pubblicazione il repository ha raccolto più di 9.000 stelle.

## Quali sono i limiti?

DeepSeek definisce Super-Agent un "prototipo di ricerca" e scrive chiaramente che non si tratta di un prodotto ufficiale. La versione open source non è la stessa che l'azienda usa internamente. Alcune idee presenti nell'annuncio non sono ancora nel codice. Il documento ammette anche che problemi difficili come autorizzazioni, revisione e fiducia non sono stati risolti; agli utenti viene chiesto di esaminare il codice prima di eseguirlo.

## Perché è importante?

Finora gli agenti di programmazione sono stati per lo più strumenti che aspettano il comando di un singolo sviluppatore. Super-Agent prova invece l'idea di un "compagno di squadra" che si inserisce nella chat del team e si fa carico del lavoro da solo, e lo fa in modo aperto, così che chiunque possa esaminarlo. Se l'idea prende piede, la domanda su quanta autorità dare agli agenti salirà in cima all'agenda dei team di sviluppo. Abbiamo raccontato che il primo "bug" del software era una vera falena nel nostro articolo [La falena del 1947](/yazi/ilk-bilgisayar-bocegi-1947/).
