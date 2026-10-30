---
title: "Skillid arendajatele: skill-creator, mcp-builder ja palju muud"
excerpt: "Skill, mis kirjutab skille, skill, mis ehitab MCP-serverit, ja skillipaketid, mis toovad testimise ja silumise distsipliini. Kontrollitud valik arendajatele."
hook: "On olemas skill, mis kirjutab skille"
fact: "20 PÄRINGUT"
factLabel: "Soovitatav näidete arv käivitumise testiks"
category: "Tehisintellekt"
---

Tarkvara arendaja jaoks on skillid huvitavad kahest küljest. Esiteks on olemas "tootjad", mis aitavad sul oma skille kiiremini ja mõõdetavalt kirjutada. Teiseks on paketid, mis annavad agendile inseneridistsipliini (testimine, planeerimine, silumine). Selles loos käsitleme mõlemat, kasutades vaid näiteid, mille olemasolu oleme kontrollinud.

## skill-creator: skill, mis kirjutab skille

Anthropicu ametlikus hoidlas anthropics/skills asuv skill-creator on mõeldud uute skillide loomiseks, olemasolevate redigeerimiseks ja parandamiseks ning nende jõudluse mõõtmiseks. Kirjelduse järgi võtab ta enda peale ka hindamiste (eval) käivitamise, tulemuste võrdlemise dispersioonanalüüsiga ja skilli kirjelduse optimeerimise nii, et see käivituks paremini.

Töövoog on kirjeldatud üsna inimlikult: otsusta, mida soovid, kirjuta mustand, valmista ette mõned testsõnumid, käivita skilliga Claude neil sõnumitel, hinda tulemusi koos, kirjuta ümber, korda. Kaustas on eraldi skriptid hindamiste käivitamiseks, võrdlusaruande koostamiseks ja kirjelduse parandamiseks ning "eval-viewer" tulemuste visuaalseks uurimiseks.

Ka agentskills.io kirjelduse optimeerimise juhend toob selle skilli näitena. Juhendi järgi automatiseerib skill-creator selle tsükli algusest lõpuni: jagab testikomplekti, mõõdab käivitumise määrasid paralleelselt, pakub Claude'iga kirjelduse parandusi ja koostab elava HTML-aruande.

> **Kas teadsid?** agentskills.io soovitatud käivitumise testis kasutatakse umbes 20 näidissõnumit ja igaüht käivitatakse 3 korda. Ehk ühe kirjelduse proovimine tähendab 60 käivitust. Ülesobitamise (overfitting) vältimiseks eraldatakse umbes 60 protsenti sõnumitest parandamiseks ja 40 protsenti ainult kontrolliks. Juhend ütleb, et enamasti piisab viiest ringist.

## mcp-builder ja claude-api: integratsioonide ehitajatele

- **mcp-builder (ametlik):** juhend MCP-serverite arendamiseks, mis võimaldavad suurtel keelemudelitel suhelda väliste teenustega hästi kavandatud tööriistade kaudu. Töötab Pythoni (FastMCP) või Node/TypeScripti (MCP SDK) abil. Skill jagab protsessi neljaks etapiks: uurimine ja planeerimine, teostus, ülevaatus ja testimine, hindamiste loomine. Kaustas on keelepõhised viitedokumendid ja hindamisskriptid.
- **claude-api (ametlik):** viiteskill Claude API ja Anthropicu SDK-de jaoks. Katab teemad nagu mudeli identifikaatorid, parameetrid, voogedastus (streaming), tööriistade kasutus ja vahemällu salvestamine ning sisaldab eraldi kaustu paljude programmeerimiskeelte jaoks. Claude'i dokumentatsiooni järgi tuleb see avatud lähtekoodiga skill Claude Code'iga kaasa.
- **webapp-testing (ametlik):** tööriistakomplekt kohalike veebirakenduste testimiseks Playwrightiga. Praktiline abiline kasutajaliidese arendajatele, millest rääkisime ka disainiloos.

## Kogukonnast: Superpowers ja inseneridistsipliin

Väljaspool ametlikku hoidlat on arendajate seas üks enim räägitud pakette Jesse Vincenti MIT-litsentsiga hoidla obra/superpowers. See kirjeldab end kodeerimisagentide jaoks kui "täielikku tarkvaraarenduse metoodikat". Seisuga oktoober 2026 on hoidlas järgmised skillid (valik):

| Skill | Millal see käivitub? |
|---|---|
| brainstorming | Enne uue funktsiooni või loomingulise töö alustamist |
| writing-plans | Mitmeastmelise töö plaani kirjutamisel enne koodi puutumist |
| test-driven-development | Teostuse ajal: kõigepealt läbikukkuv test, siis minimaalne kood |
| systematic-debugging | Vea või läbikukkunud testi korral, enne parandusettepanekut |
| verification-before-completion | Kontrollkäskude käivitamiseks enne "valmis" ütlemist |

Hoidla README annab lisaks Claude Code'ile paigaldusjuhised paljudele agentidele, nagu Codex, Cursor, Gemini CLI ja GitHub Copilot CLI, ning märgib, et Claude Code'i poolel on see Anthropicu ametlikus pluginaturul. See ongi Agent Skillsi avatud standardi praktiline tagajärg: sama skill võib töötada eri tööriistades.

## Sama idee ka teistel platvormidel

Ka OpenAI ChatGPT ja Codexi dokumentatsioon kirjeldab skille kui "avatud agent skills standardil" põhinevaid. Seisuga oktoober 2026 paistavad dokumentatsioonis silma kaks sisseehitatud abilist: skill-creator, mis loob skilli kirjeldatud tööst (Codexis kutsutakse käsuga $skill-creator), ja skill-installer, mis paigaldab valmis skille hoidlast openai/skills või teistest hoidlatest. Codex loeb kohalikke skille projekti- ja kasutajatasandil kaustadest .agents/skills.

Arendaja jaoks võib kõige väärtuslikum harjumus olla see: muuda iga pikk seletus, mida kordad, oma koodiülevaatuse kontrollnimekiri või juurutamise sammud skilliks ja pane see projekti hoidlasse. Claude Code'is kausta .claude/skills pandud skillid lähevad hoidlaga koos ka meeskonnale. Kuid ära unusta lugeda iga paigaldatava kogukonna skilli skripte, sest need skillid saavad sinu arvutis sinu õigustega koodi käivitada.

Milline samm sinu arendusprotsessis paneb sind kõige enam mõtlema "kui see vaid skill oleks": testimine, koodiülevaatus või juurutamine?
