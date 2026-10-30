---
title: "Skilly pre dokumenty: naučiť agenta Word, Excel, PowerPoint a PDF"
excerpt: "Čo robia skilly docx, xlsx, pptx a pdf od Anthropic a kde fungujú? Oficiálne a pomocné skilly, ktoré sa na tvorbu dokumentov skutočne hodia."
hook: "Správa, tabuľka, prezentácia: všetko je skill"
fact: "4 DOKUMENTY"
factLabel: "Počet hotových skillov pre dokumenty"
category: "Umelá inteligencia"
---
Povedať umelej inteligencii "priprav mi správu" je ľahké. Ťažké je, aby správa prišla ako Word alebo Excel, ktorý sa naozaj otvorí, nemá pokazené formátovanie a vzorce fungujú. Prvá a azda najpoužívanejšia kategória skillov je presne táto: kancelárske dokumenty. V tomto článku sa venujeme len skillom, ktorých existenciu sme overili.

## Štyri základné piliere: docx, xlsx, pptx, pdf

Podľa dokumentácie Claude má Anthropic štyri hotové (pre-built) skilly pre dokumenty. Fungujú na pozadí funkcie Claude na vytváranie súborov a Anthropic zverejňuje ich zdrojový kód v repozitári anthropics/skills na GitHube.

| Skill | Čo robí? (podľa oficiálnych opisov) |
|---|---|
| docx | Vytvára, číta a upravuje dokumenty Word. Vrátane formátovania a šablón |
| xlsx | Otvára a upravuje tabuľky, pridáva vzorce a grafy, čistí neusporiadané údaje |
| pptx | Vytvára prezentácie, upravuje snímky, číta a rozkladá obsah .pptx |
| pdf | Extrahuje text a tabuľky, spája a delí PDF, vypĺňa formuláre, pridáva vodoznak |

Opisy v repozitári sú napísané dosť "dôrazne". Napríklad opis skillu pptx hovorí, že sa má použiť vždy, keď je súbor .pptx "akýmkoľvek spôsobom" súčasťou vstupu alebo výstupu. Je to oficiálny príklad pravidla "opis spúšťa", o ktorom sme písali v predchádzajúcom článku.

## Kde ich môžete používať?

Podľa dokumentácie Claude sú tieto štyri skilly k októbru 2026 aktívne samy pri vytváraní dokumentov v claude.ai a dajú sa volať aj v Claude API ako hotové skilly. V Claude Code hotové skilly pre dokumenty vstavané nie sú. Repozitár anthropics/skills sa však dá pridať ako trh s doplnkami pre Claude Code a dá sa nainštalovať balík document-skills. Podľa pokynov v repozitári sa najprv pridá trh príkazom /plugin marketplace add anthropics/skills a potom sa nainštaluje document-skills@anthropic-agent-skills.

V licencii je rozdiel. Mnohé skilly v repozitári majú open source licenciu Apache 2.0. Štyri skilly pre dokumenty sú však zdieľané ako "nie open source, ale so sprístupneným zdrojom" (source-available). Kód si teda môžete prezrieť a učiť sa z neho, ale pred voľným redistribuovaním vo vlastnom produkte si musíte prečítať súbor s licenciou.

> **Vedeli ste?** Skill pdf je učebnicovým príkladom postupného načítavania. Podľa inžinierskeho článku Anthropic sa pokyny na vypĺňanie formulárov vybrali z hlavného SKILL.md a presunuli do samostatného súboru forms.md. Claude ho číta, až keď naozaj vypĺňa formulár. V repozitári je dnes v priečinku pdf forms.md, reference.md aj priečinok scripts.

## Pomocníci popri dokumente

Tvorba dokumentov sa nekončí formátom súboru. V repozitári anthropics/skills sú ďalšie oficiálne príklady zamerané na obsah:

- **doc-coauthoring:** Ponúka postupný pracovný tok na spoločné písanie štruktúrovaných textov, ako sú technické špecifikácie, návrhy či rozhodovacie dokumenty. Prechádza fázami odovzdania kontextu, iteratívnych opráv a overenia.
- **internal-comms:** Zhromažďuje zdroje, ktoré pomáhajú písať interné komunikačné texty, ako sú správy o stave, aktualizácie pre vedenie, firemné spravodaje a časté otázky, vo formátoch, ktoré firma uprednostňuje. V priečinku sú aj ukážkové texty.
- **brand-guidelines:** Aplikuje na výstup oficiálne farby a typografiu značky Anthropic. Jeho skutočná hodnota je v tom, že ukazuje, ako si môžete vybudovať podobný skill pre vlastnú značku.
- **theme-factory:** Obsahuje 10 hotových tém farieb a písma, ktoré sa dajú použiť na snímky, dokumenty, správy alebo stránky HTML, a na požiadanie okamžite vytvorí aj novú tému.

Centrum pomoci zmieňuje aj skilly, ktoré pripravili partneri ako Notion, Figma a Atlassian, aby fungovali spolu s ich vlastnými konektormi MCP. Hodia sa pri práci s nástrojmi, v ktorých sa dokumenty vytvárajú (napr. stránky Notion).

## Ako sa používajú v praxi?

Najefektívnejšie je spojiť hotové skilly pre dokumenty s vlastným malým skillom. Napríklad skill xlsx vie, ako správne vytvoriť Excel, ale nevie, aké stĺpce má mať mesačná tabuľka predaja vo vašej firme. Ak napíšete krátky skill, ktorý to opisuje, oba skilly spolu vytvoria súbor so správnym formátom, ktorý zodpovedá aj vášmu štandardu.

Treba si pamätať dve poznámky. Po prvé, repozitár anthropics/skills výslovne uvádza, že tieto skilly sú "na demonštračné a vzdelávacie účely" a že skutočné správanie Claude sa môže od implementácií tu líšiť. Po druhé, skilly pre dokumenty potrebujú prostredie na spúšťanie kódu. Podľa Centra pomoci musí byť na fungovanie skillov zapnutá funkcia spúšťania kódu.

V ďalšom článku prejdeme na stranu obrazovky: skilly, ktoré vytvárajú dizajn, používateľské rozhrania a webové výstupy.

Pri príprave ktorého typu dokumentu strácate najviac času vy: tabuľky, prezentácie, alebo správy?
