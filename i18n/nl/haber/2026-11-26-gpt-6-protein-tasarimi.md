---
title: "OpenAI: GPT-6 ontwierp zelf een eiwit, 35 van de 322 pogingen hielden het in het lab"
excerpt: "OpenAI meldt dat de algemene GPT-6-modellen eiwitvormen ontwerpen zonder een speciaal biologiemodel aan te roepen; in het lab bonden 35 van de 322 ontwerpen aan hun doelwit."
hook: "Chatmodel ontwierp een eiwit"
fact: "35/322"
factLabel: "ontwerpen die in het lab bonden"
category: "Nieuws"
---
Op 24 november kondigde OpenAI in een preprint aan dat de algemene GPT-6-modellen eiwitten kunnen ontwerpen. Het heikele punt van die bewering is dit: het model maakt driedimensionale eiwitvormen zonder speciaal daarvoor gebouwde biologiemodellen aan te roepen, puur door in tekst te denken en de code uit te voeren die het zelf schrijft.

## Wat gebeurde er in het lab?

Eiwitten bestaan uit ketens van bouwstenen die aminozuren heten; de volgorde van de keten bepaalt hoe het eiwit zich vouwt, en de vouwing bepaalt welk werk het doet. Samen met onderzoekspartner Onava heeft OpenAI de kleine eiwitten (minibinders) die GPT-6.2 ontwierp echt gemaakt en getest.

Het resultaat: van de 322 ontwerpen die tegen vijf doelwitten werden geprobeerd, bonden er 35 aan hun doelwit, dus 10,9 procent. De doelwitten waren PD-L1, IL-7Rα, TrkA, VEGF-A en IL-17A; 18 van de bindende ontwerpen kwamen alleen al bij IL-17A uit. Bij makkelijkere taken, zoals een nieuwe aminozuurreeks schrijven op een bestaande structuur, lag het aandeel veel hoger: bij het herontwerp van antilichaamlussen bonden 128 van de 182 fragmenten, bij therapeutische antilichaamfragmenten 179 van de 272.

## Welk deel moet je niet overdrijven?

Het model maakte de vorm van de keten, maar de rest van het werk bleef bij de oude gereedschappen: de reeksen stelden SolubleMPNN en ProteinMPNN voor, en welke kandidaat naar de werkbank ging filterden Boltz-2, OpenDDE en ESMFold2. OpenAI schrijft zelf dat niet is aangetoond dat zijn modellen van begin tot eind in hun eentje een eiwit kunnen maken.

In het voorspellen van de hele eiwitstructuur uit één reeks is het model nog zwak: de gemiddelde TM-score is 0,38 bij het interne model, tegen 0,93 bij het speciale model ESMFold2. Ook de sterkste meetresultaten komen van een intern model waarvan de naam niet wordt genoemd en waar niemand bij kan, en geen enkel resultaat is buiten het bedrijf gecontroleerd.

## Waarom is dit belangrijk?

Binden is de eerste stap op weg naar een medicijn; selectiviteit, stabiliteit en veiligheidstests komen daarna. Toch kan het feit dat een algemeen model werk verricht op het terrein van modellen die jarenlang voor één taak zijn getraind, veranderen hoe labsoftware vanaf nu wordt gebouwd. In hetzelfde stuk zegt OpenAI ook dat deze vaardigheid misbruikt kan worden en dat het de biologische veiligheidsrisico's met zijn eigen kader heeft beoordeeld. Ben je nieuwsgierig naar de dagen waarin computers als rekenmachine van de wetenschap werden geboren? [Het verhaal van de 30 ton zware ENIAC](/yazi/eniac-30-ton/) staat hier.
