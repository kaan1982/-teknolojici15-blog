---
title: "Gli agenti di IA di DeepMind trovano due debolezze nella vecchia crittografia RSA a 1024 bit"
excerpt: "Google DeepMind ha annunciato che agenti di IA supervisionati da esseri umani hanno trovato due debolezze nel vecchio RSA a 1024 bit; le chiavi da 2048 bit in su non sono interessate."
hook: "Due passi di crittoanalisi in settimane"
fact: "~1.600 volte"
factLabel: "Miglioramento teorico, nello scenario a 32 byte"
category: "Notizie"
---
Il 6 novembre Google DeepMind ha annunciato che i suoi agenti di intelligenza artificiale hanno trovato due importanti debolezze nei vecchi sistemi di crittografia RSA a 1024 bit. Gli agenti hanno lavorato sotto la supervisione di esseri umani. Lo studio è stato guidato da Dj Dvijotham e Abhradeep Thakurta di DeepMind; del gruppo facevano parte anche gli esperti di crittoanalisi Nadia Heninger (UC San Diego e Inria) ed Emmanuel Thomé (Inria).

## Prima debolezza: il padding nelle firme

Nelle firme digitali si aggiunge al messaggio un blocco di dati fisso chiamato "padding". Secondo la ricerca, se un attaccante controlla circa metà o più del blocco firmato, il padding non offre quasi nessuna protezione aggiuntiva. Gli agenti lo hanno provato in un ambiente protetto contro una chiave di test a 1024 bit già risolta in un precedente studio accademico. Il risultato è stato riprodotto con 3,5 volte meno tempo di processore e con meno di un millesimo della potenza necessaria per violare direttamente la chiave.

Nello scenario difficile, in cui l'attaccante controlla solo un'impronta di 32 byte, gli agenti hanno invece trovato un nuovo algoritmo. Si stima che offra un miglioramento di circa 1.600 volte rispetto al miglior metodo noto; questa cifra non è una velocità misurata, ma un calcolo teorico.

## Seconda debolezza: la fattorizzazione in blocco

Poiché le chiavi RSA hanno per lo più la stessa dimensione, un grande calcolo preliminare può essere distribuito su molte chiavi. Con l'algoritmo trovato dagli agenti, il costo medio per fattorizzare ogni chiave a 1024 bit aggiuntiva scende di circa 30 volte rispetto ai precedenti metodi in blocco.

DeepMind sottolinea che i risultati non riguardano la crittografia di oggi. Banche, app di messaggistica e aggiornamenti software usano quasi ovunque chiavi da 2048 bit o più grandi. Pushmeet Kohli, vicepresidente per la scienza dell'azienda, ha detto che la crittoanalisi assistita dall'IA potrà aiutare a mettere alla prova i sistemi futuri.

## Perché è importante?

Nella crittoanalisi i progressi richiedono di solito anni. Il fatto che gli agenti di IA li riducano a settimane indica che i sistemi che usano ancora chiavi vecchie dovrebbero accelerare la transizione. Raccontiamo la breve storia delle password nel nostro articolo sulla [prima password informatica](/yazi/ilk-bilgisayar-sifresi-ctss/).
