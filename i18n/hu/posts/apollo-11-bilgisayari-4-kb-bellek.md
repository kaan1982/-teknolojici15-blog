---
title: "Az Apollo 11 számítógépe: mit jelent valójában a „4 KB memória”?"
excerpt: "Az Apollo 11-et a Holdra juttató számítógépnek nagyjából 4 KB RAM-ja volt. A programok egy kötélbe szőtt, nagyjából 72 KB-os ROM-ban rejtőztek."
hook: "4 KB RAM-mal szálltak le a Holdon"
fact: "4 KB"
factLabel: "Az AGC törölhető memóriája (RAM)"
category: "Számítástechnika"
---
Biztosan hallottad már a mondatot: „A Holdra tartó számítógép memóriája egy fényképnél is kisebb volt.” A videóban mi is „4 KB”-ot mondtunk. Ez a szám igaz, de önmagában hiányos. Az Apollo irányítószámítógépnek (Apollo Guidance Computer, röviden AGC) ugyanis két külön memóriája volt, és a „4 KB” közülük csak a kisebbiket írja le.

Nézzük meg együtt, mi van ennek a híres számnak a mélyén.

## Pontosan mit jelent a „4 KB”?

Az AGC munkamemóriája, vagyis amit ma RAM-nak hívnánk, 2048 „szóból” állt. Minden szó 16 bit hosszú volt: 15 bit adat és 1 bit paritás a hibaellenőrzéshez. Ha egy szót 2 bájtnak számolunk, a 2048 szó nagyjából 4 KB. Vagyis a „4 KB” annak a fecninek a mérete, amelyet a számítógép repülés közben a számolásokhoz használt.

A programok nem ebben a memóriában voltak. Itt az aktuális helyzet, a sebesség, a számlálók és a feladatok között átadott részeredmények éltek. A memória mágneses gyűrűkből, úgynevezett magokból (core) készült, és áramszünet esetén is megőrizte a tartalmát.

A programok egészen máshol voltak: egy 36 864 szavas állandó memóriában, azaz ROM-ban. Ugyanezzel a számítással ez nagyjából 72 KB. Röviden, a pontosabb mondat így szól: az Apollo 11 nagyjából 4 KB RAM-mal és nagyjából 72 KB ROM-mal szállt le a Holdon.

## A programokat beleszőtték egy kötélbe

Az AGC ROM-ja „core rope” (magkötél) memória volt, és szó szerint kézzel szőtték. Ha egy huzal átment egy mágneses magon, az a bit 1 lett, ha elkerülte a magot, 0. Vagyis a szoftvert szövéssel, mint egy szövetet, alakították hardverré.

A munkát a Massachusetts állambeli Walthamben a Raytheon dolgozói végezték. Ken Shirriff részletes vizsgálata szerint a felvettek jelentős része varrási ügyessége miatt a helyi textiliparból érkező nő volt. Egyetlen modul megszövése nagyjából 8 hétig tartott, és 15 000 dollárba került. Egy modul 6 ezer szót tárolt, hat modul együtt adta ki a 36 864 szót.

Ennek fontos mellékhatása volt: a szoftvert hónapokkal a repülés előtt le kellett fagyasztani. Nem létezett utolsó pillanatos javítás, mert egy hiba kijavítása az újraszövést jelentette.

> **Tudtad?** Az Apollo 11-en nem egy, hanem két AGC volt: az egyik a parancsnoki modulban, a másik a holdkompban. Mindegyik nagyjából 32 kg-ot nyomott, és 2,048 MHz-es kvarcórával működött.

## A leszállás előtti percekben megszólaló riasztás

Az 1969. július 20-i leszállás közben a holdkomp számítógépe előbb 1202-es, majd 1201-es riasztást adott a kijelzőn. Mindkettő „végrehajtó túlcsordulást” jelentett: a számítógépre több munka került, mint amennyit elbírt. A Wikipedia részletes leírása szerint az ok az volt, hogy a készenlétben hagyott találkozási radar hamis jelei lefoglalták a processzort. A hiba nem programozási hiba, nem pilótahiba és nem hardverhiba volt. Alapvetően a két rendszer közötti interfészleírás egy hibájából született.

Az igazán érdekes az, hogy mit tett ilyenkor a szoftver. Az AGC prioritás alapú ütemezővel dolgozott. Túlterhelés esetén gyorsan újraindította magát, eldobta az alacsony prioritású feladatokat, és folytatta a kritikus munkát, például a leszállás irányítását. Vagyis az a híresen kicsi memória azért volt elég, mert okosan gazdálkodtak vele.

Egy további részlet még nehezebbé tette a dolgot. A Buzz Aldrin által leszállás közben beírt 1668-as parancs plusz terhet rakott a már amúgy is küzdő processzorra, és újabb 1202-es riasztást váltott ki. A szoftver ezt is ugyanígy átvészelte, és a Sas (Eagle) leszállt a Hold felszínén.

A szoftvert az MIT Műszerlaboratóriumában fejlesztették. A parancsnoki modul szoftverét (COLOSSUS) és a holdkomp szoftverét (LUMINARY) különböző csapatok vitték. A részletek kidolgozása Margaret Hamilton csapatának dolga volt.

## Akkor / most

| Apollo irányítószámítógép (1969) | A mai mobiltelefon |
|---|---|
| Nagyjából 4 KB törölhető memória (RAM) | Gigabájtnyi RAM |
| Nagyjából 72 KB, kézzel szőtt ROM | Több száz gigabájtnyi tárhely |
| Hónapokig tartó szövés egy szoftverfrissítéshez | Éjszaka magától települő frissítések |
| Nagyjából 32 kg | Elfér a tenyeredben |

## A szám igazi tanulsága

A „4 KB”-ot sokszor úgy mesélik el, hogy „nézd, milyen primitív volt”. A történet lényege valójában ennek az ellenkezője: a szűkös memória arra kényszerítette a mérnököket, hogy minden bitre elszámoljanak. Így született meg egy olyan szoftver, amely rangsorolta a feladatokat, és túlterhelés esetén összeszedte magát.

A zsebünkben lévő eszközöknek ma összehasonlíthatatlanul több memóriájuk van, de a legtöbb alkalmazást nem írják meg ilyen gondossággal. Egy üzenetküldő app egyetlen frissítése is sokszorosan nagyobb lehet az Apollo teljes szoftverénél.

Szerinted a korlátok nevelnek jobb mérnököket, vagy a bőség?
