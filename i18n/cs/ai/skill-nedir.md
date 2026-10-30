---
title: "Co je skill? Nové „složky dovedností“ pro agenty umělé inteligence"
excerpt: "Agent Skill je složka se souborem SKILL.md a volitelnými skripty. Agent ji načte, jen když ji potřebuje. Čím se liší od promptu, MCP a pluginu?"
hook: "Nauč agenta novou dovednost složkou"
fact: "3 VRSTVY"
factLabel: "Postupné načítání obsahu skillu"
category: "Umělá inteligence"
---

Asistenti s umělou inteligencí vědí od všeho trochu, ale neznají šablonu reportu tvé firmy, barvy tvé značky ani fíglů, jak správně zpracovat určitý typ souboru. Co kdybys to nemusel v každé konverzaci zdlouhavě vysvětlovat, ale mohl to jednou zabalit a říct agentovi „použij to, až to bude potřeba“? Přesně to je myšlenka „skillu“ (dovednosti).

## Stručně: složka a SKILL.md

Podle definice Anthropicu jsou Agent Skills modulární balíčky, které rozšiřují schopnosti Claude. Každý skill drží pohromadě pokyny, metadata a volitelné zdroje (skripty, šablony) a Claude je použije sám, když jsou relevantní. Inženýrský blog Anthropicu to říká ještě prostěji: skilly jsou „uspořádané složky pokynů, skriptů a zdrojů“, které agent načítá ve chvíli potřeby, aby byl v určitých úlohách lepší.

Technicky je skill složka, která obsahuje alespoň soubor SKILL.md. Na začátku tohoto souboru jsou ve formátu YAML dvě povinná pole: name (název) a description (popis). Pod nimi následují pokyny napsané obyčejným Markdownem. Do složky můžeš podle potřeby přidat podsložky, například scripts/ (spustitelný kód), references/ (další dokumenty) a assets/ (šablony, obrázky, data).

Anthropic přirovnává tuto strukturu k uvítací příručce pro nového zaměstnance. Příručku položíš na stůl a zaměstnanec do ní nahlédne, když ji potřebuje.

## Tajemství: nenačítá se všechno najednou

Skilly se od obyčejného dlouhého promptu liší designem zvaným „postupné odkrývání“ (progressive disclosure). Podle dokumentace Claude se obsah načítá ve třech vrstvách:

| Vrstva | Kdy se načte? |
|---|---|
| 1. Metadata (název + popis) | Vždy, při startu (zhruba 100 tokenů na skill) |
| 2. Tělo SKILL.md | Když se skill spustí (doporučeno pod 5 000 tokenů) |
| 3. Další soubory a skripty | Jen když je to potřeba; do kontextu se dostane pouze výstup skriptů |

Díky tomu můžeš agentovi nahrát desítky skillů, aniž by všechny zaplnily kontextové okno. Dokud se skill nespustí, „na stole“ leží jen jeho název a popis. V příkladu z dokumentace drží skill pro PDF pokyny k vyplňování formulářů v samostatném souboru forms.md a Claude ten soubor čte, jen když skutečně vyplňuje formulář.

> **Věděl jsi?** Anthropic oznámil Agent Skills 16. října 2025 a 18. prosince 2025 zveřejnil formát jako otevřený standard na adrese agentskills.io. Proto stejnou strukturu SKILL.md vidíš k říjnu 2026 i v dokumentaci dalších nástrojů, například GitHub Copilot a OpenAI Codex. Dokumentace Copilotu odkazuje pro kontrolu skillů přímo na specifikaci agentskills.io.

## Prompt, MCP, plugin: v čem je rozdíl?

Tyto pojmy se často pletou, protože všechny se týkají „zlepšení agenta“. Rozlišení z Centra nápovědy Claude lze shrnout takto:

- **Prompt nebo vlastní pokyny:** obecné pokyny platné v každé konverzaci nebo ve všech konverzacích. Skill je naopak určen pro konkrétní úkol a spouští se, jen když je relevantní.
- **Projekty:** pevné podkladové informace, které jsou v konverzacích uvnitř projektu vždy načteny. Skill je postup, který se otevře, když je potřeba.
- **Konektory MCP (Model Context Protocol):** propojují Claude s externími službami a zdroji dat. Zajišťují tedy „přístup“. Skill je „know-how“, jak tento přístup používat. Centrum nápovědy uvádí, že se oba často používají společně.
- **Pluginy:** v Claude Code a Cowork je plugin balíček pro společnou distribuci více částí (skillů, konektorů, příkazů, podagentů). Dokumentace OpenAI dělá podobné rozlišení: skill je formát pro psaní, plugin je způsob distribuce.

Zkrátka MCP dává agentovi ruku, skill tu ruku učí dovednosti a plugin to vše doručí v jedné krabici.

## Kde funguje?

K říjnu 2026 lze podle dokumentace Claude používat skilly v aplikacích Claude (claude.ai), v Claude Code a v Claude API spolu s nástrojem pro spouštění kódu. Centrum nápovědy uvádí, že skilly jsou dostupné v plánech Free, Pro, Max, Team a Enterprise a vyžadují zapnutou funkci spouštění kódu.

Důležitý detail: vlastní skilly se mezi jednotlivými rozhraními nesynchronizují. Skill nahraný na claude.ai je jen pro tvůj účet. Skill nahraný do API je sdílen s celým pracovním prostorem. V Claude Code se drží osobně (~/.claude/skills/) nebo ve složce projektu (.claude/skills/).

Je tu i bezpečnostní rozměr. Protože skilly mohou spouštět kód, dokumentace doporučuje zacházet s nimi „jako s instalací softwaru“ a používat je jen z důvěryhodných zdrojů. Tomu se věnujeme zvlášť v posledním článku série.

V dalších článcích této části si krok za krokem napíšeme vlastní skill a projdeme skutečně existující a užitečné skilly po kategoriích.

Jakou úlohu, kterou umělé inteligenci den za dnem opakovaně vysvětluješ, bys jí chtěl říct „kéž bych to naučil jen jednou“?
