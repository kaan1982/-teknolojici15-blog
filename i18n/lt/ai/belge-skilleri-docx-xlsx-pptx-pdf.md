---
title: "Dokumentų skill: Word, Excel, PowerPoint ir PDF išmokymas agentą"
excerpt: "Ką daro Anthropic docx, xlsx, pptx ir pdf skill ir kur jie veikia? Oficialūs ir pagalbiniai skill, tikrai naudingi dokumentų kūrimui."
hook: "Ataskaita, lentelė, pristatymas: viskas skill"
fact: "4 DOKUMENTAI"
factLabel: "Paruoštų dokumentų skill skaičius"
category: "Dirbtinis intelektas"
---

Dirbtiniam intelektui pasakyti "paruošk man ataskaitą" lengva. Sunku, kad ataskaita ateitų kaip tikrai atsidarantis Word ar Excel failas su nesugadintu formatavimu ir veikiančiomis formulėmis. Pirmoji ir galbūt dažniausiai naudojama skill kategorija yra būtent tai: biuro dokumentai. Šiame straipsnyje nagrinėjame tik tuos skill, kurių egzistavimą patikrinome.

## Keturi pagrindiniai akmenys: docx, xlsx, pptx, pdf

Pagal Claude dokumentaciją, yra keturi paruošti (pre-built) dokumentų skill, kuriuos siūlo Anthropic. Jie veikia Claude failų kūrimo funkcijos užkulisiuose, o Anthropic jų šaltinio kodą skelbia GitHub saugykloje anthropics/skills.

| Skill | Ką daro? (iš oficialių aprašymų) |
|---|---|
| docx | Kuria, skaito, redaguoja Word dokumentus. Įskaitant formatavimą ir šablonus |
| xlsx | Atidaro, redaguoja skaičiuokles, prideda formules ir diagramas, sutvarko netvarkingus duomenis |
| pptx | Kuria pristatymus, redaguoja skaidres, skaito ir analizuoja .pptx turinį |
| pdf | Išgauna tekstą ir lenteles, sujungia, padalija PDF, užpildo formas, prideda vandenženklį |

Saugykloje esantys aprašymai parašyti gana "atkakliai". Pavyzdžiui, pptx skill aprašymas sako jį naudoti, jei .pptx failas "bet kokiu būdu" yra įvestis ar išvestis. Tai oficialus ankstesniame straipsnyje aprašytos taisyklės "aprašymas suaktyvina" pavyzdys.

## Kur galima naudoti?

2026 m. spalį pagal Claude dokumentaciją šie keturi skill claude.ai kuriant dokumentus veikia automatiškai, o Claude API juos taip pat galima iškviesti kaip paruoštus skill. Claude Code paruošti dokumentų skill neateina įmontuoti. Tačiau saugyklą anthropics/skills galima pridėti kaip Claude Code įskiepių rinką ir įdiegti paketą document-skills. Pagal saugyklos instrukciją pirma komanda /plugin marketplace add anthropics/skills pridedama rinka, o paskui įdiegiamas document-skills@anthropic-agent-skills.

Dėl licencijos yra skirtumas. Daugelis saugyklos skill yra atvirojo kodo su Apache 2.0 licencija. Tačiau keturi dokumentų skill pasidalyti kaip "ne atvirojo kodo, bet su prieinamu šaltiniu" (source-available). Tai yra kodą gali apžiūrėti ir iš jo mokytis, bet prieš laisvai platindamas savo produkte turi perskaityti licencijos failą.

> **Ar žinojai?** pdf skill yra vadovėlinis pakopinio įkėlimo pavyzdys. Pasak Anthropic inžinerijos straipsnio, formų pildymo instrukcijos buvo išimtos iš pagrindinio SKILL.md ir perkeltos į atskirą failą forms.md. Claude šį failą skaito tik tada, kai tikrai pildo formą. Saugykloje pdf aplanke šiandien yra ir forms.md, ir reference.md, ir aplankas scripts.

## Pagalbininkai šalia dokumento

Dokumentų kūrimas nesibaigia failo formatu. Saugykloje anthropics/skills yra ir kitų oficialių pavyzdžių, orientuotų į turinio pusę:

- **doc-coauthoring:** Siūlo žingsnis po žingsnio darbo eigą struktūrizuotiems tekstams, tokiems kaip techninė specifikacija, pasiūlymas, sprendimo dokumentas, rašyti kartu. Perveda per konteksto perdavimo, iteratyvaus taisymo ir patikros etapus.
- **internal-comms:** Renka išteklius, padedančius rašyti vidinės komunikacijos tekstus, tokius kaip būklės ataskaita, vadovybės naujienos, įmonės naujienlaiškis, DUK, bendrovės pageidaujamais formatais. Aplanke yra ir pavyzdinių tekstų.
- **brand-guidelines:** Išvestyje pritaiko oficialias Anthropic prekių ženklo spalvas ir tipografiją. Pagrindinė vertė yra tai, kad parodo, kaip galėtum sukurti panašų savo prekės ženklui.
- **theme-factory:** Turi 10 paruoštų spalvų ir šriftų temų, kurias galima pritaikyti skaidrėms, dokumentams, ataskaitoms ar HTML puslapiams, o prireikus akimirksniu sukuria ir naują temą.

Pagalbos centras mini ir verslo partnerių, tokių kaip Notion, Figma ir Atlassian, skill, paruoštus veikti su jų pačių MCP jungtimis. Jie praverčia dirbant su įrankiais, kuriuose dokumentai kuriami (pvz., Notion puslapiai).

## Kaip tai naudoti realiame gyvenime?

Efektyviausia paruoštus dokumentų skill derinti su savo mažu skill. Pavyzdžiui, xlsx skill žino, kaip tinkamai sukurti Excel, bet nežino, kokie stulpeliai turi būti tavo įmonės mėnesio pardavimų lentelėje. Jei parašysi trumpą skill, tai paaiškinantį, abu skill veiks kartu ir sukurs tiek tinkamo formato, tiek tavo standartą atitinkantį failą.

Yra dvi pastabos, kurių reikia nepamiršti. Pirma, saugykla anthropics/skills aiškiai rašo, kad šie skill yra "demonstraciniams ir mokomiesiems tikslams" ir kad paties Claude elgesys gali skirtis nuo čia pateiktų įgyvendinimų. Antra, dokumentų skill reikalauja kodo vykdymo aplinkos. Pasak pagalbos centro, kad skill veiktų, kodo vykdymo funkcija turi būti įjungta.

Kitame straipsnyje pereiname prie ekrano pusės: dizaino, sąsajos ir žiniatinklio išvestį kuriančių skill.

Kurį dokumento tipą ruošdamas tu labiausiai gaišti laiką: lenteles, pristatymus ar ataskaitas?
