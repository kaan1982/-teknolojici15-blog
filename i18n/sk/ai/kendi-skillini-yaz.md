---
title: "Napíšte si vlastný skill: prvá zručnosť krok za krokom so SKILL.md"
excerpt: "Priečinok, SKILL.md a dobre napísaný opis. Kroky písania vlastného Agent Skill, význam poľa description a spôsob testovania."
hook: "Skill spúšťa jeho opis"
fact: "1 024"
factLabel: "Maximálny počet znakov v poli description"
category: "Umelá inteligencia"
---
Na napísanie skillu nemusíte byť programátor. V najjednoduchšej podobe stačí priečinok a v ňom jediný textový súbor. Rozdiel medzi skillom, ktorý funguje dobre, a skillom, ktorý sa nikdy nespustí, je však často ukrytý v jedinej vete: v opise. V tomto článku napíšeme od nuly malý, ale skutočný skill.

## Krok 1: Vytvorte priečinok a SKILL.md

Podľa špecifikácie Agent Skills je skill priečinok, ktorý obsahuje aspoň súbor SKILL.md. Na úplnom začiatku súboru je úvodná časť YAML (frontmatter) a dve polia sú povinné:

- **name:** Najviac 64 znakov. Iba malé písmená, číslice a pomlčky. Nesmie začínať ani končiť pomlčkou, nesmie obsahovať dve pomlčky za sebou a musí byť rovnaké ako názov priečinka. Dokumentácia Claude navyše uvádza, že slová "anthropic" a "claude" sa v názve nesmú používať.
- **description:** Nesmie byť prázdne, najviac 1 024 znakov. Má opisovať, čo skill robí a kedy sa má použiť.

Existujú aj voliteľné polia (license, compatibility, metadata a experimentálne allowed-tools), ale pre väčšinu skillov nie sú potrebné.

## Krok 2: Opis napíšte starostlivo

Prečo je opis taký dôležitý? Pretože agent pri štarte číta z každého skillu iba názov a opis. Slovami agentskills.io leží "celá váha" spúšťania na opise. Ak opis nehovorí, kedy sa práca hodí, agent po tom skille nesiahne.

Odporúčania zdrojov sa dajú zhrnúť takto:

- Napíšte, **čo robí**, aj **kedy sa má použiť**.
- Dokumentácia Claude odporúča písať opis **v tretej osobe**, pretože sa pridáva do systémového promptu ("Spracúva súbory Excel", nie "Môžem vám pomôcť").
- Agentskills.io odporúča výslovne uviesť aj situácie, keď používateľ danú oblasť nepomenuje jej názvom.
- Držte ho krátky: niekoľko viet, najviac krátky odstavec. Claude Code skracuje opis v zozname na 1 536 znakov, preto má byť najdôležitejší prípad použitia na začiatku.

## Krok 3: Telo držte krátke, skript múdry

Ako príklad si predstavme skill podľa pravidiel písania tohto blogu: v texte nemá zostať dlhá pomlčka (em dash) ani stredná pomlčka (en dash). Štruktúra priečinka nech je takáto:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

A súbor SKILL.md je len takýto:

```markdown
---
name: tire-denetimi
description: Türkçe blog yazılarında uzun tire (U+2014) ve orta tire (U+2013) kullanımını bulur ve düzeltme önerir. Kullanıcı bir Markdown yazısını yayına hazırlarken, "tireleri kontrol et", "yazım kurallarına uyuyor mu" dediğinde ya da adını anmasa da yayın öncesi son kontrol istediğinde kullanılır.
---

# Tire denetimi

1. `python scripts/tire_bul.py <dosya.md>` komutunu çalıştır.
2. Çıktıdaki her satır için tireyi nokta, virgül, iki nokta veya parantezle değiştirmeyi öner.
3. Anlamı değiştirme. Emin olmadığın satırları kullanıcıya sor.
4. Sonunda kaç satır düzelttiğini tek cümleyle bildir.
```

Dokumentácia Claude vidí kontextové okno ako "spoločný zdroj" a odporúča pridávať len informácie, ktoré model ešte nepozná. Telo má zostať pod 500 riadkov. Dlhé referenčné texty treba presunúť do samostatných súborov a odkazovať na ne zo SKILL.md len na jednej úrovni.

Pravidlo pre skripty je tiež jasné: "vyrieš, neodhoď". Skript si má poradiť s chybovými stavmi sám, nemá byť napísaný v logike "nech spadne, Claude nejako nájde cestu". Keď sa skript spustí, do kontextu sa dostane nie samotný kód, ale iba jeho výstup. Vďaka tomu je skript spoľahlivejší než pokyn pri opakovaných a chybu netolerujúcich úlohách.

> **Vedeli ste?** V Claude Code sa staré "vlastné príkazy s lomkou" zlúčili so skillmi. Súbor .claude/commands/deploy.md a súbor .claude/skills/deploy/SKILL.md vytvárajú ten istý príkaz /deploy. Ak nechcete, aby sa skill spúšťal automaticky, pridajte do frontmatteru disable-model-invocation: true a môžete ho volať len ručne.

## Krok 4: Otestujte, potom znova otestujte

Príručka najlepších postupov Claude odporúča pripraviť hodnotiace scenáre ešte pred písaním dlhého dokumentu a v kontrolnom zozname pred zverejnením je aspoň tri hodnotenia a samostatné testovanie na modeloch Haiku, Sonnet a Opus. Dôvod je jednoduchý: pokyn, ktorý perfektne funguje na Opus, môže pre Haiku vyžadovať viac podrobností.

Na testovanie spúšťania je odporúčanie agentskills.io konkrétne: pripravte približne 20 ukážkových používateľských správ. 8 až 10 z nich by malo skill spustiť, 8 až 10 nie. Najcennejšie negatívne príklady sú tie "o chlp", teda správy, ktoré majú rovnaké slová, ale žiadajú inú prácu. Keďže správanie modelu nie je zakaždým rovnaké, odporúča sa každú správu spustiť niekoľkokrát (na začiatok 3-krát) a sledovať mieru spustenia.

| Zlý opis | Dobrý opis |
|---|---|
| "Pomáha s PDF." | Hovorí, čo robí a kedy sa používa |
| Iba technický detail | Opisuje zámer používateľa |
| Pokrýva všetko | Hovorí aj o tom, čo nerobí |

Inštalácia je tiež jednoduchá: v Claude Code stačí vložiť priečinok do ~/.claude/skills/ (osobný) alebo do priečinka .claude/skills/ projektu. Claude Code tieto priečinky sleduje a zmeny rozpozná v tej istej relácii bez reštartu. V claude.ai môžete skill nahrať ako zip v nastaveniach.

Akú opakujúcu sa prácu by automatizoval váš prvý skill?
