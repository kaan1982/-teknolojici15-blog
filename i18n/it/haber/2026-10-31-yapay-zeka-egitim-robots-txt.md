---
title: "Quattro giganti dell'IA si uniscono su un segnale robots.txt: \"Non addestrarti su di me\""
excerpt: "OpenAI, Google, Microsoft e Anthropic supporteranno un segnale robots.txt comune che permette ai siti di escludersi dall'addestramento dell'IA con una sola riga."
hook: "Dire no all'IA con una riga"
fact: "4 aziende"
factLabel: "Colossi che sostengono il segnale"
category: "Notizie"
---
Il 30 ottobre OpenAI, Google, Microsoft e Anthropic hanno annunciato che supporteranno un segnale comune che permette ai siti web di sottrarre i propri contenuti all'addestramento dell'IA con una sola impostazione. Finora il proprietario di un sito doveva bloccare separatamente nel file robots.txt il crawler di ciascuna azienda.

## Cosa è successo?

Il nuovo segnale si chiama `__usage_ai-training`. Il proprietario lo scrive nel file robots.txt come una normale regola, dicendo in pratica: "non usare i miei contenuti per addestrare modelli di IA". La proposta è stata presentata all'Internet Engineering Task Force (IETF) come bozza scritta da Kevin Kelley, responsabile degli standard di Anthropic. Non è ancora uno standard definitivo; se non viene aggiornata, la bozza scade a maggio 2027.

I tempi delle aziende sono diversi. Anthropic ha detto di aver iniziato ad applicarlo. Il supporto di OpenAI arriverà nei prossimi mesi. Google e Microsoft puntano al 2027. Per Bing, Microsoft aggiunge anche un controllo separato che distingue l'addestramento dal "grounding", cioè dal chatbot che consulta una fonte mentre risponde. Google ha spiegato che tratterà i siti che usano questo segnale senza aver scritto una propria regola Google-Extended come se avessero bloccato Google-Extended. Meta si è detta interessata a un segnale comune, ma non ha detto se lo rispetterà.

## Perché è importante?

Da anni gli editori lamentano che i loro contenuti vengono usati senza permesso per addestrare modelli; il New York Times ha fatto causa a OpenAI proprio per questo. Un segnale di una riga semplifica molto le cose ai piccoli siti. Ma ha dei limiti: il rispetto è volontario, non ci sono controlli né sanzioni, e i laboratori più piccoli e i progetti open source restano fuori dall'accordo. Inoltre il segnale riguarda solo l'addestramento; non tocca problemi come i riassunti dell'IA che riducono i visitatori diretti ai siti.

## Un legame con la storia

La regola robots.txt nacque nel 1994, quando il web era ancora giovanissimo, per dire ai bot "qui non entrare". Abbiamo raccontato dove è nato il web nel nostro articolo [Il primo sito web è ancora online: la storia di info.cern.ch](/yazi/ilk-web-sitesi-hala-yayinda-1991/). Trent'anni dopo, quello stesso piccolo file è diventato un tavolo di trattativa dell'era dell'IA.
