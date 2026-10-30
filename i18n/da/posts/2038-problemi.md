---
title: "2038-problemet: hvorfor vil nogle computere hoppe tilbage til 1901?"
excerpt: "32-bit Unix-tid løber tør den 19. januar 2038 kl. 03:14:07 UTC, og gamle systemer kan tro, at datoen er den 13. december 1901. Hvad er 2038-problemet, og hvordan løses det?"
hook: "Computere vender tilbage til 1901!"
fact: "03:14:07"
factLabel: "19. januar 2038, UTC: 32-bit-grænsen"
category: "Computer"
---
Da vi nærmede os år 2000, talte hele verden om en computerfejl kaldet "Y2K". Nu er der en anden dato i kikkerten: 19. januar 2038. Når klokken passerer 03:14:07 (UTC) med ét sekund den dag, kan nogle gamle computere pludselig skifte kalenderen til 1901. Det er ikke et science fiction-scenarie, men et simpelt regnestykke.

## Hvordan tæller computere tid?

Unix og mange systemer, der stammer fra det, gemmer ikke tiden som et ur eller en kalender, men som ét enkelt tal. Tallet er antallet af sekunder, der er gået siden midnat mellem den 31. december 1969 og den 1. januar 1970 (UTC). Det kaldes "Unix-tid".

Problemet er, at tallet i mange gamle systemer gemmes som et fortegnsbehæftet 32-bit heltal. Den største værdi, et fortegnsbehæftet 32-bit tal kan have, er 2.147.483.647, altså 2 i 31. potens minus 1. Så mange sekunder svarer til cirka 68 år. At tallet er "fortegnsbehæftet" betyder, at én bit er sat af til at vise, om tallet er positivt eller negativt. Derfor bruges ikke alle 32 bit til størrelsen, men kun 31.

Lægger man 68 år til 1970, når man frem til 2038. Regnestykket peger præcis på 19. januar 2038, kl. 03:14:07 UTC.

## Hvad sker der ét sekund senere?

Når tælleren har nået sin største værdi, løber den over ét sekund efter. Tænk på de gamle mekaniske kilometertællere i biler: efter 999.999 springer de tilbage til 000.000. Noget lignende sker her, men fordi tallet er fortegnsbehæftet, skifter værdien til et meget stort negativt tal.

Et berørt system tolker det negative tal som sekunder talt baglæns fra 1970. Resultatet: datoen vises som 13. december 1901, kl. 20:45:52 (UTC). En computer, der pludselig er rejst 136 år tilbage i tiden, kan begynde at fejle med certifikater, timere, logfiler og datosammenligninger.

> **Vidste du det?** Problemet er allerede dukket op i nogle programmer, længe før 2038. Ifølge Wikipedia gik AOLserver ned i 2006, fordi softwaren satte en timeout-værdi en milliard sekunder frem og dermed overskred 2038-grænsen. Altså kan ethvert program, der regner på en "fremtidig dato", ramme grænsen allerede nu. En lignende 32-bit-grænse voldte også problemer i Microsoft Exchange i 2022: versionsnummeret på en opdatering blev læst som et tidsstempel og overskred grænsen, og så holdt funktionerne til malwarescanning op med at virke.

## Hvem er i fare?

Langt de fleste moderne telefoner og computere, du bruger til daglig, bruger i dag 64-bit tidsværdier. Den egentlige risiko ligger i systemer, der kører i mange år uden opdateringer. Wikipedia fremhæver især ældre (legacy) systemer og indlejrede systemer: industrielle styreenheder, visse netværksenheder, systemer i køretøjer, altså maskiner, der installeres én gang og så glemmes.

Fordi den slags enheder ikke opdateres ofte, kan der stadig sidde en del indeni, som tæller tid i 32 bit, når 2038 kommer.

| 32-bit fortegnsbehæftet tid | 64-bit fortegnsbehæftet tid |
|---|---|
| Største værdi 2.147.483.647 | Et langt større interval |
| Grænse: 19. januar 2038 | Grænse: cirka 292 milliarder år ude i fremtiden |
| Gamle og indlejrede systemer | Moderne operativsystemer |

## Løsningen: en større tæller

Udfordringen her er mere praktisk end teknisk. Hvis man ændrer størrelsen på det tal, der holder tiden, kan det påvirke hvert eneste program, hvert filformat og hvert databasefelt, der bruger tallet. Det er let at rette en enkelt linje, men at finde og opdatere al software i en enhed kan tage år.


Løsningen er i princippet enkel: gem tiden som et fortegnsbehæftet 64-bit tal. Ifølge Wikipedia skubber det overløbet cirka 292 milliarder år ud i fremtiden. Altså langt ud over universets nuværende alder.

Overgangen har stået på i årevis. Ifølge Phoronix' nyhed fra januar 2020 var Linux 5.6 på vej til at blive den første hovedkerneversion, der kunne danne grundlaget for, at 32-bit-systemer kan køre efter 2038. Wikipedia oplyser, at Linux 5.6, der udkom i 2020, tilføjede understøttelse af 64-bit tid på 32-bit-arkitekturer. For at det virker, skal programmerne også kompileres om med 64-bit tid.

Et andet forslag er at gøre tallet uden fortegn (unsigned). Men det flytter kun grænsen til 2106 og ødelægger brugen af datoer før 1970. Derfor betragtes skiftet til 64 bit som den egentlige vej.

Y2K endte ikke som en stor katastrofe, fordi folk arbejdede på det i forvejen. Tror du, den samme stille heltemodighed vil gentage sig i årene frem mod 2038?
