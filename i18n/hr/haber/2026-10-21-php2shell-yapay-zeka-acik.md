---
title: "Umjetna inteligencija pronašla kritičnu ranjivost u PHP-u, na kojem počiva 70 posto web stranica"
excerpt: "Dvije ranjivosti nazvane PHP2Shell omogućuju izvršavanje koda na poslužitelju bez prijave. U otkrivanju su korišteni modeli poput GPT-5.6 Sol i Gemini 4 Argon."
hook: "Golemu ranjivost u PHP-u pronašla je umjetna inteligencija"
fact: "CVSS 9,2"
factLabel: "Najveća ocjena među ranjivostima PHP2Shell"
category: "Umjetna inteligencija"
---
Programeri PHP-a objavili su 21. listopada hitnu zakrpu za dvije kritične sigurnosne ranjivosti u jezgri jezika. Ranjivosti nazvane „PHP2Shell“, s oznakama CVE-2026-109618 i CVE-2026-109619, otkrivene su uz pomoć alata umjetne inteligencije.

## Što se dogodilo?

Prema Fortuneu, Calif, tvrtka za sigurnosno testiranje umjetne inteligencije, pronašla je prvi dio lanca 1. kolovoza pomoću GPT-5.6 Sol; Wiz je neovisno otkrio prvu ranjivost 19. kolovoza i prijavio je PHP sigurnosnom timu 24. kolovoza. U otkrivanju su korišteni Wizov alat Wiz Atlas te modeli GPT-5.6 Sol tvrtke OpenAI i Gemini 4 Argon tvrtke Google.

Ranjivosti omogućuju napadaču da bez prijave daljinski izvrši kod na poslužitelju i iznese podatke iz memorije. Prema Wizu, pogođena je gotovo svaka verzija PHP-a objavljena u posljednjih deset godina, sve unatrag do 5.4. Najveća ocjena ozbiljnosti na CVSS ljestvici je 9,2. PHP radi iza otprilike 70 posto svjetskih web stranica; sam WordPress upravlja s otprilike 40 posto stranica. Prema ažuriranoj vijesti Fortunea, ranjivosti su se nakon zakrpe počele masovno iskorištavati.

## Zašto je važno?

Ovo je jedan od najkonkretnijih primjera da umjetna inteligencija u sigurnosnim istraživanjima više nije samo pomoćnik, nego može biti i strana koja dolazi do otkrića. No isti alati su i u rukama napadača, a vrijeme između pojave zakrpe i početka iskorištavanja se skraćuje. Svaki vlasnik stranice koji koristi PHP mora odmah ažurirati svoj poslužitelj. U širem smislu, skrivene greške u starom kodu interneta, koji radi desetljećima, sada mogu izaći na vidjelo mnogo brže. Priču o prvom programu koji se sam kretao kroz mrežu ispričali smo u [tekstu o Creeperu](/yazi/creeper-ilk-virus-zararsizdi/).
