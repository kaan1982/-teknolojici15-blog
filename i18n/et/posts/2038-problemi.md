---
title: "2038. aasta probleem: miks mõned arvutid pöörduvad tagasi 1901. aastasse?"
excerpt: "32-bitine Unixi aeg saab täis 19. jaanuaril 2038 kell 03:14:07 UTC ja vanad süsteemid võivad arvata, et on 13. detsember 1901. Mis on 2038. aasta probleem ja kuidas seda lahendatakse?"
hook: "Arvutid pöörduvad tagasi 1901. aastasse!"
fact: "03:14:07"
factLabel: "19. jaanuar 2038, UTC: 32-bitine piir"
category: "Arvuti"
---
Aastasse 2000 minnes arutas maailm arvutiviga nimega "Y2K". Nüüd on järjekorras teine kuupäev: 19. jaanuar 2038. Sel päeval, kui kell on ületanud 03:14:07 (UTC) ühe sekundi, võivad mõned vanad arvutid kalendri äkki 1901. aastasse tagasi keerata. See pole ulmestsenaarium, vaid lihtne matemaatiline probleem.

## Kuidas arvutid aega loevad?

Unix ja paljud sellest tuletatud süsteemid hoiavad aega mitte kella või kalendrina, vaid ühe arvuna. See arv on sekundid, mis on möödunud 1. jaanuari 1970 keskööst (UTC). Seda nimetatakse "Unixi ajaks".

Probleem on selles, et paljudes vanades süsteemides hoitakse seda arvu märgiga 32-bitise täisarvuna. Märgiga 32-bitise arvu suurim väärtus on 2 147 483 647, ehk 2 astmes 31 miinus 1. See arv sekundeid vastab umbes 68 aastale. "Märgiga" tähendab, et üks bitt on varutud näitamaks, kas arv on positiivne või negatiivne. Seetõttu ei kasutata suuruse jaoks mitte kõiki 32 bitti, vaid 31.

Kui liita 1970-le 68 aastat, jõuame 2038-ni. Arvutus näitab täpselt 19. jaanuari 2038, kell 03:14:07 UTC.

## Mis juhtub ühe sekundi pärast?

Loendur ületab oma suurima väärtuse sekundi pärast ja keerab ringi. Mõtle autode vanadele mehaanilistele odomeetritele: pärast 999 999 pöörduvad need tagasi 000 000-le. Siin juhtub midagi sarnast, kuid kuna arv on märgiga, läheb väärtus väga suureks negatiivseks arvuks.

Mõjutatud süsteem tõlgendab seda negatiivset arvu 1970. aastast tagasi loetud sekunditena. Tulemus: kuupäev näib olevat 13. detsember 1901, kell 20:45:52 (UTC). Arvuti, mis on äkki 136 aastat tagasi hüpanud; sertifikaadid, taimerid, logid ja kuupäevade võrdlused võivad hakata valesti töötama.

> **Kas teadsid?** See probleem on mõnes tarkvaras ilmnenud juba enne 2038. aastat. Wikipedia järgi jooksis AOLserveri tarkvara 2006. aastal kokku, sest ta seadis ühe ajalõpu väärtuse miljard sekundit tulevikku ja ületas 2038. aasta piiri. Ehk iga programm, mis arvutab "tulevast kuupäeva", võib sellesse piiri juba praegu põrkuda. Sarnane 32-bitine piir tekitas 2022. aastal probleeme ka Microsoft Exchange'is: uuenduse versiooninumbrit loeti ajatemplina ja piiri ületamisel lakkasid pahavara skaneerimise funktsioonid töötamast.

## Kes on ohus?

Valdav enamik igapäevaselt kasutatavatest kaasaegsetest telefonidest ja arvutitest kasutab nüüd 64-bitiseid ajaväärtusi. Tegelik risk on süsteemides, mis töötavad aastaid uuendamata. Wikipedia tõstab eriti esile vanad (legacy) süsteemid ja manussüsteemid: tööstuslikud juhtseadmed, mõned võrguseadmed, sõidukisisesed süsteemid ja muud masinad, mis paigaldatakse üks kord ja unustatakse.

Kuna selliseid seadmeid uuendatakse harva, võib neis 2038. aastal veel olla 32-bitist aega lugev osa.

| 32-bitine märgiga aeg | 64-bitine märgiga aeg |
|---|---|
| Suurim väärtus 2 147 483 647 | Palju suurem vahemik |
| Piir: 19. jaanuar 2038 | Piir: umbes 292 miljardi aasta pärast |
| Vanad ja manussüsteemid | Kaasaegsed operatsioonisüsteemid |

## Lahendus: suurem loendur

Siin on raskus pigem praktiline kui tehniline. Aega hoidva arvu suuruse muutmine võib mõjutada iga programmi, iga failivormingut ja iga andmebaasi välja, mis seda arvu kasutab. Ühe rea parandamine on lihtne; seadme sees oleva kogu tarkvara leidmine ja uuendamine võib aga võtta aastaid.

Lahendus on ideelt lihtne: hoida aega 64-bitise märgiga arvuna. Wikipedia järgi lükkab see ületäitumise hetke umbes 292 miljardi aasta kaugusele. Ehk kaugele universumi praegusest east.

See üleminek on käinud aastaid. Phoronixi 2020. aasta jaanuari uudise järgi valmistati Linux 5.6 ette kui esimest peamist tuumaversiooni, mis võiks panna aluse 32-bitiste süsteemide töötamisele pärast 2038. aastat. Wikipedia märgib, et 2020. aastal ilmunud Linux 5.6 lisas 32-bitistele arhitektuuridele 64-bitise aja toe. Selleks, et see töötaks, tuleb ka rakendused 64-bitise ajaga uuesti kompileerida.

Teine lahendusettepanek on teha arv märgita (unsigned). Kuid see nihutab piiri vaid aastasse 2106 ja rikub kuupäevade kasutamise enne 1970. aastat. Seetõttu peetakse tegelikuks teeks üleminekut 64 bitile.

Y2K ei muutunud suureks katastroofiks, sest inimesed töötasid ette; kas sinu arvates kordub sama vaikne kangelaslikkus ka 2038. aastani jäänud aastatel?
