---
title: "Google presenta due nuove TPU: la 8tx cifrata e la 8i Max a doppio chip"
excerpt: "Google ha aggiunto all'ottava generazione di TPU la TPU 8tx, che protegge i dati anche durante l'elaborazione, e la TPU 8i Max, che unisce due chip in un unico package."
hook: "Due chip in un package"
fact: "2 volte"
factLabel: "Aumento della larghezza di banda della memoria nella 8i Max"
category: "Notizie"
---
Il 9 novembre Google ha aggiunto due nuovi sistemi all'ottava generazione dei suoi acceleratori TPU (Tensor Processing Unit), progettati internamente: TPU 8tx e TPU 8i Max. Ad aprile l'azienda aveva presentato la TPU 8t per l'addestramento e la TPU 8i per l'inferenza. La famiglia arriva così a quattro sistemi nello stesso anno.

## TPU 8tx: cifratura durante l'elaborazione

La TPU 8tx usa lo stesso silicio della TPU 8t, ma aggiunge il "confidential computing" a livello hardware. L'obiettivo è che i dati e i pesi del modello restino protetti anche mentre vengono elaborati. Il chip viene abbinato a server con processori AMD EPYC di quinta generazione. Google parla di una latenza fino a 2 volte inferiore rispetto alla TPU 8t e di una perdita di prestazioni quasi nulla dovuta al livello di sicurezza; per queste affermazioni, però, non esiste ancora un test indipendente. Il pubblico di riferimento sono le aziende soggette a regolamentazione e gli enti pubblici che lavorano con dati sensibili.

## TPU 8i Max: due chip, un solo package

La TPU 8i Max unisce due chip TPU 8i in un unico package. Secondo Google, rispetto a una singola TPU 8i questo raddoppia la potenza di calcolo, la memoria SRAM sul chip e la larghezza di banda della memoria HBM. Poiché nello stesso spazio del rack entra il doppio del silicio, nel data center aumenta anche la potenza di calcolo per metro quadrato e per watt. Mark Lohmeyer, dirigente di Google Cloud, ha paragonato questo approccio all'aggiunta di nuove corsie a un'autostrada.

Google non ha fornito informazioni su prezzi, data di disponibilità generale o regioni. Secondo quanto riportato da Data Center Knowledge, alcuni clienti potranno installare la TPU 8tx nei propri data center; Google non lo ha confermato ufficialmente.

## Perché è importante?

Tra i rivali più forti di Nvidia nel mercato dei chip ci sono le aziende cloud che progettano i propri chip. Il fatto che Google abbia lanciato quattro diversi sistemi TPU in un anno mostra che i chip personalizzati si stanno ormai differenziando in base al tipo di lavoro, invece di essere un unico prodotto generico. Per gli umili inizi dell'avventura hardware di Google, leggete il nostro articolo sul [server di Lego](/yazi/google-lego-sunucu/).
