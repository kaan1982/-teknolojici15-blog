---
title: "Problema anului 2038: de ce vor reveni unele calculatoare în 1901?"
excerpt: "Timpul Unix pe 32 de biți se va umple pe 19 ianuarie 2038, la 03:14:07 UTC, iar sistemele vechi ar putea crede că e 13 decembrie 1901. Ce este problema anului 2038 și cum se rezolvă?"
hook: "Calculatoarele se vor întoarce în 1901!"
fact: "03:14:07"
factLabel: "19 ianuarie 2038, UTC: limita pe 32 de biți"
category: "Calculatoare"
---
Când am intrat în anul 2000, lumea vorbea despre un bug informatic numit „Y2K”. Acum urmează o altă dată: 19 ianuarie 2038. În ziua aceea, la o secundă după 03:14:07 (UTC), unele calculatoare vechi ar putea să-și întoarcă brusc calendarul în 1901. Nu e un scenariu SF, ci o simplă problemă de matematică.

## Cum numără calculatoarele timpul?

Unix și multe sisteme derivate din el nu păstrează timpul ca pe un ceas sau un calendar, ci ca pe un singur număr. Acest număr reprezintă secundele scurse de la miezul nopții de 1 ianuarie 1970 (UTC). Se numește „timp Unix”.

Problema este că, în multe sisteme vechi, numărul este stocat ca un întreg cu semn pe 32 de biți. Cea mai mare valoare pe care o poate lua un număr cu semn pe 32 de biți este 2.147.483.647, adică 2 la puterea 31 minus 1. Atâtea secunde înseamnă cam 68 de ani. „Cu semn” înseamnă că un bit este rezervat pentru a arăta dacă numărul e pozitiv sau negativ. De aceea nu se folosesc toți cei 32 de biți pentru mărime, ci doar 31.

Dacă adăugăm 68 de ani la 1970, ajungem în 2038. Calculul indică exact 19 ianuarie 2038, 03:14:07 UTC.

## Ce se întâmplă la o secundă după?

La o secundă după ce contorul atinge valoarea maximă, el depășește limita. Gândește-te la vechile kilometraje mecanice ale mașinilor: după 999.999 revin la 000.000. Aici se întâmplă ceva asemănător, dar, fiindcă numărul are semn, valoarea devine un număr negativ foarte mare.

Un sistem afectat interpretează acest număr negativ ca pe secunde numărate înapoi din 1970. Rezultat: data apare ca 13 decembrie 1901, ora 20:45:52 (UTC). Un calculator care s-a întors brusc cu 136 de ani în urmă: certificatele, cronometrele, jurnalele și comparațiile de date pot începe să funcționeze greșit.

> **Știai că?** Problema a apărut în unele programe chiar înainte de 2038. Potrivit Wikipedia, în 2006 software-ul AOLserver a depășit limita din 2038 și s-a blocat, pentru că seta o valoare de expirare cu un miliard de secunde în viitor. Adică orice program care calculează „o dată viitoare” poate atinge limita chiar de pe acum. O limită similară de 32 de biți a creat probleme și în Microsoft Exchange, în 2022: numărul de versiune al unei actualizări a fost citit ca un marcaj de timp, a depășit limita, iar funcțiile de scanare împotriva programelor rău intenționate s-au oprit.

## Cine e în pericol?

Marea majoritate a telefoanelor și calculatoarelor moderne pe care le folosești zilnic folosesc deja valori de timp pe 64 de biți. Riscul real este la sistemele care funcționează ani la rând fără actualizări. Wikipedia pune accent în special pe sistemele vechi (legacy) și pe cele încorporate: dispozitive de control industrial, unele echipamente de rețea, sisteme din autovehicule, adică mașini instalate o dată și apoi uitate.

Cum aceste dispozitive nu se actualizează des, când va veni 2038 s-ar putea ca în ele să mai existe o componentă care numără timpul pe 32 de biți.

| Timp cu semn pe 32 de biți | Timp cu semn pe 64 de biți |
|---|---|
| Valoarea maximă este 2.147.483.647 | Un interval mult mai mare |
| Limita: 19 ianuarie 2038 | Limita: peste aproximativ 292 de miliarde de ani |
| Sisteme vechi și încorporate | Sisteme de operare moderne |

## Soluția: un contor mai mare

Dificultatea de aici este mai degrabă practică decât tehnică. Schimbarea mărimii numărului care ține timpul poate afecta fiecare program care îl folosește, fiecare format de fișier și fiecare câmp din baza de date. Corectarea unei singure linii e simplă; găsirea și actualizarea întregului software dintr-un dispozitiv poate dura ani.

Ideea soluției e simplă: păstrarea timpului ca număr cu semn pe 64 de biți. Potrivit Wikipedia, asta mută momentul depășirii peste aproximativ 292 de miliarde de ani, adică mult dincolo de vârsta actuală a universului.

Tranziția are loc de ani de zile. Conform știrii Phoronix din ianuarie 2020, Linux 5.6 se pregătea să fie prima versiune principală a nucleului care poate pune bazele funcționării sistemelor pe 32 de biți și după 2038. Wikipedia precizează că Linux 5.6, lansat în 2020, a adăugat suport pentru timp pe 64 de biți în arhitecturile pe 32 de biți. Pentru ca asta să funcționeze, aplicațiile trebuie recompilate cu timp pe 64 de biți.

O altă propunere de soluție este transformarea numărului în unul fără semn (unsigned). Dar asta mută limita doar până în 2106 și strică folosirea datelor dinainte de 1970. De aceea, calea reală este considerată trecerea la 64 de biți.

Y2K nu s-a transformat într-o catastrofă pentru că oamenii au muncit din timp; crezi că același eroism discret se va repeta în anii rămași până în 2038?
