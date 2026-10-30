---
title: "Che cos'è una skill? Le nuove \"cartelle di competenze\" degli agenti IA"
excerpt: "Una Agent Skill è una cartella composta da un file SKILL.md e da script facoltativi. L'agente la carica solo quando serve. Che differenza c'è con prompt, MCP e plugin?"
hook: "Insegna una nuova competenza all'agente con una cartella"
fact: "3 LIVELLI"
factLabel: "Caricamento a fasi del contenuto di una skill"
category: "Intelligenza Artificiale"
---

Gli assistenti di intelligenza artificiale sanno un po' di tutto, ma non conoscono il modello di report della tua azienda, i colori del tuo marchio o i trucchi per gestire bene un certo tipo di file. E se, invece di spiegarlo ogni volta in lunghe conversazioni, potessi impacchettarlo una volta sola e dire all'agente "usalo quando serve"? Ecco, la "skill" (competenza) è esattamente questa idea.

## In breve: una cartella e un SKILL.md

Nella definizione di Anthropic, le Agent Skills sono pacchetti modulari che estendono le capacità di Claude. Ogni skill raccoglie istruzioni, metadati e risorse facoltative (script, modelli), e Claude li usa da solo quando sono pertinenti. Il blog di ingegneria di Anthropic lo dice in modo ancora più semplice: le skill sono "cartelle organizzate di istruzioni, script e risorse" che l'agente carica al momento del bisogno per diventare più bravo in compiti specifici.

Dal punto di vista tecnico, una skill è una cartella che contiene almeno un file chiamato SKILL.md. All'inizio del file ci sono due campi obbligatori in formato YAML: name (nome) e description (descrizione). Sotto ci sono le istruzioni scritte in semplice Markdown. Se vuoi, puoi aggiungere sottocartelle come scripts/ (codice eseguibile), references/ (documenti aggiuntivi) e assets/ (modelli, immagini, dati).

Anthropic paragona questa struttura alla guida di inserimento preparata per un nuovo collega. Lasci la guida sulla scrivania e il collega la apre quando ne ha bisogno.

## Il segreto: non si carica tutto in una volta

Ciò che distingue le skill da un normale prompt lungo è un'impostazione chiamata "caricamento progressivo" (progressive disclosure). Secondo la documentazione di Claude, il contenuto viene caricato su tre livelli:

| Livello | Quando viene caricato? |
|---|---|
| 1. Metadati (nome + descrizione) | Sempre, all'avvio (circa 100 token per skill) |
| 2. Corpo di SKILL.md | Quando la skill viene attivata (si consigliano meno di 5.000 token) |
| 3. File e script aggiuntivi | Solo quando servono; nel contesto entra soltanto l'output degli script |

Così puoi caricare decine di skill nell'agente senza che riempiano tutte la finestra di contesto. Finché non viene attivata, di ogni skill resta "sul tavolo" solo il nome con la descrizione. Nell'esempio della documentazione, la skill per i PDF tiene le istruzioni per compilare i moduli in un file separato, forms.md, e Claude lo legge solo quando compila davvero un modulo.

> **Lo sapevi?** Anthropic ha annunciato le Agent Skills il 16 ottobre 2025 e il 18 dicembre 2025 ha pubblicato il formato come standard aperto su agentskills.io. Per questo, a ottobre 2026, la stessa struttura SKILL.md compare anche nella documentazione di altri strumenti come GitHub Copilot e OpenAI Codex. La documentazione di Copilot rimanda direttamente alla specifica di agentskills.io per verificare le skill.

## Prompt, MCP, plugin: che differenza c'è?

Questi concetti vengono spesso confusi, perché riguardano tutti il "rendere l'agente migliore". La distinzione del Centro assistenza di Claude si può riassumere così:

- **Prompt o istruzioni personalizzate:** indicazioni generali valide in ogni conversazione o in tutte. La skill, invece, è specifica per un compito e interviene solo quando è pertinente.
- **Progetti:** conoscenza di fondo fissa, sempre caricata nelle conversazioni di un progetto. La skill è invece una procedura che si apre quando serve.
- **Connettori MCP (Model Context Protocol):** collegano Claude a servizi e fonti di dati esterni. Cioè forniscono "accesso". La skill è il "saper fare" che spiega come usare quell'accesso. Il Centro assistenza dice che i due vengono spesso usati insieme.
- **Plugin:** nel mondo di Claude Code e Cowork, il plugin è il pacchetto per distribuire insieme più componenti (skill, connettori, comandi, sotto-agenti). Anche la documentazione di OpenAI fa una distinzione simile: la skill è il formato di scrittura, il plugin è la forma di distribuzione.

In breve: l'MCP dà all'agente una mano, la skill insegna a quella mano un mestiere, il plugin consegna il tutto in una scatola.

## Dove funziona?

Secondo la documentazione di Claude, a ottobre 2026 le skill sono utilizzabili nelle app di Claude (claude.ai), in Claude Code e nell'API di Claude insieme allo strumento di esecuzione del codice. Il Centro assistenza indica che le skill sono disponibili nei piani Free, Pro, Max, Team ed Enterprise e che richiedono che la funzione di esecuzione del codice sia attiva.

Un dettaglio importante: le skill personalizzate non si sincronizzano tra le diverse superfici. Una skill caricata su claude.ai è privata del tuo account. Una skill caricata sull'API è condivisa con l'intero spazio di lavoro. In Claude Code, invece, vive nella cartella personale (~/.claude/skills/) o in quella del progetto (.claude/skills/).

C'è poi il lato della sicurezza. Poiché le skill possono eseguire codice, la documentazione consiglia di trattarle "come si installa un software" e di usarle solo da fonti fidate. Ne parliamo a parte nell'ultimo articolo della serie.

Nei prossimi articoli di questa sezione vedremo passo dopo passo come scrivere la tua skill e passeremo in rassegna, categoria per categoria, le skill che esistono davvero e funzionano.

Qual è quel lavoro che spieghi di continuo all'intelligenza artificiale e per cui ti sei detto "se solo potessi insegnarglielo una volta sola"?
