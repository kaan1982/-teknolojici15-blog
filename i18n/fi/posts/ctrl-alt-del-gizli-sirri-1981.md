---
title: "Ctrl+Alt+Delin salaisuus: miksi kolme näppäintä, miksi sitä ei paineta yhdellä kädellä?"
excerpt: "Ctrl+Alt+Del kirjoitettiin vuonna 1981 IBM PC:n insinöörien sisäiseen käyttöön. Se valittiin niin, ettei sitä voi painaa yhdellä kädellä; Bill Gates sanoi vuosia myöhemmin sen olleen virhe."
hook: "Ctrl+Alt+Delillä on salaisuus!"
fact: "3 NÄPPÄINTÄ"
factLabel: "Valittu, ettei sitä paineta vahingossa"
category: "Tietokoneet"
---
Kun tietokone jäätyy, sormesi hakeutuvat melkein refleksinä samoille kolmelle näppäimelle: Ctrl, Alt ja Delete. Yhdistelmä on niin tuttu, että siitä on tullut eräänlainen hätämerkki. Se ei kuitenkaan alun perin ollut tarkoitettu tavallisille käyttäjille.

## 1981, Boca Raton: insinöörien oikotie

Ctrl+Alt+Delin kirjoitti vuonna 1981 David Bradley, joka työskenteli IBM PC -projektin tiimissä Boca Ratonissa Floridassa. Bradley oli projektin johtavia insinöörejä ja tietokoneen ROM-BIOSin kehittäjä.

Historiaa on luettava varovaisesti: Wikipedia perustaa vuoden 1981 työtoverin maaliskuun 2018 sähköpostiin; tarkkaa päivää, jolloin yhdistelmä kirjoitettiin, ei tiedetä.

Tarkoitus oli hyvin käytännöllinen. Kehittäjien ja teknisten kirjoittajien piti sammuttaa ja käynnistää kone joka kerta, kun ohjelma jumittui. Bradleyn yhdistelmä käynnisti tietokoneen uudelleen ohjelmallisesti ilman virran katkaisua (tätä kutsutaan nimellä "soft reboot"). Wikipedian mukaan tämä oli sisäinen kehitysominaisuus, joka käynnisti koneen suoraan uudelleen varoittamatta tai vahvistusta pyytämättä.

## Ensin oli Ctrl+Alt+Esc

Ensimmäisessä kokeilussa Bradley käytti yhdistelmää Ctrl+Alt+Esc. Ongelma oli, että nämä kolme näppäintä olivat näppäimistön vasemmalla puolella lähellä toisiaan, ja oli liian helppo osua niihin vahingossa ja käynnistää kone uudelleen. Yksi huolimaton käden liike riitti tallentamattoman työn menettämiseen.

Wikipedian mukaan projektin pääohjelmoija Mel Hallerman ehdotti turvatoimeksi Escin tilalle Deleteä. Logiikka oli yksinkertainen: alkuperäisessä IBM PC:n näppäimistössä Ctrl, Alt ja Delete oli sijoitettu niin, ettei niitä voinut painaa yhtä aikaa yhdellä kädellä. Yhdistelmän pystyi siis tekemään vain tarkoituksella, kahdella kädellä.

> **Tiesitkö?** Se, että Ctrl+Alt+Deliä ei voi painaa yhdellä kädellä, ei ollut sivuvaikutus vaan itse suunnittelu. Yhdistelmän koko tarkoitus oli tehdä vahingossa tapahtuvasta uudelleenkäynnistyksestä lähes mahdotonta.

## "Minä keksin sen, Bill teki sen kuuluisaksi"

Se, joka toi Ctrl+Alt+Delin miljoonien ihmisten elämään, oli Windows. Erityisesti Windows NT:ssä yhdistelmää käytettiin ennen kirjautumisruutua painettavana "turvallisena huomiosarjana" (secure attention sequence). Wikipedian mukaan tarkoitus oli estää haittaohjelmaa näyttämästä väärennettyä kirjautumisruutua, koska ohjelmat eivät voineet siepata tätä näppäinsarjaa. Kun painoit Ctrl+Alt+Delin, voit olla varma, että sen jälkeen tullut kirjautumisikkuna oli oikeasti käyttöjärjestelmän. Wikipedian mukaan tämä vaatimus on nykyisissä Windows-versioissa oletuksena pois päältä; se otetaan käyttöön, jos tietokone on yhdistetty yritysverkkoon (Windows-toimialueeseen).

Bradley tiivisti asian humoristisesti IBM PC:n 20-vuotisjuhlassa The Tech Museumissa 8. elokuuta 2001: "I may have invented it, but I think Bill made it famous." Eli: "Olen ehkä keksinyt sen, mutta mielestäni Bill teki sen kuuluisaksi." Wikipedia kertoo Bradleyn lisänneen heti perään, että lause viittasi Windows NT:n kirjautumisruutuun.

## Bill Gatesin tunnustus: "Se oli virhe"

Vuosia myöhemmin Bill Gateskin puhui yhdistelmästä. Wikipedian mukaan hän sanoi 21. syyskuuta 2013 kysymys-vastaus-tilaisuudessa, että "it was a mistake" (se oli virhe), viitaten siihen, että Ctrl+Alt+Deliä käytettiin Windowsiin kirjautumiseen.

Scientific Americanin Harvardin keskustelusta lainaama koko lause on vielä kiinnostavampi: "Meillä olisi voinut olla yksi näppäin, mutta IBM:n näppäimistön suunnittelija ei halunnut antaa meille sitä yhtä näppäintä. Joten ohjelmoimme sen matalalla tasolla, ja se oli virhe."

Gatesin mukaan ihanteellinen ratkaisu olisi siis ollut yksi kirjautumiseen varattu painike. Kun IBM ei suhtautunut siihen suopeasti, Microsoft käytti olemassa olevaa kolmen näppäimen yhdistelmää.

| Silloin | Nyt |
|---|---|
| 1981: salainen uudelleenkäynnistys insinööreille | Kaikkien tuntema "hätä"-oikotie |
| Ensin Ctrl+Alt+Esc | Ctrl+Alt+Del |
| Valittu, ettei sitä voi painaa yhdellä kädellä | Windowsissa kirjautuminen ja tehtävävalikko |

## Miten sisäisestä työkalusta tuli kulttuuria?

Mukana on myös ironiaa: yhdistelmä, joka tehtiin tahallaan vaikeaksi, ettei sitä painettaisi vahingossa, päätyi näppäinsarjaksi, jota miljoonat ihmiset painavat tarkoituksella joka päivä. Suunnittelijoiden huoli "kukaan ei saa painaa tätä vahingossa" muuttui Windowsin aikana tavaksi, jossa "kaikki painavat tätä joka aamu".

Ctrl+Alt+Delin tarina näyttää, kuinka pieni insinööripäätös voi muuttua pysyväksi tavaksi. Muutama koodirivi, jonka tiimi kirjoitti helpottaakseen omaa työtään, on elänyt näppäimistöillä ympäri maailmaa yli neljäkymmentä vuotta.

Jos Gatesin toivoma yksi "kirjautumisnäppäin" olisi ollut olemassa, olisiko sekin mielestäsi nykyään yhtä ikoninen?
