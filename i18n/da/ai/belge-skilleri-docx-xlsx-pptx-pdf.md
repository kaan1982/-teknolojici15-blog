---
title: "Dokument-skills: at lære agenten Word, Excel, PowerPoint og PDF"
excerpt: "Hvad gør Anthropics docx-, xlsx-, pptx- og pdf-skills, og hvor virker de? Officielle og supplerende skills, der faktisk er nyttige til dokumentproduktion."
hook: "Rapport, regneark, præsentation: alt sammen en skill"
fact: "4 DOKUMENTER"
factLabel: "Antal færdige dokument-skills"
category: "Kunstig intelligens"
---
Det er let at sige til en AI: "lav en rapport til mig". Det svære er, at rapporten kommer som en Word- eller Excel-fil, der faktisk kan åbnes, hvis formatering ikke går i stykker, og hvis formler virker. Skills' første og måske mest brugte kategori er netop denne: kontordokumenter. I dette indlæg tager vi kun skills med, hvis eksistens vi har bekræftet.

## Fire grundsten: docx, xlsx, pptx, pdf

Ifølge Claudes dokumentation tilbyder Anthropic fire færdige (pre-built) dokument-skills. De arbejder bag Claudes funktion til filoprettelse, og Anthropic udgiver kildekoden i GitHub-repositoriet anthropics/skills.

| Skill | Hvad gør den? (fra de officielle beskrivelser) |
|---|---|
| docx | Opretter, læser og redigerer Word-dokumenter. Inklusive formatering og skabeloner |
| xlsx | Åbner og redigerer regneark, tilføjer formler og diagrammer, rydder op i rodede data |
| pptx | Opretter præsentationer, redigerer slides, læser og analyserer indholdet i .pptx |
| pdf | Udtrækker tekst og tabeller, fletter og deler PDF'er, udfylder formularer, tilføjer vandmærker |

Beskrivelserne i repositoriet er skrevet ret "insisterende". For eksempel siger beskrivelsen af pptx-skillen, at den skal bruges, hvis en .pptx-fil "på nogen måde" er involveret som input eller output. Det er et officielt eksempel på reglen "beskrivelsen udløser", som vi omtalte i det forrige indlæg.

## Hvor kan du bruge dem?

Pr. oktober 2026 er disse fire skills ifølge Claudes dokumentation automatisk aktive på claude.ai, når der oprettes dokumenter, og kan også kaldes som færdige skills i Claude API. I Claude Code følger de færdige dokument-skills ikke med som indbyggede. Men repositoriet anthropics/skills kan tilføjes som markedsplads for plugins til Claude Code, og pakken document-skills kan installeres. Ifølge vejledningen i repositoriet tilføjer man først markedspladsen med kommandoen /plugin marketplace add anthropics/skills og installerer derefter document-skills@anthropic-agent-skills.

Der er en forskel, når det gælder licens. Mange skills i repositoriet er open source under Apache 2.0. De fire dokument-skills er imidlertid delt som "ikke open source, men med tilgængelig kildekode" (source-available). Du kan altså se på koden og lære af den, men du bør læse licensfilen, før du frit videredistribuerer den i dit eget produkt.

> **Vidste du det?** pdf-skillen er et lærebogseksempel på trinvis indlæsning. Ifølge Anthropics ingeniørindlæg blev instruktionerne til formularudfyldning taget ud af den primære SKILL.md og flyttet til en separat fil, forms.md. Claude læser kun den fil, når den virkelig skal udfylde en formular. I repositoriet ligger der i dag både forms.md, reference.md og en scripts-mappe inde i pdf-mappen.

## Hjælpere ved siden af dokumentet

Dokumentproduktion stopper ikke ved filformatet. I repositoriet anthropics/skills er der også andre officielle eksempler, der fokuserer på indholdssiden:

- **doc-coauthoring:** Tilbyder en trin-for-trin-arbejdsgang til at skrive strukturerede tekster sammen, såsom tekniske specifikationer, forslag og beslutningsdokumenter. Den fører dig gennem kontekstoverførsel, iterativ rettelse og verifikation.
- **internal-comms:** Samler ressourcer, der hjælper med at skrive intern kommunikation som statusrapporter, ledelsesopdateringer, virksomhedsnyhedsbreve og FAQ'er i de formater, virksomheden foretrækker. I mappen er der også eksempeltekster.
- **brand-guidelines:** Anvender Anthropics officielle mærkefarver og typografi på et output. Dens egentlige værdi er, at den viser, hvordan du kan bygge noget tilsvarende til dit eget mærke.
- **theme-factory:** Indeholder 10 færdige farve- og skrifttemaer, der kan anvendes på en slide, et dokument, en rapport eller en HTML-side, og skaber om ønsket straks et nyt tema.

Help Center omtaler også skills, som partnere som Notion, Figma og Atlassian har forberedt til at virke sammen med deres egne MCP-konnektorer. De er nyttige, når man arbejder med de værktøjer, hvor dokumenterne produceres (f.eks. Notion-sider).

## Hvordan bruges det i praksis?

Den mest effektive brug er at kombinere de færdige dokument-skills med din egen lille skill. For eksempel ved xlsx-skillen, hvordan man laver Excel korrekt, men den ved ikke, hvilke kolonner din virksomheds månedlige salgsregneark skal have. Hvis du skriver en kort skill, der forklarer det, arbejder de to skills sammen, og der kommer en fil ud, der både har det rigtige format og følger din standard.

Der er to ting, du ikke må glemme. For det første skriver repositoriet anthropics/skills klart, at disse skills er "til demonstrations- og uddannelsesformål", og at Claudes egen adfærd kan afvige fra implementeringerne her. For det andet har dokument-skills brug for et miljø til kodekørsel. Ifølge Help Center skal kodekørsel være slået til, for at skills virker.

I næste indlæg går vi over til skærmsiden: skills, der laver design, frontend og weboutput.

Hvilken dokumenttype spilder du mest tid på at forberede: regneark, præsentationer eller rapporter?
