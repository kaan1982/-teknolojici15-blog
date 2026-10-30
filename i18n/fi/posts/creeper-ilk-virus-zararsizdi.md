---
title: "Ensimmäinen tietokone-\"virus\" Creeper ei poistanut mitään"
excerpt: "Vuonna 1971 ARPANETissa kiertänyt Creeper ei koskenut mihinkään dataan, vaan kirjoitti ruudulle vain haasteen. Sen pysäyttämiseksi kirjoitettiin ensimmäinen virustorjuntaohjelma, Reaper."
hook: "Ensimmäinen virus ei poistanut mitään!"
fact: "1971"
factLabel: "Creeper kirjoitettiin BBN:llä"
category: "Tietokoneet"
---
Kun sanomme "tietokonevirus", mieleen tulee jotain, joka poistaa tiedostoja, ottaa dataa panttivangiksi tai lukitsee ruudun. Silti ohjelma, jota useimmat lähteet kutsuvat "ensimmäiseksi virukseksi", ei tehnyt mitään näistä. Se vain kirjoitti ruudulle pienen haasteen ja siirtyi seuraavalle tietokoneelle.

Sen nimi oli Creeper, eli "ryömijä".

## 1971, BBN ja ARPANET

Creeperin kirjoitti vuonna 1971 Bob Thomas kokeellisena ohjelmana BBN:llä (Bolt Beranek and Newman) Massachusettsissa. BBN oli yhtiö, jolla oli keskeinen rooli internetin edeltäjänä pidetyn ARPANETin rakentamisessa.

Ohjelma kiersi ARPANETiin liitettyjen, TENEX-käyttöjärjestelmää ajavien DEC PDP-10 -keskuskoneiden välillä. Wikipedian mukaan TENEXiä ajavia järjestelmiä ARPANETissa oli tuolloin 28, eli Creeper pystyi tavoittamaan enintään näin monta tietokonetta.

Bob Thomasin tavoitteena ei ollut pahuus vaan kysymykseen vastaaminen: voiko ohjelma siirtyä verkossa itsestään koneelta toiselle?

## Yksi lause ruudulla

Kun Creeper saapui koneelle, se tulosti teletype-päätteelle (kirjoittimella varustettu pääte) viestin:

"I'M THE CREEPER : CATCH ME IF YOU CAN"

Suomeksi: "Minä olen Ryömijä: Ota kiinni, jos pystyt." Siinä kaikki. Se ei poistanut yhtään tiedostoa eikä turmellut dataa. Wikipedia kertoo, että operaattorit tekivät kokeessa yhteistyötä, eikä ei-toivotuista vaikutuksista raportoitu.

Ensimmäinen versio ei edes kopioinut itseään: se siirtyi koneelta toiselle jättämättä jälkeensä kopiota. Myöhemmin sähköpostin keksijänä tunnettu Ray Tomlinson muutti ohjelmaa niin, että se kopioi itsensä muille koneille. Tämä itseään monistava versio katsotaan yleisesti ensimmäiseksi tietokonemadoksi (worm).

## Virus vai mato?

Tässä tarvitaan pieni mutta tärkeä korjaus. Teknisesti Creeper ei ollut virus vaan mato. Virus leviää liittymällä toiseen ohjelmaan tai tiedostoon; mato liikkuu verkossa itsenäisesti. Creeper kuuluu jälkimmäiseen ryhmään. Silti monet julkaisut mainitsevat sen "maailman ensimmäisenä tietokoneviruksena"; Wikipedian lainaama Guardianin sitaatti käyttää juuri tätä ilmaisua. Käsitteen suosittu muoto on tämä, mutta teknisesti oikea nimike on "ensimmäinen mato".

Termi "tietokonevirus" itse syntyi 12 vuotta Creeperin jälkeen. ESETin WeLiveSecurity-jutun mukaan Etelä-Kalifornian yliopiston opiskelija Fred Cohen kirjoitti 3. marraskuuta 1983 itseään levittävän ohjelman, ja hänen opettajansa Len Adleman ehdotti termiä vertaamalla tätä "tartunnan" kaltaista leviämistä biologian viruksiin. Cohen oli valmistellut ohjelman Unixia ajavalla VAX 11/750:llä noin kahdeksan tunnin työllä.

> **Tiesitkö?** Ray Tomlinson, joka keksi sähköpostin ja toi @-merkin osoitteisiin, oli myös ensimmäiseksi virustorjuntaohjelmaksi katsotun ohjelman luoja. Internetin rakastetuimman työkalun ja sen ensimmäisen "siivoojan" kirjoitti siis sama henkilö.

## Reaper: ensimmäinen virustorjunta

Kun verkossa oli itseään kopioiva ohjelma, tarvittiin myös jotain sen pysäyttämiseen. Ray Tomlinson kirjoitti vuonna 1972 ohjelman nimeltä Reaper ("Niittäjä"). Reaper kiersi myös ARPANETissa ja poisti Creeperin, minne tahansa sen löysi. Wikipedia kuvaa sen ensimmäiseksi virustorjuntaohjelmistoksi.

Tarinassa on kaunis ironia: maailman ensimmäinen virustorjuntaohjelma oli itsekin verkossa itsenäisesti kiertävä ohjelma. Yhden "madon" pyydystämiseksi oli kirjoitettu toinen "mato".

| Silloin | Nyt |
|---|---|
| 1971: enintään 28 TENEX-konetta | Miljardeja verkkoon yhdistettyjä laitteita |
| Yksi vitsilause ruudulla | Kiristyshaittaohjelmat, tietovarkaudet |
| Reaper: siivooja yhdellä kohteella | Jatkuvasti päivittyvät tietoturvaohjelmistot |

## Viattoman kokeen pitkä varjo

Creeper oli vaaraton, mutta se avasi oven: jos ohjelma voi levitä verkossa itsestään, joku voisi käyttää tätä voimaa myös pahaan. Seuraavina vuosikymmeninä juuri niin kävi, ja sanat "virus", "mato" ja "virustorjunta" tulivat arkikieleemme.

Jos tietoturvatutkija päästäisi nykyään vastaavan kokeen internetiin ilman lupaa, hän joutuisi todennäköisesti vakavaan pulaan. Vuoden 1971 ARPANET oli sen sijaan pieni yhteisö toisensa tuntevista tutkijoista, ja koe toteutettiin Wikipedian kertomana operaattorien yhteistyöllä.

Silti lähtökohta ei ollut hyökkäys vaan uteliaisuus. Insinööri kysyi "olisikohan tämä mahdollista?" ja vastasi siihen ruudulla yhdellä lauseella.

Jos Creeper kirjoitettaisiin nykyään, katsottaisiinko se mielestäsi vaarattomaksi kokeeksi vai tietoturvaloukkaukseksi?
