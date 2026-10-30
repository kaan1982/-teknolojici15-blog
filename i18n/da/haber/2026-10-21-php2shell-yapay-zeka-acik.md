---
title: "Kunstig intelligens fandt en kritisk sårbarhed i PHP, som 70 procent af hjemmesiderne bygger på"
excerpt: "To sårbarheder kaldet PHP2Shell gør det muligt at køre kode på en server uden login. Modeller som GPT-5.6 Sol og Gemini 4 Argon blev brugt i opdagelsen."
hook: "AI fandt den enorme PHP-sårbarhed"
fact: "CVSS 9,2"
factLabel: "Højeste score blandt PHP2Shell-sårbarhederne"
category: "Kunstig intelligens"
---
Den 21. oktober udgav PHP-udviklerne en hasteopdatering til to kritiske sikkerhedshuller i selve sprogets kerne. Sårbarhederne, kaldet "PHP2Shell", fik numrene CVE-2026-109618 og CVE-2026-109619 og blev fundet ved hjælp af værktøjer baseret på kunstig intelligens.

## Hvad skete der?

Ifølge Fortune fandt AI-sikkerhedstestselskabet Calif den første del af kæden den 1. august med GPT-5.6 Sol; Wiz opdagede den første sårbarhed uafhængigt den 19. august og meldte den til PHP's sikkerhedsteam den 24. august. I opdagelsen blev Wiz' eget værktøj Wiz Atlas brugt sammen med OpenAIs GPT-5.6 Sol og Googles Gemini 4 Argon.

Sårbarhederne lader en angriber køre kode eksternt på en server uden at logge ind og stjæle data fra hukommelsen. Ifølge Wiz er næsten alle PHP-versioner udgivet i det seneste årti, helt tilbage til 5.4, berørt. Den højeste alvorlighedsscore er 9,2 på CVSS-skalaen. PHP kører bag omkring 70 procent af verdens hjemmesider, og alene WordPress styrer groft sagt 40 procent af siderne. Ifølge Fortunes opdaterede artikel begyndte sårbarhederne at blive udnyttet i stor stil, efter at opdateringen udkom.

## Hvorfor er det vigtigt?

Det er et af de tydeligste eksempler på, at kunstig intelligens i sikkerhedsforskning ikke længere kun er en hjælper, men kan være den, der gør opdagelsen. Men de samme værktøjer er også i angribernes hænder, og tiden mellem, at en opdatering udkommer, og at udnyttelsen begynder, bliver kortere. Enhver, der ejer en hjemmeside med PHP, skal opdatere sin server med det samme. I et større billede kan skjulte fejl i internettets gamle kode, som har kørt i årtier, nu komme for en dag meget hurtigere. Historien om det første program, der bevægede sig rundt på egen hånd i et netværk, fortalte vi i [artiklen om Creeper](/yazi/creeper-ilk-virus-zararsizdi/).
