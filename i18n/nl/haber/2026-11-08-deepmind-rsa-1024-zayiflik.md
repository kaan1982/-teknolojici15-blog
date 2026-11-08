---
title: "AI-agents van DeepMind vinden twee zwakke plekken in oude 1024-bits RSA-versleuteling"
excerpt: "Google DeepMind meldt dat AI-agents onder menselijk toezicht twee zwakke plekken hebben gevonden in oud 1024-bits RSA; sleutels van 2048 bit en groter zijn niet getroffen."
hook: "Twee cryptoanalysestappen in weken"
fact: "~1.600 keer"
factLabel: "Theoretische verbetering, in het 32-byte-scenario"
category: "Nieuws"
---
Google DeepMind maakte op 6 november bekend dat zijn AI-agents twee belangrijke zwakke plekken hebben gevonden in oude 1024-bits RSA-versleutelingssystemen. De agents werkten onder menselijk toezicht. Het onderzoek werd geleid door Dj Dvijotham en Abhradeep Thakurta van DeepMind; ook de cryptoanalyse-experts Nadia Heninger (UC San Diego en Inria) en Emmanuel Thomé (Inria) zaten in het team.

## Eerste zwakke plek: de opvulling in handtekeningen

Bij digitale handtekeningen wordt aan het bericht een vast gegevensblok toegevoegd, de zogeheten "padding" of opvulling. Volgens het onderzoek biedt die opvulling bijna geen extra bescherming als een aanvaller ongeveer de helft of meer van het ondertekende blok kan bepalen. De agents probeerden dit in een afgeschermde omgeving uit op een 1024-bits testsleutel die eerder al in een academische studie was gekraakt. Het resultaat werd gereproduceerd met 3,5 keer minder processortijd en met minder dan een duizendste van de rekenkracht die nodig is om de sleutel rechtstreeks te kraken.

In het moeilijke scenario, waarin de aanvaller alleen een vingerafdruk van 32 bytes bepaalt, vonden de agents een nieuw algoritme. Naar schatting levert dat een verbetering van ongeveer 1.600 keer op ten opzichte van de beste bekende methode; dat getal is geen gemeten snelheid, maar een theoretische berekening.

## Tweede zwakke plek: ontbinden in factoren in bulk

Omdat RSA-sleutels meestal even groot zijn, kan een grote voorberekening over veel sleutels worden verdeeld. Met het algoritme dat de agents vonden, daalt de gemiddelde kostprijs om elke extra 1024-bits sleutel in factoren te ontbinden met ongeveer 30 keer vergeleken met eerdere bulkmethoden.

DeepMind benadrukt dat de bevindingen de huidige versleuteling niet raken. Bankieren, berichtenapps en software-updates gebruiken bijna overal sleutels van 2048 bit of groter. Pushmeet Kohli, vicepresident voor wetenschap bij het bedrijf, zei dat AI-ondersteunde cryptoanalyse kan helpen toekomstige systemen te testen.

## Waarom is dit belangrijk?

Vooruitgang in de cryptoanalyse kost meestal jaren. Dat AI-agents dit terugbrengen tot weken, laat zien dat systemen die nog oude sleutels gebruiken hun overstap moeten versnellen. De korte geschiedenis van wachtwoorden vertellen we in ons artikel over het [eerste computerwachtwoord](/yazi/ilk-bilgisayar-sifresi-ctss/).
