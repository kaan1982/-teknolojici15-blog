---
title: "Hva er en skill? KI-agentenes nye «ferdighetsmapper»"
excerpt: "En Agent Skill er en mappe med en SKILL.md-fil og eventuelle skript. Agenten laster den bare når den trengs. Hva skiller den fra prompt, MCP og utvidelse?"
hook: "Lær agenten en ny ferdighet med en mappe"
fact: "3 NIVÅER"
factLabel: "Trinnvis innlasting av skill-innhold"
category: "Kunstig intelligens"
---

KI-assistenter kan litt om alt, men de kjenner ikke rapportmalen i firmaet ditt, fargene i merkevaren din eller knepene for å håndtere en bestemt filtype riktig. Tenk om du i stedet for å forklare dette i detalj i hver eneste samtale kunne pakke det inn én gang og si til agenten «bruk dette når det trengs». Akkurat det er ideen bak «skill» (ferdighet).

## Kort sagt: en mappe og en SKILL.md

Slik Anthropic definerer det, er Agent Skills modulære pakker som utvider Claudes evner. Hver skill samler instruksjoner, metadata og eventuelle ressurser (skript, maler), og Claude bruker dem av seg selv når de er relevante. Anthropics ingeniørblogg sier det enda enklere: skills er «organiserte mapper med instruksjoner, skript og ressurser» som agenten laster ved behov for å bli bedre på bestemte oppgaver.

Teknisk sett er en skill en mappe som minst inneholder en fil som heter SKILL.md. Øverst i filen står to obligatoriske felt i YAML-format: name (navn) og description (beskrivelse). Under følger instruksjoner skrevet i vanlig Markdown. Du kan legge til undermapper som scripts/ (kjørbar kode), references/ (tilleggsdokumenter) og assets/ (maler, bilder, data).

Anthropic sammenligner dette med en innføringsguide for en ny ansatt. Du legger guiden på pulten, og den ansatte slår opp i den når det trengs.

## Hemmeligheten: ikke alt lastes på en gang

Det som skiller skills fra en vanlig lang prompt, er et design som kalles «trinnvis innlasting» (progressive disclosure). Ifølge Claude-dokumentasjonen lastes innholdet i tre nivåer:

| Nivå | Når lastes det? |
|---|---|
| 1. Metadata (navn + beskrivelse) | Alltid, ved oppstart (omtrent 100 tokens per skill) |
| 2. Innholdet i SKILL.md | Når skillen utløses (under 5 000 tokens anbefales) |
| 3. Tilleggsfiler og skript | Bare ved behov; bare utdataene fra skriptene havner i konteksten |

Dermed kan du gi agenten titalls skills uten at alle fyller kontekstvinduet. Frem til en skill utløses, ligger bare navnet og beskrivelsen på «bordet». I eksemplet i dokumentasjonen har PDF-skillen instruksjonene for skjemautfylling i en egen fil, forms.md, og Claude leser den bare når den faktisk fyller ut et skjema.

> **Visste du at?** Anthropic kunngjorde Agent Skills 16. oktober 2025, og 18. desember 2025 ble formatet publisert som en åpen standard på agentskills.io. Derfor ser du per oktober 2026 den samme SKILL.md-strukturen i dokumentasjonen til andre verktøy som GitHub Copilot og OpenAI Codex. Copilots dokumentasjon viser direkte til agentskills.io-spesifikasjonen for å kontrollere skills.

## Prompt, MCP, utvidelse: hva er forskjellen?

Begrepene blandes ofte sammen, siden alle handler om å gjøre agenten bedre. Claude Help Centers skille kan oppsummeres slik:

- **Prompt eller egne instruksjoner:** Generell veiledning som gjelder i én samtale eller i alle samtaler. En skill er oppgavespesifikk og trer bare i kraft når den er relevant.
- **Prosjekter:** Fast bakgrunnskunnskap som alltid er lastet i samtalene i et prosjekt. En skill er en prosedyre som åpnes ved behov.
- **MCP-koblinger (Model Context Protocol):** Kobler Claude til eksterne tjenester og datakilder. Altså gir de «tilgang». En skill er «metodekunnskapen» som forklarer hvordan tilgangen skal brukes. Help Center sier at de to ofte brukes sammen.
- **Utvidelser (plugins):** I Claude Code og Cowork er en utvidelse en pakke for å distribuere flere deler (skills, koblinger, kommandoer, underagenter) sammen. OpenAIs dokumentasjon gjør et lignende skille: skill er skriveformatet, utvidelse er distribusjonsformen.

Kort sagt gir MCP agenten en hånd, skillen lærer hånden en ferdighet, og utvidelsen leverer det hele i én eske.

## Hvor fungerer det?

Per oktober 2026 kan skills ifølge Claude-dokumentasjonen brukes i Claude-appene (claude.ai), i Claude Code og i Claude API sammen med kodekjøringsverktøyet. Help Center oppgir at skills tilbys i abonnementene Free, Pro, Max, Team og Enterprise, og at kodekjøring må være slått på.

En viktig detalj: egendefinerte skills synkroniseres ikke mellom flatene. En skill du laster opp til claude.ai, er bare knyttet til kontoen din. En skill som lastes opp til API-et, deles med hele arbeidsområdet. I Claude Code ligger de enten personlig (~/.claude/skills/) eller i prosjektmappen (.claude/skills/).

Det finnes også en sikkerhetsside. Fordi skills kan kjøre kode, anbefaler dokumentasjonen å behandle dem «som å installere programvare» og bare bruke dem fra pålitelige kilder. Det tar vi for oss i en egen artikkel på slutten av serien.

I de neste artiklene i denne delen skal vi skrive din egen skill steg for steg og gå gjennom skills som faktisk finnes og fungerer, kategori for kategori.

Hvilken oppgave forklarer du til KI-en om og om igjen hver dag, og tenker «bare jeg kunne lært den dette én gang»?
