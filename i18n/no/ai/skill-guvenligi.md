---
title: "Skill-sikkerhet: alt du bør lese før du installerer"
excerpt: "Skills kan kjøre kode og hente instruksjoner fra eksterne kilder. En guide til pålitelige kilder, gjennomgang av SKILL.md og skript, minste privilegium og hemmelige nøkler."
hook: "Å installere en skill er å installere programvare"
fact: "13,4 %"
factLabel: "Andel skills med kritiske sårbarheter (Snyk, 2026)"
category: "Kunstig intelligens"
---

Det som gjør skills så kraftige, gjør dem også risikable: en skill kan inneholde ikke bare tekst, men også kjørbar kode. Når agenten laster en skill, følger den instruksjonene i den som sine egne og kan kjøre skriptene. Derfor kan rådet i Claude-dokumentasjonen oppsummeres i én setning: tenk på å installere en skill som å installere programvare.

## Hva sier de offisielle kildene?

Sikkerhetsdelen i Claude-dokumentasjonen er ganske direkte. Den anbefaler at du bare bruker skills fra pålitelige kilder, altså de du har skrevet selv eller fått fra Anthropic. Hvis du må bruke en skill fra en ukjent kilde, ber den deg være «ekstremt forsiktig» og granske den fra start til slutt før bruk.

Anthropics ingeniørartikkel går i samme retning: for skills fra mindre pålitelige kilder anbefaler den å undersøke de medfølgende filene, særlig kodeavhengigheter og skript, og å sjekke instruksjoner som ber om tilkobling til eksterne nettverk. Dokumentasjonen fremhever også én risiko spesielt: skills som henter data fra eksterne adresser er farlige, fordi innholdet som hentes, kan inneholde ondsinnede instruksjoner.

## Hva skjer i praksis?

Disse advarslene er ikke teoretiske. I forskningsrapporten «ToxicSkills», publisert 5. februar 2026, skannet sikkerhetsselskapet Snyk 3 984 skills fra ClawHub og skills.sh. Resultatene:

| Funn | Antall |
|---|---|
| Skannede skills | 3 984 |
| Med minst ett sikkerhetsproblem | 1 467 (36,82 prosent) |
| Med minst ett kritisk problem | 534 (13,4 prosent) |
| Bekreftet skadelig nyttelast | 76 |

Ifølge rapporten dekker skills.sh-dataene bare de 100 utvalgte øverste skillene på det nettstedet, mens de fullstendige markedstallene gjelder ClawHub. Blant angrepstypene som ble observert, finner vi installasjonsinstruksjoner som får brukeren til å laste ned og kjøre upålitelig programvare, skjulte kommandoer (kamuflert med Base64 eller Unicode) som sender legitimasjon til angriperen, og forsøk på å slå av sikkerhetskontroller og installere bakdører. I 91 prosent av de bekreftede skadelige skillene ble det brukt prompt injection.

> **Visste du at?** Ifølge Claude Help Center kan Enterprise-organisasjoner slå på skill-skanning, som sjekker opplastede skills og utvidelser for ondsinnet innhold. Men det er et sikkerhetsnett og erstatter ikke lesing. Det beste du kan gjøre for å forstå hva en skill gjør, er å åpne og lese SKILL.md og skriptene selv før du installerer den.

## Sjekkliste før installasjon

En praktisk liste utledet fra anbefalingene i dokumentasjonen og funnene fra feltet:

1. **Verifiser kilden.** Hvem eier repoet? Er det et offisielt selskap eller en kjent utvikler, eller en kopi som ligner veldig på et kjent pakkenavn (typosquatting)?
2. **Les SKILL.md fra start til slutt.** Uttrykk som «last ned og kjør dette først», «slå av sikkerhetsinnstillingen» eller «send til denne adressen» er alarmsignaler.
3. **Undersøk scripts/-mappen.** Hvis det finnes linjer du ikke kan lese, skjulte linjer eller linjer kodet med Base64, bør du ikke installere.
4. **Sjekk eksterne lenker.** Hvis skillen henter instruksjoner eller data fra en nettadresse, husk at innholdet kan endres når som helst.
5. **Installer det du trenger.** I stedet for «installer alt» gjør valg av enkeltskills både konteksten og angrepsflaten mindre.

## Minste privilegium og hemmelige nøkler

Det spiller også en rolle hvor skillen kjører. Ifølge Claude-dokumentasjonen har skills i Claude API-miljøet ingen nettverkstilgang og kan ikke installere pakker mens de kjører. I claude.ai kan nettverkstilgangen være full, delvis eller av, avhengig av bruker- og administratorinnstillinger. I Claude Code har skills like mye nettverkstilgang som alle andre programmer på datamaskinen din. Altså kjører en skill du installerer i en lokal agent, med dine privilegier.

Derfor er prinsippet om minste privilegium avgjørende. I Claude Code gjør feltet allowed-tools i frontmatter at bestemte verktøy kan brukes uten å spørre om tillatelse når skillen kalles. Ifølge dokumentasjonen nullstilles denne tillatelsen ved neste melding. Likevel er det en god vane å ikke installere en skill andre har skrevet med brede tillatelser uten å ha godkjent det bevisst.

For hemmelige nøkler er regelen enkel: skriv aldri API-nøkler, passord eller tilgangstokens i SKILL.md eller skill-mappen. Når du deler skillen eller sender den til et repo, følger alt i mappen med. Ha nøklene i miljøvariabler eller i den sikre legitimasjonslagringen til verktøyet du bruker, og fortell bare skillen hvordan den får tilgang til dem.

Per oktober 2026 vokser skill-økosystemet svært raskt, og denne veksten minner om sikkerhetsproblemene i appbutikkenes første år. Den gode nyheten er at det er mye enklere å lese en skill enn å lese kildekoden til en app, siden mesteparten er ren tekst.

Åpner og leser du en skill før du installerer den, eller stoler du på antall stjerner og nedlastinger?
