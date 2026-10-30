---
title: "Det første datamaskin-«viruset» Creeper slettet ingenting"
excerpt: "Creeper, som sirkulerte på ARPANET i 1971, rørte ingen data, men skrev bare en utfordring på skjermen. Reaper, det første antivirusprogrammet, ble skrevet for å fange det."
hook: "Det første viruset slettet ingenting!"
fact: "1971"
factLabel: "Creeper ble skrevet hos BBN"
category: "Datamaskiner"
---

Når vi sier «datavirus», tenker vi på noe som sletter filer, tar data som gissel eller låser skjermen. Likevel gjorde programmet som de fleste kilder omtaler som «det første viruset», ingen av delene. Alt det gjorde, var å skrive en liten utfordring på skjermen og hoppe videre til neste datamaskin.

Det het Creeper, altså «krypet».

## 1971, BBN og ARPANET

Creeper ble skrevet i 1971 av Bob Thomas som et eksperimentelt program hos BBN (Bolt Beranek and Newman) i Massachusetts. BBN var selskapet som spilte en nøkkelrolle i byggingen av ARPANET, som regnes som internettets stamfar.

Programmet vandret mellom DEC PDP-10-vertsmaskiner som var koblet til ARPANET og kjørte operativsystemet TENEX. Ifølge Wikipedia var antallet systemer som kjørte TENEX på ARPANET på den tiden 28, altså var det maksimale antallet datamaskiner Creeper kunne nå.

Bob Thomas' egentlige mål var ikke ondskap, men å svare på et spørsmål: kan et program flytte seg av seg selv fra én maskin til en annen i et nettverk?

## Den ene setningen på skjermen

Når Creeper nådde en maskin, skrev det denne meldingen på teletypen (terminalen med skriver):

"I'M THE CREEPER : CATCH ME IF YOU CAN"

På norsk: «Jeg er Krypet: Fang meg om du kan.» Det var alt. Det slettet ingen filer og ødela ingen data. Wikipedia opplyser at operatørene samarbeidet i dette eksperimentet og at det ikke ble rapportert noen uønskede effekter.

Den første versjonen kopierte seg faktisk ikke engang selv: den flyttet seg fra en maskin til en annen uten å la en kopi bli igjen. Senere endret Ray Tomlinson, som er kjent som e-postens oppfinner, programmet slik at det kopierte seg til andre maskiner. Denne selvformerende versjonen regnes som den første allment anerkjente dataormen (worm).

## Virus eller orm?

Her trengs en liten, men viktig rettelse. Teknisk sett var Creeper ikke et virus, men en orm. Et virus sprer seg ved å feste seg til et annet program eller en fil, mens en orm beveger seg på egen hånd over nettverket. Creeper hører til den andre gruppen. Likevel omtaler mange publikasjoner det som «verdens første datavirus»; et Guardian-sitat gjengitt av Wikipedia bruker nøyaktig dette uttrykket. Det er den populære versjonen av begrepet, men den teknisk riktige etiketten er «den første ormen».

Selve begrepet «datavirus» oppsto 12 år etter Creeper. Ifølge ESETs WeLiveSecurity skrev Fred Cohen, som var student ved University of Southern California, 3. november 1983 et program som spredte seg selv, og læreren hans Len Adleman foreslo begrepet ved å sammenligne denne «infeksjonslignende» spredningen med virus i biologien. Cohen hadde laget programmet på en VAX 11/750 som kjørte Unix, på omtrent åtte timers arbeid.

> **Visste du at?** Ray Tomlinson, som oppfant e-posten og tok @-tegnet inn i adressene, er også skaperen av programmet som regnes som det første antivirusprogrammet. Den samme personen skrev altså både internettets mest elskede verktøy og dets første «renholder».

## Reaper: det første antivirusprogrammet

Da et program begynte å kopiere seg selv i nettverket, oppsto det også behov for noe som kunne stoppe det. I 1972 skrev Ray Tomlinson et program kalt Reaper («Høsteren»). Reaper vandret også rundt på ARPANET og slettet Creeper der det fant det. Wikipedia beskriver det som det første antivirusprogrammet.

Det er en vakker ironi i denne historien: verdens første antivirusprogram var egentlig også et program som vandret rundt i nettverket av seg selv. Altså ble en annen «orm» skrevet for å fange «ormen».

| Da | Nå |
|---|---|
| 1971: maksimalt 28 TENEX-maskiner | Milliarder av tilkoblede enheter |
| Én eneste spøkefull setning på skjermen | Løsepengevirus, datatyveri |
| Reaper: en renholder med ett enkelt mål | Sikkerhetsprogramvare som oppdateres hele tiden |

## Den lange skyggen av et uskyldig eksperiment

Creeper var ufarlig, men det åpnet en dør: hvis et program kunne spre seg av seg selv over et nettverk, kunne noen også bruke denne kraften til onde formål. Nettopp det skjedde i de neste tiårene, og ordene «virus», «orm» og «antivirus» kom inn i hverdagsspråket vårt.

Hvis en sikkerhetsforsker i dag slapp ut et lignende eksperiment på internett uten tillatelse, ville vedkommende sannsynligvis havnet i alvorlige problemer. ARPANET i 1971 var derimot et lite fellesskap av forskere som kjente hverandre, og eksperimentet ble, som Wikipedia gjengir, gjennomført i samarbeid med operatørene.

Likevel var utgangspunktet ikke et angrep, men nysgjerrighet. En ingeniør spurte «mon det lar seg gjøre?» og svarte på skjermen med én eneste setning.

Hvis Creeper ble skrevet i dag, ville det regnes som et ufarlig eksperiment eller som et sikkerhetsbrudd?
