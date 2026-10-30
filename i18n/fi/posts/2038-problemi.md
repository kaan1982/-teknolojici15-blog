---
title: "Vuoden 2038 ongelma: miksi jotkin tietokoneet palaavat vuoteen 1901?"
excerpt: "32-bittinen Unix-aika täyttyy 19. tammikuuta 2038 kello 03.14.07 UTC, ja vanhat järjestelmät voivat luulla päiväykseksi 13. joulukuuta 1901. Mikä vuoden 2038 ongelma on ja miten se ratkaistaan?"
hook: "Tietokoneet palaavat vuoteen 1901!"
fact: "03:14:07"
factLabel: "19. tammikuuta 2038, UTC: 32-bittinen raja"
category: "Tietokoneet"
---
Vuosituhannen vaihtuessa maailma puhui "Y2K"-nimisestä tietokonevirheestä. Nyt vuorossa on toinen päivämäärä: 19. tammikuuta 2038. Kun kello on silloin sekunnin yli 03.14.07 (UTC), jotkin vanhat tietokoneet voivat yhtäkkiä vaihtaa kalenterinsa vuoteen 1901. Tämä ei ole tieteiskirjallinen skenaario vaan yksinkertainen matemaattinen ongelma.

## Miten tietokoneet laskevat aikaa?

Unix ja monet siitä johdetut järjestelmät eivät pidä aikaa kellona tai kalenterina vaan yhtenä lukuna. Tämä luku on sekuntien määrä 1. tammikuuta 1970 keskiyöstä (UTC) lähtien. Sitä kutsutaan "Unix-ajaksi".

Ongelma on, että monissa vanhoissa järjestelmissä tämä luku tallennetaan etumerkilliseksi 32-bittiseksi kokonaisluvuksi. Etumerkillisen 32-bittisen luvun suurin arvo on 2 147 483 647, eli 2 potenssiin 31 miinus 1. Se vastaa noin 68 vuotta sekunteina. "Etumerkillinen" tarkoittaa, että yksi bitti on varattu kertomaan, onko luku positiivinen vai negatiivinen. Siksi suuruuteen käytetään 31 bittiä, ei kaikkia 32.

Kun vuoteen 1970 lisätään 68 vuotta, päädytään vuoteen 2038. Laskelma osoittaa tarkalleen 19. tammikuuta 2038 kello 03.14.07 UTC.

## Mitä tapahtuu sekunnin kuluttua?

Laskuri ylivuotaa sekunnin sen jälkeen, kun se on saavuttanut suurimman arvonsa. Ajattele vanhoja mekaanisia auton matkamittareita: 999 999:n jälkeen ne palaavat lukemaan 000 000. Tässä tapahtuu jotain vastaavaa, mutta koska luku on etumerkillinen, arvo kääntyy hyvin suureksi negatiiviseksi luvuksi.

Kohteena oleva järjestelmä tulkitsee tämän negatiivisen luvun sekunneiksi, jotka lasketaan vuodesta 1970 taaksepäin. Tuloksena päivämääräksi tulee 13. joulukuuta 1901, kello 20.45.52 (UTC). Tietokone, joka on yhtäkkiä hypännyt 136 vuotta taaksepäin: sertifikaatit, ajastimet, lokit ja päivämäärävertailut voivat alkaa toimia virheellisesti.

> **Tiesitkö?** Ongelma on ilmennyt joissakin ohjelmistoissa jo ennen vuotta 2038. Wikipedian mukaan AOLserver-ohjelmisto kaatui vuonna 2006, koska se asetti aikakatkaisun arvoksi miljardi sekuntia tulevaisuuteen ja ylitti vuoden 2038 rajan. Jokainen ohjelma, joka laskee "tulevaa päivämäärää", voi siis osua rajaan jo nyt. Samanlainen 32 bitin raja aiheutti ongelmia myös Microsoft Exchangessa vuonna 2022: päivityksen versionumero luettiin aikaleimaksi ja se ylitti rajan, minkä jälkeen haittaohjelmien skannaustoiminnot pysähtyivät.

## Ketkä ovat vaarassa?

Valtaosa päivittäin käyttämistäsi nykyaikaisista puhelimista ja tietokoneista käyttää jo 64-bittisiä aika-arvoja. Todellinen riski on järjestelmissä, jotka ovat pyörineet vuosia päivittämättä. Wikipedia nostaa esiin erityisesti vanhat (legacy) ja sulautetut järjestelmät: teollisuuden ohjauslaitteet, jotkin verkkolaitteet, ajoneuvojen järjestelmät ja muut kerran asennetut ja unohdetut koneet.

Koska tällaisia laitteita ei päivitetä usein, vuonna 2038 niiden sisällä voi yhä olla osa, joka laskee aikaa 32 bitillä.

| 32-bittinen etumerkillinen aika | 64-bittinen etumerkillinen aika |
|---|---|
| Suurin arvo 2 147 483 647 | Paljon laajempi vaihteluväli |
| Raja: 19. tammikuuta 2038 | Raja: noin 292 miljardin vuoden päässä |
| Vanhat ja sulautetut järjestelmät | Nykyaikaiset käyttöjärjestelmät |

## Ratkaisu: isompi laskuri

Haaste on enemmän käytännöllinen kuin tekninen. Ajan pitämiseen käytetyn luvun koon muuttaminen voi vaikuttaa jokaiseen sitä käyttävään ohjelmaan, tiedostomuotoon ja tietokannan kenttään. Yhden rivin korjaaminen on helppoa, mutta laitteen kaikkien ohjelmistojen löytäminen ja päivittäminen voi viedä vuosia.

Ratkaisu on ajatuksena yksinkertainen: pidetään aika 64-bittisenä etumerkillisenä lukuna. Wikipedian mukaan tämä siirtää ylivuodon hetken noin 292 miljardin vuoden päähän. Eli reilusti yli maailmankaikkeuden nykyisen iän.

Siirtymä on ollut käynnissä jo vuosia. Phoronixin tammikuun 2020 uutisen mukaan Linux 5.6 oli valmisteilla ensimmäisenä pääytimen versiona, joka voisi luoda perustan sille, että 32-bittiset järjestelmät toimivat vuoden 2038 jälkeen. Wikipedia toteaa, että vuonna 2020 julkaistu Linux 5.6 lisäsi 64-bittisen aikatuen 32-bittisille arkkitehtuureille. Jotta tämä toimisi, myös sovellukset on käännettävä uudelleen 64-bittisellä ajalla.

Toinen ratkaisuehdotus on tehdä luvusta etumerkitön (unsigned). Mutta se siirtää rajan vain vuoteen 2106 ja rikkoo vuotta 1970 edeltävien päivämäärien käytön. Siksi todellinen tie nähdään siirtymisenä 64 bittiin.

Y2K ei muuttunut suureksi katastrofiksi, koska ihmiset tekivät töitä etukäteen. Luuletko, että sama hiljainen sankaruus toistuu vuoteen 2038 jäljellä olevina vuosina?
