---
title: "Il problema del 2038: perché alcuni computer torneranno al 1901?"
excerpt: "Il tempo Unix a 32 bit si esaurirà il 19 gennaio 2038 alle 03:14:07 UTC e i sistemi più vecchi potrebbero credere che sia il 13 dicembre 1901. Che cos'è il problema del 2038 e come si risolve?"
hook: "I computer torneranno al 1901!"
fact: "03:14:07"
factLabel: "19 gennaio 2038, UTC: il limite dei 32 bit"
category: "Computer"
---
Alle soglie del 2000 il mondo parlava di un bug informatico chiamato "Y2K". Ora tocca a un'altra data: il 19 gennaio 2038. Quel giorno, un secondo dopo le 03:14:07 (UTC), alcuni vecchi computer potrebbero far saltare di colpo il calendario al 1901. Non è uno scenario di fantascienza, ma un semplice problema di matematica.

## Come contano il tempo i computer?

Unix e molti sistemi derivati non tengono il tempo come un orologio o un calendario, ma come un unico numero. Questo numero è formato dai secondi trascorsi dalla mezzanotte (UTC) del 1° gennaio 1970. Si chiama "tempo Unix".

Il problema è che in molti vecchi sistemi questo numero è memorizzato come intero con segno a 32 bit. Il valore massimo che un numero con segno a 32 bit può assumere è 2.147.483.647, cioè 2 elevato alla 31 meno 1. Quel numero di secondi corrisponde a circa 68 anni. "Con segno" significa che un bit è riservato a indicare se il numero è positivo o negativo. Per questo non tutti i 32 bit, ma 31, sono usati per la grandezza.

Aggiungendo 68 anni al 1970 si arriva al 2038. Il conto indica esattamente il 19 gennaio 2038, 03:14:07 UTC.

## Che cosa succederà un secondo dopo?

Un secondo dopo che il contatore ha raggiunto il valore massimo, va in overflow. Pensa ai vecchi contachilometri meccanici delle auto: dopo 999.999 tornano a 000.000. Qui succede qualcosa di simile, ma poiché il numero ha il segno, il valore diventa un numero negativo molto grande.

Un sistema colpito interpreta questo numero negativo come secondi contati all'indietro dal 1970. Risultato: la data appare come il 13 dicembre 1901, ore 20:45:52 (UTC). Un computer tornato di colpo indietro di 136 anni: certificati, timer, registri e confronti tra date possono cominciare a funzionare male.

> **Lo sapevi?** In alcuni software questo problema è emerso senza aspettare il 2038. Secondo Wikipedia, nel 2006 il software AOLserver è andato in crash superando il limite del 2038 perché aveva impostato un valore di timeout un miliardo di secondi nel futuro. Cioè qualsiasi programma che calcola "una data futura" può già sbattere contro il limite. Un limite simile dei 32 bit ha causato problemi anche a Microsoft Exchange nel 2022: il numero di versione di un aggiornamento è stato letto come un timestamp e, superato il limite, le funzioni di scansione antimalware si sono fermate.

## Chi è a rischio?

La grande maggioranza dei telefoni e dei computer moderni che usi ogni giorno ormai utilizza valori di tempo a 64 bit. Il vero rischio è nei sistemi che funzionano per molti anni senza essere aggiornati. Wikipedia evidenzia in particolare i sistemi legacy e quelli embedded: dispositivi di controllo industriale, alcuni apparati di rete, sistemi di bordo dei veicoli, cioè macchine installate una volta e poi dimenticate.

Poiché questi dispositivi non vengono aggiornati spesso, quando arriverà il 2038 potrebbe esserci ancora al loro interno un componente che conta il tempo a 32 bit.

| Tempo con segno a 32 bit | Tempo con segno a 64 bit |
|---|---|
| Valore massimo 2.147.483.647 | Un intervallo enormemente più ampio |
| Limite: 19 gennaio 2038 | Limite: circa 292 miliardi di anni dopo |
| Sistemi vecchi ed embedded | Sistemi operativi moderni |

## La soluzione: un contatore più grande

La difficoltà qui è più pratica che tecnica. Cambiare la dimensione del numero che tiene il tempo può influire su ogni programma, ogni formato di file e ogni campo di database che lo usa. Correggere una sola riga è facile; trovare e aggiornare tutto il software dentro un dispositivo può richiedere anni.

La soluzione, come idea, è semplice: tenere il tempo in un numero con segno a 64 bit. Secondo Wikipedia, questo sposta il momento dell'overflow a circa 292 miliardi di anni da oggi. Cioè ben oltre l'età attuale dell'universo.

Questa transizione è in corso da anni. Secondo una notizia di Phoronix del gennaio 2020, Linux 5.6 si preparava a essere la prima versione principale del kernel in grado di gettare le basi perché i sistemi a 32 bit funzionino anche dopo il 2038. Wikipedia precisa che Linux 5.6, uscito nel 2020, ha aggiunto il supporto del tempo a 64 bit sulle architetture a 32 bit. Perché funzioni, anche le applicazioni devono essere ricompilate con il tempo a 64 bit.

Un'altra proposta è rendere il numero senza segno (unsigned). Ma questo sposta il limite solo al 2106 e rompe l'uso delle date precedenti al 1970. Per questo la strada principale è considerata il passaggio ai 64 bit.

Il Y2K non si è trasformato in una catastrofe perché la gente ci ha lavorato in anticipo; secondo te, negli anni che mancano al 2038 si ripeterà lo stesso eroismo silenzioso?
