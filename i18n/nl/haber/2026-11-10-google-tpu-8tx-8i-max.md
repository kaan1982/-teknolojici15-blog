---
title: "Google stelt twee nieuwe TPU's voor: de versleutelde 8tx en de 8i Max met twee chips"
excerpt: "Google heeft aan de achtste generatie TPU's de TPU 8tx toegevoegd, die gegevens ook tijdens de verwerking beschermt, en de TPU 8i Max, die twee chips in één package combineert."
hook: "Twee chips in één package"
fact: "2 keer"
factLabel: "Toename van de geheugenbandbreedte bij de 8i Max"
category: "Nieuws"
---
Google voegde op 9 november twee nieuwe systemen toe aan de achtste generatie van zijn zelf ontworpen TPU-versnellers (Tensor Processing Unit): de TPU 8tx en de TPU 8i Max. In april had het bedrijf de TPU 8t voor training en de TPU 8i voor inferentie gepresenteerd. Daarmee telt de familie binnen hetzelfde jaar vier systemen.

## TPU 8tx: versleuteling tijdens de verwerking

De TPU 8tx gebruikt hetzelfde silicium als de TPU 8t, maar voegt op hardwareniveau "confidential computing" toe. Het doel is dat gegevens en modelgewichten beschermd blijven, zelfs terwijl ze worden verwerkt. De chip wordt gekoppeld aan servers met AMD EPYC-processors van de vijfde generatie. Google spreekt van een tot 2 keer lagere latentie dan bij de TPU 8t en vrijwel geen prestatieverlies door de beveiligingslaag; voor deze beweringen is echter nog geen onafhankelijke test beschikbaar. De doelgroep bestaat uit gereguleerde bedrijven en overheidsinstanties die met gevoelige gegevens werken.

## TPU 8i Max: twee chips, één package

De TPU 8i Max combineert twee TPU 8i-chips in één package. Volgens Google verdubbelt dit, vergeleken met een enkele TPU 8i, de rekenkracht, het SRAM-geheugen op de chip en de HBM-geheugenbandbreedte. Omdat er in dezelfde rackruimte twee keer zoveel silicium past, stijgt in het datacenter ook de rekenkracht per vierkante meter en per watt. Mark Lohmeyer, topman bij Google Cloud, vergeleek deze aanpak met het toevoegen van nieuwe rijstroken aan een snelweg.

Google gaf geen informatie over prijzen, de datum van algemene beschikbaarheid of regio's. Volgens Data Center Knowledge zullen sommige klanten de TPU 8tx in hun eigen datacenters kunnen installeren; Google heeft dat niet officieel bevestigd.

## Waarom is dit belangrijk?

Tot de sterkste concurrenten van Nvidia op de chipmarkt behoren de cloudbedrijven die hun eigen chips ontwerpen. Dat Google binnen een jaar vier verschillende TPU-systemen uitbrengt, laat zien dat maatwerkchips zich nu per soort werk onderscheiden in plaats van één product voor alle doeleinden te zijn. Voor het bescheiden begin van Googles hardwareavontuur kun je ons artikel over de [Lego-server](/yazi/google-lego-sunucu/) lezen.
