---
title: "Kirjoita oma skill: ensimmäinen taito SKILL.md:llä askel askeleelta"
excerpt: "Yksi kansio, yksi SKILL.md ja hyvin kirjoitettu kuvaus. Oman Agent Skillin kirjoittamisen vaiheet, description-kentän merkitys ja testaustapa."
hook: "Skillin laukaisee sen kuvaus"
fact: "1 024"
factLabel: "description-kentän enimmäismerkkimäärä"
category: "Tekoäly"
---
Skillin kirjoittamiseen ei tarvitse olla ohjelmoija. Yksinkertaisimmillaan riittää kansio ja siinä yksi tekstitiedosto. Mutta hyvin toimivan ja ei koskaan laukeavan skillin ero piilee usein yhdessä lauseessa: kuvauksessa. Tässä jutussa kirjoitamme nollasta pienen mutta oikean skillin.

## Vaihe 1: Luo kansio ja SKILL.md

Agent Skills -määrittelyn mukaan skill on kansio, jossa on vähintään yksi SKILL.md-tiedosto. Tiedoston alussa on YAML-etuosa (frontmatter), ja siinä kaksi pakollista kenttää:

- **name:** Enintään 64 merkkiä. Vain pieniä kirjaimia, numeroita ja tavuviivoja. Ei saa alkaa eikä loppua tavuviivaan, ei saa sisältää kahta peräkkäistä tavuviivaa, ja sen on oltava sama kuin kansion nimi. Clauden dokumentaatio huomauttaa lisäksi, ettei nimessä saa käyttää sanoja "anthropic" ja "claude".
- **description:** Ei saa olla tyhjä, enintään 1 024 merkkiä. Sen pitää kertoa, mitä skill tekee ja milloin sitä käytetään.

Valinnaisiakin kenttiä on (license, compatibility, metadata ja kokeellinen allowed-tools), mutta useimmat skillit pärjäävät ilman.

## Vaihe 2: Kirjoita kuvaus huolella

Miksi kuvaus on niin tärkeä? Koska agentti lukee käynnistyksessä jokaisesta skillistä vain nimen ja kuvauksen. agentskills.io:n sanoin laukeamisen "koko taakka" on kuvauksen harteilla. Jos kuvaus ei kerro, milloin skillistä on hyötyä, agentti ei tartu siihen.

Lähteiden suositukset voi tiivistää näin:

- Kirjoita sekä **mitä se tekee** että **milloin sitä käytetään**.
- Clauden dokumentaatio suosittelee kirjoittamaan kuvauksen **kolmannessa persoonassa**, koska se lisätään järjestelmäkehotteeseen ("Käsittelee Excel-tiedostoja", ei "Voin auttaa sinua").
- agentskills.io suosittelee luettelemaan selvästi myös tilanteet, joissa käyttäjä ei mainitse aluetta nimeltä.
- Pidä lyhyenä: muutama lause, enintään lyhyt kappale. Claude Code typistää kuvauksen luettelossa 1 536 merkkiin, joten tärkein käyttötapaus kuuluu alkuun.

## Vaihe 3: Pidä runko lyhyenä ja skripti älykkäänä

Ajatellaan esimerkiksi tämän blogin omaa kirjoitussääntöä noudattavaa skilliä: tekstiin ei saa jäädä pitkää ajatusviivaa (em dash) eikä lyhyttä ajatusviivaa (en dash). Kansiorakenne olkoon tämä:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

SKILL.md-tiedosto on näin lyhyt:

```markdown
---
name: tire-denetimi
description: Etsii pitkän ajatusviivan (U+2014) ja lyhyen ajatusviivan (U+2013) käytön blogijutuista ja ehdottaa korjauksia. Käytetään, kun käyttäjä valmistelee Markdown-juttua julkaisuun, sanoo "tarkista ajatusviivat" tai "noudattaako tämä kirjoitussääntöjä", tai pyytää viimeistä tarkistusta ennen julkaisua mainitsematta sitä nimeltä.
---

# Ajatusviivojen tarkistus

1. Aja komento `python scripts/tire_bul.py <tiedosto.md>`.
2. Ehdota jokaiselle tulosteen rivillä olevalle viivalle korvaajaksi pistettä, pilkkua, kaksoispistettä tai sulkeita.
3. Älä muuta merkitystä. Kysy käyttäjältä rivit, joista et ole varma.
4. Kerro lopuksi yhdellä lauseella, montako riviä korjasit.
```

Clauden dokumentaatio pitää kontekstiikkunaa "yhteisenä resurssina" ja suosittelee lisäämään vain tietoa, jota malli ei jo tiedä. Rungon tulisi pysyä alle 500 rivin. Pitkät viitetekstit kannattaa siirtää erillisiin tiedostoihin ja linkittää ne SKILL.md:stä yhden tason syvyydeltä.

Skripteille sääntö on selvä: "ratkaise, älä heitä pallo eteenpäin". Eli skriptin pitää käsitellä virhetilanteet itse eikä olla kirjoitettu ajatuksella "kaatukoon, kyllä Claude keksii keinon". Kun skripti ajetaan, kontekstiin ei mene koodi vaan pelkkä tuloste. Siksi skripti on ohjetta luotettavampi toistuviin, virheitä sietämättömiin tehtäviin.

> **Tiesitkö?** Claude Codessa vanhat "omat vinoviivakomennot" yhdistyivät skilleihin. Tiedosto .claude/commands/deploy.md ja tiedosto .claude/skills/deploy/SKILL.md luovat saman /deploy-komennon. Jos et halua skillin laukeavan automaattisesti, lisää frontmatteriin disable-model-invocation: true, jolloin sen voi kutsua vain käsin.

## Vaihe 4: Testaa, ja testaa vielä

Clauden parhaiden käytäntöjen opas suosittelee valmistelemaan arviointiskenaariot ennen pitkän dokumentin kirjoittamista, ja ennen julkaisua tarkistuslistalla on vähintään kolme arviointia sekä erilliset testit Haiku-, Sonnet- ja Opus-malleilla. Perustelu on yksinkertainen: Opuksella moitteettomasti toimiva ohje voi vaatia Haikulle enemmän yksityiskohtia.

Laukeamisen testaamiseen agentskills.io:n ehdotus on konkreettinen: valmistele noin 20 esimerkkikäyttäjäviestiä. Niistä 8-10:n pitäisi laukaista skill ja 8-10:n ei. Arvokkaimmat kielteiset esimerkit ovat "täpärästi ohi menevät", eli viestit, jotka käyttävät samoja sanoja mutta pyytävät eri työtä. Koska mallin käytös ei ole joka kerta sama, kunkin viestin ajamista useita kertoja (aluksi 3) ja laukeamisosuuden tarkastelua suositellaan.

| Huono kuvaus | Hyvä kuvaus |
|---|---|
| "Auttaa PDF-tiedostojen kanssa." | Kertoo, mitä se tekee ja milloin sitä käytetään |
| Pelkkiä teknisiä yksityiskohtia | Kuvaa käyttäjän aikomuksen |
| Kattaa kaiken | Kertoo myös, mitä se ei tee |

Käyttöönotto on yksinkertaista: Claude Codessa riittää, kun laitat kansion hakemiston ~/.claude/skills/ alle (henkilökohtainen) tai projektin .claude/skills/-kansioon. Claude Code seuraa näitä kansioita ja huomaa muutokset saman istunnon aikana ilman uudelleenkäynnistystä. claude.ai:ssa skillin voi ladata asetuksista zip-tiedostona.

Minkä toistuvan työsi automatisoisi ensimmäinen skillisi?
