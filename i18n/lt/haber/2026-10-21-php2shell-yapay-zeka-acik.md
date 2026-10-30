---
title: "Dirbtinis intelektas rado kritinę spragą PHP, ant kurios laikosi 70 procentų svetainių"
excerpt: "Dvi spragos, vadinamos PHP2Shell, leidžia vykdyti kodą serveryje be prisijungimo. Atradimui panaudoti tokie modeliai kaip GPT-5.6 Sol ir Gemini 4 Argon."
hook: "Milžinišką PHP spragą rado DI"
fact: "CVSS 9,2"
factLabel: "Aukščiausias PHP2Shell spragų įvertis"
category: "Dirbtinis intelektas"
---
PHP kūrėjai spalio 21 d. išleido skubų pataisą dviem kritinėms kalbos pagrindinio variklio saugumo spragoms. Spragos, pavadintos "PHP2Shell", gavo numerius CVE-2026-109618 ir CVE-2026-109619 ir buvo rastos padedant dirbtinio intelekto įrankiams.

## Kas nutiko?

Pasak Fortune, dirbtinio intelekto saugumo testavimo bendrovė Calif pirmąją grandinės dalį rugpjūčio 1 d. rado su GPT-5.6 Sol; Wiz pirmąją spragą nepriklausomai aptiko rugpjūčio 19 d. ir rugpjūčio 24 d. apie ją pranešė PHP saugumo komandai. Atradimui buvo panaudotas paties Wiz įrankis Wiz Atlas, OpenAI GPT-5.6 Sol ir Google Gemini 4 Argon modeliai.

Spragos leidžia užpuolikui be prisijungimo nuotoliniu būdu vykdyti kodą serveryje ir nutekinti atmintyje esančius duomenis. Pasak Wiz, paveikta beveik kiekviena per pastarąjį dešimtmetį išleista PHP versija, iki pat 5.4. Aukščiausias svarbos įvertis CVSS skalėje yra 9,2. PHP veikia maždaug už 70 procentų pasaulio svetainių; vien WordPress valdo apytiksliai 40 procentų svetainių. Pasak atnaujintos Fortune žinutės, spragos po pataisos išleidimo pradėtos plačiai išnaudoti.

## Kodėl tai svarbu?

Tai vienas konkrečiausių pavyzdžių, kad dirbtinis intelektas saugumo tyrimuose jau gali būti ne tik pagalbininkas, bet ir atradimą atliekanti pusė. Bet tie patys įrankiai yra ir užpuolikų rankose, o laikas tarp pataisos išleidimo ir išnaudojimo pradžios trumpėja. Kiekvienas PHP naudojančios svetainės savininkas turi nedelsdamas atnaujinti savo serverį. Platesniame paveiksle dešimtmečius veikiančiame senajame interneto kode paslėptos klaidos dabar gali išplaukti daug greičiau. Pirmosios tinkle savarankiškai klajojusios programos istoriją pasakojome [straipsnyje apie Creeper](/yazi/creeper-ilk-virus-zararsizdi/).
