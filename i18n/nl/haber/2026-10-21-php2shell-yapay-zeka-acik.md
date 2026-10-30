---
title: "AI vond een kritieke kwetsbaarheid in PHP, waar 70 procent van de websites op draait"
excerpt: "Twee kwetsbaarheden, PHP2Shell genaamd, maken het mogelijk code op een server uit te voeren zonder in te loggen. Bij de ontdekking werden modellen als GPT-5.6 Sol en Gemini 4 Argon gebruikt."
hook: "AI vond de enorme PHP-kwetsbaarheid"
fact: "CVSS 9,2"
factLabel: "Hoogste score van de PHP2Shell-kwetsbaarheden"
category: "Nieuws"
---
PHP-ontwikkelaars brachten op 21 oktober een spoedpatch uit voor twee kritieke beveiligingslekken in de kern van de taal. De lekken, "PHP2Shell" genoemd en geregistreerd als CVE-2026-109618 en CVE-2026-109619, werden gevonden met hulp van AI-hulpmiddelen.

## Wat is er gebeurd?

Volgens Fortune vond het AI-beveiligingstestbedrijf Calif het eerste onderdeel van de keten op 1 augustus met GPT-5.6 Sol; Wiz ontdekte het eerste lek onafhankelijk daarvan op 19 augustus en meldde het op 24 augustus aan het PHP-beveiligingsteam. Bij de ontdekking werden Wiz' eigen hulpmiddel Wiz Atlas en de modellen GPT-5.6 Sol van OpenAI en Gemini 4 Argon van Google gebruikt.

Met de lekken kan een aanvaller zonder in te loggen op afstand code op de server uitvoeren en gegevens uit het geheugen weglekken. Volgens Wiz is bijna elke PHP-versie van het afgelopen decennium getroffen, tot terug naar 5.4. De hoogste ernstscore op de CVSS-schaal is 9,2. PHP draait achter ongeveer 70 procent van de websites ter wereld; alleen WordPress al beheert grofweg 40 procent van de sites. Volgens Fortunes bijgewerkte bericht werden de lekken na de patch op grote schaal misbruikt.

## Waarom is dit belangrijk?

Dit is een van de duidelijkste voorbeelden dat AI in beveiligingsonderzoek niet alleen meer een hulpmiddel is, maar ook degene kan zijn die de ontdekking doet. Maar dezelfde hulpmiddelen zijn ook in handen van aanvallers, en de tijd tussen het verschijnen van een patch en het begin van misbruik wordt korter. Elke website-eigenaar die PHP gebruikt, moet zijn server meteen bijwerken. In het grotere plaatje kunnen verborgen fouten in de oude code die al tientallen jaren op internet draait nu veel sneller aan het licht komen. Het verhaal van het eerste programma dat zichzelf door een netwerk verspreidde, vertelden we in ons [Creeper-artikel](/yazi/creeper-ilk-virus-zararsizdi/).
