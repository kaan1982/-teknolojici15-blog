---
title: "Apollo 11-datamaskinen: hva betyr egentlig «4 KB minne»?"
excerpt: "Datamaskinen som landet Apollo 11 på Månen hadde omtrent 4 KB RAM. Programmene lå i en ROM på omtrent 72 KB som var vevd med tråd."
hook: "De landet på Månen med 4 KB RAM"
fact: "4 KB"
factLabel: "AGC-ens slettbare minne (RAM)"
category: "Datamaskiner"
---
Du har helt sikkert hørt setningen «minnet til datamaskinen som dro til Månen var mindre enn et fotografi». I videoen sa vi også «4 KB». Tallet stemmer, men det er ufullstendig alene. Apollo Guidance Computer (AGC) hadde nemlig to separate minner, og «4 KB» beskriver bare det minste av dem.

La oss åpne opp dette berømte tallet sammen.

## Hva forteller «4 KB» egentlig?

Arbeidsminnet til AGC, altså det slettbare minnet vi i dag ville kalt RAM, besto av 2 048 «ord». Hvert ord var 16 bit langt: 15 bit data og 1 bit paritet for feilkontroll. Hvis vi regner et ord som 2 byte, blir 2 048 ord omtrent 4 KB. «4 KB» er altså størrelsen på kladdepapiret datamaskinen brukte til å regne under flyvingen.

Programmene lå ikke i dette minnet. Der ble øyeblikkelig posisjon, hastighet, tellere og mellomresultater som ble flyttet mellom oppgaver, holdt. Minnet var laget av bittesmå ringer som kalles magnetkjerner (core), og det beholdt innholdet selv om strømmen ble borte.

Programmene lå et helt annet sted: i det faste minnet på 36 864 ord, altså i ROM. Med samme regnestykke blir det omtrent 72 KB. Kort sagt er en mer presis setning denne: Apollo 11 landet på Månen med omtrent 4 KB RAM og omtrent 72 KB ROM.

## Programmene var vevd med tråd

ROM-en til AGC var «core rope»-minne (kjernetau), og den ble bokstavelig talt vevd for hånd. Hvis en tråd gikk gjennom en magnetkjerne, var den biten 1, og hvis den gikk utenom kjernen, var den 0. Programvaren ble altså omdannet til maskinvare ved å veves som et tekstil.

Dette arbeidet ble gjort av ansatte hos Raytheon i Waltham i Massachusetts. Ifølge Ken Shirriffs detaljerte undersøkelse var en betydelig del av de ansatte kvinner fra den lokale tekstilindustrien, ansatt på grunn av sine sy-ferdigheter. Å veve en enkelt modul tok omtrent 8 uker og kostet 15 000 dollar. Hver modul rommet 6 tusen ord, og seks moduler utgjorde til sammen 36 864 ord.

Bivirkningen var viktig: programvaren måtte fryses måneder før flyvingen. Det fantes ingenting som het siste-liten-patch, for å rette en feil betydde å veve på nytt.

> **Visste du at?** Det var ikke én, men to AGC-er på Apollo 11: én i kommandomodulen og én i månemodulen. Hver veide omtrent 32 kg og gikk på en krystallklokke på 2,048 MHz.

## Alarmen som gikk minutter før landingen

Under landingen 20. juli 1969 ga månemodulens datamaskin først alarm 1202 og deretter 1201 på skjermen. Begge betydde «executive overflow»: datamaskinen ble lastet med mer arbeid enn den kunne bære. Ifølge den detaljerte beskrivelsen på Wikipedia var årsaken at falske signaler fra rendezvous-radaren, som var satt på vent, holdt prosessoren opptatt. Problemet var verken en programmeringsfeil, en pilotfeil eller en maskinvarefeil. Det oppsto i bunn og grunn på grunn av en mangel i grensesnittdokumentet mellom to systemer.

Det virkelig interessante er hva programvaren gjorde i denne situasjonen. AGC gikk på en prioritetsbasert planlegger. Da overbelastningen kom, startet den seg raskt på nytt, slapp oppgaver med lav prioritet og fortsatte med de kritiske oppgavene, som å styre landingen. Det berømte lille minnet strakk altså til fordi det ble forvaltet smart.

Det var enda en detalj som gjorde det vanskeligere. Kommando 1668, som Buzz Aldrin skrev inn i datamaskinen under landingen, la ekstra belastning på den allerede pressede prosessoren og utløste enda en 1202-alarm. Programvaren kom seg gjennom også dette på samme måte, og Eagle landet på Månen.

Programvaren ble utviklet ved MIT Instrumentation Laboratory. Programvaren til kommandomodulen (COLOSSUS) og programvaren til månemodulen (LUMINARY) ble ledet av ulike team. Gjennomføringen av detaljene lå hos teamet som Margaret Hamilton ledet.

## Da og nå

| Apollo Guidance Computer (1969) | Dagens mobiltelefon |
|---|---|
| Omtrent 4 KB slettbart minne (RAM) | Gigabyte med RAM |
| Omtrent 72 KB ROM, vevd for hånd | Hundrevis av gigabyte lagring |
| Måneder med veving for en programvareoppdatering | Oppdateringer som lastes ned av seg selv om natten |
| Omtrent 32 kg | Får plass i håndflaten |

## Den egentlige lærdommen med tallet

«4 KB» fortelles ofte som «se hvor primitivt det var». Men kjernen i historien er det motsatte: det begrensede minnet tvang ingeniørene til å stå til ansvar for hver eneste bit. Programvare som prioriterer oppgaver og berger seg selv ved overbelastning ble til nettopp av den grunn.

Enhetene i lommen vår i dag har uforlignelig mye mer minne, men de fleste programmene skrives ikke med like stor omhu. Selv én oppdatering av en meldingsapp kan være mange ganger større enn all Apollos programvare.

Tror du begrensninger skaper bedre ingeniører, eller gjør overflod det?
