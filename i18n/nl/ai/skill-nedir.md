---
title: "Wat is een skill? De nieuwe vaardigheidsmappen van AI-agents"
excerpt: "Een Agent Skill is een map met een SKILL.md-bestand en eventueel scripts. De agent laadt hem alleen wanneer dat nodig is. Wat is het verschil met een prompt, MCP en een plugin?"
hook: "Leer een agent een nieuwe vaardigheid met een map"
fact: "3 NIVEAUS"
factLabel: "Gefaseerd laden van de inhoud van een skill"
category: "AI"
---
AI-assistenten weten van alles een beetje, maar ze kennen niet het rapportsjabloon van jouw bedrijf, de kleuren van jouw merk of de kneepjes om een bepaald bestandstype goed te verwerken. Wat als je dat niet in elk gesprek uitgebreid hoefde uit te leggen, maar één keer kon inpakken en tegen de agent kon zeggen: "gebruik het wanneer nodig"? Dat is precies het idee achter de "skill" (vaardigheid).

## Kort: een map en een SKILL.md

In de definitie van Anthropic zijn Agent Skills modulaire pakketten die de mogelijkheden van Claude uitbreiden. Elke skill bundelt instructies, metadata en optionele bronnen (scripts, sjablonen), en Claude gebruikt ze vanzelf wanneer ze relevant zijn. De engineeringblog van Anthropic zegt het nog eenvoudiger: skills zijn "georganiseerde mappen met instructies, scripts en bronnen" die de agent laadt wanneer hij ze nodig heeft om beter te worden in bepaalde taken.

Technisch gezien is een skill een map waarin minstens een bestand met de naam SKILL.md staat. Bovenaan dat bestand staan in YAML-formaat twee verplichte velden: name (naam) en description (beschrijving). Daaronder staan instructies in gewone Markdown. Aan de map kun je desgewenst submappen toevoegen, zoals scripts/ (uitvoerbare code), references/ (aanvullende documenten) en assets/ (sjablonen, beelden, data).

Anthropic vergelijkt deze structuur met een inwerkgids voor een nieuwe medewerker. Je legt de gids op het bureau, en de medewerker slaat hem open wanneer hij hem nodig heeft.

## Het geheim: niet alles wordt in één keer geladen

Wat skills onderscheidt van een gewone lange prompt is een ontwerp dat "gefaseerd laden" (progressive disclosure) heet. Volgens de documentatie van Claude wordt de inhoud in drie niveaus geladen:

| Niveau | Wanneer wordt het geladen? |
|---|---|
| 1. Metadata (naam + beschrijving) | Altijd, bij het opstarten (ongeveer 100 tokens per skill) |
| 2. Inhoud van SKILL.md | Wanneer de skill wordt geactiveerd (onder 5.000 tokens aanbevolen) |
| 3. Aanvullende bestanden en scripts | Alleen wanneer nodig; van scripts komt alleen de uitvoer in de context |

Zo kun je tientallen skills in een agent laden zonder dat ze samen het contextvenster vullen. Totdat een skill wordt geactiveerd, liggen alleen zijn naam en beschrijving "op tafel". In het voorbeeld uit de documentatie bewaart de pdf-skill de instructies voor het invullen van formulieren in een apart bestand forms.md, en leest Claude dat bestand alleen wanneer hij echt een formulier invult.

> **Wist je dat?** Anthropic kondigde Agent Skills aan op 16 oktober 2025 en publiceerde het formaat op 18 december 2025 als open standaard op agentskills.io. Daarom vind je per oktober 2026 dezelfde SKILL.md-structuur ook in de documentatie van andere tools, zoals GitHub Copilot en OpenAI Codex. De documentatie van Copilot verwijst voor het controleren van skills rechtstreeks naar de specificatie van agentskills.io.

## Prompt, MCP, plugin: wat is het verschil?

Deze begrippen worden vaak door elkaar gehaald, omdat ze er allemaal om draaien een agent beter te maken. Het onderscheid in het Claude Helpcentrum kun je zo samenvatten:

- **Prompt of aangepaste instructies:** Algemene aanwijzingen die gelden in elk gesprek of in al je gesprekken. Een skill is daarentegen taakspecifiek en komt alleen in actie wanneer hij relevant is.
- **Projecten:** Vaste achtergrondinformatie die altijd geladen is in de gesprekken binnen een project. Een skill is daarentegen een procedure die wordt geopend wanneer dat nodig is.
- **MCP-connectoren (Model Context Protocol):** Verbinden Claude met externe diensten en databronnen. Ze geven dus "toegang". Een skill is de "methodekennis" die uitlegt hoe je die toegang gebruikt. Het Helpcentrum zegt dat de twee vaak samen worden gebruikt.
- **Plugins:** In Claude Code en Cowork is een plugin het pakket om meerdere onderdelen (skills, connectoren, commando's, subagents) samen te verspreiden. De documentatie van OpenAI maakt een vergelijkbaar onderscheid: een skill is het schrijfformaat, een plugin de distributievorm.

Kortom: MCP geeft de agent een hand, een skill leert die hand een vaardigheid, en een plugin levert ze samen in één doos af.

## Waar werkt het?

Volgens de documentatie van Claude zijn skills per oktober 2026 beschikbaar in de Claude-apps (claude.ai), in Claude Code en in de Claude API in combinatie met het code-uitvoeringsprogramma. Het Helpcentrum zegt dat skills worden aangeboden in de abonnementen Free, Pro, Max, Team en Enterprise en dat de functie voor code-uitvoering aan moet staan.

Een belangrijk detail: eigen skills worden niet gesynchroniseerd tussen de verschillende omgevingen. Een skill die je naar claude.ai uploadt, is alleen van jouw account. Een skill die naar de API wordt geüpload, wordt gedeeld met de hele werkruimte. In Claude Code staat hij persoonlijk (~/.claude/skills/) of in de projectmap (.claude/skills/).

Er is ook een beveiligingskant. Omdat skills code kunnen uitvoeren, raden de documenten aan ze te behandelen als "het installeren van software" en alleen uit vertrouwde bronnen te gebruiken. Dat behandelen we apart in het laatste artikel van de reeks.

In de volgende artikelen van dit deel leggen we stap voor stap uit hoe je je eigen skill schrijft en bespreken we per categorie de skills die echt bestaan en nuttig zijn.

Welke klus leg jij elke dag opnieuw aan AI uit, terwijl je denkt: had ik dit maar één keer kunnen leren?
