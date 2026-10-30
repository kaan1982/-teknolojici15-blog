---
title: "Umělá inteligence našla kritické chyby v PHP, na kterém stojí 70 procent webů"
excerpt: "Dvě chyby nazvané PHP2Shell umožňují spustit kód na serveru bez přihlášení. Při objevu byly použity mimo jiné modely GPT-5.6 Sol a Gemini 4 Argon."
hook: "Obří chybu v PHP našla AI"
fact: "CVSS 9,2"
factLabel: "Nejvyšší skóre chyb PHP2Shell"
category: "Umělá inteligence"
---

Vývojáři PHP 21. října vydali naléhavou záplatu na dvě kritické bezpečnostní chyby v jádru jazyka. Chyby nazvané „PHP2Shell", označené CVE-2026-109618 a CVE-2026-109619, byly objeveny s pomocí nástrojů umělé inteligence.

## Co se stalo?

Podle Fortune našla firma testující bezpečnost AI Calif první článek řetězce 1. srpna pomocí GPT-5.6 Sol; Wiz nezávisle odhalil první chybu 19. srpna a 24. srpna ji nahlásil bezpečnostnímu týmu PHP. K objevu byl použit vlastní nástroj Wiz, Wiz Atlas, a modely GPT-5.6 Sol od OpenAI a Gemini 4 Argon od Googlu.

Chyby umožňují útočníkovi vzdáleně spustit kód na serveru bez přihlášení a vynášet data z paměti. Podle Wiz jsou zasaženy téměř všechny verze PHP vydané za poslední desetiletí, až po verzi 5.4. Nejvyšší skóre na škále CVSS je 9,2. PHP běží za zhruba 70 procenty webů na světě a samotný WordPress spravuje přibližně 40 procent stránek. Podle aktualizované zprávy Fortune se chyby začaly po vydání záplaty široce zneužívat.

## Proč je to důležité?

Je to jeden z nejkonkrétnějších příkladů toho, že umělá inteligence v bezpečnostním výzkumu už není jen pomocníkem, ale může sama objevovat. Stejné nástroje jsou ale i v rukou útočníků a doba mezi vydáním záplaty a začátkem zneužívání se zkracuje. Každý majitel webu na PHP by měl okamžitě aktualizovat server. V širším obraze mohou skryté chyby ve starém kódu internetu, který běží desítky let, vycházet na světlo mnohem rychleji. Příběh prvního programu, který se sám toulal po síti, jsme vyprávěli v [článku o Creeperu](/yazi/creeper-ilk-virus-zararsizdi/).
