---
title: "AWS gratis lokala molnemulator har skrivits från början till slut av AI-agenter"
excerpt: "AWS Emulator efterliknar över 200 AWS-tjänster på din dator; enligt Amazon har inte en enda rad kod skrivits eller granskats av människor."
hook: "Agenten skriver och rättar koden"
fact: "200+"
factLabel: "Emulerade AWS-tjänster"
category: "Nyheter"
---
Amazon Web Services släppte den 11 november AWS Emulator, ett gratis utvecklarverktyg. Verktyget efterliknar över 200 tjänster i AWS-molnet på utvecklarens egen dator. På så sätt kan programvara testas utan AWS-konto och utan att betala någon molnfaktura. Det som framför allt är anmärkningsvärt är vem som skrivit verktyget.

## Inga människor, bara agenter

Enligt Matt Goldberg, senior principal engineer på AWS, har hela emulatorn skrivits av autonoma AI-agenter; hans team har varken skrivit eller granskat en enda rad kod. Projektet började som ett helgexperiment av Goldberg med Kiro, Amazons kodningsverktyg: den första efterlikningen av en enkel meddelandekötjänst var klar på ungefär 15 minuter.

I dag drivs arbetet av tre agentteam. Det första teamet skriver tester och validerar dem mot riktiga AWS. Det andra kör samma tester mot emulatorn och öppnar felrapporter för skillnaderna. I det tredje rättar varje agent ett enda fel. Ändringar slås inte samman förrän de klarat kontroller av kompilering, kodstandard, säkerhet och bakåtkompatibilitet. Enligt Goldberg stänger hundratals agenter tusentals fel per dag. Människornas uppgift är att utforma testerna, reglerna och dessa grindar.

## Begränsningarna

Koden är skriven i Rust och släppt under licensen CC0, som motsvarar public domain. Amazon avråder från att använda verktyget för skarpa system eller säkerhetstester: det utvärderar inte behörighetspolicyer som riktiga AWS och efterliknar ännu inte strypning, driftavbrott och regionskillnader. Operationer som inte stöds returnerar ett HTTP 501-fel, och insamling av användningsdata är påslagen som standard.

## Varför är det viktigt?

Det här är ett av de sällsynta fall där ett stort företag öppet säger att en produkt avsedd för bred användning tillverkats utan mänsklig inblandning. Mjukvaruutvecklingens tyngdpunkt kan komma att flyttas från att skriva kod till att bygga tester som mäter korrekthet. För historien om den första "buggen" i programvara, läs vår artikel om den [första datorbuggen](/yazi/ilk-bilgisayar-bocegi-1947/).
