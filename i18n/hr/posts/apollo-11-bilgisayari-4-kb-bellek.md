---
title: "Računalo Apolla 11: što \"4 KB memorije\" zapravo znači?"
excerpt: "Računalo koje je Apollo 11 spustilo na Mjesec imalo je oko 4 KB RAM-a. Programi su bili u ROM-u od oko 72 KB, utkani u žicu."
hook: "Na Mjesec su sletjeli s 4 KB RAM-a"
fact: "4 KB"
factLabel: "Izbrisiva memorija (RAM) računala AGC"
category: "Računala"
---
Sigurno si čuo rečenicu "računalo koje je išlo na Mjesec imalo je manje memorije od jedne fotografije". U videu smo i mi rekli "4 KB". Ta je brojka točna, ali sama po sebi nepotpuna. Jer Apollo Guidance Computer (skraćeno AGC) zapravo je imao dvije odvojene memorije, a "4 KB" opisuje samo manju od njih.

Hajde da zajedno otvorimo tu poznatu brojku.

## Što točno znači "4 KB"?

Radna memorija računala AGC, odnosno izbrisiva memorija koju danas zovemo RAM, sastojala se od 2.048 "riječi". Svaka je riječ bila duga 16 bita: 15 bitova podataka i 1 bit pariteta za otkrivanje grešaka. Ako jednu riječ računamo kao 2 bajta, 2.048 riječi daje otprilike 4 KB. Dakle, "4 KB" je veličina bilježnice koju je računalo koristilo za računanje tijekom leta.

Programi nisu bili u toj memoriji. Tamo su se čuvali trenutni položaj, brzina, brojači i međurezultati koji su se prenosili između zadataka. Memorija je bila izrađena od sićušnih prstenova zvanih magnetske jezgre (core) i zadržavala je sadržaj čak i kad nestane struje.

Programi su bili na sasvim drugom mjestu: u stalnoj memoriji od 36.864 riječi, dakle u ROM-u. Istim računom to je oko 72 KB. Ukratko, točnija rečenica glasi: Apollo 11 sletio je na Mjesec s oko 4 KB RAM-a i oko 72 KB ROM-a.

## Programi su bili utkani

ROM računala AGC bila je memorija "core rope" (užad od jezgara) i doslovno se ručno tkala. Ako je žica prolazila kroz magnetsku jezgru, taj bit je bio 1, a ako je obilazila jezgru, bio je 0. Softver se dakle pretvarao u hardver tkanjem, poput tkanine.

Taj su posao u Walthamu u Massachusettsu obavljali zaposlenici tvrtke Raytheon. Prema detaljnoj analizi Kena Shirriffa, znatan dio zaposlenih bile su žene iz lokalne tekstilne industrije, zbog vještine šivanja. Tkanje jednog modula trajalo je oko 8 tjedana i koštalo 15.000 dolara. Svaki je modul držao 6 tisuća riječi, a šest modula činilo je ukupno 36.864 riječi.

Nuspojava je bila važna: softver se morao zamrznuti mjesecima prije leta. Zakrpe u zadnji čas nije bilo, jer je ispravljanje greške značilo ponovno tkanje.

> **Jesi li znao?** Apollo 11 nije imao jedno, nego dva računala AGC: jedno u zapovjednom modulu, drugo u lunarnom modulu. Svako je težilo oko 32 kg i radilo uz kristalni sat od 2,048 MHz.

## Alarm nekoliko minuta prije slijetanja

Tijekom slijetanja 20. srpnja 1969. računalo lunarnog modula na zaslonu je prvo prikazalo alarm 1202, a zatim 1201. Oba su značila "preljev izvršitelja": računalu je zadano više posla nego što je moglo podnijeti. Prema detaljnom opisu na Wikipediji, uzrok su bili lažni signali radara za susret, koji je bio ostavljen u stanju čekanja i zauzimao je procesor. Problem nije bio ni programerska greška, ni pogreška pilota, ni kvar hardvera. U osnovi je nastao zbog nedostatka u dokumentu o sučelju između dvaju sustava.

Zanimljivo je što je softver u toj situaciji učinio. AGC je radio s planerom koji se temelji na prioritetima. Kad je stigao preveliki teret, brzo se ponovno pokrenuo, odbacio poslove niskog prioriteta i nastavio s kritičnim zadacima poput upravljanja slijetanjem. Dakle, ta poznata mala memorija bila je dovoljna jer se njome pametno upravljalo.

Postojala je još jedna pojedinost koja je sve otežala. Naredba 1668, koju je Buzz Aldrin unio u računalo tijekom slijetanja, dodatno je opteretila već napregnuti procesor i izazvala još jedan alarm 1202. Softver je i to preživio na isti način, pa je Eagle sletio na površinu Mjeseca.

Softver je razvijen u MIT-ovu Laboratoriju za instrumentaciju. Softver zapovjednog modula (COLOSSUS) i softver lunarnog modula (LUMINARY) vodili su različiti timovi. Provedbu pojedinosti vodio je tim pod vodstvom Margaret Hamilton.

## Tada / sada

| Apollo Guidance Computer (1969.) | Današnji mobitel |
|---|---|
| Oko 4 KB izbrisive memorije (RAM) | Gigabajti RAM-a |
| Oko 72 KB ručno tkanog ROM-a | Stotine gigabajta pohrane |
| Mjeseci tkanja za ažuriranje softvera | Ažuriranja koja se sama preuzmu noću |
| Oko 32 kg | Stane na dlan |

## Prava pouka brojke

Brojka "4 KB" često se priča u stilu "vidi kako je to bilo primitivno". No bit priče je upravo suprotan: ograničena memorija prisilila je inženjere da polažu račun za svaki bit. Zato je nastao softver koji određuje prioritete zadataka i oporavlja se pod preopterećenjem.

Uređaji u našim džepovima danas imaju neusporedivo više memorije, ali većina aplikacija ne piše se tako brižljivo. Čak i jedno jedino ažuriranje aplikacije za dopisivanje može biti višestruko veće od cijelog softvera Apolla.

Što misliš, odgajaju li bolje inženjere ograničenja ili obilje?
