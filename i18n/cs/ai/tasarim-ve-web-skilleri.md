---
title: "Skilly pro design a web: rozhraní, která nevoní šablonou"
excerpt: "frontend-design, web-artifacts-builder, canvas-design a skill web-design-guidelines od Vercelu. Skutečné skilly, které zlepšují rozhraní vytvořená agentem."
hook: "Proč je design z umělé inteligence pořád stejný?"
fact: "10 TÉMAT"
factLabel: "Počet hotových témat v theme-factory"
category: "Umělá inteligence"
---

Pokud sis nechal umělou inteligenci vytvořit webovou stránku, pravděpodobně sis všiml: výsledek funguje, ale odněkud je povědomý. Stejné fialové přechody, stejný vystředěný nadpis, stejné rozložení karet. Velká část designových skillů se potýká právě s tímto problémem: přimět model, aby dělal vědomé designové rozhodnutí, ne aby volil „výchozí“.

U každého skillu v tomto článku jsme uvedli zdroj. Oficiální repozitář Anthropicu je anthropics/skills, komunitní nebo firemní repozitáře jsou označeny zvlášť.

## frontend-design: únik z výchozího nastavení

Popis skillu frontend-design v oficiálním repozitáři je jasný: vedení pro „vědomý, výrazný vizuální design“ při tvorbě nového rozhraní nebo přetváření stávajícího. Pomáhá s estetickým směrem, typografií a volbami, které „nepůsobí jako šablona“.

Tělo skillu staví model do role vedoucího designu v designovém studiu a začíná předpokladem, že klient klišovité návrhy už odmítl. Je to také příklad dobré techniky psaní skillů: místo hromadění informací dát modelu jasný úhel pohledu.

## Webové výstupy: web-artifacts-builder a webapp-testing

- **web-artifacts-builder (oficiální):** sada nástrojů pro tvorbu složitých HTML výstupů s více komponentami, které vyžadují správu stavu nebo směrování, na claude.ai s moderními frontendovými technologiemi, jako jsou React, Tailwind CSS a shadcn/ui. Jeho popis také uvádí, že se nemá používat pro jednoduché úlohy s jedním HTML souborem. Ve složce jsou skripty, které projekt inicializují a zabalí do jediného souboru.
- **webapp-testing (oficiální):** sada nástrojů pro testování lokálních webových aplikací pomocí Playwrightu. Slouží k ověřování funkcí frontendu, ladění chyb rozhraní, pořizování snímků obrazovky a čtení protokolů prohlížeče. Odpověď na otázku „opravdu to funguje?“ po dokončení designu.

> **Věděl jsi?** Skill theme-factory v oficiálním repozitáři přichází s 10 hotovými tématy, která lze použít na jakýkoli výstup od snímku po vstupní stránku HTML. I názvy souborů s tématy ve složce jsou inspirativní: „arctic-frost“, „midnight-galaxy“, „golden-hour“, „tech-innovation“. Na požádání dokáže skill okamžitě vytvořit i nové téma.

## Vizuální umění: canvas-design, algorithmic-art, slack-gif-creator

V repozitáři Anthropicu jsou další tři skilly zastupující „tvůrčí“ stranu:

- **canvas-design:** používá přístup „filozofie designu“ k vytváření plakátů, uměleckých děl nebo statických návrhů ve formátu .png a .pdf. Ve složce je přes 80 souborů s písmy. Jeho popis výslovně vyžaduje, aby se nekopírovala tvorba existujících umělců.
- **algorithmic-art:** vytváří generativní umění pomocí p5.js s náhodností se zadaným semínkem (seeded randomness) a interaktivními parametry. Je určen pro požadavky jako toková pole nebo částicové systémy.
- **slack-gif-creator:** nabízí omezení, nástroje pro ověřování a nápady na animace pro tvorbu animovaných GIFů optimalizovaných pro Slack. Pro požadavky typu „udělej mi Slack GIF, kde X dělá Y“.

## Z komunity: rozhraní a React skilly od Vercelu

Mimo oficiální repozitář je jedním z nejznámějších balíčků zaměřených na design repozitář vercel-labs/agent-skills od Vercelu. K říjnu 2026 jsou v repozitáři tyto skilly:

| Skill | Co dělá? |
|---|---|
| web-design-guidelines | Kontroluje kód rozhraní podle více než 100 pravidel zahrnujících přístupnost, výkon a uživatelský zážitek |
| vercel-react-best-practices | Pravidla výkonu pro React a Next.js z inženýrské praxe Vercelu (více než 40 v 8 kategoriích) |
| vercel-composition-patterns | Vzory škálovatelné kompozice komponent Reactu |
| vercel-react-view-transitions | Plynulé přechodové animace pomocí View Transition API Reactu |
| vercel-react-native-skills | Pravidla výkonu a architektury pro React Native a Expo |

Tyto skilly nejsou vázány na jediný nástroj. Repozitář Vercelu doporučuje instalaci příkazem npx skills add vercel-labs/agent-skills a skilly lze používat v různých agentech podporujících standard Agent Skills.

## Který kdy použít?

Praktické pořadí může být takové: designový směr urči pomocí frontend-design, barvy a písma ustal pomocí theme-factory nebo vlastního skillu značky, výstup vytvoř pomocí web-artifacts-builder, pak ho zkontroluj pomocí web-design-guidelines a vyzkoušej v prohlížeči pomocí webapp-testing. Každý je samostatná specializace a díky postupnému načítání jejich současná instalace nenafukuje kontext.

Upozornění: některé z těchto skillů (např. web-artifacts-builder) spouštějí skripty. Dokumentace Claude doporučuje zacházet se skilly jako s instalací softwaru a instalovat je jen ze zdrojů, kterým důvěřuješ. Je dobrým zvykem před instalací jakéhokoli balíčku mimo oficiální repozitář nahlédnout do jeho SKILL.md a skriptů.

Myslíš, že se designy vytvářené s umělou inteligencí budou časem různorodější, nebo vznikne nová „jednotvárnost“, jakmile všichni budou používat stejné skilly?
