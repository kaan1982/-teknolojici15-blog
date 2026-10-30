---
title: "Mistral sprístupnil všetkým váhy modelu Large 4 s 1 biliónom parametrov"
excerpt: "Francúzsky Mistral zverejnil model Large 4 s 1,05 bilióna parametrov ako otvorené váhy na stiahnutie. Cieľom je kybernetická bezpečnosť, ambície má aj v programovaní."
hook: "Otvorený model s 1 biliónom parametrov z Európy"
fact: "1,05 bilióna"
factLabel: "celkový počet parametrov modelu Mistral Large 4"
category: "Správy"
---
Francúzska firma zaoberajúca sa umelou inteligenciou, Mistral, vo štvrtok 29. októbra sprístupnila cez Hugging Face váhy svojho najväčšieho modelu, Mistral Large 4. Model, ktorého ukážka bola začiatkom októbra dostupná len cez API, si teraz môže stiahnuť a prevádzkovať na vlastných serveroch ktorákoľvek firma či štát.

## Čo sa stalo?

Podľa údajov, ktoré uvádza VentureBeat, má model spolu 1,05 bilióna parametrov, no aktívnych je len 52 miliárd: v každom kroku model spúšťa iba malú časť celku. Kontextové okno má 1 milión tokenov. Vie čítať text a obrázky a generuje text. Na jeho trénovanie sa použilo približne 3 800 GPU Nvidia Grace Blackwell.

Mistral model zacieľuje najmä na agentov pre kybernetickú bezpečnosť a programovanie: na vyhľadávanie, analýzu a reakciu na hrozby v kóde a IT infraštruktúre. V indexe nezávislej hodnotiacej organizácie Artificial Analysis získal najvyššie skóre spomedzi modelov s otvorenými váhami vyvinutých mimo Číny. Stále však zaostáva za čínskymi otvorenými modelmi, ako sú DeepSeek a GLM. Licencia nie je úplne voľná: upravená licencia MIT vyžaduje samostatnú komerčnú licenciu od firiem, ktoré model predávajú ako službu.

## Prečo je to dôležité?

Väčšina dnešných najvýkonnejších modelov je dostupná len cez internet a v rozsahu, ktorý firma dovolí. Otvorené váhy znamenajú, že prístup sa už nedá dodatočne odobrať. Pierre Stock, viceprezident Mistralu pre vedu, v rozhovore pre Reuters povedal, že po zverejnení modelu je nemožné obmedziť prístup k nemu. Pre organizácie, ktoré nechcú posielať vlastné dáta von, je to veľká výhoda, no zároveň sa model môže dostať aj do rúk zlomyseľných ľudí. Ide aj o konkrétny krok v európskej diskusii o "suverenite v umelej inteligencii".

## Súvislosť s históriou

Programy, ktoré sa samy potulujú sieťou, aj myšlienka ako ich zastaviť, nie sú nové. Reaper, napísaný na odchytenie programu Creeper, ktorý sa v roku 1971 pohyboval po sieti ARPANET, sa považuje za prvý antivírus. Tento príbeh sme rozpísali v článku [Prvý počítačový "vírus" Creeper nič nezmazal](/yazi/creeper-ilk-virus-zararsizdi/). Dnes sa na kybernetickú obranu píšu modely s biliónom parametrov.
