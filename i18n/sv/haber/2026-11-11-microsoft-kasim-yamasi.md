---
title: "Microsoft täppte till över 1 000 hål i november; ett Outlook-hål användes redan i attacker"
excerpt: "Microsofts säkerhetsuppdatering för november åtgärdar 1 093 sårbarheter, bland dem ett Outlook-hål som angripare redan utnyttjar."
hook: "Tusen hål på en månad"
fact: "1 093"
factLabel: "Antal sårbarheter i novemberuppdateringen"
category: "Nyheter"
---
Microsoft släppte den 10 november novemberpaketet av den säkerhetsuppdatering som bolaget ger ut den andra tisdagen varje månad. Paketet åtgärdar 1 093 säkerhetshål i 287 produkter och komponenter. I räkningar som även tar med hålen i webbläsaren Edge stiger siffran till 1 235.

## Hur hålen fördelar sig

Av sårbarheterna är 63 klassade som "kritiska" och 1 029 som "viktiga". Nästan hälften (535) är av den typ som låter en angripare höja sina behörigheter i systemet, och 296 gör det möjligt att köra kod på distans. Flest hål hittades i Word, Excel och SQL Server.

Sådana jättepaket börjar bli det normala: oktoberuppdateringen var ännu större med 1 411 sårbarheter. Enligt Netizens bedömning beror en del av ökningen på att Microsoft använder AI-stödda verktyg för att leta efter hål.

## Outlook-hålet som användes i attacker

Det mest brådskande i paketet är Outlook-hålet CVE-2026-124194. Microsoft har bekräftat att hålet utnyttjades i attacker innan uppdateringen kom. Angriparen får offret att öppna en specialpreparerad fil. Outlook ansluter då till angriparens server utan att visa varningen för externt innehåll och läcker användarens lösenordshash (NTLMv2). Med den informationen kan angriparen utge sig för att vara användaren. Förhandsgranskningsfönstret är ingen attackväg; filen måste öppnas.

Hålet har poängen 6,5 och Microsoft klassar det som "medelallvarligt". De berörda produkterna är Office LTSC 2021, Office LTSC 2024 och Microsoft 365 Apps. Vilka angriparna och offren är har inte avslöjats. Enligt Tenable fick forskaren som hittade hålet hjälp av Anthropics modell Claude.

## Varför är det viktigt?

Alla som använder Windows och Office, särskilt företag, bör installera uppdateringen så snart som möjligt. Samtidigt innebär det att AI snabbar upp jakten på hål att även uppdateringarna blir större. Undrar du var begreppet dator-"bugg" kommer ifrån? Läs vår artikel om [den första datorbuggen](/yazi/ilk-bilgisayar-bocegi-1947/).
