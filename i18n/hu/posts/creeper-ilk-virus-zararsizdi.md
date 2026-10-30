---
title: "Az első számítógépes „vírus”, a Creeper, semmit sem törölt"
excerpt: "Az 1971-ben az ARPANET-en kószáló Creeper semmilyen adathoz nem nyúlt, csak egy kihívást írt a képernyőre. Elfogására írták az első vírusirtót, a Reapert."
hook: "Az első vírus semmit sem törölt!"
fact: "1971"
factLabel: "A Creepert a BBN-nél írták"
category: "Számítástechnika"
---
Ha azt halljuk, „számítógépes vírus”, fájlokat törlő, adatokat túszul ejtő, a képernyőt lezáró dologra gondolunk. Pedig az a program, amelyet a legtöbb forrás „az első vírusként” említ, ezek egyikét sem tette. Annyit tett csak, hogy egy kis kihívást írt a képernyőre, és átugrott a következő számítógépre.

A neve Creeper volt, vagyis „kúszónövény”, „csúszómászó”.

## 1971, BBN és ARPANET

A Creepert 1971-ben Bob Thomas írta kísérleti programként a massachusettsi BBN-nél (Bolt Beranek and Newman). A BBN kulcsszerepet játszott az internet ősének számító ARPANET felépítésében.

A program az ARPANET-re kötött, TENEX operációs rendszert futtató DEC PDP-10 gazdagépek között kószált. A Wikipedia szerint abban az időben az ARPANET-en 28 TENEX-et futtató rendszer volt, vagyis a Creeper legfeljebb ennyi számítógépet érhetett el.

Bob Thomas igazi célja nem a rosszindulat volt, hanem egy kérdés megválaszolása: képes-e egy program magától átköltözni a hálózaton egyik gépről a másikra?

## Az egyetlen mondat a képernyőn

Amikor a Creeper egy géphez ért, a teletype-on (nyomtatós terminálon) ezt az üzenetet írta ki:

"I'M THE CREEPER : CATCH ME IF YOU CAN"

Magyarul: „Én vagyok a Csúszómászó: kapj el, ha tudsz.” Ennyi volt. Egyetlen fájlt sem törölt, semmilyen adatot nem rongált meg. A Wikipedia szerint az üzemeltetők együttműködtek a kísérletben, és nem jelentettek nemkívánatos hatást.

Az első verzió valójában még másolni sem tudta magát: egyik gépről a másikra úgy költözött, hogy nem hagyott maga után másolatot. Később Ray Tomlinson, akit az e-mail feltalálójaként ismerünk, úgy módosította a programot, hogy másolja magát a többi gépre. Ezt az önmagát sokszorosító változatot tekintik az általánosan elfogadott első számítógépes féregnek (worm).

## Vírus vagy féreg?

Itt egy kicsi, de fontos helyreigazítás kell. Műszaki értelemben a Creeper nem vírus, hanem féreg volt. A vírus egy másik programhoz vagy fájlhoz tapadva terjed, a féreg a hálózaton önállóan mozog. A Creeper a második csoportba tartozik. Mégis sok kiadvány „a világ első számítógépes vírusaként” említi; a Wikipedia által idézett Guardian-részlet is pontosan ezt a kifejezést használja. A fogalom népszerű változata ez, de műszakilag a helyes címke „az első féreg”.

A „számítógépes vírus” kifejezés maga 12 évvel a Creeper után született. Az ESET WeLiveSecurity írása szerint a Dél-Kaliforniai Egyetem hallgatója, Fred Cohen 1983. november 3-án írt egy önmagát terjesztő programot; tanára, Len Adleman ezt a „fertőzésre” emlékeztető terjedést a biológiai vírusokhoz hasonlítva javasolta a kifejezést. Cohen a programot egy Unixot futtató VAX 11/750-esen, nagyjából nyolcórás munkával készítette el.

> **Tudtad?** Ray Tomlinson, aki feltalálta az e-mailt, és a @ jelet beemelte a címekbe, egyben az első vírusirtónak tekintett program alkotója is. Vagyis az internet legkedveltebb eszközét és az első „takarítóját” is ugyanaz az ember írta.

## Reaper: az első vírusirtó

Amikor megjelent egy, a hálózaton önmagát másoló program, szükség lett valamire, ami megállítja. Ray Tomlinson 1972-ben megírt egy Reaper („Kaszás”) nevű programot. A Reaper szintén az ARPANET-en kószált, és ahol a Creepert megtalálta, ott törölte. A Wikipedia az első víruskereső szoftverként írja le.

Ebben a történetben van egy szép irónia: a világ első vírusirtója is valójában egy önállóan a hálózaton mozgó program volt. Vagyis a „féreg” elkapására egy másik „férget” írtak.

| Akkor | Most |
|---|---|
| 1971: legfeljebb 28 TENEX-gép | Milliárdnyi hálózatra kötött eszköz |
| Egyetlen tréfás mondat a képernyőn | Zsarolóvírus, adatlopás |
| Reaper: egyetlen célú takarító | Folyamatosan frissülő biztonsági szoftverek |

## Egy ártatlan kísérlet hosszú árnyéka

A Creeper ártalmatlan volt, de kinyitott egy ajtót: ha egy program a hálózaton magától terjedhet, valaki ezt az erőt rossz célra is használhatja. A következő évtizedekben pontosan ez történt, és a „vírus”, „féreg”, „vírusirtó” szavak bekerültek a mindennapi nyelvünkbe.

Ha ma egy biztonsági kutató engedély nélkül hasonló kísérletet engedne az internetre, nagy valószínűséggel komoly bajba kerülne. Az 1971-es ARPANET viszont egymást ismerő kutatók kis közössége volt, és a kísérlet, ahogy a Wikipedia írja, az üzemeltetők együttműködésével zajlott.

A kiindulópont mégsem támadás volt, hanem kíváncsiság. Egy mérnök azt kérdezte: „vajon megoldható?”, és a választ egyetlen mondattal adta meg a képernyőn.

Szerinted ha a Creepert ma írnák meg, ártalmatlan kísérletnek vagy biztonsági incidensnek számítana?
