---
title: "Securitatea skill-urilor: tot ce trebuie să citești înainte de instalare"
excerpt: "Skill-urile pot executa cod și pot trage instrucțiuni din surse externe. Un ghid despre surse de încredere, examinarea SKILL.md și a scripturilor, privilegii minime și chei secrete."
hook: "A instala un skill înseamnă a instala software"
fact: "13,4%"
factLabel: "Proporția skill-urilor cu vulnerabilități critice (Snyk, 2026)"
category: "Inteligență artificială"
---
Ceea ce face skill-urile atât de puternice le face și riscante: un skill nu poartă doar text, ci și cod executabil. Când agentul încarcă acel skill, urmează instrucțiunile din el ca pe ale lui și poate rula scripturile lui. De aceea recomandarea din documentația Claude se poate rezuma într-o propoziție: gândește-te la instalarea unui skill ca la instalarea de software.

## Ce spun sursele oficiale?

Secțiunea de securitate din documentația Claude este destul de directă. Îți recomandă să folosești skill-uri doar din surse de încredere, adică pe cele scrise de tine sau primite de la Anthropic. Dacă ești nevoit să folosești un skill dintr-o sursă necunoscută, îți cere să fii „extrem de atent” și să-l auditezi de la cap la coadă înainte de folosire.

Articolul de inginerie al Anthropic merge în aceeași direcție: pentru skill-urile din surse mai puțin de încredere recomandă examinarea fișierelor împachetate, în special a dependențelor de cod și a scripturilor, precum și verificarea instrucțiunilor care spun să te conectezi la rețele externe. Documentația subliniază în mod special un risc: skill-urile care trag date de la adrese externe sunt periculoase, pentru că conținutul tras poate conține instrucțiuni rău intenționate.

## Ce se întâmplă pe teren?

Aceste avertismente nu sunt teoretice. Firma de securitate Snyk a scanat, în cercetarea „ToxicSkills” publicată pe 5 februarie 2026, 3.984 de skill-uri provenite de la ClawHub și skills.sh. Rezultatele:

| Constatare | Număr |
|---|---|
| Skill-uri scanate | 3.984 |
| Cu cel puțin o problemă de securitate | 1.467 (36,82%) |
| Cu cel puțin o problemă critică | 534 (13,4%) |
| Încărcătură rău intenționată confirmată | 76 |

Potrivit raportului, datele skills.sh acoperă doar primele 100 de skill-uri selectate de acel site, iar cifrele complete ale pieței sunt pentru ClawHub. Printre tipurile de atac observate se numără instrucțiuni de instalare care îl îndrumă pe utilizator să descarce și să ruleze software nesigur, comenzi ascunse (camuflate cu Base64 sau Unicode) care trimit credențiale atacatorului, încercări de dezactivare a verificărilor de securitate și de instalare a unor uși din spate. În 91% dintre skill-urile rău intenționate confirmate s-a folosit injecția de prompt (prompt injection).

> **Știai că?** Potrivit Centrului de ajutor Claude, organizațiile Enterprise pot activa scanarea skill-urilor, care verifică skill-urile și plugin-urile încărcate pentru conținut rău intenționat. Dar aceasta este o plasă de siguranță, nu înlocuiește citirea. Cel mai bine afli ce face un skill deschizând și citind singur, înainte de instalare, SKILL.md și scripturile lui.

## Lista de verificare înainte de instalare

O listă practică extrasă din recomandările din documentație și din constatările de pe teren:

1. **Verifică sursa.** Al cui este depozitul? O companie oficială sau un dezvoltator cunoscut, sau o copie care seamănă foarte mult cu un pachet cunoscut (typosquatting)?
2. **Citește SKILL.md de la cap la coadă.** Formulări precum „mai întâi descarcă și rulează asta”, „dezactivează setarea de securitate”, „trimite la această adresă” sunt semnale de alarmă.
3. **Examinează dosarul scripts/.** Dacă există rânduri pe care nu le poți citi, ascunse sau codificate cu Base64, nu instala.
4. **Verifică legăturile externe.** Dacă skill-ul trage instrucțiuni sau date de la o adresă web, nu uita că acel conținut se poate schimba în orice moment.
5. **Instalează ce îți trebuie.** În loc de „instalează-le pe toate”, alegerea pe rând a skill-urilor micșorează și contextul, și suprafața de atac.

## Privilegii minime și chei secrete

Contează și unde rulează skill-ul. Potrivit documentației Claude, în mediul Claude API skill-urile nu au acces la rețea și nu pot instala pachete la rulare. În claude.ai, accesul la rețea poate fi complet, parțial sau oprit, după setările utilizatorului și ale administratorului. În Claude Code, în schimb, skill-urile au acces la rețea cât orice alt program de pe calculatorul tău. Adică un skill instalat în agentul local rulează cu privilegiile tale.

De aceea principiul privilegiilor minime este critic. În Claude Code, câmpul allowed-tools din front matter-ul unui skill face ca anumite unelte să fie folosite fără a cere permisiunea atunci când skill-ul este chemat. Potrivit documentației, această permisiune se resetează la mesajul următor. Totuși, dacă vezi permisiuni largi la un skill scris de altcineva, e un obicei bun să nu-l instalezi fără să le aprobi conștient.

Pentru cheile secrete regula este simplă: nu scrie niciodată chei API, parole și token-uri de acces în SKILL.md sau în dosarul skill-ului. Când partajezi skill-ul sau îl trimiți într-un depozit, pleacă tot ce se află în acel dosar. Păstrează cheile în variabile de mediu sau în metoda de stocare sigură a credențialelor din unealta pe care o folosești, și spune skill-ului doar cum să le acceseze.

În octombrie 2026, ecosistemul de skill-uri crește foarte repede, iar această creștere amintește de problemele de securitate din primii ani ai magazinelor de aplicații. Vestea bună: citirea unui skill este mult mai ușoară decât citirea codului sursă al unei aplicații, pentru că cea mai mare parte e text simplu.

Înainte să instalezi un skill, te uiți înăuntrul lui sau te bazezi pe numărul de stele și de descărcări?
