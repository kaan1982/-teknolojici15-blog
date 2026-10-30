---
title: "Sigurnost skillova: sve što trebaš pročitati prije instalacije"
excerpt: "Skillovi mogu izvršavati kôd i povlačiti upute iz vanjskih izvora. Vodič o pouzdanom izvoru, pregledu SKILL.md-a i skripti, najmanjim ovlastima i tajnim ključevima."
hook: "Instalirati skill znači instalirati softver"
fact: "13,4 %"
factLabel: "Udio skillova s kritičnom ranjivošću (Snyk, 2026.)"
category: "Umjetna inteligencija"
---
Ono što skillove čini tako moćnima ujedno ih čini i rizičnima: skill ne nosi samo tekst, nego i izvršni kôd. Kad agent učita taj skill, upute iz njega slijedi kao da su njegove i može pokretati njegove skripte. Zato se preporuka iz Claudeove dokumentacije može sažeti u jednu rečenicu: instalaciju skilla shvati kao instalaciju softvera.

## Što kažu službeni izvori?

Sigurnosni odjeljak Claudeove dokumentacije prilično je izravan. Preporučuje da skillove koristiš samo iz pouzdanih izvora, odnosno one koje si sam napisao ili dobio od Anthropica. Ako moraš koristiti skill iz nepoznatog izvora, traži da budeš "izuzetno oprezan" i da ga prije uporabe pregledaš od početka do kraja.

Anthropicov inženjerski članak ide istom linijom: kod skillova iz manje pouzdanih izvora preporučuje pregled upakiranih datoteka, osobito ovisnosti u kôdu i skripti, te provjeru uputa koje govore da se treba povezati s vanjskim mrežama. Dokumentacija posebno ističe jedan rizik: skillovi koji povlače podatke s vanjskih adresa opasni su jer povučeni sadržaj može sadržavati zlonamjerne upute.

## Što se događa na terenu?

Ta upozorenja nisu teorijska. Sigurnosna tvrtka Snyk u istraživanju "ToxicSkills" objavljenom 5. veljače 2026. skenirala je 3.984 skilla iz izvora ClawHub i skills.sh. Rezultati:

| Nalaz | Broj |
|---|---|
| Skenirani skillovi | 3.984 |
| S barem jednim sigurnosnim problemom | 1.467 (36,82 posto) |
| S barem jednim kritičnim problemom | 534 (13,4 posto) |
| Potvrđeni zlonamjerni teret | 76 |

Prema izvješću, podaci sa skills.sh obuhvaćaju samo prvih 100 odabranih skillova te stranice, dok se brojke cijelog tržišta odnose na ClawHub. Među viđenim vrstama napada su upute za instalaciju koje korisnika navode da preuzme i pokrene nepouzdan softver, prikrivene naredbe (kamuflirane Base64 ili Unicodeom) koje šalju vjerodajnice napadaču te pokušaji isključivanja sigurnosnih provjera i postavljanja stražnjih vrata. U 91 posto potvrđenih zlonamjernih skillova korištena je injekcija prompta (prompt injection).

> **Jesi li znao?** Prema Claudeovu Centru za pomoć, Enterprise organizacije mogu uključiti skeniranje skillova, koje provjerava učitane skillove i dodatke na zlonamjeran sadržaj. No to je sigurnosna mreža, a ne zamjena za čitanje. Što skill radi najbolje ćeš razumjeti ako prije instalacije sam otvoriš i pročitaš njegov SKILL.md i skripte.

## Kontrolni popis prije instalacije

Praktičan popis koji smo izvukli iz preporuka dokumentacije i nalaza s terena:

1. **Provjeri izvor.** Čiji je repozitorij? Je li to službena tvrtka ili poznati programer, ili kopija koja jako nalikuje poznatom paketu (typosquatting)?
2. **Pročitaj SKILL.md od početka do kraja.** Izrazi poput "prvo preuzmi i pokreni ovo", "isključi sigurnosnu postavku" ili "pošalji na ovu adresu" znakovi su alarma.
3. **Pregledaj mapu scripts/.** Ako postoje retci koje ne možeš pročitati, prikriveni ili kodirani Base64, nemoj instalirati.
4. **Provjeri vanjske veze.** Ako skill s neke web-adrese povlači upute ili podatke, imaj na umu da se taj sadržaj može promijeniti u svakom trenutku.
5. **Instaliraj ono što ti treba.** Umjesto "instaliraj sve", odabir pojedinačnih skillova smanjuje i kontekst i površinu napada.

## Najmanje ovlasti i tajni ključevi

Važno je i gdje skill radi. Prema Claudeovoj dokumentaciji, u okruženju Claude API-ja skillovi nemaju pristup mreži i ne mogu instalirati pakete za vrijeme rada. Na claude.ai pristup mreži može biti pun, djelomičan ili isključen, ovisno o postavkama korisnika i administratora. U Claude Codeu skillovi pak imaju isti pristup mreži kao bilo koji program na tvom računalu. Dakle, skill koji instaliraš na lokalnom agentu radi s tvojim ovlastima.

Zato je načelo najmanjih ovlasti ključno. U Claude Codeu polje allowed-tools u frontmatteru skilla omogućuje da se određeni alati koriste bez traženja dopuštenja kad se taj skill pozove. Prema dokumentaciji, to se dopuštenje poništava u tvojoj sljedećoj poruci. Ipak, ako u tuđem skillu vidiš široka dopuštenja, dobra je navika ne instalirati ga bez svjesnog odobrenja.

Za tajne ključeve pravilo je jednostavno: nikad ne upisuj API ključeve, lozinke i pristupne tokene u SKILL.md ni u mapu skilla. Kad skill podijeliš ili pošalješ u repozitorij, ide sve što je u toj mapi. Ključeve drži u varijablama okruženja ili u sigurnoj pohrani vjerodajnica alata koji koristiš, a u skillu samo objasni kako im pristupiti.

Od listopada 2026. ekosustav skillova raste vrlo brzo, a taj rast podsjeća na sigurnosne probleme prvih godina trgovina aplikacija. Dobra vijest: čitanje skilla mnogo je lakše od čitanja izvornog koda aplikacije jer je većina običan tekst.

Otvaraš li ti i čitaš skill prije nego što ga instaliraš ili se pouzdaš u broj zvjezdica i preuzimanja?
