---
title: "2038 metų problema: kodėl kai kurie kompiuteriai sugrįš į 1901-uosius?"
excerpt: "32 bitų Unix laikas pasibaigs 2038 m. sausio 19 d. 03:14:07 UTC, o senos sistemos gali pamanyti, kad yra 1901 m. gruodžio 13 d. Kas yra 2038 metų problema ir kaip ji sprendžiama?"
hook: "Kompiuteriai sugrįš į 1901-uosius!"
fact: "03:14:07"
factLabel: "2038 m. sausio 19 d., UTC: 32 bitų riba"
category: "Kompiuteriai"
---
Artėjant 2000 metams pasaulis kalbėjo apie kompiuterių klaidą, vadinamą "Y2K". Dabar eilė kitai datai: 2038 m. sausio 19 d. Tą dieną, praėjus vienai sekundei po 03:14:07 (UTC), kai kurie seni kompiuteriai gali staiga nuspręsti, kad yra 1901 metai. Tai ne mokslinės fantastikos scenarijus, o paprasta matematikos problema.

## Kaip kompiuteriai skaičiuoja laiką?

Unix ir daugelis iš jo kilusių sistemų laiką saugo ne kaip laikrodį ar kalendorių, o kaip vieną skaičių. Tas skaičius yra sekundžių kiekis, praėjęs nuo 1970 m. sausio 1 d. vidurnakčio (UTC). Tai vadinama "Unix laiku".

Bėda ta, kad daugelyje senų sistemų šis skaičius saugomas kaip 32 bitų sveikasis skaičius su ženklu. Didžiausia 32 bitų skaičiaus su ženklu reikšmė yra 2 147 483 647, tai yra 2 pakelta 31 laipsniu minus 1. Tiek sekundžių sudaro maždaug 68 metus. "Su ženklu" reiškia, kad vienas bitas skirtas parodyti, ar skaičius teigiamas, ar neigiamas. Todėl dydžiui naudojami ne visi 32 bitai, o tik 31.

Prie 1970 pridėjus 68 metus, pasiekiame 2038-uosius. Skaičiavimas tiksliai rodo 2038 m. sausio 19 d., 03:14:07 UTC.

## Kas nutiks po vienos sekundės?

Pasiekęs didžiausią reikšmę, skaitiklis po sekundės persipildo. Pagalvok apie senus mechaninius automobilių ridos skaitiklius: po 999 999 jie grįžta į 000 000. Čia nutinka kažkas panašaus, tačiau kadangi skaičius turi ženklą, reikšmė virsta labai dideliu neigiamu skaičiumi.

Paveikta sistema šį neigiamą skaičių supranta kaip sekundes, skaičiuojamas atgal nuo 1970-ųjų. Rezultatas: data pasirodo kaip 1901 m. gruodžio 13 d., 20:45:52 (UTC). Kompiuteris staiga peršoka 136 metus atgal, ir sertifikatai, laikmačiai, įrašai bei datų palyginimai gali pradėti veikti klaidingai.

> **Ar žinojai?** Ši problema kai kuriose programose išryškėjo net nelaukiant 2038-ųjų. Pasak Wikipedia, 2006 m. programa AOLserver sugriuvo, nes laiko limito reikšmę nustatė milijardu sekundžių į ateitį ir peržengė 2038 metų ribą. Tai reiškia, kad bet kuri programa, skaičiuojanti "ateities datą", į šią ribą gali atsitrenkti jau dabar. Panaši 32 bitų riba 2022 m. sukėlė problemų ir Microsoft Exchange: atnaujinimo versijos numeris buvo perskaitytas kaip laiko žymė ir peržengė ribą, todėl nustojo veikti kenkėjiškų programų tikrinimo funkcijos.

## Kam gresia pavojus?

Didžioji dauguma šiuolaikinių telefonų ir kompiuterių, kuriais naudojiesi kasdien, jau naudoja 64 bitų laiko reikšmes. Tikroji rizika slypi sistemose, kurios daug metų veikia neatnaujintos. Wikipedia ypač pabrėžia senas (legacy) ir įterptines sistemas: pramoninės valdymo įrangos, kai kurių tinklo įrenginių, automobilių sistemų, tai yra mašinų, kurios įrengiamos vieną kartą ir pamirštamos.

Kadangi tokie įrenginiai atnaujinami retai, atėjus 2038-iesiems kai kuriuose jų vis dar gali likti dalis, skaičiuojanti laiką 32 bitais.

| 32 bitų laikas su ženklu | 64 bitų laikas su ženklu |
|---|---|
| Didžiausia reikšmė 2 147 483 647 | Daug platesnis diapazonas |
| Riba: 2038 m. sausio 19 d. | Riba: maždaug po 292 milijardų metų |
| Senos ir įterptinės sistemos | Šiuolaikinės operacinės sistemos |

## Sprendimas: didesnis skaitiklis

Sunkumas čia labiau praktinis nei techninis. Pakeitus laiką saugančio skaičiaus dydį, gali tekti keisti kiekvieną jį naudojančią programą, kiekvieną failo formatą ir kiekvieną duomenų bazės lauką. Pataisyti vieną eilutę lengva, o surasti ir atnaujinti visą įrenginio programinę įrangą gali užtrukti metus.

Idėja paprasta: laiką saugoti 64 bitų skaičiumi su ženklu. Pasak Wikipedia, tai persipildymo momentą nukelia maždaug 292 milijardus metų į priekį, tai yra gerokai toliau nei dabartinis visatos amžius.

Šis perėjimas vyksta jau daug metų. Pasak Phoronix 2020 m. sausio naujienos, Linux 5.6 buvo ruošiamas kaip pirma pagrindinė branduolio versija, galinti padėti pagrindą 32 bitų sistemoms veikti po 2038 m. Wikipedia teigia, kad 2020 m. išleistas Linux 5.6 pridėjo 64 bitų laiko palaikymą 32 bitų architektūroms. Kad tai veiktų, programas taip pat reikia perkompiliuoti su 64 bitų laiku.

Dar vienas siūlomas sprendimas yra skaičių padaryti be ženklo (unsigned). Tačiau tai ribą nukelia tik iki 2106 m. ir sugadina datų iki 1970 m. naudojimą. Todėl pagrindiniu keliu laikomas perėjimas prie 64 bitų.

Y2K netapo didele katastrofa, nes žmonės dirbo iš anksto. Ar manai, kad per likusius iki 2038-ųjų metus ta pati tyli didvyriška pastanga pasikartos?
