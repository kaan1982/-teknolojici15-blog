---
title: "OpenAI: GPT-6 ha progettato una proteina da solo, 35 tentativi su 322 hanno tenuto in laboratorio"
excerpt: "OpenAI ha annunciato che i modelli generalisti GPT-6 progettano forme di proteine senza chiamare un modello specializzato in biologia; in laboratorio 35 dei 322 progetti si sono legati al proprio bersaglio."
hook: "Un modello di chat ha progettato una proteina"
fact: "35/322"
factLabel: "progetti che si sono legati in laboratorio"
category: "Notizie"
---
Il 24 novembre, in un preprint, OpenAI ha annunciato che i modelli generalisti GPT-6 sono in grado di progettare proteine. Il punto cruciale dell'affermazione è questo: il modello produce forme tridimensionali di proteine senza chiamare modelli di biologia costruiti appositamente, ragionando soltanto con il testo ed eseguendo il codice che scrive da sé.

## Che cosa è successo in laboratorio?

Le proteine sono formate da catene di mattoncini chiamati amminoacidi; l'ordine della catena determina come la proteina si ripiega, e il ripiegamento determina quale lavoro svolge. Insieme al partner di ricerca Onava, OpenAI ha prodotto e testato davvero le piccole proteine (minibinder) progettate da GPT-6.2.

Il risultato: su 322 progetti provati contro cinque bersagli, 35, cioè il 10,9 per cento, si sono legati al proprio bersaglio. I bersagli erano PD-L1, IL-7Rα, TrkA, VEGF-A e IL-17A; 18 dei progetti che si sono legati sono arrivati dal solo bersaglio IL-17A. Nei compiti più facili, come scrivere una nuova sequenza di amminoacidi su una struttura già esistente, la percentuale era molto più alta: nella riprogettazione delle anse degli anticorpi si sono legati 128 frammenti su 182, e nei frammenti di anticorpi terapeutici 179 su 272.

## Quale parte non va esagerata?

Il modello ha prodotto la forma della catena, ma il resto del lavoro è rimasto ai vecchi strumenti: le sequenze le hanno proposte SolubleMPNN e ProteinMPNN, e quali candidati arrivassero al banco di laboratorio lo hanno filtrato Boltz-2, OpenDDE ed ESMFold2. OpenAI stessa scrive che non è dimostrato che i suoi modelli sappiano produrre una proteina dall'inizio alla fine da soli.

Nel prevedere la struttura di una proteina intera a partire da una sequenza il modello è ancora debole: il punteggio TM medio è 0,38 nel modello interno, contro lo 0,93 del modello specializzato ESMFold2. Anche i risultati di misura più forti arrivano da un modello interno di cui non si dice il nome e a cui nessuno ha accesso, e nessuno di essi è stato verificato fuori dall'azienda.

## Perché è importante?

Il legame è il primo passo sulla strada di un farmaco; selettività, stabilità e test di sicurezza vengono dopo. Resta però il fatto che un modello generalista riesca a lavorare nel campo di modelli addestrati da anni per un solo compito, e questo può cambiare il modo in cui da ora in poi verranno costruiti i software di laboratorio. Nello stesso testo OpenAI dice anche che questa capacità può essere usata per fare del male e di aver valutato i rischi per la biosicurezza con il proprio quadro di riferimento. Se vi incuriosiscono i giorni in cui i computer nascevano come calcolatrici della scienza, [la storia dell'ENIAC da 30 tonnellate](/yazi/eniac-30-ton/) è qui.
