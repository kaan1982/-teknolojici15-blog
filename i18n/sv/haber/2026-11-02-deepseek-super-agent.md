---
title: "DeepSeek släpper Super-Agent som öppen källkod, en agent som lyssnar på teamets chattar och skriver kod"
excerpt: "DeepSeek har publicerat koden till Super-Agent under MIT-licensen, en experimentell kodagent som följer förfrågningar på GitHub och Feishu och öppnar pull requests."
hook: "Kodagenten som börjar jobba utan att bli kallad"
fact: "MIT"
factLabel: "Super-Agents öppen källkod-licens"
category: "Nyheter"
---
Det kinesiska AI-företaget DeepSeek publicerade den 31 oktober koden till Super-Agent på GitHub, en experimentell kodagent som är utformad för mjukvaruteam. Enligt Bloomberg vill företaget med agenten konkurrera med verktyg som Anthropics Claude Code.

## Vad gör den?

Super-Agent arbetar med ett enda GitHub-repo. Den lyssnar på konversationer på GitHub och, om man vill, på gruppchattar i Feishu, ByteDances app för jobbmeddelanden. När en behörig teammedlem ber om en uppgift öppnar agenten ett separat ärende i sin egen session, utför arbetet och lägger upp resultatet, till exempel en pull request, under konversationen där förfrågan kom ifrån. Arbeten som kräver ett mänskligt beslut listas i stället i en webbpanel.

Enligt projektets handbok är målet att leverera arbete och samtidigt kräva "så lite uppmärksamhet som möjligt" av teamet. DeepSeeks filosofidokument betonar att agenten bara agerar när den blir ombedd eller när en regel som teamet har satt upp tillåter det. Företaget varnar för att en agent som arbetar för hela teamet också kan slösa bort teamets uppmärksamhet.

Koden publicerades under MIT-licensen; alla kan alltså ladda ner den, ändra den och använda den kommersiellt. Under de två första dagarna efter publiceringen samlade repot över 9 000 stjärnor.

## Vilka är begränsningarna?

DeepSeek beskriver Super-Agent som en "forskningsprototyp" och skriver tydligt att det inte är en officiell produkt. Versionen med öppen källkod är inte densamma som den företaget använder internt. Vissa idéer från tillkännagivandet finns ännu inte i koden. Dokumentet medger också att svåra problem som behörighet, granskning och förtroende inte är lösta; användarna uppmanas att granska koden innan de kör den.

## Varför är det viktigt?

Hittills har kodagenter mest varit verktyg som väntar på en enskild utvecklares kommando. Super-Agent testar i stället idén om en "lagkamrat" som slår sig ner i teamets chatt och tar sig an arbetet på egen hand, och gör det öppet så att vem som helst kan granska det. Om idén slår igenom kommer frågan om hur mycket befogenheter agenter ska få att hamna högt upp på mjukvaruteamens agenda. Att den första "buggen" i mjukvara var en riktig mal berättade vi i vår artikel [Malen från 1947](/yazi/ilk-bilgisayar-bocegi-1947/).
