---
title: "Hackerato il fornitore di IA Fireworks; esposte chat di Notion AI"
excerpt: "Gli aggressori sono entrati nei sistemi di archiviazione di Fireworks AI; colpite le chat di intelligenza artificiale di meno dell'1% degli spazi di lavoro Notion."
hook: "Una copia della chat stava altrove"
fact: "MENO DELL'1%"
factLabel: "Spazi di lavoro Notion colpiti"
category: "Notizie"
---
Notion, l'app per note e spazi di lavoro, ha comunicato ad alcuni clienti che i registri delle loro chat con l'intelligenza artificiale sono stati esposti in una violazione di dati. La fuga non è avvenuta nei sistemi di Notion, ma presso Fireworks AI, il fornitore di infrastruttura che Notion usa per far girare modelli di intelligenza artificiale a pesi aperti.

## Come è avvenuto l'attacco?

A ottobre Fireworks è stata presa di mira due volte: una con credenziali interne sottratte e una tramite un fornitore cloud esterno che ospita le macchine di ricerca e sviluppo dell'azienda. Il 24 ottobre, per questa via, gli aggressori hanno eseguito un carico di lavoro non autorizzato e hanno raggiunto alcuni sistemi di archiviazione. Fireworks afferma di aver contenuto l'incidente lo stesso giorno e che le prove indicano un gruppo mosso dal denaro che rivende accessi ai modelli ottenuti in modo illecito. All'inizio di novembre Fireworks ha comunicato a Notion che tra quei dati c'erano anche registri di chat.

## Quali dati sono stati colpiti?

I registri esposti erano chat di Notion AI classificate per la funzione Insights, che mostra ai clienti di Notion come usano l'intelligenza artificiale. Notion ha spiegato che è stato colpito meno dell'1% degli spazi di lavoro e che nella maggior parte dei registri non c'erano informazioni riconducibili a un utente o a un'azienda. L'azienda ha interrotto il collegamento con Fireworks, ha disattivato la funzione Insights e ha chiesto ai clienti che avevano incollato nelle chat informazioni riservate come password o chiavi API di cambiarle subito. Fireworks, da parte sua, precisa di non aver rilevato conseguenze sul servizio di inferenza in tempo reale, che funziona con l'impostazione predefinita di "conservazione zero dei dati", e che il problema riguardava i processi batch che conservano dati e i sistemi di archiviazione.

## Perché è importante?

Quando si usa una funzione di intelligenza artificiale, i dati passano spesso dai server di altre aziende che non si vedono. Questo caso dimostra che una password incollata in una finestra di chat è al sicuro solo quanto l'anello più debole della catena di fornitura. Quanto sia antico il furto di password lo raccontiamo nel nostro articolo sulla [prima password informatica](/yazi/ilk-bilgisayar-sifresi-ctss/).
