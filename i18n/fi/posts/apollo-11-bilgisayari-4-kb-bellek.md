---
title: "Apollo 11:n tietokone: mitä \"4 kilotavun muisti\" oikeasti tarkoittaa?"
excerpt: "Apollo 11:n Kuuhun laskeutuneessa tietokoneessa oli noin 4 kt RAM-muistia. Ohjelmat olivat noin 72 kt:n ROM-muistissa, joka oli kudottu langasta."
hook: "Kuuhun laskeuduttiin 4 kt:n RAM-muistilla"
fact: "4 kt"
factLabel: "AGC:n pyyhittävä muisti (RAM)"
category: "Tietokoneet"
---
Olet varmasti kuullut lauseen "Kuuhun lentäneen tietokoneen muisti oli pienempi kuin yksi valokuva". Mekin sanoimme videolla "4 kt". Luku on oikein, mutta yksinään vajaa. Apollo-ohjaustietokoneessa (Apollo Guidance Computer, lyhyesti AGC) oli nimittäin oikeasti kaksi erillistä muistia, ja "4 kt" kuvaa vain pienempää niistä.

Avataan tämä kuuluisa luku yhdessä.

## Mitä "4 kt" tarkalleen tarkoittaa?

AGC:n työmuisti, eli pyyhittävä muisti, jota nykyään kutsuisimme RAM-muistiksi, koostui 2 048 "sanasta". Jokainen sana oli 16 bitin mittainen: 15 bittiä dataa ja 1 pariteettibitti virheentarkistukseen. Jos sana lasketaan 2 tavuksi, 2 048 sanaa on noin 4 kt. "4 kt" kuvaa siis sitä muistiinpanopaperia, jota tietokone käytti laskiessaan lennon aikana.

Ohjelmat eivät olleet tässä muistissa. Siellä oli hetkellinen sijainti, nopeus, laskurit ja tehtävien välillä siirtyvät välitulokset. Muisti oli tehty magneettisista ydinrenkaista (core), ja se säilytti sisältönsä, vaikka sähkö katkesi.

Ohjelmat olivat aivan toisessa paikassa: 36 864 sanan kiinteässä muistissa eli ROM-muistissa. Samalla laskulla se on noin 72 kt. Tarkempi lause kuuluu siis: Apollo 11 laskeutui Kuuhun noin 4 kt:n RAM-muistilla ja noin 72 kt:n ROM-muistilla.

## Ohjelmat oli kudottu langasta

AGC:n ROM oli "core rope" (ydinköysi) -muistia, ja se kudottiin kirjaimellisesti käsin. Jos lanka kulki magneettisen ytimen läpi, bitti oli 1, ja jos se kulki ytimen sivuitse, bitti oli 0. Ohjelmisto muutettiin siis laitteistoksi kutomalla kuin kangas.

Työn tekivät Raytheonin työntekijät Walthamissa Massachusettsissa. Ken Shirriffin yksityiskohtaisen selvityksen mukaan merkittävä osa palkatuista oli naisia, jotka tulivat paikallisesta tekstiiliteollisuudesta ompelutaitojensa vuoksi. Yhden moduulin kutominen vei noin 8 viikkoa ja maksoi 15 000 dollaria. Jokaiseen moduuliin mahtui 6 000 sanaa, ja kuusi moduulia muodosti yhteensä 36 864 sanaa.

Sivuvaikutus oli merkittävä: ohjelmisto piti jäädyttää kuukausia ennen lentoa. Viime hetken korjauspäivityksiä ei ollut, koska virheen korjaaminen tarkoitti uudelleen kutomista.

> **Tiesitkö?** Apollo 11:ssä ei ollut yhtä vaan kaksi AGC:tä: toinen komentomoduulissa ja toinen kuumoduulissa. Kumpikin painoi noin 32 kg ja toimi 2,048 MHz:n kideoskillaattorilla.

## Hälytys minuutteja ennen laskeutumista

Laskeutumisessa 20. heinäkuuta 1969 kuumoduulin tietokone antoi ruudulle ensin hälytyksen 1202 ja sitten 1201. Molemmat tarkoittivat "suorittimen ylivuotoa": tietokoneelle oli annettu enemmän työtä kuin se jaksoi kantaa. Wikipedian yksityiskohtaisen kuvauksen mukaan syynä oli, että valmiustilaan jätetyn kohtaamistutkan vääriä signaaleja kuormitti prosessoria. Kyse ei ollut ohjelmointivirheestä, ohjaajan virheestä eikä laitevioista. Perimmiltään ongelma johtui kahden järjestelmän välisen rajapintadokumentin puutteesta.

Mielenkiintoista on, mitä ohjelmisto teki tilanteessa. AGC toimi prioriteettipohjaisella ajastimella. Ylikuormituksessa se käynnistyi nopeasti uudelleen, jätti matalan prioriteetin työt ja jatkoi kriittisiä tehtäviä, kuten laskeutumisen hallintaa. Se kuuluisa pieni muisti riitti siis, koska sitä hallittiin älykkäästi.

Asioita vaikeutti vielä yksi yksityiskohta. Buzz Aldrinin laskeutumisen aikana tietokoneelle syöttämä komento 1668 lisäsi jo valmiiksi kamppailevan prosessorin kuormaa ja laukaisi vielä yhden 1202-hälytyksen. Ohjelmisto selvisi tästäkin samalla tavalla, ja Kotka (Eagle) laskeutui Kuun pinnalle.

Ohjelmisto kehitettiin MIT:n instrumentointilaboratoriossa. Komentomoduulin ohjelmistoa (COLOSSUS) ja kuumoduulin ohjelmistoa (LUMINARY) veivät eteenpäin eri tiimit. Yksityiskohtien toteutus oli Margaret Hamiltonin johtamalla tiimillä.

## Silloin / nyt

| Apollo-ohjaustietokone (1969) | Nykypäivän matkapuhelin |
|---|---|
| Noin 4 kt pyyhittävää muistia (RAM) | Gigatavuittain RAM-muistia |
| Noin 72 kt käsin kudottua ROM-muistia | Satoja gigatavuja tallennustilaa |
| Kuukausien kudonta ohjelmistopäivitystä varten | Yöllä itsestään latautuvat päivitykset |
| Noin 32 kg | Mahtuu kämmenelle |

## Luvun todellinen opetus

"4 kt" kerrotaan usein tyyliin "katso kuinka alkeellista". Tarinan ydin on kuitenkin päinvastainen: rajallinen muisti pakotti insinöörit tekemään tiliä jokaisesta bitistä. Siksi syntyi ohjelmisto, joka priorisoi tehtäviä ja toipui ylikuormituksesta.

Nykyään taskussamme olevilla laitteilla on verrattomasti enemmän muistia, mutta useimpia sovelluksia ei kirjoiteta yhtä huolellisesti. Yksi viestisovelluksen päivitys voi olla moninkertaisesti suurempi kuin Apollon koko ohjelmisto.

Kasvattavatko rajoitukset mielestäsi parempia insinöörejä, vai yltäkylläisyys?
