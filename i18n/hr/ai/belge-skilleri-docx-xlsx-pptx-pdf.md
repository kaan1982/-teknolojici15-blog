---
title: "Skillovi za dokumente: kako agenta naučiti Word, Excel, PowerPoint i PDF"
excerpt: "Što rade Anthropicovi skillovi docx, xlsx, pptx i pdf i gdje rade? Službeni i pomoćni skillovi koji doista koriste pri izradi dokumenata."
hook: "Izvješće, tablica, prezentacija: sve je jedan skill"
fact: "4 DOKUMENTA"
factLabel: "Broj gotovih skillova za dokumente"
category: "Umjetna inteligencija"
---
Lako je reći umjetnoj inteligenciji "pripremi mi izvješće". Teško je dobiti izvješće kao Word ili Excel datoteku koja se doista otvara, kojoj se oblikovanje ne kvari i čije formule rade. Prva, a možda i najčešće korištena kategorija skillova upravo je to: uredski dokumenti. U ovom članku obrađujemo samo skillove za koje smo potvrdili da postoje.

## Četiri temeljna kamena: docx, xlsx, pptx, pdf

Prema Claudeovoj dokumentaciji, Anthropic nudi četiri gotova (pre-built) skilla za dokumente. Oni rade u pozadini Claudeove značajke za izradu datoteka, a Anthropic izvorni kôd objavljuje u GitHub repozitoriju anthropics/skills.

| Skill | Što radi? (iz službenih opisa) |
|---|---|
| docx | Izrađuje, čita i uređuje Word dokumente. Uključujući oblikovanje i predloške |
| xlsx | Otvara i uređuje proračunske tablice, dodaje formule i grafikone, čisti neuredne podatke |
| pptx | Izrađuje prezentacije, uređuje slajdove, čita i raščlanjuje sadržaj .pptx datoteka |
| pdf | Izvlači tekst i tablice, spaja i dijeli PDF-ove, popunjava obrasce, dodaje vodeni žig |

Opisi u repozitoriju napisani su prilično "uporno". Na primjer, opis skilla pptx kaže da se koristi kad je datoteka .pptx na bilo koji način uključena kao ulaz ili izlaz. To je službeni primjer pravila "opis pokreće" koje smo objasnili u prethodnom članku.

## Gdje ih možeš koristiti?

Prema Claudeovoj dokumentaciji, od listopada 2026. ta četiri skilla automatski su aktivna pri izradi dokumenata na claude.ai, a u Claude API-ju mogu se pozivati kao gotovi skillovi. U Claude Codeu gotovi skillovi za dokumente ne dolaze ugrađeni. No repozitorij anthropics/skills može se dodati kao tržnica dodataka za Claude Code i može se instalirati paket document-skills. Prema uputi u repozitoriju, prvo se naredbom /plugin marketplace add anthropics/skills doda tržnica, a zatim se instalira document-skills@anthropic-agent-skills.

Što se licence tiče, postoji razlika. Mnogi skillovi u repozitoriju otvorenog su koda s licencom Apache 2.0. No četiri skilla za dokumente podijeljena su kao "nije otvoreni kod, nego izvor je dostupan" (source-available). Dakle, kôd možeš pregledati i iz njega učiti, ali prije slobodne redistribucije u vlastitom proizvodu moraš pročitati licencu.

> **Jesi li znao?** Skill pdf je školski primjer postupnog učitavanja. Prema Anthropicovu inženjerskom članku, upute za popunjavanje obrazaca izdvojene su iz glavne datoteke SKILL.md i premještene u zasebnu datoteku forms.md. Claude tu datoteku čita samo kad doista popunjava obrazac. U repozitoriju se danas unutar mape pdf nalaze i forms.md, i reference.md, i mapa scripts.

## Pomoćnici uz dokument

Izrada dokumenata ne završava formatom datoteke. U repozitoriju anthropics/skills postoje i drugi službeni primjeri usmjereni na sadržaj:

- **doc-coauthoring:** Nudi korak-po-korak tijek rada za zajedničko pisanje strukturiranih tekstova poput tehničkih specifikacija, prijedloga i dokumenata o odlukama. Provodi kroz faze prijenosa konteksta, iterativnog ispravljanja i provjere.
- **internal-comms:** Okuplja resurse za pomoć pri pisanju internih komunikacijskih tekstova poput izvješća o stanju, ažuriranja za upravu, tvrtkina biltena i čestih pitanja u formatima koje tvrtka preferira. U mapi ima i primjera tekstova.
- **brand-guidelines:** Primjenjuje na izlaz Anthropicove službene boje i tipografiju brenda. Njegova prava vrijednost je u tome što pokazuje kako možeš izgraditi nešto slično za vlastiti brend.
- **theme-factory:** Sadrži 10 gotovih tema boja i fontova koje se mogu primijeniti na slajd, dokument, izvješće ili HTML stranicu, a po želji odmah izrađuje i novu temu.

Centar za pomoć spominje i skillove koje su partneri poput Notiona, Figme i Atlassiana pripremili za rad zajedno s vlastitim MCP konektorima. Oni su korisni pri radu s alatima u kojima se dokumenti stvaraju (npr. Notion stranice).

## Kako se koristi u stvarnom životu?

Najučinkovitija uporaba je kombinirati gotove skillove za dokumente s vlastitim malim skillom. Na primjer, skill xlsx zna kako se ispravno izrađuje Excel, ali ne zna koje stupce treba imati mjesečna tablica prodaje u tvojoj tvrtki. Ako napišeš kratak skill koji to opisuje, oba skilla rade zajedno i nastaje datoteka ispravnog formata koja je usto u skladu s tvojim standardom.

Postoje dvije napomene koje ne smiješ zaboraviti. Prvo, repozitorij anthropics/skills izričito piše da su ti skillovi "za demonstraciju i edukaciju" i da se Claudeovo vlastito ponašanje može razlikovati od ovdašnjih implementacija. Drugo, skillovi za dokumente trebaju okruženje za izvršavanje koda. Prema Centru za pomoć, da bi skillovi radili, mora biti uključena značajka izvršavanja koda.

U sljedećem članku prelazimo na zaslon: skillovi koji izrađuju dizajn, front-end i web izlaze.

Kod koje vrste dokumenta gubiš najviše vremena: tablice, prezentacije ili izvješća?
