---
title: "Što je skill? Nove \"mape s vještinama\" za agente umjetne inteligencije"
excerpt: "Agent Skill je mapa koja se sastoji od datoteke SKILL.md i po želji skripti. Agent je učitava samo kad je potrebna. U čemu je razlika prema promptu, MCP-u i dodatku?"
hook: "Nauči agenta novoj vještini pomoću mape"
fact: "3 SLOJA"
factLabel: "Postupno učitavanje sadržaja skilla"
category: "Umjetna inteligencija"
---
Asistenti umjetne inteligencije znaju pomalo sve, ali ne znaju predložak izvješća tvoje tvrtke, boje tvog brenda ni trikove za ispravnu obradu neke vrste datoteke. Što kad bi to, umjesto da ga u svakom razgovoru dugo objašnjavaš, mogao jednom zapakirati i reći agentu "koristi kad zatreba"? Upravo je to ideja "skilla" (vještine).

## Ukratko: jedna mapa i jedan SKILL.md

Prema Anthropicovoj definiciji, Agent Skills su modularni paketi koji proširuju Claudeove sposobnosti. Svaki skill drži na okupu upute, metapodatke i po želji resurse (skripte, predloške), a Claude ih sam koristi kad su relevantni. Anthropicov inženjerski blog to kaže još jednostavnije: skillovi su "organizirane mape uputa, skripti i resursa" koje agent učitava kad mu zatrebaju da bi bio bolji u određenim poslovima.

Tehnički, skill je mapa u kojoj se nalazi barem datoteka pod nazivom SKILL.md. Na početku te datoteke u formatu YAML nalaze se dva obvezna polja: name (naziv) i description (opis). Ispod su upute napisane običnim Markdownom. U mapu možeš, ako želiš, dodati podmape poput scripts/ (izvršni kôd), references/ (dodatni dokumenti) i assets/ (predlošci, slike, podaci).

Anthropic tu strukturu uspoređuje s vodičem za uvođenje u posao pripremljenim za novog zaposlenika. Vodič ostaviš na stolu, a zaposlenik ga otvori i pogleda kad mu zatreba.

## Tajna: ne učitava se sve odjednom

Ono što skillove razlikuje od običnog dugog prompta jest dizajn zvan "postupno otkrivanje" (progressive disclosure). Prema Claudeovoj dokumentaciji, sadržaj se učitava u tri sloja:

| Sloj | Kada se učitava? |
|---|---|
| 1. Metapodaci (naziv + opis) | Uvijek, pri pokretanju (otprilike 100 tokena po skillu) |
| 2. Tijelo datoteke SKILL.md | Kad se skill aktivira (preporučuje se manje od 5.000 tokena) |
| 3. Dodatne datoteke i skripte | Samo kad je potrebno; u kontekst ulazi samo izlaz skripti |

Tako agentu možeš učitati desetke skillova, a svi neće ispuniti kontekstni prozor. Dok se ne aktivira, od svakog skilla "na stolu" stoje samo naziv i opis. U primjeru iz dokumentacije PDF skill drži upute za popunjavanje obrazaca u zasebnoj datoteci forms.md, a Claude tu datoteku čita samo kad doista popunjava obrazac.

> **Jesi li znao?** Anthropic je Agent Skills najavio 16. listopada 2025., a 18. prosinca 2025. objavio je format kao otvoreni standard na adresi agentskills.io. Zato od listopada 2026. istu strukturu SKILL.md vidiš i u dokumentaciji drugih alata poput GitHub Copilota i OpenAI Codexa. Copilotova dokumentacija za provjeru skillova izravno upućuje na specifikaciju agentskills.io.

## Prompt, MCP, dodatak: u čemu je razlika?

Ti se pojmovi često miješaju jer se svi odnose na "poboljšanje agenta". Razlikovanje iz Claudeova Centra za pomoć može se sažeti ovako:

- **Prompt ili prilagođene upute:** Opće smjernice koje vrijede u svakom razgovoru ili u svim razgovorima. Skill je pak specifičan za zadatak i aktivira se samo kad je relevantan.
- **Projekti:** Stalna pozadinska informacija koja je uvijek učitana u razgovorima unutar projekta. Skill je postupak koji se otvara kad zatreba.
- **MCP (Model Context Protocol) konektori:** Povezuju Claudea s vanjskim uslugama i izvorima podataka. Dakle, omogućuju "pristup". Skill je pak "znanje o načinu" kako taj pristup koristiti. Centar za pomoć kaže da se njih dvoje često koriste zajedno.
- **Dodaci (plugin):** U Claude Codeu i Coworku dodatak je paket za zajedničku distribuciju više dijelova (skillova, konektora, naredbi, podagenata). OpenAI-jeva dokumentacija pravi sličnu razliku: skill je format pisanja, a dodatak je oblik distribucije.

Ukratko, MCP agentu daje ruku, skill tu ruku uči vještini, a dodatak sve to isporučuje u jednoj kutiji.

## Gdje radi?

Prema Claudeovoj dokumentaciji, od listopada 2026. skillovi se mogu koristiti u Claudeovim aplikacijama (claude.ai), u Claude Codeu i u Claude API-ju zajedno s alatom za izvršavanje koda. Centar za pomoć navodi da su skillovi dostupni u planovima Free, Pro, Max, Team i Enterprise i da zahtijevaju uključenu značajku izvršavanja koda.

Važna pojedinost: prilagođeni skillovi ne sinkroniziraju se među platformama. Skill koji učitaš na claude.ai pripada isključivo tvom računu. Skill učitan na API dijeli se s cijelim radnim prostorom. U Claude Codeu čuva se osobno (~/.claude/skills/) ili u mapi projekta (.claude/skills/).

Postoji i sigurnosna dimenzija. Budući da skillovi mogu izvršavati kôd, dokumentacija preporučuje da se s njima postupa "kao s instalacijom softvera" i da se koriste samo iz pouzdanih izvora. O tome posebno govorimo u posljednjem članku serije.

U sljedećim člancima ovog odjeljka korak po korak pokazat ćemo kako napisati vlastiti skill i kategoriju po kategoriju pregledati skillove koji doista postoje i koriste se.

Koji posao svaki dan iznova objašnjavaš umjetnoj inteligenciji i misliš "kamo sreće da to mogu naučiti jednom"?
