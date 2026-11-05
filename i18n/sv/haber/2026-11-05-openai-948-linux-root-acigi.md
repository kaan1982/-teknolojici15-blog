---
title: "OpenAI:s agenter hittade och utnyttjade 948 root-sårbarheter i Linuxkärnan"
excerpt: "OpenAI meddelar att man med en ännu inte släppt cybermodell har tagit fram fungerande exploitkod för 948 unika sårbarheter för rättighetseskalering i Linuxkärnan."
hook: "1 279 dollar per sårbarhet"
fact: "948"
factLabel: "Fungerande root-exploits"
category: "Nyheter"
---
I en studie som publicerades den 4 november meddelade OpenAI att dess AI-agenter har hittat 948 unika sårbarheter för lokal rättighetseskalering (LPE) i Linuxkärnan och skrivit en fungerande exploit för var och en. En sådan sårbarhet gör att den som tar sig in i ett system som vanlig användare kan få "root", alltså fullständiga administratörsrättigheter.

## Hur gick det till?

Enligt Unite.AI genomfördes experimentet i mitten av oktober på en vanlig Linuxdistribution för skrivbordet, i virtuella maskiner med standardskydden påslagna. Agenterna, som körde en ännu inte släppt cybersäkerhetsmodell, gick igenom 2,8 miljoner rader kod, ungefär 7 procent av kärnan. Inom 12 timmar kom 2 308 kandidatfynd fram; inom 30 timmar hade 1 724 av dem återskapats i den virtuella miljön. Till slut fanns fungerande kod för 948 unika root-sårbarheter.

Enligt The Hacker News låg den totala kostnaden på omkring 1,21 miljoner dollar i API-krediter, alltså runt 1 279 dollar per sårbarhet. OpenAI tror att agenterna har hittat minst 10 nya exploittekniker men delade av säkerhetsskäl inga detaljer. I ett liknande försök i juni hittades bara 24 sårbarheter.

## Hur går det med patcharna?

Agenterna skrev också ett utkast till patch för varje sårbarhet, men de har ännu inte godkänts av Linuxutvecklarna. Varje exploit och patch granskas först av mänskliga forskare. Enligt Unite.AI hade 61 sårbarheter redan åtgärdats när genomsökningen var klar; OpenAI har rapporterat hundratals kritiska sårbarheter och kommer att dela resten stegvis. Eftersom modellen inte är släppt går det för närvarande inte att kontrollera resultaten oberoende.

## Varför är det viktigt?

Att hitta en root-sårbarhet var förr ett expertjobb som tog veckor; nu kostar det några tusen dollar. Det är en stor möjlighet för försvarare, men samma verktyg fungerar också i fel händer. OpenAI:s egen varning går i samma riktning: på ett system som inte är uppdaterat bör ett vanligt konto inom en snar framtid i praktiken ses som ett administratörskonto. Undrar du hur oskyldigt datorvirusen började, läs vår artikel [det första viruset, Creeper, var faktiskt ofarligt](/yazi/creeper-ilk-virus-zararsizdi/).
