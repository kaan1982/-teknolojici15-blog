---
title: "Napiši vlastiti skill: prva vještina korak po korak uz SKILL.md"
excerpt: "Jedna mapa, jedan SKILL.md i dobro napisan opis. Koraci pisanja vlastitog Agent Skilla, važnost polja description i način testiranja."
hook: "Skill pokreće njegov opis"
fact: "1.024"
factLabel: "Najveći broj znakova za polje description"
category: "Umjetna inteligencija"
---
Za pisanje skilla ne moraš biti programer. U najjednostavnijem obliku dovoljna je jedna mapa s jednom tekstualnom datotekom. No razlika između skilla koji dobro radi i skilla koji se nikad ne aktivira često je skrivena u jednoj jedinoj rečenici: opisu. U ovom članku od nule pišemo mali, ali pravi skill.

## Korak 1: Napravi mapu i SKILL.md

Prema specifikaciji Agent Skills, skill je mapa koja sadrži barem jednu datoteku SKILL.md. Na samom početku datoteke nalazi se YAML uvod (frontmatter) s dva obvezna polja:

- **name:** Najviše 64 znaka. Samo mala slova, brojevi i crtice. Ne smije počinjati ni završavati crticom, ne smije sadržavati dvije uzastopne crtice i mora biti isti kao naziv mape. Claudeova dokumentacija dodatno navodi da se riječi "anthropic" i "claude" ne smiju koristiti u nazivu.
- **description:** Ne smije biti prazan, najviše 1.024 znaka. Mora opisati što skill radi i kada se koristi.

Postoje i neobavezna polja (license, compatibility, metadata i eksperimentalni allowed-tools), ali većini skillova nisu potrebna.

## Korak 2: Pažljivo napiši opis

Zašto je opis toliko važan? Jer agent pri pokretanju čita samo naziv i opis svakog skilla. Prema formulaciji agentskills.io, "cijeli teret" aktivacije leži na opisu. Ako opis ne govori kada će posao biti koristan, agent taj skill neće posegnuti.

Preporuke izvora mogu se sažeti ovako:

- Napiši i **što radi** i **kada se koristi**.
- Claudeova dokumentacija preporučuje da se opis piše u **trećem licu** jer se dodaje u sistemski prompt ("Obrađuje Excel datoteke", a ne "Mogu ti pomoći").
- agentskills.io preporučuje da se izričito navedu i situacije u kojima korisnik to područje ne spominje imenom.
- Neka bude kratko: nekoliko rečenica, najviše kratki odlomak. Claude Code u popisu skraćuje opis na 1.536 znakova, pa najvažniji slučaj uporabe treba biti na početku.

## Korak 3: Tijelo neka bude kratko, a skripta pametna

Kao primjer zamislimo skill u skladu s pravilom pisanja ovog bloga: u tekstu ne smije ostati duga crtica (em dash) ni srednja crtica (en dash). Struktura mape neka bude ovakva:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

A datoteka SKILL.md je ovolika:

```markdown
name: tire-denetimi
description: Türkçe blog yazılarında uzun tire (U+2014) ve orta tire (U+2013) kullanımını bulur ve düzeltme önerir. Kullanıcı bir Markdown yazısını yayına hazırlarken, "tireleri kontrol et", "yazım kurallarına uyuyor mu" dediğinde ya da adını anmasa da yayın öncesi son kontrol istediğinde kullanılır.

# Tire denetimi

1. `python scripts/tire_bul.py <dosya.md>` komutunu çalıştır.
2. Çıktıdaki her satır için tireyi nokta, virgül, iki nokta veya parantezle değiştirmeyi öner.
3. Anlamı değiştirme. Emin olmadığın satırları kullanıcıya sor.
4. Sonunda kaç satır düzelttiğini tek cümleyle bildir.
```

Claudeova dokumentacija kontekstni prozor smatra "zajedničkim resursom" i preporučuje dodavanje samo onih informacija koje model već ne zna. Tijelo treba ostati ispod 500 redaka. Duge referentne tekstove treba premjestiti u zasebne datoteke, a na te datoteke iz SKILL.md treba povezati samo na jednoj razini.

Za skripte vrijedi jasno pravilo: "riješi, ne prebacuj lopticu". Dakle, skripta treba sama obraditi situacije s greškom, a ne biti pisana po logici "neka pukne, Claude će već naći način". Kad se skripta izvrši, u kontekst ne ulazi sam kôd, nego samo njezin izlaz. Zbog toga je skripta pouzdanija od uputa za ponavljajuće poslove koji ne trpe greške.

> **Jesi li znao?** U Claude Codeu su se stare "prilagođene naredbe s kosom crtom" spojile sa skillovima. Datoteka .claude/commands/deploy.md i datoteka .claude/skills/deploy/SKILL.md stvaraju istu naredbu /deploy. Ako ne želiš da se skill aktivira automatski, u frontmatter dodaj disable-model-invocation: true i možeš ga pozivati samo ručno.

## Korak 4: Testiraj, pa opet testiraj

Claudeov vodič za najbolje prakse preporučuje da se prije pisanja dugog dokumenta pripreme scenariji za evaluaciju, a kontrolni popis prije objave uključuje najmanje tri evaluacije i zasebno testiranje na modelima Haiku, Sonnet i Opus. Razlog je jednostavan: uputa koja savršeno radi na Opusu na Haikuu može zahtijevati više pojedinosti.

Za testiranje aktivacije prijedlog agentskills.io je konkretan: pripremi oko 20 primjera korisničkih poruka. Od njih 8 do 10 treba aktivirati skill, a 8 do 10 ne treba. Najvrjedniji negativni primjeri su oni koji "za dlaku promaše", dakle poruke koje dijele iste riječi, ali traže drugi posao. Budući da se ponašanje modela ne ponavlja svaki put isto, preporučuje se svaku poruku pokrenuti nekoliko puta (za početak 3) i pogledati stopu aktivacije.

| Loš opis | Dobar opis |
|---|---|
| "Pomaže s PDF-ovima." | Kaže što radi i kada se koristi |
| Samo tehnički detalji | Opisuje namjeru korisnika |
| Obuhvaća sve | Navodi i što ne radi |

Instalacija je također jednostavna: u Claude Codeu dovoljno je staviti mapu u ~/.claude/skills/ (osobno) ili u mapu .claude/skills/ projekta. Claude Code prati te mape i prepoznaje promjene u istoj sesiji bez ponovnog pokretanja. Na claude.ai skill možeš učitati kao zip iz postavki.

Koji bi tvoj prvi skill automatizirao od poslova koje ponavljaš?
