---
title: "Problém roku 2038: prečo sa niektoré počítače vrátia do roku 1901?"
excerpt: "32-bitový čas Unixu sa naplní 19. januára 2038 o 03:14:07 UTC a staré systémy si môžu myslieť, že je 13. december 1901. Čo je problém roku 2038 a ako sa rieši?"
hook: "Počítače sa vrátia do roku 1901!"
fact: "03:14:07"
factLabel: "19. január 2038, UTC: 32-bitová hranica"
category: "Počítač"
---
Pri vstupe do roku 2000 sa svet bavil o počítačovej chybe zvanej "Y2K". Teraz je na rade iný dátum: 19. január 2038. Keď v ten deň o jednu sekundu prekročí hodiny 03:14:07 (UTC), niektoré staré počítače môžu kalendár zrazu prepnúť na rok 1901. Nie je to sci-fi scenár, ale jednoduchý matematický problém.

## Ako počítače počítajú čas?

Unix a mnohé systémy, ktoré z neho vychádzajú, neuchovávajú čas ako hodiny alebo kalendár, ale ako jediné číslo. Je to počet sekúnd, ktoré uplynuli od polnoci 1. januára 1970 (UTC). Volá sa to "unixový čas".

Problém je v tom, že v mnohých starých systémoch sa toto číslo ukladá ako 32-bitové celé číslo so znamienkom. Najväčšia hodnota, akú môže také číslo mať, je 2 147 483 647, teda 2 na 31 mínus 1. Toľko sekúnd zodpovedá približne 68 rokom. "So znamienkom" znamená, že jeden bit je vyhradený na určenie, či je číslo kladné alebo záporné. Preto sa na veľkosť čísla nepoužíva všetkých 32 bitov, ale len 31.

Keď k roku 1970 pripočítame 68 rokov, dostaneme sa do roku 2038. Výpočet ukazuje presne 19. január 2038, 03:14:07 UTC.

## Čo sa stane o sekundu neskôr?

Sekundu po dosiahnutí najväčšej hodnoty počítadlo pretečie. Predstavte si staré mechanické počítadlá kilometrov v autách: po 999 999 sa vrátia na 000 000. Tu sa stane niečo podobné, ale keďže ide o číslo so znamienkom, hodnota sa zmení na veľmi veľké záporné číslo.

Postihnutý systém si toto záporné číslo vyloží ako sekundy odpočítavané od roku 1970 smerom späť. Výsledok: dátum sa zobrazí ako 13. december 1901, 20:45:52 (UTC). Počítač, ktorý sa zrazu vrátil o 136 rokov späť: certifikáty, časovače, záznamy a porovnávanie dátumov môžu začať fungovať nesprávne.

> **Vedeli ste, že?** Tento problém sa v niektorom softvéri objavil dávno pred rokom 2038. Podľa Wikipédie v roku 2006 softvér AOLserver spadol, pretože nastavil hodnotu časového limitu o miliardu sekúnd dopredu a tým prekročil hranicu roku 2038. Každý program, ktorý počíta "budúci dátum", teda môže na túto hranicu narážať už dnes. Podobná 32-bitová hranica spôsobila v roku 2022 problémy aj v Microsoft Exchange: číslo verzie aktualizácie sa prečítalo ako časová pečiatka, prekročilo hranicu a funkcie na kontrolu škodlivého softvéru prestali fungovať.

## Kto je v ohrození?

Veľká väčšina moderných telefónov a počítačov, ktoré denne používate, už používa 64-bitové časové hodnoty. Skutočné riziko je v systémoch, ktoré dlhé roky bežia bez aktualizácií. Wikipédia zvlášť upozorňuje na staré (legacy) a vstavané systémy: priemyselné riadiace zariadenia, niektoré sieťové zariadenia, systémy v autách, teda stroje, ktoré sa raz nainštalujú a zabudne sa na ne.

Keďže sa tieto zariadenia často neaktualizujú, v čase príchodu roku 2038 v nich môže stále ostať súčiastka, ktorá počíta čas v 32 bitoch.

| 32-bitový čas so znamienkom | 64-bitový čas so znamienkom |
|---|---|
| Najväčšia hodnota 2 147 483 647 | Oveľa väčší rozsah |
| Hranica: 19. január 2038 | Hranica: asi o 292 miliárd rokov |
| Staré a vstavané systémy | Moderné operačné systémy |

## Riešenie: väčšie počítadlo

Ťažkosť nespočíva ani tak v technike, ako v praxi. Zmena veľkosti čísla, ktoré uchováva čas, sa môže dotknúť každého programu, každého formátu súboru a každého poľa v databáze, ktoré toto číslo používa. Opraviť jeden riadok je jednoduché; nájsť a aktualizovať všetok softvér v zariadení však môže trvať roky.

Riešenie je v princípe jednoduché: uchovávať čas ako 64-bitové číslo so znamienkom. Podľa Wikipédie sa tým moment pretečenia posunie asi o 292 miliárd rokov. Teda ďaleko za dnešný vek vesmíru.

Tento prechod prebieha už roky. Podľa správy Phoronixu z januára 2020 sa Linux 5.6 pripravoval ako prvá hlavná verzia jadra, ktorá mohla položiť základ tomu, aby 32-bitové systémy fungovali aj po roku 2038. Wikipédia uvádza, že Linux 5.6, vydaný v roku 2020, pridal podporu 64-bitového času na 32-bitových architektúrach. Aby to fungovalo, treba aplikácie prekompilovať s 64-bitovým časom.

Ďalším navrhovaným riešením je urobiť číslo bez znamienka (unsigned). To však posúva hranicu iba do roku 2106 a pokazí používanie dátumov pred rokom 1970. Preto sa za skutočnú cestu považuje prechod na 64 bitov.

Y2K sa nezmenilo na veľkú katastrofu, pretože ľudia pracovali dopredu; myslíte si, že sa to tiché hrdinstvo zopakuje aj v rokoch, ktoré zostávajú do 2038?
