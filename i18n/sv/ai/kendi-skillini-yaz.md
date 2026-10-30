---
title: "Skriv din egen skill: din första färdighet steg för steg med SKILL.md"
excerpt: "En mapp, en SKILL.md och en väl skriven beskrivning. Stegen för att skriva din egen Agent Skill, beskrivningsfältets betydelse och hur du testar."
hook: "Det är beskrivningen som utlöser skillen"
fact: "1 024"
factLabel: "Största antal tecken i fältet description"
category: "AI"
---

Du behöver inte vara programmerare för att skriva en skill. I sin enklaste form räcker en mapp med en enda textfil. Men skillnaden mellan en skill som fungerar bra och en som aldrig utlöses ligger ofta i en enda mening: beskrivningen. I den här artikeln skriver vi en liten men riktig skill från grunden.

## Steg 1: Skapa mappen och SKILL.md

Enligt specifikationen för Agent Skills är en skill en mapp med minst en SKILL.md-fil. Allra först i filen finns YAML-frontmatter, och två fält är obligatoriska:

- **name:** Högst 64 tecken. Bara gemener, siffror och bindestreck. Får inte börja eller sluta med bindestreck, får inte innehålla två bindestreck i rad och måste vara samma som mappens namn. Claudes dokumentation anger dessutom att orden "anthropic" och "claude" inte får användas i namnet.
- **description:** Får inte vara tom, högst 1 024 tecken. Den ska beskriva vad skillen gör och när den ska användas.

Det finns också valfria fält (license, compatibility, metadata och det experimentella allowed-tools), men de behövs inte för de flesta skills.

## Steg 2: Skriv beskrivningen med omsorg

Varför är beskrivningen så viktig? För att agenten vid start bara läser namnet och beskrivningen på varje skill. Med agentskills.ios ord vilar "hela bördan" av utlösningen på beskrivningen. Om beskrivningen inte säger när jobbet behövs sträcker sig agenten inte efter den skillen.

Källornas råd kan sammanfattas så här:

- Skriv både **vad den gör** och **när den ska användas**.
- Claudes dokumentation rekommenderar att beskrivningen skrivs i **tredje person**, eftersom den läggs in i systemprompten ("Bearbetar Excel-filer", inte "Jag kan hjälpa dig").
- agentskills.io rekommenderar att du också uttryckligen listar fall där användaren inte nämner området vid namn.
- Håll den kort: några meningar, högst ett kort stycke. Claude Code kapar beskrivningen vid 1 536 tecken i listan, så det viktigaste användningsfallet ska stå först.

## Steg 3: Håll innehållet kort och skriptet smart

Låt oss som exempel tänka oss en skill som följer den här bloggens egen skrivregel: inga långa tankstreck (em dash) eller korta tankstreck (en dash) i texten. Mappstrukturen kan se ut så här:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

SKILL.md-filen är så här kort:

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

Claudes dokumentation ser kontextfönstret som en "gemensam resurs" och rekommenderar att du bara lägger till information som modellen inte redan kan. Innehållet bör hållas under 500 rader. Långa referenstexter ska flyttas till separata filer, och SKILL.md ska länka till dem på bara en nivå.

Regeln för skript är också tydlig: "lös problemet, skicka det inte vidare". Skriptet ska alltså hantera felfall själv och inte skrivas med resonemanget "låt det krascha, Claude hittar en lösning". När skriptet körs hamnar inte koden i kontexten, bara dess utdata. Det gör skriptet mer pålitligt än instruktioner för uppgifter som upprepas och inte tål fel.

> **Visste du det?** I Claude Code har de gamla "anpassade snedstreckskommandona" slagits ihop med skills. Filen .claude/commands/deploy.md och filen .claude/skills/deploy/SKILL.md skapar samma kommando /deploy. Om du inte vill att en skill ska utlösas automatiskt kan du lägga till disable-model-invocation: true i frontmatter och bara anropa den manuellt.

## Steg 4: Testa, och testa sedan igen

Claudes guide för bästa praxis rekommenderar att du förbereder utvärderingsscenarier innan du skriver långa dokument, och checklistan före publicering innehåller minst tre utvärderingar samt test separat på modellerna Haiku, Sonnet och Opus. Skälet är enkelt: en instruktion som fungerar perfekt på Opus kan behöva fler detaljer för Haiku.

För att testa utlösningen är agentskills.ios förslag konkret: förbered cirka 20 exempel på användarmeddelanden. Av dem bör 8 till 10 utlösa skillen och 8 till 10 inte göra det. De mest värdefulla negativa exemplen är de som "nästan träffar", alltså meddelanden som delar samma ord men ber om något annat. Eftersom modellens beteende inte är detsamma varje gång rekommenderas att köra varje meddelande flera gånger (3 till att börja med) och titta på hur ofta skillen utlöses.

| Dålig beskrivning | Bra beskrivning |
|---|---|
| "Hjälper till med PDF:er." | Säger vad den gör och när den ska användas |
| Bara tekniska detaljer | Beskriver användarens avsikt |
| Täcker allt | Anger också vad den inte gör |

Installationen är också enkel: i Claude Code räcker det att lägga mappen under ~/.claude/skills/ (personligt) eller i projektets .claude/skills/-mapp. Claude Code bevakar de här mapparna och upptäcker ändringar i samma session utan omstart. På claude.ai kan du ladda upp skillen som en zip-fil i inställningarna.

Vilken av dina upprepade uppgifter skulle din första skill automatisera?
