---
title: "Bezpečnost skillů: vše, co si musíš přečíst před instalací"
excerpt: "Skilly mohou spouštět kód a stahovat pokyny z externích zdrojů. Průvodce důvěryhodnými zdroji, kontrolou SKILL.md a skriptů, nejmenšími oprávněními a tajnými klíči."
hook: "Instalovat skill je instalovat software"
fact: "13,4 %"
factLabel: "Podíl skillů s kritickou zranitelností (Snyk, 2026)"
category: "Umělá inteligence"
---

To, co dělá skilly tak silnými, je zároveň to, co je dělá rizikovými: skill nemusí nést jen text, ale i spustitelný kód. Když agent skill načte, řídí se jeho pokyny jako vlastními a může spouštět jeho skripty. Proto lze doporučení dokumentace Claude shrnout jednou větou: instalaci skillu ber jako instalaci softwaru.

## Co říkají oficiální zdroje?

Bezpečnostní část dokumentace Claude je velmi přímá. Doporučuje používat skilly jen z důvěryhodných zdrojů, tedy těch, které sis napsal sám nebo které pocházejí od Anthropicu. Pokud musíš použít skill z neznámého zdroje, chce po tobě „mimořádnou opatrnost“ a důkladnou kontrolu před použitím.

Inženýrský článek Anthropicu je ve stejném duchu: u skillů z méně důvěryhodných zdrojů doporučuje prověřit zabalené soubory, zejména závislosti kódu a skripty, a také zkontrolovat pokyny, které říkají, aby se připojil k externím sítím. Dokumentace zdůrazňuje i jedno riziko: skilly, které stahují data z externích adres, jsou nebezpečné, protože stažený obsah může obsahovat škodlivé pokyny.

## Co se děje v praxi?

Tato varování nejsou teoretická. Bezpečnostní firma Snyk prověřila ve svém výzkumu „ToxicSkills“ zveřejněném 5. února 2026 3 984 skillů z ClawHub a skills.sh. Výsledky:

| Zjištění | Počet |
|---|---|
| Prověřené skilly | 3 984 |
| S alespoň jedním bezpečnostním problémem | 1 467 (36,82 procenta) |
| S alespoň jedním kritickým problémem | 534 (13,4 procenta) |
| Ověřený škodlivý obsah | 76 |

Podle zprávy zahrnují data ze skills.sh jen vybraných prvních 100 skillů tohoto webu, kdežto čísla celého trhu platí pro ClawHub. Mezi pozorovanými typy útoků jsou instalační pokyny, které uživatele vedou ke stažení a spuštění nedůvěryhodného softwaru, skryté (maskované pomocí Base64 nebo Unicode) příkazy odesílající přihlašovací údaje útočníkovi a pokusy o vypnutí bezpečnostních kontrol a instalaci zadních vrátek. U 91 procent ověřených škodlivých skillů byla použita injekce promptu (prompt injection).

> **Věděl jsi?** Podle Centra nápovědy Claude mohou organizace Enterprise zapnout skenování skillů, které kontroluje nahrané skilly a pluginy na škodlivý obsah. Je to ale záchranná síť, nenahrazuje čtení. Co skill dělá, nejlépe pochopíš tak, že si před instalací sám otevřeš a přečteš jeho SKILL.md a skripty.

## Kontrolní seznam před instalací

Praktický seznam odvozený z doporučení v dokumentaci a ze zjištění v praxi:

1. **Ověř zdroj.** Čí je repozitář? Je to oficiální firma nebo známý vývojář, nebo kopie velmi podobná názvu známého balíčku (typosquatting)?
2. **Přečti SKILL.md od začátku do konce.** Fráze jako „nejdřív si stáhni a spusť toto“, „vypni bezpečnostní nastavení“ nebo „pošli na tuto adresu“ jsou poplachové signály.
3. **Prohlédni složku scripts/.** Pokud jsou tam řádky, které nedokážeš přečíst, jsou skryté nebo zakódované v Base64, neinstaluj.
4. **Zkontroluj externí odkazy.** Pokud skill stahuje pokyny nebo data z webové adresy, nezapomeň, že se tento obsah může kdykoli změnit.
5. **Instaluj, co potřebuješ.** Výběr jednotlivých skillů místo „nainstaluj vše“ zmenšuje kontext i plochu útoku.

## Nejmenší oprávnění a tajné klíče

Důležité je i to, kde skill běží. Podle dokumentace Claude nemají skilly v prostředí Claude API přístup k síti a za běhu nemohou instalovat balíčky. Na claude.ai může být přístup k síti plný, částečný nebo vypnutý podle nastavení uživatele a správce. V Claude Code mají skilly přístup k síti jako kterýkoli program na tvém počítači. Skill, který nainstaluješ do lokálního agenta, tedy běží s tvými oprávněními.

Proto je zásadní princip nejmenších oprávnění. V Claude Code pole allowed-tools ve frontmatteru skillu umožňuje, aby se určité nástroje při volání tohoto skillu používaly bez dotazu na povolení. Podle dokumentace se toto oprávnění s další zprávou resetuje. Přesto je dobrým zvykem neinstalovat skill napsaný někým jiným, v němž vidíš široká oprávnění, bez vědomého schválení.

Pro tajné klíče je pravidlo jednoduché: klíče API, hesla a přístupové tokeny nikdy nepiš do SKILL.md ani do složky skillu. Když skill sdílíš nebo odešleš do repozitáře, odchází s ním vše, co je ve složce. Klíče drž v proměnných prostředí nebo v bezpečném úložišti přihlašovacích údajů nástroje, který používáš, a skillu jen popiš, jak se k nim dostat.

K říjnu 2026 ekosystém skillů roste velmi rychle a tento růst připomíná bezpečnostní problémy z prvních let obchodů s aplikacemi. Dobrá zpráva: přečíst skill je mnohem snazší než číst zdrojový kód aplikace, protože je většinou z obyčejného textu.

Otevíráš a čteš skill před instalací, nebo důvěřuješ počtu hvězdiček a stažení?
