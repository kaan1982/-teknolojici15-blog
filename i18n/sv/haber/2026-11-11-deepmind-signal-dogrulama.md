---
title: "DeepMinds AI verifierade koden i Signals kryptering matematiskt på fyra veckor"
excerpt: "Google DeepMinds system AlphaProof Code har verifierat de grundläggande säkerhetsegenskaperna i Signalprotokollets verkliga kod med maskinkontrollerade bevis."
hook: "Års arbete på fyra veckor"
fact: "6 miljoner rader"
factLabel: "Bevis skrivet i språket Lean"
category: "Nyheter"
---
Google DeepMind presenterade den 10 november ett nytt AI-system kallat AlphaProof Code och berättade samtidigt om dess första stora uppdrag: att med "formell verifiering" bevisa de grundläggande säkerhetsegenskaperna i meddelandeprotokollet Signal. Signalprotokollet används förutom i Signal-appen även, i modifierade versioner, i WhatsApp och Google Messages.

## Hur fungerar det?

Vid formell verifiering bevisar man matematiskt att en programvara följer en viss säkerhetsregel i alla lägen, och ett datorprogram kontrollerar beviset steg för steg. Normalt tar det här arbetet flera år för expertteam.

Med AlphaProof Code skrev först mänskliga kryptografiexperter ner vad som skulle bevisas. Till exempel att senare meddelanden förblir skyddade även om en enhet tillfälligt hamnar i fel händer. Därefter tog samarbetande AI-agenter fram bevisen i det formella språket Lean. Resultatet blev ett bevis på mer än sex miljoner rader. Arbetet för teamet på fem personer tog fyra veckor. Agenterna flaggade bara 1 procent av koden för en andra mänsklig granskning.

För att visa att systemet verkligen kan skilja säkert från osäkert lade teamet tillbaka två verkliga, tidigare åtgärdade buggar i en isolerad kopia av koden. I båda fallen bevisade AlphaProof Code att de versionerna var osäkra.

## Begränsningar

Verifieringen omfattar inte hela Signal-appen, utan utvalda säkerhetsegenskaper i protokollet. I de granskade delarna hittades ingen ny sårbarhet. Ett bevis är bara så starkt som de nedskrivna reglerna och antagandena; till exempel antas krypteringsalgoritmerna vara felfria. DeepMind-forskaren Swarat Chaudhuri sa också att det är en mycket lång väg kvar innan metoden kan spridas till all programvara i världen. Google har inte uppgett kostnaden; bevisen och reglerna publiceras som öppen källkod.

## Varför är det viktigt?

AI hjälper även angripare att hitta sårbarheter. Att samma teknik används för att bevisa att en programvara är säker är ett viktigt steg för försvararna. Är du nyfiken på datasäkerhetens första dagar, läs historien om [det första datorlösenordet](/yazi/ilk-bilgisayar-sifresi-ctss/).
