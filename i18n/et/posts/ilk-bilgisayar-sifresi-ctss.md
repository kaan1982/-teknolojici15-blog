---
title: "Esimene arvutiparool varastati juba esimesel aastal"
excerpt: "MIT CTSS-süsteem tõi parooli arvutisse. Varsti pärast seda trükkis doktorant printeriga välja kõik paroolid. Esimese parooli esimese häkkimise lugu."
hook: "Esimene parool oli esimene häkitud"
fact: "1962"
factLabel: "Esimene teadaolev paroolivargus"
category: "Esimesed"
---
Parool, mida kirjutad iga päev kümneid kordi, on sünnikoht: 1960. aastate alguse MITi üks hiigelarvuti. Veelgi huvitavam on, et maailma esimesed teadaolevad arvutiparoolid varastati kohe pärast kasutuselevõttu hulgi ära. Ja seda mitte häkkerite jõugu, vaid doktorandi poolt, kes soovis rohkem arvutiaega.

## Üks arvuti, kümned kasutajad

1960. aastate alguses olid arvutid tuba täitvad masinad, mis tegid korraga ühte tööd. Pidid oma programmi tõmbama perfokaartidele, panema järjekorda ja tulemuse sai tundide pärast. MITis tahtis Fernando Corbató meeskond seda muuta: süsteem, kus sama masinat saab terminali kaudu korraga kasutada mitu inimest, ehk "ajajagamine".

Selle süsteemi nimi sai CTSS (Compatible Time-Sharing System). Esimest korda demonstreeriti seda 1961. aasta novembris MITi muudetud IBM 709 arvutil, järgnevatel aastatel töötas see IBM 7094-del. Nagu Wikipedia edastab, loetakse CTSS-i esimeseks arvutisüsteemiks, mis rakendas parooliga sisselogimist.

## Miks parooli vaja oli?

Probleem oli lihtne: samas masinas olid kümnete inimeste failid ja neile eraldatud arvutiaeg. Oli vaja viisi, kuidas eristada, kes on kes. Corbató jutustas aastaid hiljem Wiredile, et lukuna igale kasutajale parooli panek tundus "väga lihtsa lahendusena".

Corbató oli ettevaatlik ka enda "esimeseks" kuulutamisega. Ta ütles, et ka IBM-i 1960. aasta Sabre broneerimissüsteem kasutas tõenäoliselt paroole, kuid selle kohta ei ole kirjeid säilinud ja midagi kindlat ei tea. Ka selle kohta, millal täpselt paroolid CTSS-i lisati, ütlevad allikad erinevat. Seda me teame: 1962. aasta kevadel paroolisüsteem töötas, sest sel kevadel see varastati.

## Allan Scherri reedeõhtune plaan

Allan Scherr oli MITis doktoriõpet tegev teadlane, kes käitas keerulisi simulatsioone. Wiredi edastuse järgi oli talle CTSS-is eraldatud vaid neli tundi nädalas (mõned allikad ütlevad, et neli tundi päevas). See aeg talle ei piisanud.

Tema lahendus oli nutikas, kuid sama ulukas. Kasutades süsteemi failide võrguühenduseta printimise funktsiooni, valmistas ta ette perfokaardi, mis nõudis paroolifaili väljatrükki. Ta pani kaardi ühel reede hilisõhtul järjekorda, tuli laupäeva varahommikul ja võttis väljatrüki. Tal olid nüüd käes kõigi süsteemi kasutajate paroolid.

Jälgede hägustamiseks jagas ta paroole ka teiste kasutajatega. Wiredi järgi sisenes üks neist, J.C.R. Licklider, labori juhataja Robert Fano kontole ja jättis sinna pilkavaid sõnumeid. Scherrit ei tabatud kunagi ja ta tunnistas asja Fanole isiklikult üles umbes veerand sajandit pärast juhtumit. Fano kinnitas talle, et tema doktoritiitlit ära ei võeta.

> **Kas teadsid?** See ei olnud CTSS-i ainus paroolikriis. 1966. aastal vahetati ühe haldaja vea tõttu paroolifail ja "päeva sõnumi" fail ära ning kõik sisselogijad nägid ekraanil kõiki paroole lahtiselt. Süsteemi arendaja Tom Van Vleci järgi sai see juhtum lähtepunktiks mõttele salvestada paroole ühepoolselt krüpteeritult. Muidugi juhtus see reede õhtul kell viis ja Van Vleck pidi tundide kaupa paroole vahetama.

## Siis ja nüüd

| Siis (1960ndad) | Praegu |
|---|---|
| Lihttekstina paroolid ühes failis | Ühepoolselt räsitud (hash) paroolid |
| Väljatrükiks piisas ühest perfokaardist | Juurdepääsulogid, volituskihid |
| Eesmärk: jagada arvutiaega | Eesmärk: kaitsta identiteeti, raha, isikuandmeid |
| Üks masin, üks ülikoolilinnak | Kümneid kontosid inimese kohta |

Selle loo õpetlikkus säilib tänaseni, sest parooli on leiutamise päevast peale proovile pannud inimkäitumine. Scherr ei teinud süsteemi murdmiseks keerulist rünnakut, vaid kasutas lihtsalt süsteemi enda pakutud funktsiooni ootamatul viisil. Ka tänaste lekete oluline osa tuleneb sarnastest lihtsatest vigadest.

Corbató sai ajajagamise valdkonna töö eest 1990. aastal Turingi auhinna. Luku, mille tema meeskond "lihtsa lahendusena" lisas, näeme täna igal uksel, alates e-postist kuni pangani, ja kõige nõrgem lüli on endiselt sageli see inimene, kes seda lukku kasutab.

Kas oleme sinu arvates valmis paroolide kasutamisest täielikult loobuma ja liikuma täielikult biomeetria või pääsuvõtme (passkey) peale?
