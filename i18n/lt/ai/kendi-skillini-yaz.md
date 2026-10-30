---
title: "Parašyk savo skill: pirmasis įgūdis žingsnis po žingsnio su SKILL.md"
excerpt: "Aplankas, SKILL.md ir gerai parašytas aprašymas. Savo Agent Skill rašymo žingsniai, lauko description svarba ir testavimo metodas."
hook: "Skill suaktyvina aprašymas"
fact: "1 024"
factLabel: "Didžiausias description lauko simbolių skaičius"
category: "Dirbtinis intelektas"
---

Kad parašytum skill, programuotoju būti nereikia. Paprasčiausiu atveju pakanka aplanko ir jame vieno tekstinio failo. Tačiau skirtumas tarp gerai veikiančio skill ir niekada nesuaktyvinamo skill dažnai slypi viename sakinyje: aprašyme. Šiame straipsnyje nuo nulio rašome mažą, bet tikrą skill.

## 1 žingsnis: sukurk aplanką ir SKILL.md

Pagal Agent Skills specifikaciją, skill yra aplankas, kuriame yra bent failas SKILL.md. Failo pradžioje yra YAML priešakinė dalis (frontmatter), ir du laukai privalomi:

- **name:** Daugiausia 64 simboliai. Tik mažosios raidės, skaitmenys ir brūkšnelis. Negali prasidėti ar baigtis brūkšneliu, negali turėti dviejų brūkšnelių iš eilės ir turi sutapti su aplanko pavadinimu. Claude dokumentacija taip pat nurodo, kad pavadinime negalima vartoti žodžių "anthropic" ir "claude".
- **description:** Negali būti tuščias, daugiausia 1 024 simboliai. Turi paaiškinti, ką skill daro ir kada naudojamas.

Yra ir nebūtinų laukų (license, compatibility, metadata ir eksperimentinis allowed-tools), bet daugumai skill jų nereikia.

## 2 žingsnis: aprašymą rašyk kruopščiai

Kodėl aprašymas toks svarbus? Nes paleidimo metu agentas skaito tik kiekvieno skill pavadinimą ir aprašymą. agentskills.io žodžiais, suaktyvinimo "visa našta" gula ant aprašymo pečių. Jei aprašymas nepasako, kada darbas pravers, agentas to skill nepaims.

Šaltinių rekomendacijas galima apibendrinti taip:

- Rašyk ir **ką daro**, ir **kada naudojamas**.
- Claude dokumentacija rekomenduoja aprašymą rašyti **trečiuoju asmeniu**, nes jis pridedamas prie sistemos užklausos ("Apdoroja Excel failus", o ne "Galiu tau padėti").
- agentskills.io rekomenduoja aiškiai išvardyti ir atvejus, kai naudotojas srities pavadinimu nemini.
- Rašyk trumpai: keli sakiniai, daugiausia trumpa pastraipa. Claude Code sąraše aprašymą nukerta ties 1 536 simboliais, todėl svarbiausias naudojimo atvejis turi būti pradžioje.

## 3 žingsnis: turinį laikyk trumpą, scenarijų protingą

Pavyzdžiui, įsivaizduokime skill, atitinkantį šio tinklaraščio rašymo taisyklę: tekste neturi likti ilgojo brūkšnio (em dash) ir vidutinio brūkšnio (en dash). Aplanko struktūra tebūnie tokia:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

O SKILL.md failas yra toks:

```markdown
---
name: tire-denetimi
description: Randa ilgojo brūkšnio (U+2014) ir vidutinio brūkšnio (U+2013) vartojimą tinklaraščio straipsniuose ir siūlo taisymus. Naudojamas, kai naudotojas ruošia Markdown straipsnį publikavimui, sako "patikrink brūkšnius", "ar atitinka rašymo taisykles", arba, nors to neįvardydamas, prašo galutinio patikrinimo prieš publikavimą.
---

# Brūkšnių patikra

1. Paleisk komandą `python scripts/tire_bul.py <failas.md>`.
2. Kiekvienai išvesties eilutei pasiūlyk brūkšnį pakeisti tašku, kableliu, dvitaškiu ar skliaustais.
3. Nekeisk prasmės. Dėl eilučių, kuriomis nesi tikras, paklausk naudotojo.
4. Pabaigoje vienu sakiniu pranešk, kiek eilučių ištaisei.
```

Claude dokumentacija kontekstinį langą laiko "bendru ištekliumi" ir rekomenduoja pridėti tik tokią informaciją, kurios modelis dar nežino. Turinys turi likti trumpesnis nei 500 eilučių. Ilgi informaciniai tekstai turi būti perkelti į atskirus failus, o nuoroda į juos iš SKILL.md turi būti tik vieno lygio.

Scenarijų taisyklė taip pat aiški: "išspręsk, o ne permesk kamuoliuką". Tai yra scenarijus klaidų atvejus turi tvarkyti pats, neturi būti rašomas pagal logiką "tegul lūžta, Claude kažką sugalvos". Kai scenarijus paleidžiamas, į kontekstą patenka ne pats kodas, o tik jo išvestis. Dėl to pasikartojančioms ir klaidų nepakenčiančioms užduotims scenarijus yra patikimesnis už instrukciją.

> **Ar žinojai?** Claude Code ankstesnės "pasirinktinės pasvirojo brūkšnio komandos" susijungė su skill. Failas .claude/commands/deploy.md ir failas .claude/skills/deploy/SKILL.md sukuria tą pačią komandą /deploy. Jei nenori, kad skill būtų aktyvuojamas automatiškai, į frontmatter įrašęs disable-model-invocation: true gali jį iškviesti tik rankiniu būdu.

## 4 žingsnis: išbandyk, o paskui išbandyk dar kartą

Claude geriausių praktikų vadovas rekomenduoja prieš rašant ilgą dokumentą pasirengti vertinimo scenarijus, o prieš publikavimą kontrolinis sąrašas apima bent tris vertinimus ir atskirą testavimą su Haiku, Sonnet ir Opus modeliais. Priežastis paprasta: instrukcija, puikiai veikianti su Opus, Haiku gali reikalauti daugiau detalių.

Aktyvavimui testuoti agentskills.io patarimas konkretus: paruošk maždaug 20 naudotojo žinučių pavyzdžių. Iš jų 8-10 turi suaktyvinti skill, o 8-10 neturi. Vertingiausi neigiami pavyzdžiai yra "vos nepataikantys", tai yra žinutės, kuriose vartojami tie patys žodžiai, bet prašoma kito darbo. Kadangi modelio elgesys ne kiekvieną kartą vienodas, rekomenduojama kiekvieną žinutę paleisti kelis kartus (pradžiai 3) ir stebėti aktyvavimo dažnį.

| Blogas aprašymas | Geras aprašymas |
|---|---|
| "Padeda su PDF." | Pasako, ką daro ir kada naudojamas |
| Tik techninės detalės | Aprašo naudotojo ketinimą |
| Apima viską | Nurodo ir tai, ko nedaro |

Diegimas irgi paprastas: Claude Code pakanka aplanką įdėti į ~/.claude/skills/ (asmeniniam) arba į projekto aplanką .claude/skills/. Claude Code stebi šiuos aplankus ir pakeitimus aptinka toje pačioje sesijoje be perkrovimo. claude.ai skill gali įkelti zip formatu per nustatymus.

Kokį pasikartojantį savo darbą automatizuotų tavo pirmasis skill?
