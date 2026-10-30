---
title: "Írd meg a saját skilledet: az első képesség lépésről lépésre a SKILL.md-vel"
excerpt: "Egy mappa, egy SKILL.md és egy jól megírt leírás. A saját Agent Skill megírásának lépései, a description mező fontossága és a tesztelési módszer."
hook: "A skillt a leírása váltja ki"
fact: "1024"
factLabel: "A description mező legnagyobb karakterszáma"
category: "Mesterséges intelligencia"
---
Skill írásához nem kell programozónak lenned. A legegyszerűbb formájában elég egy mappa, benne egyetlen szövegfájllal. De egy jól működő és egy soha nem aktiválódó skill közötti különbség gyakran egyetlen mondatban rejlik: a leírásban. Ebben az írásban a nulláról írunk egy kicsi, de valódi skillt.

## 1. lépés: Hozd létre a mappát és a SKILL.md-t

Az Agent Skills specifikáció szerint a skill egy mappa, amelyben legalább egy SKILL.md fájl van. A fájl legelején YAML előinformáció (frontmatter) áll, és két mező kötelező:

- **name:** Legfeljebb 64 karakter. Csak kisbetű, számjegy és kötőjel. Kötőjellel nem kezdődhet és nem végződhet, nem tartalmazhat egymás után két kötőjelet, és meg kell egyeznie a mappa nevével. A Claude dokumentációja azt is megjegyzi, hogy az „anthropic” és a „claude” szó nem használható a névben.
- **description:** Nem lehet üres, legfeljebb 1024 karakter. El kell mondania, mit csinál a skill, és mikor kell használni.

Vannak opcionális mezők is (license, compatibility, metadata és a kísérleti allowed-tools), de a legtöbb skillhez nem kellenek.

## 2. lépés: Írd meg gondosan a leírást

Miért ilyen fontos a leírás? Mert az ágens induláskor minden skillnek csak a nevét és a leírását olvassa el. Az agentskills.io megfogalmazásában az aktiválás „teljes terhe” a leíráson van. Ha a leírás nem mondja el, mikor hasznos a munka, az ágens nem nyúl az adott skillhez.

A források javaslatai így foglalhatók össze:

- Írd meg, hogy **mit csinál**, és azt is, hogy **mikor kell használni**.
- A Claude dokumentációja azt javasolja, hogy a leírást **harmadik személyben** írd, mert a leírás a rendszerpromptba kerül („Excel-fájlokat dolgoz fel”, nem „Tudok neked segíteni”).
- Az agentskills.io azt javasolja, hogy sorold fel azokat az eseteket is, amikor a felhasználó nem nevezi meg név szerint az adott területet.
- Tartsd rövidre: néhány mondat, legfeljebb egy rövid bekezdés. A Claude Code a listában a leírást 1536 karakternél levágja, ezért a legfontosabb használati esetnek az elején kell lennie.

## 3. lépés: A törzs legyen rövid, a szkript okos

Példaként képzeljünk el egy skillt, amely ennek a blognak a saját írásszabályát követi: a szövegben ne maradjon hosszú gondolatjel (em dash) és középső gondolatjel (en dash). A mappaszerkezet legyen ilyen:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

A SKILL.md fájl pedig ennyi:

```markdown
---
name: tire-denetimi
description: Megkeresi a hosszú gondolatjel (U+2014) és a középső gondolatjel (U+2013) használatát a blogbejegyzésekben, és javítást javasol. Akkor használandó, amikor a felhasználó egy Markdown-bejegyzést készít elő a közzétételre, azt mondja, hogy "ellenőrizd a gondolatjeleket" vagy "megfelel az írásszabályoknak", vagy ha név szerint nem is említi, de közzététel előtti utolsó ellenőrzést kér.
---

# Gondolatjel-ellenőrzés

1. Futtasd a `python scripts/tire_bul.py <fajl.md>` parancsot.
2. A kimenet minden sorához javasold, hogy a gondolatjelet pont, vessző, kettőspont vagy zárójel helyettesítse.
3. Ne változtasd meg a jelentést. Azokról a sorokról, amelyekben nem vagy biztos, kérdezd meg a felhasználót.
4. A végén egyetlen mondatban jelentsd, hány sort javítottál.
```

A Claude dokumentációja a kontextusablakot „közös erőforrásnak” tekinti, és csak olyan információ hozzáadását javasolja, amelyet a modell még nem ismer. A törzsnek 500 sor alatt kell maradnia. A hosszú referenciaszövegeket külön fájlokba kell vinni, és ezekre a SKILL.md-ből egyetlen szinten kell hivatkozni.

A szkriptekre vonatkozó szabály is egyértelmű: „oldd meg, ne told tovább”. Vagyis a szkriptnek a hibaeseteket magának kell kezelnie, nem szabad „essen szét, a Claude majd megoldja” szemlélettel megírni. Amikor a szkript lefut, nem maga a kód, hanem csak a kimenete kerül a kontextusba. Ez az ismétlődő és hibát nem tűrő munkáknál megbízhatóbbá teszi a szkriptet az utasításnál.

> **Tudtad?** A Claude Codeban a régi „egyéni perjeles parancsok” egyesültek a skillekkel. A .claude/commands/deploy.md fájl és a .claude/skills/deploy/SKILL.md ugyanazt a /deploy parancsot hozza létre. Ha nem akarod, hogy egy skill automatikusan aktiválódjon, a frontmatterbe írhatod a disable-model-invocation: true sort, és csak kézzel hívhatod meg.

## 4. lépés: Teszteld, aztán teszteld újra

A Claude legjobb gyakorlatok útmutatója azt javasolja, hogy hosszú dokumentum írása előtt készíts értékelési forgatókönyveket, és a kiadás előtti ellenőrzőlistán legalább három értékelés és külön teszt szerepel a Haiku, a Sonnet és az Opus modelleken. Az indok egyszerű: egy utasítás, amely az Opuson hibátlanul működik, a Haikunak több részletet kívánhat.

Az aktiválás teszteléséhez az agentskills.io javaslata konkrét: készíts nagyjából 20 mintafelhasználói üzenetet. Ezek közül 8-10-nek aktiválnia kell a skillt, 8-10-nek nem. A legértékesebb negatív példák a „hajszálnyi mellényúlások”, vagyis azok az üzenetek, amelyek ugyanazokat a szavakat használják, de más munkát kérnek. Mivel a modell viselkedése nem minden alkalommal ugyanaz, javasolt minden üzenetet többször (kezdetként 3-szor) lefuttatni, és az aktiválási arányt nézni.

| Rossz leírás | Jó leírás |
|---|---|
| "PDF-ekkel segít." | Elmondja, mit csinál és mikor kell használni |
| Csak műszaki részlet | Leírja a felhasználó szándékát |
| Mindent lefed | Azt is megmondja, mit nem csinál |

A telepítés is egyszerű: a Claude Codeban elég a mappát a ~/.claude/skills/ alá (személyes) vagy a projekt .claude/skills/ mappájába tenned. A Claude Code figyeli ezeket a mappákat, és a változásokat újraindítás nélkül, ugyanabban a munkamenetben érzékeli. A claude.ai-n a skillt zip-ként töltheted fel a beállításokból.

A te első skilled melyik ismétlődő munkádat automatizálná?
