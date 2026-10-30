---
title: "Vad är en skill? AI-agenternas nya \"färdighetsmappar\""
excerpt: "En Agent Skill är en mapp med en SKILL.md-fil och eventuella skript. Agenten läser in den bara vid behov. Hur skiljer den sig från prompt, MCP och tillägg?"
hook: "Lär agenten en ny färdighet med en mapp"
fact: "3 NIVÅER"
factLabel: "Stegvis inläsning av en skills innehåll"
category: "AI"
---

AI-assistenter kan lite av allt, men de känner inte till ditt företags rapportmall, ditt varumärkes färger eller knepen för att hantera en viss filtyp ordentligt. Tänk om du i stället för att förklara det i detalj i varje chatt kunde paketera det en gång och säga till agenten: "använd det vid behov"? Det är precis den idén som "skill" (färdighet) handlar om.

## Kort sagt: en mapp och en SKILL.md

Enligt Anthropics definition är Agent Skills modulära paket som utökar Claudes förmågor. Varje skill samlar instruktioner, metadata och eventuella resurser (skript, mallar), och Claude använder dem av sig själv när de är relevanta. Anthropics ingenjörsblogg uttrycker det ännu enklare: skills är "organiserade mappar med instruktioner, skript och resurser" som agenten läser in när den behöver bli bättre på specifika uppgifter.

Tekniskt sett är en skill en mapp som minst innehåller en fil som heter SKILL.md. Överst i filen finns två obligatoriska fält i YAML-format: name (namn) och description (beskrivning). Därunder följer instruktioner skrivna i vanlig Markdown. Till mappen kan du lägga undermappar som scripts/ (körbar kod), references/ (extra dokument) och assets/ (mallar, bilder, data).

Anthropic jämför strukturen med en introduktionsguide som görs i ordning åt en ny medarbetare. Du lägger guiden på bordet, och medarbetaren slår upp i den när det behövs.

## Hemligheten: allt läses inte in på en gång

Det som skiljer skills från en vanlig lång prompt är en design som kallas "stegvis inläsning" (progressive disclosure). Enligt Claudes dokumentation läses innehållet in i tre nivåer:

| Nivå | När läses den in? |
|---|---|
| 1. Metadata (namn + beskrivning) | Alltid, vid start (cirka 100 tokens per skill) |
| 2. Innehållet i SKILL.md | När skillen utlöses (under 5 000 tokens rekommenderas) |
| 3. Extra filer och skript | Bara vid behov; av skripten hamnar bara utdata i kontexten |

På så vis kan du ge agenten tiotals skills utan att alla fyller kontextfönstret. Tills en skill utlöses ligger bara dess namn och beskrivning "på bordet". I dokumentationens exempel förvarar PDF-skillen instruktionerna för formulärifyllning i en separat fil, forms.md, och Claude läser den bara när den faktiskt fyller i ett formulär.

> **Visste du det?** Anthropic tillkännagav Agent Skills den 16 oktober 2025 och publicerade formatet som öppen standard på agentskills.io den 18 december 2025. Därför ser du per oktober 2026 samma SKILL.md-struktur i dokumentationen för andra verktyg som GitHub Copilot och OpenAI Codex. Copilots dokumentation hänvisar direkt till specifikationen på agentskills.io för att kontrollera skills.

## Prompt, MCP, tillägg: vad är skillnaden?

De här begreppen blandas ofta ihop, eftersom alla handlar om att göra agenten bättre. Claudes hjälpcenter skiljer dem åt ungefär så här:

- **Prompt eller anpassade instruktioner:** Allmänna riktlinjer som gäller i en chatt eller i alla chattar. En skill är i stället uppgiftsspecifik och aktiveras bara när den är relevant.
- **Projekt:** Fast bakgrundskunskap som alltid är inläst i chattarna i ett projekt. En skill är en procedur som öppnas vid behov.
- **MCP-anslutningar (Model Context Protocol):** Kopplar Claude till externa tjänster och datakällor. De ger alltså "åtkomst". En skill är "metodkunskapen" som beskriver hur den åtkomsten ska användas. Hjälpcentret säger att de två ofta används tillsammans.
- **Tillägg (plugin):** I Claude Code och Cowork är ett tillägg paketet för att distribuera flera delar (skills, anslutningar, kommandon, underagenter) tillsammans. OpenAIs dokumentation gör en liknande uppdelning: skill är formatet för att skriva, tillägget är formen för distribution.

Kort sagt: MCP ger agenten en hand, skillen lär handen en färdighet och tillägget levererar dem i en och samma låda.

## Var fungerar den?

Enligt Claudes dokumentation per oktober 2026 kan skills användas i Claude-apparna (claude.ai), i Claude Code och i Claude API tillsammans med kodkörningsverktyget. Hjälpcentret uppger att skills erbjuds i planerna Free, Pro, Max, Team och Enterprise och att kodkörning måste vara aktiverad.

En viktig detalj: egna skills synkroniseras inte mellan olika ytor. En skill som du laddar upp till claude.ai är privat för ditt konto. En skill som laddas upp till API:et delas med hela arbetsytan. I Claude Code förvaras den personligt (~/.claude/skills/) eller i projektmappen (.claude/skills/).

Det finns också en säkerhetsaspekt. Eftersom skills kan köra kod rekommenderar dokumentationen att behandla dem "som att installera programvara" och bara använda dem från betrodda källor. Det tar vi upp separat i seriens sista artikel.

I nästa artiklar i den här delen går vi steg för steg igenom hur du skriver en egen skill och granskar skills som verkligen finns och är användbara, kategori för kategori.

Vilken uppgift förklarar du för AI:n om och om igen varje dag, och tänker "om jag bara kunde lära ut det en gång"?
