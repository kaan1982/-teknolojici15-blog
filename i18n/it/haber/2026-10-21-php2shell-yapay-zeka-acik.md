---
title: "L'IA ha trovato una falla critica in PHP, da cui dipende il 70% dei siti web"
excerpt: "Due falle chiamate PHP2Shell permettono di eseguire codice sul server senza effettuare l'accesso. Nella scoperta sono stati usati modelli come GPT-5.6 Sol e Gemini 4 Argon."
hook: "L'IA ha trovato la falla enorme di PHP"
fact: "CVSS 9,2"
factLabel: "Punteggio più alto delle falle PHP2Shell"
category: "Intelligenza artificiale"
---
Il 21 ottobre gli sviluppatori di PHP hanno pubblicato una patch urgente per due vulnerabilità critiche nel motore centrale del linguaggio. Le falle, battezzate "PHP2Shell" e registrate come CVE-2026-109618 e CVE-2026-109619, sono state scoperte con l'aiuto di strumenti di intelligenza artificiale.

## Cos'è successo?

Secondo Fortune, la società di test di sicurezza basati su IA Calif ha trovato il primo anello della catena il 1° agosto con GPT-5.6 Sol; Wiz ha individuato in modo indipendente la prima falla il 19 agosto e l'ha segnalata al team di sicurezza di PHP il 24 agosto. Nella scoperta sono stati usati lo strumento di Wiz, Wiz Atlas, e i modelli GPT-5.6 Sol di OpenAI e Gemini 4 Argon di Google.

Le vulnerabilità permettono a un aggressore di eseguire codice da remoto sul server senza effettuare l'accesso e di sottrarre dati dalla memoria. Secondo Wiz, quasi ogni versione di PHP uscita nell'ultimo decennio, fino alla 5.4, è interessata. Il punteggio di gravità più alto è 9,2 sulla scala CVSS. PHP funziona dietro circa il 70% dei siti web del mondo; il solo WordPress gestisce grosso modo il 40% dei siti. Secondo l'articolo aggiornato di Fortune, dopo la patch le falle hanno iniziato a essere sfruttate su larga scala.

## Perché è importante?

È uno degli esempi più concreti del fatto che, nella ricerca sulla sicurezza, l'intelligenza artificiale non è più solo un aiuto, ma può essere chi fa la scoperta. Ma gli stessi strumenti sono anche nelle mani degli aggressori, e il tempo tra l'uscita della patch e l'inizio dello sfruttamento si accorcia. Ogni proprietario di un sito che usa PHP deve aggiornare subito il proprio server. In un quadro più ampio, gli errori nascosti nel vecchio codice che funziona da decenni su internet possono emergere molto più in fretta. La storia del primo programma che girava da solo in rete l'abbiamo raccontata nell'[articolo su Creeper](/yazi/creeper-ilk-virus-zararsizdi/).
