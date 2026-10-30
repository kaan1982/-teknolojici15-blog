---
title: "Prvi računalni \"virus\" Creeper nije ništa obrisao"
excerpt: "Creeper, koji je 1971. kolao ARPANET-om, nije taknuo nikakve podatke, samo je na zaslon ispisao izazov. Da bi ga se uhvatilo, napisan je prvi antivirus Reaper."
hook: "Prvi virus nije ništa obrisao!"
fact: "1971"
factLabel: "Creeper je napisan u BBN-u"
category: "Računala"
---
Kad kažemo "računalni virus", na pamet nam pada nešto što briše datoteke, drži podatke kao taoce i zaključava zaslon. Ipak, program koji većina izvora navodi kao "prvi virus" ništa od toga nije radio. Sve što je činio bilo je to da na zaslon ispiše mali izazov i prijeđe na sljedeće računalo.

Zvao se Creeper, odnosno "gmaz".

## 1971., BBN i ARPANET

Creepera je 1971. napisao Bob Thomas u tvrtki BBN (Bolt Beranek and Newman) u Massachusettsu, kao eksperimentalni program. BBN je bila tvrtka s ključnom ulogom u osnivanju ARPANET-a, koji se smatra pretkom interneta.

Program je putovao između središnjih računala DEC PDP-10 povezanih na ARPANET i pokretanih operacijskim sustavom TENEX. Prema Wikipediji, broj sustava koji su tada na ARPANET-u pokretali TENEX bio je 28, dakle toliko je računala Creeper najviše mogao doseći.

Bobu Thomasu pravi cilj nije bila zloba, nego odgovor na jedno pitanje: može li se program sam prenositi s jednog stroja na drugi putem mreže?

## Jedna rečenica na zaslonu

Kad bi Creeper stigao na neki stroj, na teletypeu (terminalu s pisačem) ispisao bi ovu poruku:

"I'M THE CREEPER : CATCH ME IF YOU CAN"

Na hrvatskom: "Ja sam Gmaz: uhvati me ako možeš." To je sve. Nije obrisao nijednu datoteku, nije oštetio nijedan podatak. Wikipedija prenosi da su operateri u tom pokusu surađivali i da nije prijavljen nikakav neželjeni učinak.

Prva verzija zapravo se nije ni umnožavala: pri prelasku s jednog stroja na drugi prenosila se bez ostavljanja kopije iza sebe. Kasnije je Ray Tomlinson, poznat kao izumitelj e-pošte, izmijenio program tako da se kopira na ostale strojeve. Ta verzija koja se sama razmnožava smatra se općeprihvaćenim prvim računalnim crvom (worm).

## Virus ili crv?

Ovdje je potreban mali, ali važan ispravak. Tehnički, Creeper nije bio virus, nego crv. Virus se širi lijepeći se na drugi program ili datoteku; crv se kreće mrežom samostalno. Creeper spada u drugu skupinu. Unatoč tome, mnoge ga publikacije navode kao "prvi računalni virus na svijetu"; citat iz Guardiana koji prenosi Wikipedija koristi upravo taj izraz. To je popularna verzija pojma, ali tehnički točna oznaka je "prvi crv".

Sam pojam "računalni virus" nastao je 12 godina nakon Creepera. Prema ESET-ovu tekstu na WeLiveSecurity, Fred Cohen, student Sveučilišta Južne Kalifornije, 3. studenoga 1983. napisao je program koji se sam širi; njegov profesor Len Adleman usporedio je to širenje nalik "infekciji" s virusima u biologiji i predložio pojam. Cohen je program pripremio na računalu VAX 11/750 s Unixom, za otprilike osam sati rada.

> **Jesi li znao?** Ray Tomlinson, koji je izumio e-poštu i uveo znak @ u adrese, ujedno je i autor programa koji se smatra prvim antivirusom. Dakle, najomiljeniji alat interneta i njegovog prvog "čistača" napisala je ista osoba.

## Reaper: prvi antivirus

Kad se pojavio program koji se kopira po mreži, pojavila se i potreba za nečim što će ga zaustaviti. Ray Tomlinson 1972. napisao je program imena Reaper ("Žetelac"). I Reaper je kolao ARPANET-om i brisao Creepera gdje god bi ga našao. Wikipedija ga opisuje kao prvi antivirusni softver.

U ovoj priči ima lijepe ironije: prvi antivirus na svijetu zapravo je i sam bio program koji samostalno putuje mrežom. Dakle, za hvatanje jednog "crva" napisan je drugi "crv".

| Tada | Sada |
|---|---|
| 1971.: najviše 28 strojeva s TENEX-om | Milijarde povezanih uređaja |
| Jedna šaljiva rečenica na zaslonu | Ucjenjivački softver, krađa podataka |
| Reaper: čistač s jednim ciljem | Sigurnosni softver koji se stalno ažurira |

## Duga sjena nedužnog pokusa

Creeper je bio bezopasan, ali je odškrinuo vrata: ako se program može sam širiti mrežom, netko bi tu moć mogao upotrijebiti i u zle svrhe. U idućim desetljećima upravo se to i dogodilo, a riječi "virus", "crv" i "antivirus" ušle su u naš svakodnevni jezik.

Kad bi danas sigurnosni istraživač pustio sličan pokus na internet bez dopuštenja, vjerojatno bi se našao u ozbiljnim neprilikama. ARPANET iz 1971. bio je pak mala zajednica istraživača koji su se međusobno poznavali, a pokus je, kako prenosi Wikipedija, tekao uz suradnju operatera.

Ipak, početna točka nije bio napad, nego znatiželja. Jedan inženjer upitao se "može li se to?" i odgovor dao jednom jedinom rečenicom na zaslonu.

Što misliš, bi li se Creeper danas, da je napisan sada, smatrao bezopasnim pokusom ili sigurnosnim incidentom?
