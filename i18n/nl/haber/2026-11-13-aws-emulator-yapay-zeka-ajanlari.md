---
title: "De gratis lokale cloudemulator van AWS is van begin tot eind door AI-agents geschreven"
excerpt: "AWS Emulator bootst meer dan 200 AWS-diensten na op je computer; volgens Amazon is er geen enkele regel code door mensen geschreven of gecontroleerd."
hook: "De agent schrijft en repareert de code"
fact: "200+"
factLabel: "Nagebootste AWS-diensten"
category: "Nieuws"
---
Amazon Web Services bracht op 11 november AWS Emulator uit, een gratis hulpmiddel voor ontwikkelaars. Het hulpmiddel bootst meer dan 200 diensten van de AWS-cloud na op de eigen computer van de ontwikkelaar. Zo kan software worden getest zonder AWS-account en zonder cloudrekening te betalen. Wat vooral opvalt, is wie het hulpmiddel heeft geschreven.

## Geen mensen, wel agents

Volgens Matt Goldberg, senior principal engineer bij AWS, is de hele emulator geschreven door autonome AI-agents; zijn team heeft geen enkele regel code geschreven of gecontroleerd. Het project begon als een weekendexperiment van Goldberg met Kiro, het codeerhulpmiddel van Amazon: de eerste nabootsing van een eenvoudige berichtenwachtrijdienst was in ongeveer 15 minuten klaar.

Tegenwoordig wordt het werk gedaan door drie teams van agents. Het eerste team schrijft tests en valideert die tegen het echte AWS. Het tweede team draait dezelfde tests op de emulator en opent bugmeldingen voor de verschillen. In het derde team repareert elke agent één enkele bug. Wijzigingen worden pas samengevoegd als ze de controles op compilatie, codestandaard, beveiliging en achterwaartse compatibiliteit doorstaan. Volgens Goldberg sluiten honderden agents per dag duizenden bugs. De taak van mensen is het ontwerpen van de tests, de regels en deze poorten.

## De beperkingen

De code is in Rust geschreven en vrijgegeven onder de CC0-licentie, die als publiek domein geldt. Amazon raadt af het hulpmiddel te gebruiken voor live-systemen of beveiligingstests: het beoordeelt autorisatiebeleid niet zoals het echte AWS en bootst throttling, storingen en regioverschillen nog niet na. Niet-ondersteunde bewerkingen geven een HTTP 501-fout terug en het verzamelen van gebruiksgegevens staat standaard aan.

## Waarom is dit belangrijk?

Dit is een van de zeldzame gevallen waarin een groot bedrijf openlijk zegt een breed te gebruiken product zonder menselijke tussenkomst te hebben gemaakt. Het zwaartepunt van de softwareontwikkeling zou kunnen verschuiven van code schrijven naar het opzetten van tests die de juistheid meten. Voor het verhaal van de eerste "bug" in software kun je ons artikel over de [eerste computerbug](/yazi/ilk-bilgisayar-bocegi-1947/) lezen.
