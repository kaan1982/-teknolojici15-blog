---
title: "Problem 2038.: zašto će se neka računala vratiti u 1901.?"
excerpt: "32-bitno Unixovo vrijeme istječe 19. siječnja 2038. u 03:14:07 UTC, a stariji sustavi mogli bi pomisliti da je 13. prosinca 1901. Što je problem 2038. i kako se rješava?"
hook: "Računala će se vratiti u 1901.!"
fact: "03:14:07"
factLabel: "19. siječnja 2038., UTC: 32-bitna granica"
category: "Računala"
---
Pri ulasku u 2000. godinu svijet je govorio o računalnoj grešci zvanoj "Y2K". Sada je na redu drugi datum: 19. siječnja 2038. Kad toga dana sat prijeđe 03:14:07 (UTC) za jednu sekundu, neka stara računala mogla bi kalendar odjednom prebaciti u 1901. To nije znanstvenofantastični scenarij, nego jednostavan matematički problem.

## Kako računala broje vrijeme?

Unix i mnogi sustavi koji su iz njega nastali vrijeme ne čuvaju kao sat ili kalendar, nego kao jedan jedini broj. Taj broj je količina sekundi proteklih od ponoći 1. siječnja 1970. (UTC). To se zove "Unixovo vrijeme".

Problem je u tome što se taj broj u mnogim starim sustavima pohranjuje kao 32-bitni cijeli broj s predznakom. Najveća vrijednost koju takav broj može poprimiti je 2.147.483.647, odnosno 2 na 31. minus 1. Toliko sekundi odgovara otprilike 68 godina. "S predznakom" znači da je jedan bit rezerviran za oznaku je li broj pozitivan ili negativan. Zato se za veličinu broja ne koristi svih 32 bita, nego 31.

Kad 1970. dodamo 68 godina, stižemo u 2038. Račun pokazuje točno 19. siječnja 2038., 03:14:07 UTC.

## Što će se dogoditi sekundu poslije?

Sekundu nakon što brojač dosegne najveću vrijednost, on se preljeva. Sjeti se starih mehaničkih brojača kilometara u autima: nakon 999.999 vraćaju se na 000.000. Ovdje se događa nešto slično, ali budući da je broj s predznakom, vrijednost skače na vrlo veliki negativan broj.

Pogođeni sustav taj negativni broj tumači kao sekunde brojene unatrag od 1970. Rezultat: datum se prikazuje kao 13. prosinca 1901., 20:45:52 (UTC). Računalo koje je odjednom skočilo 136 godina unatrag može početi griješiti u radu s certifikatima, mjeračima vremena, zapisima i usporedbama datuma.

> **Jesi li znao?** Ovaj se problem u nekim programima pojavio i prije 2038. Prema Wikipediji, softver AOLserver srušio se 2006. jer je vrijednost isteka vremena postavio milijardu sekundi unaprijed i tako prešao granicu iz 2038. Dakle, svaki program koji računa "neki budući datum" na tu granicu može naletjeti već danas. Slična 32-bitna granica 2022. je napravila probleme i u programu Microsoft Exchange: broj verzije jedne nadogradnje pročitan je kao vremenska oznaka i prešao granicu, pa su prestale raditi funkcije skeniranja zlonamjernog softvera.

## Tko je u opasnosti?

Velika većina modernih telefona i računala koje svakodnevno koristiš danas koristi 64-bitne vrijednosti vremena. Pravi rizik leži u sustavima koji godinama rade bez ažuriranja. Wikipedia posebno ističe starije (legacy) i ugrađene sustave: industrijske upravljačke uređaje, neke mrežne uređaje, sustave u vozilima, odnosno strojeve koji se jednom instaliraju i zaborave.

Budući da se takvi uređaji ne ažuriraju često, kad dođe 2038. u njima bi još uvijek mogao ostati dio koji broji vrijeme u 32 bita.

| 32-bitno vrijeme s predznakom | 64-bitno vrijeme s predznakom |
|---|---|
| Najveća vrijednost 2.147.483.647 | Mnogo veći raspon |
| Granica: 19. siječnja 2038. | Granica: oko 292 milijarde godina poslije |
| Stari i ugrađeni sustavi | Moderni operacijski sustavi |

## Rješenje: veći brojač

Teškoća je tu više praktična nego tehnička. Promjena veličine broja koji čuva vrijeme može utjecati na svaki program koji taj broj koristi, na svaki format datoteke i na svako polje baze podataka. Ispraviti jedan redak je lako, ali pronaći i ažurirati sav softver unutar jednog uređaja može trajati godinama.

Rješenje je u ideji jednostavno: čuvati vrijeme kao 64-bitni broj s predznakom. Prema Wikipediji, to pomiče trenutak preljeva za otprilike 292 milijarde godina. Dakle, daleko iza današnje starosti svemira.

Taj prijelaz traje već godinama. Prema Phoronixovoj vijesti iz siječnja 2020., Linux 5.6 pripremao se kao prva glavna verzija jezgre koja bi mogla postaviti temelj da 32-bitni sustavi rade i nakon 2038. Wikipedia navodi da je Linux 5.6, izdan 2020., dodao podršku za 64-bitno vrijeme na 32-bitnim arhitekturama. Da bi to zaista djelovalo, aplikacije se moraju ponovno prevesti s 64-bitnim vremenom.

Drugi prijedlog je da broj postane bez predznaka (unsigned). No to granicu pomiče samo do 2106. i kvari rad s datumima prije 1970. Zato se pravim putem smatra prelazak na 64 bita.

Y2K nije postao velika katastrofa jer su ljudi radili unaprijed. Misliš li da će se ista tiha hrabrost ponoviti u godinama koje su ostale do 2038.?
