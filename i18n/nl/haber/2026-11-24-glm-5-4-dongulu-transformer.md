---
title: "Chinese Zhipu lanceert GLM-5.4, een model dat zijn lagen twee keer doorloopt"
excerpt: "Zhipu's GLM-5.4 brengt de Loop Transformer-architectuur, die 28 lagen in twee rondes laat draaien, naar een groot model; er is ook een context van 1 miljoen tokens en beeldinvoer."
hook: "Het model dat twee keer door dezelfde lagen gaat"
fact: "750 miljard"
factLabel: "parameters van het basismodel"
category: "Nieuws"
---
Het Chinese AI-bedrijf Zhipu (Z.ai) heeft op 23 november het model GLM-5.4 beschikbaar gesteld. De echte vernieuwing zit in de architectuur: het is het eerste "Loop Transformer"-vlaggenschip van het bedrijf.

## Wat doet die lus?

In een klassiek taalmodel draait elke laag één keer. GLM-5.4 laat de 28 lagen van het basismodel GLM-5, met zo'n 750 miljard parameters, juist twee rondes draaien; de tweede ronde verwerkt de tussenresultaten van de eerste opnieuw en verbetert ze. Zo kan het model "dieper" nadenken zonder nieuwe gewichten toe te voegen. Zhipu zegt daarmee een intelligentieniveau te bereiken dat vergelijkbaar is met modellen van 2 tot 3 biljoen parameters. Volgens het bedrijf doet het model bovendien in tests als GPQA-Diamond en MMLU-Pro hetzelfde werk met antwoorden die 10 tot 14 procent korter zijn.

Het model biedt een contextvenster van 1 miljoen tokens en kan nu ook afbeeldingen lezen: ontwikkelaars kunnen een screenshot van een kapotte interface samen met de code aanleveren.

## Waar is het te gebruiken?

GLM-5.4 is voorlopig beschikbaar via het GLM Coding Plan-abonnement, de programmeertool ZCode en de chatsite van Z.ai. Volgens WinBuzzer is het quotum van abonnees met 50 procent verhoogd en zijn de kosten van 10.000 invoertokens gedaald van 6,9 naar 4,6 credits. De algemene API en open gewichten volgen pas na een veiligheidsbeoordeling.

Onafhankelijke metingen zijn voorzichtiger: in de programmeertest KingBench 4, waarover WinBuzzer bericht, eindigde het model als zevende van 19 modellen met 55,3 procent van de punten. Het bedrijf heeft nog geen gedetailleerde testresultaten gepubliceerd.

## Waarom is dit belangrijk?

Lagen in een lus zetten komt naar voren als een nieuwe manier om modellen sterker te maken zonder ze groter te maken, en een van de eersten die dat op grote schaal probeert is een Chinees bedrijf. Om te zien hoe groot een context van 1 miljoen tokens is, hoef je alleen maar naar [de eerste diskette van 80 KB](/yazi/ilk-disket-ibm-1971-80-kb/) te kijken.
