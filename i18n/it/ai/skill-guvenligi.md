---
title: "Sicurezza delle skill: tutto quello che devi leggere prima di installarle"
excerpt: "Le skill possono eseguire codice e prelevare istruzioni da fonti esterne. Una guida su fonti fidate, controllo di SKILL.md e degli script, privilegi minimi e chiavi segrete."
hook: "Installare una skill è installare software"
fact: "13,4%"
factLabel: "Quota di skill con falle critiche (Snyk, 2026)"
category: "Intelligenza Artificiale"
---

Ciò che rende le skill così potenti le rende anche rischiose: una skill non porta con sé solo testo, ma anche codice eseguibile. Quando l'agente carica quella skill, segue le istruzioni al suo interno come fossero sue e può eseguirne gli script. Per questo il consiglio della documentazione di Claude si riassume in una frase: pensa all'installazione di una skill come all'installazione di software.

## Che cosa dicono le fonti ufficiali?

La sezione sulla sicurezza della documentazione di Claude è piuttosto diretta. Consiglia di usare le skill solo da fonti fidate, cioè quelle scritte da te o provenienti da Anthropic. Se devi usare una skill da una fonte sconosciuta, chiede di essere "estremamente prudente" e di controllarla da cima a fondo prima dell'uso.

Anche l'articolo di ingegneria di Anthropic va nella stessa direzione: per le skill che arrivano da fonti meno affidabili consiglia di esaminare i file inclusi, in particolare le dipendenze di codice e gli script, e di controllare le istruzioni che dicono di collegarsi a reti esterne. La documentazione sottolinea anche un rischio specifico: le skill che prelevano dati da indirizzi esterni sono pericolose, perché il contenuto scaricato può nascondere istruzioni malevole.

## Che cosa succede sul campo?

Questi avvertimenti non sono teorici. Nella ricerca "ToxicSkills", pubblicata il 5 febbraio 2026, l'azienda di sicurezza Snyk ha analizzato 3.984 skill provenienti da ClawHub e skills.sh. I risultati:

| Riscontro | Numero |
|---|---|
| Skill analizzate | 3.984 |
| Con almeno un problema di sicurezza | 1.467 (36,82%) |
| Con almeno un problema critico | 534 (13,4%) |
| Payload malevolo confermato | 76 |

Secondo il rapporto, i dati di skills.sh riguardano solo le prime 100 skill selezionate di quel sito, mentre le cifre complete del mercato si riferiscono a ClawHub. Tra i tipi di attacco osservati ci sono istruzioni di installazione che spingono l'utente a scaricare ed eseguire software non fidato, comandi mascherati (camuffati con Base64 o Unicode) che inviano le credenziali all'attaccante, tentativi di disattivare i controlli di sicurezza e di installare backdoor. Nel 91% delle skill malevole confermate è stata usata la prompt injection.

> **Lo sapevi?** Secondo il Centro assistenza di Claude, le organizzazioni Enterprise possono attivare la scansione delle skill, che controlla le skill e i plugin caricati alla ricerca di contenuti malevoli. Ma è una rete di sicurezza, non sostituisce la lettura. Il modo migliore per capire cosa fa una skill è aprire e leggere da soli SKILL.md e gli script prima di installarla.

## Lista di controllo prima di installare

Un elenco pratico ricavato dai consigli della documentazione e dai riscontri sul campo:

1. **Verifica la fonte.** Di chi è il repository? Di un'azienda ufficiale o di uno sviluppatore noto, oppure è una copia molto simile al nome di un pacchetto conosciuto (typosquatting)?
2. **Leggi SKILL.md dall'inizio alla fine.** Frasi come "prima scarica ed esegui questo", "disattiva l'impostazione di sicurezza", "invia a questo indirizzo" sono campanelli d'allarme.
3. **Esamina la cartella scripts/.** Se ci sono righe che non riesci a leggere, offuscate o codificate in Base64, non installare.
4. **Controlla i collegamenti esterni.** Se la skill preleva istruzioni o dati da un indirizzo web, ricorda che quel contenuto può cambiare in qualsiasi momento.
5. **Installa ciò che ti serve.** Scegliere le skill una per una, invece di "installarle tutte", riduce sia il contesto sia la superficie d'attacco.

## Privilegi minimi e chiavi segrete

Conta anche dove gira la skill. Secondo la documentazione di Claude, nell'ambiente dell'API di Claude le skill non hanno accesso alla rete e non possono installare pacchetti durante l'esecuzione. Su claude.ai l'accesso alla rete può essere completo, parziale o disattivato, a seconda delle impostazioni di utente e amministratore. In Claude Code, invece, le skill hanno lo stesso accesso alla rete di qualunque programma del tuo computer. Cioè una skill installata su un agente locale gira con i tuoi permessi.

Per questo il principio del privilegio minimo è fondamentale. In Claude Code, il campo allowed-tools nel frontmatter di una skill permette di usare certi strumenti senza chiedere conferma quando quella skill viene richiamata. Secondo la documentazione, questo permesso viene azzerato al messaggio successivo. Resta comunque una buona abitudine non installare una skill scritta da altri che chiede permessi ampi senza averli approvati consapevolmente.

Per le chiavi segrete la regola è semplice: non scrivere mai chiavi API, password e token di accesso in SKILL.md o nella cartella della skill. Quando condividi la skill o la invii a un repository, parte tutto ciò che c'è nella cartella. Tieni le chiavi nelle variabili d'ambiente o nel sistema sicuro di archiviazione delle credenziali dello strumento che usi, e di' alla skill soltanto come accedervi.

A ottobre 2026 l'ecosistema delle skill sta crescendo molto in fretta, e questa crescita ricorda i problemi di sicurezza dei primi anni degli app store. La buona notizia è che leggere una skill è molto più facile che leggere il codice sorgente di un'app, perché per la maggior parte è testo semplice.

E tu, prima di installare una skill ne apri e ne leggi il contenuto, oppure ti fidi del numero di stelle e di download?
