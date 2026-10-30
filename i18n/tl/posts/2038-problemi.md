---
title: "Ang problema ng 2038: bakit babalik sa 1901 ang ilang computer?"
excerpt: "Mapupuno ang 32-bit na Unix time sa 03:14:07 UTC ng Enero 19, 2038, at maaaring isipin ng mga lumang sistema na Disyembre 13, 1901 ang petsa. Ano ang problema ng 2038 at paano ito nilulutas?"
hook: "Babalik sa 1901 ang mga computer!"
fact: "03:14:07"
factLabel: "Enero 19, 2038, UTC: ang 32-bit na hangganan"
category: "Computer"
---
Pagpasok ng taong 2000, pinag-usapan ng buong mundo ang isang computer bug na tinatawag na "Y2K". Ngayon, may isa pang petsang naghihintay: Enero 19, 2038. Sa araw na iyon, pagkalampas ng isang segundo sa 03:14:07 (UTC), maaaring biglang gawing 1901 ng ilang lumang computer ang kalendaryo. Hindi ito senaryo ng science fiction, kundi simpleng problema sa matematika.

## Paano nagbibilang ng oras ang mga computer?

Ang Unix at maraming sistemang hango rito ay hindi nag-iimbak ng oras bilang orasan o kalendaryo, kundi bilang iisang numero. Ang numerong ito ay ang mga segundong lumipas mula hatinggabi ng Enero 1, 1970 (UTC). Tinatawag itong "Unix time".

Ang problema, sa maraming lumang sistema, nakaimbak ang numerong ito bilang signed na 32-bit na integer. Ang pinakamalaking halagang kaya ng signed na 32-bit na numero ay 2,147,483,647, ibig sabihin 2 sa ika-31 na kapangyarihan minus 1. Katumbas ng humigit-kumulang 68 taon ang ganito karaming segundo. Ang "signed" ay nangangahulugang may isang bit na inilaan para ipakita kung positibo o negatibo ang numero. Kaya hindi lahat ng 32 bit ang ginagamit sa laki, kundi 31 lang.

Kapag idinagdag ang 68 taon sa 1970, aabot tayo sa 2038. Eksaktong Enero 19, 2038, 03:14:07 UTC ang lumalabas sa kuwenta.

## Ano ang mangyayari pagkalipas ng isang segundo?

Isang segundo matapos maabot ng counter ang pinakamataas na halaga, magkakaroon ito ng overflow. Isipin ang mga lumang mekanikal na odometer ng kotse: pagkatapos ng 999,999, bumabalik ang mga ito sa 000,000. Katulad na bagay ang mangyayari rito, pero dahil signed ang numero, napupunta ang halaga sa napakalaking negatibong numero.

Ipapakahulugan ng apektadong sistema ang negatibong numerong ito bilang mga segundong binibilang paurong mula 1970. Ang resulta: lalabas ang petsa bilang Disyembre 13, 1901, 20:45:52 (UTC). Isang computer na biglang umatras ng 136 na taon; maaaring magsimulang pumalpak ang mga certificate, timer, record at paghahambing ng petsa.

> **Alam mo ba?** Lumitaw na ang problemang ito sa ilang software nang hindi naghihintay ng 2038. Ayon sa Wikipedia, noong 2006 nag-crash ang software na AOLserver dahil itinakda nito ang isang timeout value na isang bilyong segundo sa hinaharap, kaya lumampas ito sa hangganan ng 2038. Ibig sabihin, ang anumang programang kumukuwenta ng "petsa sa hinaharap" ay maaari nang sumalpok sa hangganan ngayon pa lang. Isang katulad na 32-bit na hangganan ang nagdulot din ng problema sa Microsoft Exchange noong 2022: nabasa bilang timestamp ang version number ng isang update at lumampas ito sa hangganan, kaya tumigil ang mga function ng malware scanning.

## Sino ang nasa panganib?

Karamihan ng makabagong telepono at computer na ginagamit mo araw-araw ay gumagamit na ngayon ng 64-bit na halaga ng oras. Ang tunay na panganib ay nasa mga sistemang tumatakbo nang maraming taon nang hindi ina-update. Partikular na itinatampok ng Wikipedia ang mga legacy system at embedded system: mga industrial control device, ilang network device, in-vehicle system, at iba pang makinang minsang inilagay at nakalimutan.

Dahil bihirang i-update ang mga ganitong device, maaaring may natitirang bahaging nagbibilang ng oras sa 32 bit sa loob nito pagdating ng 2038.

| 32-bit na signed na oras | 64-bit na signed na oras |
|---|---|
| Pinakamalaking halaga: 2,147,483,647 | Mas malawak na saklaw |
| Hangganan: Enero 19, 2038 | Hangganan: humigit-kumulang 292 bilyong taon pa |
| Mga luma at embedded na sistema | Mga makabagong operating system |

## Ang solusyon: mas malaking counter

Mas praktikal kaysa teknikal ang hirap dito. Ang pagpapalit ng laki ng numerong nag-iimbak ng oras ay maaaring makaapekto sa bawat programa, bawat format ng file at bawat database field na gumagamit nito. Madaling ayusin ang isang linya; pero maaaring abutin ng mga taon ang paghahanap at pag-update sa lahat ng software sa loob ng isang device.

Simple ang ideya ng solusyon: itago ang oras sa signed na 64-bit na numero. Ayon sa Wikipedia, itinutulak nito ang overflow nang humigit-kumulang 292 bilyong taon sa hinaharap, malayong higit sa kasalukuyang edad ng uniberso.

Matagal nang umuusad ang paglipat na ito. Ayon sa balita ng Phoronix noong Enero 2020, inihahanda ang Linux 5.6 bilang unang pangunahing bersyon ng kernel na maaaring maging pundasyon para magpatuloy ang paggana ng mga 32-bit na sistema pagkatapos ng 2038. Sinasabi ng Wikipedia na ang Linux 5.6, na inilabas noong 2020, ay nagdagdag ng suporta sa 64-bit na oras sa mga 32-bit na arkitektura. Para gumana ito, kailangan ding i-recompile ang mga application gamit ang 64-bit na oras.

Isa pang iminumungkahing solusyon ay gawing unsigned ang numero. Pero hanggang 2106 lang ang naitutulak nitong hangganan, at sinisira nito ang paggamit ng mga petsa bago ang 1970. Kaya ang paglipat sa 64 bit ang itinuturing na pangunahing daan.

Hindi naging malaking sakuna ang Y2K dahil nagtrabaho ang mga tao nang maaga; sa palagay mo, mauulit kaya ang tahimik na kabayanihang iyon sa mga taong natitira bago ang 2038?
