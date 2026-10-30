---
title: "Skilly pre vývojárov: skill-creator, mcp-builder a ďalšie"
excerpt: "Skill, ktorý píše skilly, skill, ktorý buduje server MCP, a balíky skillov, ktoré prinášajú disciplínu testovania a ladenia. Overený výber pre vývojárov."
hook: "Existuje skill, ktorý píše skilly"
fact: "20 DOTAZOV"
factLabel: "Odporúčaný počet ukážok na test spúšťania"
category: "Umelá inteligencia"
---
Pre človeka, ktorý vyvíja softvér, sú skilly zaujímavé z dvoch hľadísk. Po prvé, existujú "tvorivé" skilly, ktoré vám pomáhajú písať vlastné skilly rýchlejšie a merateľne. Po druhé, existujú balíky, ktoré dávajú agentovi inžiniersku disciplínu (testovanie, plán, ladenie). V tomto článku sa venujeme obom, len na príkladoch, ktorých existenciu sme overili.

## skill-creator: skill, ktorý píše skilly

Skill-creator v oficiálnom repozitári Anthropic anthropics/skills je určený na vytváranie nových skillov, úpravu a zlepšovanie existujúcich a meranie ich výkonu. Podľa jeho opisu sa stará aj o spúšťanie hodnotení (eval), porovnávanie výsledkov pomocou analýzy rozptylu a optimalizáciu opisu skillu tak, aby sa lepšie spúšťal.

Pracovný postup je opísaný veľmi ľudsky: rozhodnite sa, čo chcete, napíšte návrh, pripravte niekoľko testovacích správ, spustite Claude so skillom s týmito správami, spolu vyhodnoťte výsledky, prepíšte a opakujte. V priečinku sú samostatné skripty, ktoré spúšťajú hodnotenia, vytvárajú porovnávacie správy a zlepšujú opis, a tiež "eval-viewer" na vizuálnu kontrolu výsledkov.

Príručka agentskills.io o optimalizácii opisov tiež uvádza tento skill ako príklad. Podľa príručky skill-creator automatizuje tento cyklus od začiatku do konca: rozdeľuje testovaciu sadu, paralelne meria miery spustenia, navrhuje s pomocou Claude zlepšenia opisu a vytvára živú správu vo formáte HTML.

> **Vedeli ste?** Test spúšťania, ktorý odporúča agentskills.io, používa približne 20 ukážkových správ a každú spúšťa 3-krát. Vyskúšať jediný opis teda znamená 60 spustení. Aby sa predišlo preučeniu (overfitting), približne 60 percent správ sa vyhradí na zlepšovanie a 40 percent len na overenie. Príručka hovorí, že väčšinou stačí päť kôl.

## mcp-builder a claude-api: pre tých, ktorí budujú integrácie

- **mcp-builder (oficiálny):** Príručka na vývoj serverov MCP, vďaka ktorým veľké jazykové modely komunikujú s externými službami cez dobre navrhnuté nástroje. Funguje s Pythonom (FastMCP) alebo Node/TypeScript (MCP SDK). Skill delí proces na štyri fázy: výskum a plánovanie, implementácia, kontrola a testovanie, tvorba hodnotení. V priečinku sú referenčné dokumenty podľa jazykov a skripty na hodnotenie.
- **claude-api (oficiálny):** Referenčný skill pre Claude API a SDK Anthropic. Pokrýva témy ako ID modelov, parametre, streamovanie, používanie nástrojov a vyrovnávacia pamäť a obsahuje samostatné priečinky pre mnohé programovacie jazyky. Podľa dokumentácie Claude sa tento open source skill dodáva spolu s Claude Code.
- **webapp-testing (oficiálny):** Súprava nástrojov na testovanie lokálnych webových aplikácií pomocou Playwright. Praktický pomocník pre vývojárov rozhraní, o ktorom sme sa zmienili aj v článku o dizajne.

## Z komunity: disciplína inžinierstva so Superpowers

Mimo oficiálneho repozitára je jedným z najdiskutovanejších balíkov medzi vývojármi repozitár obra/superpowers od Jesseho Vincenta s licenciou MIT. Opisuje sa ako "kompletná metodika vývoja softvéru" pre kódovacích agentov. K októbru 2026 sú v repozitári tieto skilly (výber):

| Skill | Kedy sa spustí? |
|---|---|
| brainstorming | Pred začiatkom novej funkcie alebo tvorivej práce |
| writing-plans | Pri písaní plánu pred zásahom do kódu pri viackrokovej práci |
| test-driven-development | Počas implementácie: najprv neúspešný test, potom čo najmenej kódu |
| systematic-debugging | Keď narazíte na chybu alebo neúspešný test, predtým než navrhnete opravu |
| verification-before-completion | Na spustenie overovacích príkazov predtým, než povieme "hotovo" |

README repozitára dáva inštalačné pokyny pre mnohých agentov, ako sú Codex, Cursor, Gemini CLI a GitHub Copilot CLI popri Claude Code, a uvádza, že na strane Claude Code je v oficiálnom trhu doplnkov Anthropic. To je praktický dôsledok toho, že Agent Skills sú otvorený štandard: ten istý skill môže fungovať v rôznych nástrojoch.

## Rovnaká myšlienka aj na iných platformách

Dokumentácia OpenAI pre ChatGPT a Codex tiež opisuje skilly ako postavené na "otvorenom štandarde agent skills". K októbru 2026 vynikajú v dokumentácii dvaja vstavaní pomocníci: skill-creator, ktorý vytvára skill z práce, ktorú opíšete (v Codexe sa volá cez $skill-creator), a skill-installer, ktorý inštaluje hotové skilly z repozitára openai/skills alebo z iných repozitárov. Codex číta lokálne skilly z priečinkov .agents/skills na úrovni projektu a používateľa.

Pre vývojára môže byť najhodnotnejším zvykom toto: každý dlhý opis, ktorý opakujete, kontrolný zoznam kontroly kódu alebo kroky nasadenia zmeniť na skill a vložiť do repozitára projektu. V Claude Code idú skilly vložené do priečinka .claude/skills spolu s repozitárom aj k tímu. Nezabudnite však prečítať skripty každého komunitného skillu, ktorý nainštalujete, pretože tieto skilly môžu na vašom počítači spúšťať kód s vašimi oprávneniami.

Ktorý krok vo vašom vývojovom procese vás najviac núti povedať "kiež by na to bol skill": testovanie, kontrola kódu, alebo nasadenie?
