---
title: "Asiakirjaskillit: Wordin, Excelin, PowerPointin ja PDF:n opettaminen agentille"
excerpt: "Mitä Anthropicin docx-, xlsx-, pptx- ja pdf-skillit tekevät ja missä ne toimivat? Oikeasti hyödylliset viralliset ja apuskillit asiakirjojen tuottamiseen."
hook: "Raportti, taulukko, esitys: kaikki yhdellä skillillä"
fact: "4 ASIAKIRJAA"
factLabel: "Valmiiksi tulevien asiakirjaskillien määrä"
category: "Tekoäly"
---
Tekoälylle on helppo sanoa "tee minulle raportti". Vaikeaa on saada raportti Word- tai Excel-tiedostona, joka oikeasti aukeaa, jonka muotoilu ei hajoa ja jonka kaavat toimivat. Skillien ensimmäinen ja ehkä käytetyin kategoria on juuri tämä: toimistoasiakirjat. Tässä jutussa käsittelemme vain skillejä, joiden olemassaolon olemme todentaneet.

## Neljä peruspalikkaa: docx, xlsx, pptx, pdf

Clauden dokumentaation mukaan Anthropic tarjoaa valmiina (pre-built) neljä asiakirjaskilliä. Ne toimivat Clauden tiedostojenluontiominaisuuden taustalla, ja Anthropic julkaisee lähdekoodin anthropics/skills-GitHub-säilössä.

| Skill | Mitä se tekee? (virallisten kuvausten mukaan) |
|---|---|
| docx | Luo, lukee ja muokkaa Word-asiakirjoja, muotoilu ja mallipohjat mukaan lukien |
| xlsx | Avaa ja muokkaa taulukkolaskentaa, lisää kaavoja ja kaavioita, siivoaa sotkuisen datan |
| pptx | Luo esityksiä, muokkaa dioja, lukee ja jäsentää .pptx-sisältöä |
| pdf | Poimii tekstiä ja taulukoita, yhdistää ja jakaa PDF-tiedostoja, täyttää lomakkeita, lisää vesileimoja |

Säilön kuvaukset on kirjoitettu varsin "periksiantamattomiksi". Esimerkiksi pptx-skillin kuvaus kehottaa käyttämään sitä, jos .pptx-tiedosto on "jollakin tavalla" mukana syötteenä tai tulosteena. Tämä on virallinen esimerkki edellisessä jutussa kertomastamme säännöstä "kuvaus laukaisee".

## Missä voit käyttää niitä?

Clauden dokumentaation mukaan nämä neljä skilliä ovat lokakuusta 2026 alkaen automaattisesti käytössä claude.ai:ssa asiakirjaa luotaessa, ja niitä voi kutsua valmiina skilleinä myös Claude API:ssa. Claude Codessa valmiita asiakirjaskillejä ei tule sisäänrakennettuna. Mutta anthropics/skills-säilön voi lisätä Claude Coden lisäosamarkkinaksi, ja document-skills-paketin voi asentaa. Säilön ohjeen mukaan ensin lisätään markkina komennolla /plugin marketplace add anthropics/skills ja sitten asennetaan document-skills@anthropic-agent-skills.

Lisensseissä on ero. Monet säilön skillit ovat Apache 2.0 -lisensoituja avointa lähdekoodia. Neljä asiakirjaskilliä on kuitenkin jaettu "ei avoimena lähdekoodina vaan lähdekoodiltaan saatavilla olevina" (source-available). Eli koodia voi tutkia ja siitä oppia, mutta ennen kuin jaat sitä vapaasti omassa tuotteessasi, sinun on luettava lisenssitiedosto.

> **Tiesitkö?** pdf-skill on oppikirjaesimerkki vaiheittaisesta latauksesta. Anthropicin insinöörijutun mukaan lomakkeiden täyttöohjeet siirrettiin pääasiallisesta SKILL.md:stä erilliseen forms.md-tiedostoon. Claude lukee tämän tiedoston vain, kun se oikeasti täyttää lomaketta. Säilössä pdf-kansiossa on nykyään forms.md:n lisäksi reference.md ja scripts-kansio.

## Asiakirjan rinnalla auttavat apurit

Asiakirjojen tuottaminen ei pääty tiedostomuotoon. anthropics/skills-säilössä on muitakin sisältöpuolelle keskittyviä virallisia esimerkkejä:

- **doc-coauthoring:** Tarjoaa vaiheittaisen työnkulun jäsennellyn tekstin, kuten teknisen määrittelyn, ehdotuksen tai päätösasiakirjan, yhteiskirjoittamiseen. Se vie läpi kontekstin siirron, iteratiivisen korjauksen ja varmennuksen vaiheet.
- **internal-comms:** Kokoaa resursseja, jotka auttavat kirjoittamaan sisäisen viestinnän tekstejä, kuten tilannekatsauksia, johdon päivityksiä, yrityksen uutiskirjeitä ja UKK:ita, yrityksen suosimissa muodoissa. Kansiossa on myös esimerkkitekstejä.
- **brand-guidelines:** Soveltaa Anthropicin virallisia brändivärejä ja typografiaa tulosteeseen. Sen varsinainen arvo on se, että se näyttää, miten voit rakentaa vastaavan omalle brändillesi.
- **theme-factory:** Sisältää 10 valmista väri- ja fonttiteemaa, joita voi soveltaa dioihin, asiakirjoihin, raportteihin tai HTML-sivuihin, ja tarvittaessa se luo uuden teeman saman tien.

Ohjekeskus mainitsee myös skillit, jotka kumppanit kuten Notion, Figma ja Atlassian ovat laatineet toimimaan omien MCP-liittimiensä kanssa. Niistä on hyötyä työskenneltäessä työkaluissa, joissa asiakirjat syntyvät (esim. Notion-sivut).

## Miten sitä käytetään oikeassa elämässä?

Tehokkain käyttötapa on yhdistää valmiit asiakirjaskillit omaan pieneen skilliisi. Esimerkiksi xlsx-skill osaa tuottaa Excelin oikein, mutta ei tiedä, mitä sarakkeita yrityksesi kuukausittaisessa myyntitaulukossa pitää olla. Jos kirjoitat lyhyen skillin, joka kertoo sen, kaksi skilliä toimivat yhdessä ja tuottavat tiedoston, jonka muoto on oikea ja joka noudattaa omaa standardiasi.

Kaksi huomiota kannattaa muistaa. Ensinnäkin anthropics/skills-säilö kertoo selvästi, että nämä skillit ovat "esittelyä ja opetusta varten" ja että Clauden oma toiminta voi poiketa siellä olevista toteutuksista. Toiseksi asiakirjaskillit tarvitsevat koodinsuoritusympäristön. Ohjekeskuksen mukaan skillien toimiminen edellyttää, että koodinsuoritus on päällä.

Seuraavassa jutussa siirrymme näyttöpuolelle: suunnittelu-, käyttöliittymä- ja verkkotulosteita tuottaviin skilleihin.

Minkä tyyppisen asiakirjan laatimiseen sinulta kuluu eniten aikaa: taulukon, esityksen vai raportin?
