---
title: "Inteligența artificială a găsit o breșă critică în PHP, pe care se sprijină 70% dintre site-uri"
excerpt: "Două vulnerabilități numite PHP2Shell permit rularea de cod pe server fără autentificare. La descoperire au fost folosite modele precum GPT-5.6 Sol și Gemini 4 Argon."
hook: "IA a găsit breșa uriașă din PHP"
fact: "CVSS 9,2"
factLabel: "Cel mai mare scor dintre vulnerabilitățile PHP2Shell"
category: "Inteligență artificială"
---
Pe 21 octombrie, dezvoltatorii PHP au publicat un patch de urgență pentru două vulnerabilități critice din motorul de bază al limbajului. Numite „PHP2Shell" și înregistrate ca CVE-2026-109618 și CVE-2026-109619, breșele au fost găsite cu ajutorul unor instrumente de inteligență artificială.

## Ce s-a întâmplat?

Potrivit Fortune, firma de testare a securității IA Calif a găsit prima verigă a lanțului pe 1 august cu ajutorul GPT-5.6 Sol; Wiz a detectat independent prima vulnerabilitate pe 19 august și a raportat-o echipei de securitate PHP pe 24 august. La descoperire au fost folosite instrumentul propriu al Wiz, Wiz Atlas, precum și modelele GPT-5.6 Sol de la OpenAI și Gemini 4 Argon de la Google.

Breșele permit unui atacator să ruleze cod de la distanță pe server, fără autentificare, și să exfiltreze date din memorie. Potrivit Wiz, sunt afectate aproape toate versiunile PHP apărute în ultimul deceniu, până la 5.4. Cel mai mare scor de severitate pe scara CVSS este 9,2. PHP funcționează în spatele a aproximativ 70% dintre site-urile din lume; doar WordPress administrează cam 40% dintre site-uri. Conform știrii actualizate de Fortune, după apariția patch-ului breșele au început să fie exploatate pe scară largă.

## De ce contează?

Este unul dintre cele mai concrete exemple de situații în care inteligența artificială nu mai este doar un ajutor în cercetarea de securitate, ci cea care face descoperirea. Dar aceleași instrumente se află și în mâinile atacatorilor, iar intervalul dintre apariția patch-ului și începutul exploatării se scurtează. Fiecare proprietar de site care folosește PHP trebuie să-și actualizeze imediat serverul. În tabloul mai larg, erorile ascunse în codul vechi al internetului, care rulează de zeci de ani, pot ieși acum la iveală mult mai repede. Povestea primului program care se plimba singur prin rețea am spus-o în [articolul despre Creeper](/yazi/creeper-ilk-virus-zararsizdi/).
