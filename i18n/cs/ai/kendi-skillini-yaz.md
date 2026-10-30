---
title: "Napiš si vlastní skill: první dovednost krok za krokem se SKILL.md"
excerpt: "Složka, soubor SKILL.md a dobře napsaný popis. Postup psaní vlastního Agent Skillu, význam pole description a způsob testování."
hook: "Skill spouští jeho popis"
fact: "1 024"
factLabel: "Maximální počet znaků pole description"
category: "Umělá inteligence"
---

K napsání skillu nemusíš být programátor. V nejjednodušší podobě stačí složka a v ní jediný textový soubor. Rozdíl mezi skillem, který funguje dobře, a skillem, který se nikdy nespustí, ale často tkví v jediné větě: v popisu. V tomto článku napíšeme od nuly malý, ale skutečný skill.

## Krok 1: Vytvoř složku a SKILL.md

Podle specifikace Agent Skills je skill složka obsahující alespoň soubor SKILL.md. Na úplném začátku souboru je YAML úvod (frontmatter) a dvě pole jsou povinná:

- **name:** nejvýše 64 znaků. Pouze malá písmena, číslice a pomlčky. Nesmí začínat ani končit pomlčkou, nesmí obsahovat dvě pomlčky za sebou a musí být stejný jako název složky. Dokumentace Claude navíc uvádí, že slova „anthropic“ a „claude“ se v názvu nesmějí používat.
- **description:** nesmí být prázdný, nejvýše 1 024 znaků. Musí popisovat, co skill dělá a kdy se má použít.

Existují i volitelná pole (license, compatibility, metadata a experimentální allowed-tools), ale pro většinu skillů nejsou potřeba.

## Krok 2: Napiš popis pečlivě

Proč je popis tak důležitý? Protože agent při startu čte u každého skillu jen název a popis. Slovy agentskills.io spočívá „celá tíha“ spouštění na popisu. Pokud popis neříká, kdy se práce hodí, agent po tom skillu nesáhne.

Doporučení zdrojů lze shrnout takto:

- Napiš, **co dělá**, i **kdy se má použít**.
- Dokumentace Claude doporučuje psát popis **ve třetí osobě**, protože se vkládá do systémového promptu („Zpracovává soubory Excelu“, ne „Mohu ti pomoci“).
- agentskills.io doporučuje výslovně uvést i situace, kdy uživatel danou oblast nepojmenuje.
- Drž se stručnosti: několik vět, nejvýše krátký odstavec. Claude Code v seznamu zkracuje popis na 1 536 znaků, takže nejdůležitější případ použití patří na začátek.

## Krok 3: Tělo drž krátké, skript chytrý

Jako příklad si představme skill odpovídající pravidlu psaní tohoto blogu: v textu nemá zůstat dlouhá pomlčka (em dash) ani polodlouhá pomlčka (en dash). Struktura složky může vypadat takto:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

Soubor SKILL.md pak má tento obsah:

```markdown
---
name: tire-denetimi
description: Najde v blogových článcích dlouhou pomlčku (U+2014) a polodlouhou pomlčku (U+2013) a navrhne opravu. Použije se, když uživatel připravuje článek v Markdownu k publikaci, když řekne „zkontroluj pomlčky“ nebo „dodržuje to pravidla psaní“, nebo když chce závěrečnou kontrolu před zveřejněním, i když to takto nepojmenuje.
---

# Kontrola pomlček

1. Spusť příkaz `python scripts/tire_bul.py <soubor.md>`.
2. U každého řádku z výstupu navrhni nahrazení pomlčky tečkou, čárkou, dvojtečkou nebo závorkou.
3. Neměň význam. Řádky, u kterých si nejsi jistý, se zeptej uživatele.
4. Na konci jednou větou oznam, kolik řádků jsi opravil.
```

Dokumentace Claude považuje kontextové okno za „společný zdroj“ a doporučuje přidávat jen informace, které model ještě nezná. Tělo by mělo zůstat pod 500 řádky. Dlouhé referenční texty je třeba přesunout do samostatných souborů a odkazovat na ně ze SKILL.md jedinou úrovní.

Pravidlo pro skripty je také jasné: „vyřeš to, neodhazuj to dál“. Skript tedy má chybové stavy ošetřit sám, ne být psán v duchu „ať to spadne, Claude si poradí“. Když se skript spustí, do kontextu se dostane ne samotný kód, ale jen jeho výstup. Díky tomu je skript u opakovaných a na chyby citlivých úloh spolehlivější než pokyny.

> **Věděl jsi?** V Claude Code se dřívější „vlastní příkazy s lomítkem“ spojily se skilly. Soubor .claude/commands/deploy.md a soubor .claude/skills/deploy/SKILL.md vytvářejí stejný příkaz /deploy. Pokud nechceš, aby se skill spouštěl automaticky, přidej do frontmatteru disable-model-invocation: true a můžeš ho volat jen ručně.

## Krok 4: Otestuj, a pak zase otestuj

Průvodce nejlepšími postupy pro Claude doporučuje před psaním dlouhého dokumentu připravit hodnoticí scénáře a kontrolní seznam před zveřejněním obsahuje alespoň tři hodnocení a samostatné testování na modelech Haiku, Sonnet a Opus. Důvod je jednoduchý: pokyn, který na Opus funguje bezchybně, může pro Haiku vyžadovat víc podrobností.

K testování spouštění je doporučení agentskills.io konkrétní: připrav asi 20 ukázkových zpráv uživatele. Z nich by 8 až 10 mělo skill spustit a 8 až 10 nemělo. Nejcennější negativní příklady jsou ty, které „těsně minou“, tedy zprávy, které sdílejí stejná slova, ale chtějí jinou práci. Protože chování modelu není pokaždé stejné, doporučuje se každou zprávu spustit několikrát (pro začátek 3krát) a sledovat míru spuštění.

| Špatný popis | Dobrý popis |
|---|---|
| „Pomáhá s PDF.“ | Říká, co dělá a kdy se použije |
| Jen technické podrobnosti | Popisuje záměr uživatele |
| Pokrývá všechno | Uvádí také, co nedělá |

Instalace je také jednoduchá: v Claude Code stačí složku vložit do ~/.claude/skills/ (osobní) nebo do složky .claude/skills/ projektu. Claude Code tyto složky sleduje a změny zaznamená ve stejné relaci bez restartu. Na claude.ai můžeš skill nahrát jako zip v nastavení.

Jakou opakující se práci by automatizoval tvůj první skill?
