---
title: "Il computer dell'Apollo 11: cosa significa davvero \"4 KB di memoria\"?"
excerpt: "Il computer che portò l'Apollo 11 sulla Luna aveva circa 4 KB di RAM. I programmi stavano in una ROM da circa 72 KB, intrecciata a mano con dei fili."
hook: "Sono scesi sulla Luna con 4 KB di RAM"
fact: "4 KB"
factLabel: "Memoria cancellabile (RAM) dell'AGC"
category: "Computer"
---
Avrai sicuramente sentito dire che "la memoria del computer che andò sulla Luna era più piccola di una fotografia". Anche nel video abbiamo detto "4 KB". Quella cifra è corretta, ma da sola è incompleta. Perché l'Apollo Guidance Computer (AGC) aveva in realtà due memorie distinte, e "4 KB" descrive soltanto quella più piccola.

Apriamo insieme questo famoso numero.

## Che cosa indica esattamente "4 KB"?

La memoria di lavoro dell'AGC, cioè la memoria cancellabile che oggi chiameremmo RAM, era composta da 2.048 "parole". Ogni parola era lunga 16 bit: 15 bit di dati e 1 bit di parità per il controllo degli errori. Se contiamo una parola come 2 byte, 2.048 parole fanno circa 4 KB. Quindi "4 KB" è la dimensione del foglio di brutta su cui il computer faceva i calcoli durante il volo.

I programmi non stavano dentro questa memoria. Lì c'erano la posizione e la velocità istantanee, i contatori e i risultati intermedi passati tra un'attività e l'altra. La memoria era fatta di minuscoli anelli chiamati nuclei magnetici (core) e manteneva il contenuto anche quando mancava la corrente.

I programmi stavano da tutt'altra parte: nella memoria fissa da 36.864 parole, cioè la ROM. Con lo stesso conto fa circa 72 KB. In breve, la frase più corretta è questa: l'Apollo 11 è sceso sulla Luna con circa 4 KB di RAM e circa 72 KB di ROM.

## I programmi erano intrecciati con un filo

La ROM dell'AGC era una memoria "core rope" (corda di nuclei) e veniva letteralmente intrecciata a mano. Se un filo passava dentro un nucleo magnetico, quel bit valeva 1; se lo aggirava passando di lato, valeva 0. Cioè il software veniva trasformato in hardware tessendolo come un tessuto.

Questo lavoro lo fecero i dipendenti di Raytheon a Waltham, nel Massachusetts. Secondo l'analisi dettagliata di Ken Shirriff, una parte importante delle assunte erano donne provenienti dall'industria tessile locale, scelte per la loro abilità nel cucito. Intrecciare un solo modulo richiedeva circa 8 settimane e costava 15.000 dollari. Ogni modulo conteneva 6 mila parole e sei moduli formavano in tutto le 36.864 parole.

L'effetto collaterale era importante: il software doveva essere congelato mesi prima del volo. Non esisteva una patch dell'ultimo minuto, perché correggere un errore significava rintrecciare.

> **Lo sapevi?** Sull'Apollo 11 gli AGC erano due, non uno: uno nel Modulo di Comando e l'altro nel Modulo Lunare. Ciascuno pesava circa 32 kg e funzionava con un orologio al quarzo da 2,048 MHz.

## L'allarme suonato pochi minuti prima dell'allunaggio

Durante la discesa del 20 luglio 1969, il computer del Modulo Lunare mostrò sullo schermo prima un allarme 1202 e poi un 1201. Entrambi indicavano un "overflow dell'esecutore": al computer era stato dato più lavoro di quanto potesse sostenere. Secondo il racconto dettagliato di Wikipedia, la causa erano i falsi segnali del radar di rendez-vous, lasciato in standby, che tenevano occupato il processore. Il problema non era né un errore di programmazione, né un errore del pilota, né un guasto hardware. Nasceva sostanzialmente da un difetto nel documento di interfaccia tra due sistemi.

La parte davvero interessante è cosa fece il software in quella situazione. L'AGC lavorava con uno scheduler basato sulle priorità. Con il sovraccarico si riavviò rapidamente, abbandonò i lavori a bassa priorità e continuò con i compiti critici, come la gestione della discesa. Cioè quella famosa piccola memoria bastò perché era gestita con intelligenza.

C'era un altro dettaglio che rese le cose ancora più difficili. Il comando 1668 che Buzz Aldrin inserì nel computer durante la discesa aggiunse carico a un processore già in difficoltà e fece scattare un altro allarme 1202. Il software superò anche questo allo stesso modo e l'Eagle (Aquila) toccò la superficie lunare.

Il software fu sviluppato al MIT Instrumentation Laboratory. Il software del Modulo di Comando (COLOSSUS) e quello del Modulo Lunare (LUMINARY) furono portati avanti da squadre diverse. La realizzazione dei dettagli toccò al team guidato da Margaret Hamilton.

## Allora / oggi

| Apollo Guidance Computer (1969) | Lo smartphone di oggi |
|---|---|
| Circa 4 KB di memoria cancellabile (RAM) | Gigabyte di RAM |
| Circa 72 KB di ROM intrecciata a mano | Centinaia di gigabyte di archiviazione |
| Mesi di intreccio per un aggiornamento software | Aggiornamenti che si installano da soli di notte |
| Circa 32 kg | Sta nel palmo di una mano |

## La vera lezione di quel numero

La cifra "4 KB" viene spesso raccontata come "guarda com'era primitivo". Il succo della storia è invece l'opposto: la memoria limitata costrinse gli ingegneri a rendere conto di ogni bit. Per questo nacque un software che dava priorità ai compiti e si riprendeva da solo sotto sovraccarico.

I dispositivi che abbiamo in tasca oggi hanno una quantità di memoria incomparabilmente maggiore, ma la maggior parte delle app non è scritta con altrettanta cura. Un singolo aggiornamento di un'app di messaggistica può essere molte volte più grande di tutto il software dell'Apollo.

Secondo te sono i limiti a formare ingegneri migliori, o l'abbondanza?
