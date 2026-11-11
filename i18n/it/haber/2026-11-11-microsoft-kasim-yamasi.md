---
title: "Microsoft chiude oltre 1.000 falle a novembre; una vulnerabilità di Outlook era già sfruttata"
excerpt: "L'aggiornamento di sicurezza di novembre di Microsoft corregge 1.093 vulnerabilità; tra queste c'è anche una falla di Outlook che gli aggressori stanno già sfruttando."
hook: "Mille falle in un mese"
fact: "1.093"
factLabel: "Vulnerabilità nell'aggiornamento di novembre"
category: "Notizie"
---
Il 10 novembre Microsoft ha pubblicato il pacchetto di novembre dell'aggiornamento di sicurezza che rilascia ogni secondo martedì del mese. Il pacchetto corregge 1.093 vulnerabilità in 287 prodotti e componenti. Nei conteggi che includono anche le falle del browser Edge, il numero sale a 1.235.

## La distribuzione delle vulnerabilità

Delle vulnerabilità, 63 sono di livello "critico" e 1.029 di livello "importante". Quasi la metà (535) è del tipo che consente a un aggressore di elevare i propri privilegi nel sistema, mentre 296 permettono di eseguire codice da remoto. Il maggior numero di falle è stato trovato in Word, Excel e SQL Server.

Pacchetti così enormi stanno diventando la norma: l'aggiornamento di ottobre era ancora più grande, con 1.411 vulnerabilità. Secondo l'analisi di Netizen, parte dell'aumento deriva dal fatto che Microsoft usa strumenti basati sull'intelligenza artificiale per la ricerca delle falle.

## La falla di Outlook usata negli attacchi

La voce più urgente del pacchetto è la vulnerabilità di Outlook CVE-2026-124194. Microsoft ha confermato che la falla è stata sfruttata in attacchi prima dell'uscita della patch. L'aggressore induce la vittima ad aprire un file preparato appositamente. Outlook si collega al server dell'aggressore senza mostrare l'avviso sui contenuti esterni e fa trapelare l'hash della password dell'utente (NTLMv2). Con questa informazione l'aggressore può spacciarsi per l'utente. Il riquadro di anteprima non è un vettore d'attacco; il file deve essere aperto.

La vulnerabilità ha un punteggio di 6,5 e Microsoft la classifica come "moderata". I prodotti interessati sono Office LTSC 2021, Office LTSC 2024 e Microsoft 365 Apps. Non è stato reso noto chi siano gli aggressori e le vittime. Secondo Tenable, il ricercatore che ha scoperto la falla si è fatto aiutare dal modello Claude di Anthropic.

## Perché è importante?

Chiunque usi Windows e Office, soprattutto le aziende, dovrebbe installare l'aggiornamento il prima possibile. Allo stesso tempo, il fatto che l'IA acceleri la scoperta delle falle significa che anche le patch diventano più grandi. Se vi chiedete da dove venga il concetto di "bug" informatico, leggete il nostro articolo sul [primo bug informatico](/yazi/ilk-bilgisayar-bocegi-1947/).
