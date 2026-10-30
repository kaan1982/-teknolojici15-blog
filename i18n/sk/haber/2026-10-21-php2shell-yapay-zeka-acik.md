---
title: "Umelá inteligencia našla kritické chyby v PHP, na ktorom stojí 70 percent webov"
excerpt: "Dve chyby nazvané PHP2Shell umožňujú spustiť kód na serveri bez prihlásenia. Pri objave boli použité okrem iného modely GPT-5.6 Sol a Gemini 4 Argon."
hook: "Obrovskú chybu v PHP našla AI"
fact: "CVSS 9,2"
factLabel: "Najvyššie skóre chýb PHP2Shell"
category: "Umelá inteligencia"
---

Vývojári PHP 21. októbra vydali naliehavú záplatu na dve kritické bezpečnostné chyby v jadre jazyka. Chyby nazvané „PHP2Shell", označené CVE-2026-109618 a CVE-2026-109619, boli objavené s pomocou nástrojov umelej inteligencie.

## Čo sa stalo?

Podľa Fortune našla firma testujúca bezpečnosť AI Calif prvý článok reťazca 1. augusta pomocou GPT-5.6 Sol; Wiz nezávisle odhalil prvú chybu 19. augusta a 24. augusta ju nahlásil bezpečnostnému tímu PHP. Na objav bol použitý vlastný nástroj Wiz, Wiz Atlas, a modely GPT-5.6 Sol od OpenAI a Gemini 4 Argon od Googlu.

Chyby umožňujú útočníkovi na diaľku spustiť kód na serveri bez prihlásenia a vynášať dáta z pamäte. Podľa Wiz sú zasiahnuté takmer všetky verzie PHP vydané za posledné desaťročie, až po verziu 5.4. Najvyššie skóre na škále CVSS je 9,2. PHP beží za približne 70 percentami webov na svete a samotný WordPress spravuje zhruba 40 percent stránok. Podľa aktualizovanej správy Fortune sa chyby po vydaní záplaty začali široko zneužívať.

## Prečo je to dôležité?

Je to jeden z najkonkrétnejších príkladov toho, že umelá inteligencia v bezpečnostnom výskume už nie je len pomocníkom, ale môže sama objavovať. Rovnaké nástroje sú však aj v rukách útočníkov a čas medzi vydaním záplaty a začiatkom zneužívania sa skracuje. Každý majiteľ webu na PHP by mal okamžite aktualizovať server. V širšom obraze môžu skryté chyby v starom kóde internetu, ktorý beží desaťročia, vychádzať na svetlo oveľa rýchlejšie. Príbeh prvého programu, ktorý sa sám túlal po sieti, sme rozprávali v [článku o Creeperovi](/yazi/creeper-ilk-virus-zararsizdi/).
