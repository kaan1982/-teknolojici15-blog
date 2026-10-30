---
title: "Počítač Apolla 11: čo naozaj znamená \"4 KB pamäte\"?"
excerpt: "Počítač, ktorý pristál s Apollom 11 na Mesiaci, mal približne 4 KB RAM. Programy boli uložené v zhruba 72 KB ROM, utkanej z drôtu."
hook: "Na Mesiac pristáli so 4 KB RAM"
fact: "4 KB"
factLabel: "premazateľná pamäť AGC (RAM)"
category: "Počítač"
---
Určite ste už počuli vetu "pamäť počítača, ktorý letel na Mesiac, bola menšia než jedna fotka". Aj my sme vo videu povedali "4 KB". Toto číslo je pravdivé, ale samo osebe je neúplné. Apollo Guidance Computer (AGC) mal totiž v skutočnosti dve oddelené pamäte a "4 KB" popisuje len tú menšiu z nich.

Pozrime sa spolu, čo za týmto slávnym číslom je.

## Čo presne znamená "4 KB"?

Pracovná pamäť AGC, teda premazateľná pamäť, ktorú by sme dnes nazvali RAM, pozostávala z 2 048 "slov". Každé slovo bolo dlhé 16 bitov: 15 bitov dát a 1 bit parity na kontrolu chýb. Ak jedno slovo počítame ako 2 bajty, 2 048 slov je približne 4 KB. "4 KB" je teda veľkosť zápisníka, ktorý počítač používal na výpočty počas letu.

Programy v tejto pamäti neboli. Uchovávala sa v nej aktuálna poloha, rýchlosť, počítadlá a medzivýsledky prenášané medzi úlohami. Pamäť bola zložená z drobných prstencov, tzv. magnetických jadier (core), a obsah si udržala aj po výpadku prúdu.

Programy boli celkom inde: v pevnej pamäti s 36 864 slovami, teda v ROM. Rovnakým výpočtom je to približne 72 KB. Presnejšie povedané: Apollo 11 pristálo na Mesiaci s približne 4 KB RAM a približne 72 KB ROM.

## Programy boli utkané z lanka

ROM počítača AGC bola pamäť "core rope" (jadrové lanko) a doslova sa tkala ručne. Ak drôt prechádzal cez magnetické jadro, bol ten bit 1, ak ho obišiel, bol 0. Softvér sa teda do hardvéru premieňal tkaním ako látka.

Túto prácu robili zamestnanci firmy Raytheon vo Walthame v Massachusetts. Podľa podrobného rozboru Kena Shirriffa išlo u značnej časti prijatých o ženy z miestneho textilného odvetvia, ktoré boli vybrané pre svoje šijacie zručnosti. Utkať jediný modul trvalo asi 8 týždňov a stálo 15 000 dolárov. Každý modul pojal 6 tisíc slov a šesť modulov dohromady tvorilo 36 864 slov.

Vedľajší účinok bol zásadný: softvér sa musel zmraziť mesiace pred letom. Žiadna záplata na poslednú chvíľu neexistovala, pretože oprava chyby znamenala tkať odznova.

> **Vedeli ste?** Apollo 11 nemalo jeden AGC, ale dva: jeden vo veliteľskom module a druhý v lunárnom module. Každý vážil približne 32 kg a bežal na kremennom oscilátore s frekvenciou 2,048 MHz.

## Alarm, ktorý zazvonil minúty pred pristátím

Počas pristávania 20. júla 1969 vydal počítač lunárneho modulu na displeji najprv alarm 1202 a potom 1201. Obidva znamenali "pretečenie exekútora": počítaču sa zadalo viac práce, než zvládal. Podľa podrobného opisu na Wikipédii bola príčinou to, že falošné signály z rendezvous radaru, ktorý bol v pohotovostnom režime, zamestnávali procesor. Nešlo ani o chybu v programovaní, ani o chybu pilota, ani o poruchu hardvéru. V podstate vznikla z nedostatku v dokumentácii rozhrania medzi dvoma systémami.

Najzaujímavejšie je, čo softvér v tejto situácii urobil. AGC fungoval s plánovačom založeným na prioritách. Pri preťažení sa rýchlo reštartoval, zahodil úlohy s nízkou prioritou a pokračoval v kritických úlohách, ako je riadenie pristátia. Teda tá slávna malá pamäť stačila, pretože sa s ňou múdro hospodárilo.

Situáciu ešte skomplikoval jeden detail. Príkaz 1668, ktorý Buzz Aldrin počas pristávania zadal do počítača, pridal ďalšiu záťaž už aj tak namáhanému procesoru a spustil ďalší alarm 1202. Softvér to zvládol rovnakým spôsobom a Eagle pristál na povrchu Mesiaca.

Softvér vyvinuli v Prístrojovom laboratóriu MIT. Softvér veliteľského modulu (COLOSSUS) a softvér lunárneho modulu (LUMINARY) viedli rôzne tímy. Za uvedenie detailov do praxe zodpovedal tím, ktorý viedla Margaret Hamiltonová.

## Vtedy / dnes

| Apollo Guidance Computer (1969) | Dnešný mobilný telefón |
|---|---|
| Približne 4 KB premazateľnej pamäte (RAM) | Gigabajty RAM |
| Približne 72 KB ručne utkanej ROM | Stovky gigabajtov úložiska |
| Aktualizácia softvéru znamenala mesiace tkania | Aktualizácie, ktoré sa samy stiahnu cez noc |
| Približne 32 kg | Zmestí sa do dlane |

## Skutočné poučenie z tohto čísla

Číslo "4 KB" sa často rozpráva ako "pozrite, aké to bolo primitívne". Jadro príbehu je však opačné: obmedzená pamäť nútila inžinierov zodpovedať za každý bit. Preto vznikol softvér, ktorý priraďoval úlohám priority a pri preťažení sa dokázal zotaviť.

Zariadenia v našich vreckách majú nezrovnateľne viac pamäte, ale väčšina aplikácií sa nepíše s takou starostlivosťou. Aj jediná aktualizácia komunikačnej aplikácie môže byť mnohonásobne väčšia než celý softvér Apolla.

Čo myslíte, vychová lepších inžinierov nedostatok, alebo hojnosť?
