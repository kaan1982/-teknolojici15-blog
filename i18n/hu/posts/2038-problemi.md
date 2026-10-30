---
title: "A 2038-as probléma: miért ugranak vissza 1901-be egyes számítógépek?"
excerpt: "A 32 bites Unix-idő 2038. január 19-én 03:14:07 UTC-kor lejár, és a régebbi rendszerek azt hihetik, 1901. december 13-a van. Mi a 2038-as probléma, és hogyan oldják meg?"
hook: "A számítógépek visszaugranak 1901-be!"
fact: "03:14:07"
factLabel: "2038. január 19., UTC: a 32 bites határ"
category: "Számítástechnika"
---
A 2000. évhez közeledve az egész világ egy „Y2K” nevű számítógépes hibáról beszélt. Most egy másik dátum következik: 2038. január 19. Azon a napon, amikor az óra egy másodperccel túllépi a 03:14:07-et (UTC), néhány régebbi számítógép hirtelen 1901-re állíthatja át a naptárát. Ez nem tudományos-fantasztikus forgatókönyv, hanem egy egyszerű matematikai probléma.

## Hogyan számolják a számítógépek az időt?

A Unix és a belőle származó sok rendszer az időt nem órának vagy naptárnak, hanem egyetlen számnak tárolja. Ez a szám az 1970. január 1-jei éjfél (UTC) óta eltelt másodpercek száma. Ezt hívják „Unix-időnek”.

A gond az, hogy ezt a számot sok régebbi rendszer előjeles, 32 bites egész számként tárolja. Egy előjeles 32 bites szám legnagyobb értéke 2 147 483 647, vagyis 2 a 31-ediken mínusz 1. Ennyi másodperc nagyjából 68 évnek felel meg. Az „előjeles” azt jelenti, hogy egy bit arra van fenntartva, hogy a szám pozitív vagy negatív-e. Így nem mind a 32 bit, csak 31 szolgál a nagyságrend megadására.

Ha az 1970-hez hozzáadunk 68 évet, 2038-hoz jutunk. A számítás pontosan 2038. január 19-ét, 03:14:07 UTC-t adja ki.

## Mi történik egy másodperccel később?

Egy másodperccel azután, hogy a számláló eléri a maximális értéket, túlcsordul. Gondolj a régi, mechanikus autós kilométer-számlálókra: a 999 999 után 000 000-ra fordulnak. Itt hasonló történik, de mivel a szám előjeles, az érték egy nagyon nagy negatív számra fordul át.

Az érintett rendszer ezt a negatív számot az 1970-től visszafelé számolt másodpercekként értelmezi. Az eredmény: a dátum 1901. december 13., 20:45:52 (UTC) lesz. Egy számítógép, amely hirtelen 136 évet ugrott vissza, hibásan kezdhet működni: a tanúsítványok, időzítők, naplók és dátumösszehasonlítások mind elromolhatnak.

> **Tudtad?** Ez a probléma egyes szoftvereknél már 2038 előtt megjelent. A Wikipedia szerint 2006-ban az AOLserver szoftver összeomlott, mert egy időtúllépési értéket egymilliárd másodperccel a jövőbe állított, és ezzel átlépte a 2038-as határt. Vagyis minden program, amely „egy jövőbeli dátumot” számol ki, már ma beleütközhet a korlátba. Hasonló 32 bites határ okozott gondot a Microsoft Exchange-nek is 2022-ben: egy frissítés verziószámát időbélyegként olvasta be a rendszer, túllépte a határt, és a kártevő-szűrési funkciók leálltak.

## Kik vannak veszélyben?

A mindennap használt modern telefonok és számítógépek túlnyomó többsége ma már 64 bites időértékeket használ. Az igazi kockázat azokban a rendszerekben van, amelyek sok éven át frissítés nélkül működnek. A Wikipedia különösen a régi (legacy) és a beágyazott rendszereket emeli ki: ipari vezérlőket, egyes hálózati eszközöket, autók fedélzeti rendszereit, vagyis azokat a gépeket, amelyeket egyszer telepítettek, aztán elfelejtettek.

Mivel az ilyen eszközöket ritkán frissítik, 2038 érkeztekor még lehet bennük egy 32 biten számoló alkatrész.

| 32 bites előjeles idő | 64 bites előjeles idő |
|---|---|
| Legnagyobb érték: 2 147 483 647 | Sokkal nagyobb tartomány |
| Határ: 2038. január 19. | Határ: nagyjából 292 milliárd év múlva |
| Régi és beágyazott rendszerek | Modern operációs rendszerek |

## A megoldás: nagyobb számláló

A nehézség itt inkább gyakorlati, mint műszaki. Az időt tároló szám méretének megváltoztatása hatással lehet minden programra, fájlformátumra és adatbázismezőre, amely használja. Egyetlen sort kijavítani könnyű; egy eszköz összes szoftverét megtalálni és frissíteni viszont évekbe telhet.

A megoldás ötlete egyszerű: az időt 64 bites előjeles számmal kell tárolni. A Wikipedia szerint ez a túlcsordulás pillanatát nagyjából 292 milliárd évvel későbbre tolja. Vagyis messze az univerzum jelenlegi kora mögé.

Ez az átállás évek óta folyik. A Phoronix 2020. januári híre szerint a Linux 5.6 volt az első fő kernelverzió, amely alapot teremthet ahhoz, hogy a 32 bites rendszerek 2038 után is működjenek. A Wikipedia szerint a 2020-ban megjelent Linux 5.6 64 bites időtámogatást adott a 32 bites architektúrákhoz. Ahhoz, hogy ez működjön, az alkalmazásokat is újra kell fordítani 64 bites idővel.

Egy másik javaslat szerint a számot előjel nélkülivé (unsigned) kell tenni. Ez azonban a határt csak 2106-ig tolja ki, és tönkreteszi az 1970 előtti dátumok használatát. Ezért az igazi útnak a 64 bitre váltást tekintik.

Az Y2K nem fajult nagy katasztrófává, mert az emberek előre dolgoztak; szerinted a 2038-ig hátralévő években megismétlődik ugyanez a csendes hősiesség?
