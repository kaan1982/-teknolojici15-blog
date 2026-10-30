---
title: "Skill programuotojams: skill-creator, mcp-builder ir kiti"
excerpt: "Skill, rašantis skill, skill, kuriantis MCP serverį, ir skill paketai, atnešantys testavimo bei derinimo drausmę. Patikrinta atranka programuotojams."
hook: "Yra skill, kuris rašo skill"
fact: "20 UŽKLAUSŲ"
factLabel: "Siūlomas pavyzdžių skaičius aktyvavimo testui"
category: "Dirbtinis intelektas"
---

Programinę įrangą kuriančiam žmogui skill įdomūs dviem požiūriais. Pirma, yra "kūrėjų" skill, padedantys savo skill rašyti greičiau ir išmatuojamai. Antra, yra paketai, agentui suteikiantys inžinerinę drausmę (testavimą, planavimą, derinimą). Šiame straipsnyje nagrinėjame abu, tik su pavyzdžiais, kurių egzistavimą patikrinome.

## skill-creator: skill, kuris rašo skill

Oficialioje Anthropic saugykloje anthropics/skills esantis skill-creator sukurtas naujiems skill kurti, esamiems redaguoti bei gerinti ir jų našumui matuoti. Pagal aprašymą, jis imasi ir vertinimų (eval) paleidimo, rezultatų palyginimo su dispersijos analize bei skill aprašymo optimizavimo, kad jis geriau aktyvuotųsi.

Darbo eiga aprašyta labai žmogiškai: nuspręsk, ko nori, parašyk juodraštį, paruošk kelias bandomąsias žinutes, paleisk Claude su skill su šiomis žinutėmis, kartu įvertink rezultatus, perrašyk, kartok. Aplanke yra atskiri scenarijai, paleidžiantys vertinimus, kuriantys palyginimo ataskaitą ir gerinantys aprašymą, taip pat "eval-viewer" rezultatams peržiūrėti vizualiai.

Aprašymo optimizavimo vadove agentskills.io šį skill taip pat pateikia kaip pavyzdį. Pasak vadovo, skill-creator šį ciklą automatizuoja nuo pradžios iki galo: padalija testų rinkinį, lygiagrečiai matuoja aktyvavimo dažnį, su Claude siūlo aprašymo patobulinimus ir sukuria gyvą HTML ataskaitą.

> **Ar žinojai?** Agentskills.io siūlomame aktyvavimo teste naudojama maždaug 20 pavyzdinių žinučių ir kiekviena paleidžiama 3 kartus. Tai yra išbandyti vieną aprašymą reiškia 60 paleidimų. Siekiant išvengti persimokymo (overfitting), maždaug 60 procentų žinučių skiriama tobulinimui, o 40 procentų tik patikrai. Vadovas sako, kad dažniausiai pakanka penkių ratų.

## mcp-builder ir claude-api: integracijų kūrėjams

- **mcp-builder (oficialus):** Vadovas MCP serveriams, leidžiantiems dideliems kalbos modeliams per gerai suprojektuotus įrankius bendrauti su išorinėmis paslaugomis, kurti. Veikia su Python (FastMCP) arba Node/TypeScript (MCP SDK). Skill procesą skaido į keturis etapus: tyrimas ir planavimas, įgyvendinimas, peržiūra ir testavimas, vertinimų kūrimas. Aplanke yra pagal kalbą suskirstyti žinynai ir vertinimų scenarijai.
- **claude-api (oficialus):** Claude API ir Anthropic SDK žinyno skill. Apima tokias temas kaip modelių identifikatoriai, parametrai, srautinis perdavimas (streaming), įrankių naudojimas, talpyklos naudojimas ir turi atskirus aplankus daugeliui programavimo kalbų. Pagal Claude dokumentaciją, šis atvirojo kodo skill ateina kartu su Claude Code.
- **webapp-testing (oficialus):** Įrankių rinkinys vietinėms žiniatinklio programoms testuoti su Playwright. Praktinis pagalbininkas, kurį minėjome ir dizaino straipsnyje sąsajos kūrėjams.

## Iš bendruomenės: inžinerinė drausmė su Superpowers

Be oficialios saugyklos, vienas labiausiai tarp programuotojų aptarinėjamų paketų yra Jesse Vincent MIT licencijuota saugykla obra/superpowers. Ji save apibūdina kaip kodavimo agentams skirtą "pilną programinės įrangos kūrimo metodologiją". 2026 m. spalį saugykloje yra šie skill (atranka):

| Skill | Kada įsijungia? |
|---|---|
| brainstorming | Prieš pradedant naują funkciją ar kūrybinį darbą |
| writing-plans | Rašant kelių žingsnių darbo planą, nelietus kodo |
| test-driven-development | Įgyvendinant: pirma nepavykęs testas, paskui minimalus kodas |
| systematic-debugging | Susidūrus su klaida ar nepavykusiu testu, prieš siūlant taisymą |
| verification-before-completion | Prieš sakant "baigta" paleisti patikros komandas |

Saugyklos README be Claude Code pateikia diegimo instrukcijas ir daugeliui kitų agentų, tokių kaip Codex, Cursor, Gemini CLI ir GitHub Copilot CLI, ir nurodo, kad Claude Code pusėje jis yra oficialioje Anthropic įskiepių rinkoje. Tai praktinė Agent Skills kaip atvirojo standarto pasekmė: tas pats skill gali veikti skirtinguose įrankiuose.

## Ta pati idėja ir kitose platformose

OpenAI ChatGPT ir Codex dokumentacija skill taip pat apibūdina kaip pagrįstus "atviru agent skills standartu". 2026 m. spalį dokumentacijoje išsiskiria du įmontuoti pagalbininkai: skill-creator, pagal tavo aprašytą darbą sukuriantis skill (Codex iškviečiamas per $skill-creator), ir skill-installer, diegiantis paruoštus skill iš saugyklos openai/skills ar kitų saugyklų. Codex vietinius skill skaito iš projekto ir naudotojo lygio aplankų .agents/skills.

Programuotojui vertingiausias įprotis gali būti toks: kiekvieną ilgą aiškinimą, kurį kartoji, savo kodo peržiūros kontrolinį sąrašą ar diegimo žingsnius paversti skill ir įdėti į projekto saugyklą. Claude Code į aplanką .claude/skills įdėti skill kartu su saugykla keliauja ir komandai. Tačiau nepamiršk perskaityti kiekvieno įdiegto bendruomenės skill scenarijų, nes šie skill tavo kompiuteryje gali vykdyti kodą su tavo teisėmis.

Kuris tavo kūrimo proceso žingsnis labiausiai verčia sakyti "kad tik būtų skill": testavimas, kodo peržiūra ar diegimas?
