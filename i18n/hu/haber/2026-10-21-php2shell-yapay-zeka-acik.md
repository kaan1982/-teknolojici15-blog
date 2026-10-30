---
title: "A mesterséges intelligencia kritikus sebezhetőséget talált a PHP-ban, amelyre a weboldalak 70 százaléka épül"
excerpt: "A PHP2Shell nevű két sebezhetőség bejelentkezés nélkül lehetővé teszi kód futtatását a szerveren. A felfedezéshez olyan modelleket használtak, mint a GPT-5.6 Sol és a Gemini 4 Argon."
hook: "Az MI találta meg a PHP óriási hibáját"
fact: "CVSS 9,2"
factLabel: "A PHP2Shell-sebezhetőségek legmagasabb pontszáma"
category: "Mesterséges intelligencia"
---
A PHP fejlesztői október 21-én sürgős javítást adtak ki a nyelv alapmotorjának két kritikus biztonsági hibájára. A „PHP2Shell" nevet kapott, CVE-2026-109618 és CVE-2026-109619 azonosítójú sebezhetőségeket mesterséges intelligencia eszközök segítségével találták meg.

## Mi történt?

A Fortune szerint az MI-biztonsági tesztelő Calif cég augusztus 1-jén találta meg a lánc első elemét a GPT-5.6 Sol segítségével; a Wiz egymástól függetlenül augusztus 19-én észlelte az első hibát, és augusztus 24-én jelentette a PHP biztonsági csapatának. A felfedezéshez a Wiz saját eszközét, a Wiz Atlast, valamint az OpenAI GPT-5.6 Sol és a Google Gemini 4 Argon modelljét használták.

A hibák lehetővé teszik, hogy a támadó bejelentkezés nélkül távolról kódot futtasson a szerveren, és kiszivárogtassa a memóriában lévő adatokat. A Wiz szerint az elmúlt tíz év szinte minden PHP-kiadását érinti, egészen az 5.4-es verzióig visszamenőleg. A legmagasabb súlyossági pontszám a CVSS-skálán 9,2. A PHP a világ weboldalainak nagyjából 70 százaléka mögött fut; egyedül a WordPress is nagyjából a webhelyek 40 százalékát üzemelteti. A Fortune frissített híre szerint a javítás megjelenése után a hibákat széles körben kezdték kihasználni.

## Miért fontos?

Ez az egyik legkonkrétabb példa arra, hogy a mesterséges intelligencia a biztonsági kutatásban már nem csupán segítő, hanem a felfedezést végző fél is lehet. Csakhogy ugyanezek az eszközök a támadók kezében is ott vannak, és a javítás megjelenése és a kihasználás kezdete közötti idő rövidül. Minden PHP-t használó oldal tulajdonosának azonnal frissítenie kell a szerverét. Tágabb képben: az internet évtizedek óta futó régi kódjában rejtőző hibák most sokkal gyorsabban kerülhetnek napvilágra. A hálózaton magától barangoló első program történetét a [Creeper-cikkünkben](/yazi/creeper-ilk-virus-zararsizdi/) meséltük el.
