---
title: "Le app di Lovable scritte con l'IA hanno lasciato esposti passaporti e 200.000 chat"
excerpt: "La società di sicurezza tedesca Crissy Field è riuscita a leggere senza password i database di 24.664 siti creati con Lovable; dati di passaporti e oltre 200.000 chat erano esposti."
hook: "Niente login, niente password, dati pronti"
fact: "24.664"
factLabel: "Siti Lovable che inviano dati senza login"
category: "Notizie"
---
Sulla piattaforma Lovable, che promette di creare app senza saper programmare, semplicemente descrivendole a un'intelligenza artificiale, è emerso un grave problema di sicurezza. La società di sicurezza tedesca Crissy Field, in un'indagine condotta insieme al quotidiano economico Handelsblatt, ha reso noto di essere riuscita a leggere i database di migliaia di app create con Lovable senza effettuare alcun accesso.

## Cosa dicono i numeri?

I ricercatori hanno trovato nell'archivio web Common Crawl 159.041 progetti Lovable online tra dicembre 2025 e settembre 2026. Di questi, 34.545 usavano il servizio di database Supabase e 24.664 inviavano record del database all'apertura della pagina, senza chiedere alcun login all'utente. Con ulteriori richieste di lettura sono comparsi indirizzi e-mail in 10.560 tabelle su 7.403 siti. L'azienda precisa che non si tratta di un tasso di fuga certo: alcuni indirizzi potrebbero essere contatti pubblici o dati di test.

Tra i dati esposti ci sono oltre 1.000 record di passaporti di un fornitore di servizi, più di 80.000 profili e oltre 200.000 messaggi di chat di un forum tedesco sullo stile di vita, decine di migliaia di ordini di eventi e ristoranti con dati di pagamento e codici di biglietti ancora validi.

## Da dove nasce il problema?

Non c'è stato alcun attacco a Lovable o a Supabase. La chiave che Supabase invia al browser è pubblica per progettazione; la protezione dipende dalle regole di sicurezza a livello di riga nel database. Quando queste regole mancano o sono troppo permissive, chiunque veda la chiave può leggere le tabelle. Lovable afferma di non vedere alcun difetto nella propria IA, sostiene che si tratti di un problema di configurazione noto in tutto il settore e ricorda il proprio strumento di scansione di sicurezza. Non si sa se i dati siano stati usati in modo illecito.

## Perché è importante?

L'IA ha aperto a tutti la creazione di app, ma non ha portato la sicurezza in automatico. Chi non scrive codice dovrebbe far controllare i permessi di accesso a un esperto prima di raccogliere dati reali dei clienti. Uno dei primi casi di falle di sicurezza nella storia dell'informatica è raccontato nel nostro articolo sulla [prima password informatica](/yazi/ilk-bilgisayar-sifresi-ctss/).
