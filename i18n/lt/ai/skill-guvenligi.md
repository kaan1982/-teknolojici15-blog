---
title: "Skill saugumas: viskas, ką turėtum perskaityti prieš diegdamas"
excerpt: "Skill gali vykdyti kodą ir traukti instrukcijas iš išorinių šaltinių. Vadovas apie patikimą šaltinį, SKILL.md ir scenarijų peržiūrą, mažiausias teises ir slaptus raktus."
hook: "Skill diegimas yra programinės įrangos diegimas"
fact: "13,4 %"
factLabel: "Skill su kritine spraga dalis (Snyk, 2026)"
category: "Dirbtinis intelektas"
---

Tai, kas skill daro tokius galingus, daro juos ir rizikingais: skill nešasi ne tik tekstą, bet ir vykdomąjį kodą. Kai agentas tokį skill įkelia, jame esančias instrukcijas seka kaip savo ir gali vykdyti jo scenarijus. Todėl Claude dokumentacijos rekomendaciją galima suformuluoti vienu sakiniu: skill diegimą traktuok kaip programinės įrangos diegimą.

## Ką sako oficialūs šaltiniai?

Claude dokumentacijos saugumo skyrius gana tiesus. Jis rekomenduoja naudoti skill tik iš patikimų šaltinių, tai yra tik savo parašytus ar gautus iš Anthropic. Jei privalai naudoti skill iš nežinomo šaltinio, prašo būti "nepaprastai atsargiam" ir prieš naudojant jį peržiūrėti nuo pradžios iki galo.

Anthropic inžinerijos straipsnis laikosi tos pačios linijos: skill iš mažiau patikimų šaltinių rekomenduoja peržiūrėti sudėtyje esančius failus, ypač kodo priklausomybes ir scenarijus, taip pat patikrinti instrukcijas, liepiančias jungtis prie išorinių tinklų. Dokumentacija ypač pabrėžia vieną riziką: skill, traukiantys duomenis iš išorinių adresų, yra pavojingi, nes ištrauktame turinyje gali būti piktavališkų instrukcijų.

## Kas vyksta realybėje?

Šie įspėjimai nėra teoriniai. Saugumo bendrovė Snyk 2026 m. vasario 5 d. paskelbtame tyrime "ToxicSkills" nuskenavo 3 984 skill iš ClawHub ir skills.sh. Rezultatai:

| Radinys | Skaičius |
|---|---|
| Nuskenuota skill | 3 984 |
| Turinčių bent vieną saugumo problemą | 1 467 (36,82 procento) |
| Turinčių bent vieną kritinę problemą | 534 (13,4 procento) |
| Patvirtintas kenkėjiškas krūvis | 76 |

Pasak ataskaitos, skills.sh duomenys apima tik atrinktus pirmuosius 100 tos svetainės skill, o pilni rinkos skaičiai pateikti ClawHub. Tarp matytų atakų tipų yra diegimo instrukcijos, nukreipiančios naudotoją atsisiųsti ir paleisti nepatikimą programinę įrangą, paslėptos (Base64 ar Unicode užmaskuotos) komandos, siunčiančios prisijungimo duomenis užpuolikui, bandymai išjungti saugumo patikras ir įrengti užpakalines duris. 91 procente patvirtintų kenkėjiškų skill panaudotas užklausos injekcija (prompt injection).

> **Ar žinojai?** Pasak Claude pagalbos centro, Enterprise organizacijos gali įjungti skill nuskaitymą, tikrinantį įkeltus skill ir įskiepius dėl piktavališko turinio. Bet tai saugumo tinklas, o ne skaitymo pakaitalas. Geriausiai suprasti, ką skill daro, gali prieš diegdamas pats atidaręs ir perskaitęs jo SKILL.md bei scenarijus.

## Kontrolinis sąrašas prieš diegiant

Praktinis sąrašas, išvestas iš dokumentacijos rekomendacijų ir radinių realybėje:

1. **Patikrink šaltinį.** Kieno saugykla? Ar tai oficiali bendrovė ar žinomas kūrėjas, o gal žinomo paketo vardą labai primenanti kopija (typosquatting)?
2. **Perskaityk SKILL.md nuo pradžios iki galo.** Tokios frazės kaip "pirmiausia atsisiųsk ir paleisk tai", "išjunk saugumo nustatymą", "išsiųsk šiuo adresu" yra pavojaus ženklai.
3. **Peržiūrėk aplanką scripts/.** Jei yra eilučių, kurių negali perskaityti, paslėptų ar Base64 užkoduotų, nediek.
4. **Patikrink išorines nuorodas.** Jei skill traukia instrukcijas ar duomenis iš tinklalapio, atsimink, kad tas turinys bet kada gali pasikeisti.
5. **Diek tai, ko reikia.** Vietoj "įdiegti viską" renkantis pavienius skill mažėja ir kontekstas, ir atakos paviršius.

## Mažiausios teisės ir slapti raktai

Svarbu ir tai, kur skill veikia. Pagal Claude dokumentaciją, Claude API aplinkoje skill neturi tinklo prieigos ir vykdymo metu negali diegti paketų. claude.ai tinklo prieiga pagal naudotojo ir administratoriaus nustatymus gali būti pilna, dalinė arba išjungta. O Claude Code skill turi tiek tinklo prieigos, kiek bet kuri tavo kompiuterio programa. Tai yra vietiniame agente įdiegtas skill veikia su tavo teisėmis.

Todėl mažiausių teisių principas kritiškas. Claude Code skill frontmatter esantis laukas allowed-tools leidžia tam skill iškviečiant tam tikrus įrankius naudoti neprašant leidimo. Pagal dokumentaciją, šis leidimas kitoje žinutėje atstatomas. Vis dėlto, jei kito parašytame skill matai plačias teises, gera praktika neįdiegti jo be sąmoningo patvirtinimo.

Dėl slaptų raktų taisyklė paprasta: API raktų, slaptažodžių ir prieigos žetonų niekada nerašyk į SKILL.md ar skill aplanką. Dalindamasis skill ar siųsdamas į saugyklą išsiųsi viską, kas yra tame aplanke. Raktus laikyk aplinkos kintamuosiuose ar naudojamo įrankio saugiame prisijungimo duomenų saugojimo metode, o skill tik paaiškink, kaip juos pasiekti.

2026 m. spalį skill ekosistema auga labai greitai, ir šis augimas primena pirmųjų metų programėlių parduotuvių saugumo problemas. Gera žinia ta, kad perskaityti skill daug lengviau nei perskaityti programos šaltinio kodą, nes didžioji jo dalis yra paprastas tekstas.

Ar prieš diegdamas skill atidarai ir perskaitai jo vidų, ar pasitiki žvaigždučių ir atsisiuntimų skaičiumi?
