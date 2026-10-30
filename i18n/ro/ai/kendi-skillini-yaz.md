---
title: "Scrie-ți propriul skill: prima abilitate pas cu pas, cu SKILL.md"
excerpt: "Un dosar, un SKILL.md și o descriere bine scrisă. Pașii pentru a-ți scrie propriul Agent Skill, importanța câmpului description și metoda de testare."
hook: "Descrierea declanșează skill-ul"
fact: "1.024"
factLabel: "Numărul maxim de caractere pentru câmpul description"
category: "Inteligență artificială"
---
Nu trebuie să fii programator ca să scrii un skill. În forma cea mai simplă, ajunge un dosar cu un singur fișier text în el. Dar diferența dintre un skill care funcționează bine și unul care nu se declanșează niciodată stă adesea într-o singură propoziție: descrierea. În acest articol scriem de la zero un skill mic, dar real.

## Pasul 1: Creează dosarul și SKILL.md

Potrivit specificației Agent Skills, un skill este un dosar care conține cel puțin un fișier SKILL.md. Chiar la începutul fișierului se află un front matter YAML, cu două câmpuri obligatorii:

- **name:** Cel mult 64 de caractere. Doar litere mici, cifre și cratimă. Nu poate începe sau se termina cu cratimă, nu poate conține două cratime consecutive și trebuie să fie identic cu numele dosarului. Documentația Claude precizează și că în nume nu pot fi folosite cuvintele „anthropic” și „claude”.
- **description:** Nu poate fi goală, cel mult 1.024 de caractere. Trebuie să spună ce face skill-ul și când să fie folosit.

Există și câmpuri opționale (license, compatibility, metadata și, experimental, allowed-tools), dar pentru majoritatea skill-urilor nu sunt necesare.

## Pasul 2: Scrie descrierea cu grijă

De ce e descrierea atât de importantă? Pentru că la pornire agentul citește din fiecare skill doar numele și descrierea. În formularea agentskills.io, „toată povara” declanșării stă pe umerii descrierii. Dacă descrierea nu spune când e utilă treaba, agentul nu ajunge la acel skill.

Recomandările surselor se pot rezuma astfel:

- Scrie atât **ce face**, cât și **când se folosește**.
- Documentația Claude recomandă ca descrierea, pentru că se adaugă în promptul de sistem, să fie scrisă la **persoana a treia** („Procesează fișiere Excel”, nu „Te pot ajuta”).
- agentskills.io recomandă să enumeri explicit și situațiile în care utilizatorul nu numește domeniul pe nume.
- Ține-o scurtă: câteva propoziții, cel mult un paragraf scurt. Claude Code taie descrierea în listă la 1.536 de caractere, așa că cel mai important caz de utilizare trebuie să fie la început.

## Pasul 3: Ține corpul scurt, scriptul isteț

Să ne gândim, ca exemplu, la un skill potrivit regulii de scriere a acestui blog: în text să nu rămână linie lungă (em dash) și linie medie (en dash). Structura dosarului să fie așa:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

Iar fișierul SKILL.md să fie atât:

```markdown
---
name: tire-denetimi
description: Găsește folosirea liniei lungi (U+2014) și a liniei medii (U+2013) în articolele de blog și propune corecturi. Se folosește când utilizatorul pregătește un articol Markdown pentru publicare, spune "verifică liniile", "respectă regulile de scriere?" sau, chiar dacă nu o numește, cere o ultimă verificare înainte de publicare.
---

# Verificarea liniilor

1. Rulează comanda `python scripts/tire_bul.py <fisier.md>`.
2. Pentru fiecare rând din rezultat, propune înlocuirea liniei cu punct, virgulă, două puncte sau paranteză.
3. Nu schimba sensul. Întreabă utilizatorul despre rândurile despre care nu ești sigur.
4. La final, spune într-o singură propoziție câte rânduri ai corectat.
```

Documentația Claude vede fereastra de context ca pe o „resursă comună” și recomandă să adaugi doar informația pe care modelul nu o știe deja. Corpul trebuie să rămână sub 500 de rânduri. Textele lungi de referință trebuie mutate în fișiere separate, iar acele fișiere trebuie legate din SKILL.md la un singur nivel.

Și regula pentru scripturi este clară: „rezolvă, nu arunca mingea”. Adică scriptul trebuie să gestioneze singur cazurile de eroare, nu să fie scris cu logica „să crape, Claude găsește el o cale”. Când scriptul rulează, în context intră nu codul în sine, ci doar rezultatul lui. Asta face scriptul mai de încredere decât o instrucțiune pentru munci repetitive, care nu iartă erorile.

> **Știai că?** În Claude Code, vechile „comenzi slash personalizate” s-au unit cu skill-urile. Fișierul .claude/commands/deploy.md și .claude/skills/deploy/SKILL.md creează aceeași comandă /deploy. Dacă nu vrei ca un skill să se declanșeze automat, poți adăuga în front matter disable-model-invocation: true și îl poți chema doar manual.

## Pasul 4: Testează, apoi testează din nou

Ghidul de bune practici al lui Claude recomandă să pregătești scenarii de evaluare înainte de a scrie documentație lungă, iar lista de verificare dinaintea publicării include cel puțin trei evaluări și teste separate pe modelele Haiku, Sonnet și Opus. Motivul e simplu: o instrucțiune care funcționează perfect pe Opus poate cere mai multe detalii pentru Haiku.

Pentru a testa declanșarea, recomandarea agentskills.io este concretă: pregătește aproximativ 20 de mesaje-exemplu de utilizator. Între 8 și 10 dintre ele ar trebui să declanșeze skill-ul, iar între 8 și 10 să nu-l declanșeze. Cele mai valoroase exemple negative sunt cele „la un fir de păr”, adică mesajele care folosesc aceleași cuvinte, dar cer altă treabă. Fiindcă comportamentul modelului nu e identic de fiecare dată, se recomandă să rulezi fiecare mesaj de mai multe ori (3 la început) și să te uiți la rata de declanșare.

| Descriere proastă | Descriere bună |
|---|---|
| „Ajută cu PDF-urile.” | Spune ce face și când se folosește |
| Doar detalii tehnice | Descrie intenția utilizatorului |
| Acoperă orice | Spune și ce nu face |

Instalarea e și ea simplă: în Claude Code, e suficient să pui dosarul sub ~/.claude/skills/ (personal) sau în dosarul .claude/skills/ al proiectului. Claude Code urmărește aceste dosare și detectează modificările în aceeași sesiune, fără repornire. În claude.ai, poți încărca skill-ul ca zip din setări.

Ce muncă repetitivă ți-ar automatiza primul tău skill?
