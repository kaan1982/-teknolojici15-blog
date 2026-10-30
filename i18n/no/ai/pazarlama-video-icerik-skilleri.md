---
title: "Skills for markedsføring, video og innhold: skaperens verktøykasse"
excerpt: "Corey Haines' marketingskills-repo, Anthropics marketing-utvidelse, og skills for Remotion og HeyGen HyperFrames. Ekte utvalg for innhold og video."
hook: "Lag videoen med kode, skriv teksten med en skill"
fact: "52 SKILLS"
factLabel: "Antall skills i marketingskills-repoet"
category: "Kunstig intelligens"
---

Også bak denne bloggen lages det korte videoer, omslag og tekster hver dag. Derfor er denne kategorien litt personlig for oss: skills som lager markedsføring, innhold og video. Her er det også fellesskapets skills formerer seg raskest. Vi har bare tatt med eksempler der vi har åpnet repoet og sjekket innholdet. Alle tall gjelder slutten av oktober 2026.

## marketingskills: et markedsføringsbibliotek med 52 skills

Corey Haines' coreyhaines31/marketingskills-repo med MIT-lisens (han står bak konverteringsoptimaliseringsbyrået Conversion Factory) er en av de mest omfattende fellesskapssamlingene på dette området. Ifølge README er det laget for tekniske markedsførere og gründere, og fokuserer på oppgaver som konverteringsoptimalisering, tekstforfatting, SEO, analyse og vekstteknikk. Det oppgis at det fungerer med Claude Code, OpenAI Codex, Cursor og andre agenter som støtter Agent Skills-standarden.

I skills-mappen i repoet finnes det 52 skills. Noen eksempler:

- **copywriting:** For å skrive eller forbedre teksten på alle typer markedsføringssider, som forsiden, landingssider og prissider.
- **seo-audit:** For å revidere og diagnostisere SEO-problemer på et nettsted.
- **ai-seo:** For å optimalisere innhold for KI-søkemotorer, altså for å bli vist som kilde i svarene til store språkmodeller.
- **emails og cold-email:** For e-postsekvenser, automatiserte flyter og B2B-kampanjer med kald e-post.
- **social:** For å lage og planlegge innhold for LinkedIn, X, Instagram, TikTok og Facebook.

For installasjon foreslår README kommandoen npx skills add coreyhaines31/marketingskills. Man kan også velge enkeltskills.

## Anthropics marketing-utvidelse

Anthropics repo anthropics/knowledge-work-plugins samler utvidelser laget for ulike yrkesgrupper. De er laget for Claude Cowork og er også kompatible med Claude Code. Hver utvidelse pakker skills, koblinger, skråstrekkommandoer og underagenter for den jobben i én pakke.

Skillene i marketing-utvidelsen er disse: brand-review (reviderer et utkast mot merkevarens stemme og stilguide og foreslår rettelser med før/etter), campaign-plan (lager en kampanjeoversikt med mål, målgruppe, budskap, kanalstrategi og innholdskalender), content-creation, draft-content, email-sequence, competitive-brief, performance-report og seo-audit. README lister opp at denne utvidelsen kan kobles til verktøy som Slack, Canva, Figma, HubSpot og Ahrefs. Her gir altså skillen «metoden», og koblingen gir «tilgangen».

> **Visste du at?** Video kan nå lages med kode, ikke bare ved å dra og slippe på en tidslinje, og det er akkurat her skills kommer inn. Remotion-teamet publiserer sitt eget offisielle skill-sett for det React-baserte videorammeverket. HeyGen tilbyr HyperFrames, som bygger på ideen «skriv HTML, render video», sammen med skills for agenter.

## For video: Remotion og HyperFrames

| Pakke | Kilde | Hva tilbyr den? |
|---|---|---|
| remotion-dev/skills | Remotion-teamet (offisiell) | 12 skills: videoopprettelse, animasjonsregler, undertekster, rendering, forhåndsvisning |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skills og ferdige blokker for rammeverket som gjør HTML om til video |

**Remotion:** Ifølge README fører Remotion en liste med Agent Skills som beskriver beste praksis for å jobbe i Remotion-prosjekter. I settet finnes skills som remotion-create (lager ny video), remotion-markup (animasjons- og layoutkunnskap), remotion-captions (transkribering av undertekster og animasjon av dem), remotion-render (eksport) og remotion-best-practices (som viser vei til alle). Installasjon skjer med npx skills add remotion-dev/skills.

**HyperFrames:** HeyGens repo presenterer seg selv som «skriv HTML, render video, laget for agenter». Ifølge README består kjernesettet av skillene hyperframes (lage og redigere video), hyperframes-cli (prosjektskjelett, forhåndsvisning, rendering), hyperframes-registry (rundt 450 ferdige blokker for overganger, titler, undertekster og grafikk) og media-use (mediaoppgaver som musikk, lydeffekter, bilder og voiceover). Til sammen er det 7 publiserte skills.

En interessant detalj: beskrivelsen av video-skillen i Corey Haines' repo lister også navn som Remotion, HyperFrames og HeyGen som utløserord. Markedsføringsskillen er altså skrevet for å fungere som en bro til video-skillene.

## Hva bør du se etter når du velger?

De fleste skills på dette området kommer fra fellesskapet eller selskaper og oppdateres svært raskt. Før du installerer en pakke, hjelper det å stille tre spørsmål: Hvem eier repoet, og oppdateres det aktivt? Finnes det instruksjoner i SKILL.md som kobler til eksterne adresser eller ber om legitimasjon? Kan du velge og installere bare de få skillene du faktisk trenger? De fleste installasjonsverktøy lar deg velge én skill i stedet for «installer alt», og det gjør både konteksten og risikoen mindre.

Hva stjeler mest tid i innholdsproduksjonen din: å skrive tekst, lage bilder eller klippe videoen?
