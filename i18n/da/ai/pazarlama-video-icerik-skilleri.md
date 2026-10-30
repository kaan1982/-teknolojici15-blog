---
title: "Marketing-, video- og indholds-skills: producentens værktøjskasse"
excerpt: "Corey Haines' marketingskills-repository, Anthropics marketing-plugin og skills til Remotion og HeyGen HyperFrames. Ægte udvalg til indhold og video."
hook: "Lav video med kode, skriv tekst med en skill"
fact: "52 SKILLS"
factLabel: "Antal skills i marketingskills-repositoriet"
category: "Kunstig intelligens"
---
Også bag denne blog bliver der hver dag produceret korte videoer, forsider og tekster. Derfor er denne kategori lidt personlig for os: skills, der laver marketing, indhold og video. Det er også det område, hvor community-skills vokser hurtigst i antal. Vi har kun listet eksempler, hvis repositories vi har åbnet og tjekket indholdet i. Alle tal er pr. slutningen af oktober 2026.

## marketingskills: et marketingbibliotek med 52 skills

Corey Haines' MIT-licenserede repository coreyhaines31/marketingskills, manden bag konverteringsoptimeringsbureauet Conversion Factory, er en af de mest omfattende community-samlinger på området. Ifølge README er det lavet til tekniske marketingfolk og grundlæggere og fokuserer på opgaver som konverteringsoptimering, tekstforfatning, SEO, analyse og growth engineering. Det oplyser, at det virker med Claude Code, OpenAI Codex, Cursor og andre agenter, der understøtter Agent Skills-standarden.

I mappen skills i repositoriet er der 52 skills. Nogle eksempler:

- **copywriting:** Til at skrive eller forbedre teksten på alle slags marketingsider, som forsider, landingssider og prissider.
- **seo-audit:** Til at auditere og diagnosticere SEO-problemer på et website.
- **ai-seo:** Til at optimere indhold til AI-søgemaskiner, altså til at blive vist som kilde i de store sprogmodellers svar.
- **emails og cold-email:** Til e-mailsekvenser, automatiske flows og B2B-kampagner med kolde e-mails.
- **social:** Til at oprette og planlægge indhold til LinkedIn, X, Instagram, TikTok og Facebook.

Til installation anbefaler README kommandoen npx skills add coreyhaines31/marketingskills. Man kan også vælge enkelte skills.

## Anthropics marketing-plugin

Anthropics repository anthropics/knowledge-work-plugins samler plugins forberedt efter faggrupper. De er lavet til Claude Cowork og også kompatible med Claude Code. Hvert plugin pakker skills, konnektorer, skråstregskommandoer og underagenter til det pågældende arbejde sammen.

Skillsene i marketing-pluginet er: brand-review (gennemgår et udkast i forhold til mærkets stemme og stilguide og foreslår rettelser med før/efter), campaign-plan (laver et kampagneoverblik med mål, målgruppe, budskab, kanalstrategi og indholdskalender), content-creation, draft-content, email-sequence, competitive-brief, performance-report og seo-audit. README oplyser, at dette plugin kan forbindes til værktøjer som Slack, Canva, Figma, HubSpot og Ahrefs. Her giver skillen altså "metoden", og konnektoren giver "adgangen".

> **Vidste du det?** Videoer kan i dag ikke kun laves ved at trække og slippe på en tidslinje, men også med kode, og det er netop her, skills kommer ind i billedet. Remotion-holdet udgiver sit eget officielle skill-sæt til deres React-baserede videoframework. HeyGen tilbyder derimod HyperFrames, bygget på idéen "skriv HTML, render video", sammen med skills til agenter.

## Til video: Remotion og HyperFrames

| Pakke | Kilde | Hvad tilbyder den? |
|---|---|---|
| remotion-dev/skills | Remotion-holdet (officiel) | 12 skills: oprettelse af video, animationsregler, undertekster, rendering, forhåndsvisning |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skills og færdige blokke til frameworket, der omdanner HTML til video |

**Remotion:** Ifølge README fører Remotion en liste af Agent Skills, der definerer bedste praksis for arbejde i Remotion-projekter. I sættet er der skills som remotion-create, der opretter en ny video, remotion-markup, der bærer viden om animation og layout, remotion-captions til transskribering og animering af undertekster, remotion-render til eksport og remotion-best-practices, der henviser til dem alle. Installationen sker med npx skills add remotion-dev/skills.

**HyperFrames:** HeyGens repository præsenterer sig som "skriv HTML, render video, lavet til agenter". Ifølge README består det grundlæggende sæt af skillsene hyperframes (at lave og redigere video), hyperframes-cli (projektskelet, forhåndsvisning, rendering), hyperframes-registry (cirka 450 færdige blokke til overgange, titler, undertekster og grafik) og media-use (mediearbejde som musik, lydeffekter, billeder og speak). I alt er der 7 udgivne skills.

En interessant detalje: Beskrivelsen af video-skillen i Corey Haines' repository oplister også navne som Remotion, HyperFrames og HeyGen som udløsende ord. Marketing-skillen er altså skrevet til at fungere som en bro til video-skills.

## Hvad skal man se efter, når man vælger?

De fleste skills på dette område stammer fra fællesskabet eller virksomheder og opdateres meget hurtigt. Inden du installerer en pakke, gør det livet lettere at stille disse tre spørgsmål: Hvem ejer repositoriet, og bliver det aktivt opdateret? Indeholder SKILL.md instruktioner, der forbinder til eksterne adresser eller beder om legitimationsoplysninger? Kan du vælge og installere kun de få skills, du faktisk har brug for? De fleste installationsværktøjer lader dig vælge en enkelt skill i stedet for "installer alle", og det mindsker både konteksten og risikoen.

Hvad er den største tidsrøver for dig i indholdsproduktionen: at skrive tekst, at lave billeder eller at klippe video?
