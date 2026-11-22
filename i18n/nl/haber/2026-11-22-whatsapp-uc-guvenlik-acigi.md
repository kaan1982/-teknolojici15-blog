---
title: "WhatsApp dicht drie beveiligingslekken: één is mogelijk gebruikt bij oplichting"
excerpt: "WhatsApp heeft drie beveiligingslekken gedicht, waaronder een Android-lek dat IP-gegevens kon prijsgeven en vermoedelijk is gebruikt in een oplichtingscampagne."
hook: "Eén bericht kon je IP-adres verraden"
fact: "3 lekken"
factLabel: "in november gedichte beveiligingslekken"
category: "Nieuws"
---
WhatsApp maakte op 20 november in beveiligingsadviezen bekend dat het drie lekken heeft gedicht. Een daarvan is een Android-bug waarvan het bedrijf vermoedt dat hij is gebruikt in een oplichtingscampagne.

## Om welke lekken gaat het?

Het eerste wordt gevolgd onder de code CVE-2026-23871 en treft WhatsApp en WhatsApp Business voor Android vóór versie 2.26.17.4. Volgens Business Upturn werden externe adressen in reacties op "Click to WhatsApp"-advertenties onvoldoende gecontroleerd. Wanneer een speciaal opgesteld bericht in een chat verscheen, kon het toestel zijn IP-gegevens aan de andere partij prijsgeven. WhatsApp zegt de bug te hebben ontdekt bij een poging een oplichtingscampagne te stoppen en denkt dat een oplichter hem gebruikte om zijn nepbericht geloofwaardiger te laten lijken. Hoeveel mensen getroffen zijn, werd niet bekendgemaakt.

Het tweede lek, CVE-2026-102769, is een SQL-injectie in Android-versies vóór 2.26.35.74. Wie tikte op een nep-bestelbericht dat vanuit een onofficiële app was verstuurd, kon bepaalde bestanden kwijtraken die WhatsApp op de telefoon bewaart. Een onderzoeker meldde dit lek via het bugbountyprogramma van Meta.

Het derde, CVE-2026-44908, heeft te maken met de certificaatcontrole bij de verbinding met de vertrouwelijke rekeninfrastructuur van Meta AI en trof de apps voor Android, iOS en Mac. Om het te misbruiken moest een aanvaller zich binnen de eigen infrastructuur van Meta bevinden. WhatsApp zegt geen bewijs te hebben gevonden dat de laatste twee lekken bij echte aanvallen zijn gebruikt.

## Wat moet je doen?

Het advies van het bedrijf is eenvoudig: houd WhatsApp en het besturingssysteem van je telefoon up-to-date. Controleren op updates in de appwinkel is genoeg om deze lekken te dichten.

## Waarom is dit belangrijk?

In een app die door miljarden mensen wordt gebruikt, kan een uitgelekt IP-adres een ruwe schatting van je locatie mogelijk maken en de deur openzetten voor gerichte oplichting. Opvallend is dat oplichters niet meer alleen op nepberichten vertrouwen, maar ook gebruikmaken van fouten in de app zelf. Het ontstaansverhaal van WhatsApp vertelden we in ons [artikel over Brian Acton](/yazi/whatsapp-brian-acton-facebook-reddi/).
