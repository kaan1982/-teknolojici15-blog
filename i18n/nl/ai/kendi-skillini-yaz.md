---
title: "Schrijf je eigen skill: je eerste vaardigheid met SKILL.md, stap voor stap"
excerpt: "Een map, een SKILL.md en een goed geschreven beschrijving. De stappen om je eigen Agent Skill te schrijven, het belang van het veld description en hoe je test."
hook: "De beschrijving activeert de skill"
fact: "1.024"
factLabel: "Maximaal aantal tekens voor het veld description"
category: "AI"
---
Om een skill te schrijven hoef je geen programmeur te zijn. In de eenvoudigste vorm volstaan een map en één tekstbestand. Maar het verschil tussen een skill die goed werkt en een skill die nooit activeert zit vaak in één zin: de beschrijving. In dit artikel schrijven we vanaf nul een kleine maar echte skill.

## Stap 1: Maak de map en SKILL.md

Volgens de specificatie van Agent Skills is een skill een map met minstens één bestand SKILL.md. Bovenaan het bestand staat YAML-voorwerk (frontmatter), met twee verplichte velden:

- **name:** Maximaal 64 tekens. Alleen kleine letters, cijfers en streepjes. Mag niet beginnen of eindigen met een streepje, mag geen twee streepjes achter elkaar bevatten en moet gelijk zijn aan de naam van de map. De documentatie van Claude vermeldt bovendien dat de woorden "anthropic" en "claude" niet in de naam mogen voorkomen.
- **description:** Mag niet leeg zijn, maximaal 1.024 tekens. Moet beschrijven wat de skill doet en wanneer hij gebruikt moet worden.

Er zijn ook optionele velden (license, compatibility, metadata en het experimentele allowed-tools), maar voor de meeste skills zijn die niet nodig.

## Stap 2: Schrijf de beschrijving zorgvuldig

Waarom is de beschrijving zo belangrijk? Omdat de agent bij het opstarten van elke skill alleen de naam en de beschrijving leest. In de woorden van agentskills.io rust "de hele last" van het activeren op de beschrijving. Als die niet vertelt wanneer de skill van pas komt, grijpt de agent er niet naar.

De aanbevelingen van de bronnen komen kort samengevat hierop neer:

- Schrijf op wat hij **doet** en **wanneer hij gebruikt wordt**.
- De documentatie van Claude raadt aan de beschrijving in de **derde persoon** te schrijven, omdat zij aan de systeemprompt wordt toegevoegd ("Verwerkt Excel-bestanden", niet "Ik kan je helpen").
- agentskills.io raadt aan ook uitdrukkelijk de gevallen op te sommen waarin de gebruiker het vakgebied niet bij naam noemt.
- Houd het kort: een paar zinnen, hooguit een korte alinea. Claude Code kapt de beschrijving in de lijst af op 1.536 tekens, dus het belangrijkste gebruiksgeval moet vooraan staan.

## Stap 3: Houd de inhoud kort en het script slim

Laten we als voorbeeld een skill nemen die past bij de schrijfregel van deze blog zelf: in de tekst mogen geen lange gedachtestreepjes (em dash) en geen halve gedachtestreepjes (en dash) staan. De mapstructuur kan er zo uitzien:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

En het bestand SKILL.md is niet langer dan dit:

```markdown
name: tire-denetimi
description: Türkçe blog yazılarında uzun tire (U+2014) ve orta tire (U+2013) kullanımını bulur ve düzeltme önerir. Kullanıcı bir Markdown yazısını yayına hazırlarken, "tireleri kontrol et", "yazım kurallarına uyuyor mu" dediğinde ya da adını anmasa da yayın öncesi son kontrol istediğinde kullanılır.

# Tire denetimi

1. `python scripts/tire_bul.py <dosya.md>` komutunu çalıştır.
2. Çıktıdaki her satır için tireyi nokta, virgül, iki nokta veya parantezle değiştirmeyi öner.
3. Anlamı değiştirme. Emin olmadığın satırları kullanıcıya sor.
4. Sonunda kaç satır düzelttiğini tek cümleyle bildir.
```

De documentatie van Claude ziet het contextvenster als een "gemeenschappelijk goed" en raadt aan alleen informatie toe te voegen die het model nog niet kent. De inhoud moet onder de 500 regels blijven. Lange naslagteksten horen in aparte bestanden, met vanuit SKILL.md op één niveau een verwijzing ernaar.

Voor scripts is de regel ook duidelijk: "los het op, schuif het niet door". Een script moet foutsituaties dus zelf afhandelen en niet geschreven zijn volgens het principe "laat maar crashen, Claude vindt wel een weg". Wanneer een script draait, komt niet de code zelf in de context, maar alleen de uitvoer. Dat maakt een script betrouwbaarder dan een instructie bij herhaalde taken die geen fouten verdragen.

> **Wist je dat?** In Claude Code zijn de oude "eigen slash-commando's" samengegaan met skills. Het bestand .claude/commands/deploy.md en het bestand .claude/skills/deploy/SKILL.md maken hetzelfde commando /deploy aan. Wil je niet dat een skill automatisch activeert, dan kun je disable-model-invocation: true aan de frontmatter toevoegen en hem alleen handmatig aanroepen.

## Stap 4: Test, en test nog eens

De gids met best practices van Claude raadt aan om evaluatiescenario's klaar te maken voordat je lange documentatie schrijft. In de checklist voor publicatie staan minstens drie evaluaties en afzonderlijke tests op de modellen Haiku, Sonnet en Opus. De reden is simpel: een instructie die op Opus vlekkeloos werkt, kan voor Haiku meer detail nodig hebben.

Om de activering te testen is de aanbeveling van agentskills.io concreet: maak ongeveer 20 voorbeeldberichten van gebruikers. Daarvan moeten er 8 tot 10 de skill activeren en 8 tot 10 niet. De waardevolste negatieve voorbeelden zijn de "net-niet"-gevallen: berichten die dezelfde woorden gebruiken maar om iets anders vragen. Omdat het gedrag van het model niet elke keer hetzelfde is, wordt aangeraden elk bericht meerdere keren uit te voeren (om te beginnen 3) en naar het activeringspercentage te kijken.

| Slechte beschrijving | Goede beschrijving |
|---|---|
| "Helpt met PDF's." | Zegt wat hij doet en wanneer hij gebruikt wordt |
| Alleen technische details | Beschrijft de bedoeling van de gebruiker |
| Dekt alles | Vermeldt ook wat hij niet doet |

Installeren is ook eenvoudig: in Claude Code zet je de map onder ~/.claude/skills/ (persoonlijk) of in de map .claude/skills/ van het project. Claude Code houdt deze mappen in de gaten en merkt wijzigingen in dezelfde sessie op zonder herstart. Op claude.ai kun je de skill als zip via de instellingen uploaden.

Welke terugkerende klus van jou zou je eerste skill automatiseren?
