---
title: "Skillovi za dizajn i web: za sučelja koja ne smrde na predložak"
excerpt: "frontend-design, web-artifacts-builder, canvas-design i Vercelov skill web-design-guidelines. Pravi skillovi koji poboljšavaju sučelja koja izrađuje agent."
hook: "Zašto je dizajn umjetne inteligencije uvijek isti?"
fact: "10 TEMA"
factLabel: "Broj gotovih tema u theme-factoryju"
category: "Umjetna inteligencija"
---
Ako si umjetnoj inteligenciji dao da napravi web-stranicu, vjerojatno si primijetio: rezultat radi, ali odnekud djeluje poznato. Isti ljubičasti prijelazi, isti centrirani naslov, isti raspored kartica. Većina skillova za dizajn bavi se upravo tim problemom: natjerati model da donese svjesnu dizajnersku odluku, a ne da ostane na "zadanom".

Za svaki skill u ovom članku naveli smo izvor. Anthropicov službeni repozitorij je anthropics/skills, a repozitoriji zajednice ili tvrtki posebno su označeni.

## frontend-design: bijeg od zadanog

Opis skilla frontend-design u službenom repozitoriju jasan je: smjernice za "svjestan, prepoznatljiv vizualni dizajn" pri izradi novog sučelja ili preoblikovanju postojećeg. Pomaže pri odabiru estetskog smjera, tipografije i izbora koji "ne djeluju kao predložak".

Tijelo skilla stavlja model u ulogu voditelja dizajna u dizajnerskom studiju i pokreće posao pretpostavkom da klijent već odbija klišejske prijedloge. To je ujedno primjer dobre tehnike pisanja skilla: umjesto gomilanja informacija, modelu se daje jasna perspektiva.

## Web izlazi: web-artifacts-builder i webapp-testing

- **web-artifacts-builder (službeni):** Skup alata za izradu složenih HTML izlaza s više komponenti na claude.ai, koji zahtijevaju upravljanje stanjem ili usmjeravanje, modernim front-end tehnologijama poput Reacta, Tailwind CSS-a i shadcn/uija. Njegov opis kaže i da se ne treba koristiti za jednostavne poslove s jednom HTML datotekom. U mapi su skripte koje pokreću projekt i pakiraju ga u jednu datoteku.
- **webapp-testing (službeni):** Skup alata za testiranje lokalnih web-aplikacija pomoću Playwrighta. Služi za provjeru front-end funkcija, otklanjanje pogrešaka sučelja, snimanje zaslona i čitanje zapisa preglednika. Odgovor je na pitanje "radi li to doista?" nakon što je dizajn gotov.

> **Jesi li znao?** Skill theme-factory iz službenog repozitorija dolazi s 10 gotovih tema koje se mogu primijeniti na svaki izlaz, od slajda do HTML odredišne stranice. Čak su i nazivi datoteka tema nadahnjujući: "arctic-frost", "midnight-galaxy", "golden-hour", "tech-innovation" i slično. Po želji skill može odmah izraditi i novu temu.

## Vizualna umjetnost: canvas-design, algorithmic-art, slack-gif-creator

U Anthropicovu repozitoriju postoje još tri skilla koji predstavljaju "kreativnu" stranu:

- **canvas-design:** Za izradu plakata, umjetničkih djela ili statičnih dizajna u formatima .png i .pdf koristi pristup "filozofije dizajna". U mapi je više od 80 datoteka s fontovima. Njegov opis izričito traži da se ne kopiraju radovi postojećih umjetnika.
- **algorithmic-art:** Izrađuje generativnu umjetnost pomoću p5.js, uz nasumičnost s početnom vrijednošću (seeded randomness) i interaktivne parametre. Namijenjen je zahtjevima poput polja strujanja i sustava čestica.
- **slack-gif-creator:** Nudi ograničenja, alate za provjeru i ideje za animacije za izradu animiranih GIF-ova optimiziranih za Slack. Za zahtjeve u stilu "napravi mi Slack GIF u kojem X radi Y".

## Iz zajednice: Vercelovi skillovi za sučelja i React

Izvan službenog repozitorija jedan od najpoznatijih paketa usmjerenih na dizajn je Vercelov repozitorij vercel-labs/agent-skills. Od listopada 2026. u njemu se nalaze:

| Skill | Što radi? |
|---|---|
| web-design-guidelines | Provjerava kôd sučelja prema više od 100 pravila koja obuhvaćaju pristupačnost, performanse i korisničko iskustvo |
| vercel-react-best-practices | Pravila performansi za React i Next.js iz Vercelova inženjerstva (više od 40 u 8 kategorija) |
| vercel-composition-patterns | Obrasci kompozicije React komponenti koji se mogu skalirati |
| vercel-react-view-transitions | Glatke animacije prijelaza pomoću Reactova View Transition API-ja |
| vercel-react-native-skills | Pravila performansi i arhitekture za React Native i Expo |

Ti skillovi nisu vezani uz jedan alat. Vercelov repozitorij preporučuje instalaciju naredbom npx skills add vercel-labs/agent-skills, a skillovi se mogu koristiti u različitim agentima koji podržavaju standard Agent Skills.

## Što kada koristiti?

Praktičan redoslijed mogao bi biti ovakav: smjer dizajna odredi pomoću frontend-designa, boje i font učvrsti pomoću theme-factoryja ili vlastitog skilla za brend, izlaz izradi pomoću web-artifacts-buildera, zatim ga provjeri pomoću web-design-guidelines i isprobaj u pregledniku pomoću webapp-testinga. Svaki je zasebna stručnost, a zahvaljujući postupnom učitavanju držanje svih instaliranih istodobno ne napuhava kontekst.

Jedno upozorenje: neki od tih skillova (npr. web-artifacts-builder) izvršavaju skripte. Claudeova dokumentacija preporučuje da se skillovi tretiraju kao instalacija softvera i da se instaliraju samo iz izvora kojima vjeruješ. Dobra je navika prije instalacije svakog paketa izvan službenog repozitorija pogledati njegov SKILL.md i skripte.

Što misliš, hoće li dizajni izrađeni uz pomoć umjetne inteligencije s vremenom postati raznolikiji ili će, kako svi koriste iste skillove, nastati nova "uniformnost"?
