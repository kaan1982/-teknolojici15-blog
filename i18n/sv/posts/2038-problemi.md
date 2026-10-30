---
title: "2038-problemet: varför går vissa datorer tillbaka till 1901?"
excerpt: "Den 32-bitars Unix-tiden tar slut den 19 januari 2038 kl. 03:14:07 UTC, och äldre system kan tro att datumet är den 13 december 1901. Vad är 2038-problemet och hur löses det?"
hook: "Datorerna går tillbaka till 1901!"
fact: "03:14:07"
factLabel: "19 januari 2038, UTC: gränsen för 32 bitar"
category: "Datorer"
---
Inför år 2000 pratade hela världen om ett datorfel som kallades "Y2K". Nu är nästa datum på väg: den 19 januari 2038. Den dagen, en sekund efter kl. 03:14:07 (UTC), kan vissa gamla datorer plötsligt vrida kalendern tillbaka till 1901. Det är inget science fiction-scenario, utan ett enkelt matematiskt problem.

## Hur räknar datorer tid?

Unix och många system som härstammar från det håller inte tiden som en klocka eller en kalender, utan som ett enda tal. Det talet är antalet sekunder som har gått sedan midnatt den 1 januari 1970 (UTC). Det kallas "Unix-tid".

Problemet är att det här talet i många äldre system lagras som ett 32-bitars heltal med tecken. Det största värdet ett 32-bitars tal med tecken kan anta är 2 147 483 647, alltså 2 upphöjt till 31 minus 1. Så många sekunder motsvarar ungefär 68 år. "Med tecken" betyder att en bit är reserverad för att visa om talet är positivt eller negativt. Därför används inte alla 32 bitar för storleken, utan 31.

Lägger man 68 år till 1970 hamnar man i 2038. Räkningen pekar exakt på den 19 januari 2038 kl. 03:14:07 UTC.

## Vad händer en sekund senare?

En sekund efter att räknaren nått sitt största värde svämmar den över. Tänk på de gamla mekaniska vägmätarna i bilar: efter 999 999 slår de över till 000 000. Här händer något liknande, men eftersom talet har tecken blir värdet i stället ett mycket stort negativt tal.

Ett drabbat system tolkar det negativa talet som sekunder räknade bakåt från 1970. Resultatet: datumet visas som den 13 december 1901, kl. 20:45:52 (UTC). En dator som plötsligt har hoppat 136 år bakåt i tiden; certifikat, timers, loggar och datumjämförelser kan börja fungera fel.

> **Visste du det?** Det här problemet har redan dykt upp i en del programvara utan att vänta till 2038. Enligt Wikipedia kraschade programvaran AOLserver 2006 när den passerade 2038-gränsen, eftersom ett timeout-värde hade satts en miljard sekunder framåt. Alltså kan varje program som räknar ut ett "framtida datum" redan nu stöta på gränsen. En liknande 32-bitarsgräns orsakade problem i Microsoft Exchange 2022: versionsnumret på en uppdatering lästes som en tidsstämpel och passerade gränsen, och då slutade funktionerna för skanning efter skadlig kod att fungera.

## Vilka riskerar mest?

De allra flesta moderna telefoner och datorer du använder dagligen har numera 64-bitars tidsvärden. Den verkliga risken finns i system som körs i många år utan att uppdateras. Wikipedia lyfter särskilt fram äldre (legacy) system och inbyggda system: industriella styrenheter, vissa nätverksenheter, system i fordon, alltså maskiner som installeras en gång och sedan glöms bort.

Eftersom sådana enheter inte uppdateras ofta kan det när 2038 kommer fortfarande finnas en komponent i dem som räknar tid med 32 bitar.

| 32-bitars tid med tecken | 64-bitars tid med tecken |
|---|---|
| Största värde 2 147 483 647 | Ett mycket större intervall |
| Gräns: 19 januari 2038 | Gräns: om cirka 292 miljarder år |
| Gamla och inbyggda system | Moderna operativsystem |

## Lösningen: en större räknare

Svårigheten här är mer praktisk än teknisk. Att ändra storleken på talet som håller tiden kan påverka varje program som använder det talet, varje filformat och varje databasfält. Att rätta en enda rad är lätt; att hitta och uppdatera all programvara inuti en enhet kan ta år.


Lösningen är enkel i idé: håll tiden som ett 64-bitars tal med tecken. Enligt Wikipedia skjuter det upp överflödet till cirka 292 miljarder år fram i tiden. Alltså långt bortom universums nuvarande ålder.

Den här övergången har pågått i flera år. Enligt Phoronix nyhet från januari 2020 förbereddes Linux 5.6 som den första stora kärnversionen som kan lägga grunden för att 32-bitarssystem ska kunna köra efter 2038. Wikipedia anger att Linux 5.6, som kom 2020, lade till stöd för 64-bitars tid på 32-bitarsarkitekturer. För att det ska fungera måste även applikationerna kompileras om med 64-bitars tid.

Ett annat lösningsförslag är att göra talet utan tecken (unsigned). Men det flyttar bara gränsen till 2106 och förstör användningen av datum före 1970. Därför ses övergången till 64 bitar som den verkliga vägen.

Y2K blev ingen stor katastrof eftersom folk arbetade i förväg; tror du att samma tysta hjältemod upprepas under åren fram till 2038?
