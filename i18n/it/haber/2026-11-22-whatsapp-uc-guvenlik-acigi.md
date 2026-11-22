---
title: "WhatsApp chiude tre vulnerabilità: una potrebbe essere stata usata in truffe"
excerpt: "WhatsApp ha corretto tre vulnerabilità, tra cui una falla su Android che poteva far trapelare l'indirizzo IP e che si sospetta sia stata sfruttata in una campagna di truffe."
hook: "Un messaggio poteva rivelare il tuo IP"
fact: "3 falle"
factLabel: "vulnerabilità chiuse a novembre"
category: "Notizie"
---
WhatsApp ha annunciato il 20 novembre, con i suoi bollettini di sicurezza, di aver chiuso tre vulnerabilità. Una di queste è un bug di Android che l'azienda sospetta sia stato sfruttato in una campagna di truffe.

## Quali sono le vulnerabilità?

La prima è identificata dal codice CVE-2026-23871 e riguarda WhatsApp e WhatsApp Business per Android nelle versioni precedenti alla 2.26.17.4. Secondo Business Upturn, gli indirizzi esterni nelle risposte agli annunci "Click to WhatsApp" non venivano controllati a sufficienza. Quando un messaggio appositamente creato compariva in una chat, il dispositivo poteva rivelare il proprio indirizzo IP all'altra parte. WhatsApp ha detto di aver scoperto il bug mentre cercava di bloccare una campagna di truffe e di ritenere che un truffatore lo abbia usato per rendere più credibile il suo messaggio falso. Non è stato reso noto quante persone siano state colpite.

La seconda, CVE-2026-102769, è una SQL injection nelle versioni Android precedenti alla 2.26.35.74. Toccando un falso messaggio d'ordine inviato da un'app non ufficiale, alcuni file che WhatsApp conserva sul telefono potevano essere cancellati. La falla è stata segnalata da un ricercatore tramite il programma bug bounty di Meta.

La terza, CVE-2026-44908, riguarda la verifica dei certificati nella connessione con l'infrastruttura di calcolo riservato di Meta AI e interessava le app per Android, iOS e Mac. Per sfruttarla, un aggressore avrebbe dovuto trovarsi all'interno dell'infrastruttura stessa di Meta. WhatsApp precisa di non aver trovato prove che le ultime due vulnerabilità siano state usate in attacchi reali.

## Cosa fare?

Il consiglio dell'azienda è semplice: tenere aggiornati WhatsApp e il sistema operativo del telefono. Controllare gli aggiornamenti nello store delle app basta per chiudere queste falle.

## Perché è importante?

In un'app usata da miliardi di persone, la fuga di un indirizzo IP può permettere di stimare a grandi linee la posizione e aprire la porta a truffe mirate. Colpisce che i truffatori non si limitino più ai messaggi falsi, ma sfruttino anche i bug dell'app stessa. La storia della nascita di WhatsApp l'abbiamo raccontata nel nostro [articolo su Brian Acton](/yazi/whatsapp-brian-acton-facebook-reddi/).
