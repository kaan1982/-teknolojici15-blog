---
title: "L'emulatore cloud locale e gratuito di AWS è stato scritto da cima a fondo da agenti di intelligenza artificiale"
excerpt: "AWS Emulator simula sul computer oltre 200 servizi AWS; secondo Amazon, nemmeno una riga del codice è stata scritta o revisionata da esseri umani."
hook: "L'agente scrive il codice e lo corregge"
fact: "200+"
factLabel: "Servizi AWS emulati"
category: "Notizie"
---
L'11 novembre Amazon Web Services ha rilasciato AWS Emulator, uno strumento gratuito per sviluppatori. Lo strumento emula sul computer dello sviluppatore oltre 200 servizi del cloud AWS. In questo modo il software può essere testato senza aprire un account AWS e senza pagare fatture del cloud. Ciò che colpisce davvero, però, è chi ha scritto lo strumento.

## Niente esseri umani, solo agenti

Secondo Matt Goldberg, principal engineer senior di AWS, l'intero emulatore è stato scritto da agenti di intelligenza artificiale autonomi; il suo team non ha né scritto né revisionato nemmeno una riga di codice. Il progetto è nato come esperimento di un fine settimana di Goldberg con Kiro, lo strumento di programmazione di Amazon: la prima emulazione di un semplice servizio di code di messaggi è arrivata in circa 15 minuti.

Oggi il lavoro è portato avanti da tre squadre di agenti. La prima squadra scrive test e li convalida sul vero AWS. La seconda esegue gli stessi test sull'emulatore e apre segnalazioni di bug per le differenze. Nella terza, ogni agente corregge un singolo bug. Le modifiche non vengono integrate senza superare i controlli di compilazione, di standard del codice, di sicurezza e di compatibilità con le versioni precedenti. Secondo Goldberg, centinaia di agenti chiudono migliaia di bug al giorno. Il compito degli esseri umani è progettare i test, le regole e questi controlli.

## I limiti

Il codice è scritto in Rust ed è stato pubblicato con la licenza CC0, che equivale al pubblico dominio. Amazon raccomanda di non usare lo strumento per sistemi in produzione o per test di sicurezza: non valuta le policy di autorizzazione come il vero AWS e non emula ancora il throttling, le interruzioni e le differenze tra regioni. Le operazioni non supportate restituiscono un errore HTTP 501 e la raccolta dei dati di utilizzo è attiva per impostazione predefinita.

## Perché è importante?

È uno dei rari casi in cui una grande azienda dichiara apertamente di aver prodotto, senza intervento umano, un prodotto destinato a un uso diffuso. Il baricentro dell'ingegneria del software potrebbe spostarsi dallo scrivere codice al costruire test che ne misurano la correttezza. Per la storia del primo "bug" nel software, date un'occhiata al nostro articolo sul [primo bug informatico](/yazi/ilk-bilgisayar-bocegi-1947/).
