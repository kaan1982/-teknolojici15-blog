---
title: "Kirjuta oma skill: esimene oskus SKILL.md-ga samm-sammult"
excerpt: "Üks kaust, üks SKILL.md ja hästi kirjutatud kirjeldus. Oma Agent Skilli kirjutamise sammud, description välja tähtsus ja testimismeetod."
hook: "Skilli käivitab selle kirjeldus"
fact: "1024"
factLabel: "description välja maksimaalne märgipikkus"
category: "Tehisintellekt"
---

Skilli kirjutamiseks ei pea sa programmeerija olema. Kõige lihtsamal kujul piisab ühest kaustast ja selles ühest tekstifailist. Kuid hästi töötava ja üldse mitte käivituva skilli vahe peitub sageli ühes lauses: kirjelduses. Selles loos kirjutame nullist väikese, kuid päris skilli.

## Samm 1: Loo kaust ja SKILL.md

Agent Skillsi spetsifikatsiooni järgi on skill kaust, milles on vähemalt üks fail SKILL.md. Faili alguses on YAML-i eelinfo (frontmatter) ja kaks välja on kohustuslikud:

- **name:** kuni 64 märki. Ainult väiketähed, numbrid ja sidekriipsud. Ei tohi sidekriipsuga algada ega lõppeda, ei tohi sisaldada kahte sidekriipsu järjest ja peab olema sama mis kausta nimi. Claude'i dokumentatsioon märgib lisaks, et nimes ei tohi kasutada sõnu "anthropic" ja "claude".
- **description:** ei tohi olla tühi, kuni 1024 märki. Peab kirjeldama, mida skill teeb ja millal seda kasutada.

Valikulisi välju on samuti (license, compatibility, metadata ja katseline allowed-tools), kuid enamiku skillide jaoks neid vaja pole.

## Samm 2: Kirjuta kirjeldus hoolikalt

Miks on kirjeldus nii oluline? Sest agent loeb käivitamisel iga skilli kohta ainult nime ja kirjeldust. agentskills.io sõnastuses lasub käivitumise "kogu koormus" kirjelduse õlul. Kui kirjeldus ei ütle, millal skillist kasu on, agent selle poole ei sirutugi.

Allikate soovitusi võib kokku võtta nii:

- Kirjuta nii see, **mida see teeb**, kui ka see, **millal seda kasutada**.
- Claude'i dokumentatsioon soovitab kirjutada kirjelduse **kolmandas isikus**, sest see lisatakse süsteemiprompti (näiteks "Töötleb Exceli faile", mitte "Ma võin sind aidata").
- agentskills.io soovitab loetleda selgelt ka olukorrad, kus kasutaja ei nimeta valdkonda nimepidi.
- Hoia lühike: paar lauset, kõige rohkem lühike lõik. Claude Code lõikab kirjelduse loendis 1536 märgi juurest, seega peab kõige olulisem kasutusjuhtum olema alguses.

## Samm 3: Hoia sisu lühike ja skript nutikas

Mõtleme näiteks skillile, mis järgib selle ajaveebi enda kirjutusreeglit: tekstis ei tohi olla pikka kriipsu (em dash) ega keskmist kriipsu (en dash). Kausta struktuur olgu selline:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

Fail SKILL.md on aga nii pikk:

```markdown
---
name: tire-denetimi
description: Leiab türgikeelsetest ajaveebi lugudest pika kriipsu (U+2014) ja keskmise kriipsu (U+2013) kasutuse ning pakub parandusi. Kasutatakse, kui kasutaja valmistab Markdown-lugu avaldamiseks ette, ütleb "kontrolli kriipsud üle" või "kas see järgib kirjutusreegleid", või soovib ilma seda nimetamata enne avaldamist viimast kontrolli.
---

# Kriipsude kontroll

1. Käivita käsk `python scripts/tire_bul.py <fail.md>`.
2. Paku iga väljundis oleva rea kohta kriipsu asendamist punkti, koma, koolonit või sulgudega.
3. Ära muuda tähendust. Küsi kasutajalt nende ridade kohta, milles sa pole kindel.
4. Teata lõpuks ühe lausega, mitu rida sa parandasid.
```

Claude'i dokumentatsioon käsitleb konteksti akent kui "ühist ressurssi" ja soovitab lisada ainult teadmisi, mida mudel juba ei tea. Sisu peaks jääma alla 500 rea. Pikad teatmetekstid tuleks viia eraldi failidesse ja nendele tuleks SKILL.md-st linkida ühe taseme sügavuselt.

Skriptide kohta on reegel samuti selge: "lahenda, ära viska palli edasi". See tähendab, et skript peab veasituatsioonid ise käsitlema, mitte olema kirjutatud loogikaga "las kukub, Claude leiab mingi tee". Skripti käivitamisel satub konteksti mitte kood ise, vaid ainult selle väljund. See muudab skripti korduvate ja vigu mittesallivate tööde puhul töökindlamaks kui juhised.

> **Kas teadsid?** Claude Code'is on varasemad "kohandatud kaldkriipsukäsud" skillidega ühinenud. Fail .claude/commands/deploy.md ja fail .claude/skills/deploy/SKILL.md loovad sama käsu /deploy. Kui sa ei taha, et skill automaatselt käivituks, lisa frontmatterisse disable-model-invocation: true ja saad seda kutsuda ainult käsitsi.

## Samm 4: Testi ja siis testi uuesti

Claude'i parimate tavade juhend soovitab enne pika dokumendi kirjutamist koostada hindamisstsenaariumid ning avaldamiseelses kontrollnimekirjas on vähemalt kolm hindamist ja eraldi test mudelitel Haiku, Sonnet ja Opus. Põhjendus on lihtne: juhis, mis töötab Opuses veatult, võib Haiku jaoks vajada rohkem detaile.

Käivitumise testimiseks on agentskills.io soovitus konkreetne: koosta umbes 20 näidiskasutajasõnumit. Neist 8 kuni 10 peaksid skilli käivitama ja 8 kuni 10 mitte. Kõige väärtuslikumad negatiivsed näited on "napilt möödalaskmised", ehk sõnumid, mis jagavad samu sõnu, kuid soovivad midagi muud. Kuna mudeli käitumine ei ole iga kord sama, soovitatakse iga sõnumit käivitada mitu korda (alustuseks 3) ja vaadata käivitumise määra.

| Halb kirjeldus | Hea kirjeldus |
|---|---|
| "Aitab PDF-idega." | Ütleb, mida see teeb ja millal seda kasutada |
| Ainult tehnilised üksikasjad | Kirjeldab kasutaja kavatsust |
| Katab kõike | Märgib ka, mida see ei tee |

Paigaldus on samuti lihtne: Claude Code'is piisab kausta panemisest kausta ~/.claude/skills/ alla (isiklik) või projekti kausta .claude/skills/. Claude Code jälgib neid kaustu ja tuvastab muudatused samas sessioonis ilma taaskäivitamiseta. claude.ai-s saad skilli seadetest üles laadida zip-failina.

Millist sinu korduvat tööd automatiseeriks sinu esimene skill?
