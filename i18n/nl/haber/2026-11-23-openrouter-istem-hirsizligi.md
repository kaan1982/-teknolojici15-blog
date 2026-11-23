---
title: "Tussenpartijen lazen AI-verzoeken mee: OpenRouter zet 3 aanbieders uit"
excerpt: "Onderzoek van Dragos met 2 miljoen lokverzoeken bracht diefstal van prompts en sleutels bij goedkope AI-aanbieders aan het licht; OpenRouter heeft 3 aanbieders verwijderd."
hook: "Een ander leest je vraag misschien mee"
fact: "2 miljoen"
factLabel: "lokverzoeken verstuurd in het onderzoek"
category: "Nieuws"
---
Cyberbeveiligingsbedrijf Dragos deed een ongewoon experiment om te meten in wiens handen verzoeken aan AI-modellen onderweg terechtkomen. De resultaten zetten OpenRouter, dat verschillende modellen via één interface aanbiedt, tot actie aan: het platform haalde drie aanbieders van de lijst en trok de "Zero Data Retention"-goedkeuring van 125 endpoints in.

## Hoe werd het experiment uitgevoerd?

Tussen juli en november 2026 verstuurden de onderzoekers ongeveer 2 miljoen verzoeken. In elk verzoek stopten ze nepwachtwoorden en verborgen links die zichzelf verraden zodra ze worden gebruikt, oftewel "kanarie"-vallen. Volgens The Decoder bleek dat minstens drie aanbieders door aanvallers waren overgenomen en dat er maandenlang gegevens werden gestolen. Geen van de aanbieders had dit door totdat Dragos hen inlichtte.

Bij het grootste incident verzamelden aanvallers honderden AWS-sleutels; sommige probeerden ze binnen enkele uren uit. Sommige tussenpartijen die als marktplaats werken, hoefden niet eens een lek te vinden: het model tegen de laagste prijs aanbieden en logging aanzetten was genoeg om de verzoeken van klanten te lezen. Ook bleek dat instellingen met de belofte "we bewaren geen gegevens" vaak werden geschonden.

## Wat deed OpenRouter?

Het bedrijf mailde de getroffen gebruikers en waarschuwde dat hun verzoeken aan MiniMax-modellen mogelijk door derden zijn gelezen. Aanbieders als Novita, Phala en Together publiceerden voorlopige onderzoeksrapporten.

## Waarom is dit belangrijk?

Elk wachtwoord, stukje code of bedrijfsdocument dat je in een AI-chat plakt, kan langs meer dan één tussenpartij gaan voordat het het model bereikt, en elke tussenpartij kan het hele verzoek zien. Het advies van Dragos is duidelijk: zet nooit echte inloggegevens in verzoeken en laat de route van je gegevens niet afhangen van de prijs. Wie wil weten hoe het wachtwoord is ontstaan, kan ons [artikel over het eerste computerwachtwoord](/yazi/ilk-bilgisayar-sifresi-ctss/) lezen.
