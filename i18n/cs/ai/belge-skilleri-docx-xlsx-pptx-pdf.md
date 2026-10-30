---
title: "Skilly pro dokumenty: naučit agenta Word, Excel, PowerPoint a PDF"
excerpt: "Co dělají skilly Anthropicu docx, xlsx, pptx a pdf a kde fungují? Oficiální i pomocné skilly, které skutečně pomáhají při tvorbě dokumentů."
hook: "Report, tabulka, prezentace: vše je skill"
fact: "4 DOKUMENTY"
factLabel: "Počet hotových skillů pro dokumenty"
category: "Umělá inteligence"
---

Říct umělé inteligenci „připrav mi report“ je snadné. Těžké je, aby report přišel jako skutečně otevíratelný soubor Word nebo Excel, s nerozbitým formátováním a funkčními vzorci. První a možná nejpoužívanější kategorií skillů je přesně tohle: kancelářské dokumenty. V tomto článku se věnujeme jen skillům, jejichž existenci jsme ověřili.

## Čtyři základní kameny: docx, xlsx, pptx, pdf

Podle dokumentace Claude nabízí Anthropic čtyři hotové (pre-built) skilly pro dokumenty. Pracují na pozadí funkce Claude pro vytváření souborů a Anthropic zveřejňuje jejich zdrojový kód v repozitáři anthropics/skills na GitHubu.

| Skill | Co dělá? (z oficiálních popisů) |
|---|---|
| docx | Vytváří, čte a upravuje dokumenty Word. Včetně formátování a šablon |
| xlsx | Otevírá a upravuje tabulky, přidává vzorce a grafy, čistí neuspořádaná data |
| pptx | Vytváří prezentace, upravuje snímky, čte a rozebírá obsah .pptx |
| pdf | Extrahuje text a tabulky, slučuje a dělí PDF, vyplňuje formuláře, přidává vodoznak |

Popisy v repozitáři jsou napsány dost „naléhavě“. Například popis skillu pptx říká, že se má použít, kdykoli je soubor .pptx „jakkoli“ součástí vstupu nebo výstupu. To je oficiální příklad pravidla „popis spouští“, o kterém jsme psali v předchozím článku.

## Kde je můžeš použít?

K říjnu 2026 jsou podle dokumentace Claude tyto čtyři skilly samočinně aktivní při vytváření dokumentů na claude.ai a lze je volat jako hotové skilly i v Claude API. V Claude Code hotové skilly pro dokumenty nejsou součástí výbavy. Repozitář anthropics/skills lze ale přidat jako tržiště pluginů pro Claude Code a nainstalovat balíček document-skills. Podle pokynů v repozitáři se nejprve přidá tržiště příkazem /plugin marketplace add anthropics/skills a poté se nainstaluje document-skills@anthropic-agent-skills.

U licence je jedno rozlišení. Mnoho skillů v repozitáři je open source pod licencí Apache 2.0. Čtyři skilly pro dokumenty jsou ale sdíleny jako „není open source, zdroj je dostupný“ (source-available). Kód si tedy můžeš prohlédnout a poučit se z něj, ale než ho budeš volně redistribuovat ve vlastním produktu, musíš si přečíst licenční soubor.

> **Věděl jsi?** Skill pdf je učebnicovým příkladem postupného načítání. Podle inženýrského článku Anthropicu byly pokyny k vyplňování formulářů vyňaty z hlavního SKILL.md a přesunuty do samostatného souboru forms.md. Claude tento soubor čte, jen když skutečně vyplňuje formulář. V repozitáři je dnes ve složce pdf soubor forms.md, soubor reference.md i složka scripts.

## Pomocníci kolem dokumentu

Tvorba dokumentů nekončí u formátu souboru. V repozitáři anthropics/skills jsou další oficiální příklady zaměřené na obsah:

- **doc-coauthoring:** nabízí postup krok za krokem pro společné psaní strukturovaných textů, jako jsou technické specifikace, návrhy a rozhodovací dokumenty. Provádí fázemi předání kontextu, iterativního upřesňování a ověřování.
- **internal-comms:** shromažďuje zdroje, které pomáhají psát texty interní komunikace, jako jsou zprávy o stavu, aktualizace pro vedení, firemní newslettery a FAQ, ve formátech preferovaných firmou. Ve složce jsou i ukázkové texty.
- **brand-guidelines:** aplikuje oficiální barvy a typografii značky Anthropic na výstup. Jeho hlavní hodnota je v tom, že ukazuje, jak si podobný skill vytvořit pro vlastní značku.
- **theme-factory:** obsahuje 10 hotových témat barev a písem použitelných na snímek, dokument, report nebo stránku HTML a na požádání vytvoří okamžitě nové téma.

Centrum nápovědy se zmiňuje také o skillech, které partneři jako Notion, Figma a Atlassian připravili k použití spolu s jejich vlastními konektory MCP. Hodí se při práci s nástroji, v nichž dokumenty vznikají (např. stránky Notion).

## Jak se to používá v praxi?

Nejefektivnější je spojit hotové skilly pro dokumenty s vlastním malým skillem. Například skill xlsx ví, jak správně vytvořit Excel, ale neví, jaké sloupce má mít měsíční prodejní tabulka tvé firmy. Napíšeš-li krátký skill, který to popisuje, oba skilly spolupracují a vznikne soubor se správným formátem i podle tvého standardu.

Je třeba nezapomenout na dvě poznámky. Za prvé, repozitář anthropics/skills výslovně uvádí, že tyto skilly jsou „pro demonstraci a výuku“ a že se chování samotného Claude může od zdejších implementací lišit. Za druhé, skilly pro dokumenty potřebují prostředí pro spouštění kódu. Podle Centra nápovědy musí být pro fungování skillů zapnuta funkce spouštění kódu.

V dalším článku přecházíme na stranu obrazovky: skilly, které tvoří design, frontend a webové výstupy.

Při přípravě jakého typu dokumentu ztrácíš nejvíc času ty: tabulky, prezentace, nebo reportu?
