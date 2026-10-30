---
title: "Skill per i documenti: insegnare all'agente Word, Excel, PowerPoint e PDF"
excerpt: "Che cosa fanno le skill docx, xlsx, pptx e pdf di Anthropic e dove funzionano? Le skill ufficiali e di supporto che servono davvero per produrre documenti."
hook: "Rapporto, tabella, presentazione: tutto in una skill"
fact: "4 DOCUMENTI"
factLabel: "Numero di skill per documenti già pronte"
category: "Intelligenza Artificiale"
---

Dire all'intelligenza artificiale "preparami un rapporto" è facile. Il difficile è ottenere un file Word o Excel che si apra davvero, che non perda la formattazione e le cui formule funzionino. La prima categoria di skill, e forse la più usata, è proprio questa: i documenti d'ufficio. In questo articolo trattiamo solo le skill di cui abbiamo verificato l'esistenza.

## Quattro pilastri: docx, xlsx, pptx, pdf

Secondo la documentazione di Claude, Anthropic offre quattro skill per documenti già pronte (pre-built). Funzionano dietro le quinte della funzione di creazione file di Claude e Anthropic pubblica il codice sorgente nel repository GitHub anthropics/skills.

| Skill | Che cosa fa? (dalle descrizioni ufficiali) |
|---|---|
| docx | Crea, legge e modifica documenti Word. Compresi formattazione e modelli |
| xlsx | Apre e modifica fogli di calcolo, aggiunge formule e grafici, ripulisce i dati disordinati |
| pptx | Crea presentazioni, modifica le diapositive, legge e analizza il contenuto di un .pptx |
| pdf | Estrae testo e tabelle, unisce e divide PDF, compila moduli, aggiunge filigrane |

Le descrizioni nel repository sono scritte in modo piuttosto "insistente". Per esempio, la descrizione della skill pptx dice di usarla se un file .pptx è coinvolto "in qualsiasi modo", in ingresso o in uscita. È un esempio ufficiale della regola "la descrizione attiva la skill" di cui abbiamo parlato nell'articolo precedente.

## Dove puoi usarle?

A ottobre 2026, secondo la documentazione di Claude, queste quattro skill entrano in azione da sole su claude.ai quando crei documenti e si possono richiamare come skill già pronte anche nell'API di Claude. In Claude Code, invece, le skill per i documenti non sono incluse di serie. Ma il repository anthropics/skills può essere aggiunto come marketplace di plugin per Claude Code e si può installare il pacchetto document-skills. Secondo le istruzioni del repository, prima si aggiunge il marketplace con il comando /plugin marketplace add anthropics/skills, poi si installa document-skills@anthropic-agent-skills.

Sulla licenza c'è una distinzione. Molte skill del repository sono open source con licenza Apache 2.0. Le quattro skill per i documenti, però, sono condivise come "non open source, ma con sorgente accessibile" (source-available). Cioè puoi esaminare il codice e imparare, ma prima di ridistribuirlo liberamente nel tuo prodotto devi leggere il file di licenza.

> **Lo sapevi?** La skill pdf è l'esempio da manuale del caricamento progressivo. Secondo l'articolo di ingegneria di Anthropic, le istruzioni per compilare i moduli sono state tolte dal SKILL.md principale e spostate in un file separato, forms.md. Claude lo legge solo quando compila davvero un modulo. Oggi nel repository la cartella pdf contiene sia forms.md sia reference.md, oltre a una cartella scripts.

## Gli aiutanti accanto al documento

La produzione di documenti non si esaurisce nel formato del file. Nel repository anthropics/skills ci sono altri esempi ufficiali incentrati sul contenuto:

- **doc-coauthoring:** offre un flusso di lavoro passo dopo passo per scrivere insieme testi strutturati come specifiche tecniche, proposte e documenti decisionali. Passa per le fasi di trasferimento del contesto, correzione iterativa e verifica.
- **internal-comms:** raccoglie risorse per scrivere comunicazioni interne come rapporti di stato, aggiornamenti alla direzione, newsletter aziendali e FAQ nei formati preferiti dall'azienda. Nella cartella ci sono anche testi di esempio.
- **brand-guidelines:** applica a un output i colori e la tipografia ufficiali del marchio Anthropic. Il suo valore sta soprattutto nel mostrare come costruirne una simile per il tuo marchio.
- **theme-factory:** contiene 10 temi già pronti di colori e caratteri applicabili a diapositive, documenti, rapporti o pagine HTML, e se vuoi ne genera subito di nuovi.

Il Centro assistenza parla inoltre di skill preparate da partner come Notion, Figma e Atlassian per funzionare insieme ai loro connettori MCP. Servono quando lavori con gli strumenti in cui nascono i documenti (per esempio le pagine di Notion).

## Come si usano nella vita reale?

L'uso più efficace è combinare le skill per documenti già pronte con una tua piccola skill. Per esempio, la skill xlsx sa come produrre correttamente un Excel, ma non sa quali colonne deve avere la tabella mensile delle vendite della tua azienda. Se scrivi una breve skill che lo spiega, le due lavorano insieme e producono un file sia ben formattato sia conforme al tuo standard.

Ci sono due note da non dimenticare. La prima: il repository anthropics/skills scrive chiaramente che queste skill sono "a scopo dimostrativo e didattico" e che il comportamento reale di Claude può differire dalle implementazioni qui presenti. La seconda: le skill per documenti hanno bisogno di un ambiente di esecuzione del codice. Secondo il Centro assistenza, per far funzionare le skill la funzione di esecuzione del codice deve essere attiva.

Nel prossimo articolo passiamo al lato schermo: le skill che producono design, front-end e output web.

Quale tipo di documento ti fa perdere più tempo quando lo prepari: tabelle, presentazioni o rapporti?
