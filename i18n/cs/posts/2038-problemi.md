---
title: "Problém roku 2038: proč se některé počítače vrátí do roku 1901?"
excerpt: "32bitový čas Unixu skončí 19. ledna 2038 v 03:14:07 UTC a starší systémy si mohou myslet, že je 13. prosince 1901. Co je problém roku 2038 a jak se řeší?"
hook: "Počítače se vrátí do roku 1901!"
fact: "03:14:07"
factLabel: "19. ledna 2038, UTC: hranice 32 bitů"
category: "Počítače"
---
Při přechodu do roku 2000 celý svět řešil počítačovou chybu zvanou „Y2K“. Teď je na řadě další datum: 19. ledna 2038. Ve chvíli, kdy hodiny přeskočí o vteřinu za 03:14:07 (UTC), mohou některé starší počítače najednou přepnout kalendář na rok 1901. Není to scénář ze sci-fi, je to prostý matematický problém.

## Jak počítače počítají čas?

Unix a mnoho systémů, které z něj vzešly, neukládá čas jako hodiny ani jako kalendář, ale jako jediné číslo. Je to počet vteřin od půlnoci 1. ledna 1970 (UTC). Říká se tomu „unixový čas“.

Potíž je v tom, že se toto číslo v mnoha starších systémech ukládá jako 32bitové celé číslo se znaménkem. Největší hodnota, kterou 32bitové číslo se znaménkem pojme, je 2 147 483 647, tedy 2 na 31. minus 1. Tolik vteřin odpovídá zhruba 68 letům. „Se znaménkem“ znamená, že jeden bit je vyhrazen na určení, zda je číslo kladné nebo záporné. Na velikost se proto nepoužívá všech 32 bitů, ale jen 31.

Když k roku 1970 přidáme 68 let, dostaneme se do roku 2038. Výpočet přesně vychází na 19. ledna 2038, 03:14:07 UTC.

## Co se stane o vteřinu později?

O vteřinu po dosažení největší hodnoty počítadlo přeteče. Představ si staré mechanické počítadlo kilometrů v autě: po 999 999 se otočí na 000 000. Tady se stane něco podobného, jenže protože jde o číslo se znaménkem, hodnota se překlopí na velmi velké záporné číslo.

Postižený systém si toto záporné číslo vyloží jako vteřiny počítané od roku 1970 zpět. Výsledek: datum se zobrazí jako 13. prosince 1901, 20:45:52 (UTC). Počítač, který se najednou ocitl o 136 let zpátky, může začít chybovat u certifikátů, časovačů, záznamů i porovnávání dat.

> **Věděl jsi?** Tento problém se u některého softwaru projevil dlouho před rokem 2038. Podle Wikipedie v roce 2006 spadl software AOLserver, protože nastavil hodnotu časového limitu o miliardu vteřin dopředu a tím překročil hranici roku 2038. Každý program, který počítá „datum v budoucnosti“, tedy může na tuto hranici narazit už dnes. Podobná 32bitová hranice způsobila v roce 2022 potíže i v Microsoft Exchange: číslo verze jedné aktualizace bylo přečteno jako časové razítko, překročilo hranici a funkce kontroly malwaru přestaly fungovat.

## Kdo je ohrožen?

Velká většina moderních telefonů a počítačů, které denně používáš, už používá 64bitové časové hodnoty. Skutečné riziko je v systémech, které běží dlouhé roky bez aktualizací. Wikipedie zdůrazňuje zejména starší (legacy) a vestavěné systémy: průmyslová řídicí zařízení, některé síťové prvky, systémy ve vozidlech, tedy stroje, které se jednou nainstalují a pak se na ně zapomene.

Protože se taková zařízení často neaktualizují, může v nich v roce 2038 stále zůstávat součást, která počítá čas na 32 bitech.

| 32bitový čas se znaménkem | 64bitový čas se znaménkem |
|---|---|
| Největší hodnota 2 147 483 647 | Mnohem větší rozsah |
| Hranice: 19. ledna 2038 | Hranice: asi za 292 miliard let |
| Starší a vestavěné systémy | Moderní operační systémy |

## Řešení: větší počítadlo

Obtíž je tu spíš praktická než technická. Změna velikosti čísla, které drží čas, se může dotknout každého programu, každého formátu souboru a každého pole v databázi, které ho používá. Opravit jeden řádek je snadné, ale najít a aktualizovat veškerý software uvnitř zařízení může trvat roky.

Myšlenka řešení je jednoduchá: ukládat čas jako 64bitové číslo se znaménkem. Podle Wikipedie to posune okamžik přetečení zhruba o 292 miliard let, tedy daleko za současné stáří vesmíru.

Tento přechod probíhá už roky. Podle zprávy Phoronixu z ledna 2020 se Linux 5.6 připravoval jako první hlavní verze jádra, která může položit základ pro to, aby 32bitové systémy fungovaly i po roce 2038. Wikipedie uvádí, že Linux 5.6, vydaný v roce 2020, přidal na 32bitových architekturách podporu 64bitového času. Aby to fungovalo, musí být s 64bitovým časem znovu přeloženy i aplikace.

Další navrhované řešení je udělat číslo bez znaménka (unsigned). To ale hranici posune jen do roku 2106 a rozbije práci s daty před rokem 1970. Hlavní cesta se proto vidí v přechodu na 64 bitů.

Y2K se nezměnilo v katastrofu, protože lidé na něm včas pracovali. Myslíš, že se podobné tiché hrdinství zopakuje i v letech zbývajících do 2038?
