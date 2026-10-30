---
title: "Det första datorlösenordet stals redan första året"
excerpt: "MITs system CTSS förde in lösenordet i datorn. Kort därefter skrev en doktorand ut alla lösenord på skrivaren. Historien om det första lösenordets första hack."
hook: "Det första lösenordet blev det första som hackades"
fact: "1962"
factLabel: "Det första kända lösenordsstölden"
category: "Premiärer"
---

Lösenordet du skriver tiotals gånger om dagen har en födelseplats: en enda jättedator på MIT i början av 1960-talet. Än mer intressant är att världens första kända datorlösenord stals i omgångar kort efter att de börjat användas. Och det var inte ett gäng hackare som gjorde det, utan en doktorand som ville ha fler datortimmar.

## En dator, tiotals användare

I början av 1960-talet var datorer maskiner som fyllde rum och bara gjorde ett jobb i taget. Du stansade ditt program på hålkort, ställde dig i kö och fick resultatet timmar senare. På MIT ville Fernando Corbatós team ändra på det: ett system där många personer kunde använda samma maskin samtidigt från terminaler, alltså "tidsdelning" (time-sharing).

Systemet fick namnet CTSS (Compatible Time-Sharing System). Det visades första gången i november 1961 på MITs modifierade IBM 709 och kördes under de följande åren på IBM 7094. Som Wikipedia också återger anses CTSS vara det första datorsystemet som införde inloggning med lösenord.

## Varför behövdes lösenord?

Problemet var enkelt: på samma maskin hade tiotals personer sina filer och sin tilldelade datortid. Man behövde ett sätt att skilja vem som var vem. Corbató beskrev det år senare för Wired så här: att ge varje användare ett lösenord som lås hade verkat vara en "mycket enkel lösning".

Corbató var också försiktig med att utropa sig själv till "först". Han sa att IBM:s bokningssystem Sabre från 1960 troligen också använde lösenord, men eftersom inga uppgifter finns kvar om det vet man inget säkert. Även om vilket år lösenord exakt lades till i CTSS säger källorna olika saker. Det vi vet är att lösenordssystemet fungerade våren 1962, för den våren stals det.

## Allan Scherrs plan en fredagskväll

Allan Scherr var en forskare som doktorerade vid MIT och körde komplicerade simuleringar. Enligt Wired hade han tilldelats bara fyra timmar i veckan på CTSS (en del källor säger fyra timmar per dag). Den tiden räckte inte åt honom.

Hans lösning var klurig men lika busig. Genom att utnyttja systemets funktion för utskrift offline förberedde han ett hålkort som begärde utskrift av lösenordsfilen. Han lade kortet i kön sent en fredagskväll och kom tidigt på lördagsmorgonen för att hämta utskriften. Nu hade han allas lösenord i systemet i handen.

För att sudda ut spåren delade han lösenorden med andra användare. Enligt Wired loggade en av dem, J.C.R. Licklider, in på laboratoriechefen Robert Fanos konto och lämnade hånfulla meddelanden. Scherr åkte aldrig fast, och ungefär ett kvartssekel efter händelsen erkände han det personligen för Fano. Fano försäkrade honom att hans doktorstitel inte skulle tas ifrån honom.

> **Visste du det?** Det var inte den enda lösenordskrisen i CTSS. 1966 byttes lösenordsfilen och filen med "dagens meddelande" plats på grund av ett misstag av en administratör, och alla som loggade in såg alla lösenord öppet på sin skärm. Enligt systemutvecklaren Tom Van Vleck blev händelsen utgångspunkten för idén att lagra lösenord med envägskryptering. Det hände förstås en fredagskväll klockan fem, och Van Vleck tvingades byta lösenord i timmar.

## Då och nu

| Då (1960-talet) | Nu |
|---|---|
| Lösenord i klartext i en enda fil | Lösenord som lagras som envägs-hash |
| Ett hålkort räckte för att få en utskrift | Åtkomstloggar, behörighetsnivåer |
| Mål: dela på datortiden | Mål: skydda identitet, pengar, personuppgifter |
| En maskin, ett campus | Tiotals konton per person |

Anledningen till att den här historien fortfarande är lärorik är denna: lösenordet har prövats av mänskligt beteende ända sedan det uppfanns. Scherr genomförde inte någon komplicerad attack för att knäcka systemet; han använde bara en funktion som systemet redan erbjöd på ett oväntat sätt. En stor del av dagens läckor har också sin grund i liknande enkla misstag.

Corbató fick Turing Award 1990 för sitt arbete med tidsdelning. Låset som hans team lade till som en "enkel lösning" sitter i dag på varje dörr, från din e-post till din bank, och fortfarande är den svagaste länken oftast människan som använder låset.

Tror du att vi är redo att helt sluta använda lösenord i dag och gå över helt till biometri eller passkeys?
