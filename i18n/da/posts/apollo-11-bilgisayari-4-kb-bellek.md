---
title: "Apollo 11-computeren: hvad betyder \"4 KB hukommelse\" egentlig?"
excerpt: "Computeren, der landede Apollo 11 på Månen, havde cirka 4 KB RAM. Programmerne lå i en ROM på cirka 72 KB, vævet af tråd."
hook: "De landede på Månen med 4 KB RAM"
fact: "4 KB"
factLabel: "AGC'ens sletbare hukommelse (RAM)"
category: "Computer"
---
"Computerens hukommelse på vej til Månen var mindre end et fotografi." Den sætning har du helt sikkert hørt. I videoen sagde vi også "4 KB". Tallet er rigtigt, men alene er det ufuldstændigt. Apollo Guidance Computer (AGC) havde nemlig to forskellige hukommelser, og "4 KB" beskriver kun den lille af dem.

Lad os pakke det berømte tal ud sammen.

## Hvad dækker "4 KB" over?

AGC'ens arbejdshukommelse, altså den sletbare hukommelse, vi i dag ville kalde RAM, bestod af 2.048 "ord". Hvert ord var 16 bit langt: 15 bit data og 1 paritetsbit til fejlkontrol. Regner man et ord som 2 byte, bliver 2.048 ord til cirka 4 KB. "4 KB" er altså størrelsen på den kladdeblok, computeren brugte til at regne med under flyvningen.

Programmerne lå ikke i denne hukommelse. Her blev der gemt aktuel position, hastighed, tællere og mellemresultater, som blev flyttet mellem opgaver. Hukommelsen var bygget af små ringe kaldet magnetkerner (core) og bevarede sit indhold, selv når strømmen blev afbrudt.

Programmerne lå et helt andet sted: i en fast hukommelse på 36.864 ord, altså i ROM. Med samme regnestykke bliver det cirka 72 KB. Den mere korrekte sætning er altså: Apollo 11 landede på Månen med cirka 4 KB RAM og cirka 72 KB ROM.

## Programmerne var vævet

AGC'ens ROM var en "core rope"-hukommelse (kerne-reb) og blev bogstaveligt talt vævet i hånden. Hvis en tråd gik gennem en magnetkerne, var den bit 1, og hvis den gik uden om kernen, var den 0. Software blev altså omsat til hardware ved at blive vævet som stof.

Arbejdet blev udført af Raytheon-ansatte i Waltham i Massachusetts. Ifølge Ken Shirriffs detaljerede gennemgang var en stor del af de ansatte kvinder fra den lokale tekstilindustri, ansat for deres færdigheder med nål og tråd. Det tog cirka 8 uger og kostede 15.000 dollars at væve et enkelt modul. Hvert modul rummede 6 tusind ord, og seks moduler udgjorde tilsammen 36.864 ord.

Det havde en vigtig bivirkning: softwaren skulle fryses måneder før flyvningen. Der fandtes ikke noget, der hed en patch i sidste øjeblik, for at rette en fejl betød at væve forfra.

> **Vidste du det?** Apollo 11 havde ikke én, men to AGC'er: en i kommandomodulet og en i månemodulet. Hver vejede cirka 32 kg og kørte på et krystalur på 2,048 MHz.

## Alarmen få minutter før landingen

Under landingen den 20. juli 1969 gav månemodulets computer først alarmen 1202 og derefter 1201 på skærmen. Begge betød "executive overflow": computeren blev pålagt mere arbejde, end den kunne klare. Ifølge den detaljerede beskrivelse på Wikipedia skyldtes det falske signaler fra rendezvous-radaren, som var sat på standby, og som holdt processoren beskæftiget. Problemet skyldtes hverken en programmeringsfejl, en pilotfejl eller en hardwarefejl. I bund og grund udsprang det af en mangel i grænsefladedokumentet mellem to systemer.

Det virkelig interessante er, hvad softwaren gjorde i den situation. AGC'en brugte en prioritetsbaseret skeduler. Da overbelastningen kom, genstartede den hurtigt, droppede lavt prioriterede opgaver og fortsatte med kritiske opgaver som at styre landingen. Den berømte lille hukommelse slog altså til, fordi den blev forvaltet klogt.

Der var endnu en detalje, som gjorde det sværere. Kommandoen 1668, som Buzz Aldrin indtastede under landingen, lagde yderligere belastning på den i forvejen pressede processor og udløste endnu en 1202-alarm. Softwaren klarede også det på samme måde, og Eagle landede på Månens overflade.

Softwaren blev udviklet på MIT Instrumentation Laboratory. Kommandomodulets software (COLOSSUS) og månemodulets software (LUMINARY) blev drevet af forskellige hold. Det var holdet under ledelse af Margaret Hamilton, der stod for at føre detaljerne ud i livet.

## Dengang / nu

| Apollo Guidance Computer (1969) | Nutidens mobiltelefon |
|---|---|
| Cirka 4 KB sletbar hukommelse (RAM) | Gigabyte af RAM |
| Cirka 72 KB håndvævet ROM | Hundredvis af gigabyte lagerplads |
| Måneders vævearbejde for en softwareopdatering | Opdateringer, der installeres af sig selv om natten |
| Cirka 32 kg | Passer i en håndflade |

## Tallets egentlige lære

"4 KB" bliver ofte fortalt som "se, hvor primitivt det var". Men historiens kerne er det modsatte: den knappe hukommelse tvang ingeniørerne til at gøre rede for hver eneste bit. Derfor opstod software, der prioriterer opgaver og rejser sig selv under overbelastning.

Enhederne i vores lommer har i dag hukommelse i et omfang, der ikke kan sammenlignes, men de fleste apps er ikke skrevet med samme omhu. Selv en enkelt opdatering af en beskedapp kan være mange gange større end hele Apollos software.

Tror du, at begrænsninger skaber bedre ingeniører, eller gør overflod?
