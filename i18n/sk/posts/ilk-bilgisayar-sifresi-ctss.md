---
title: "Prvé počítačové heslo ukradli už v prvom roku"
excerpt: "Systém CTSS z MIT priniesol heslo do počítača. Krátko nato doktorand vytlačil všetky heslá na tlačiarni. Príbeh prvého hesla a prvého hackerského činu."
hook: "Prvé heslo bolo prvé, ktoré hackli"
fact: "1962"
factLabel: "Prvá známa krádež hesiel"
category: "Prvé"
---
Heslo, ktoré napíšete denne desiatky krát, má miesto narodenia: jeden obrovský počítač na MIT na začiatku 60. rokov. Ešte zaujímavejšie je, že úplne prvé známe počítačové heslá boli krátko po zavedení hromadne ukradnuté. A to nie bandou hackerov, ale doktorandom, ktorý chcel viac počítačového času.

## Jeden počítač, desiatky používateľov

Na začiatku 60. rokov boli počítače stroje, ktoré zapĺňali miestnosti a robili naraz jednu prácu. Program ste vyrazili na dierne štítky, zaradili do poradia a výsledok ste dostali o niekoľko hodín. Tím Fernanda Corbatóa na MIT to chcel zmeniť: systém, v ktorom môže ten istý stroj súčasne používať mnoho ľudí z terminálov, teda "zdieľanie času".

Tento systém dostal názov CTSS (Compatible Time-Sharing System). Prvýkrát bol predvedený v novembri 1961 na upravenom počítači IBM 709 na MIT a v nasledujúcich rokoch bežal na strojoch IBM 7094. Ako uvádza aj Wikipédia, CTSS sa považuje za prvý počítačový systém, ktorý zaviedol prihlasovanie pomocou hesla.

## Prečo bolo potrebné heslo?

Problém bol jednoduchý: na jednom stroji mali desiatky ľudí svoje súbory a pridelený počítačový čas. Bolo treba spôsob, ako rozlíšiť, kto je kto. Corbató to po rokoch opísal pre Wired tak, že dať každému používateľovi heslo ako zámok sa zdalo ako "veľmi jednoduché riešenie".

Corbató bol opatrný aj pri vyhlasovaní, že ide o "prvé". Povedal, že rezervačný systém Sabre od IBM z roku 1960 pravdepodobne tiež používal heslá, ale keďže sa o tom nezachoval záznam, nič isté sa nevie. Aj o tom, v ktorom roku presne boli heslá do CTSS pridané, zdroje uvádzajú rôzne veci. Vieme toto: na jar 1962 heslový systém fungoval, pretože na jar boli heslá ukradnuté.

## Piatkový nočný plán Allana Scherra

Allan Scherr bol výskumník s doktorandským štúdiom na MIT a spúšťal zložité simulácie. Podľa Wired mu bolo v CTSS pridelených len štyri hodiny týždenne (niektoré zdroje hovoria o štyroch hodinách denne). Tento čas mu nestačil.

Jeho riešenie bolo vtipné, ale aj zlomyseľné. Využil funkciu offline tlače súborov systému a pripravil dierny štítok, ktorý žiadal výtlačok súboru s heslami. Štítok zaradil neskoro v piatok večer, v sobotu skoro ráno prišiel a výtlačok si vzal. Mal teraz heslá všetkých ľudí v systéme.

Aby zahladil stopy, podelil sa o heslá aj s inými používateľmi. Podľa Wired jeden z nich vstúpil do účtu riaditeľa laboratória Roberta Fana (J.C.R. Licklider) a nechal tam posmešné správy. Scherr nebol nikdy prichytený a približne štvrťstoročie po udalosti sa osobne Fanovi priznal. Fano ho ubezpečil, že mu doktorát nebude odobratý.

> **Vedeli ste?** Toto nebola jediná heslová kríza v CTSS. V roku 1966 sa kvôli chybe správcu vymenili súbor s heslami a súbor so "správou dňa", takže každý, kto sa prihlásil, videl na obrazovke všetky heslá. Podľa vývojára systému Toma Van Vlecka bola táto udalosť východiskom myšlienky uchovávať heslá jednosmerne zašifrované. Samozrejme, udalosť sa stala v piatok o piatej popoludní a Van Vleck musel hodiny meniť heslá.

## Vtedy a dnes

| Vtedy (60. roky) | Dnes |
|---|---|
| Heslá ako čistý text v jedinom súbore | Jednosmerne zahašované (hash) heslá |
| Na výtlačok stačil jeden dierny štítok | Záznamy o prístupe, vrstvy oprávnení |
| Cieľ: rozdeliť počítačový čas | Cieľ: chrániť identitu, peniaze, osobné údaje |
| Jeden stroj, jeden kampus | Desiatky účtov na osobu |

Tento príbeh je poučný dodnes z tohto dôvodu: heslo sa od svojho vynájdenia testuje ľudským správaním. Scherr nepoužil na prelomenie systému zložitý útok, len neočakávane využil funkciu, ktorú systém sám ponúkal. Aj významná časť dnešných únikov dát vzniká z podobne jednoduchých chýb.

Corbató získal v roku 1990 Turingovu cenu za svoju prácu v oblasti zdieľania času. Zámok, ktorý jeho tím pridal ako "jednoduché riešenie", stojí dnes pri každých dverách, od e-mailu po banku, a najslabším článkom je často človek, ktorý ten zámok používa.

Sme podľa vás už pripravení heslá úplne opustiť a prejsť výlučne na biometriu alebo prístupové kľúče (passkey)?
