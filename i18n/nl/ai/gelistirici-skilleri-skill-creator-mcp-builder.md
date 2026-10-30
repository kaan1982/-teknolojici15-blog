---
title: "Skills voor ontwikkelaars: skill-creator, mcp-builder en meer"
excerpt: "Een skill die skills schrijft, een skill die MCP-servers bouwt, skillpakketten die discipline in testen en debuggen brengen. Gecontroleerde selecties voor ontwikkelaars."
hook: "Er bestaat een skill die skills schrijft"
fact: "20 QUERY'S"
factLabel: "Aanbevolen voorbeeldset voor de activeringstest"
category: "AI"
---
Voor wie software ontwikkelt zijn skills om twee redenen interessant. Ten eerste zijn er "maker"-skills die je helpen je eigen skills sneller en meetbaar te schrijven. Ten tweede zijn er pakketten die een agent engineeringdiscipline bijbrengen (testen, plannen, debuggen). In dit artikel behandelen we beide, met alleen voorbeelden waarvan we hebben gecontroleerd dat ze bestaan.

## skill-creator: de skill die skills schrijft

De skill-creator in de officiële Anthropic-repository anthropics/skills is ontworpen om nieuwe skills te maken, bestaande skills te bewerken en te verbeteren, en hun prestaties te meten. Volgens de beschrijving voert hij ook evaluaties (evals) uit, vergelijkt hij resultaten met variantieanalyse en optimaliseert hij de beschrijving van een skill zodat die beter activeert.

De werkwijze is heel menselijk beschreven: bepaal wat je wilt, schrijf een concept, bedenk een paar testberichten, laat Claude met de skill aan de slag gaan met die berichten, beoordeel de resultaten samen, schrijf opnieuw en herhaal. In de map staan aparte scripts die evaluaties draaien, vergelijkende rapporten maken en de beschrijving verbeteren, plus een "eval-viewer" om de resultaten visueel te bekijken.

Ook de gids voor beschrijvingsoptimalisatie van agentskills.io noemt deze skill als voorbeeld. Volgens die gids automatiseert skill-creator deze lus van begin tot eind: hij splitst de testset, meet de activeringspercentages parallel, stelt samen met Claude verbeteringen van de beschrijving voor en maakt een live HTML-rapport.

> **Wist je dat?** De activeringstest die agentskills.io aanbeveelt gebruikt ongeveer 20 voorbeeldberichten, en elk daarvan wordt 3 keer uitgevoerd. Eén beschrijving uitproberen betekent dus 60 runs. Om overfitting te voorkomen wordt ongeveer 60 procent van de berichten gebruikt voor verbetering en 40 procent alleen voor validatie. De gids zegt dat vijf rondes meestal genoeg zijn.

## mcp-builder en claude-api: voor wie integraties bouwt

- **mcp-builder (officieel):** Een gids voor het ontwikkelen van MCP-servers waarmee grote taalmodellen via goed ontworpen tools met externe diensten kunnen praten. Werkt met Python (FastMCP) of Node/TypeScript (MCP SDK). De skill verdeelt het proces in vier fasen: onderzoek en planning, implementatie, review en testen, en het opstellen van evaluaties. In de map staan taalspecifieke naslagdocumenten en evaluatiescripts.
- **claude-api (officieel):** Een naslagskill voor de Claude API en de Anthropic-SDK's. Hij behandelt onderwerpen als model-id's, parameters, streaming, toolgebruik en caching, en bevat aparte mappen voor veel programmeertalen. Volgens de documentatie van Claude wordt deze open-sourceskill met Claude Code meegeleverd.
- **webapp-testing (officieel):** Een toolkit om lokale webapplicaties met Playwright te testen. Een praktisch hulpmiddel voor front-endontwikkelaars, dat we ook in het ontwerpartikel noemden.

## Uit de community: engineeringdiscipline met Superpowers

Buiten de officiële repository is een van de pakketten waar ontwikkelers het meest over praten de MIT-gelicentieerde repository obra/superpowers van Jesse Vincent. Het omschrijft zichzelf als "een complete softwareontwikkelmethodologie" voor codeeragents. Per oktober 2026 bevat de repository onder meer deze skills (een selectie):

| Skill | Wanneer treedt hij in werking? |
|---|---|
| brainstorming | Voordat je aan een nieuwe functie of creatief werk begint |
| writing-plans | Bij het schrijven van een plan voor een klus met meerdere stappen, voordat je code aanraakt |
| test-driven-development | Tijdens de implementatie: eerst een falende test, dan zo min mogelijk code |
| systematic-debugging | Zodra je een bug of falende test tegenkomt, voordat je een oplossing voorstelt |
| verification-before-completion | Om verificatiecommando's uit te voeren voordat je "klaar" zegt |

De README van de repository geeft installatie-instructies voor naast Claude Code ook veel andere agents, zoals Codex, Cursor, Gemini CLI en GitHub Copilot CLI, en vermeldt dat hij aan de Claude Code-kant in de officiële pluginmarktplaats van Anthropic staat. Dat is het praktische gevolg van het feit dat Agent Skills een open standaard is: dezelfde skill kan in verschillende tools werken.

## Hetzelfde idee op andere platforms

De documentatie van OpenAI voor ChatGPT en Codex beschrijft skills eveneens als gebouwd op de "open agent skills-standaard". Per oktober 2026 vallen in de documentatie twee ingebouwde hulpjes op: skill-creator, die van een klus die je beschrijft een skill maakt (in Codex aan te roepen met $skill-creator), en skill-installer, die kant-en-klare skills installeert uit de repository openai/skills of andere repositories. Codex leest lokale skills uit .agents/skills-mappen op project- en gebruikersniveau.

Voor een ontwikkelaar is de waardevolste gewoonte misschien deze: elke lange uitleg die je herhaalt, je checklist voor codereview of je deploystappen omzetten in een skill en in de repository van het project zetten. Skills in de map .claude/skills van Claude Code gaan samen met de repository ook naar je team. Vergeet alleen niet de scripts te lezen van elke communityskill die je installeert, want deze skills kunnen met jouw rechten code op je computer uitvoeren.

Welke stap in jouw ontwikkelproces laat je het vaakst denken: had ik hier maar een skill voor? Testen, codereview of deployen?
