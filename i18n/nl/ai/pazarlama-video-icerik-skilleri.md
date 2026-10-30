---
title: "Skills voor marketing, video en content: de gereedschapskist van de maker"
excerpt: "De repository marketingskills van Corey Haines, de marketingplugin van Anthropic, en de skills van Remotion en HeyGen HyperFrames. Echte selecties voor content en video."
hook: "Maak video met code, schrijf tekst met een skill"
fact: "52 SKILLS"
factLabel: "Aantal skills in de repository marketingskills"
category: "AI"
---
Ook achter deze blog worden elke dag korte video's, covers en teksten gemaakt. Deze categorie is voor ons dus een beetje persoonlijk: skills die marketing, content en video produceren. Het is ook het gebied waar communityskills het snelst in aantal toenemen. Wij hebben alleen voorbeelden opgenomen waarvan we de repository hebben geopend en de inhoud hebben gecontroleerd. Alle aantallen zijn van eind oktober 2026.

## marketingskills: een marketingbibliotheek van 52 skills

De MIT-gelicentieerde repository coreyhaines31/marketingskills van Corey Haines, de naam achter het conversieoptimalisatiebureau Conversion Factory, is een van de uitgebreidste communitycollecties op dit gebied. Volgens de README is hij gemaakt voor technische marketeers en oprichters en richt hij zich op werk als conversieoptimalisatie, copywriting, SEO, analytics en growth engineering. Hij werkt naar eigen zeggen met Claude Code, OpenAI Codex, Cursor en andere agents die de Agent Skills-standaard ondersteunen.

De map skills in de repository bevat 52 skills. Een paar voorbeelden:

- **copywriting:** Om de tekst van elk soort marketingpagina te schrijven of te verbeteren, zoals een homepage, landingspagina of prijzenpagina.
- **seo-audit:** Om de SEO-problemen van een site te auditen en te diagnosticeren.
- **ai-seo:** Om content te optimaliseren voor AI-zoekmachines, dus om als bron genoemd te worden in de antwoorden van grote taalmodellen.
- **emails en cold-email:** Voor e-mailreeksen, geautomatiseerde flows en B2B-koude e-mailcampagnes.
- **social:** Om content te maken en te plannen voor LinkedIn, X, Instagram, TikTok en Facebook.

Voor de installatie raadt de README het commando npx skills add coreyhaines31/marketingskills aan. Je kunt ook afzonderlijke skills kiezen.

## De marketingplugin van Anthropic

De repository anthropics/knowledge-work-plugins van Anthropic bundelt plugins per beroepsgroep. Ze zijn gemaakt voor Claude Cowork en ook compatibel met Claude Code. Elke plugin verpakt de skills, connectoren, slash-commando's en subagents voor dat werk in één pakket.

De skills in de marketingplugin zijn: brand-review (controleert een concept aan de hand van de merkstem en de stijlgids en stelt voor-en-na-correcties voor), campaign-plan (maakt een campagneoverzicht met doel, doelgroep, boodschap, kanaalstrategie en contentkalender), content-creation, draft-content, email-sequence, competitive-brief, performance-report en seo-audit. De README vermeldt dat deze plugin kan koppelen met tools als Slack, Canva, Figma, HubSpot en Ahrefs. De skill levert hier dus de "methode" en de connector de "toegang".

> **Wist je dat?** Video's kunnen tegenwoordig niet alleen met slepen en neerzetten op een tijdlijn worden gemaakt, maar ook met code, en precies daar komen skills in beeld. Het Remotion-team publiceert een eigen officiële skillset voor zijn op React gebaseerde videoframework. HeyGen biedt HyperFrames aan, gebaseerd op het idee "schrijf HTML, render video", samen met skills voor agents.

## Voor video: Remotion en HyperFrames

| Pakket | Bron | Wat biedt het? |
|---|---|---|
| remotion-dev/skills | Remotion-team (officieel) | 12 skills: video's maken, animatieregels, ondertitels, renderen, voorvertoning |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skills en kant-en-klare blokken voor het framework dat HTML in video omzet |

**Remotion:** Volgens de README houdt Remotion een lijst Agent Skills bij die de best practices beschrijft voor het werken in Remotion-projecten. In de set zitten skills als remotion-create voor het maken van nieuwe video's, remotion-markup met kennis over animatie en opmaak, remotion-captions voor het uitschrijven en animeren van ondertitels, remotion-render voor exporteren, en remotion-best-practices dat naar alle andere doorverwijst. Installeren gaat met npx skills add remotion-dev/skills.

**HyperFrames:** De repository van HeyGen presenteert zichzelf als "schrijf HTML, render video, gemaakt voor agents". Volgens de README bestaat de basisset uit de skills hyperframes (video's maken en bewerken), hyperframes-cli (projectopzet, voorvertoning, renderen), hyperframes-registry (ongeveer 450 kant-en-klare overgangen, titels, ondertitels en grafiekblokken) en media-use (mediawerk zoals muziek, geluidseffecten, beeld en voice-over). In totaal zijn er 7 gepubliceerde skills.

Een interessant detail: de beschrijving van de videoskill in de repository van Corey Haines noemt namen als Remotion, HyperFrames en HeyGen ook als activeringswoorden. Die marketingskill is dus geschreven om als brug naar de videoskills te dienen.

## Waar let je op bij het kiezen?

De meeste skills op dit gebied komen van de community of van bedrijven en worden razendsnel bijgewerkt. Drie vragen maken het makkelijker voordat je een pakket installeert: Van wie is de repository en wordt hij actief bijgewerkt? Staat er in SKILL.md een instructie die verbinding maakt met externe adressen of om inloggegevens vraagt? Kun je een paar skills kiezen die je echt nodig hebt? De meeste installatietools laten je een enkele skill kiezen in plaats van "alles installeren", en dat verkleint zowel de context als het risico.

Wat is bij het maken van content voor jou de grootste tijdsdief: tekst schrijven, beeld voorbereiden of de video monteren?
