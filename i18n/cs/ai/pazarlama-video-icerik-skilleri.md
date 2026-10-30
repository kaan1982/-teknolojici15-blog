---
title: "Skilly pro marketing, video a obsah: nástrojová taška tvůrce"
excerpt: "Repozitář marketingskills Coreyho Hainese, marketingový plugin Anthropicu a skilly Remotion a HeyGen HyperFrames. Skutečný výběr pro obsah a video."
hook: "Video kódem, text skillem"
fact: "52 SKILLŮ"
factLabel: "Počet skillů v repozitáři marketingskills"
category: "Umělá inteligence"
---

Za tímto blogem se také každý den vyrábějí krátká videa, obálky a texty. Proto je pro nás tato kategorie trochu osobní: skilly, které tvoří marketing, obsah a video. Je to také oblast, kde se komunitní skilly množí nejrychleji. Uvedli jsme proto jen příklady, jejichž repozitáře jsme otevřeli a prohlédli. Všechna čísla platí ke konci října 2026.

## marketingskills: marketingová knihovna s 52 skilly

Repozitář coreyhaines31/marketingskills pod licencí MIT, jehož autorem je Corey Haines, jméno za agenturou pro optimalizaci konverzí Conversion Factory, je jednou z nejrozsáhlejších komunitních sbírek v tomto oboru. Podle README je určen technickým marketérům a zakladatelům a zaměřuje se na optimalizaci konverzí, copywriting, SEO, analytiku a growth engineering. Uvádí, že funguje s Claude Code, OpenAI Codex, Cursor a dalšími agenty podporujícími standard Agent Skills.

Ve složce skills v repozitáři je 52 skillů. Několik příkladů:

- **copywriting:** pro psaní nebo vylepšování textů jakékoli marketingové stránky, jako je domovská stránka, vstupní stránka nebo stránka s ceníkem.
- **seo-audit:** pro audit a diagnostiku SEO problémů webu.
- **ai-seo:** pro optimalizaci obsahu pro vyhledávače s umělou inteligencí, tedy aby byl uváděn jako zdroj v odpovědích velkých jazykových modelů.
- **emails a cold-email:** pro e-mailové sekvence, automatizované toky a B2B kampaně studených e-mailů.
- **social:** pro tvorbu a plánování obsahu pro LinkedIn, X, Instagram, TikTok a Facebook.

K instalaci README doporučuje příkaz npx skills add coreyhaines31/marketingskills. Lze vybrat i jednotlivé skilly.

## Marketingový plugin Anthropicu

Repozitář Anthropicu anthropics/knowledge-work-plugins shromažďuje pluginy připravené podle profesních skupin. Jsou vytvořeny pro Claude Cowork a jsou kompatibilní i s Claude Code. Každý plugin balí skilly, konektory, příkazy s lomítkem a podagenty pro danou práci dohromady.

Skilly v pluginu marketing jsou: brand-review (kontroluje návrh podle hlasu značky a stylového průvodce a navrhuje opravy před/po), campaign-plan (vytvoří přehled kampaně s cílem, publikem, sdělením, strategií kanálů a obsahovým kalendářem), content-creation, draft-content, email-sequence, competitive-brief, performance-report a seo-audit. README uvádí, že se plugin může připojit k nástrojům jako Slack, Canva, Figma, HubSpot a Ahrefs. Skill tu tedy poskytuje „metodu“ a konektor „přístup“.

> **Věděl jsi?** Videa se dnes nevytvářejí jen přetahováním na časové ose, ale i kódem, a právě tady vstupují do hry skilly. Tým Remotion zveřejňuje vlastní oficiální sadu skillů pro svůj framework pro video založený na Reactu. HeyGen zase nabízí HyperFrames, postavené na myšlence „napiš HTML, vyrenderuj video“, spolu se skilly pro agenty.

## Pro video: Remotion a HyperFrames

| Balíček | Zdroj | Co nabízí? |
|---|---|---|
| remotion-dev/skills | Tým Remotion (oficiální) | 12 skillů: tvorba videa, pravidla animace, titulky, render, náhled |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skilly pro framework převádějící HTML na video a hotové bloky |

**Remotion:** Podle README vede Remotion seznam Agent Skills popisující nejlepší postupy při práci v projektech Remotion. V sadě jsou skilly jako remotion-create, který vytváří nové video, remotion-markup s poznatky o animaci a rozvržení, remotion-captions pro přepis titulků a jejich animaci, remotion-render pro export a remotion-best-practices, který odkazuje na všechny. Instalace se provádí příkazem npx skills add remotion-dev/skills.

**HyperFrames:** Repozitář HeyGen se představuje jako „napiš HTML, vyrenderuj video, vytvořeno pro agenty“. Podle README se základní sada skládá ze skillů hyperframes (tvorba a úpravy videa), hyperframes-cli (kostra projektu, náhled, render), hyperframes-registry (zhruba 450 hotových bloků přechodů, titulků, titulkování a grafik) a media-use (práce s médii, jako je hudba, zvukové efekty, obrázky a komentář). Celkem je publikováno 7 skillů.

Zajímavý detail: popis video skillu v repozitáři Coreyho Hainese uvádí jako spouštěcí slova také názvy jako Remotion, HyperFrames a HeyGen. Marketingový skill byl tedy napsán tak, aby fungoval jako most k video skillům.

## Na co se při výběru dívat?

Většina skillů v této oblasti pochází od komunity nebo firem a aktualizuje se velmi rychle. Než balíček nainstaluješ, usnadní ti práci tři otázky: Čí je repozitář a aktivně se aktualizuje? Je v SKILL.md pokyn, který se připojuje na externí adresy nebo žádá přihlašovací údaje? Můžeš nainstalovat jen těch pár skillů, které opravdu potřebuješ? Většina instalačních nástrojů umožňuje místo „nainstaluj vše“ vybrat jednotlivé skilly, což zmenšuje kontext i riziko.

Co je pro tebe při tvorbě obsahu největší zloděj času: psaní textů, příprava obrázků, nebo střih videa?
