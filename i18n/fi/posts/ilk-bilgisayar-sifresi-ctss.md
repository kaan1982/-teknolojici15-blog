---
title: "Ensimmäinen tietokonesalasana varastettiin jo ensimmäisenä vuotenaan"
excerpt: "MIT:n CTSS-järjestelmä toi salasanan tietokoneeseen. Pian sen jälkeen jatko-opiskelija tulosti kaikki salasanat tulostimelta. Ensimmäisen salasanan ensimmäisen hakkeroinnin tarina."
hook: "Ensimmäinen salasana oli ensimmäinen hakkeroitu"
fact: "1962"
factLabel: "Ensimmäinen tunnettu salasanavarkaus"
category: "Ensimmäiset"
---
Salasanalla, jonka kirjoitat kymmeniä kertoja päivässä, on syntymäpaikka: yksi valtava tietokone MIT:ssä 1960-luvun alussa. Vielä mielenkiintoisempaa on, että maailman tunnetut ensimmäiset tietokonesalasanat varastettiin joukolla pian käyttöönoton jälkeen. Eikä hakkeriliiga, vaan jatko-opiskelija, joka halusi lisää tietokoneaikaa.

## Yksi tietokone, kymmeniä käyttäjiä

1960-luvun alussa tietokoneet olivat huoneita täyttäviä koneita, jotka tekivät yhden työn kerrallaan. Ohjelma lyötiin rei'ityskorteille, laitettiin jonoon ja tulos saatiin tuntien kuluttua. MIT:ssä Fernando Corbatón tiimi halusi muuttaa tämän: järjestelmä, jossa useat ihmiset voisivat käyttää samaa konetta samanaikaisesti päätteiltä, eli "aikajako".

Järjestelmän nimeksi tuli CTSS (Compatible Time-Sharing System). Se esiteltiin ensimmäisen kerran marraskuussa 1961 MIT:n muokatulla IBM 709 -tietokoneella ja toimi myöhempinä vuosina IBM 7094 -koneilla. Kuten Wikipediakin kertoo, CTSS:ää pidetään ensimmäisenä tietokonejärjestelmänä, joka toteutti kirjautumisen salasanalla.

## Miksi salasana tarvittiin?

Ongelma oli yksinkertainen: samalla koneella oli kymmenien ihmisten tiedostoja ja heille varattua tietokoneaikaa. Tarvittiin keino erottaa, kuka on kuka. Corbató kertoi asiasta vuosia myöhemmin Wiredille: salasanan asettaminen lukoksi jokaiselle käyttäjälle oli vaikuttanut "hyvin yksinkertaiselta ratkaisulta".

Corbató oli varovainen myös julistaessaan itsensä "ensimmäiseksi". Hän sanoi, että IBM:n Sabre-varausjärjestelmä vuonna 1960 luultavasti käytti myös salasanoja, mutta siitä ei ole säilynyt kirjauksia, joten varmaa tietoa ei ole. Myös siitä, minä vuonna salasanat tarkalleen lisättiin CTSS:ään, lähteet kertovat eri asioita. Tiedämme tämän: keväällä 1962 salasanajärjestelmä toimi, sillä se varastettiin sinä keväänä.

## Allan Scherrin perjantai-illan suunnitelma

Allan Scherr oli MIT:ssä väitöskirjaa tekevä tutkija, joka ajoi monimutkaisia simulaatioita. Wiredin mukaan hänelle oli CTSS:ssä varattu vain neljä tuntia viikossa (jotkin lähteet sanovat neljä tuntia päivässä). Tämä aika ei riittänyt hänelle.

Hänen ratkaisunsa oli nokkela mutta yhtä kujeileva. Järjestelmän tiedostojen offline-tulostusominaisuutta hyödyntäen hän valmisteli rei'itetyn kortin, joka pyysi salasanatiedoston tulosteen. Hän asetti kortin jonoon perjantai-iltana myöhään ja tuli lauantaiaamuna varhain hakemaan tulosteen. Hänen käsissään oli nyt jokaisen järjestelmän käyttäjän salasana.

Jälkiensä peittämiseksi hän jakoi salasanoja myös muille käyttäjille. Wiredin mukaan yksi heistä, J.C.R. Licklider, kirjautui laboratorion johtajan Robert Fanon tilille ja jätti pilkallisia viestejä. Scherriä ei koskaan saatu kiinni, ja noin neljännesvuosisata tapahtuman jälkeen hän tunnusti asian Fanolle henkilökohtaisesti. Fano vakuutti hänelle, ettei tohtorin arvoa oteta häneltä pois.

> **Tiesitkö?** CTSS:n salasanakriisi ei ollut ainoa. Vuonna 1966 ylläpitäjän virheen vuoksi salasanatiedosto ja "päivän viesti" -tiedosto vaihtoivat paikkaa, ja jokainen kirjautuva näki kaikki salasanat ruudullaan avoimesti. Järjestelmäkehittäjä Tom Van Vleckin mukaan tämä tapaus oli lähtökohta ajatukselle tallentaa salasanat yksisuuntaisesti salattuina. Tapaus sattui tietysti perjantai-iltana kello viideltä, ja Van Vleckin piti vaihtaa salasanoja tuntikausia.

## Silloin ja nyt

| Silloin (1960-luku) | Nyt |
|---|---|
| Selväkieliset salasanat yhdessä tiedostossa | Yksisuuntaisesti tiivistetyt (hash) salasanat |
| Yksi rei'itetty kortti riitti tulosteen saamiseen | Käyttölokit, valtuutuskerrokset |
| Tarkoitus: jakaa tietokoneaikaa | Tarkoitus: suojata henkilöllisyys, raha, henkilötiedot |
| Yksi kone, yksi kampus | Kymmeniä tilejä per henkilö |

Tämä tarina on yhä opettavainen siksi, että salasanaa on koeteltu ihmisen käyttäytymisellä keksimispäivästä lähtien. Scherr ei tehnyt monimutkaista hyökkäystä järjestelmän murtamiseksi, vaan käytti odottamattomalla tavalla ominaisuutta, jonka järjestelmä jo tarjosi. Myös suuri osa nykypäivän vuodoista johtuu samanlaisista yksinkertaisista virheistä.

Corbató sai vuonna 1990 Turing-palkinnon aikajaon parissa tekemästään työstä. "Yksinkertaiseksi ratkaisuksi" hänen tiiminsä lisäämä lukko on nykyään jokaisella ovella sähköpostistasi pankkiin, ja heikoin lenkki on yhä useimmiten lukkoa käyttävä ihminen.

Oletko mielestäsi valmis jättämään salasanat kokonaan ja siirtymään täysin biometriikkaan tai pääsyavaimeen (passkey)?
