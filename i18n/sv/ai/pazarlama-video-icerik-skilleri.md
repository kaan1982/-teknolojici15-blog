---
title: "Skills för marknadsföring, video och innehåll: skaparens verktygslåda"
excerpt: "Corey Haines förråd marketingskills, Anthropics marketing-tillägg samt skills för Remotion och HeyGen HyperFrames. Verkliga urval för innehåll och video."
hook: "Koda videon, skriv texten med en skill"
fact: "52 SKILLS"
factLabel: "Antal skills i förrådet marketingskills"
category: "AI"
---

Även bakom den här bloggen produceras korta videor, omslag och texter varje dag. Därför är den här kategorin lite personlig för oss: skills som producerar marknadsföring, innehåll och video. Det här är också det område där community-skills ökar snabbast. Vi har bara listat exempel vars förråd vi har öppnat och kontrollerat. Alla siffror gäller per slutet av oktober 2026.

## marketingskills: ett marknadsföringsbibliotek med 52 skills

Corey Haines MIT-licensierade förråd coreyhaines31/marketingskills, han som ligger bakom konverteringsbyrån Conversion Factory, är en av de mest omfattande community-samlingarna på området. Enligt README:n är det framtaget för tekniska marknadsförare och grundare och fokuserar på arbete som konverteringsoptimering, copywriting, SEO, analys och growth engineering. Det uppges fungera med Claude Code, OpenAI Codex, Cursor och andra agenter som stöder standarden Agent Skills.

I mappen skills i förrådet finns 52 skills. Några exempel:

- **copywriting:** För att skriva eller förbättra texten på alla slags marknadsföringssidor, som startsida, landningssida och prissida.
- **seo-audit:** För att granska och diagnostisera SEO-problem på en webbplats.
- **ai-seo:** För att optimera innehåll för AI-sökmotorer, alltså för att bli angiven som källa i svaren från stora språkmodeller.
- **emails och cold-email:** För e-postsekvenser, automatiska flöden och kalla B2B-mejlkampanjer.
- **social:** För att skapa och planera innehåll för LinkedIn, X, Instagram, TikTok och Facebook.

För installationen föreslår README:n kommandot npx skills add coreyhaines31/marketingskills. Det går också att välja enskilda skills.

## Anthropics marketing-tillägg

Anthropics förråd anthropics/knowledge-work-plugins samlar tillägg som är framtagna för olika yrkesgrupper. De är gjorda för Claude Cowork och är också kompatibla med Claude Code. Varje tillägg paketerar skills, anslutningar, snedstreckskommandon och underagenter för det arbetet.

Skillsen i tillägget marketing är: brand-review (granskar ett utkast mot varumärkesrösten och stilguiden och föreslår rättningar före/efter), campaign-plan (tar fram en kampanjsammanfattning med mål, målgrupp, budskap, kanalstrategi och innehållskalender), content-creation, draft-content, email-sequence, competitive-brief, performance-report och seo-audit. README:n listar att tillägget kan kopplas till verktyg som Slack, Canva, Figma, HubSpot och Ahrefs. Här står alltså skillen för "metoden" och anslutningen för "åtkomsten".

> **Visste du det?** Videor kan numera produceras med kod, inte bara med dra och släpp på en tidslinje, och det är precis här skills kommer in. Remotion-teamet publicerar en egen officiell skilluppsättning för sitt React-baserade videoramverk. HeyGen erbjuder HyperFrames, som bygger på idén "skriv HTML, rendera video", tillsammans med skills för agenter.

## För video: Remotion och HyperFrames

| Paket | Källa | Vad erbjuder det? |
|---|---|---|
| remotion-dev/skills | Remotion-teamet (officiell) | 12 skills: skapa video, animationsregler, undertexter, rendering, förhandsvisning |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skills och färdiga block för ramverket som gör om HTML till video |

**Remotion:** Enligt README:n för Remotion en lista över Agent Skills som beskriver bästa praxis för arbete i Remotion-projekt. I uppsättningen finns skills som remotion-create, som skapar en ny video, remotion-markup, som bär kunskap om animation och layout, remotion-captions för transkribering och animering av undertexter, remotion-render för export och remotion-best-practices, som hänvisar till alla. Installationen görs med npx skills add remotion-dev/skills.

**HyperFrames:** HeyGens förråd presenterar sig som "skriv HTML, rendera video, byggt för agenter". Enligt README:n består grunduppsättningen av skillsen hyperframes (skapa och redigera video), hyperframes-cli (projektstomme, förhandsvisning, rendering), hyperframes-registry (cirka 450 färdiga block för övergångar, rubriker, undertexter och grafik) och media-use (medieuppgifter som musik, ljudeffekter, bilder och voiceover). Sammanlagt finns 7 publicerade skills.

En intressant detalj: beskrivningen av videoskillen i Corey Haines förråd listar också namn som Remotion, HyperFrames och HeyGen som utlösande ord. Marknadsföringsskillen har alltså skrivits för att fungera som en brygga till videoskillsen.

## Vad ska du titta på när du väljer?

De flesta skills på det här området kommer från communityn eller företag och uppdateras mycket snabbt. Innan du installerar ett paket underlättar det att ställa de här tre frågorna: Vems är förrådet, och uppdateras det aktivt? Finns det någon instruktion i SKILL.md som ansluter till externa adresser eller ber om inloggningsuppgifter? Kan du välja och installera just de få skills du faktiskt behöver? De flesta installationsverktyg låter dig välja en enskild skill i stället för "installera allt", och det minskar både kontexten och risken.

Vad stjäl mest tid för dig i innehållsproduktionen: att skriva texter, att ta fram bilder eller att klippa videon?
