---
title: "Den første computeradgangskode blev stjålet allerede det første år"
excerpt: "MITs CTSS-system bragte adgangskoden ind på computeren. Kort efter printede en ph.d.-studerende alle koderne ud. Historien om den første adgangskodes første hack."
hook: "Den første adgangskode blev den første, der blev hacket"
fact: "1962"
factLabel: "Det første kendte tyveri af adgangskoder"
category: "Det første"
---
Den adgangskode, du taster flere gange om dagen, har et fødested: én enkelt kæmpecomputer på MIT i begyndelsen af 1960'erne. Endnu mere interessant er det, at verdens første kendte computeradgangskoder blev stjålet i bulk kort efter, at de var taget i brug. Ikke af en hackerbande, men af en ph.d.-studerende, der ville have flere computertimer.

## Én computer, snesevis af brugere

I begyndelsen af 1960'erne var computere maskiner, der fyldte rum og kun kunne klare ét job ad gangen. Man lod sit program stanse på hulkort, stillede det i kø og fik resultatet flere timer senere. På MIT ville Fernando Corbatós hold ændre det: et system, hvor mange mennesker kunne bruge den samme maskine samtidig fra terminaler, altså "time-sharing".

Dette system blev kaldt CTSS (Compatible Time-Sharing System). Det blev første gang demonstreret i november 1961 på MITs modificerede IBM 709 og kørte i de følgende år på IBM 7094'ere. Som Wikipedia også gengiver, regnes CTSS for det første computersystem, der indførte login med adgangskode.

## Hvorfor var der brug for en adgangskode?

Problemet var enkelt: På den samme maskine lå snesevis af menneskers filer og deres tildelte computertid. Man havde brug for en måde at skelne, hvem der var hvem. Corbató fortalte år senere til Wired, at det at give hver bruger en adgangskode som lås virkede som en "meget simpel løsning".

Corbató var også forsigtig med at udnævne sig selv til den "første". Han sagde, at IBMs Sabre-reservationssystem fra 1960 sandsynligvis også brugte adgangskoder, men at man ikke med sikkerhed ved noget om det, fordi der ikke er bevaret optegnelser. Også om, i hvilket år adgangskoderne præcis blev føjet til CTSS, siger kilderne forskellige ting. Det, vi ved, er: I foråret 1962 virkede adgangskodesystemet, for det forår blev det stjålet.

## Allan Scherrs fredagsaftenplan

Allan Scherr var en forsker, der tog sin ph.d. på MIT og kørte komplekse simuleringer. Ifølge Wired havde han kun fået tildelt fire timer om ugen på CTSS (nogle kilder siger fire timer om dagen). Det var ikke nok for ham.

Hans løsning var snedig, men også uskyldigt drilagtig. Ved at udnytte systemets mulighed for offline-udskrivning af filer forberedte han et hulkort, der bad om en udskrift af adgangskodefilen. Han stillede kortet i kø sent en fredag aften, kom tidligt lørdag morgen og hentede udskriften. Nu havde han alles adgangskoder i systemet.

For at dække sine spor delte han adgangskoderne med andre brugere. Ifølge Wired brugte en af dem, J.C.R. Licklider, laboratoriechef Robert Fanos konto og efterlod sarkastiske beskeder. Scherr blev aldrig fanget, og cirka et kvart århundrede efter hændelsen tilstod han personligt overfor Fano. Fano forsikrede ham, at hans ph.d.-titel ikke ville blive taget fra ham.

> **Vidste du det?** Det var ikke den eneste adgangskodekrise på CTSS. I 1966 byttede adgangskodefilen og "dagens besked"-filen plads på grund af en administrators fejl, og alle, der loggede ind, kunne se alle adgangskoderne åbent på skærmen. Ifølge systemudvikleren Tom Van Vleck blev denne hændelse udgangspunktet for idéen om at gemme adgangskoder med envejskryptering. Hændelsen skete naturligvis fredag aften klokken fem, og Van Vleck måtte bruge timer på at skifte adgangskoder.

## Dengang og nu

| Dengang (1960'erne) | Nu |
|---|---|
| Adgangskoder i klartekst i én fil | Adgangskoder gemt som envejs-hash |
| Ét hulkort var nok til at få en udskrift | Adgangslogs, tilladelseslag |
| Formål: at dele computertid | Formål: at beskytte identitet, penge, personlige data |
| Én maskine, én campus | Snesevis af konti pr. person |

Grunden til, at denne historie stadig er lærerig i dag, er den: Adgangskoden har siden den dag, den blev opfundet, været prøvet af menneskelig adfærd. Scherr udførte ikke et kompliceret angreb for at bryde ind i systemet, han brugte blot en funktion, som systemet allerede tilbød, på en uventet måde. En stor del af nutidens lækager opstår også af lignende simple fejl.

Corbató fik Turing Award i 1990 for sit arbejde med time-sharing. Den lås, som hans hold tilføjede som en "simpel løsning", sidder i dag på hver eneste dør, fra din e-mail til din bank, og det svageste led er stadig oftest det menneske, der bruger låsen.

Tror du, at vi i dag er klar til helt at holde op med at bruge adgangskoder og i stedet gå fuldstændig over til biometri eller adgangsnøgler (passkeys)?
