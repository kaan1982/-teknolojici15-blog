---
title: "Calculatorul de pe Apollo 11: ce înseamnă de fapt „4 KB de memorie”?"
excerpt: "Calculatorul care a coborât Apollo 11 pe Lună avea cam 4 KB de RAM. Programele erau într-un ROM de aproximativ 72 KB, țesut cu firul."
hook: "Au aterizat pe Lună cu 4 KB de RAM"
fact: "4 KB"
factLabel: "Memoria ștergibilă (RAM) a AGC"
category: "Calculatoare"
---
Sigur ai auzit fraza: „Memoria calculatorului care a mers pe Lună era mai mică decât o fotografie”. Și noi am spus „4 KB” în videoclip. Cifra e corectă, dar singură rămâne incompletă. Pentru că Apollo Guidance Computer (AGC) avea de fapt două memorii diferite, iar „4 KB” o descrie doar pe cea mică.

Hai să desfacem împreună această cifră celebră.

## Ce înseamnă exact „4 KB”?

Memoria de lucru a AGC, adică memoria ștergibilă pe care azi am numi-o RAM, avea 2.048 de „cuvinte”. Fiecare cuvânt avea 16 biți: 15 biți de date și 1 bit de paritate pentru verificarea erorilor. Dacă socotim un cuvânt ca 2 octeți, cele 2.048 de cuvinte fac aproximativ 4 KB. Deci „4 KB” este dimensiunea ciornei pe care calculatorul o folosea la calcule în timpul zborului.

Programele nu stăteau în această memorie. Acolo se țineau poziția și viteza de moment, contoarele și rezultatele intermediare care treceau de la o sarcină la alta. Memoria era făcută din inelușe minuscule numite miezuri magnetice (core) și își păstra conținutul chiar dacă se oprea curentul.

Programele erau în cu totul alt loc: în memoria fixă de 36.864 de cuvinte, adică în ROM. Cu același calcul, asta înseamnă aproximativ 72 KB. Pe scurt, propoziția mai corectă este: Apollo 11 a aterizat pe Lună cu aproximativ 4 KB de RAM și aproximativ 72 KB de ROM.

## Programele erau țesute

ROM-ul AGC era o memorie „core rope” (frânghie de miezuri) și era, la propriu, țesut de mână. Dacă un fir trecea printr-un miez magnetic, bitul era 1; dacă ocolea miezul, era 0. Adică software-ul era transformat în hardware prin țesere, ca un material textil.

Treaba a fost făcută de angajații Raytheon din Waltham, Massachusetts. Potrivit analizei detaliate a lui Ken Shirriff, o mare parte dintre cei angajați erau femei venite din industria textilă locală, datorită îndemânării la cusut. Țeserea unui singur modul dura aproximativ 8 săptămâni și costa 15.000 de dolari. Fiecare modul păstra 6 mii de cuvinte, iar șase module formau în total 36.864 de cuvinte.

Consecința era importantă: software-ul trebuia înghețat cu luni înainte de zbor. Nu exista „patch de ultim moment”, pentru că repararea unei greșeli însemna să țeși din nou.

> **Știai că?** Pe Apollo 11 nu era un singur AGC, ci două: unul în Modulul de Comandă și altul în Modulul Lunar. Fiecare cântărea aproximativ 32 kg și funcționa cu un ceas cu cristal de 2,048 MHz.

## Alarma de cu câteva minute înainte de aterizare

În timpul coborârii din 20 iulie 1969, calculatorul Modulului Lunar a afișat mai întâi alarma 1202, apoi 1201. Ambele însemnau „depășirea executivului”: calculatorului i se dădea mai multă muncă decât putea duce. Potrivit relatării detaliate din Wikipedia, cauza erau semnalele false ale radarului de întâlnire, lăsat în așteptare, care ocupau procesorul. Problema nu a fost o greșeală de programare, nici o greșeală de pilotaj, nici o defecțiune hardware. În esență, a pornit de la un defect din documentul de interfață dintre două sisteme.

Partea cu adevărat interesantă este ce a făcut software-ul în acea situație. AGC lucra cu un planificator bazat pe priorități. La supraîncărcare s-a repornit rapid, a abandonat sarcinile cu prioritate mică și a continuat sarcinile critice, cum ar fi conducerea coborârii. Adică celebra memorie mică a fost suficientă tocmai pentru că a fost gestionată inteligent.

Mai era un detaliu care a complicat lucrurile. Comanda 1668, introdusă de Buzz Aldrin în calculator în timpul coborârii, a adus o încărcare suplimentară procesorului deja în dificultate și a declanșat încă o alarmă 1202. Software-ul a trecut și peste aceasta în același fel, iar Vulturul (Eagle) a aterizat pe suprafața Lunii.

Software-ul a fost dezvoltat la Laboratorul de Instrumentație al MIT. Software-ul Modulului de Comandă (COLOSSUS) și cel al Modulului Lunar (LUMINARY) au fost realizate de echipe diferite. Punerea detaliilor în practică a fost în grija echipei conduse de Margaret Hamilton.

## Atunci / acum

| Apollo Guidance Computer (1969) | Telefonul mobil de azi |
|---|---|
| Aproximativ 4 KB de memorie ștergibilă (RAM) | Gigaocteți de RAM |
| Aproximativ 72 KB, ROM țesut de mână | Sute de gigaocteți de stocare |
| Luni de țesut pentru o actualizare de software | Actualizări care se instalează singure noaptea |
| Aproximativ 32 kg | Încape în palmă |

## Adevărata lecție a cifrei

Cifra „4 KB” este adesea povestită ca „vezi cât de primitiv era”. În realitate, esența poveștii e exact opusă: memoria limitată i-a obligat pe ingineri să dea socoteală pentru fiecare bit. De aceea s-a născut un software care prioritizează sarcinile și se reface singur sub supraîncărcare.

Dispozitivele din buzunarele noastre au azi incomparabil mai multă memorie, dar majoritatea aplicațiilor nu sunt scrise cu atâta grijă. Chiar și o singură actualizare a unei aplicații de mesagerie poate fi de multe ori mai mare decât tot software-ul Apollo.

Tu ce crezi, limitele formează ingineri mai buni sau abundența?
