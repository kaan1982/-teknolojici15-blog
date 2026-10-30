---
title: "Hvad er en skill? AI-agenternes nye \"færdighedsmapper\""
excerpt: "En Agent Skill er en mappe med en SKILL.md-fil og eventuelt scripts. Agenten indlæser den kun, når der er brug for den. Hvad adskiller den fra prompts, MCP og plugins?"
hook: "Lær agenten en ny færdighed med en mappe"
fact: "3 NIVEAUER"
factLabel: "Trinvis indlæsning af en skills indhold"
category: "Kunstig intelligens"
---
AI-assistenter ved lidt om alt, men de kender ikke din virksomheds rapportskabelon, dit mærkes farver eller tricks til at behandle en bestemt filtype ordentligt. Hvad nu, hvis du i stedet for at forklare det langt og bredt i hver samtale kunne pakke det ind én gang og sige til agenten: "brug det, når det er nødvendigt"? Det er netop den idé, en "skill" (færdighed) bygger på.

## Kort sagt: en mappe og en SKILL.md

Med Anthropics definition er Agent Skills modulære pakker, der udvider Claudes evner. Hver skill samler instruktioner, metadata og eventuelle ressourcer (scripts, skabeloner), og Claude bruger dem af sig selv, når de er relevante. Anthropics ingeniørblog siger det endnu enklere: Skills er "organiserede mapper med instruktioner, scripts og ressourcer", som agenten indlæser på det tidspunkt, den har brug for dem, for at blive bedre til bestemte opgaver.

Teknisk set er en skill en mappe, der mindst indeholder en fil kaldet SKILL.md. Øverst i filen står to obligatoriske felter i YAML-format: name (navn) og description (beskrivelse). Nedenunder står instruktionerne skrevet i almindelig Markdown. Til mappen kan du om ønsket tilføje undermapper som scripts/ (eksekverbar kode), references/ (yderligere dokumenter) og assets/ (skabeloner, billeder, data).

Anthropic sammenligner denne struktur med en introduktionsguide til en ny medarbejder. Du lægger guiden på bordet, og medarbejderen slår op i den, når der er brug for det.

## Hemmeligheden: alt indlæses ikke på én gang

Det, der adskiller skills fra en almindelig lang prompt, er et design kaldet "trinvis indlæsning" (progressive disclosure). Ifølge Claudes dokumentation indlæses indholdet i tre lag:

| Lag | Hvornår indlæses det? |
|---|---|
| 1. Metadata (navn + beskrivelse) | Altid, ved start (cirka 100 tokens pr. skill) |
| 2. SKILL.md-indholdet | Når skillen udløses (under 5.000 tokens anbefales) |
| 3. Yderligere filer og scripts | Kun når der er brug for dem; af scripts kommer kun outputtet ind i konteksten |

På den måde kan du give agenten snesevis af skills uden at de alle fylder kontekstvinduet op. Indtil de udløses, ligger kun navnet og beskrivelsen fra hver skill "på bordet". I eksemplet i dokumentationen har PDF-skillen instruktionerne til formularudfyldning i en separat fil, forms.md, og Claude læser kun den fil, når den virkelig skal udfylde en formular.

> **Vidste du det?** Anthropic annoncerede Agent Skills den 16. oktober 2025 og udgav den 18. december 2025 formatet som en åben standard på agentskills.io. Derfor ser du pr. oktober 2026 den samme SKILL.md-struktur i dokumentationen til andre værktøjer som GitHub Copilot og OpenAI Codex. Copilots dokumentation henviser direkte til agentskills.io-specifikationen for at kontrollere skills.

## Prompt, MCP, plugin: hvad er forskellen?

Disse begreber bliver ofte blandet sammen, fordi de alle handler om at "gøre agenten bedre". Claude Help Centers skelnen kan opsummeres sådan:

- **Prompts eller brugerdefinerede instruktioner:** Generel vejledning, der gælder i hver samtale eller i alle samtaler. En skill er derimod specifik for en opgave og træder kun i kraft, når den er relevant.
- **Projekter:** Fast baggrundsviden, der altid er indlæst i samtalerne i et projekt. En skill er en procedure, der åbnes, når der er brug for den.
- **MCP-konnektorer (Model Context Protocol):** Forbinder Claude med eksterne tjenester og datakilder. Altså giver de "adgang". En skill er "metodeviden" om, hvordan den adgang skal bruges. Help Center siger, at de to ofte bruges sammen.
- **Plugins:** I Claude Code og Cowork er et plugin pakken til at distribuere flere dele (skills, konnektorer, kommandoer, underagenter) sammen. OpenAIs dokumentation skelner på lignende vis: En skill er skriveformatet, et plugin er distributionsformen.

Kort sagt giver MCP agenten en hånd, en skill lærer den hånd en færdighed, og et plugin leverer dem i en æske.

## Hvor virker den?

Pr. oktober 2026 kan skills ifølge Claudes dokumentation bruges i Claude-apps (claude.ai), i Claude Code og i Claude API sammen med kodekørselsværktøjet. Help Center oplyser, at skills tilbydes i abonnementerne Free, Pro, Max, Team og Enterprise og kræver, at kodekørsel er slået til.

En vigtig detalje: Brugerdefinerede skills synkroniseres ikke på tværs af flader. En skill, du uploader til claude.ai, er kun til din egen konto. En skill, der uploades til API'et, deles med hele arbejdsområdet. I Claude Code opbevares den personligt (~/.claude/skills/) eller i projektmappen (.claude/skills/).

Der er også en sikkerhedsdimension. Fordi skills kan køre kode, anbefaler dokumentationen at behandle dem "som at installere software" og kun bruge dem fra pålidelige kilder. Det tager vi op for sig selv i seriens sidste indlæg.

I de næste indlæg i dette afsnit gennemgår vi, hvordan du skriver din egen skill trin for trin, og vi ser kategori for kategori på de skills, der faktisk findes og er nyttige.

Hvilken opgave forklarer du hver dag igen og igen for AI'en, hvor du tænker "gid jeg kunne lære den det bare én gang"?
