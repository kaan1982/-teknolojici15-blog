---
title: "Mikä on skill? Tekoälyagenttien uudet \"taitokansiot\""
excerpt: "Agent Skill on kansio, jossa on SKILL.md-tiedosto ja tarvittaessa skriptejä. Agentti lataa sen vain tarvittaessa. Miten se eroaa promptista, MCP:stä ja lisäosasta?"
hook: "Opeta agentille uusi taito kansiolla"
fact: "3 TASOA"
factLabel: "Skillin sisällön vaiheittainen lataus"
category: "Tekoäly"
---
Tekoälyavustajat tietävät vähän kaikesta, mutta eivät tunne yrityksesi raporttipohjaa, brändisi värejä tai tiettyjen tiedostotyyppien oikeaoppisen käsittelyn kikkoja. Entä jos voisit pakata ne kerran ja sanoa agentille "käytä tätä tarvittaessa", sen sijaan että selittäisit ne pitkästi joka keskustelussa? Juuri tämä on "skillin" (taidon) ajatus.

## Lyhyesti: kansio ja SKILL.md

Anthropicin määritelmän mukaan Agent Skills ovat modulaarisia paketteja, jotka laajentavat Clauden kykyjä. Jokainen skill kokoaa yhteen ohjeet, metatiedot ja valinnaiset resurssit (skriptit, mallipohjat), ja Claude käyttää niitä itsestään, kun ne ovat olennaisia. Anthropicin insinööriblogi sanoo asian vielä yksinkertaisemmin: skillit ovat "järjestettyjä ohje-, skripti- ja resurssikansioita", jotka agentti lataa tarvittaessa ollakseen parempi tietyissä tehtävissä.

Teknisesti skill on kansio, jonka sisällä on vähintään SKILL.md-niminen tiedosto. Tiedoston alussa on YAML-muodossa kaksi pakollista kenttää: name (nimi) ja description (kuvaus). Niiden alla on tavallisella Markdownilla kirjoitetut ohjeet. Kansioon voi halutessasi lisätä alikansioita, kuten scripts/ (ajettava koodi), references/ (lisäasiakirjat) ja assets/ (mallipohjat, kuvat, data).

Anthropic vertaa rakennetta uudelle työntekijälle laadittuun perehdytysoppaaseen. Oppaan jättää pöydälle, ja työntekijä avaa sen, kun tarvitsee.

## Salaisuus: kaikkea ei ladata kerralla

Skillit erottaa tavallisesta pitkästä promptista "vaiheittainen paljastaminen" (progressive disclosure) -niminen rakenne. Clauden dokumentaation mukaan sisältö ladataan kolmessa kerroksessa:

| Kerros | Milloin ladataan? |
|---|---|
| 1. Metatiedot (nimi + kuvaus) | Aina, käynnistyksen yhteydessä (noin 100 tokenia per skill) |
| 2. SKILL.md:n runko | Kun skill laukeaa (alle 5 000 tokenia suositeltu) |
| 3. Lisätiedostot ja skriptit | Vain tarvittaessa; kontekstiin pääsee vain skriptien tuloste |

Näin agentille voi ladata kymmeniä skillejä, mutta ne eivät täytä kontekstiikkunaa. Kunkin skillin pöydällä on laukeamiseen asti vain nimi ja kuvaus. Dokumentaation esimerkissä PDF-skill pitää lomakkeiden täyttöohjeet erillisessä forms.md-tiedostossa, ja Claude lukee sen vain, kun se oikeasti täyttää lomaketta.

> **Tiesitkö?** Anthropic julkisti Agent Skillsin 16. lokakuuta 2025 ja julkaisi formaatin avoimena standardina osoitteessa agentskills.io 18. joulukuuta 2025. Siksi lokakuussa 2026 sama SKILL.md-rakenne näkyy myös muiden työkalujen, kuten GitHub Copilotin ja OpenAI Codexin, dokumentaatiossa. Copilotin dokumentaatio ohjaa skillien tarkistamisessa suoraan agentskills.io-määrittelyyn.

## Prompt, MCP, lisäosa: mitä eroa?

Nämä käsitteet menevät usein sekaisin, koska kaikki liittyvät siihen, miten agentista saa paremman. Clauden ohjekeskuksen erottelun voi tiivistää näin:

- **Promptit tai omat ohjeet:** Yleisiä ohjeita, jotka pätevät joka keskustelussa tai kaikissa keskusteluissa. Skill on tehtäväkohtainen ja astuu mukaan vain, kun se on olennainen.
- **Projektit:** Pysyvää taustatietoa, joka on aina ladattuna projektin keskusteluissa. Skill on menettely, joka avataan tarvittaessa.
- **MCP (Model Context Protocol) -liittimet:** Yhdistävät Clauden ulkoisiin palveluihin ja tietolähteisiin eli antavat "pääsyn". Skill taas on "menetelmätietoa" siitä, miten tuota pääsyä käytetään. Ohjekeskuksen mukaan näitä käytetään usein yhdessä.
- **Lisäosat (plugin):** Claude Codessa ja Coworkissa lisäosa on paketti, jolla useita osia (skillejä, liittimiä, komentoja, aliagentteja) jaetaan yhdessä. OpenAIn dokumentaatio tekee samanlaisen erottelun: skill on kirjoitusmuoto, lisäosa jakelutapa.

Lyhyesti: MCP antaa agentille kädet, skill opettaa käsille taidon ja lisäosa toimittaa ne yhdessä laatikossa.

## Missä se toimii?

Clauden dokumentaation mukaan skillit ovat lokakuusta 2026 alkaen käytettävissä Clauden sovelluksissa (claude.ai), Claude Codessa ja Claude API:ssa koodinsuoritustyökalun kanssa. Ohjekeskus kertoo, että skillejä tarjotaan Free-, Pro-, Max-, Team- ja Enterprise-paketeissa ja että ne edellyttävät koodinsuorituksen olevan päällä.

Tärkeä yksityiskohta: omat skillit eivät synkronoidu eri käyttöympäristöjen välillä. claude.ai:hin lataamasi skill on vain sinun tilisi. API:in ladattu skill jaetaan koko työtilan kanssa. Claude Codessa skillit säilytetään henkilökohtaisessa (~/.claude/skills/) tai projektin kansiossa (.claude/skills/).

Mukana on myös turvallisuusulottuvuus. Koska skillit voivat suorittaa koodia, dokumentaatio suosittelee kohtelemaan niitä "kuin ohjelmiston asennusta" ja käyttämään vain luotettavista lähteistä. Käsittelemme tätä erikseen sarjan viimeisessä jutussa.

Tämän osion seuraavissa jutuissa kirjoitamme oman skillin askel askeleelta ja käymme läpi oikeasti olemassa olevia, hyödyllisiä skillejä kategorioittain.

Mikä tehtävä on se, jonka selität tekoälylle yhä uudelleen ja ajattelet "kunpa opettaisin tämän vain kerran"?
