---
title: "Mis on skill? Tehisintellekti agentide uued oskuste kaustad"
excerpt: "Agent Skill on kaust, mis koosneb SKILL.md failist ja soovi korral skriptidest. Agent laeb selle ainult siis, kui seda vaja on. Mille poolest see erineb promptist, MCP-st ja pluginast?"
hook: "Õpeta agendile uus oskus ühe kaustaga"
fact: "3 KIHTI"
factLabel: "Skilli sisu etapiviisiline laadimine"
category: "Tehisintellekt"
---

Tehisintellekti assistendid teavad kõigest veidi, kuid nad ei tea sinu ettevõtte aruandemalli, sinu kaubamärgi värve ega nippe, kuidas teatud failitüüpi korrektselt töödelda. Mis oleks, kui sa ei peaks seda igas vestluses pikalt seletama, vaid saaksid selle ühe korra pakendada ja öelda agendile: "kasuta, kui vaja"? Just see ongi "skilli" (oskuse) idee.

## Lühidalt: kaust ja SKILL.md

Anthropicu määratluse järgi on Agent Skills modulaarsed paketid, mis laiendavad Claude'i võimeid. Iga skill hoiab koos juhised, metaandmed ja soovi korral ressursid (skriptid, mallid) ning Claude kasutab neid ise, kui need on asjakohased. Anthropicu inseneriblogi ütleb seda veelgi lihtsamalt: skillid on "korrastatud kaustad juhiste, skriptide ja ressurssidega", mille agent laeb vajadusel, et teatud töödes paremaks saada.

Tehniliselt on skill kaust, milles on vähemalt fail nimega SKILL.md. Selle faili alguses on YAML-vormingus kaks kohustuslikku välja: name (nimi) ja description (kirjeldus). Selle all on lihtsas Markdownis kirjutatud juhised. Kausta võid soovi korral lisada alamkaustu, näiteks scripts/ (käivitatav kood), references/ (lisadokumendid) ja assets/ (mallid, pildid, andmed).

Anthropic võrdleb seda struktuuri uuele töötajale koostatud sisseelamisjuhendiga. Paned juhendi lauale ja töötaja avab selle, kui vajab.

## Saladus: kõike ei laeta korraga

Skilli eristab tavalisest pikast promptist kujundusprintsiip nimega "etapiviisiline avamine" (progressive disclosure). Claude'i dokumentatsiooni järgi laetakse sisu kolmes kihis:

| Kiht | Millal laetakse? |
|---|---|
| 1. Metaandmed (nimi + kirjeldus) | Alati, käivitamisel (umbes 100 tokenit skilli kohta) |
| 2. SKILL.md sisu | Kui skill käivitub (soovitatav alla 5000 tokeni) |
| 3. Lisafailid ja skriptid | Ainult vajadusel; konteksti satub vaid skriptide väljund |

Nii võid agendile laadida kümneid skille ja ometi ei täida need kõik konteksti akent. Kuni skilli käivitumiseni on "laual" igast skillist ainult nimi ja kirjeldus. Dokumentatsiooni näites hoiab PDF-skill vormide täitmise juhiseid eraldi failis forms.md ja Claude loeb seda faili ainult siis, kui ta päriselt vormi täidab.

> **Kas teadsid?** Anthropic kuulutas Agent Skillsi välja 16. oktoobril 2025 ja avaldas 18. detsembril 2025 vormingu avatud standardina aadressil agentskills.io. Seetõttu näed sama SKILL.md struktuuri seisuga oktoober 2026 ka teiste tööriistade, näiteks GitHub Copilotti ja OpenAI Codexi dokumentatsioonis. Copilotti dokumentatsioon suunab skillide kontrollimiseks otse agentskills.io spetsifikatsiooni juurde.

## Prompt, MCP, plugin: mis vahe on?

Neid mõisteid aetakse sageli segamini, sest kõik puudutavad "agendi paremaks tegemist". Claude'i abikeskuse eristuse võib kokku võtta nii:

- **Prompt või kohandatud juhised:** üldised suunised, mis kehtivad ühes vestluses või kõigis vestlustes. Skill on seevastu ülesandespetsiifiline ja aktiveerub ainult siis, kui see on asjakohane.
- **Projektid:** püsiv taustateave, mis on projekti vestlustes alati laetud. Skill on protseduur, mis avatakse vajadusel.
- **MCP (Model Context Protocol) ühendused:** ühendavad Claude'i väliste teenuste ja andmeallikatega. Ehk annavad "ligipääsu". Skill on aga "meetoditeadmine", mis selgitab, kuidas seda ligipääsu kasutada. Abikeskus ütleb, et neid kasutatakse sageli koos.
- **Pluginad:** Claude Code'is ja Coworkis on plugin pakett, millega jagatakse mitut osa (skillid, ühendused, käsud, alamagendid) koos. Ka OpenAI dokumentatsioon teeb sarnase eristuse: skill on kirjutamisvorming, plugin on levitusvorm.

Lühidalt: MCP annab agendile käe, skill õpetab sellele käele oskusi ja plugin toimetab need kõik ühes karbis kohale.

## Kus see töötab?

Claude'i dokumentatsiooni järgi saab skille seisuga oktoober 2026 kasutada Claude'i rakendustes (claude.ai), Claude Code'is ja koos koodi käivitamise tööriistaga Claude API-s. Abikeskus märgib, et skillid on saadaval plaanides Free, Pro, Max, Team ja Enterprise ning nõuavad koodi käivitamise funktsiooni sisselülitamist.

Oluline detail: kohandatud skillid ei sünkroniseeru pindade vahel. Skill, mille laadid üles claude.ai-sse, on ainult sinu kontol. API-sse üles laaditud skill jagatakse kogu tööruumiga. Claude Code'is hoitakse neid isiklikus kaustas (~/.claude/skills/) või projektikaustas (.claude/skills/).

Lisaks on turvalisuse külg. Kuna skillid saavad koodi käivitada, soovitab dokumentatsioon käsitleda neid "nagu tarkvara paigaldamist" ja kasutada ainult usaldusväärsetest allikatest. Sellest räägime sarja viimases loos eraldi.

Selle osa järgmistes lugudes kirjutame samm-sammult oma skilli ja vaatame kategooriate kaupa läbi päriselt olemas olevad ja kasulikud skillid.

Mis töö on see, mida sa seletad tehisintellektile iga päev ikka ja jälle ning mõtled: "kui ma seda vaid ühe korra õpetaksin"?
