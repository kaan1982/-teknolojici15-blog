---
title: "Skillide turvalisus: kõik, mida pead lugema enne paigaldamist"
excerpt: "Skillid saavad koodi käivitada ja tõmmata juhiseid välistest allikatest. Juhend usaldusväärsete allikate, SKILL.md ja skriptide ülevaatuse, vähimate õiguste ning salavõtmete kohta."
hook: "Skilli paigaldamine on tarkvara paigaldamine"
fact: "13,4%"
factLabel: "Kriitilise veaga skillide osakaal (Snyk, 2026)"
category: "Tehisintellekt"
---

See, mis teeb skillid nii võimsaks, teeb need ka riskantseks: skill ei kanna ainult teksti, vaid ka käivitatavat koodi. Kui agent skilli laadib, järgib ta selles olevaid juhiseid nagu enda omi ja saab käivitada selle skripte. Seetõttu saab Claude'i dokumentatsiooni soovituse kokku võtta ühe lausega: mõtle skilli paigaldamisele nagu tarkvara paigaldamisele.

## Mida ametlikud allikad ütlevad?

Claude'i dokumentatsiooni turvaosa on üsna otsekohene. See soovitab kasutada skille ainult usaldusväärsetest allikatest, ehk neid, mille oled ise kirjutanud või saanud Anthropicult. Kui pead kasutama tundmatust allikast pärit skilli, palub see olla "äärmiselt ettevaatlik" ja auditeerida seda enne kasutamist algusest lõpuni.

Anthropicu inseneriartikkel on samal joonel: vähem usaldusväärsetest allikatest pärit skillide puhul soovitab see uurida pakendatud faile, eriti koodisõltuvusi ja skripte, ning kontrollida juhiseid, mis käsivad välisvõrkudega ühenduda. Dokumentatsioon toonitab eraldi ühte riski: välisaadressidelt andmeid tõmbavad skillid on ohtlikud, sest tõmmatud sisu võib sisaldada pahatahtlikke juhiseid.

## Mis väljas toimub?

Need hoiatused ei ole teoreetilised. Turvafirma Snyk skaneeris 5. veebruaril 2026 avaldatud uuringus "ToxicSkills" 3984 skilli allikatest ClawHub ja skills.sh. Tulemused:

| Leid | Arv |
|---|---|
| Skaneeritud skille | 3984 |
| Vähemalt üks turvaprobleem | 1467 (36,82 protsenti) |
| Vähemalt üks kriitiline probleem | 534 (13,4 protsenti) |
| Kinnitatud pahatahtlik koormus | 76 |

Aruande järgi katavad skills.sh andmed ainult selle saidi valitud esimest 100 skilli, täielikud turuarvud on aga ClawHubi kohta. Nähtud ründetüüpide hulgas on paigaldusjuhised, mis suunavad kasutajat usaldamatut tarkvara alla laadima ja käivitama, varjatud (Base64 või Unicode'iga maskeeritud) käsud, mis saadavad mandaadid ründajale, ning katsed turvakontrolle välja lülitada ja tagauksi paigaldada. Kinnitatud pahatahtlikest skillidest 91 protsendis on kasutatud promptisüstimist (prompt injection).

> **Kas teadsid?** Claude'i abikeskuse järgi saavad Enterprise-organisatsioonid sisse lülitada skillide skaneerimise, mis kontrollib üleslaaditud skille ja pluginaid pahatahtliku sisu suhtes. Kuid see on turvavõrk, mitte lugemise asendaja. Mida skill teeb, mõistad kõige paremini, kui avad enne paigaldamist SKILL.md ja skriptid ning loed need ise läbi.

## Kontrollnimekiri enne paigaldamist

Praktiline nimekiri, mille oleme koostanud dokumentatsiooni soovitustest ja välja leidudest:

1. **Kontrolli allikat.** Kelle hoidla see on? Kas ametlik ettevõte või tuntud arendaja, või hoopis tuntud paketi nime väga meenutav koopia (typosquatting)?
2. **Loe SKILL.md algusest lõpuni.** Väljendid nagu "laadi esmalt see alla ja käivita", "lülita turvaseade välja" või "saada sellele aadressile" on häirekellad.
3. **Uuri kausta scripts/.** Kui seal on ridu, mida sa lugeda ei suuda, mis on peidetud või Base64-ga kodeeritud, ära paigalda.
4. **Kontrolli välislinke.** Kui skill tõmbab juhiseid või andmeid veebiaadressilt, ära unusta, et see sisu võib igal hetkel muutuda.
5. **Paigalda see, mida vajad.** "Kõik paigalda" asemel ühe skilli kaupa valimine vähendab nii konteksti kui ka ründepinda.

## Vähimad õigused ja salavõtmed

Oluline on ka see, kus skill töötab. Claude'i dokumentatsiooni järgi ei ole skillidel Claude API keskkonnas võrguühendust ja nad ei saa käitusajal pakette paigaldada. claude.ai-s võib võrguühendus olla kasutaja ja administraatori seadete järgi täielik, osaline või väljas. Claude Code'is on skillidel aga sama palju võrguühendust kui mis tahes programmil sinu arvutis. Ehk kohalikus agendis paigaldatud skill töötab sinu õigustega.

Seetõttu on vähimate õiguste põhimõte kriitiline. Claude Code'is võimaldab skilli frontmatteri väli allowed-tools kasutada teatud tööriistu ilma luba küsimata, kui see skill välja kutsutakse. Dokumentatsiooni järgi lähtestatakse see luba sinu järgmise sõnumiga. Siiski, kui näed kellegi teise kirjutatud skillis laiu õigusi, on hea harjumus mitte paigaldada seda, enne kui oled need teadlikult heaks kiitnud.

Salavõtmete reegel on lihtne: ära kunagi kirjuta API võtmeid, paroole ja juurdepääsutokeneid faili SKILL.md ega skilli kausta. Kui skilli jagad või hoidlasse saadad, läheb kaasa kõik selles kaustas. Hoia võtmeid keskkonnamuutujates või kasutatava tööriista turvalises mandaatide hoidlas ja selgita skillile vaid seda, kuidas neile ligi pääseda.

Seisuga oktoober 2026 kasvab skillide ökosüsteem väga kiiresti ja see kasv tuletab meelde rakenduste poodide esimeste aastate turvaprobleeme. Hea uudis on see: skilli lugemine on palju lihtsam kui rakenduse lähtekoodi lugemine, sest suurem osa sellest on lihttekst.

Kas sina avad skilli enne paigaldamist ja loed selle läbi või usaldad tähtede arvu ja allalaadimisnumbreid?
