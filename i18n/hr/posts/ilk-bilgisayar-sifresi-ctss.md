---
title: "Prva računalna lozinka ukradena je već prve godine"
excerpt: "MIT-ov sustav CTSS donio je lozinku u računalo. Ubrzo je jedan doktorand ispisao sve lozinke na pisaču. Priča o prvoj lozinci i prvom hakiranju."
hook: "Prva lozinka bila je prva hakirana"
fact: "1962"
factLabel: "Prva poznata krađa lozinki"
category: "Prvenci"
---
Lozinka koju dnevno upisuješ desetke puta ima svoje rodno mjesto: jedno golemo računalo na MIT-u početkom 1960-ih. Još je zanimljivije što su prve poznate računalne lozinke na svijetu ukradene skupno ubrzo nakon što su se počele koristiti. I to ne od neke hakerske bande, nego od doktoranda koji je želio više računalnog vremena.

## Jedno računalo, desetci korisnika

Početkom 1960-ih računala su bila strojevi koji ispunjavaju sobe i obavljaju samo jedan posao odjednom. Program bi se utisnuo u bušene kartice, stavio u red i rezultat bi se dobio nakon nekoliko sati. Na MIT-u tim Fernanda Corbatóa to je htio promijeniti: sustav u kojem isti stroj istodobno može koristiti više ljudi preko terminala, odnosno "podjela vremena".

Taj se sustav zvao CTSS (Compatible Time-Sharing System). Prvi put je prikazan u studenome 1961. na MIT-ovu preinačenom računalu IBM 709, a kasnijih godina radio je na IBM-ovim 7094. Kako navodi i Wikipedija, CTSS se smatra prvim računalnim sustavom koji je uveo prijavu pomoću lozinke.

## Zašto je trebala lozinka?

Problem je bio jednostavan: na istom stroju desetci ljudi imali su svoje datoteke i dodijeljeno računalno vrijeme. Trebao je način da se razlikuje tko je tko. Corbató je godinama poslije Wiredu to objasnio ovako: ideja da se svakom korisniku postavi lozinka kao brava djelovala je kao "vrlo jednostavno rješenje".

Corbató je bio oprezan i u proglašavanju sebe "prvim". Rekao je da je i IBM-ov sustav rezervacija Sabre iz 1960. vjerojatno koristio lozinke, ali budući da o tome nema zapisa, ništa se ne zna sa sigurnošću. O tome koje su točno godine lozinke dodane u CTSS izvori također govore različito. Ono što znamo: u proljeće 1962. sustav lozinki je radio, jer je tog proljeća i ukraden.

## Cuma-gecesi plan Allana Scherra

Allan Scherr bio je istraživač na doktoratu na MIT-u koji je pokretao složene simulacije. Prema pisanju Wireda, na CTSS-u mu je bilo dodijeljeno samo četiri sata tjedno (neki izvori kažu četiri sata dnevno). To mu nije bilo dovoljno.

Njegovo je rješenje bilo pametno, ali i podjednako nestašno. Iskoristivši mogućnost izvanmrežnog ispisa datoteka sustava, pripremio je bušenu karticu kojom je zatražio ispis datoteke s lozinkama. Karticu je u red stavio kasno jedne petak navečer, a u subotu rano ujutro došao je po ispis. Sada je u rukama imao lozinke svih u sustavu.

Da zametne trag, lozinke je podijelio i s drugim korisnicima. Prema Wiredu, jedan od njih, J.C.R. Licklider, ušao je na račun ravnatelja laboratorija Roberta Fana i ostavljao podrugljive poruke. Scherr nikad nije uhvaćen, a otprilike četvrt stoljeća poslije osobno je Fanu priznao što je učinio. Fano ga je uvjerio da mu doktorat neće biti oduzet.

> **Jesi li znao?** To nije bila jedina lozinkina kriza u CTSS-u. Godine 1966. zbog pogreške jednog administratora datoteka s lozinkama i datoteka s "porukom dana" zamijenile su mjesta pa su svi koji su se prijavili na zaslonu vidjeli sve lozinke otvoreno. Prema razvijatelju sustava Tomu Van Vlecku, taj je događaj bio polazište ideje o pohrani lozinki jednosmjernim šifriranjem. Dakako, to se dogodilo u petak u pet popodne i Van Vleck je satima morao mijenjati lozinke.

## Tada i sada

| Tada (1960-e) | Sada |
|---|---|
| Lozinke u običnom tekstu u jednoj datoteci | Jednosmjerno sažete (hash) lozinke |
| Za ispis je bila dovoljna jedna bušena kartica | Zapisi pristupa, slojevi ovlasti |
| Cilj: podijeliti računalno vrijeme | Cilj: zaštititi identitet, novac, osobne podatke |
| Jedan stroj, jedan kampus | Desetci računa po osobi |

Razlog zbog kojeg je ova priča i danas poučna jest ovaj: lozinka se od dana izuma testira ljudskim ponašanjem. Scherr nije izveo složen napad da bi razbio sustav, samo je neočekivano iskoristio mogućnost koju je sustav ionako nudio. Velik dio današnjih curenja podataka također proizlazi iz sličnih jednostavnih pogrešaka.

Corbató je 1990. za svoj rad na podjeli vremena dobio Turingovu nagradu. Brava koju je njegov tim dodao kao "jednostavno rješenje" danas stoji na svakim vratima, od tvoje e-pošte do banke, a najslabija karika još uvijek je najčešće čovjek koji tu bravu koristi.

Misliš li da smo danas spremni potpuno prestati koristiti lozinke i prijeći isključivo na biometriju ili pristupne ključeve (passkey)?
