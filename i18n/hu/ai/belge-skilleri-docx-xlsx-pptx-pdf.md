---
title: "Dokumentum skillek: a Word, Excel, PowerPoint és PDF megtanítása az ágensnek"
excerpt: "Mit csinálnak az Anthropic docx, xlsx, pptx és pdf skilljei, és hol működnek? Hivatalos és segéd skillek, amelyek valóban hasznosak a dokumentumkészítéshez."
hook: "Jelentés, táblázat, prezentáció: mind egy skill"
fact: "4 DOKUMENTUM"
factLabel: "A készen kapott dokumentum skillek száma"
category: "Mesterséges intelligencia"
---
Könnyű azt mondani a mesterséges intelligenciának, hogy „készíts nekem egy jelentést”. A nehéz az, hogy a jelentés valóban megnyitható, formátumában ép, képleteiben működő Word- vagy Excel-fájlként érkezzen. A skillek első és talán leggyakrabban használt kategóriája pontosan ez: az irodai dokumentumok. Ebben az írásban csak azokat a skilleket tárgyaljuk, amelyek létezését ellenőriztük.

## Négy alapkő: docx, xlsx, pptx, pdf

A Claude dokumentációja szerint az Anthropic négy előre elkészített (pre-built) dokumentum skillt kínál. Ezek a Claude fájlkészítő funkciójának hátterében működnek, a forráskódjukat az Anthropic az anthropics/skills GitHub-tárolóban teszi közzé.

| Skill | Mit csinál? (hivatalos leírások alapján) |
|---|---|
| docx | Word-dokumentumokat hoz létre, olvas, szerkeszt. Formázást, sablonokat is |
| xlsx | Táblázatot nyit, szerkeszt, képletet és diagramot ad hozzá, rendezetlen adatot tisztít |
| pptx | Prezentációt készít, diákat szerkeszt, a .pptx tartalmát beolvassa és elemzi |
| pdf | Szöveget és táblázatot nyer ki, PDF-eket egyesít, szétvág, űrlapot tölt ki, vízjelet ad hozzá |

A tárolóban lévő leírások meglehetősen „ragaszkodóan” vannak megfogalmazva. Például a pptx skill leírása azt mondja, hogy akkor kell használni, ha egy .pptx fájl „bármilyen módon” szerepel bemenetként vagy kimenetként. Ez az előző írásban említett „a leírás váltja ki” szabály hivatalos példája.

## Hol használhatod?

A Claude dokumentációja szerint 2026 októberétől ez a négy skill a claude.ai-on dokumentumkészítéskor magától működik, és a Claude API-ban is hívható előre elkészített skillként. A Claude Code-ban viszont nem érkeznek beépítve a kész dokumentum skillek. De az anthropics/skills tároló hozzáadható a Claude Code-hoz bővítményáruházként, és a document-skills csomag telepíthető. A tárolóban lévő utasítás szerint előbb a /plugin marketplace add anthropics/skills paranccsal hozzá kell adni az áruházat, majd telepíteni kell a document-skills@anthropic-agent-skills csomagot.

A licenc kérdésében van egy megkülönböztetés. A tárolóban lévő skillek közül sok Apache 2.0 licencű nyílt forráskódú. A négy dokumentum skillt azonban „nem nyílt forráskódúként, hanem forrás-hozzáférhetőként” (source-available) osztották meg. Vagyis a kódot megvizsgálhatod és tanulhatsz belőle, de a saját termékedben történő szabad terjesztés előtt el kell olvasnod a licencfájlt.

> **Tudtad?** A pdf skill a fokozatos betöltés tankönyvi példája. Az Anthropic mérnöki írása szerint az űrlapkitöltési utasításokat kivették a fő SKILL.md-ből, és egy külön forms.md fájlba tették. A Claude ezt a fájlt csak akkor olvassa el, amikor tényleg űrlapot tölt ki. A tárolóban a pdf mappán belül ma a forms.md, a reference.md és egy scripts mappa is megtalálható.

## Segítők a dokumentum mellett

A dokumentumkészítés nem ér véget a fájlformátumnál. Az anthropics/skills tárolóban a tartalmi oldalra összpontosító más hivatalos példák is vannak:

- **doc-coauthoring:** Lépésről lépésre haladó munkafolyamatot kínál strukturált szövegek, például műszaki specifikáció, javaslat, döntési dokumentum közös megírásához. Végigvisz a kontextus átadásán, az iteratív javításon és az ellenőrzésen.
- **internal-comms:** Olyan forrásokat gyűjt, amelyek segítenek a belső kommunikációs szövegek, például állapotjelentés, vezetői frissítés, vállalati hírlevél, GYIK megírásában a cég által kedvelt formátumokban. A mappában példaszövegek is vannak.
- **brand-guidelines:** Az Anthropic hivatalos márkaszíneit és tipográfiáját alkalmazza egy kimenetre. Az igazi értéke az, hogy megmutatja, hogyan építhetsz hasonlót a saját márkádhoz.
- **theme-factory:** 10 kész szín- és betűtípus-témát tartalmaz, amelyek diára, dokumentumra, jelentésre vagy HTML-oldalra alkalmazhatók, és kérésre azonnal újat is készít.

A Súgóközpont emellett említ olyan skilleket is, amelyeket partnerek, például a Notion, a Figma és az Atlassian a saját MCP-összekötőikkel együtt működve készítettek. Ezek akkor hasznosak, ha azokkal az eszközökkel (pl. Notion-oldalak) dolgozol, amelyekben a dokumentumok készülnek.

## Hogyan használható a valóságban?

A leghatékonyabb használat az, ha a kész dokumentum skilleket összekapcsolod a saját kis skilleddel. Például az xlsx skill tudja, hogyan kell rendesen Excelt előállítani, de nem tudja, hogy a te cégednek a havi értékesítési táblázatában mely oszlopoknak kell lenniük. Ha írsz egy rövid skillt, amely ezt elmondja, a két skill együtt dolgozva olyan fájlt hoz létre, amely formailag helyes és a te szabványodnak is megfelel.

Két megjegyzést ne felejts el. Az első: az anthropics/skills tároló egyértelműen leírja, hogy ezek a skillek „bemutató és oktatási célúak”, és a Claude saját viselkedése eltérhet az itteni megvalósításoktól. A második: a dokumentum skilleknek kódfuttatási környezetre van szükségük. A Súgóközpont szerint a skillek működéséhez be kell kapcsolni a kódfuttatási funkciót.

A következő írásban a képernyő oldalára lépünk: tervezést, felhasználói felületet és webes kimenetet előállító skillek.

Te melyik dokumentumtípus elkészítésével veszted a legtöbb időt: táblázattal, prezentációval vagy jelentéssel?
