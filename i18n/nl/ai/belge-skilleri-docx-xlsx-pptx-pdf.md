---
title: "Documentskills: een agent Word, Excel, PowerPoint en PDF leren"
excerpt: "Wat doen de docx-, xlsx-, pptx- en pdf-skills van Anthropic en waar werken ze? De officiële en aanvullende skills die echt werken voor het maken van documenten."
hook: "Rapport, tabel, presentatie: allemaal één skill"
fact: "4 DOCUMENTEN"
factLabel: "Aantal kant-en-klare documentskills"
category: "AI"
---
Een AI vragen om "een rapport voor me te maken" is makkelijk. Het lastige is dat dat rapport ook echt als Word- of Excel-bestand opent, dat de opmaak intact blijft en dat de formules werken. De eerste en misschien wel meest gebruikte categorie skills draait precies hierom: kantoordocumenten. In dit artikel behandelen we alleen skills waarvan we hebben gecontroleerd dat ze bestaan.

## Vier hoekstenen: docx, xlsx, pptx, pdf

Volgens de documentatie van Claude biedt Anthropic vier kant-en-klare (pre-built) documentskills. Ze werken op de achtergrond van de bestandsfunctie van Claude, en Anthropic publiceert de broncode in de GitHub-repository anthropics/skills.

| Skill | Wat doet hij? (volgens de officiële beschrijvingen) |
|---|---|
| docx | Maakt, leest en bewerkt Word-documenten, inclusief opmaak en sjablonen |
| xlsx | Opent en bewerkt spreadsheets, voegt formules en grafieken toe, ruimt rommelige data op |
| pptx | Maakt presentaties, bewerkt dia's, leest en ontleedt de inhoud van .pptx |
| pdf | Haalt tekst en tabellen eruit, voegt PDF's samen, splitst ze, vult formulieren in, voegt watermerken toe |

De beschrijvingen in de repository zijn behoorlijk "aandringend" geschreven. De beschrijving van de pptx-skill zegt bijvoorbeeld dat hij gebruikt moet worden zodra een .pptx-bestand "op enige manier" invoer of uitvoer is. Dat is een officieel voorbeeld van de regel uit het vorige artikel dat de beschrijving de skill activeert.

## Waar kun je ze gebruiken?

Volgens de documentatie van Claude zijn deze vier skills per oktober 2026 automatisch actief wanneer je op claude.ai een document maakt, en kun je ze in de Claude API aanroepen als kant-en-klare skills. In Claude Code zitten de kant-en-klare documentskills niet standaard ingebouwd. Wel kun je de repository anthropics/skills als pluginmarktplaats toevoegen en het pakket document-skills installeren. Volgens de instructie in de repository voeg je eerst de marktplaats toe met het commando /plugin marketplace add anthropics/skills en installeer je daarna document-skills@anthropic-agent-skills.

Bij de licentie is er een verschil. Veel skills in de repository hebben een open-sourcelicentie (Apache 2.0). De vier documentskills zijn echter gedeeld als "niet open source, wel met toegankelijke broncode" (source-available). Je mag de code dus bestuderen en ervan leren, maar je moet het licentiebestand lezen voordat je hem vrij in je eigen product verspreidt.

> **Wist je dat?** De pdf-skill is een schoolvoorbeeld van gefaseerd laden. Volgens het engineeringartikel van Anthropic zijn de instructies voor het invullen van formulieren uit het hoofdbestand SKILL.md gehaald en naar een apart bestand forms.md verplaatst. Claude leest dat bestand alleen als hij echt een formulier invult. In de repository staan in de map pdf vandaag zowel forms.md als reference.md en een map scripts.

## Hulpjes naast het document

Documenten maken stopt niet bij het bestandsformaat. In de repository anthropics/skills staan ook andere officiële voorbeelden die zich op de inhoud richten:

- **doc-coauthoring:** Biedt een stapsgewijze werkwijze om gestructureerde teksten samen te schrijven, zoals technische specificaties, voorstellen en besluitdocumenten. Het doorloopt de fasen contextoverdracht, iteratieve verbetering en controle.
- **internal-comms:** Verzamelt bronnen om interne communicatie te schrijven in de voorkeursformaten van het bedrijf, zoals statusrapporten, managementupdates, bedrijfsnieuwsbrieven en veelgestelde vragen. In de map staan ook voorbeeldteksten.
- **brand-guidelines:** Past de officiële merkkleuren en typografie van Anthropic toe op een resultaat. De echte waarde is dat het laat zien hoe je zoiets voor je eigen merk opzet.
- **theme-factory:** Bevat 10 kant-en-klare kleur- en lettertypethema's die je op een dia, document, rapport of HTML-pagina kunt toepassen, en maakt desgewenst direct een nieuw thema.

Het Helpcentrum noemt daarnaast skills die partners als Notion, Figma en Atlassian hebben gemaakt om samen te werken met hun eigen MCP-connectoren. Die zijn handig wanneer je werkt met de tools waarin documenten ontstaan (bijvoorbeeld Notion-pagina's).

## Hoe gebruik je ze in het echte leven?

Het meest productief is om de kant-en-klare documentskills te combineren met je eigen kleine skill. De xlsx-skill weet bijvoorbeeld hoe je Excel netjes aanmaakt, maar niet welke kolommen er in de maandelijkse verkooptabel van jouw bedrijf moeten staan. Schrijf je een korte skill die dat beschrijft, dan werken de twee samen en krijg je een bestand met zowel de juiste opmaak als jouw standaard.

Er zijn twee dingen om te onthouden. Ten eerste stelt de repository anthropics/skills uitdrukkelijk dat deze skills bedoeld zijn "voor demonstratie en educatie" en dat het eigen gedrag van Claude kan afwijken van de implementaties hier. Ten tweede hebben documentskills een omgeving nodig waarin code kan draaien. Volgens het Helpcentrum moet de functie voor code-uitvoering aanstaan om skills te laten werken.

In het volgende artikel gaan we naar de schermkant: skills die ontwerpen, front-ends en webuitvoer maken.

Bij welk type document verlies jij de meeste tijd: tabellen, presentaties of rapporten?
