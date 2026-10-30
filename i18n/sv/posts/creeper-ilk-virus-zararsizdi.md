---
title: "Det första datorviruset Creeper raderade ingenting"
excerpt: "Creeper, som rörde sig på ARPANET 1971, rörde inga data utan skrev bara en utmaning på skärmen. För att fånga det skrevs det första antivirusprogrammet Reaper."
hook: "Det första viruset raderade ingenting!"
fact: "1971"
factLabel: "Creeper skrevs på BBN"
category: "Datorer"
---

När man säger "datorvirus" tänker man på något som raderar filer, tar data som gisslan och låser skärmen. Men programmet som de flesta källor kallar det "första viruset" gjorde inget av det. Det enda det gjorde var att skriva en liten utmaning på skärmen och gå vidare till nästa dator.

Dess namn var Creeper, alltså "krypet".

## 1971, BBN och ARPANET

Creeper skrevs 1971 av Bob Thomas som ett experimentellt program på företaget BBN (Bolt Beranek and Newman) i Massachusetts. BBN var företaget som hade en nyckelroll när ARPANET, som räknas som internets förfader, byggdes upp.

Programmet rörde sig mellan DEC PDP-10-värddatorer som var anslutna till ARPANET och körde operativsystemet TENEX. Enligt Wikipedia var antalet system som körde TENEX på ARPANET vid den tiden 28, så det var som mest så många datorer Creeper kunde nå.

Bob Thomas verkliga ärende var inte ondska utan att besvara en fråga: kan ett program på egen hand flytta sig från en maskin till en annan över nätverket?

## Den enda meningen på skärmen

När Creeper nådde en maskin skrev det ut det här meddelandet på teletypen (en terminal med skrivare):

"I'M THE CREEPER : CATCH ME IF YOU CAN"

På svenska: "Jag är Krypet: fånga mig om du kan." Det var allt. Det raderade inga filer och förstörde inga data. Wikipedia anger att operatörerna samarbetade i experimentet och att inga oönskade effekter rapporterades.

Den första versionen kopierade faktiskt inte ens sig själv: när den flyttade från en maskin till en annan lämnade den ingen kopia bakom sig. Senare ändrade Ray Tomlinson, som är känd som e-postens uppfinnare, programmet så att det kopierade sig självt till de andra maskinerna. Den här självreplikerande versionen räknas som den första allmänt erkända datormasken (worm).

## Virus eller mask?

Här behövs en liten men viktig rättelse. Tekniskt sett var Creeper inte ett virus utan en mask. Ett virus sprids genom att fästa sig vid ett annat program eller en annan fil; en mask rör sig på egen hand över nätverket. Creeper hör till den andra gruppen. Ändå kallar många publikationer det "världens första datorvirus"; ett Guardian-citat som Wikipedia återger använder just det uttrycket. Det är den populära versionen av begreppet, men den tekniskt riktiga etiketten är "första masken".

Själva termen "datorvirus" föddes 12 år efter Creeper. Enligt ESET:s WeLiveSecurity skrev Fred Cohen, som var student vid University of Southern California, den 3 november 1983 ett program som spred sig självt; hans lärare Len Adleman jämförde den "infektionsliknande" spridningen med virus inom biologin och föreslog termen. Cohen hade tagit fram programmet på en VAX 11/750 som körde Unix, på ungefär åtta timmars arbete.

> **Visste du det?** Ray Tomlinson, som uppfann e-posten och förde in @-tecknet i adresserna, är också skaparen av det program som räknas som det första antivirusprogrammet. Alltså skrev samma person både internets mest älskade verktyg och dess första "städare".

## Reaper: det första antivirusprogrammet

När det fanns ett program som kopierade sig själv i nätverket uppstod också behovet av något som kunde stoppa det. Ray Tomlinson skrev 1972 ett program som hette Reaper ("Skördemannen"). Reaper rörde sig också över ARPANET och raderade Creeper där det hittade det. Wikipedia beskriver det som det första antivirusprogrammet.

Det finns en fin ironi i den här historien: världens första antivirusprogram var i själva verket också ett program som rörde sig på egen hand i nätverket. För att fånga "masken" skrevs alltså en annan "mask".

| Då | Nu |
|---|---|
| 1971: högst 28 TENEX-maskiner | Miljarder uppkopplade enheter |
| En enda skämtmening på skärmen | Ransomware, datastöld |
| Reaper: en städare med ett enda mål | Säkerhetsprogramvara som uppdateras hela tiden |

## En oskyldig experiments långa skugga

Creeper var ofarligt, men det öppnade en dörr: om ett program kunde spridas på egen hand över nätverket kunde någon också använda den kraften för onda syften. Det var precis vad som hände under de följande årtiondena, och orden "virus", "mask" och "antivirus" kom in i vårt vardagsspråk.

Om en säkerhetsforskare i dag släppte lös ett liknande experiment på internet utan tillstånd skulle det med största sannolikhet leda till allvarliga problem. ARPANET 1971 var däremot en liten gemenskap av forskare som kände varandra, och experimentet genomfördes, som Wikipedia återger, i samarbete med operatörerna.

Ändå var utgångspunkten inte en attack utan nyfikenhet. En ingenjör frågade sig "går det månne att göra?" och svarade med en enda mening på skärmen.

Tror du att Creeper, om det skrevs i dag, skulle räknas som ett ofarligt experiment eller som ett säkerhetsintrång?
