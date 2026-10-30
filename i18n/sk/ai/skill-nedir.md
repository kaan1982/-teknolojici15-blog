---
title: "Čo je skill? Nové \"zručnostné priečinky\" agentov umelej inteligencie"
excerpt: "Agent Skill je priečinok so súborom SKILL.md a voliteľnými skriptami. Agent ho načíta, až keď ho potrebuje. Čím sa líši od promptu, MCP a doplnku?"
hook: "Naučte agenta novú zručnosť priečinkom"
fact: "3 VRSTVY"
factLabel: "Postupné načítavanie obsahu skillu"
category: "Umelá inteligencia"
---
Asistenti s umelou inteligenciou vedia všetko trochu, ale nepoznajú šablónu správ vašej firmy, farby vašej značky ani fígle správneho spracovania určitého typu súboru. Čo keby ste to nemuseli zakaždým dlho vysvetľovať v každom rozhovore, ale mohli to raz zabaliť a povedať agentovi "použi to, keď treba"? Presne to je myšlienka "skillu" (zručnosti).

## Stručne: priečinok a SKILL.md

Podľa definície Anthropic sú Agent Skills modulárne balíky, ktoré rozširujú schopnosti Claude. Každý skill drží pokope pokyny, metadáta a voliteľné zdroje (skripty, šablóny) a Claude ich použije sám, keď sú relevantné. Inžiniersky blog Anthropic to hovorí ešte jednoduchšie: skilly sú "organizované priečinky pokynov, skriptov a zdrojov", ktoré agent načíta, keď ich potrebuje, aby bol lepší v určitých úlohách.

Technicky je skill priečinok, v ktorom je aspoň súbor s názvom SKILL.md. Na začiatku tohto súboru sú vo formáte YAML dve povinné polia: name (názov) a description (opis). Pod nimi sú pokyny napísané obyčajným Markdownom. Do priečinka môžete pridať podpriečinky ako scripts/ (spustiteľný kód), references/ (ďalšie dokumenty) a assets/ (šablóny, obrázky, údaje).

Anthropic prirovnáva túto štruktúru k úvodnej príručke pre nového zamestnanca. Príručku položíte na stôl a zamestnanec ju otvorí, keď ju potrebuje.

## Tajomstvo: nenačíta sa všetko naraz

To, čo odlišuje skilly od obyčajného dlhého promptu, je dizajn nazývaný "postupné odhaľovanie" (progressive disclosure). Podľa dokumentácie Claude sa obsah načítava v troch vrstvách:

| Vrstva | Kedy sa načíta? |
|---|---|
| 1. Metadáta (názov + opis) | Vždy, pri štarte (približne 100 tokenov na skill) |
| 2. Telo SKILL.md | Keď sa skill spustí (odporúča sa do 5 000 tokenov) |
| 3. Ďalšie súbory a skripty | Iba keď je to potrebné; do kontextu sa dostane iba výstup skriptov |

Vďaka tomu môžete agentovi nainštalovať desiatky skillov, ale nezaplnia celé kontextové okno. Kým sa skill nespustí, "na stole" leží z každého len jeho názov a opis. V príklade z dokumentácie drží skill PDF pokyny na vypĺňanie formulárov v samostatnom súbore forms.md a Claude ho číta, len keď naozaj vypĺňa formulár.

> **Vedeli ste?** Anthropic oznámil Agent Skills 16. októbra 2025 a 18. decembra 2025 zverejnil formát ako otvorený štandard na adrese agentskills.io. Preto k októbru 2026 vidíte tú istú štruktúru SKILL.md aj v dokumentácii iných nástrojov, ako sú GitHub Copilot a OpenAI Codex. Dokumentácia Copilotu odkazuje na kontrolu skillov priamo na špecifikáciu agentskills.io.

## Prompt, MCP, doplnok: aké sú rozdiely?

Tieto pojmy sa často zamieňajú, pretože všetky sa týkajú toho, ako urobiť agenta lepším. Rozlíšenie Centra pomoci Claude sa dá zhrnúť takto:

- **Prompt alebo vlastné pokyny:** Všeobecné usmernenia, ktoré platia v každom rozhovore alebo vo všetkých rozhovoroch. Skill je naopak špecifický pre úlohu a zapne sa len vtedy, keď je relevantný.
- **Projekty:** Stále podkladové informácie, ktoré sú vždy načítané v rozhovoroch v rámci projektu. Skill je postup, ktorý sa otvorí, keď je potrebný.
- **Konektory MCP (Model Context Protocol):** Spájajú Claude s externými službami a zdrojmi údajov. Poskytujú teda "prístup". Skill je "znalosť metódy", ktorá opisuje, ako tento prístup používať. Centrum pomoci uvádza, že sa tieto dva často používajú spolu.
- **Doplnky (plugin):** Na strane Claude Code a Cowork je doplnok balíčkom na spoločnú distribúciu viacerých častí (skillov, konektorov, príkazov, podagentov). Dokumentácia OpenAI robí podobné rozlíšenie: skill je formát na písanie, doplnok je spôsob distribúcie.

Stručne: MCP dáva agentovi ruku, skill učí túto ruku zručnosti a doplnok to všetko doručí v jednej škatuli.

## Kde funguje?

Podľa dokumentácie Claude možno skilly k októbru 2026 používať v aplikáciách Claude (claude.ai), v Claude Code a v Claude API spolu s nástrojom na spúšťanie kódu. Centrum pomoci uvádza, že skilly sú dostupné v plánoch Free, Pro, Max, Team a Enterprise a vyžadujú zapnutú funkciu spúšťania kódu.

Dôležitý detail: vlastné skilly sa medzi povrchmi nesynchronizujú. Skill, ktorý nahráte do claude.ai, je len pre váš účet. Skill nahraný do API sa zdieľa v celom pracovnom priestore. V Claude Code sa uchováva osobne (~/.claude/skills/) alebo v priečinku projektu (.claude/skills/).

Je tu aj bezpečnostný rozmer. Keďže skilly môžu spúšťať kód, dokumentácia odporúča brať ich "ako inštaláciu softvéru" a používať ich len z dôveryhodných zdrojov. Tomu sa venujeme osobitne v poslednom článku série.

V ďalších článkoch tejto sekcie si krok za krokom napíšeme vlastný skill a po kategóriách si prejdeme skutočne existujúce skilly, ktoré sa hodia.

Ktorú prácu vysvetľujete umelej inteligencii znova a znova a hovoríte si "kiež by som ju to naučil raz navždy"?
