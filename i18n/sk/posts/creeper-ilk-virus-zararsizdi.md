---
title: "Prvý počítačový \"vírus\" Creeper nič nezmazal"
excerpt: "Creeper, ktorý sa v roku 1971 potuloval po sieti ARPANET, sa nedotkol žiadnych dát, len vypísal na obrazovku výzvu. Na jeho chytenie vznikol prvý antivírus Reaper."
hook: "Prvý vírus nič nezmazal!"
fact: "1971"
factLabel: "Creeper vznikol v BBN"
category: "Počítač"
---
Keď sa povie "počítačový vírus", predstavíme si niečo, čo maže súbory, drží dáta ako rukojemníkov a zamyká obrazovku. Program, ktorý mnohé zdroje uvádzajú ako "prvý vírus", však nerobil nič z toho. Jediné, čo robil, bolo, že na obrazovku napísal malú výzvu a presunul sa na ďalší počítač.

Volal sa Creeper, teda "plaz".

## 1971, BBN a ARPANET

Creeper napísal v roku 1971 Bob Thomas ako experimentálny program vo firme BBN (Bolt Beranek and Newman) v Massachusetts. BBN bola firma, ktorá zohrala kľúčovú úlohu pri budovaní ARPANETu, považovaného za predchodcu internetu.

Program sa pohyboval medzi hlavnými počítačmi DEC PDP-10 pripojenými k ARPANETu, na ktorých bežal operačný systém TENEX. Podľa Wikipédie bolo v tom čase v sieti ARPANET systémov s TENEXom 28, teda najviac počítačov, ku ktorým sa Creeper mohol dostať.

Bobovi Thomasovi nešlo o zlo, ale o odpoveď na otázku: môže sa program sám presúvať v sieti z jedného stroja na druhý?

## Jediná veta na obrazovke

Keď Creeper dorazil na stroj, vytlačil na teletype (terminál s tlačiarňou) túto správu:

"I'M THE CREEPER : CATCH ME IF YOU CAN"

Po slovensky: "Ja som Plaz: chyť ma, ak vládzeš." To je všetko. Nezmazal žiadny súbor, nepoškodil žiadne dáta. Wikipédia uvádza, že operátori pri tomto experimente spolupracovali a nebol hlásený žiadny nežiaduci účinok.

Prvá verzia sa dokonca ani nekopírovala: pri presune z jedného stroja na druhý sa premiestňovala bez toho, aby za sebou nechala kópiu. Neskôr Ray Tomlinson, známy ako vynálezca e-mailu, program upravil tak, aby sa kopíroval na ďalšie stroje. Táto verzia, ktorá sa množila sama, sa považuje za prvého všeobecne uznávaného počítačového červa (worm).

## Vírus, alebo červ?

Tu treba urobiť malú, ale dôležitú opravu. Technicky nebol Creeper vírus, ale červ. Vírus sa šíri tak, že sa prilepí na iný program alebo súbor; červ sa sám pohybuje po sieti. Creeper patrí do druhej skupiny. Napriek tomu ho mnohé publikácie uvádzajú ako "prvý počítačový vírus na svete"; presne toto vyjadrenie používa aj citát z Guardianu, ktorý uvádza Wikipédia. Populárna podoba pojmu je takáto, ale technicky správne označenie je "prvý červ".

Samotný pojem "počítačový vírus" vznikol 12 rokov po Creeperovi. Podľa článku WeLiveSecurity od ESET napísal Fred Cohen, študent Univerzity južnej Kalifornie, 3. novembra 1983 program, ktorý sa sám šíril; jeho učiteľ Len Adleman navrhol pojem tak, že toto šírenie podobné "infekcii" prirovnal k vírusom v biológii. Cohen pripravil program na VAX 11/750 s Unixom približne za osem hodín práce.

> **Vedeli ste?** Ray Tomlinson, ktorý vynašiel e-mail a zaviedol znak @ do adries, je zároveň tvorcom programu považovaného za prvý antivírus. Najobľúbenejší nástroj internetu aj jeho prvého "upratovača" teda napísal ten istý človek.

## Reaper: prvý antivírus

Keď sa v sieti objavil program, ktorý sa sám kopíroval, vznikla potreba niečoho, čo by ho zastavilo. Ray Tomlinson napísal v roku 1972 program Reaper ("Žnec"). Reaper sa tiež pohyboval po ARPANETe a Creepera všade, kde ho našiel, zmazal. Wikipédia ho opisuje ako prvý antivírusový softvér.

V tomto príbehu je pekná irónia: úplne prvý antivírus bol vlastne program, ktorý sa sám potuloval po sieti. Na chytenie "červa" sa teda napísal iný "červ".

| Vtedy | Dnes |
|---|---|
| 1971: najviac 28 strojov s TENEXom | Miliardy pripojených zariadení |
| Jediná žartovná veta na obrazovke | Ransomvér, krádeže dát |
| Reaper: upratovač s jediným cieľom | Neustále aktualizovaný bezpečnostný softvér |

## Dlhý tieň nevinného experimentu

Creeper bol neškodný, ale pootvoril dvere: ak sa program mohol sám šíriť po sieti, niekto mohol túto moc využiť aj na zlé účely. V nasledujúcich desaťročiach sa presne to stalo a slová "vírus", "červ" a "antivírus" sa dostali do našej každodennej reči.

Keby dnes výskumník v oblasti bezpečnosti pustil podobný experiment na internet bez povolenia, zrejme by sa dostal do vážnych problémov. ARPANET z roku 1971 bol však malá komunita výskumníkov, ktorí sa navzájom poznali, a experiment prebiehal, ako uvádza Wikipédia, so spoluprácou operátorov.

Východiskom však nebol útok, ale zvedavosť. Jeden inžinier sa spýtal "ide to vôbec?" a odpoveď dal na obrazovke jedinou vetou.

Čo myslíte, keby sa Creeper napísal dnes, bol by to neškodný experiment, alebo narušenie bezpečnosti?
