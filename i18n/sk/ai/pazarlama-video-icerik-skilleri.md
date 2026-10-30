---
title: "Skilly pre marketing, video a obsah: súprava nástrojov tvorcu"
excerpt: "Repozitár marketingskills od Coreyho Hainesa, marketingový doplnok Anthropic, skilly Remotion a HeyGen HyperFrames. Skutočný výber pre obsah a video."
hook: "Video z kódu, text so skillom"
fact: "52 SKILLOV"
factLabel: "Počet skillov v repozitári marketingskills"
category: "Umelá inteligencia"
---
Aj za týmto blogom vznikajú každý deň krátke videá, titulné obrázky a texty. Táto kategória je pre nás preto trochu osobná: skilly, ktoré vytvárajú marketing, obsah a video. Je to zároveň oblasť, kde sa komunitné skilly množia najrýchlejšie. Uviedli sme len príklady, ktorých repozitáre sme otvorili a skontrolovali. Všetky čísla platia ku koncu októbra 2026.

## marketingskills: marketingová knižnica s 52 skillmi

Repozitár coreyhaines31/marketingskills Coreyho Hainesa, muža za agentúrou na optimalizáciu konverzií Conversion Factory, s licenciou MIT je jednou z najkomplexnejších komunitných zbierok v tejto oblasti. Podľa README je pripravený pre technických marketérov a zakladateľov; zameriava sa na optimalizáciu konverzií, písanie textov, SEO, analytiku a rastové inžinierstvo. Uvádza, že funguje s Claude Code, OpenAI Codex, Cursor a ďalšími agentmi, ktorí podporujú štandard Agent Skills.

V priečinku skills v repozitári je 52 skillov. Niekoľko príkladov:

- **copywriting:** Na písanie alebo zlepšovanie textov akýchkoľvek marketingových stránok, ako je domovská stránka, vstupná stránka či stránka s cenníkom.
- **seo-audit:** Na audit a diagnostiku problémov SEO na stránke.
- **ai-seo:** Na optimalizáciu obsahu pre vyhľadávače s umelou inteligenciou, teda na to, aby vás veľké jazykové modely uvádzali ako zdroj vo svojich odpovediach.
- **emails a cold-email:** Na e-mailové sekvencie, automatické toky a B2B kampane so studenými e-mailmi.
- **social:** Na tvorbu a plánovanie obsahu pre LinkedIn, X, Instagram, TikTok a Facebook.

Na inštaláciu README odporúča príkaz npx skills add coreyhaines31/marketingskills. Dá sa vybrať aj jednotlivý skill.

## Marketingový doplnok Anthropic

Repozitár Anthropic anthropics/knowledge-work-plugins zbiera doplnky pripravené podľa profesií. Sú vytvorené pre Claude Cowork a sú kompatibilné aj s Claude Code. Každý doplnok balí dohromady skilly, konektory, príkazy s lomkou a podagentov pre danú prácu.

Skilly vo vnútri doplnku marketing sú tieto: brand-review (kontroluje návrh podľa hlasu značky a štýlovej príručky a navrhuje opravy pred/po), campaign-plan (vytvára zhrnutie kampane s cieľom, publikom, posolstvom, stratégiou kanálov a obsahovým kalendárom), content-creation, draft-content, email-sequence, competitive-brief, performance-report a seo-audit. README uvádza, že sa tento doplnok môže pripojiť k nástrojom ako Slack, Canva, Figma, HubSpot a Ahrefs. Skill tu teda poskytuje "metódu" a konektor "prístup".

> **Vedeli ste?** Videá sa dnes dajú vytvárať nielen presúvaním na časovej osi, ale aj pomocou kódu, a práve tu vstupujú do hry skilly. Tím Remotion zverejňuje vlastnú oficiálnu sadu skillov pre svoj videorámec založený na Reacte. HeyGen zasa ponúka HyperFrames, založený na myšlienke "napíš HTML, vyrenderuj video", spolu so skillmi pre agentov.

## Pre video: Remotion a HyperFrames

| Balík | Zdroj | Čo ponúka? |
|---|---|---|
| remotion-dev/skills | Tím Remotion (oficiálny) | 12 skillov: tvorba videa, pravidlá animácie, titulky, render, ukážka |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skilly pre rámec, ktorý mení HTML na video, a hotové bloky |

**Remotion:** Podľa README udržiava Remotion zoznam Agent Skills, ktorý definuje najlepšie postupy práce v projektoch Remotion. V sade sú skilly ako remotion-create, ktorý vytvára nové video, remotion-markup, ktorý nesie znalosti o animácii a rozložení, remotion-captions na prepis titulkov a ich animáciu, remotion-render na export a remotion-best-practices, ktorý smeruje ku všetkým. Inštaluje sa pomocou npx skills add remotion-dev/skills.

**HyperFrames:** Repozitár HeyGen sa predstavuje ako "napíš HTML, vyrenderuj video, vytvorené pre agentov". Podľa README základnú sadu tvoria skilly hyperframes (tvorba a úprava videa), hyperframes-cli (kostra projektu, ukážka, render), hyperframes-registry (približne 450 hotových blokov prechodov, titulkov, nadpisov a grafov) a media-use (práca s médiami, ako je hudba, zvukové efekty, obrázky a hlasový prejav). Spolu je zverejnených 7 skillov.

Zaujímavý detail: opis video skillu v repozitári Coreyho Hainesa uvádza ako spúšťacie slová aj mená ako Remotion, HyperFrames a HeyGen. Marketingový skill je teda napísaný tak, aby fungoval ako most k video skillom.

## Na čo dávať pozor pri výbere?

Väčšina skillov v tejto oblasti pochádza od komunity alebo firiem a aktualizuje sa veľmi rýchlo. Pred inštaláciou balíka vám uľahčia prácu tri otázky: Komu patrí repozitár a aktívne sa aktualizuje? Je v SKILL.md pokyn, ktorý sa pripája na externé adresy alebo žiada prihlasovacie údaje? Viete nainštalovať len tých niekoľko skillov, ktoré skutočne potrebujete? Väčšina inštalačných nástrojov umožňuje vybrať jednotlivý skill namiesto "nainštalovať všetko", a to zmenšuje kontext aj riziko.

Čo je pri tvorbe obsahu vaším najväčším zlodejom času: písanie textov, príprava obrázkov, alebo strih videa?
