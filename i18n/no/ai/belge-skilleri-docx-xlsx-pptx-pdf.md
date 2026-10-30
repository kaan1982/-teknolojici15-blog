---
title: "Dokument-skills: å lære agenten Word, Excel, PowerPoint og PDF"
excerpt: "Hva gjør Anthropics skills for docx, xlsx, pptx og pdf, og hvor kjører de? De offisielle og supplerende skillene som faktisk fungerer for dokumentproduksjon."
hook: "Rapport, regneark, presentasjon: alt i en skill"
fact: "4 DOKUMENTER"
factLabel: "Antall ferdige dokument-skills"
category: "Kunstig intelligens"
---

Det er lett å si til en KI «lag en rapport til meg». Det vanskelige er at rapporten faktisk kommer som en Word- eller Excel-fil som lar seg åpne, der formateringen ikke går i stykker og formlene virker. Den første og kanskje mest brukte kategorien av skills handler akkurat om dette: kontordokumenter. I denne artikkelen tar vi bare for oss skills vi har bekreftet at finnes.

## Fire grunnsteiner: docx, xlsx, pptx, pdf

Ifølge Claude-dokumentasjonen tilbyr Anthropic fire ferdige (pre-built) dokument-skills. De kjører bak kulissene i Claudes filopprettingsfunksjon, og Anthropic publiserer kildekoden i GitHub-repoet anthropics/skills.

| Skill | Hva gjør den? (fra de offisielle beskrivelsene) |
|---|---|
| docx | Lager, leser og redigerer Word-dokumenter. Inkludert formatering og maler |
| xlsx | Åpner og redigerer regneark, legger til formler og diagrammer, rydder rotete data |
| pptx | Lager presentasjoner, redigerer lysbilder, leser og analyserer innholdet i .pptx |
| pdf | Trekker ut tekst og tabeller, slår sammen og deler PDF-er, fyller ut skjemaer, legger til vannmerke |

Beskrivelsene i repoet er skrevet ganske «insisterende». Beskrivelsen av pptx-skillen sier for eksempel at den skal brukes hvis en .pptx-fil er involvert «på noen som helst måte», enten som inndata eller utdata. Det er et offisielt eksempel på regelen «beskrivelsen utløser» som vi tok for oss i forrige artikkel.

## Hvor kan du bruke dem?

Per oktober 2026 er disse fire skillene ifølge Claude-dokumentasjonen automatisk aktive når du lager dokumenter i claude.ai, og de kan også kalles som ferdige skills i Claude API. I Claude Code følger ikke de ferdige dokument-skillene med som standard. Men repoet anthropics/skills kan legges til som et utvidelsesmarked for Claude Code, og pakken document-skills kan installeres. Ifølge instruksjonen i repoet legger du først til markedet med kommandoen /plugin marketplace add anthropics/skills og installerer deretter document-skills@anthropic-agent-skills.

Det er et skille når det gjelder lisens. Mange av skillene i repoet har åpen kildekode med Apache 2.0-lisens. De fire dokument-skillene er derimot delt som «ikke åpen kildekode, men med tilgjengelig kildekode» (source-available). Du kan altså lese og lære av koden, men må lese lisensfilen før du fritt redistribuerer den i ditt eget produkt.

> **Visste du at?** pdf-skillen er et lærebokeksempel på trinnvis innlasting. Ifølge Anthropics ingeniørartikkel ble instruksjonene for skjemautfylling tatt ut av hoved-SKILL.md og flyttet til en egen forms.md-fil. Claude leser denne filen bare når den faktisk fyller ut et skjema. I dag ligger både forms.md, reference.md og en scripts-mappe i pdf-mappen i repoet.

## Hjelpere ved siden av dokumentet

Dokumentproduksjon stopper ikke ved filformatet. I anthropics/skills-repoet finnes det også andre offisielle eksempler som fokuserer på innholdssiden:

- **doc-coauthoring:** Tilbyr en trinnvis arbeidsflyt for å skrive strukturerte tekster sammen, som tekniske spesifikasjoner, forslag og beslutningsdokumenter. Den går gjennom stegene kontekstoverføring, iterativ finpuss og verifisering.
- **internal-comms:** Samler ressurser som hjelper deg å skrive intern kommunikasjon som statusrapporter, ledelsesoppdateringer, bedriftsnyhetsbrev og vanlige spørsmål i formatene selskapet foretrekker. Mappen har også eksempeltekster.
- **brand-guidelines:** Bruker Anthropics offisielle merkefarger og typografi på en utdata. Den egentlige verdien er at den viser hvordan du kan bygge noe tilsvarende for din egen merkevare.
- **theme-factory:** Inneholder 10 ferdige farge- og skrifttemaer som kan brukes på lysbilder, dokumenter, rapporter eller HTML-sider, og kan lage et nytt tema på stedet hvis du vil.

Help Center nevner også skills som samarbeidspartnere som Notion, Figma og Atlassian har laget for å fungere sammen med sine egne MCP-koblinger. De er nyttige når du jobber med verktøyene dokumentene lages i (for eksempel Notion-sider).

## Hvordan bruker man dette i praksis?

Den mest effektive bruken er å kombinere de ferdige dokument-skillene med din egen lille skill. xlsx-skillen vet for eksempel hvordan Excel produseres riktig, men den vet ikke hvilke kolonner firmaets månedlige salgsregneark skal ha. Hvis du skriver en kort skill som forklarer det, jobber de to skillene sammen og gir en fil som både har riktig format og følger din standard.

To ting må du huske. For det første skriver anthropics/skills-repoet tydelig at skillene er «for demonstrasjon og opplæring», og at Claudes egen oppførsel kan være annerledes enn implementeringene her. For det andre trenger dokument-skillene et miljø for kodekjøring. Ifølge Help Center må kodekjøring være slått på for at skills skal fungere.

I neste artikkel går vi over til skjermsiden: skills som lager design, grensesnitt og nettutdata.

Hvilken dokumenttype bruker du mest tid på: regneark, presentasjoner eller rapporter?
