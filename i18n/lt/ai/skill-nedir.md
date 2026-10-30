---
title: "Kas yra skill? Naujieji dirbtinio intelekto agentų \"įgūdžių aplankai\""
excerpt: "Agent Skill yra aplankas, sudarytas iš failo SKILL.md ir nebūtinų scenarijų. Agentas jį įkelia tik prireikus. Kuo jis skiriasi nuo prompt, MCP ir įskiepio?"
hook: "Išmokyk agentą naujo įgūdžio aplanku"
fact: "3 SLUOKSNIAI"
factLabel: "Pakopinis skill turinio įkėlimas"
category: "Dirbtinis intelektas"
---

Dirbtinio intelekto asistentai šį tą žino apie viską, bet nežino tavo įmonės ataskaitos šablono, prekių ženklo spalvų ar to, kaip tinkamai apdoroti tam tikrą failo tipą. O kas, jei užuot visa tai ilgai aiškinęs kiekviename pokalbyje, galėtum vieną kartą supakuoti ir agentui pasakyti: "naudok, kai reikės"? Būtent tokia yra "skill" (įgūdžio) idėja.

## Trumpai: aplankas ir SKILL.md

Pagal Anthropic apibrėžimą, Agent Skills yra moduliniai paketai, plečiantys Claude galimybes. Kiekvienas skill vienoje vietoje laiko instrukcijas, metaduomenis ir nebūtinus išteklius (scenarijus, šablonus), o Claude juos naudoja pats, kai jie aktualūs. Anthropic inžinerijos tinklaraštis tai sako dar paprasčiau: skill yra "sutvarkyti instrukcijų, scenarijų ir išteklių aplankai", kuriuos agentas įkelia reikalui esant, kad atliktų tam tikrus darbus geriau.

Techniškai skill yra aplankas, kuriame yra bent failas SKILL.md. Šio failo pradžioje YAML formatu eina du privalomi laukai: name (pavadinimas) ir description (aprašymas). Žemiau yra paprastu Markdown parašytos instrukcijos. Į aplanką, jei nori, gali pridėti poaplankių, tokių kaip scripts/ (vykdomasis kodas), references/ (papildomi dokumentai) ir assets/ (šablonai, vaizdai, duomenys).

Anthropic šią struktūrą prilygina naujam darbuotojui parengtam įvadiniam vadovui. Vadovą padedi ant stalo, o darbuotojas jį atsiverčia, kai prireikia.

## Paslaptis: viskas neįkeliama iš karto

Skill nuo paprasto ilgo prompt skiria "pakopinio atskleidimo" (progressive disclosure) dizainas. Pagal Claude dokumentaciją, turinys įkeliamas trimis sluoksniais:

| Sluoksnis | Kada įkeliamas? |
|---|---|
| 1. Metaduomenys (pavadinimas + aprašymas) | Visada, paleidžiant (apie 100 žetonų vienam skill) |
| 2. SKILL.md turinys | Kai skill suaktyvinamas (rekomenduojama iki 5 000 žetonų) |
| 3. Papildomi failai ir scenarijai | Tik prireikus; į kontekstą patenka tik scenarijų išvestis |

Taip agentui galima įkelti dešimtis skill, bet jie neužpildo konteksto lango. Kol nesuaktyvinamas, iš kiekvieno skill "ant stalo" guli tik pavadinimas ir aprašymas. Dokumentacijos pavyzdyje PDF skill formų pildymo instrukcijas laiko atskirame faile forms.md, o Claude šį failą skaito tik tada, kai tikrai pildo formą.

> **Ar žinojai?** Anthropic Agent Skills paskelbė 2025 m. spalio 16 d., o 2025 m. gruodžio 18 d. formatą paskelbė kaip atvirą standartą adresu agentskills.io. Todėl 2026 m. spalį tą pačią SKILL.md struktūrą matai ir kitų įrankių, tokių kaip GitHub Copilot ir OpenAI Codex, dokumentacijoje. Copilot dokumentacija skill tikrinimui nukreipia tiesiai į agentskills.io specifikaciją.

## Prompt, MCP, įskiepis: kuo skiriasi?

Šios sąvokos dažnai painiojamos, nes visos susijusios su "agento pagerinimu". Claude pagalbos centro skirtumą galima apibendrinti taip:

- **Prompt ar pasirinktinės instrukcijos:** Bendros gairės, galiojančios kiekviename pokalbyje ar visuose pokalbiuose. Skill yra konkrečiai užduočiai ir įsijungia tik tada, kai aktualus.
- **Projektai:** Pastovi fono informacija, visada įkelta projekto pokalbiuose. Skill yra procedūra, atidaroma prireikus.
- **MCP (Model Context Protocol) jungtys:** Claude sujungia su išorinėmis paslaugomis ir duomenų šaltiniais. Tai yra suteikia "prieigą". Skill yra "žinojimas, kaip", paaiškinantis, kaip šia prieiga naudotis. Pagalbos centras sako, kad jie dažnai naudojami kartu.
- **Įskiepiai (plugin):** Claude Code ir Cowork pusėje įskiepis yra paketas kelioms dalims (skill, jungtims, komandoms, subagentams) platinti kartu. OpenAI dokumentacija daro panašų skirtumą: skill yra rašymo formatas, įskiepis yra platinimo forma.

Trumpai tariant, MCP agentui duoda ranką, skill tą ranką išmoko įgūdžio, o įskiepis viską pristato vienoje dėžėje.

## Kur tai veikia?

2026 m. spalį pagal Claude dokumentaciją skill galima naudoti Claude programose (claude.ai), Claude Code ir, kartu su kodo vykdymo įrankiu, Claude API. Pagalbos centras nurodo, kad skill siūlomi Free, Pro, Max, Team ir Enterprise planuose ir reikalauja įjungtos kodo vykdymo funkcijos.

Svarbi detalė: pasirinktiniai skill nesinchronizuojami tarp paviršių. Į claude.ai įkeltas skill yra tik tavo paskyros. API įkeltas skill dalijamasi su visa darbo erdve. Claude Code jie laikomi asmeniniame (~/.claude/skills/) arba projekto aplanke (.claude/skills/).

Yra ir saugumo aspektas. Kadangi skill gali vykdyti kodą, dokumentacija rekomenduoja jais elgtis "kaip su programinės įrangos diegimu" ir naudoti tik iš patikimų šaltinių. Apie tai plačiau kalbame paskutiniame serijos straipsnyje.

Tolesniuose šio skyriaus straipsniuose žingsnis po žingsnio parašysime savo skill ir pagal kategorijas apžvelgsime tikrai egzistuojančius, naudingus skill.

Kokį darbą kiekvieną dieną vėl ir vėl aiškini dirbtiniam intelektui, o galvoji: "jei tik galėčiau tai išmokyti vieną kartą"?
