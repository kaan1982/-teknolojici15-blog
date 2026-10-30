---
title: "Skriv din egen skill: den første ferdigheten steg for steg med SKILL.md"
excerpt: "En mappe, en SKILL.md og en godt skrevet beskrivelse. Trinnene for å skrive din egen Agent Skill, hvorfor description-feltet er viktig, og hvordan du tester."
hook: "Beskrivelsen utløser skillen"
fact: "1 024"
factLabel: "Maks antall tegn i description-feltet"
category: "Kunstig intelligens"
---

Du trenger ikke være programmerer for å skrive en skill. I sin enkleste form holder det med en mappe og én enkelt tekstfil i den. Men forskjellen mellom en skill som fungerer godt og en som aldri utløses, ligger ofte i én eneste setning: beskrivelsen. I denne artikkelen skriver vi en liten, men ekte skill fra bunnen av.

## Trinn 1: Lag mappen og SKILL.md

Ifølge Agent Skills-spesifikasjonen er en skill en mappe som inneholder minst en SKILL.md-fil. Helt øverst i filen står YAML-frontmatter, og to felt er obligatoriske:

- **name:** Maks 64 tegn. Bare små bokstaver, tall og bindestrek. Kan ikke begynne eller slutte med bindestrek, kan ikke inneholde to bindestreker på rad og må være lik navnet på mappen. Claude-dokumentasjonen nevner også at ordene «anthropic» og «claude» ikke kan brukes i navnet.
- **description:** Kan ikke være tom, maks 1 024 tegn. Den skal forklare hva skillen gjør og når den skal brukes.

Det finnes også valgfrie felt (license, compatibility, metadata og det eksperimentelle allowed-tools), men de trengs ikke for de fleste skills.

## Trinn 2: Skriv beskrivelsen med omhu

Hvorfor er beskrivelsen så viktig? Fordi agenten ved oppstart bare leser navnet og beskrivelsen til hver skill. Med agentskills.ios ord hviler «hele byrden» for utløsing på beskrivelsen. Hvis beskrivelsen ikke sier når skillen er nyttig, rekker ikke agenten ut etter den.

Anbefalingene fra kildene kan oppsummeres slik:

- Skriv både **hva den gjør** og **når den skal brukes**.
- Claude-dokumentasjonen anbefaler å skrive beskrivelsen i **tredje person**, siden den legges inn i systemprompten («Behandler Excel-filer», ikke «Jeg kan hjelpe deg»).
- agentskills.io anbefaler å liste opp eksplisitt også tilfeller der brukeren ikke nevner fagområdet ved navn.
- Hold den kort: noen få setninger, høyst et kort avsnitt. Claude Code kutter beskrivelsen ved 1 536 tegn i listen, så det viktigste bruksområdet bør stå først.

## Trinn 3: Hold innholdet kort og skriptet smart

La oss ta en skill som følger skrivereglene til denne bloggen: ingen lang tankestrek (em dash) eller halv tankestrek (en dash) i teksten. Mappestrukturen kan se slik ut:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

Og SKILL.md er bare så lang:

```markdown
---
name: tire-denetimi
description: Türkçe blog yazılarında uzun tire (U+2014) ve orta tire (U+2013) kullanımını bulur ve düzeltme önerir. Kullanıcı bir Markdown yazısını yayına hazırlarken, "tireleri kontrol et", "yazım kurallarına uyuyor mu" dediğinde ya da adını anmasa da yayın öncesi son kontrol istediğinde kullanılır.
---

# Tire denetimi

1. `python scripts/tire_bul.py <dosya.md>` komutunu çalıştır.
2. Çıktıdaki her satır için tireyi nokta, virgül, iki nokta veya parantezle değiştirmeyi öner.
3. Anlamı değiştirme. Emin olmadığın satırları kullanıcıya sor.
4. Sonunda kaç satır düzelttiğini tek cümleyle bildir.
```

Claude-dokumentasjonen ser på kontekstvinduet som en «felles ressurs» og anbefaler å legge til bare kunnskap som modellen ikke allerede har. Innholdet bør holde seg under 500 linjer. Lange referansetekster bør flyttes til egne filer, og disse filene bør lenkes fra SKILL.md på ett nivå.

Regelen for skript er også tydelig: «løs problemet, ikke skyv det videre». Skriptet skal altså håndtere feilsituasjoner selv, ikke skrives etter tankegangen «la det krasje, Claude finner en løsning». Når et skript kjøres, havner bare utdataene i konteksten, ikke selve koden. Det gjør skript mer pålitelige enn instruksjoner for oppgaver som gjentas og ikke tåler feil.

> **Visste du at?** I Claude Code er de gamle «egendefinerte skråstrekkommandoene» slått sammen med skills. Filen .claude/commands/deploy.md og .claude/skills/deploy/SKILL.md lager den samme /deploy-kommandoen. Hvis du ikke vil at en skill skal utløses automatisk, kan du legge til disable-model-invocation: true i frontmatter og bare kalle den manuelt.

## Trinn 4: Test, og test igjen

Claudes veiledning for beste praksis anbefaler å lage evalueringsscenarier før du skriver lange dokumenter, og sjekklisten før publisering inkluderer minst tre evalueringer og separate tester på modellene Haiku, Sonnet og Opus. Begrunnelsen er enkel: en instruksjon som fungerer perfekt på Opus, kan trenge flere detaljer for Haiku.

For å teste utløsingen er anbefalingen fra agentskills.io konkret: lag omtrent 20 eksempler på brukermeldinger. 8 til 10 av dem bør utløse skillen, og 8 til 10 bør ikke. De mest verdifulle negative eksemplene er «nesten-bom», altså meldinger som deler ord med skillen, men ber om noe annet. Siden modellens oppførsel ikke er lik hver gang, anbefales det å kjøre hver melding flere ganger (3 til å begynne med) og se på utløsningsraten.

| Dårlig beskrivelse | God beskrivelse |
|---|---|
| «Hjelper med PDF-er.» | Sier hva den gjør og når den skal brukes |
| Bare tekniske detaljer | Beskriver brukerens intensjon |
| Dekker alt | Sier også hva den ikke gjør |

Installasjonen er også enkel: i Claude Code er det nok å legge mappen under ~/.claude/skills/ (personlig) eller i prosjektets .claude/skills/-mappe. Claude Code overvåker disse mappene og oppdager endringer i samme økt uten omstart. I claude.ai kan du laste opp skillen som zip fra innstillingene.

Hvilken gjentakende oppgave ville din første skill automatisert?
