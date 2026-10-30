---
title: "Kehittäjille: skill-creator, mcp-builder ja muuta"
excerpt: "Skilliä kirjoittava skill, MCP-palvelimen rakentava skill, testaus- ja virheenkorjauskuria tuovat skillpaketit. Todennettuja valintoja kehittäjille."
hook: "On olemassa skill, joka kirjoittaa skillejä"
fact: "20 KYSELYÄ"
factLabel: "Suositeltu esimerkkimäärä laukeamistestiin"
category: "Tekoäly"
---
Ohjelmistokehittäjälle skillit ovat kiinnostavia kahdesta syystä. Ensinnäkin on "tuottajaskillejä", jotka auttavat kirjoittamaan omia skillejä nopeammin ja mitattavasti. Toiseksi on paketteja, jotka tuovat agentille insinöörikuria (testaus, suunnittelu, virheenkorjaus). Tässä jutussa käsittelemme molempia, vain esimerkein, joiden olemassaolon olemme todentaneet.

## skill-creator: skilliä kirjoittava skill

Anthropicin virallisessa anthropics/skills-säilössä oleva skill-creator on suunniteltu uusien skillien luomiseen, olemassa olevien muokkaamiseen ja parantamiseen sekä niiden suorituskyvyn mittaamiseen. Kuvauksensa mukaan se hoitaa myös arviointien (eval) ajamisen, tulosten vertailun varianssianalyysillä ja skillin kuvauksen optimoinnin niin, että se laukeaa paremmin.

Työnkulku on kuvattu varsin inhimillisesti: päätä, mitä haluat, kirjoita luonnos, valmistele muutama testiviesti, aja skillillä varustettu Claude näillä viesteillä, arvioi tulokset yhdessä, kirjoita uudelleen, toista. Kansiossa on erilliset skriptit arviointien ajamiseen, vertailuraportin tuottamiseen ja kuvauksen parantamiseen sekä "eval-viewer" tulosten visuaaliseen tarkasteluun.

Myös agentskills.io:n kuvauksen optimointiopas nostaa tämän skillin esimerkiksi. Oppaan mukaan skill-creator automatisoi tämän silmukan alusta loppuun: se jakaa testijoukon, mittaa laukeamisosuudet rinnakkain, ehdottaa Clauden kanssa kuvauksen parannuksia ja tuottaa elävän HTML-raportin.

> **Tiesitkö?** agentskills.io:n suosittelemassa laukeamistestissä käytetään noin 20 esimerkkiviestiä, ja jokainen ajetaan 3 kertaa. Yhden kuvauksen kokeilu tarkoittaa siis 60 ajoa. Ylisovittamisen (overfitting) estämiseksi noin 60 prosenttia viesteistä varataan parantamiseen ja 40 prosenttia pelkkään validointiin. Opas toteaa, että viisi kierrosta riittää useimmiten.

## mcp-builder ja claude-api: integraatioiden rakentajille

- **mcp-builder (virallinen):** Opas MCP-palvelimien kehittämiseen, jotta suuret kielimallit voivat keskustella ulkoisten palvelujen kanssa hyvin suunniteltujen työkalujen kautta. Toimii Pythonilla (FastMCP) tai Node/TypeScriptillä (MCP SDK). Skill jakaa prosessin neljään vaiheeseen: tutkimus ja suunnittelu, toteutus, tarkistus ja testaus sekä arviointien luominen. Kansiossa on kielikohtaisia viiteasiakirjoja ja arviointiskriptejä.
- **claude-api (virallinen):** Viiteskill Claude API:lle ja Anthropicin SDK:ille. Kattaa aiheita kuten mallitunnisteet, parametrit, suoratoisto (streaming), työkalujen käyttö ja välimuistitus, ja sisältää erilliset kansiot monille ohjelmointikielille. Clauden dokumentaation mukaan tämä avoimen lähdekoodin skill tulee Claude Coden mukana.
- **webapp-testing (virallinen):** Työkalusarja paikallisten verkkosovellusten testaamiseen Playwrightilla. Käytännön apuri käyttöliittymäkehittäjille, josta mainitsimme myös suunnittelujutussa.

## Yhteisöltä: Superpowers ja insinöörikuri

Virallisen säilön ulkopuolella yksi kehittäjien eniten puhutuista paketeista on Jesse Vincentin MIT-lisensoitu obra/superpowers-säilö. Se esittelee itsensä koodausagenteille tarkoitettuna "täydellisenä ohjelmistokehitysmetodologiana". Lokakuussa 2026 säilössä on muun muassa seuraavat skillit (valikoima):

| Skill | Milloin se astuu mukaan? |
|---|---|
| brainstorming | Ennen uuden ominaisuuden tai luovan työn aloittamista |
| writing-plans | Monivaiheisessa työssä suunnitelmaa kirjoitettaessa ennen koodiin koskemista |
| test-driven-development | Toteutuksen aikana: ensin epäonnistuva testi, sitten mahdollisimman vähän koodia |
| systematic-debugging | Kun kohtaat virheen tai epäonnistuneen testin, ennen korjausehdotusta |
| verification-before-completion | Varmistuskomentojen ajamiseen ennen kuin sanot "valmis" |

Säilön README antaa asennusohjeet Claude Coden lisäksi monille muille agenteille, kuten Codexille, Cursorille, Gemini CLI:lle ja GitHub Copilot CLI:lle, ja toteaa, että Claude Coden puolella se löytyy Anthropicin virallisesta lisäosamarkkinasta. Tämä on Agent Skillsin avoimen standardin käytännön seuraus: sama skill voi toimia eri työkaluissa.

## Sama ajatus muillakin alustoilla

Myös OpenAIn ChatGPT- ja Codex-dokumentaatio kuvaa skillit "avoimen agent skills -standardin" päälle rakennetuiksi. Lokakuussa 2026 dokumentaatiossa korostuu kaksi sisäänrakennettua apuria: skill-creator, joka luo skillin kuvaamastasi työstä (Codexissa se kutsutaan komennolla $skill-creator), ja skill-installer, joka asentaa valmiita skillejä openai/skills-säilöstä tai muista säilöistä. Codex lukee paikalliset skillit projekti- ja käyttäjätasolla .agents/skills-kansioista.

Kehittäjälle arvokkain tapa saattaa olla tämä: muuta jokainen toistamasi pitkä selitys, koodikatselmuksen tarkistuslistasi tai käyttöönoton vaiheet skilliksi ja laita se projektin säilöön. Claude Codessa .claude/skills-kansioon laitetut skillit kulkevat säilön mukana myös tiimille. Muista kuitenkin lukea jokaisen asentamasi yhteisöskillin skriptit, sillä nämä skillit voivat ajaa koodia koneellasi sinun oikeuksillasi.

Mikä vaihe kehitysprosessissasi saa sinut useimmin ajattelemaan "kunpa tämä olisi skill": testaus, koodikatselmus vai käyttöönotto?
