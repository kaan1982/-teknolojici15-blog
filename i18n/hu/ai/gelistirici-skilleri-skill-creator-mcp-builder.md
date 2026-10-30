---
title: "Skillek fejlesztőknek: skill-creator, mcp-builder és más"
excerpt: "Skillt író skill, MCP-szervert építő skill, tesztelési és hibakeresési fegyelmet hozó skillcsomagok. Ellenőrzött válogatás fejlesztőknek."
hook: "Van egy skill, amely skillt ír"
fact: "20 LEKÉRDEZÉS"
factLabel: "Az aktiválási teszthez javasolt mintaszám"
category: "Mesterséges intelligencia"
---
Egy szoftverfejlesztő számára a skillek két szempontból érdekesek. Az első: vannak „előállító” skillek, amelyek segítenek a saját skilljeidet gyorsabban és mérhető módon megírni. A második: vannak csomagok, amelyek mérnöki fegyelmet (tesztelés, tervezés, hibakeresés) adnak az ágensnek. Ebben az írásban mindkettőt tárgyaljuk, csak olyan példákkal, amelyek létezését ellenőriztük.

## skill-creator: a skillt író skill

Az Anthropic hivatalos anthropics/skills tárolójában lévő skill-creator új skillek létrehozására, meglévők szerkesztésére és javítására, valamint teljesítményük mérésére készült. A leírása szerint vállalja az értékelések (eval) futtatását, az eredmények szórásanalízissel történő összehasonlítását és a skill leírásának jobb aktiválásra történő optimalizálását is.

A munkafolyamat meglehetősen emberi hangon van leírva: döntsd el, mit akarsz, írj vázlatot, készíts néhány tesztüzenetet, futtasd a skilles Claude-ot ezekkel az üzenetekkel, értékeljétek együtt az eredményeket, írd át, ismételd. A mappában külön szkriptek futtatják az értékelést, készítenek összehasonlító jelentést és javítják a leírást, valamint van egy „eval-viewer” az eredmények vizuális vizsgálatához.

Az agentskills.io leírásoptimalizálási útmutatója is példaként hozza ezt a skillt. Az útmutató szerint a skill-creator ezt a ciklust az elejétől a végéig automatizálja: szétosztja a tesztkészletet, párhuzamosan méri az aktiválási arányokat, a Claude-dal leírásjavításokat javasol, és élő HTML-jelentést készít.

> **Tudtad?** Az agentskills.io által javasolt aktiválási tesztben nagyjából 20 mintaüzenetet használnak, és mindegyiket 3-szor futtatják. Vagyis egyetlen leírás kipróbálása 60 futtatást jelent. A túlillesztés (overfitting) elkerülésére az üzenetek nagyjából 60 százalékát a javításra, 40 százalékát csak az ellenőrzésre különítik el. Az útmutató szerint legtöbbször öt kör elég.

## mcp-builder és claude-api: integrációt építőknek

- **mcp-builder (hivatalos):** Útmutató olyan MCP-szerverek fejlesztéséhez, amelyek lehetővé teszik, hogy a nagy nyelvi modellek jól tervezett eszközökön keresztül beszéljenek külső szolgáltatásokkal. Python (FastMCP) vagy Node/TypeScript (MCP SDK) használatával működik. A skill a folyamatot négy szakaszra bontja: kutatás és tervezés, megvalósítás, átnézés és tesztelés, értékelések készítése. A mappában nyelvenkénti referenciadokumentumok és értékelő szkriptek vannak.
- **claude-api (hivatalos):** Referencia-skill a Claude API-hoz és az Anthropic SDK-khoz. Lefedi a modellazonosítókat, paramétereket, streaminget, eszközhasználatot, gyorsítótárazást, és sok programozási nyelvhez külön mappákat tartalmaz. A Claude dokumentációja szerint ez a nyílt forráskódú skill a Claude Code-dal együtt érkezik.
- **webapp-testing (hivatalos):** Eszközkészlet helyi webalkalmazások Playwrighttal való teszteléséhez. A tervezésről szóló írásunkban is említett praktikus segéd a frontendfejlesztőknek.

## A közösségtől: mérnöki fegyelem a Superpowersszel

A hivatalos tárolón kívül a fejlesztők között az egyik leggyakrabban emlegetett csomag Jesse Vincent MIT licencű obra/superpowers tárolója. Magát a kódoló ágensek „teljes szoftverfejlesztési módszertanaként” határozza meg. 2026 októberétől a tárolóban a következő skillek vannak (válogatás):

| Skill | Mikor lép működésbe? |
|---|---|
| brainstorming | Új funkció vagy kreatív munka megkezdése előtt |
| writing-plans | Többlépéses munkához, tervírás közben, mielőtt a kódhoz nyúlnál |
| test-driven-development | Megvalósítás közben: előbb bukó teszt, aztán a lehető legkevesebb kód |
| systematic-debugging | Hiba vagy bukó teszt esetén, mielőtt javítást javasolnál |
| verification-before-completion | Mielőtt azt mondod, hogy „kész”, az ellenőrző parancsok lefuttatásához |

A tároló README-je a Claude Code mellett számos ágenshez, például a Codexhez, a Cursorhoz, a Gemini CLI-hez és a GitHub Copilot CLI-hez ad telepítési utasítást, és megjegyzi, hogy a Claude Code oldalán az Anthropic hivatalos bővítményáruházában is szerepel. Ez az Agent Skills nyílt szabvány voltának gyakorlati következménye: ugyanaz a skill különböző eszközökben működhet.

## Más platformokon ugyanez az ötlet

Az OpenAI ChatGPT- és Codex-dokumentációja is a skilleket a „nyílt agent skills szabványra” épülőként írja le. 2026 októberétől a dokumentációban két beépített segéd emelkedik ki: a leírt munkából skillt készítő skill-creator (a Codexben $skill-creator-rel hívható) és az openai/skills tárolóból vagy más tárolókból kész skilleket telepítő skill-installer. A Codex a helyi skilleket projekt- és felhasználói szinten az .agents/skills mappákból olvassa.

Egy fejlesztő számára a legértékesebb szokás talán ez lehet: minden ismételgetett hosszú magyarázatot, a kódátvizsgálási ellenőrzőlistádat vagy a kiadási lépéseidet skillé alakítani és a projekt tárolójába tenni. A Claude Codeban a .claude/skills mappába tett skillek a tárolóval együtt a csapathoz is eljutnak. De ne felejtsd el elolvasni minden telepített közösségi skill szkriptjeit, mert ezek a skillek a számítógépeden a te jogosultságaiddal futtathatnak kódot.

A te fejlesztési folyamatodban melyik lépésnél mondod leggyakrabban, hogy „bárcsak lenne rá egy skill”: tesztelésnél, kódátvizsgálásnál vagy kiadásnál?
