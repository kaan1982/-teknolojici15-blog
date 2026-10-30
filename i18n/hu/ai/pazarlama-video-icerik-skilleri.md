---
title: "Marketing-, videó- és tartalom-skillek: a készítő szerszámosládája"
excerpt: "Corey Haines marketingskills tárolója, az Anthropic marketing bővítménye, a Remotion és a HeyGen HyperFrames skillek. Valódi válogatások tartalomhoz és videóhoz."
hook: "A videót kóddal, a szöveget skillel írd"
fact: "52 SKILL"
factLabel: "A marketingskills tárolóban lévő skillek száma"
category: "Mesterséges intelligencia"
---
E blog mögött is naponta készülnek rövid videók, borítók és szövegek. Ezért ez a kategória számunkra kissé személyes: marketing-, tartalom- és videókészítő skillek. Ez egyben az a terület, ahol a közösségi skillek a leggyorsabban szaporodnak. Mi is csak azokat a példákat soroltuk fel, amelyek tárolóját megnyitottuk és belenéztünk. Minden szám 2026 október végi állapot.

## marketingskills: 52 skillből álló marketingkönyvtár

A Conversion Factory konverzióoptimalizáló ügynökség mögött álló Corey Haines MIT licencű coreyhaines31/marketingskills tárolója a terület egyik legátfogóbb közösségi gyűjteménye. A README szerint technikai marketingeseknek és alapítóknak készült; a konverzióoptimalizálásra, szövegírásra, SEO-ra, analitikára és növekedési mérnökségre összpontosít. Azt írja, hogy a Claude Code-dal, az OpenAI Codexszel, a Cursorral és az Agent Skills szabványt támogató más ágensekkel működik.

A tároló skills mappájában 52 skill van. Néhány példa:

- **copywriting:** Bármilyen marketingoldal, például főoldal, nyitóoldal, árazási oldal szövegének megírásához vagy javításához.
- **seo-audit:** Egy weboldal SEO-problémáinak átvizsgálásához és diagnosztizálásához.
- **ai-seo:** A tartalom mesterséges intelligencia keresőkre való optimalizálásához, vagyis hogy a nagy nyelvi modellek válaszaiban forrásként szerepeljen.
- **emails és cold-email:** E-mail-sorozatokhoz, automatizált folyamatokhoz és B2B hideg e-mail kampányokhoz.
- **social:** LinkedIn, X, Instagram, TikTok és Facebook tartalmának létrehozásához és tervezéséhez.

A telepítéshez a README az npx skills add coreyhaines31/marketingskills parancsot javasolja. Egyes skillek külön is kiválaszthatók.

## Az Anthropic marketing bővítménye

Az Anthropic anthropics/knowledge-work-plugins tárolója szakmák szerint elkészített bővítményeket gyűjt. Ezek a Claude Coworkhöz készültek, a Claude Codeddal is kompatibilisek. Minden bővítmény az adott munkához szükséges skilleket, összekötőket, perjeles parancsokat és alágenseket csomagolja egybe.

A marketing bővítményben a következő skillek vannak: brand-review (a piszkozatot a márka hangja és stílusútmutatója szerint ellenőrzi, és előtte/utána javításokat javasol), campaign-plan (célból, közönségből, üzenetből, csatornastratégiából és tartalomnaptárból kampányösszefoglalót készít), content-creation, draft-content, email-sequence, competitive-brief, performance-report és seo-audit. A README felsorolja, hogy ez a bővítmény csatlakozhat olyan eszközökhöz, mint a Slack, a Canva, a Figma, a HubSpot és az Ahrefs. Vagyis itt a skill a „módszert”, az összekötő a „hozzáférést” biztosítja.

> **Tudtad?** A videókat ma már nem csak idővonalon húzással és ejtéssel, hanem kóddal is elő lehet állítani, és a skillek pont itt lépnek működésbe. A Remotion csapata a React-alapú videókeretrendszeréhez saját hivatalos skillkészletet tesz közzé. A HeyGen pedig az „írj HTML-t, renderelj videót” ötletre épülő HyperFrames-et kínálja ágenseknek készült skillekkel együtt.

## Videóhoz: Remotion és HyperFrames

| Csomag | Forrás | Mit kínál? |
|---|---|---|
| remotion-dev/skills | A Remotion csapata (hivatalos) | 12 skill: videókészítés, animációs szabályok, feliratok, renderelés, előnézet |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skillek a HTML-t videóvá alakító keretrendszerhez és kész blokkok |

**Remotion:** A README szerint a Remotion az Agent Skills listáját vezeti, amely a Remotion-projektekben való munka legjobb gyakorlatait határozza meg. A készletben ott van az új videót létrehozó remotion-create, az animációs és elrendezési tudást hordozó remotion-markup, a feliratok átírására és animációjára szolgáló remotion-captions, a kimentéshez való remotion-render és a mindegyikre irányító remotion-best-practices. A telepítés az npx skills add remotion-dev/skills paranccsal történik.

**HyperFrames:** A HeyGen tárolója magát így mutatja be: „írj HTML-t, renderelj videót, ágenseknek készült”. A README szerint az alapkészlet a hyperframes (videókészítés és szerkesztés), a hyperframes-cli (projektváz, előnézet, renderelés), a hyperframes-registry (nagyjából 450 kész átmenet-, cím-, felirat- és grafikablokk) és a media-use (zene, hangeffekt, kép, szinkronhang és hasonló médiamunkák) skillekből áll. Összesen 7 közzétett skill van.

Érdekes részlet: Corey Haines tárolójában a videó skill leírása is felsorolja a Remotion, a HyperFrames és a HeyGen neveket mint aktiváló szavakat. Vagyis a marketing skillt úgy írták meg, hogy hídként működjön a videó skillek felé.

## Mire figyelj választáskor?

Ezen a területen a skillek többsége közösségi vagy vállalati eredetű, és nagyon gyorsan frissül. Egy csomag telepítése előtt a következő három kérdés megkönnyíti a dolgod: Kié a tároló, aktívan frissítik? Van-e a SKILL.md-ben külső címekhez kapcsolódó vagy hitelesítő adatot kérő utasítás? Ki tudod-e választani és telepíteni a néhány skillt, amelyre valóban szükséged van? A telepítőeszközök többsége a „mindet telepítsd” helyett lehetővé teszi egyetlen skill kiválasztását, és ez a kontextust és a kockázatot is csökkenti.

A tartalomgyártásban számodra melyik a legnagyobb időtolvaj: a szövegírás, a vizuális anyag előkészítése, vagy a videó vágása?
