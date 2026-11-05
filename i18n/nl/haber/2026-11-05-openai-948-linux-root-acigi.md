---
title: "Agents van OpenAI vonden en misbruikten 948 root-lekken in de Linux-kernel"
excerpt: "OpenAI meldt dat het met een nog niet uitgebracht cybermodel werkende exploitcode heeft gemaakt voor 948 unieke lekken voor rechtenescalatie in de Linux-kernel."
hook: "1.279 dollar per lek"
fact: "948"
factLabel: "Werkende root-exploits"
category: "Nieuws"
---
OpenAI maakte in een op 4 november gepubliceerd onderzoek bekend dat zijn AI-agents in de Linux-kernel 948 unieke lekken voor lokale rechtenescalatie (LPE) hebben gevonden en voor elk daarvan een werkende exploit hebben geschreven. Met zo'n lek kan iemand die als gewone gebruiker een systeem binnenkomt "root"-rechten krijgen, oftewel volledige beheerdersrechten.

## Hoe ging het in zijn werk?

Volgens Unite.AI vond het experiment half oktober plaats op een veelgebruikte desktopdistributie van Linux, in virtuele machines met de standaard beveiligingsmaatregelen ingeschakeld. De agents, die draaiden op een nog niet uitgebracht cybersecuritymodel, doorzochten 2,8 miljoen regels code, ongeveer 7 procent van de kernel. Binnen 12 uur kwamen er 2.308 kandidaat-bevindingen uit; binnen 30 uur werden er daarvan 1.724 in de virtuele omgeving gereproduceerd. Uiteindelijk was er werkende code voor 948 unieke root-lekken.

Volgens The Hacker News bedroegen de totale kosten ongeveer 1,21 miljoen dollar aan API-tegoed, oftewel zo'n 1.279 dollar per lek. OpenAI denkt dat de agents minstens 10 nieuwe exploittechnieken hebben ontdekt, maar deelde om veiligheidsredenen geen details. Bij een vergelijkbare proef in juni werden slechts 24 lekken gevonden.

## Hoe staat het met de patches?

De agents schreven voor elk lek ook een conceptpatch, maar die zijn nog niet goedgekeurd door de Linux-ontwikkelaars. Elke exploit en elke patch wordt eerst door menselijke onderzoekers bekeken. Volgens Unite.AI waren er bij het einde van de scan al 61 lekken gedicht; OpenAI heeft honderden kritieke lekken gemeld en deelt de rest stapsgewijs. Omdat het model niet is uitgebracht, kunnen de resultaten voorlopig niet onafhankelijk worden gecontroleerd.

## Waarom is dit belangrijk?

Een root-lek vinden was vroeger expertwerk van weken; nu kost het een paar duizend dollar. Dat is een grote kans voor verdedigers, maar hetzelfde gereedschap werkt ook in verkeerde handen. De eigen waarschuwing van OpenAI wijst in die richting: op een niet-bijgewerkt systeem moet een gewoon account in de nabije toekomst feitelijk als een beheerdersaccount worden beschouwd. Ben je benieuwd hoe onschuldig computervirussen begonnen, lees dan ons artikel [het eerste virus, Creeper, was eigenlijk onschuldig](/yazi/creeper-ilk-virus-zararsizdi/).
