---
title: "Skilly pro vývojáře: skill-creator, mcp-builder a další"
excerpt: "Skill, který píše skilly, skill, který staví servery MCP, a balíčky skillů přinášející disciplínu testování a ladění. Ověřený výběr pro vývojáře."
hook: "Existuje skill, který píše skilly"
fact: "20 DOTAZŮ"
factLabel: "Doporučený počet příkladů pro test spouštění"
category: "Umělá inteligence"
---

Pro člověka, který vyvíjí software, jsou skilly zajímavé ze dvou stran. Za prvé existují „tvořivé“ skilly, které ti pomohou psát vlastní skilly rychleji a měřitelně. Za druhé existují balíčky, které agentovi dodají inženýrskou disciplínu (testování, plánování, ladění). V tomto článku se věnujeme oběma, jen na příkladech, jejichž existenci jsme ověřili.

## skill-creator: skill, který píše skilly

Skill-creator z oficiálního repozitáře Anthropicu anthropics/skills je navržen k vytváření nových skillů, úpravě a vylepšování existujících a měření jejich výkonu. Podle jeho popisu se postará také o spouštění hodnocení (eval), porovnávání výsledků analýzou rozptylu a optimalizaci popisu skillu tak, aby se lépe spouštěl.

Pracovní postup je popsán velmi lidsky: rozhodni, co chceš, napiš návrh, připrav několik testovacích zpráv, spusť Claude se skillem s těmito zprávami, společně vyhodnoťte výsledky, přepiš, opakuj. Ve složce jsou samostatné skripty, které spouštějí hodnocení, vytvářejí srovnávací zprávu a vylepšují popis, a také „eval-viewer“ pro vizuální kontrolu výsledků.

Průvodce optimalizací popisu na agentskills.io také uvádí tento skill jako příklad. Podle průvodce skill-creator celý tento cyklus od začátku do konce automatizuje: rozděluje testovací sadu, paralelně měří míru spouštění, navrhuje s Claude vylepšení popisu a vytváří živou zprávu v HTML.

> **Věděl jsi?** V testu spouštění doporučeném agentskills.io se používá zhruba 20 ukázkových zpráv a každá se spouští 3krát. Vyzkoušet jediný popis tedy znamená 60 spuštění. Aby se předešlo přeučení (overfitting), je asi 60 procent zpráv vyčleněno pro vylepšování a 40 procent jen pro ověřování. Průvodce říká, že většinou stačí pět kol.

## mcp-builder a claude-api: pro ty, kdo budují integrace

- **mcp-builder (oficiální):** průvodce vývojem serverů MCP, které umožňují velkým jazykovým modelům komunikovat s externími službami prostřednictvím dobře navržených nástrojů. Pracuje s Pythonem (FastMCP) nebo Node/TypeScriptem (MCP SDK). Skill dělí proces na čtyři fáze: výzkum a plánování, implementace, kontrola a testování, vytvoření hodnocení. Ve složce jsou referenční dokumenty pro jednotlivé jazyky a hodnoticí skripty.
- **claude-api (oficiální):** referenční skill pro Claude API a SDK Anthropicu. Pokrývá témata jako identifikátory modelů, parametry, streamování, používání nástrojů a ukládání do mezipaměti a obsahuje samostatné složky pro mnoho programovacích jazyků. Podle dokumentace Claude je tento open source skill součástí Claude Code.
- **webapp-testing (oficiální):** sada nástrojů pro testování lokálních webových aplikací pomocí Playwrightu. Praktický pomocník, který zmiňujeme i v článku o designu, pro ty, kdo vyvíjejí frontend.

## Z komunity: disciplína inženýrství se Superpowers

Mimo oficiální repozitář je jedním z nejdiskutovanějších balíčků mezi vývojáři repozitář obra/superpowers Jesseho Vincenta pod licencí MIT. Sám sebe popisuje jako „kompletní metodiku vývoje softwaru“ pro kódovací agenty. K říjnu 2026 jsou v repozitáři tyto skilly (výběr):

| Skill | Kdy se uplatní? |
|---|---|
| brainstorming | Před zahájením nové funkce nebo tvůrčí práce |
| writing-plans | Při psaní plánu pro vícekrokovou práci, než se sáhne na kód |
| test-driven-development | Při implementaci: nejdřív selhávající test, pak co nejméně kódu |
| systematic-debugging | Když se objeví chyba nebo selhávající test, než se navrhne oprava |
| verification-before-completion | Ke spuštění ověřovacích příkazů, než se řekne „hotovo“ |

README repozitáře uvádí instalační pokyny pro řadu agentů, kromě Claude Code například Codex, Cursor, Gemini CLI a GitHub Copilot CLI, a poznamenává, že u Claude Code je v oficiálním tržišti pluginů Anthropicu. To je praktický důsledek toho, že Agent Skills jsou otevřený standard: stejný skill může fungovat v různých nástrojích.

## Stejná myšlenka i na jiných platformách

Dokumentace OpenAI pro ChatGPT a Codex také popisuje skilly jako postavené na „otevřeném standardu agent skills“. K říjnu 2026 vyčnívají v dokumentaci dva zabudované pomocné skilly: skill-creator, který vytvoří skill z práce, kterou popíšeš (v Codexu se volá pomocí $skill-creator), a skill-installer, který instaluje hotové skilly z repozitáře openai/skills nebo jiných repozitářů. Codex čte lokální skilly ze složek .agents/skills na úrovni projektu i uživatele.

Nejcennějším návykem pro vývojáře může být tento: každé dlouhé vysvětlení, které opakuješ, svůj kontrolní seznam pro code review nebo kroky nasazení proměnit ve skill a vložit do repozitáře projektu. Skilly umístěné do složky .claude/skills v Claude Code putují spolu s repozitářem i k týmu. Nezapomeň však číst skripty každého komunitního skillu, který nainstaluješ, protože tyto skilly mohou na tvém počítači spouštět kód s tvými oprávněními.

Který krok ve tvém vývojovém procesu tě nejvíc nutí říct „kéž by na to byl skill“: testování, code review, nebo nasazení?
