---
title: "Apollo 11 kompiuteris: ką iš tikrųjų reiškia \"4 KB atminties\"?"
excerpt: "Kompiuteris, nuleidęs Apollo 11 ant Mėnulio, turėjo apie 4 KB RAM. Programos buvo saugomos maždaug 72 KB ROM, išausta iš virvių."
hook: "Ant Mėnulio nusileido su 4 KB RAM"
fact: "4 KB"
factLabel: "AGC trinamoji atmintis (RAM)"
category: "Kompiuteriai"
---
Tikrai esi girdėjęs sakinį: "Į Mėnulį skridusio kompiuterio atmintis buvo mažesnė net už nuotrauką." Vaizdo įraše mes taip pat pasakėme "4 KB". Šis skaičius teisingas, bet vienas pats nepilnas. Nes Apollo valdymo kompiuteris (Apollo Guidance Computer, trumpai AGC) iš tikrųjų turėjo dvi skirtingas atmintis, o "4 KB" aprašo tik mažesnę iš jų.

Pažiūrėkime kartu, kas slypi už šio garsaus skaičiaus.

## Ką tiksliai reiškia "4 KB"?

AGC darbinę atmintį, tai yra trinamąją atmintį, kurią šiandien vadintume RAM, sudarė 2 048 "žodžiai". Kiekvienas žodis buvo 16 bitų ilgio: 15 bitų duomenų ir 1 paritetinis bitas klaidoms tikrinti. Jei žodį laikysime 2 baitais, 2 048 žodžiai sudaro apie 4 KB. Taigi "4 KB" yra juodraščio lapo, kuriuo kompiuteris naudojosi skaičiuodamas skrydžio metu, dydis.

Programų šioje atmintyje nebuvo. Joje buvo laikoma esama padėtis, greitis, skaitikliai ir tarp užduočių perduodami tarpiniai rezultatai. Atmintis buvo pagaminta iš mažyčių žiedų, vadinamų magnetiniais šerdelėmis (core), ir išlaikydavo turinį net dingus elektrai.

Programos buvo visai kitur: 36 864 žodžių pastoviojoje atmintyje, tai yra ROM. Tuo pačiu skaičiavimu tai sudaro apie 72 KB. Trumpai tariant, tikslesnis sakinys toks: Apollo 11 nusileido ant Mėnulio turėdamas apie 4 KB RAM ir apie 72 KB ROM.

## Programos buvo išaustos

AGC ROM buvo "core rope" (šerdelių virvės) atmintis ir tiesiogine prasme buvo audžiama rankomis. Jei viela praeidavo per magnetinę šerdelę, tas bitas būdavo 1, jei apeidavo šerdelę, 0. Taigi programinė įranga buvo paverčiama aparatine, audžiant kaip audinys.

Šį darbą Waltham mieste, Masačusetse, atliko Raytheon darbuotojos. Pasak Keno Shirriffo išsamios analizės, nemaža dalis samdytų darbuotojų buvo moterys iš vietos tekstilės pramonės, atrinktos dėl siuvimo įgūdžių. Vieno modulio išaudimas trukdavo maždaug 8 savaites ir kainuodavo 15 000 dolerių. Kiekviename modulyje tilpo 6 tūkstančiai žodžių, o šeši moduliai sudarė 36 864 žodžius.

Tai turėjo svarbų šalutinį poveikį: programinę įrangą reikėjo užšaldyti likus mėnesiams iki skrydžio. Paskutinės minutės pataisų nebuvo, nes klaidos ištaisymas reiškė perausti iš naujo.

> **Ar žinojai?** Apollo 11 skrydyje buvo ne vienas, o du AGC: vienas Vadovavimo modulyje, kitas Mėnulio modulyje. Kiekvienas svėrė apie 32 kg ir veikė su 2,048 MHz kvarciniu laikrodžiu.

## Aliarmas likus minutėms iki nusileidimo

1969 m. liepos 20 d. nusileidimo metu Mėnulio modulio kompiuteris ekrane pirmiausia parodė 1202, o paskui 1201 aliarmą. Abu reiškė "vykdytojo perpildymą": kompiuteriui buvo primesta daugiau darbo, nei jis galėjo pakelti. Pasak išsamaus aprašymo Wikipedia, priežastis buvo klaidingi signalai iš budėjimo režimu paliktos susitikimo radaro, kurie užimdavo procesorių. Problema nebuvo nei programavimo klaida, nei piloto klaida, nei aparatinės įrangos gedimas. Iš esmės ji kilo dėl trūkumo dviejų sistemų sąsajos dokumente.

Įdomiausia, ką programinė įranga padarė tokioje situacijoje. AGC veikė su prioritetų principu paremtu planuotoju. Gavusi per didelę apkrovą, ji greitai save perkrovė, atsisakė mažo prioriteto darbų ir toliau vykdė kritines užduotis, tokias kaip nusileidimo valdymas. Taigi ta garsioji maža atmintis pakako todėl, kad buvo protingai valdoma.

Buvo ir dar vienas dalykas, dar labiau apsunkinęs reikalus. Buzzo Aldrino nusileidimo metu įvesta komanda 1668 uždėjo papildomą naštą ir taip jau vargstančiam procesoriui bei sukėlė dar vieną 1202 aliarmą. Programinė įranga ir tai įveikė taip pat, ir Erelis (Eagle) nusileido ant Mėnulio paviršiaus.

Programinė įranga buvo kuriama MIT Instrumentų laboratorijoje. Vadovavimo modulio programą (COLOSSUS) ir Mėnulio modulio programą (LUMINARY) kūrė skirtingos komandos. Detalių įgyvendinimas buvo Margaret Hamilton vadovaujamos komandos rankose.

## Tada / dabar

| Apollo valdymo kompiuteris (1969) | Šiandieninis išmanusis telefonas |
|---|---|
| Apie 4 KB trinamosios atminties (RAM) | Gigabaitai RAM |
| Apie 72 KB, rankomis išausta ROM | Šimtai gigabaitų saugyklos |
| Mėnesiai audimo programos atnaujinimui | Naktį savaime atsisiunčiami atnaujinimai |
| Apie 32 kg | Telpa į delną |

## Tikroji skaičiaus pamoka

"4 KB" dažnai pasakojama kaip "žiūrėk, koks buvo primityvus". Tačiau istorijos esmė priešinga: ribota atmintis privertė inžinierius skaičiuoti kiekvieną bitą. Todėl atsirado programinė įranga, teikianti užduotims prioritetus ir atsigaunanti perkrovos metu.

Šiandien kišenėje nešiojami įrenginiai turi nepalyginamai daugiau atminties, bet dauguma programų nerašomos taip kruopščiai. Net vienas pokalbių programėlės atnaujinimas gali būti daug kartų didesnis už visą Apollo programinę įrangą.

Kaip manai, ar apribojimai išugdo geresnius inžinierius, ar vis dėlto pertekliaus sąlygos?
