---
title: "Prima parolă de calculator a fost furată chiar în primul an"
excerpt: "Sistemul CTSS al MIT a adus parola în calculator. La scurt timp, un doctorand a scos toate parolele la imprimantă. Prima parolă și prima ei poveste de hacking."
hook: "Prima parolă a fost și prima spartă"
fact: "1962"
factLabel: "Primul furt de parole cunoscut"
category: "Premiere"
---
Parola pe care o scrii de zeci de ori pe zi are un loc de naștere: un singur calculator uriaș de la MIT, la începutul anilor 1960. Și mai interesant este că primele parole de calculator cunoscute din lume au fost furate în bloc la scurt timp după ce au început să fie folosite. Și nu de o bandă de hackeri, ci de un doctorand care voia mai multe ore de calculator.

## Un calculator, zeci de utilizatori

La începutul anilor 1960, calculatoarele erau mașini care umpleau camere și făceau o singură lucrare o dată. Îți perforai programul pe cartele, îl puneai la coadă și primeai rezultatul peste ore. La MIT, echipa lui Fernando Corbató a vrut să schimbe asta: un sistem în care aceeași mașină să poată fi folosită simultan de mai multe persoane, de la terminale, adică „time-sharing” (partajarea timpului).

Sistemul s-a numit CTSS (Compatible Time-Sharing System). A fost demonstrat pentru prima dată în noiembrie 1961 pe un IBM 709 modificat al MIT, iar în anii următori a rulat pe IBM 7094. Așa cum relatează și Wikipedia, CTSS este considerat primul sistem de calculator care a implementat autentificarea cu parolă.

## De ce era nevoie de parolă?

Problema era simplă: pe aceeași mașină, zeci de persoane aveau fișiere și timp de calcul alocat. Era nevoie de o cale de a distinge cine este cine. Corbató a povestit ani mai târziu pentru Wired că a pune câte o parolă drept lacăt fiecărui utilizator păruse o „soluție foarte simplă”.

Corbató a fost prudent și în a se declara „primul”. A spus că sistemul de rezervări Sabre al IBM din 1960 folosea probabil și el parole, dar, fiindcă nu s-au păstrat înregistrări, nu se știe nimic sigur. Și despre anul exact în care au fost adăugate parolele în CTSS, sursele spun lucruri diferite. Ce știm este că în primăvara lui 1962 sistemul de parole funcționa, pentru că în acea primăvară a fost furat.

## Planul de vineri seara al lui Allan Scherr

Allan Scherr era cercetător, doctorand la MIT, și rula simulări complexe. Potrivit Wired, pe CTSS i se alocaseră doar patru ore pe săptămână (unele surse spun patru ore pe zi). Timpul acesta nu-i ajungea.

Soluția lui a fost isteață, dar și pe măsură de năstrușnică. Folosind funcția sistemului de tipărire offline a fișierelor, a pregătit o cartelă care cerea tipărirea fișierului cu parole. A pus cartela la coadă vineri noaptea târziu, a venit sâmbătă dimineața devreme și a luat tipăritura. Avea acum parolele tuturor din sistem.

Ca să-și acopere urmele, a dat parolele și altor utilizatori. Potrivit Wired, unul dintre aceștia, J.C.R. Licklider, a intrat în contul directorului laboratorului, Robert Fano, și a lăsat mesaje ironice. Scherr nu a fost niciodată prins, iar după aproape un sfert de secol de la întâmplare i-a mărturisit personal lui Fano. Fano i-a dat asigurări că titlul de doctor nu i se va retrage.

> **Știai că?** Aceasta nu a fost singura criză a parolelor din CTSS. În 1966, din cauza unei greșeli a unui administrator, fișierul de parole și fișierul „mesajul zilei” au fost schimbate între ele, iar toți cei care se autentificau vedeau pe ecran, în clar, toate parolele. Potrivit dezvoltatorului de sistem Tom Van Vleck, acest incident a fost punctul de pornire al ideei de a stoca parolele criptate într-un singur sens. Desigur, incidentul s-a petrecut vineri seara la ora cinci, iar Van Vleck a fost nevoit să schimbe parole ore în șir.

## Atunci și acum

| Atunci (anii 1960) | Acum |
|---|---|
| Parole în text clar, într-un singur fișier | Parole stocate ca hash (rezumat într-un singur sens) |
| O singură cartelă era de ajuns pentru a obține o tipăritură | Jurnale de acces, straturi de autorizare |
| Scop: partajarea orelor de calculator | Scop: protejarea identității, banilor, datelor personale |
| O mașină, un campus | Zeci de conturi de persoană |

Motivul pentru care povestea este instructivă și azi este acesta: parola, de la ziua în care a fost inventată, este pusă la încercare de comportamentul uman. Scherr nu a făcut un atac complex pentru a sparge sistemul, ci a folosit într-un mod neașteptat o funcție pe care sistemul o oferea deja. O parte importantă a scurgerilor de azi pornește tot din greșeli simple.

Corbató a primit în 1990 Premiul Turing pentru munca sa în domeniul time-sharing. Lacătul pe care echipa lui l-a adăugat ca „soluție simplă” stă astăzi la fiecare ușă, de la e-mailul tău până la bancă, iar veriga cea mai slabă este, în continuare, adesea omul care folosește acel lacăt.

Crezi că suntem pregătiți să renunțăm complet la parole și să trecem în întregime la biometrie sau la chei de acces (passkey)?
