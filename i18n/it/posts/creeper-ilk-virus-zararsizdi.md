---
title: "Il primo \"virus\" informatico, Creeper, non cancellò nulla"
excerpt: "Creeper, che nel 1971 girava su ARPANET, non toccò alcun dato: scrisse solo una sfida sullo schermo. Per catturarlo fu scritto Reaper, il primo antivirus."
hook: "Il primo virus non cancellò niente!"
fact: "1971"
factLabel: "Creeper fu scritto alla BBN"
category: "Computer"
---

Quando si dice "virus informatico" ci viene in mente qualcosa che cancella file, prende in ostaggio i dati, blocca lo schermo. Eppure il programma che la maggior parte delle fonti cita come "il primo virus" non fece nulla di tutto questo. Si limitava a scrivere sullo schermo una piccola sfida e a passare al computer successivo.

Si chiamava Creeper, cioè "rampicante".

## 1971, BBN e ARPANET

Creeper fu scritto nel 1971 da Bob Thomas, come programma sperimentale, alla BBN (Bolt Beranek and Newman) in Massachusetts. BBN era l'azienda che ebbe un ruolo chiave nella creazione di ARPANET, considerata la progenitrice di internet.

Il programma si spostava tra i mainframe DEC PDP-10 collegati ad ARPANET e con il sistema operativo TENEX. Secondo Wikipedia, in quel periodo i sistemi che su ARPANET usavano TENEX erano 28, cioè al massimo questi erano i computer che Creeper poteva raggiungere.

L'obiettivo vero di Bob Thomas non era fare del male, ma rispondere a una domanda: un programma può spostarsi da solo da una macchina all'altra in rete?

## L'unica frase sullo schermo

Quando Creeper arrivava su una macchina, stampava sul teletype (il terminale con stampante) questo messaggio:

"I'M THE CREEPER : CATCH ME IF YOU CAN"

In italiano: "Sono il Rampicante: prendimi se ci riesci." Tutto qui. Non cancellò nessun file, non danneggiò nessun dato. Wikipedia riferisce che gli operatori collaborarono a questo esperimento e che non furono segnalati effetti indesiderati.

La prima versione in realtà non si copiava nemmeno: passando da una macchina all'altra si spostava senza lasciare copie dietro di sé. Più tardi Ray Tomlinson, noto in seguito come l'inventore dell'e-mail, modificò il programma perché si copiasse sulle altre macchine. Questa versione che si replica è considerata il primo worm (verme) informatico generalmente riconosciuto.

## Virus o worm?

Qui serve una piccola ma importante correzione. Tecnicamente Creeper non era un virus, ma un worm. Il virus si diffonde attaccandosi a un altro programma o file; il worm invece si muove da solo in rete. Creeper rientra nel secondo gruppo. Eppure molte pubblicazioni lo citano come "il primo virus informatico del mondo"; anche una citazione del Guardian riportata da Wikipedia usa proprio questa espressione. È la versione popolare del concetto, ma tecnicamente l'etichetta corretta è "il primo worm".

Il termine "virus informatico" stesso nacque 12 anni dopo Creeper. Secondo l'articolo di WeLiveSecurity di ESET, il 3 novembre 1983 Fred Cohen, studente alla University of Southern California, scrisse un programma che si diffondeva da solo; il suo professore Len Adleman, paragonando questa diffusione simile a un'"infezione" ai virus della biologia, propose il termine. Cohen preparò il programma su un VAX 11/750 con Unix, con circa otto ore di lavoro.

> **Lo sapevi?** Ray Tomlinson, che inventò l'e-mail e portò il simbolo @ negli indirizzi, è anche il creatore del programma considerato il primo antivirus. Cioè lo strumento più amato di internet e il suo primo "addetto alle pulizie" li scrisse la stessa persona.

## Reaper: il primo antivirus

Una volta che esisteva un programma capace di copiarsi in rete, nacque anche il bisogno di qualcosa che lo fermasse. Nel 1972 Ray Tomlinson scrisse un programma chiamato Reaper ("Mietitore"). Anche Reaper girava su ARPANET e dove trovava Creeper lo cancellava. Wikipedia lo descrive come il primo software antivirus.

In questa storia c'è una bella ironia: il primo antivirus del mondo era a sua volta un programma che girava da solo in rete. Cioè per catturare il "worm" ne era stato scritto un altro.

| Allora | Oggi |
|---|---|
| 1971: al massimo 28 macchine TENEX | Miliardi di dispositivi connessi |
| Una sola frase scherzosa sullo schermo | Ransomware, furto di dati |
| Reaper: un addetto alle pulizie con un solo obiettivo | Software di sicurezza aggiornato di continuo |

## La lunga ombra di un esperimento innocente

Creeper era innocuo, ma socchiuse una porta: se un programma poteva diffondersi da solo in rete, qualcuno poteva usare questo potere anche con cattive intenzioni. Nei decenni successivi andò proprio così e le parole "virus", "worm", "antivirus" entrarono nel nostro linguaggio quotidiano.

Oggi un ricercatore di sicurezza che lanciasse su internet un esperimento simile senza permesso finirebbe con ogni probabilità nei guai seri. L'ARPANET del 1971, invece, era una piccola comunità di ricercatori che si conoscevano, e l'esperimento, come riporta Wikipedia, si svolse con la collaborazione degli operatori.

Eppure il punto di partenza non era un attacco, ma la curiosità. Un ingegnere si chiese "chissà se si può fare?" e diede la risposta con una sola frase sullo schermo.

Secondo te, se Creeper fosse scritto oggi, sarebbe considerato un esperimento innocuo o una violazione di sicurezza?
