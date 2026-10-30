---
title: "Scrivi la tua skill: la prima competenza con SKILL.md, passo dopo passo"
excerpt: "Una cartella, un SKILL.md e una descrizione scritta bene. I passaggi per scrivere la tua Agent Skill, l'importanza del campo description e come testarla."
hook: "È la descrizione ad attivare la skill"
fact: "1.024"
factLabel: "Caratteri massimi per il campo description"
category: "Intelligenza Artificiale"
---

Per scrivere una skill non serve essere programmatori. Nella forma più semplice bastano una cartella e un solo file di testo al suo interno. Ma la differenza tra una skill che funziona bene e una che non si attiva mai sta spesso in una sola frase: la descrizione. In questo articolo scriviamo da zero una skill piccola ma vera.

## Passo 1: crea la cartella e il SKILL.md

Secondo la specifica delle Agent Skills, una skill è una cartella che contiene almeno un file SKILL.md. All'inizio del file c'è un'intestazione YAML (frontmatter) con due campi obbligatori:

- **name:** al massimo 64 caratteri. Solo lettere minuscole, cifre e trattini. Non può iniziare né finire con un trattino, non può contenere due trattini consecutivi e deve coincidere con il nome della cartella. La documentazione di Claude precisa inoltre che le parole "anthropic" e "claude" non si possono usare nel nome.
- **description:** non può essere vuota, al massimo 1.024 caratteri. Deve spiegare che cosa fa la skill e quando usarla.

Ci sono anche campi facoltativi (license, compatibility, metadata e quello sperimentale allowed-tools), ma per la maggior parte delle skill non servono.

## Passo 2: scrivi la descrizione con cura

Perché la descrizione è così importante? Perché all'avvio l'agente legge di ogni skill soltanto il nome e la descrizione. Con le parole di agentskills.io, "tutto il peso" dell'attivazione poggia sulla descrizione. Se la descrizione non dice quando il lavoro è utile, l'agente non si avvicina a quella skill.

I consigli delle fonti si possono riassumere così:

- Scrivi sia **che cosa fa** sia **quando va usata**.
- La documentazione di Claude consiglia di scriverla in **terza persona**, perché la descrizione viene inserita nel prompt di sistema ("Elabora file Excel", non "Posso aiutarti").
- agentskills.io suggerisce di elencare esplicitamente anche i casi in cui l'utente non nomina quell'ambito.
- Sii breve: poche frasi, al massimo un breve paragrafo. Claude Code tronca la descrizione a 1.536 caratteri nell'elenco, quindi il caso d'uso più importante deve stare all'inizio.

## Passo 3: corpo breve, script intelligente

Come esempio, pensiamo a una skill che rispetta la regola di scrittura di questo stesso blog: nel testo non devono restare trattini lunghi (em dash) né trattini medi (en dash). La struttura delle cartelle sia questa:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

E il file SKILL.md sia tutto qui:

```markdown
---
name: tire-denetimi
description: Trova l'uso di trattini lunghi (U+2014) e trattini medi (U+2013) negli articoli di blog e propone correzioni. Si usa quando l'utente prepara un articolo Markdown per la pubblicazione, dice "controlla i trattini" o "rispetta le regole di scrittura?", oppure, anche senza nominarlo, chiede un controllo finale prima della pubblicazione.
---

# Controllo dei trattini

1. Esegui il comando `python scripts/tire_bul.py <file.md>`.
2. Per ogni riga dell'output, proponi di sostituire il trattino con un punto, una virgola, i due punti o delle parentesi.
3. Non cambiare il significato. Chiedi all'utente per le righe di cui non sei sicuro.
4. Alla fine, riferisci in una sola frase quante righe hai corretto.
```

La documentazione di Claude considera la finestra di contesto una "risorsa condivisa" e consiglia di aggiungere solo le informazioni che il modello non conosce già. Il corpo dovrebbe restare sotto le 500 righe. I testi di riferimento lunghi vanno spostati in file separati, collegati da SKILL.md con un solo livello di profondità.

Per gli script la regola è chiara: "risolvi, non scaricare il problema". Cioè lo script deve gestire da sé i casi di errore, non essere scritto con la logica "se si rompe, Claude troverà un modo". Quando lo script viene eseguito, nel contesto non entra il codice ma solo il suo output. Questo rende lo script più affidabile delle istruzioni per i lavori ripetitivi e che non tollerano errori.

> **Lo sapevi?** In Claude Code i vecchi "comandi slash personalizzati" si sono fusi con le skill. Il file .claude/commands/deploy.md e il file .claude/skills/deploy/SKILL.md creano lo stesso comando /deploy. Se non vuoi che una skill si attivi in automatico, puoi aggiungere disable-model-invocation: true al frontmatter e richiamarla solo a mano.

## Passo 4: testa, poi testa ancora

La guida alle buone pratiche di Claude consiglia di preparare scenari di valutazione prima di scrivere documentazione lunga, e la checklist pre-pubblicazione prevede almeno tre valutazioni e test separati sui modelli Haiku, Sonnet e Opus. Il motivo è semplice: un'istruzione che funziona alla perfezione su Opus può richiedere più dettagli per Haiku.

Per testare l'attivazione, il consiglio di agentskills.io è concreto: prepara circa 20 messaggi d'esempio di utenti. Da 8 a 10 devono attivare la skill, da 8 a 10 no. Gli esempi negativi più preziosi sono quelli che "mancano per un soffio", cioè messaggi che condividono le stesse parole ma chiedono un altro lavoro. Poiché il comportamento del modello non è identico ogni volta, si consiglia di eseguire ogni messaggio più volte (3 per cominciare) e osservare il tasso di attivazione.

| Descrizione debole | Descrizione buona |
|---|---|
| "Aiuta con i PDF." | Dice cosa fa e quando usarla |
| Solo dettagli tecnici | Racconta l'intenzione dell'utente |
| Copre tutto | Indica anche cosa non fa |

Anche l'installazione è semplice: in Claude Code basta mettere la cartella in ~/.claude/skills/ (personale) o nella cartella .claude/skills/ del progetto. Claude Code monitora queste cartelle e rileva le modifiche nella stessa sessione senza bisogno di riavviare. Su claude.ai, invece, puoi caricare la skill come zip dalle impostazioni.

Quale tua attività ripetitiva automatizzerebbe la tua prima skill?
