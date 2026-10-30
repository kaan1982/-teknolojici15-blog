---
title: "Ce este un skill? Noile «dosare de abilități» ale agenților de inteligență artificială"
excerpt: "Un Agent Skill este un dosar format dintr-un fișier SKILL.md și, opțional, scripturi. Agentul îl încarcă doar când e nevoie. Prin ce diferă de un prompt, de MCP și de un plugin?"
hook: "Învață un agent o abilitate nouă cu un dosar"
fact: "3 STRATURI"
factLabel: "Încărcarea treptată a conținutului unui skill"
category: "Inteligență artificială"
---
Asistenții de inteligență artificială știu puțin din toate, dar nu știu șablonul de raport al firmei tale, culorile mărcii tale sau trucurile pentru a procesa corect un anumit tip de fișier. Dacă, în loc să explici asta lung la fiecare conversație, ai putea să o împachetezi o singură dată și să-i spui agentului „folosește-o când e nevoie”? Exact asta este ideea de „skill” (abilitate).

## Pe scurt: un dosar și un SKILL.md

În definiția Anthropic, Agent Skills sunt pachete modulare care extind capacitățile lui Claude. Fiecare skill ține laolaltă instrucțiuni, metadate și, opțional, resurse (scripturi, șabloane), iar Claude le folosește singur când sunt relevante. Blogul de inginerie al Anthropic o spune și mai simplu: skill-urile sunt „dosare organizate de instrucțiuni, scripturi și resurse” pe care agentul le încarcă la nevoie ca să fie mai bun la anumite sarcini.

Tehnic, un skill este un dosar care conține cel puțin un fișier numit SKILL.md. La începutul acestui fișier, în format YAML, există două câmpuri obligatorii: name (nume) și description (descriere). Dedesubt se află instrucțiunile scrise în Markdown simplu. În dosar poți adăuga, dacă vrei, subdosare precum scripts/ (cod executabil), references/ (documente suplimentare) și assets/ (șabloane, imagini, date).

Anthropic compară această structură cu un ghid de integrare pregătit pentru un angajat nou. Pui ghidul pe masă, iar angajatul îl deschide și se uită în el când are nevoie.

## Secretul: nu se încarcă totul deodată

Ceea ce deosebește skill-urile de un simplu prompt lung este un design numit „încărcare treptată” (progressive disclosure). Potrivit documentației Claude, conținutul se încarcă pe trei straturi:

| Strat | Când se încarcă? |
|---|---|
| 1. Metadate (nume + descriere) | Mereu, la pornire (aproximativ 100 de tokeni pe skill) |
| 2. Corpul SKILL.md | Când skill-ul este declanșat (se recomandă sub 5.000 de tokeni) |
| 3. Fișiere și scripturi suplimentare | Doar când e nevoie; în context intră doar rezultatul scripturilor |

Astfel poți încărca zeci de skill-uri într-un agent, dar toate nu umplu fereastra de context. Până la declanșare, din fiecare skill stau „pe masă” doar numele și descrierea. În exemplul din documentație, skill-ul PDF ține instrucțiunile pentru completarea formularelor într-un fișier separat, forms.md, iar Claude citește acest fișier doar când chiar completează un formular.

> **Știai că?** Anthropic a anunțat Agent Skills pe 16 octombrie 2025 și a publicat formatul ca standard deschis pe agentskills.io pe 18 decembrie 2025. De aceea, în octombrie 2026, aceeași structură SKILL.md o vezi și în documentația altor unelte, precum GitHub Copilot și OpenAI Codex. Documentația Copilot trimite direct la specificația agentskills.io pentru verificarea skill-urilor.

## Prompt, MCP, plugin: prin ce diferă?

Aceste noțiuni se confundă des, pentru că toate țin de „a face agentul mai bun”. Distincția din Centrul de ajutor Claude se poate rezuma astfel:

- **Prompt sau instrucțiuni personalizate:** Îndrumări generale, valabile la fiecare conversație sau în toate conversațiile. Un skill, în schimb, este specific unei sarcini și intră în joc doar când este relevant.
- **Proiecte:** Informații de fond fixe, mereu încărcate în conversațiile dintr-un proiect. Un skill este o procedură care se deschide la nevoie.
- **Conectori MCP (Model Context Protocol):** Leagă Claude de servicii și surse de date externe. Adică oferă „acces”. Skill-ul este „știința metodei”, care explică cum să folosești acel acces. Centrul de ajutor spune că cele două se folosesc adesea împreună.
- **Plugin-uri:** În Claude Code și Cowork, un plugin este pachetul pentru distribuirea mai multor piese laolaltă (skill-uri, conectori, comenzi, subagenți). Documentația OpenAI face o distincție similară: skill-ul este formatul de scriere, plugin-ul este formatul de distribuire.

Pe scurt, MCP dă agentului o mână, skill-ul învață acea mână o abilitate, iar plugin-ul livrează toate astea într-o cutie.

## Unde funcționează?

În octombrie 2026, potrivit documentației Claude, skill-urile pot fi folosite în aplicațiile Claude (claude.ai), în Claude Code și în Claude API, împreună cu instrumentul de execuție a codului. Centrul de ajutor precizează că skill-urile sunt oferite în planurile Free, Pro, Max, Team și Enterprise și că necesită ca funcția de execuție a codului să fie activă.

Un detaliu important: skill-urile personalizate nu se sincronizează între suprafețe. Un skill încărcat în claude.ai este doar al contului tău. Un skill încărcat în API este partajat cu întregul spațiu de lucru. În Claude Code, el se păstrează fie personal (~/.claude/skills/), fie în dosarul proiectului (.claude/skills/).

Mai există și o dimensiune de securitate. Pentru că skill-urile pot executa cod, documentația recomandă să le tratezi „ca pe instalarea de software” și să le folosești doar din surse de încredere. Tratăm asta separat în ultimul articol al seriei.

În articolele următoare ale acestei secțiuni vom scrie pas cu pas propriul tău skill și vom analiza, pe categorii, skill-urile care chiar există și sunt utile.

Care e treaba pe care o explici în fiecare zi, iar și iar, inteligenței artificiale și despre care spui „aș vrea să o învăț o singură dată”?
