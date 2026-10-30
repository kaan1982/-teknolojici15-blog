---
title: "Mi az a skill? A mesterséges intelligencia ágensek új „készségmappái”"
excerpt: "Az Agent Skill egy SKILL.md fájlból és opcionális szkriptekből álló mappa. Az ágens csak akkor tölti be, amikor szükség van rá. Miben különbözik a prompttól, az MCP-től és a bővítménytől?"
hook: "Taníts új készséget az ágensnek egy mappával"
fact: "3 RÉTEG"
factLabel: "A skill tartalmának fokozatos betöltése"
category: "Mesterséges intelligencia"
---
A mesterséges intelligencia asszisztensek mindenről tudnak egy keveset, de nem ismerik a te céged jelentéssablonját, a márkád színeit vagy egy fájltípus helyes kezelésének trükkjeit. Mi lenne, ha ezt nem kellene minden beszélgetésben hosszan elmagyaráznod, hanem egyszer becsomagolhatnád, és azt mondhatnád az ágensnek: „használd, amikor szükséges”? A „skill” (készség) pontosan ez az ötlet.

## Röviden: egy mappa és egy SKILL.md

Az Anthropic meghatározása szerint az Agent Skills a Claude képességeit bővítő moduláris csomagok. Minden skill együtt tartja az utasításokat, a metaadatokat és az opcionális erőforrásokat (szkriptek, sablonok), és a Claude ezeket magától használja, amikor relevánsak. Az Anthropic mérnöki blogja még egyszerűbben fogalmaz: a skillek „rendezett utasítás-, szkript- és erőforrásmappák”, amelyeket az ágens szükség esetén tölt be, hogy bizonyos munkákban jobb legyen.

Műszakilag a skill legalább egy SKILL.md nevű fájlt tartalmazó mappa. Ennek a fájlnak az elején YAML formátumban két kötelező mező van: name (név) és description (leírás). Alatta sima Markdownban írt utasítások állnak. A mappához kívánság szerint alkönyvtárakat is adhatsz, például scripts/ (futtatható kód), references/ (kiegészítő dokumentumok) és assets/ (sablon, kép, adat).

Az Anthropic ezt a szerkezetet egy új munkatársnak készített beilleszkedési útmutatóhoz hasonlítja. Leteszed az útmutatót az asztalra, a munkatárs pedig szükség esetén kinyitja és belenéz.

## A titok: nem minden töltődik be egyszerre

A skilleket a sima hosszú prompttól az „fokozatos betöltés” (progressive disclosure) nevű tervezés különbözteti meg. A Claude dokumentációja szerint a tartalom három rétegben töltődik be:

| Réteg | Mikor töltődik be? |
|---|---|
| 1. Metaadat (név + leírás) | Mindig, induláskor (skillenként nagyjából 100 token) |
| 2. A SKILL.md törzse | A skill aktiválásakor (5000 token alatt javasolt) |
| 3. További fájlok és szkriptek | Csak szükség esetén; a szkriptek közül csak a kimenet kerül a kontextusba |

Így az ágensbe tucatnyi skillt tölthetsz, de mindegyik nem tölti meg a kontextusablakot. Az aktiválásig minden skillből csak a neve és a leírása van „az asztalon”. A dokumentum példájában a PDF skill az űrlapkitöltési utasításokat egy külön forms.md fájlban tartja, és a Claude ezt a fájlt csak akkor olvassa el, amikor tényleg űrlapot tölt ki.

> **Tudtad?** Az Anthropic 2025. október 16-án jelentette be az Agent Skillst, és 2025. december 18-án az agentskills.io címen nyílt szabványként tette közzé a formátumot. Ezért 2026 októberétől ugyanazt a SKILL.md-szerkezetet más eszközök, például a GitHub Copilot és az OpenAI Codex dokumentációjában is látod. A Copilot dokumentációja a skillek ellenőrzéséhez közvetlenül az agentskills.io specifikációra irányít.

## Prompt, MCP, bővítmény: mi a különbség?

Ezeket a fogalmakat gyakran összekeverik, mert mind az „ágens jobbá tételéről” szólnak. A Claude Súgóközpont megkülönböztetése így foglalható össze:

- **Prompt vagy egyéni utasítások:** Minden beszélgetésben vagy az összes beszélgetésedben érvényes általános irányítás. A skill ezzel szemben feladatspecifikus, és csak akkor lép működésbe, amikor releváns.
- **Projektek:** Egy projekten belüli beszélgetésekben mindig betöltve álló állandó háttérinformáció. A skill viszont szükség esetén megnyíló eljárás.
- **MCP (Model Context Protocol) összekötők:** A Claude-ot külső szolgáltatásokhoz és adatforrásokhoz kapcsolják. Vagyis „hozzáférést” adnak. A skill pedig az a „módszertudás”, amely elmondja, hogyan használd ezt a hozzáférést. A Súgóközpont szerint a kettőt gyakran együtt használják.
- **Bővítmények (plugin):** A Claude Code és a Cowork oldalán a bővítmény több elemet (skillek, összekötők, parancsok, alágensek) együtt terjesztő csomag. Az OpenAI dokumentációja is hasonló megkülönböztetést tesz: a skill az írási formátum, a bővítmény a terjesztési forma.

Röviden: az MCP kezet ad az ágensnek, a skill megtanítja azt a kezet bánni a dolgokkal, a bővítmény pedig mindezt egy dobozban szállítja.

## Hol működik?

A Claude dokumentációja szerint 2026 októberétől a skillek a Claude alkalmazásokban (claude.ai), a Claude Codeban és a kódfuttató eszközzel együtt a Claude API-ban használhatók. A Súgóközpont szerint a skillek a Free, Pro, Max, Team és Enterprise csomagokban elérhetők, és a kódfuttatási funkció bekapcsolását igénylik.

Fontos részlet: az egyéni skillek nem szinkronizálódnak a felületek között. A claude.ai-ra feltöltött skill csak a saját fiókodhoz tartozik. Az API-ra feltöltött skillt a teljes munkaterület megosztja. A Claude Codeban pedig személyes (~/.claude/skills/) vagy a projektmappában (.claude/skills/) tárolódik.

A biztonsági dimenzió is megvan. Mivel a skillek kódot futtathatnak, a dokumentáció azt javasolja, hogy „szoftvertelepítésként” kezeld őket, és csak megbízható forrásból használd őket. Ezt a sorozat utolsó írásában külön tárgyaljuk.

A rész következő írásaiban lépésről lépésre megírjuk a saját skilledet, és kategóriáról kategóriára megvizsgáljuk a valóban létező, hasznos skilleket.

Mi az a munka, amit minden nap újra és újra elmagyarázol a mesterséges intelligenciának, és azt mondod: „bárcsak egyszer megtaníthatnám”?
