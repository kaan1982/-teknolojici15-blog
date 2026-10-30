---
title: "Skill-sikkerhed: alt, du bør læse, før du installerer"
excerpt: "Skills kan køre kode og hente instruktioner fra eksterne kilder. En guide til pålidelige kilder, gennemgang af SKILL.md og scripts, mindst mulige rettigheder og hemmelige nøgler."
hook: "At installere en skill er at installere software"
fact: "13,4 %"
factLabel: "Andel skills med kritiske sårbarheder (Snyk, 2026)"
category: "Kunstig intelligens"
---
Det, der gør skills så stærke, gør dem også risikable: En skill kan ikke kun indeholde tekst, men også eksekverbar kode. Når agenten indlæser den skill, følger den instruktionerne i den som sine egne og kan køre dens scripts. Derfor kan anbefalingen i Claudes dokumentation sammenfattes i én sætning: Tænk på at installere en skill som at installere software.

## Hvad siger de officielle kilder?

Sikkerhedsafsnittet i Claudes dokumentation er ret direkte. Det anbefaler, at du kun bruger skills fra pålidelige kilder, altså dem, du selv har skrevet, eller dem, du har fået fra Anthropic. Hvis du er nødt til at bruge en skill fra en ukendt kilde, beder det dig være "ekstremt forsigtig" og gennemgå den fra ende til anden, før du bruger den.

Anthropics ingeniørindlæg ligger på samme linje: For skills fra mindre pålidelige kilder anbefales det at gennemgå de medfølgende filer, især kodeafhængigheder og scripts, og at tjekke instruktioner, der beder om at forbinde til eksterne netværk. Dokumentationen fremhæver også en risiko: Skills, der henter data fra eksterne adresser, er farlige, fordi det hentede indhold kan indeholde ondsindede instruktioner.

## Hvad sker der i praksis?

Disse advarsler er ikke teoretiske. Sikkerhedsvirksomheden Snyk scannede i sin "ToxicSkills"-undersøgelse, offentliggjort den 5. februar 2026, 3.984 skills fra ClawHub og skills.sh. Resultaterne:

| Fund | Antal |
|---|---|
| Scannede skills | 3.984 |
| Med mindst ét sikkerhedsproblem | 1.467 (36,82 procent) |
| Med mindst ét kritisk problem | 534 (13,4 procent) |
| Verificeret ondsindet payload | 76 |

Ifølge rapporten dækker data fra skills.sh kun de udvalgte top 100 skills på det site, mens de fulde markedstal gælder ClawHub. Blandt de observerede angrebstyper er installationsinstruktioner, der leder brugeren til at downloade og køre upålidelig software, skjulte kommandoer (camoufleret med Base64 eller Unicode), som sender legitimationsoplysninger til angriberen, samt forsøg på at slå sikkerhedskontroller fra og installere bagdøre. I 91 procent af de verificeret ondsindede skills var der brugt prompt injection.

> **Vidste du det?** Ifølge Claude Help Center kan Enterprise-organisationer slå skill-scanning til, som kontrollerer uploadede skills og plugins for ondsindet indhold. Men det er et sikkerhedsnet og træder ikke i stedet for at læse. Den bedste måde at forstå, hvad en skill gør, er at åbne og læse dens SKILL.md og scripts selv, før du installerer den.

## Tjekliste før installation

En praktisk liste, vi har uddraget af anbefalingerne i dokumentationen og fundene fra praksis:

1. **Verificér kilden.** Hvem ejer repositoriet? Er det en officiel virksomhed eller en kendt udvikler, eller er det en kopi, der minder meget om en kendt pakke (typosquatting)?
2. **Læs SKILL.md fra ende til anden.** Formuleringer som "download og kør først dette", "slå sikkerhedsindstillingen fra" og "send til denne adresse" er alarmsignaler.
3. **Gennemgå mappen scripts/.** Hvis der er linjer, du ikke kan læse, eller som er skjulte eller kodet med Base64, så lad være med at installere.
4. **Tjek eksterne links.** Hvis skillen henter instruktioner eller data fra en webadresse, så husk, at indholdet kan ændre sig når som helst.
5. **Installér det, du har brug for.** I stedet for "installer alle" mindsker det både konteksten og angrebsfladen at vælge skills enkeltvis.

## Mindst mulige rettigheder og hemmelige nøgler

Også hvor skillen kører, har betydning. Ifølge Claudes dokumentation har skills i Claude API-miljøet ingen netværksadgang og kan ikke installere pakker under kørsel. På claude.ai kan netværksadgangen være fuld, delvis eller slået fra afhængigt af bruger- og administratorindstillinger. I Claude Code har skills derimod lige så meget netværksadgang som ethvert program på din computer. En skill, du installerer i en lokal agent, kører altså med dine rettigheder.

Derfor er princippet om mindst mulige rettigheder afgørende. I Claude Code gør feltet allowed-tools i en skills frontmatter, at bestemte værktøjer kan bruges uden at spørge om tilladelse, når skillen kaldes. Ifølge dokumentationen nulstilles den tilladelse ved din næste besked. Alligevel er det en god vane ikke at installere en skill skrevet af en anden, hvis du ser brede rettigheder i den, uden bevidst at godkende det.

For hemmelige nøgler er reglen enkel: Skriv aldrig API-nøgler, adgangskoder og adgangstokens ind i SKILL.md eller skill-mappen. Når du deler skillen eller sender den til et repository, følger alt i den mappe med. Opbevar nøglerne i miljøvariabler eller i det værktøjs sikre opbevaring af legitimationsoplysninger, du bruger, og fortæl kun skillen, hvordan den får adgang til dem.

Pr. oktober 2026 vokser skill-økosystemet meget hurtigt, og den vækst minder om sikkerhedsproblemerne i appbutikkernes første år. Den gode nyhed er: At læse en skill er meget lettere end at læse en apps kildekode, fordi det meste er almindelig tekst.

Åbner og læser du en skill, før du installerer den, eller stoler du på antallet af stjerner og downloads?
