---
title: "Skriv din egen skill: den første færdighed trin for trin med SKILL.md"
excerpt: "En mappe, en SKILL.md og en velskrevet beskrivelse. Trinene til at skrive din egen Agent Skill, beskrivelsesfeltets betydning og testmetoden."
hook: "Beskrivelsen udløser skillen"
fact: "1.024"
factLabel: "Maks. antal tegn i description-feltet"
category: "Kunstig intelligens"
---
Du behøver ikke være programmør for at skrive en skill. I sin enkleste form er en mappe med en enkelt tekstfil nok. Men forskellen på en skill, der virker godt, og en, der aldrig udløses, ligger oftest i en enkelt sætning: beskrivelsen. I dette indlæg skriver vi en lille, men ægte skill fra bunden.

## Trin 1: Opret mappen og SKILL.md

Ifølge Agent Skills-specifikationen er en skill en mappe, der mindst indeholder en SKILL.md-fil. Øverst i filen står YAML-frontmatter, og to felter er obligatoriske:

- **name:** Højst 64 tegn. Kun små bogstaver, tal og bindestreg. Må ikke begynde eller slutte med bindestreg, må ikke indeholde to bindestreger i træk og skal være det samme som mappens navn. Claudes dokumentation oplyser desuden, at ordene "anthropic" og "claude" ikke må bruges i navnet.
- **description:** Må ikke være tom, højst 1.024 tegn. Skal beskrive, hvad skillen gør, og hvornår den skal bruges.

Der er også valgfrie felter (license, compatibility, metadata og det eksperimentelle allowed-tools), men de er ikke nødvendige for de fleste skills.

## Trin 2: Skriv beskrivelsen med omhu

Hvorfor er beskrivelsen så vigtig? Fordi agenten ved start kun læser navnet og beskrivelsen på hver skill. Med agentskills.io's ord hviler "hele byrden" for udløsningen på beskrivelsen. Hvis beskrivelsen ikke siger, hvornår arbejdet kommer til nytte, rækker agenten ikke ud efter den skill.

Kildernes anbefalinger kan opsummeres sådan:

- Skriv både **hvad den gør** og **hvornår den skal bruges**.
- Claudes dokumentation anbefaler, at beskrivelsen skrives i **tredje person**, fordi den føjes til systemprompten ("Behandler Excel-filer", ikke "Jeg kan hjælpe dig").
- agentskills.io anbefaler også udtrykkeligt at nævne de tilfælde, hvor brugeren ikke kalder området ved navn.
- Hold den kort: nogle få sætninger, højst et kort afsnit. Claude Code afkorter beskrivelsen ved 1.536 tegn i listen, så det vigtigste anvendelsestilfælde bør stå først.

## Trin 3: Hold indholdet kort og scriptet smart

Lad os som eksempel forestille os en skill, der følger denne bloggs egen skriveregel: ingen tankestreger (em dash) eller korte tankestreger (en dash) i teksten. Mappestrukturen kan se sådan ud:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

Og SKILL.md er ikke længere end dette:

```markdown
name: tire-denetimi
description: Finder brug af tankestreg (U+2014) og kort tankestreg (U+2013) i blogindlæg og foreslår rettelser. Bruges, når brugeren gør et Markdown-indlæg klar til udgivelse, siger "tjek tankestregerne" eller "overholder den skrivereglerne", eller beder om et sidste tjek før udgivelse uden at nævne det ved navn.

# Tankestregstjek

1. Kør kommandoen `python scripts/tire_bul.py <fil.md>`.
2. For hver linje i outputtet foreslås det at erstatte tankestregen med punktum, komma, kolon eller parentes.
3. Ændr ikke meningen. Spørg brugeren om de linjer, du er i tvivl om.
4. Meddel til sidst med én sætning, hvor mange linjer du har rettet.
```

Claudes dokumentation ser kontekstvinduet som en "fælles ressource" og anbefaler kun at tilføje oplysninger, som modellen ikke allerede kender. Indholdet bør holdes under 500 linjer. Lange referencetekster bør flyttes til separate filer, og disse filer bør linkes til fra SKILL.md på kun ét niveau.

Reglen for scripts er også klar: "løs det, skub det ikke videre". Altså skal scriptet selv håndtere fejltilfælde og ikke skrives efter princippet "lad det gå ned, Claude finder en vej". Når scriptet kører, kommer det ikke selve koden, men kun outputtet ind i konteksten. Det gør et script mere pålideligt end en instruktion til opgaver, der gentages, og som ikke tåler fejl.

> **Vidste du det?** I Claude Code er de gamle "brugerdefinerede skråstregskommandoer" smeltet sammen med skills. Filen .claude/commands/deploy.md og .claude/skills/deploy/SKILL.md giver den samme kommando /deploy. Hvis du ikke vil have, at en skill udløses automatisk, kan du tilføje disable-model-invocation: true til frontmatter og kun kalde den manuelt.

## Trin 4: Test, og test så igen

Claudes guide til bedste praksis anbefaler at forberede evalueringsscenarier, før man skriver lange dokumenter, og tjeklisten før udgivelse omfatter mindst tre evalueringer og test på Haiku, Sonnet og Opus hver for sig. Begrundelsen er enkel: En instruktion, der virker fejlfrit på Opus, kan kræve flere detaljer til Haiku.

Til at teste udløsningen er agentskills.io's anbefaling konkret: Forbered cirka 20 eksempelbeskeder fra brugere. 8 til 10 af dem bør udløse skillen, og 8 til 10 bør ikke. De mest værdifulde negative eksempler er "næsten-træffere", altså beskeder, der deler de samme ord, men beder om noget andet. Fordi modellens adfærd ikke er den samme hver gang, anbefales det at køre hver besked flere gange (3 til at begynde med) og se på udløsningsraten.

| Dårlig beskrivelse | God beskrivelse |
|---|---|
| "Hjælper med PDF'er." | Siger, hvad den gør, og hvornår den skal bruges |
| Kun tekniske detaljer | Beskriver brugerens hensigt |
| Dækker alt | Angiver også, hvad den ikke gør |

Installationen er også enkel: I Claude Code er det nok at lægge mappen under ~/.claude/skills/ (personlig) eller i projektets .claude/skills/-mappe. Claude Code overvåger disse mapper og opfanger ændringer i samme session uden genstart. På claude.ai kan du uploade skillen som zip fra indstillingerne.

Hvilket tilbagevendende arbejde ville din første skill automatisere?
