---
title: "Skillbeveiliging: alles wat je moet lezen voordat je installeert"
excerpt: "Skills kunnen code uitvoeren en instructies van externe bronnen ophalen. Een gids over betrouwbare bronnen, controle van SKILL.md en scripts, minimale rechten en geheime sleutels."
hook: "Een skill installeren is software installeren"
fact: "13,4%"
factLabel: "Aandeel skills met kritieke kwetsbaarheden (Snyk, 2026)"
category: "AI"
---
Wat skills zo krachtig maakt, maakt ze ook riskant: een skill kan niet alleen tekst bevatten, maar ook uitvoerbare code. Zodra de agent die skill laadt, volgt hij de instructies erin als waren het zijn eigen instructies en kan hij de scripts uitvoeren. Daarom is het advies uit de documentatie van Claude in één zin samen te vatten: behandel het installeren van een skill als het installeren van software.

## Wat zeggen de officiële bronnen?

Het beveiligingsgedeelte in de documentatie van Claude is vrij direct. Het raadt aan skills alleen uit vertrouwde bronnen te gebruiken, dus die je zelf hebt geschreven of van Anthropic hebt gekregen. Moet je een skill uit een onbekende bron gebruiken, dan moet je "uiterst voorzichtig" zijn en hem voor gebruik van begin tot eind controleren.

Het engineeringartikel van Anthropic volgt dezelfde lijn: bij skills uit minder vertrouwde bronnen raadt het aan de meegeleverde bestanden te onderzoeken, vooral de code-afhankelijkheden en scripts, en instructies te controleren die verbinding met externe netwerken voorschrijven. De documentatie benadrukt ook één risico in het bijzonder: skills die gegevens van externe adressen ophalen zijn gevaarlijk, omdat de opgehaalde inhoud kwaadaardige instructies kan bevatten.

## Wat gebeurt er in de praktijk?

Deze waarschuwingen zijn niet theoretisch. Het beveiligingsbedrijf Snyk scande in zijn onderzoek "ToxicSkills", gepubliceerd op 5 februari 2026, 3.984 skills uit ClawHub en skills.sh. De resultaten:

| Bevinding | Aantal |
|---|---|
| Gescande skills | 3.984 |
| Met minstens één beveiligingsprobleem | 1.467 (36,82 procent) |
| Met minstens één kritiek probleem | 534 (13,4 procent) |
| Bevestigde kwaadaardige payload | 76 |

Volgens het rapport omvat de data van skills.sh alleen de geselecteerde top 100 skills van die site, terwijl de cijfers voor de volledige markt gelden voor ClawHub. Onder de waargenomen aanvalstypen zitten installatie-instructies die de gebruiker aansporen onbetrouwbare software te downloaden en uit te voeren, verhulde opdrachten (gecamoufleerd met Base64 of Unicode) die inloggegevens naar de aanvaller sturen, het uitschakelen van beveiligingscontroles en pogingen om een achterdeur te installeren. Bij 91 procent van de bevestigde kwaadaardige skills werd promptinjectie (prompt injection) gebruikt.

> **Wist je dat?** Volgens het Claude Helpcentrum kunnen Enterprise-organisaties skillscanning inschakelen, die geüploade skills en plugins op kwaadaardige inhoud controleert. Maar dat is een vangnet en geen vervanging voor lezen. Wat een skill doet begrijp je het best door voor het installeren zelf zijn SKILL.md en scripts te openen en te lezen.

## Checklist voor het installeren

Een praktische lijst, afgeleid van de aanbevelingen in de documentatie en de bevindingen uit het veld:

1. **Controleer de bron.** Van wie is de repository? Een officieel bedrijf of een bekende ontwikkelaar, of een kopie die sterk lijkt op een bekend pakket (typosquatting)?
2. **Lees SKILL.md van begin tot eind.** Uitdrukkingen als "download dit eerst en voer het uit", "zet de beveiligingsinstelling uit" of "stuur dit naar dit adres" zijn alarmsignalen.
3. **Bekijk de map scripts/.** Zie je regels die je niet kunt lezen, die verhuld zijn of in Base64 zijn gecodeerd, installeer dan niet.
4. **Controleer externe verbindingen.** Haalt de skill instructies of gegevens van een webadres, bedenk dan dat die inhoud elk moment kan veranderen.
5. **Installeer wat je nodig hebt.** Skills een voor een kiezen in plaats van "alles installeren" verkleint zowel de context als het aanvalsoppervlak.

## Minimale rechten en geheime sleutels

Ook waar een skill draait is belangrijk. Volgens de documentatie van Claude hebben skills in de Claude API-omgeving geen netwerktoegang en kunnen ze tijdens het uitvoeren geen pakketten installeren. Op claude.ai kan de netwerktoegang volledig, gedeeltelijk of uitgeschakeld zijn, afhankelijk van de instellingen van gebruiker en beheerder. In Claude Code hebben skills evenveel netwerktoegang als elk ander programma op je computer. Een skill die je op een lokale agent installeert, werkt dus met jouw rechten.

Daarom is het principe van minimale rechten cruciaal. In Claude Code zorgt het veld allowed-tools in de frontmatter van een skill ervoor dat bepaalde tools zonder toestemmingsvraag gebruikt kunnen worden wanneer die skill wordt aangeroepen. Volgens de documentatie wordt die toestemming bij je volgende bericht gereset. Toch is het een goede gewoonte om een skill van iemand anders met ruime rechten niet te installeren zonder daar bewust mee akkoord te gaan.

Voor geheime sleutels is de regel simpel: schrijf API-sleutels, wachtwoorden en toegangstokens nooit in SKILL.md of in de skillmap. Als je de skill deelt of naar een repository pusht, gaat alles in die map mee. Bewaar sleutels in omgevingsvariabelen of in de veilige opslag voor inloggegevens van de tool die je gebruikt, en vertel de skill alleen hoe hij ze kan benaderen.

Per oktober 2026 groeit het skill-ecosysteem razendsnel, en die groei doet denken aan de beveiligingsproblemen uit de beginjaren van appstores. Het goede nieuws: een skill lezen is veel makkelijker dan de broncode van een app lezen, want het grootste deel is gewone tekst.

Open en lees jij een skill voordat je hem installeert, of vertrouw je op het aantal sterren en downloads?
