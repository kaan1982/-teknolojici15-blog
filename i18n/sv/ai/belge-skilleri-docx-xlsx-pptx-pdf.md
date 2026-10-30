---
title: "Dokumentskills: lär agenten Word, Excel, PowerPoint och PDF"
excerpt: "Vad gör Anthropics skills docx, xlsx, pptx och pdf, och var fungerar de? Officiella och kompletterande skills som faktiskt är användbara för dokumentproduktion."
hook: "Rapport, tabell, presentation: allt är en skill"
fact: "4 DOKUMENT"
factLabel: "Antal färdiga dokumentskills"
category: "AI"
---

Det är lätt att säga till en AI "gör i ordning en rapport åt mig". Det svåra är att rapporten verkligen kommer som en Word- eller Excel-fil som går att öppna, där formateringen inte går sönder och formlerna fungerar. Skillsens första och kanske mest använda kategori är precis det: kontorsdokument. I den här artikeln tar vi bara upp skills vars existens vi har verifierat.

## Fyra grundstenar: docx, xlsx, pptx, pdf

Enligt Claudes dokumentation finns fyra färdiga (pre-built) dokumentskills från Anthropic. De arbetar i bakgrunden till Claudes funktion för att skapa filer, och Anthropic publicerar källkoden i GitHub-förrådet anthropics/skills.

| Skill | Vad gör den? (enligt de officiella beskrivningarna) |
|---|---|
| docx | Skapar, läser och redigerar Word-dokument, inklusive formatering och mallar |
| xlsx | Öppnar och redigerar kalkylblad, lägger till formler och diagram, rensar röriga data |
| pptx | Skapar presentationer, redigerar bilder, läser och tolkar innehållet i .pptx |
| pdf | Extraherar text och tabeller, slår ihop och delar PDF:er, fyller i formulär, lägger till vattenstämpel |

Beskrivningarna i förrådet är skrivna ganska "enträget". Beskrivningen av pptx-skillen säger till exempel att den ska användas om en .pptx-fil på "något sätt" är inblandad som indata eller utdata. Det är ett officiellt exempel på regeln "beskrivningen utlöser" som vi tog upp i föregående artikel.

## Var kan du använda dem?

Enligt Claudes dokumentation per oktober 2026 är de här fyra skillsen aktiva av sig själva när du skapar dokument på claude.ai, och de kan också anropas som färdiga skills i Claude API. I Claude Code följer färdiga dokumentskills inte med inbyggda. Men förrådet anthropics/skills kan läggas till som en tilläggsmarknad för Claude Code, och paketet document-skills kan installeras. Enligt instruktionen i förrådet lägger man först till marknaden med kommandot /plugin marketplace add anthropics/skills och installerar sedan document-skills@anthropic-agent-skills.

Det finns en skillnad när det gäller licens. Många skills i förrådet har öppen källkod med Apache 2.0-licens. De fyra dokumentskillsen delas dock som "inte öppen källkod, men med tillgänglig källkod" (source-available). Du kan alltså läsa koden och lära dig av den, men du måste läsa licensfilen innan du fritt distribuerar den i din egen produkt.

> **Visste du det?** pdf-skillen är ett skolexempel på stegvis inläsning. Enligt Anthropics ingenjörsartikel flyttades instruktionerna för formulärifyllning från huvudfilen SKILL.md till en separat fil, forms.md. Claude läser den bara när den verkligen fyller i ett formulär. I förrådet ligger i dag både forms.md, reference.md och en scripts-mapp i pdf-mappen.

## Hjälpare vid sidan av dokumentet

Dokumentproduktion handlar inte bara om filformat. I förrådet anthropics/skills finns andra officiella exempel som fokuserar på innehållet:

- **doc-coauthoring:** Erbjuder ett steg-för-steg-arbetsflöde för att skriva strukturerade texter tillsammans, som tekniska specifikationer, förslag och beslutsunderlag. Det går igenom stegen överföring av kontext, iterativ förfining och verifiering.
- **internal-comms:** Samlar resurser som hjälper till att skriva intern kommunikation, som statusrapporter, ledningsuppdateringar, företagsbrev och FAQ, i de format företaget föredrar. I mappen finns också exempeltexter.
- **brand-guidelines:** Tillämpar Anthropics officiella varumärkesfärger och typografi på ett resultat. Det verkliga värdet är att den visar hur du kan bygga något liknande för ditt eget varumärke.
- **theme-factory:** Innehåller 10 färdiga teman med färger och typsnitt som kan tillämpas på bilder, dokument, rapporter eller HTML-sidor, och skapar vid behov nya teman direkt.

Hjälpcentret nämner dessutom skills som partners som Notion, Figma och Atlassian har förberett för att fungera tillsammans med sina egna MCP-anslutningar. De är användbara när du arbetar med de verktyg där dokumenten skapas (t.ex. Notion-sidor).

## Hur används det i verkligheten?

Det mest effektiva sättet är att kombinera de färdiga dokumentskillsen med din egen lilla skill. Till exempel vet xlsx-skillen hur man producerar Excel på rätt sätt, men den vet inte vilka kolumner ditt företags månatliga försäljningstabell ska ha. Om du skriver en kort skill som beskriver det, arbetar de två skillsen tillsammans och ger en fil som både har rätt format och följer din standard.

Två anmärkningar bör du komma ihåg. För det första skriver förrådet anthropics/skills uttryckligen att skillsen är avsedda för "demonstration och utbildning" och att Claudes eget beteende kan skilja sig från implementationerna där. För det andra behöver dokumentskills en miljö där kod kan köras. Enligt hjälpcentret måste kodkörning vara aktiverad för att skills ska fungera.

I nästa artikel går vi över till skärmsidan: skills som producerar design, gränssnitt och webbresultat.

Vilken sorts dokument förlorar du mest tid på när du gör i ordning dem: tabeller, presentationer eller rapporter?
