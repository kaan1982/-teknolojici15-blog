---
title: "Vier AI-reuzen scharen zich achter één robots.txt-signaal: \"Train niet op mij\""
excerpt: "OpenAI, Google, Microsoft en Anthropic gaan een gedeeld robots.txt-signaal ondersteunen waarmee websites zich met één regel afmelden voor AI-training."
hook: "Met één regel nee tegen AI"
fact: "4 bedrijven"
factLabel: "Reuzen achter het gedeelde signaal"
category: "Nieuws"
---
OpenAI, Google, Microsoft en Anthropic maakten op 30 oktober bekend dat ze een gedeeld signaal gaan ondersteunen waarmee websites hun inhoud met één instelling kunnen uitsluiten van AI-training. Tot nu toe moest een site-eigenaar de crawler van elk bedrijf apart blokkeren in het robots.txt-bestand.

## Wat is er gebeurd?

Het nieuwe signaal heet `__usage_ai-training`. De eigenaar zet het als een gewone regel in robots.txt en zegt daarmee: "gebruik mijn inhoud niet om AI-modellen te trainen." Het voorstel is bij de Internet Engineering Task Force (IETF) ingediend als concept, geschreven door Kevin Kelley, die bij Anthropic verantwoordelijk is voor standaarden. Het is nog geen definitieve standaard; als het concept niet wordt bijgewerkt, vervalt het in mei 2027.

De tijdlijnen verschillen. Anthropic zegt al met de invoering te zijn begonnen. De ondersteuning van OpenAI volgt in de komende maanden. Google en Microsoft mikken op 2027. Microsoft voegt voor Bing ook een aparte instelling toe die training scheidt van "grounding", oftewel een chatbot die tijdens het antwoorden een bron raadpleegt. Google zei dat het sites die dit signaal gebruiken maar geen eigen Google-Extended-regel hebben, zal behandelen alsof ze Google-Extended hebben geblokkeerd. Meta toonde interesse in een gedeeld signaal, maar zei niet of het zich eraan zal houden.

## Waarom is dit belangrijk?

Uitgevers klagen al jaren dat hun inhoud zonder toestemming wordt gebruikt om modellen te trainen; The New York Times daagde OpenAI daarom voor de rechter. Een signaal van één regel maakt het voor kleine site-eigenaren veel eenvoudiger. Maar er zijn grenzen: naleving is vrijwillig, er is geen toezicht of handhaving, en kleinere labs en opensourceprojecten vallen buiten de afspraak. Bovendien gaat het signaal alleen over training; het doet niets aan problemen zoals AI-samenvattingen die minder bezoekers naar websites sturen.

## Een link met de geschiedenis

De robots.txt-regel ontstond in 1994, toen het web nog heel jong was, om bots te vertellen: "hier niet naar binnen." Waar het web begon, vertelden we in ons artikel [De eerste website staat nog steeds online: het verhaal van info.cern.ch](/yazi/ilk-web-sitesi-hala-yayinda-1991/). Dertig jaar later is datzelfde kleine bestand een onderhandelingstafel van het AI-tijdperk geworden.
