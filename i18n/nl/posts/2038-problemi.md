---
title: "Het jaar-2038-probleem: waarom keren sommige computers terug naar 1901?"
excerpt: "De 32-bits Unix-tijd loopt op 19 januari 2038 om 03:14:07 UTC vol en oude systemen kunnen denken dat het 13 december 1901 is. Wat is het 2038-probleem en hoe wordt het opgelost?"
hook: "Computers gaan terug naar 1901!"
fact: "03:14:07"
factLabel: "19 januari 2038, UTC: de 32-bits grens"
category: "Computers"
---
Rond de eeuwwisseling had de hele wereld het over een computerfout die "Y2K" heette. Nu is er weer een datum om in de gaten te houden: 19 januari 2038. Op die dag, een seconde na 03:14:07 (UTC), kunnen sommige oude computers de kalender ineens terugzetten naar 1901. Dat is geen sciencefictionscenario, maar een simpel rekenprobleem.

## Hoe tellen computers de tijd?

Unix en veel systemen die ervan afstammen houden de tijd niet bij als klok of kalender, maar als één enkel getal. Dat getal is het aantal seconden dat is verstreken sinds middernacht op 1 januari 1970 (UTC). Dat heet "Unix-tijd".

Het probleem is dat dit getal in veel oude systemen wordt opgeslagen als een 32-bits geheel getal met teken. De grootste waarde die zo'n getal kan hebben is 2.147.483.647, oftewel 2 tot de macht 31 min 1. Dat aantal seconden komt overeen met ongeveer 68 jaar. "Met teken" betekent dat één bit is gereserveerd om aan te geven of het getal positief of negatief is. Daarom worden niet alle 32 bits gebruikt voor de grootte, maar slechts 31.

Als je 68 jaar bij 1970 optelt, kom je uit op 2038. De berekening wijst precies 19 januari 2038, 03:14:07 UTC aan.

## Wat gebeurt er een seconde later?

Een seconde nadat de teller de maximale waarde heeft bereikt, loopt hij over. Denk aan de oude mechanische kilometertellers in auto's: na 999.999 springen ze terug naar 000.000. Hier gebeurt iets vergelijkbaars, maar omdat het getal een teken heeft, springt de waarde naar een heel groot negatief getal.

Een getroffen systeem leest dat negatieve getal als seconden die vanaf 1970 terugtellen. Het resultaat: de datum verschijnt als 13 december 1901, 20:45:52 (UTC). Een computer die ineens 136 jaar terug is gegaan; certificaten, timers, logboeken en datumvergelijkingen kunnen dan fout gaan werken.

> **Wist je dat?** Dit probleem is bij sommige software zelfs al opgedoken zonder op 2038 te wachten. Volgens Wikipedia crashte in 2006 de software AOLserver doordat een time-outwaarde een miljard seconden vooruit was gezet en zo de grens van 2038 overschreed. Elk programma dat een "datum in de toekomst" berekent, kan de grens dus nu al raken. Een vergelijkbare 32-bits grens zorgde in 2022 ook voor problemen bij Microsoft Exchange: het versienummer van een update werd gelezen als tijdstempel en overschreed de grens, waarna de functies voor het scannen op malware stopten.

## Wie loopt er risico?

De grote meerderheid van de moderne telefoons en computers die je dagelijks gebruikt, werkt tegenwoordig met 64-bits tijdwaarden. Het echte risico zit in systemen die jarenlang zonder updates draaien. Wikipedia noemt vooral oude (legacy) systemen en embedded systemen: industriële besturingsapparaten, sommige netwerkapparaten en voertuigsystemen, machines die één keer worden geïnstalleerd en dan worden vergeten.

Omdat zulke apparaten niet vaak worden bijgewerkt, kan er in 2038 nog steeds een onderdeel in zitten dat 32-bits tijd telt.

| 32-bits tijd met teken | 64-bits tijd met teken |
|---|---|
| Grootste waarde 2.147.483.647 | Een veel groter bereik |
| Grens: 19 januari 2038 | Grens: over ongeveer 292 miljard jaar |
| Oude en embedded systemen | Moderne besturingssystemen |

## De oplossing: een grotere teller

De moeilijkheid is hier minder technisch dan praktisch. Als je de grootte van het getal voor de tijd verandert, kan dat elk programma, elk bestandsformaat en elk databaseveld raken dat dat getal gebruikt. Eén regel aanpassen is makkelijk; alle software in een apparaat vinden en bijwerken kan jaren duren.

De oplossing is als idee eenvoudig: de tijd bijhouden met een 64-bits getal met teken. Volgens Wikipedia schuift dat het moment van overloop op naar ongeveer 292 miljard jaar in de toekomst. Dus ver voorbij de huidige leeftijd van het heelal.

Deze overgang loopt al jaren. Volgens het bericht van Phoronix van januari 2020 werd Linux 5.6 voorbereid als de eerste grote kernelversie die de basis kon vormen om 32-bits systemen na 2038 te laten werken. Wikipedia meldt dat Linux 5.6, uitgebracht in 2020, ondersteuning voor 64-bits tijd toevoegde aan 32-bits architecturen. Om dit te laten werken, moeten ook de toepassingen opnieuw worden gecompileerd met 64-bits tijd.

Een andere voorgestelde oplossing is het getal zonder teken (unsigned) te maken. Maar dat schuift de grens slechts op naar 2106 en breekt het gebruik van data van vóór 1970. Daarom wordt de overstap naar 64 bits gezien als de echte weg.

Y2K liep niet uit op een grote ramp omdat mensen er van tevoren aan hebben gewerkt; denk jij dat dezelfde stille heldhaftigheid zich in de jaren tot 2038 zal herhalen?
