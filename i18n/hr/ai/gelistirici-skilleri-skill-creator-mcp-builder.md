---
title: "Skillovi za programere: skill-creator, mcp-builder i ostali"
excerpt: "Skill koji piše skillove, skill koji gradi MCP poslužitelje, paketi skillova koji unose disciplinu testiranja i otklanjanja pogrešaka. Provjereni izbor za programere."
hook: "Postoji skill koji piše skillove"
fact: "20 UPITA"
factLabel: "Preporučeni broj primjera za test aktivacije"
category: "Umjetna inteligencija"
---
Za nekoga tko razvija softver skillovi su zanimljivi iz dva razloga. Prvo, postoje "proizvodni" skillovi koji ti pomažu pisati vlastite skillove brže i mjerljivo. Drugo, postoje paketi koji agentu daju inženjersku disciplinu (testiranje, planiranje, otklanjanje pogrešaka). U ovom članku obrađujemo oboje, samo na primjerima za koje smo potvrdili da postoje.

## skill-creator: skill koji piše skillove

skill-creator iz Anthropicova službenog repozitorija anthropics/skills namijenjen je izradi novih skillova, uređivanju i poboljšanju postojećih te mjerenju njihove učinkovitosti. Prema njegovu opisu, preuzima i pokretanje evaluacija (eval), usporedbu rezultata analizom varijance i optimizaciju opisa skilla tako da se bolje aktivira.

Tijek rada opisan je vrlo ljudski: odluči što želiš, napiši nacrt, pripremi nekoliko testnih poruka, pokreni Claudea sa skillom na tim porukama, zajedno procijeni rezultate, prepiši, ponovi. U mapi se nalaze zasebne skripte koje pokreću evaluacije, izrađuju izvješće o usporedbi i poboljšavaju opis, kao i "eval-viewer" za vizualni pregled rezultata.

Vodič agentskills.io za optimizaciju opisa također navodi taj skill kao primjer. Prema vodiču, skill-creator automatizira taj ciklus od početka do kraja: dijeli skup testova, paralelno mjeri stope aktivacije, uz Claudea predlaže poboljšanja opisa i izrađuje HTML izvješće uživo.

> **Jesi li znao?** U testu aktivacije koji preporučuje agentskills.io koristi se oko 20 primjera poruka i svaka se pokreće 3 puta. Dakle, isprobavanje jednog jedinog opisa znači 60 pokretanja. Da bi se izbjeglo pretjerano prilagođavanje (overfitting), oko 60 posto poruka rezervira se za poboljšanje, a 40 posto samo za provjeru. Vodič kaže da je najčešće dovoljno pet krugova.

## mcp-builder i claude-api: za one koji grade integracije

- **mcp-builder (službeni):** Vodič za razvoj MCP poslužitelja koji velikim jezičnim modelima omogućuju da komuniciraju s vanjskim uslugama preko dobro dizajniranih alata. Radi s Pythonom (FastMCP) ili Nodeom/TypeScriptom (MCP SDK). Skill proces dijeli na četiri faze: istraživanje i planiranje, implementacija, pregled i testiranje, izrada evaluacija. U mapi su referentni dokumenti po jezicima i skripte za evaluaciju.
- **claude-api (službeni):** Referentni skill za Claude API i Anthropicove SDK-ove. Pokriva teme poput identifikatora modela, parametara, streaminga, korištenja alata i predmemoriranja te sadrži zasebne mape za mnoge programske jezike. Prema Claudeovoj dokumentaciji, taj skill otvorenog koda dolazi zajedno s Claude Codeom.
- **webapp-testing (službeni):** Skup alata za testiranje lokalnih web-aplikacija pomoću Playwrighta. Praktičan pomoćnik za front-end programere koji smo spomenuli i u članku o dizajnu.

## Iz zajednice: Superpowers i inženjerska disciplina

Izvan službenog repozitorija jedan od paketa o kojima se među programerima najviše govori je repozitorij obra/superpowers Jessea Vincenta pod MIT licencom. Opisuje se kao "potpuna metodologija razvoja softvera" za agente za programiranje. Od listopada 2026. u repozitoriju se nalaze sljedeći skillovi (izbor):

| Skill | Kada se aktivira? |
|---|---|
| brainstorming | Prije početka nove značajke ili kreativnog posla |
| writing-plans | Pri pisanju plana za posao s više koraka prije nego što se dotakne kôd |
| test-driven-development | Tijekom implementacije: prvo test koji ne prolazi, zatim najmanje koda |
| systematic-debugging | Kad se naiđe na grešku ili test koji ne prolazi, prije predlaganja ispravka |
| verification-before-completion | Za pokretanje naredbi provjere prije nego što se kaže "gotovo" |

README repozitorija daje upute za instalaciju za mnoge agente, uz Claude Code i Codex, Cursor, Gemini CLI i GitHub Copilot CLI, a za Claude Code navodi da se nalazi na Anthropicovoj službenoj tržnici dodataka. To je praktična posljedica činjenice da je Agent Skills otvoreni standard: isti skill može raditi u različitim alatima.

## Ista ideja i na drugim platformama

Dokumentacija OpenAI-ja za ChatGPT i Codex također opisuje skillove kao temeljene na "otvorenom standardu agent skills". Od listopada 2026. u dokumentaciji se ističu dva ugrađena pomoćnika: skill-creator, koji iz posla koji opišeš izrađuje skill (u Codexu se poziva s $skill-creator), i skill-installer, koji instalira gotove skillove iz repozitorija openai/skills ili drugih repozitorija. Codex lokalne skillove čita iz mapa .agents/skills na razini projekta i korisnika.

Za programera najvrjednija navika mogla bi biti ova: svako dugo objašnjenje koje ponavljaš, kontrolni popis za pregled koda ili korake isporuke pretvoriti u skill i staviti u repozitorij projekta. U Claude Codeu skillovi koji se stave u mapu .claude/skills putuju s repozitorijem i do tima. No ne zaboravi pročitati skripte svakog skilla zajednice koji instaliraš, jer ti skillovi na tvom računalu mogu izvršavati kôd s tvojim ovlastima.

Koji korak u tvom razvojnom procesu te najčešće tjera da kažeš "kamo sreće da postoji skill": testiranje, pregled koda ili isporuka?
