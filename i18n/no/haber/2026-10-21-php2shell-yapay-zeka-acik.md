---
title: "Kunstig intelligens fant en kritisk sårbarhet i PHP, som 70 prosent av nettsidene bygger på"
excerpt: "To sårbarheter kalt PHP2Shell gjør det mulig å kjøre kode på en server uten innlogging. Modeller som GPT-5.6 Sol og Gemini 4 Argon ble brukt i oppdagelsen."
hook: "KI fant den enorme PHP-sårbarheten"
fact: "CVSS 9,2"
factLabel: "Høyeste poengsum blant PHP2Shell-sårbarhetene"
category: "Kunstig intelligens"
---
21. oktober ga PHP-utviklerne ut en hasteoppdatering for to kritiske sikkerhetshull i selve kjernen til språket. Sårbarhetene, kalt «PHP2Shell», fikk nummerne CVE-2026-109618 og CVE-2026-109619 og ble funnet ved hjelp av verktøy basert på kunstig intelligens.

## Hva skjedde?

Ifølge Fortune fant KI-sikkerhetstestselskapet Calif den første delen av kjeden 1. august med GPT-5.6 Sol; Wiz oppdaget den første sårbarheten uavhengig 19. august og meldte den til PHPs sikkerhetsteam 24. august. I oppdagelsen ble Wiz' eget verktøy Wiz Atlas brukt, sammen med OpenAIs GPT-5.6 Sol og Googles Gemini 4 Argon.

Sårbarhetene lar en angriper kjøre kode eksternt på en server uten å logge inn, og stjele data fra minnet. Ifølge Wiz er nesten alle PHP-versjoner som er utgitt det siste tiåret, helt tilbake til 5.4, berørt. Den høyeste alvorlighetsgraden er 9,2 på CVSS-skalaen. PHP kjører bak omtrent 70 prosent av nettsidene i verden, og alene styrer WordPress grovt regnet 40 prosent av sidene. Ifølge Fortunes oppdaterte sak begynte sårbarhetene å bli utnyttet i stor skala etter at oppdateringen kom.

## Hvorfor er det viktig?

Dette er et av de tydeligste eksemplene på at kunstig intelligens i sikkerhetsforskning ikke lenger bare er en hjelper, men kan være den som gjør oppdagelsen. Men de samme verktøyene er i hendene på angriperne også, og tiden mellom at en oppdatering kommer og at utnyttelsen starter, blir kortere. Alle som eier en nettside med PHP, må oppdatere serveren sin umiddelbart. I et større bilde kan skjulte feil i internetts gamle kode, som har kjørt i tiår, nå komme for en dag mye raskere. Historien om det første programmet som beveget seg på egen hånd i et nettverk, fortalte vi i [artikkelen om Creeper](/yazi/creeper-ilk-virus-zararsizdi/).
