---
title: "Dokumendiskillid: Wordi, Exceli, PowerPointi ja PDF-i õpetamine agendile"
excerpt: "Mida Anthropicu docx, xlsx, pptx ja pdf skillid teevad ja kus need töötavad? Dokumentide loomiseks päriselt kasulikud ametlikud ja abistavad skillid."
hook: "Aruanne, tabel, esitlus: kõik on üks skill"
fact: "4 DOKUMENTI"
factLabel: "Valmis dokumendiskillide arv"
category: "Tehisintellekt"
---

Tehisintellektile on lihtne öelda "tee mulle aruanne". Raske on see, et aruanne tuleks Wordi või Exceli failina, mille saab päriselt avada, mille vorming ei lähe katki ja mille valemid töötavad. Skillide esimene ja ehk kõige enam kasutatud kategooria ongi just see: kontoridokumendid. Selles loos käsitleme ainult skille, mille olemasolu oleme kontrollinud.

## Neli alustala: docx, xlsx, pptx, pdf

Claude'i dokumentatsiooni järgi on Anthropicul neli valmis (pre-built) dokumendiskilli. Need töötavad Claude'i failide loomise funktsiooni taustal ja Anthropic avaldab lähtekoodi GitHubi hoidlas anthropics/skills.

| Skill | Mida see teeb? (ametlikest kirjeldustest) |
|---|---|
| docx | Loob, loeb ja redigeerib Wordi dokumente. Sh vormindus ja mallid |
| xlsx | Avab ja redigeerib arvutustabeleid, lisab valemeid ja diagramme, puhastab segast andmestikku |
| pptx | Loob esitlusi, redigeerib slaide, loeb ja parsib .pptx sisu |
| pdf | Võtab välja teksti ja tabeleid, ühendab ja jagab PDF-e, täidab vorme, lisab veemärke |

Hoidlas olevad kirjeldused on kirjutatud üsna "sõnakalt". Näiteks pptx skilli kirjeldus ütleb, et seda tuleb kasutada, kui .pptx fail on sisendina või väljundina "mingil moel" mängus. See on ametlik näide reeglist "kirjeldus käivitab", millest rääkisime eelmises loos.

## Kus saad kasutada?

Claude'i dokumentatsiooni järgi on need neli skilli seisuga oktoober 2026 claude.ai-s dokumentide loomisel iseenesest aktiivsed ja neid saab Claude API-s kutsuda ka valmis skillidena. Claude Code'is valmis dokumendiskillid sisse ehitatud ei ole. Kuid hoidla anthropics/skills on Claude Code'ile lisatav pluginaturuna ja paigaldada saab paketi document-skills. Hoidla juhendi järgi lisatakse esmalt turg käsuga /plugin marketplace add anthropics/skills ja seejärel paigaldatakse document-skills@anthropic-agent-skills.

Litsentsi osas on vahe. Paljud hoidla skillid on Apache 2.0 litsentsiga avatud lähtekoodiga. Neli dokumendiskilli on aga jagatud kui "mitte avatud lähtekoodiga, vaid lähtekoodi poolest kättesaadavad" (source-available). See tähendab, et koodi võid uurida ja sellest õppida, kuid enne oma tootes vabalt levitamist tuleb lugeda litsentsifaili.

> **Kas teadsid?** pdf skill on etapiviisilise laadimise õpikunäide. Anthropicu inseneriloo järgi viidi vormide täitmise juhised põhilisest SKILL.md-st välja eraldi faili forms.md. Claude loeb seda faili ainult siis, kui ta päriselt vormi täidab. Hoidlas on kaustas pdf täna nii forms.md, reference.md kui ka kaust scripts.

## Abilised dokumendi kõrval

Dokumentide loomine ei piirdu failivorminguga. Hoidlas anthropics/skills on sisupoolele keskendunud ka teisi ametlikke näiteid:

- **doc-coauthoring:** pakub samm-sammulist töövoogu struktureeritud tekstide, näiteks tehnilise spetsifikatsiooni, ettepaneku või otsusedokumendi, koos kirjutamiseks. Viib läbi konteksti edastamise, iteratiivse parandamise ja kontrollimise etapid.
- **internal-comms:** koondab ressursse, mis aitavad kirjutada sisekommunikatsiooni tekste, nagu staatuseraport, juhtkonna uuendus, ettevõtte infoleht või KKK, ettevõtte eelistatud vormingutes. Kaustas on ka näidistekste.
- **brand-guidelines:** rakendab väljundile Anthropicu ametlikke brändivärve ja tüpograafiat. Selle tegelik väärtus on näitamises, kuidas ehitada sarnane oma kaubamärgi jaoks.
- **theme-factory:** sisaldab 10 valmis värvi- ja kirjatüübiteemat, mida saab rakendada slaidile, dokumendile, aruandele või HTML-lehele, ja soovi korral loob kohe ka uue teema.

Abikeskus mainib lisaks skille, mille partnerid, nagu Notion, Figma ja Atlassian, on valmistanud töötama koos oma MCP-ühendustega. Need on abiks, kui töötad tööriistadega, milles dokumente luuakse (nt Notioni lehed).

## Kuidas seda päriselus kasutada?

Kõige tõhusam kasutus on ühendada valmis dokumendiskillid oma väikese skilliga. Näiteks xlsx skill teab, kuidas Excelit korrektselt luua, kuid ei tea, millised veerud peavad olema sinu ettevõtte igakuises müügitabelis. Kui kirjutad selle kohta lühikese skilli, töötavad kaks skilli koos ja tulemuseks on fail, mis on nii õige vorminguga kui ka sinu standardile vastav.

Meeles tasub pidada kahte märkust. Esiteks, hoidla anthropics/skills ütleb selgelt, et need skillid on "demonstratsiooni- ja õppeotstarbelised" ning Claude'i enda käitumine võib siin olevatest teostustest erineda. Teiseks vajavad dokumendiskillid koodi käivituskeskkonda. Abikeskuse järgi peab skillide toimimiseks olema koodi käivitamise funktsioon sisse lülitatud.

Järgmises loos liigume ekraani poolele: disaini, kasutajaliidese ja veebiväljundeid loovad skillid.

Millise dokumenditüübi koostamisel kulutad sina kõige rohkem aega: tabeli, esitluse või aruande?
