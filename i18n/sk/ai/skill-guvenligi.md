---
title: "Bezpečnosť skillov: všetko, čo si musíte prečítať pred inštaláciou"
excerpt: "Skilly môžu spúšťať kód a sťahovať pokyny z externých zdrojov. Príručka o dôveryhodnom zdroji, kontrole SKILL.md a skriptov, minimálnych oprávneniach a tajných kľúčoch."
hook: "Inštalovať skill znamená inštalovať softvér"
fact: "13,4 %"
factLabel: "Podiel skillov s kritickou zraniteľnosťou (Snyk, 2026)"
category: "Umelá inteligencia"
---
To, čo robí skilly takými silnými, ich robí aj rizikovými: skill nenesie len text, ale môže niesť aj spustiteľný kód. Keď agent skill načíta, riadi sa pokynmi v ňom, ako keby boli jeho vlastné, a môže spúšťať jeho skripty. Preto sa odporúčanie z dokumentácie Claude dá zhrnúť jednou vetou: inštaláciu skillu berte ako inštaláciu softvéru.

## Čo hovoria oficiálne zdroje?

Bezpečnostná časť dokumentácie Claude je celkom priama. Odporúča používať skilly len z dôveryhodných zdrojov, teda z tých, ktoré ste napísali sami alebo ktoré ste získali od Anthropic. Ak musíte použiť skill z neznámeho zdroja, žiada "mimoriadnu opatrnosť" a jeho dôkladnú kontrolu od začiatku do konca pred použitím.

Inžiniersky článok Anthropic je v tom istom duchu: pri skilloch z menej dôveryhodných zdrojov odporúča skontrolovať zabalené súbory, najmä závislosti kódu a skripty, a tiež pokyny, ktoré hovoria o pripájaní k externým sieťam. Dokumentácia osobitne zdôrazňuje jedno riziko: skilly, ktoré sťahujú údaje z externých adries, sú nebezpečné, pretože stiahnutý obsah môže obsahovať škodlivé pokyny.

## Čo sa deje v praxi?

Tieto varovania nie sú teoretické. Bezpečnostná firma Snyk v prieskume "ToxicSkills", zverejnenom 5. februára 2026, preskúmala 3 984 skillov zo zdrojov ClawHub a skills.sh. Výsledky:

| Zistenie | Počet |
|---|---|
| Preskúmané skilly | 3 984 |
| S aspoň jedným bezpečnostným problémom | 1 467 (36,82 percenta) |
| S aspoň jedným kritickým problémom | 534 (13,4 percenta) |
| Potvrdený škodlivý obsah | 76 |

Podľa správy zahŕňajú údaje zo skills.sh iba vybraných prvých 100 skillov tejto stránky, zatiaľ čo čísla celého trhu sú pre ClawHub. Medzi pozorovanými typmi útokov sú inštalačné pokyny, ktoré používateľa navádzajú na stiahnutie a spustenie nedôveryhodného softvéru, skryté príkazy (zamaskované pomocou Base64 alebo Unicode), ktoré posielajú prihlasovacie údaje útočníkovi, a pokusy o vypnutie bezpečnostných kontrol a inštaláciu zadných vrátok. V 91 percentách potvrdených škodlivých skillov sa použilo vsunutie pokynov (prompt injection).

> **Vedeli ste?** Podľa Centra pomoci Claude môžu organizácie Enterprise zapnúť skenovanie skillov, ktoré kontroluje nahrané skilly a doplnky na škodlivý obsah. Je to však bezpečnostná sieť, nenahrádza čítanie. To, čo skill robí, najlepšie pochopíte tak, že si pred inštaláciou sami otvoríte a prečítate jeho SKILL.md a skripty.

## Kontrolný zoznam pred inštaláciou

Praktický zoznam, ktorý sme zostavili z odporúčaní v dokumentácii a zistení z praxe:

1. **Overte zdroj.** Komu patrí repozitár? Je to oficiálna firma alebo známy vývojár, alebo kópia, ktorá sa veľmi podobá na známy balík (typosquatting)?
2. **Prečítajte SKILL.md od začiatku do konca.** Vety ako "najprv si stiahni a spusti toto", "vypni bezpečnostné nastavenie" alebo "pošli na túto adresu" sú poplašné signály.
3. **Preskúmajte priečinok scripts/.** Ak sú tam riadky, ktoré nedokážete prečítať, skryté alebo zakódované v Base64, neinštalujte.
4. **Skontrolujte externé odkazy.** Ak skill sťahuje pokyny alebo údaje z webovej adresy, nezabudnite, že sa tento obsah môže kedykoľvek zmeniť.
5. **Inštalujte to, čo potrebujete.** Výber jednotlivých skillov namiesto "nainštalovať všetko" zmenšuje kontext aj útočnú plochu.

## Minimálne oprávnenia a tajné kľúče

Dôležité je aj to, kde skill beží. Podľa dokumentácie Claude nemajú skilly v prostredí Claude API prístup k sieti a za behu nemôžu inštalovať balíky. V claude.ai môže byť prístup k sieti plný, čiastočný alebo vypnutý podľa nastavení používateľa a správcu. V Claude Code majú skilly taký prístup k sieti ako ktorýkoľvek program na vašom počítači. Skill, ktorý nainštalujete do lokálneho agenta, teda beží s vašimi oprávneniami.

Preto je zásada minimálnych oprávnení kľúčová. V Claude Code pole allowed-tools vo frontmatteri skillu umožňuje, aby sa určité nástroje pri volaní skillu používali bez žiadosti o povolenie. Podľa dokumentácie sa toto povolenie pri ďalšej správe obnoví. Ak vidíte v skille napísanom niekým iným široké oprávnenia, je dobrým zvykom neinštalovať ho bez vedomého schválenia.

Pri tajných kľúčoch je pravidlo jednoduché: kľúče API, heslá a prístupové tokeny nikdy nepíšte do SKILL.md ani do priečinka skillu. Keď skill zdieľate alebo ho pošlete do repozitára, odíde všetko, čo je v tom priečinku. Kľúče držte v premenných prostredia alebo v bezpečnom úložisku prihlasovacích údajov nástroja, ktorý používate, a skillu iba povedzte, ako k nim pristupovať.

K októbru 2026 ekosystém skillov rastie veľmi rýchlo a tento rast pripomína bezpečnostné problémy z prvých rokov obchodov s aplikáciami. Dobrá správa je táto: prečítať skill je oveľa ľahšie než prečítať zdrojový kód aplikácie, pretože väčšina z neho je obyčajný text.

Otvárate a čítate skill pred inštaláciou, alebo dôverujete počtu hviezdičiek a sťahovaní?
