---
title: "Skill-uri pentru documente: cum îl înveți pe agent Word, Excel, PowerPoint și PDF"
excerpt: "Ce fac skill-urile docx, xlsx, pptx și pdf ale Anthropic și unde funcționează? Skill-uri oficiale și auxiliare cu adevărat utile pentru crearea de documente."
hook: "Raport, tabel, prezentare: totul e un skill"
fact: "4 DOCUMENTE"
factLabel: "Numărul de skill-uri pentru documente livrate gata făcute"
category: "Inteligență artificială"
---
E ușor să-i spui inteligenței artificiale „pregătește-mi un raport”. Greu este ca raportul să vină ca un fișier Word sau Excel care chiar se deschide, nu are formatul stricat și are formulele funcționale. Prima categorie de skill-uri, și poate cea mai folosită, este exact aceasta: documentele de birou. În acest articol vorbim doar despre skill-urile a căror existență am verificat-o.

## Patru pietre de temelie: docx, xlsx, pptx, pdf

Potrivit documentației Claude, Anthropic oferă patru skill-uri de documente gata făcute (pre-built). Ele funcționează în spatele funcției de creare de fișiere a lui Claude, iar Anthropic publică codul sursă în depozitul GitHub anthropics/skills.

| Skill | Ce face? (din descrierile oficiale) |
|---|---|
| docx | Creează, citește, editează documente Word. Include formatare, șabloane |
| xlsx | Deschide și editează foi de calcul, adaugă formule și grafice, curăță date dezordonate |
| pptx | Creează prezentări, editează diapozitive, citește și parsează conținutul unui .pptx |
| pdf | Extrage text și tabele, îmbină și împarte PDF-uri, completează formulare, adaugă filigran |

Descrierile din depozit sunt scrise destul de „insistent”. De exemplu, descrierea skill-ului pptx spune că trebuie folosit dacă un fișier .pptx este implicat „în orice fel”, ca intrare sau ca ieșire. Este un exemplu oficial al regulii „descrierea declanșează”, despre care am vorbit în articolul precedent.

## Unde îl poți folosi?

În octombrie 2026, potrivit documentației Claude, aceste patru skill-uri sunt active automat în claude.ai la crearea de documente și pot fi chemate și în Claude API ca skill-uri gata făcute. În Claude Code, skill-urile de documente gata făcute nu vin integrate. Dar depozitul anthropics/skills poate fi adăugat ca piață de plugin-uri pentru Claude Code și se poate instala pachetul document-skills. Potrivit instrucțiunii din depozit, mai întâi se adaugă piața cu comanda /plugin marketplace add anthropics/skills, apoi se instalează document-skills@anthropic-agent-skills.

Există o distincție privind licența. Multe dintre skill-urile din depozit sunt open source sub licența Apache 2.0. Dar cele patru skill-uri de documente sunt partajate ca „nu open source, ci cu sursă accesibilă” (source-available). Adică poți examina codul și învăța din el, dar înainte să-l redistribui liber în produsul tău trebuie să citești fișierul de licență.

> **Știai că?** Skill-ul pdf este exemplul de manual al încărcării treptate. Potrivit articolului de inginerie al Anthropic, instrucțiunile de completare a formularelor au fost scoase din SKILL.md principal și mutate într-un fișier separat, forms.md. Claude citește acest fișier doar când completează efectiv un formular. În depozit, în dosarul pdf se află astăzi atât forms.md, cât și reference.md, precum și un dosar scripts.

## Ajutoare lângă document

Crearea de documente nu se termină la formatul fișierului. În depozitul anthropics/skills mai există și alte exemple oficiale axate pe partea de conținut:

- **doc-coauthoring:** Oferă un flux de lucru pas cu pas pentru a scrie împreună texte structurate, precum specificații tehnice, propuneri și documente de decizie. Trece prin etapele de transfer al contextului, corectare iterativă și verificare.
- **internal-comms:** Adună resurse care ajută la scrierea comunicărilor interne, precum rapoarte de stare, actualizări pentru conducere, buletine interne și întrebări frecvente, în formatele preferate ale firmei. În dosar există și texte-exemplu.
- **brand-guidelines:** Aplică pe un rezultat culorile și tipografia oficiale ale mărcii Anthropic. Valoarea lui reală este că arată cum poți construi ceva similar pentru marca ta.
- **theme-factory:** Conține 10 teme gata făcute de culori și fonturi care pot fi aplicate pe diapozitive, documente, rapoarte sau pagini HTML și, dacă vrei, produce pe loc teme noi.

Centrul de ajutor menționează și skill-uri pregătite de parteneri precum Notion, Figma și Atlassian, făcute să funcționeze împreună cu propriii conectori MCP. Ele sunt utile când lucrezi cu uneltele în care se produc documentele (de ex. paginile Notion).

## Cum se folosește în viața reală?

Cea mai eficientă folosire este combinarea skill-urilor de documente gata făcute cu propriul tău mic skill. De exemplu, skill-ul xlsx știe cum să producă corect un Excel, dar nu știe ce coloane trebuie să aibă tabelul lunar de vânzări al firmei tale. Dacă scrii un skill scurt care explică asta, cele două skill-uri lucrează împreună și rezultă un fișier atât în formatul corect, cât și conform standardului tău.

Sunt două note pe care nu trebuie să le uiți. Prima: depozitul anthropics/skills spune clar că aceste skill-uri sunt „pentru demonstrație și educație” și că comportamentul real al lui Claude poate diferi de implementările de aici. A doua: skill-urile de documente au nevoie de un mediu de execuție a codului. Potrivit Centrului de ajutor, pentru ca skill-urile să funcționeze, funcția de execuție a codului trebuie să fie activă.

În articolul următor trecem la partea de ecran: skill-urile care produc design, front-end și rezultate web.

Pe ce tip de document pierzi cel mai mult timp când îl pregătești: tabel, prezentare sau raport?
