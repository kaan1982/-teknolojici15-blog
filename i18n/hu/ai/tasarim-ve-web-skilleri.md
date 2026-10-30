---
title: "Tervezési és webes skillek: sablonszagtól mentes felületekért"
excerpt: "A frontend-design, a web-artifacts-builder, a canvas-design és a Vercel web-design-guidelines skillje. Valódi skillek, amelyek javítják az ágens által készített felületet."
hook: "Miért ugyanolyan mindig a mesterséges intelligencia dizájnja?"
fact: "10 TÉMA"
factLabel: "A theme-factoryban lévő kész témák száma"
category: "Mesterséges intelligencia"
---
Ha már csináltattál mesterséges intelligenciával weboldalt, valószínűleg észrevetted: az eredmény működik, de valahonnan ismerős. Ugyanazok a lila átmenetek, ugyanaz a középre igazított cím, ugyanaz a kártyaelrendezés. A tervezési skillek nagy része pontosan ezzel a problémával küzd: azzal, hogy a modellel az „alapértelmezés” helyett tudatos tervezési döntést hozasson.

Az ebben az írásban szereplő minden skill forrását megadtuk. Az Anthropic hivatalos tárolója az anthropics/skills, a közösségi vagy vállalati tárolókat külön jelöltük.

## frontend-design: menekülés az alapértelmezéstől

A hivatalos tárolóban lévő frontend-design skill leírása egyértelmű: új felület építésekor vagy egy meglévő átalakításakor útmutatás a „tudatos, megkülönböztető vizuális tervezéshez”. Segít az esztétikai irány, a tipográfia és a „nem sablonosnak olvasható” választások meghozatalában.

A skill törzse a modellt egy tervezőstúdió tervezővezetői szerepébe helyezi, és úgy indítja a munkát, hogy feltételezi: az ügyfél a közhelyes javaslatokat úgyis elutasítja. Ez egy jó skillírási technika példája is: ahelyett, hogy információt halmozna, világos nézőpontot ad a modellnek.

## Webes kimenetek: web-artifacts-builder és webapp-testing

- **web-artifacts-builder (hivatalos):** Eszközkészlet a claude.ai-n összetett, több komponensű, állapotkezelést vagy útválasztást igénylő HTML-kimenetek előállításához modern frontend-technológiákkal, mint a React, a Tailwind CSS és a shadcn/ui. A leírása azt is mondja, hogy egyszerű, egyfájlos HTML-munkákhoz nem szabad használni. A mappában a projektet elindító és egyetlen fájlba csomagoló szkriptek vannak.
- **webapp-testing (hivatalos):** Eszközkészlet helyi webalkalmazások Playwrighttal való teszteléséhez. A frontendfunkciók ellenőrzésére, a felületi hibák kereséséhez, képernyőképek készítéséhez és a böngészőnaplók olvasásához szolgál. A tervezés után a „tényleg működik?” kérdésre a válasz.

> **Tudtad?** A hivatalos tárolóban lévő theme-factory skill 10 kész témával érkezik, amelyek a diától a HTML nyitóoldalig bármilyen kimenetre alkalmazhatók. A mappában lévő témafájlok nevei is ihletők: „arctic-frost”, „midnight-galaxy”, „golden-hour”, „tech-innovation” és hasonlók. Ha akarod, a skill azonnal új témát is készít.

## Vizuális művészet: canvas-design, algorithmic-art, slack-gif-creator

Az Anthropic tárolójában a „kreatív” oldalt még három skill képviseli:

- **canvas-design:** Plakátok, műalkotások vagy statikus tervek .png és .pdf formátumban való előállításához „tervezési filozófia” megközelítést használ. A mappában több mint 80 betűtípusfájl van. A leírása egyértelműen előírja, hogy létező művészek munkáit nem szabad másolni.
- **algorithmic-art:** p5.js-sel, magozott véletlenszerűséggel (seeded randomness) és interaktív paraméterekkel generatív művészetet készít. Áramlási mezők, részecskerendszerek és hasonló kérések kiszolgálására készült.
- **slack-gif-creator:** Slackre optimalizált animált GIF-ek készítéséhez kínál megszorításokat, ellenőrző eszközöket és animációs ötleteket. Az „csinálj nekem egy Slack GIF-et, amelyen X Y-t csinál” típusú kérésekre.

## A közösségtől: a Vercel felületi és React skillei

A hivatalos tárolón kívül az egyik legismertebb tervezésközpontú csomag a Vercel vercel-labs/agent-skills tárolója. 2026 októberétől a tárolóban ezek vannak:

| Skill | Mit csinál? |
|---|---|
| web-design-guidelines | A felületi kódot több mint 100, az akadálymentességet, a teljesítményt és a felhasználói élményt lefedő szabály szerint ellenőrzi |
| vercel-react-best-practices | A Vercel mérnöki React- és Next.js-teljesítményszabályai (8 kategóriában több mint 40) |
| vercel-composition-patterns | Skálázható React-komponenskompozíciós minták |
| vercel-react-view-transitions | Gördülékeny átmeneti animációk a React View Transition API-jával |
| vercel-react-native-skills | Teljesítmény- és architektúraszabályok React Native-hoz és Expóhoz |

Ezek a skillek nem kötődnek egyetlen eszközhöz. A Vercel tárolója az npx skills add vercel-labs/agent-skills paranccsal javasolja a telepítést, és a skillek az Agent Skills szabványt támogató különböző ágensekben használhatók.

## Melyiket mikor használd?

Egy gyakorlati sorrend lehet ez: a tervezési irányt a frontend-designnal határozd meg, a színt és a betűtípust a theme-factoryval vagy a saját márka-skilleddel rögzítsd, a kimenetet a web-artifacts-builderrel állítsd elő, aztán a web-design-guidelines-szal ellenőrizd, és a webapp-testinggel próbáld ki a böngészőben. Mindegyik külön szakértelem, és a fokozatos betöltés révén mindet egyszerre telepítve tartani nem duzzasztja a kontextust.

Egy figyelmeztetés: ezek közül a skillek közül néhány (pl. a web-artifacts-builder) szkriptet futtat. A Claude dokumentációja azt javasolja, hogy a skilleket szoftvertelepítésként kezeld, és csak megbízható forrásból telepítsd. A hivatalos tárolón kívülről származó minden csomagnál telepítés előtt jó szokás belenézni a SKILL.md-be és a szkriptekbe.

Szerinted a mesterséges intelligenciával készült tervek idővel változatosabbak lesznek, vagy ha mindenki ugyanazokat a skilleket használja, új „egyformaság” születik?
