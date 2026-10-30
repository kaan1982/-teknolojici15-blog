---
title: "Skills til udviklere: skill-creator, mcp-builder og mere"
excerpt: "En skill, der skriver skills, en skill, der opsætter MCP-servere, og skill-pakker, der bringer test- og fejlsøgningsdisciplin. Verificerede udvalg til udviklere."
hook: "Der findes en skill, der skriver skills"
fact: "20 FORESPØRGSLER"
factLabel: "Anbefalet antal eksempler til udløsningstest"
category: "Kunstig intelligens"
---
For en, der udvikler software, er skills interessante set fra to vinkler. Den første er, at der findes "producerende" skills, som hjælper dig med at skrive dine egne skills hurtigere og målbart. Den anden er, at der findes pakker, som giver agenten ingeniørdisciplin (test, planlægning, fejlsøgning). I dette indlæg tager vi begge dele med, og kun med eksempler, hvis eksistens vi har bekræftet.

## skill-creator: skillen, der skriver skills

skill-creator i Anthropics officielle repository anthropics/skills er designet til at oprette nye skills, redigere og forbedre eksisterende og måle deres ydeevne. Ifølge beskrivelsen tager den sig også af at køre evalueringer (evals), sammenligne resultater med variansanalyse og optimere skillens beskrivelse, så den udløses bedre.

Arbejdsgangen er beskrevet ret menneskeligt: Beslut, hvad du vil, skriv et udkast, forbered nogle testbeskeder, kør Claude med skillen på disse beskeder, vurder resultaterne sammen, skriv om, gentag. I mappen er der separate scripts, der kører evalueringer, laver sammenligningsrapporter og forbedrer beskrivelsen, samt en "eval-viewer" til at gennemgå resultaterne visuelt.

agentskills.io's vejledning i optimering af beskrivelser peger også på denne skill som eksempel. Ifølge vejledningen automatiserer skill-creator denne løkke fra ende til anden: Den opdeler testsættet, måler udløsningsrater parallelt, foreslår forbedringer af beskrivelsen med Claude og producerer en levende HTML-rapport.

> **Vidste du det?** I den udløsningstest, agentskills.io anbefaler, bruges cirka 20 eksempelbeskeder, og hver køres 3 gange. Altså betyder det at prøve en enkelt beskrivelse 60 kørsler. For at undgå overtilpasning (overfitting) bruges cirka 60 procent af beskederne til forbedring og 40 procent kun til validering. Vejledningen siger, at fem runder som regel er nok.

## mcp-builder og claude-api: til dem, der bygger integrationer

- **mcp-builder (officiel):** En guide til at udvikle MCP-servere, der gør det muligt for store sprogmodeller at tale med eksterne tjenester gennem veldesignede værktøjer. Den virker med Python (FastMCP) eller Node/TypeScript (MCP SDK). Skillen deler processen op i fire faser: research og planlægning, implementering, gennemgang og test samt oprettelse af evalueringer. I mappen er der sprogspecifikke referencedokumenter og evalueringsscripts.
- **claude-api (officiel):** En referenceskill til Claude API og Anthropic-SDK'erne. Den dækker emner som model-id'er, parametre, streaming, værktøjsbrug og caching og indeholder separate mapper til mange programmeringssprog. Ifølge Claudes dokumentation følger denne open source-skill med Claude Code.
- **webapp-testing (officiel):** Et værktøjssæt til at teste lokale webapplikationer med Playwright. Et praktisk hjælpemiddel, som vi også nævnte i indlægget om design, for dem, der udvikler frontend.

## Fra fællesskabet: ingeniørdisciplin med Superpowers

Uden for det officielle repository er en af de pakker, der tales mest om blandt udviklere, Jesse Vincents MIT-licenserede repository obra/superpowers. Det beskriver sig selv som "en komplet softwareudviklingsmetodologi" til kodningsagenter. Pr. oktober 2026 indeholder repositoriet følgende skills (et udvalg):

| Skill | Hvornår træder den i kraft? |
|---|---|
| brainstorming | Før man går i gang med en ny funktion eller et kreativt arbejde |
| writing-plans | Når man skriver en plan til et arbejde i flere trin, før man rører ved koden |
| test-driven-development | Under implementeringen: først en fejlende test, så mindst mulig kode |
| systematic-debugging | Når man støder på en fejl eller en fejlende test, før man foreslår en rettelse |
| verification-before-completion | Til at køre verifikationskommandoer, før man siger "færdig" |

Repositoriets README giver installationsvejledning til mange agenter som Codex, Cursor, Gemini CLI og GitHub Copilot CLI ud over Claude Code og angiver, at det på Claude Code-siden findes på Anthropics officielle plugin-markedsplads. Det er den praktiske konsekvens af, at Agent Skills er en åben standard: Den samme skill kan virke i forskellige værktøjer.

## Samme idé på andre platforme

OpenAIs dokumentation til ChatGPT og Codex beskriver også skills som baseret på den "åbne agent skills-standard". Pr. oktober 2026 fremhæver dokumentationen to indbyggede hjælpere: skill-creator, som opretter en skill ud fra det arbejde, du beskriver (kaldes i Codex med $skill-creator), og skill-installer, som installerer færdige skills fra repositoriet openai/skills eller andre repositorier. Codex læser lokale skills fra mapperne .agents/skills på projekt- og brugerniveau.

For en udvikler kan den mest værdifulde vane være denne: at omdanne hver lang forklaring, du gentager, din tjekliste til kodegennemgang eller dine deploy-trin til en skill og lægge den i projektets repository. I Claude Code følger skills, der lægges i mappen .claude/skills, med repositoriet til teamet. Men glem ikke at læse scripts i hver community-skill, du installerer, for de skills kan køre kode på din computer med dine rettigheder.

Hvilket trin i din udviklingsproces får dig mest til at tænke "gid der var en skill til det": test, kodegennemgang eller deploy?
