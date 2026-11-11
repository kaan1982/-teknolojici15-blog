---
title: "Microsoft dicht in november meer dan 1.000 lekken; Outlook-lek werd al bij aanvallen gebruikt"
excerpt: "De beveiligingsupdate van Microsoft voor november dicht 1.093 lekken, waaronder een Outlook-lek dat aanvallers nu al misbruiken."
hook: "Duizend lekken in één maand"
fact: "1.093"
factLabel: "Aantal lekken in de novemberupdate"
category: "Nieuws"
---
Microsoft bracht op 10 november het novemberpakket uit van de beveiligingsupdate die het bedrijf elke tweede dinsdag van de maand publiceert. Het pakket dicht 1.093 beveiligingslekken in 287 producten en onderdelen. In tellingen die ook de lekken in de Edge-browser meenemen, loopt het aantal op tot 1.235.

## Verdeling van de lekken

Van de lekken zijn er 63 "kritiek" en 1.029 "belangrijk". Bijna de helft (535) is van het type waarmee een aanvaller zijn rechten op het systeem kan verhogen, en 296 maken het mogelijk om op afstand code uit te voeren. De meeste lekken werden gevonden in Word, Excel en SQL Server.

Zulke enorme pakketten worden inmiddels normaal: de oktoberupdate was met 1.411 lekken zelfs nog groter. Volgens de analyse van Netizen komt een deel van de stijging doordat Microsoft AI-ondersteunde tools gebruikt om naar lekken te zoeken.

## Outlook-lek gebruikt bij aanvallen

Het meest urgente onderdeel van het pakket is het Outlook-lek met nummer CVE-2026-124194. Microsoft bevestigde dat dit lek al vóór de patch bij aanvallen werd misbruikt. De aanvaller laat het slachtoffer een speciaal geprepareerd bestand openen. Outlook maakt dan zonder waarschuwing voor externe inhoud verbinding met de server van de aanvaller en lekt de wachtwoordhash van de gebruiker (NTLMv2). Met die informatie kan de aanvaller zich voordoen als de gebruiker. Het voorbeeldvenster is geen aanvalsroute; het bestand moet worden geopend.

Het lek heeft een score van 6,5 en Microsoft classificeert het als "gemiddeld". Getroffen producten zijn Office LTSC 2021, Office LTSC 2024 en Microsoft 365 Apps. Wie de aanvallers en slachtoffers zijn, is niet bekendgemaakt. Volgens Tenable kreeg de onderzoeker die het lek vond hulp van het Claude-model van Anthropic.

## Waarom is dit belangrijk?

Iedereen die Windows en Office gebruikt, en vooral bedrijven, zou de update zo snel mogelijk moeten installeren. Tegelijk betekent het feit dat AI het vinden van lekken versnelt, dat ook de patches groter worden. Vraag je je af waar het begrip computer-"bug" vandaan komt? Lees dan ons artikel over de [eerste computerbug](/yazi/ilk-bilgisayar-bocegi-1947/).
