---
title: "Gli intermediari leggevano le richieste all'IA: OpenRouter esclude 3 fornitori"
excerpt: "Una ricerca di Dragos con 2 milioni di richieste trappola ha svelato furti di prompt e di chiavi presso fornitori di IA a basso costo; OpenRouter ha escluso 3 fornitori."
hook: "Qualcun altro può leggere le tue domande"
fact: "2 milioni"
factLabel: "richieste trappola inviate nello studio"
category: "Notizie"
---
L'azienda di sicurezza informatica Dragos ha condotto un esperimento insolito per misurare in quali mani finiscono, lungo il percorso, le richieste inviate ai modelli di intelligenza artificiale. I risultati hanno spinto all'azione OpenRouter, che offre modelli diversi da un'unica interfaccia: la piattaforma ha tolto tre fornitori dalla lista e ha revocato la certificazione "Zero Data Retention" a 125 endpoint.

## Come è stato fatto l'esperimento?

Tra luglio e novembre 2026 i ricercatori hanno inviato circa 2 milioni di richieste. In ognuna hanno inserito password false e link nascosti che si tradiscono non appena vengono usati, cioè trappole "canarino". Secondo The Decoder è emerso che almeno tre fornitori erano stati compromessi da aggressori e che i dati venivano rubati da mesi. Nessuno dei fornitori se n'era accorto finché Dragos non li ha avvisati.

Nel caso più grave gli aggressori hanno raccolto centinaia di chiavi AWS; alcune le hanno provate nel giro di poche ore. Ad alcuni intermediari che funzionano come un marketplace non è servito nemmeno trovare una falla: bastava mettere in lista il modello al prezzo più basso e attivare la registrazione per leggere le richieste dei clienti. Si è visto anche che le impostazioni con la promessa "non conserviamo dati" venivano spesso violate.

## Cosa ha fatto OpenRouter?

L'azienda ha inviato un'e-mail agli utenti coinvolti, avvertendoli che le loro richieste ai modelli MiniMax potrebbero essere state lette da terzi. Fornitori come Novita, Phala e Together hanno pubblicato rapporti preliminari.

## Perché è importante?

Ogni password, porzione di codice o documento aziendale incollato in una chat con l'IA può passare per più di un intermediario prima di arrivare al modello, e ogni intermediario può vedere l'intera richiesta. Il consiglio di Dragos è chiaro: non mettere mai credenziali reali nelle richieste e non lasciare che sia il prezzo a decidere il percorso dei dati. Chi è curioso di sapere come è nata la password può dare un'occhiata al nostro [articolo sulla prima password informatica](/yazi/ilk-bilgisayar-sifresi-ctss/).
