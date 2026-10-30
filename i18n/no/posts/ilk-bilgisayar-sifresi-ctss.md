---
title: "Det første datapassordet ble stjålet allerede første året"
excerpt: "MITs CTSS-system brakte passordet til datamaskinen. Kort tid etter skrev en doktorgradsstudent ut alle passordene på skriveren. Historien om det første passordets første hack."
hook: "Det første passordet ble det første som ble hacket"
fact: "1962"
factLabel: "Det første kjente passordtyveriet"
category: "Det første"
---

Passordet du skriver inn titalls ganger om dagen har et fødested: én eneste gigantisk datamaskin ved MIT tidlig på 1960-tallet. Enda mer interessant er det at verdens første kjente datapassord ble stjålet i bulk kort tid etter at de var tatt i bruk. Og ikke av en hackergjeng, men av en doktorgradsstudent som ville ha mer datatid.

## Én datamaskin, titalls brukere

Tidlig på 1960-tallet var datamaskiner maskiner som fylte rom og gjorde én jobb om gangen. Du stanset programmet ditt på hullkort, la det i kø og fikk resultatet timer senere. Ved MIT ville Fernando Corbatós team endre dette: et system der mange kunne bruke samme maskin samtidig fra terminaler, altså «time-sharing».

Systemet fikk navnet CTSS (Compatible Time-Sharing System). Det ble første gang vist frem i november 1961 på MITs modifiserte IBM 709, og gikk i årene som fulgte på IBM 7094-maskiner. Som også Wikipedia gjengir, regnes CTSS som det første datasystemet som innførte pålogging med passord.

## Hvorfor trengtes passord?

Problemet var enkelt: på samme maskin hadde titalls personer filer og tildelt datatid. Man trengte en måte å skille hvem som var hvem. Corbató fortalte år senere til Wired at det å sette et passord som lås på hver bruker hadde virket som en «veldig enkel løsning».

Corbató var forsiktig med å kalle seg selv den «første». Han sa at IBMs Sabre-reservasjonssystem fra 1960 sannsynligvis også brukte passord, men siden det ikke finnes noen registreringer av det, er ingenting sikkert. Kildene sier også ulike ting om nøyaktig hvilket år passord ble lagt til i CTSS. Det vi vet, er at passordsystemet fungerte våren 1962, fordi det ble stjålet den våren.

## Allan Scherrs fredagskveldsplan

Allan Scherr var en forsker som tok doktorgrad ved MIT og kjørte komplekse simuleringer. Ifølge Wired hadde han bare fått tildelt fire timer i uken på CTSS (noen kilder sier fire timer om dagen). Det var ikke nok for ham.

Løsningen hans var smart, men også ganske ertete. Ved å utnytte systemets funksjon for å skrive ut filer frakoblet laget han et hullkort som ba om utskrift av passordfilen. Han la kortet i køen sent en fredagskveld, kom tidlig lørdag morgen og hentet utskriften. Nå hadde han passordene til alle i systemet.

For å dekke over sporene delte han passordene også med andre brukere. Ifølge Wired logget en av dem, J.C.R. Licklider, seg inn på kontoen til laboratoriesjef Robert Fano og la igjen spottende meldinger. Scherr ble aldri tatt, og omtrent et kvart århundre etter hendelsen tilsto han personlig overfor Fano. Fano forsikret ham da om at doktorgraden ikke ville bli tatt fra ham.

> **Visste du at?** Dette var ikke den eneste passordkrisen i CTSS. I 1966 byttet passordfilen og «dagens melding»-filen plass på grunn av en administrators feil, og alle som logget inn, fikk se alle passordene i klartekst på skjermen. Ifølge systemutvikleren Tom Van Vleck ble denne hendelsen utgangspunktet for ideen om å lagre passord med enveiskryptering. Hendelsen skjedde selvsagt klokka fem på en fredag ettermiddag, og Van Vleck måtte bruke timer på å bytte passord.

## Da og nå

| Da (1960-tallet) | Nå |
|---|---|
| Passord i klartekst i én enkelt fil | Passord som er enveis-hashet |
| Ett hullkort var nok til å få en utskrift | Tilgangslogger, tillatelseslag |
| Målet: dele datatid | Målet: beskytte identitet, penger og personopplysninger |
| Én maskin, én campus | Titalls kontoer per person |

Grunnen til at denne historien fortsatt er lærerik, er dette: passordet har blitt testet av menneskelig atferd siden den dagen det ble oppfunnet. Scherr gjorde ikke noe komplisert angrep for å bryte systemet, han brukte bare en funksjon systemet allerede tilbød på en uventet måte. En betydelig del av dagens lekkasjer oppstår også av lignende enkle feil.

Corbató fikk Turing-prisen i 1990 for arbeidet sitt med time-sharing. Låsen som teamet hans la til som en «enkel løsning» står i dag ved hver dør, fra e-posten din til banken din, og det svakeste leddet er fortsatt ofte personen som bruker den låsen.

Tror du vi er klare til å slutte helt med passord i dag og gå over til ren biometri eller passnøkler (passkeys)?
