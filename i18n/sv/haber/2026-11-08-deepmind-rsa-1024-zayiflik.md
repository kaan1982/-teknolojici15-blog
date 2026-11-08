---
title: "DeepMinds AI-agenter hittade två svagheter i gammal 1024-bitars RSA-kryptering"
excerpt: "Google DeepMind meddelade att AI-agenter under mänsklig övervakning hittat två svagheter i gammal 1024-bitars RSA; nycklar på 2048 bitar och uppåt påverkas inte."
hook: "Två kryptoanalyssteg på några veckor"
fact: "~1 600 gånger"
factLabel: "Teoretisk förbättring, i 32-byte-scenariot"
category: "Nyheter"
---
Google DeepMind meddelade den 6 november att företagets AI-agenter hittat två viktiga svagheter i gamla 1024-bitars RSA-krypteringssystem. Agenterna arbetade under mänsklig övervakning. Arbetet leddes av Dj Dvijotham och Abhradeep Thakurta på DeepMind; i teamet fanns också kryptoanalysexperterna Nadia Heninger (UC San Diego och Inria) och Emmanuel Thomé (Inria).

## Första svagheten: utfyllnaden i signaturer

I digitala signaturer läggs ett fast datablock, så kallad "padding" eller utfyllnad, till meddelandet. Enligt forskningen ger utfyllnaden nästan inget extra skydd om angriparen kan styra ungefär hälften eller mer av det signerade blocket. Agenterna testade detta i en skyddad miljö mot en 1024-bitars testnyckel som redan knäckts i en tidigare akademisk studie. Resultatet återskapades med 3,5 gånger mindre processortid och med mindre än en tusendel av den kraft som krävs för att knäcka nyckeln direkt.

I det svåra scenariot, där angriparen bara styr ett fingeravtryck på 32 byte, hittade agenterna i stället en ny algoritm. Den beräknas ge en förbättring på ungefär 1 600 gånger jämfört med den bästa kända metoden; siffran är ingen uppmätt hastighet utan en teoretisk beräkning.

## Andra svagheten: faktorisering i bulk

Eftersom RSA-nycklar oftast har samma storlek kan en stor förberäkning fördelas över många nycklar. Med algoritmen som agenterna hittade sjunker den genomsnittliga kostnaden för att faktorisera varje ytterligare 1024-bitars nyckel ungefär 30 gånger jämfört med tidigare bulkmetoder.

DeepMind betonar att resultaten inte påverkar dagens kryptering. Bankärenden, meddelandeappar och programuppdateringar använder nästan överallt nycklar på 2048 bitar eller större. Pushmeet Kohli, företagets vice vd med ansvar för vetenskap, sa att AI-stödd kryptoanalys kan hjälpa till att pröva framtida system.

## Varför är det viktigt?

Framsteg inom kryptoanalys tar vanligtvis år. Att AI-agenter kortar ner det till veckor visar att system som fortfarande använder gamla nycklar bör skynda på övergången. Lösenordens korta historia berättar vi om i vår artikel om det [första datorlösenordet](/yazi/ilk-bilgisayar-sifresi-ctss/).
