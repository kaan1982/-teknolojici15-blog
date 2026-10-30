---
title: "Počítač z Apolla 11: co ve skutečnosti znamená „4 KB paměti“?"
excerpt: "Počítač, který dopravil Apollo 11 na Měsíc, měl asi 4 KB RAM. Programy ležely v zhruba 72 KB velké paměti ROM, která byla doslova utkaná."
hook: "Na Měsíc přistáli se 4 KB RAM"
fact: "4 KB"
factLabel: "Mazatelná paměť (RAM) počítače AGC"
category: "Počítače"
---
Určitě jsi už slyšel větu „paměť počítače, který letěl na Měsíc, byla menší než jediná fotka“. Ve videu jsme řekli také „4 KB“. Ta hodnota je správná, ale sama o sobě je neúplná. Naváděcí počítač Apolla (Apollo Guidance Computer, zkráceně AGC) měl totiž ve skutečnosti dvě oddělené paměti a „4 KB“ popisuje jen tu menší z nich.

Pojďme si tohle slavné číslo společně rozebrat.

## Co přesně znamená „4 KB“?

Pracovní paměť AGC, tedy mazatelná paměť, které bychom dnes říkali RAM, se skládala z 2 048 „slov“. Každé slovo bylo dlouhé 16 bitů: 15 bitů dat a 1 paritní bit pro kontrolu chyb. Když jedno slovo počítáme za 2 bajty, vychází 2 048 slov na zhruba 4 KB. „4 KB“ je tedy velikost poznámkového bloku, na který počítač za letu počítal.

Programy v této paměti neležely. Držela se v ní okamžitá poloha, rychlost, počítadla a mezivýsledky přenášené mezi úlohami. Paměť byla postavena z drobných prstenců zvaných magnetická jádra (core) a obsah si uchovala i po přerušení napájení.

Programy byly na úplně jiném místě: v pevné paměti o 36 864 slovech, tedy v ROM. Stejným výpočtem to vychází na zhruba 72 KB. Přesnější věta tedy zní: Apollo 11 přistálo na Měsíci s asi 4 KB RAM a asi 72 KB ROM.

## Programy byly utkané

ROM počítače AGC byla paměť typu „core rope“ (jádrové lano) a doslova se pletla ručně. Pokud drát procházel magnetickým jádrem, byl daný bit 1, pokud ho obešel, byl 0. Software se tedy do hardwaru převáděl tkaním jako látka.

Tuto práci dělali zaměstnanci firmy Raytheon ve Walthamu v Massachusetts. Podle podrobného rozboru Kena Shirriffa tvořily významnou část najatých ženy z místního textilního průmyslu, protože uměly šít. Utkání jednoho modulu trvalo asi 8 týdnů a stálo 15 000 dolarů. Každý modul pojal 6 tisíc slov a šest modulů dohromady tvořilo celkem 36 864 slov.

Mělo to důležitý vedlejší účinek: software se musel zmrazit měsíce před letem. Žádné záplaty na poslední chvíli neexistovaly, protože oprava chyby znamenala utkat vše znovu.

> **Věděl jsi?** V Apollu 11 nebyl jeden AGC, ale dva: jeden ve velitelském modulu a druhý v lunárním modulu. Každý vážil asi 32 kg a běžel na krystalové hodiny o frekvenci 2,048 MHz.

## Alarm, který zazněl minuty před přistáním

Při přistání 20. července 1969 vydal počítač lunárního modulu na displeji nejprve alarm 1202 a potom 1201. Oba znamenaly „přetečení exekutivy“: počítač dostal víc práce, než unesl. Podle podrobného popisu na Wikipedii způsobily problém falešné signály z radaru pro setkání na orbitě, který byl ponechán v pohotovosti a zaměstnával procesor. Nešlo o chybu v programování ani o chybu pilota či poruchu hardwaru. V jádru vznikl z nedostatku v dokumentu popisujícím rozhraní mezi dvěma systémy.

Zajímavé je, co software v takové situaci udělal. AGC pracoval s plánovačem založeným na prioritách. Při přetížení se rychle restartoval, zahodil úlohy s nízkou prioritou a pokračoval v kritických úkolech, jako bylo řízení přistání. Ta slavná malá paměť tedy stačila, protože se s ní chytře hospodařilo.

Situaci ztížil ještě jeden detail. Příkaz 1668, který Buzz Aldrin během přistání zadal do počítače, zatížil už tak vytížený procesor navíc a spustil další alarm 1202. Software to zvládl stejným způsobem a Orel (Eagle) dosedl na povrch Měsíce.

Software vznikl v Přístrojové laboratoři MIT. Software velitelského modulu (COLOSSUS) a software lunárního modulu (LUMINARY) vyvíjely různé týmy. Realizaci podrobností vedl tým pod vedením Margaret Hamiltonové.

## Tehdy a dnes

| Naváděcí počítač Apolla (1969) | Dnešní mobilní telefon |
|---|---|
| Asi 4 KB mazatelné paměti (RAM) | Gigabajty RAM |
| Asi 72 KB ručně utkané ROM | Stovky gigabajtů úložiště |
| Aktualizace softwaru znamenala měsíce tkaní | Aktualizace, které se stáhnou samy v noci |
| Asi 32 kg | Vejde se do dlaně |

## Skutečné ponaučení z toho čísla

Číslo „4 KB“ se často vypráví ve smyslu „koukej, jak to bylo primitivní“. Jádro příběhu je ale přesně opačné: omezená paměť nutila inženýry počítat s každým bitem. Právě proto vznikl software, který určoval priority úloh a při přetížení se dokázal dát dohromady.

Dnešní zařízení v kapsách mají nesrovnatelně víc paměti, ale většina aplikací se nepíše tak pečlivě. Jediná aktualizace chatovací aplikace může být mnohonásobně větší než veškerý software Apolla.

Myslíš si, že lepší inženýry vychovávají omezení, nebo hojnost?
