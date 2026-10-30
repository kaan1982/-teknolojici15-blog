---
title: "Tekoäly löysi kriittisen aukon PHP:stä, jolla pyörii 70 prosenttia verkkosivustoista"
excerpt: "Kaksi PHP2Shell-nimistä aukkoa sallii koodin ajamisen palvelimella ilman kirjautumista. Löydössä käytettiin malleja kuten GPT-5.6 Sol ja Gemini 4 Argon."
hook: "Tekoäly löysi PHP:n jättiaukon"
fact: "CVSS 9,2"
factLabel: "PHP2Shell-aukkojen korkein pistemäärä"
category: "Tekoäly"
---
PHP-kehittäjät julkaisivat 21. lokakuuta kiireellisen korjauksen kahteen kielen ydinmoottorin kriittiseen tietoturva-aukkoon. "PHP2Shell"-nimen saaneet ja tunnisteet CVE-2026-109618 ja CVE-2026-109619 saaneet aukot löytyivät tekoälytyökalujen avulla.

## Mitä tapahtui?

Fortunen mukaan tekoälyn tietoturvatestausyhtiö Calif löysi ketjun ensimmäisen osan 1. elokuuta GPT-5.6 Solilla; Wiz havaitsi ensimmäisen aukon itsenäisesti 19. elokuuta ja ilmoitti siitä PHP:n tietoturvatiimille 24. elokuuta. Löydössä käytettiin Wizin omaa Wiz Atlas -työkalua sekä OpenAIn GPT-5.6 Sol- ja Googlen Gemini 4 Argon -malleja.

Aukot sallivat hyökkääjän ajaa koodia palvelimella etänä ilman kirjautumista ja vuotaa muistissa olevaa dataa. Wizin mukaan lähes jokainen viimeisen kymmenen vuoden aikana julkaistu PHP-versio, aina versioon 5.4 asti, on alttiina. Korkein vakavuuspistemäärä CVSS-asteikolla on 9,2. PHP pyörii noin 70 prosentin takana maailman verkkosivustoista; pelkästään WordPress pyörittää karkeasti 40 prosenttia sivustoista. Fortunen päivitetyn uutisen mukaan aukkoja alettiin hyödyntää laajasti korjauksen julkaisun jälkeen.

## Miksi sillä on väliä?

Tämä on yksi konkreettisimmista esimerkeistä siitä, että tekoäly voi tietoturvatutkimuksessa olla jo muutakin kuin apulainen: se voi olla löydön tekijä. Samat työkalut ovat kuitenkin myös hyökkääjien käsissä, ja aika korjauksen julkaisusta hyväksikäytön alkamiseen lyhenee. Jokaisen PHP:tä käyttävän sivuston omistajan on päivitettävä palvelimensa heti. Laajemmin katsottuna internetin vuosikymmeniä toimineen vanhan koodin piileviä virheitä voi nousta pintaan nyt paljon nopeammin. Verkossa itsenäisesti kiertäneen ensimmäisen ohjelman tarinan kerroimme jutussa [Creeper](/yazi/creeper-ilk-virus-zararsizdi/).
