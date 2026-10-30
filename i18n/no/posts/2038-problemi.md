---
title: "2038-problemet: hvorfor vil noen datamaskiner hoppe tilbake til 1901?"
excerpt: "32-bits Unix-tid går ut 19. januar 2038 kl. 03:14:07 UTC, og eldre systemer kan tro at datoen er 13. desember 1901. Hva er 2038-problemet, og hvordan løses det?"
hook: "Datamaskiner hopper tilbake til 1901!"
fact: "03:14:07"
factLabel: "19. januar 2038, UTC: 32-bits-grensen"
category: "Datamaskiner"
---
På vei inn i år 2000 snakket hele verden om en datafeil kalt «Y2K». Nå står en ny dato for tur: 19. januar 2038. Når klokka passerer 03:14:07 (UTC) den dagen, kan noen eldre datamaskiner plutselig sette kalenderen tilbake til 1901. Dette er ikke et science fiction-scenario, det er et enkelt regnestykke.

## Hvordan teller datamaskiner tid?

Unix og mange systemer som stammer fra det, lagrer ikke tid som en klokke eller en kalender, men som ett enkelt tall. Tallet er antall sekunder som har gått siden midnatt (UTC) 1. januar 1970. Det kalles «Unix-tid».

Problemet er at dette tallet på mange eldre systemer lagres som et fortegnsbehandlet 32-bits heltall. Den største verdien et fortegnsbehandlet 32-bits tall kan ha, er 2 147 483 647, altså 2 opphøyd i 31 minus 1. Så mange sekunder tilsvarer omtrent 68 år. «Fortegnsbehandlet» betyr at én bit er satt av for å vise om tallet er positivt eller negativt. Derfor brukes ikke alle 32 bitene til størrelsen, bare 31.

Legger du 68 år til 1970, kommer du til 2038. Regnestykket treffer nøyaktig 19. januar 2038 kl. 03:14:07 UTC.

## Hva skjer ett sekund senere?

Ett sekund etter at telleren har nådd den største verdien, flyter den over. Tenk på de gamle mekaniske kilometertellerne i biler: etter 999 999 går de tilbake til 000 000. Noe lignende skjer her, men fordi tallet har fortegn, vipper verdien over til et veldig stort negativt tall.

Et berørt system tolker dette negative tallet som sekunder talt bakover fra 1970. Resultatet: datoen vises som 13. desember 1901 kl. 20:45:52 (UTC). Med en datamaskin som plutselig har gått 136 år tilbake i tid, kan sertifikater, tidsstyringer, logger og datosammenligninger begynne å fungere feil.

> **Visste du at?** Dette problemet har allerede dukket opp i noen programmer, uten å vente på 2038. Ifølge Wikipedia krasjet programvaren AOLserver i 2006 fordi den satte en tidsavbruddsverdi én milliard sekunder frem i tid og dermed passerte 2038-grensen. Altså kan ethvert program som regner ut en «fremtidig dato» treffe grensen allerede nå. En lignende 32-bits grense skapte også problemer i Microsoft Exchange i 2022: versjonsnummeret til en oppdatering ble lest som et tidsstempel og passerte grensen, og funksjonene for skanning etter skadelig programvare sluttet å virke.

## Hvem er i risikosonen?

De aller fleste moderne telefoner og datamaskiner du bruker til daglig, bruker nå 64-bits tidsverdier. Den egentlige risikoen ligger i systemer som har kjørt i mange år uten oppdateringer. Wikipedia trekker spesielt frem eldre (legacy) systemer og innebygde systemer: industrielle kontrollenheter, noen nettverksenheter, systemer i kjøretøy og andre maskiner som settes opp én gang og glemmes.

Fordi slike enheter ikke oppdateres ofte, kan det fortsatt sitte en del som teller tid i 32 bit i dem når 2038 kommer.

| 32-bits tid med fortegn | 64-bits tid med fortegn |
|---|---|
| Største verdi 2 147 483 647 | Et langt større område |
| Grense: 19. januar 2038 | Grense: om omtrent 292 milliarder år |
| Eldre og innebygde systemer | Moderne operativsystemer |

## Løsningen: en større teller

Utfordringen her er mer praktisk enn teknisk. Å endre størrelsen på tallet som holder tiden, kan påvirke hvert program, hvert filformat og hvert databasefelt som bruker det. Å rette én enkelt linje er lett, men å finne og oppdatere all programvare inne i en enhet kan ta år.

Løsningen er enkel i prinsippet: lagre tiden som et 64-bits tall med fortegn. Ifølge Wikipedia skyver dette overflyten til omtrent 292 milliarder år frem i tid. Altså langt forbi universets nåværende alder.

Overgangen har pågått i årevis. Ifølge en sak fra Phoronix i januar 2020 ble Linux 5.6 forberedt som den første hovedversjonen av kjernen som kunne legge grunnlaget for at 32-bits systemer skal kunne fungere etter 2038. Wikipedia opplyser at Linux 5.6, som kom i 2020, la til støtte for 64-bits tid på 32-bits arkitekturer. For at dette skal virke, må også programmene kompileres på nytt med 64-bits tid.

Et annet forslag er å gjøre tallet uten fortegn (unsigned). Men det flytter bare grensen til 2106 og ødelegger muligheten til å bruke datoer før 1970. Derfor regnes overgangen til 64 bit som den egentlige veien.

Y2K ble ikke noen stor katastrofe fordi folk jobbet på forhånd. Tror du den samme stille heltemodigheten gjentar seg i årene som er igjen frem til 2038?
