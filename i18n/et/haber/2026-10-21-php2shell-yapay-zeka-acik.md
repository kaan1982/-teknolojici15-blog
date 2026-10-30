---
title: "Tehisintellekt leidis kriitilise augu PHP-s, millele toetub 70% veebisaitidest"
excerpt: "Kaks PHP2Shelli nime kandvat viga lubavad serveris koodi käivitada ilma sisselogimata. Avastamisel kasutati selliseid mudeleid nagu GPT-5.6 Sol ja Gemini 4 Argon."
hook: "PHP hiigelaugu leidis tehisintellekt"
fact: "CVSS 9,2"
factLabel: "PHP2Shelli aukude kõrgeim hinne"
category: "Tehisintellekt"
---
PHP arendajad avaldasid 21. oktoobril kiirparandused kahe kriitilise turvaaugu jaoks keele tuumamootoris. Nimega "PHP2Shell" tuntud augud, mille numbrid on CVE-2026-109618 ja CVE-2026-109619, leiti tehisintellekti tööriistade abiga.

## Mis juhtus?

Fortune'i järgi leidis tehisintellekti turvatestimise firma Calif ahela esimese osa 1. augustil GPT-5.6 Soliga; Wiz tuvastas esimese augu iseseisvalt 19. augustil ja teatas sellest PHP turvameeskonnale 24. augustil. Avastamisel kasutati Wizi enda tööriista Wiz Atlas ning OpenAI mudelit GPT-5.6 Sol ja Google'i mudelit Gemini 4 Argon.

Augud võimaldavad ründajal käivitada serveris kaugkoodi ilma sisselogimata ja lekitada mälus olevaid andmeid. Wizi järgi on mõjutatud peaaegu iga viimase kümne aasta jooksul ilmunud PHP versioon, tagasi kuni 5.4-ni. Kõrgeim tõsiduse hinne CVSS skaalal on 9,2. PHP töötab umbes 70 protsendi maailma veebisaitide taga; üksnes WordPress haldab umbkaudu 40 protsenti saitidest. Fortune'i uuendatud uudise järgi hakati auke pärast paiga ilmumist laialdaselt ära kasutama.

## Miks see oluline on?

See on üks konkreetsemaid näiteid sellest, et tehisintellekt ei ole turvauuringus enam ainult abiline, vaid võib olla avastaja. Kuid samad tööriistad on ka ründajate käes ja aeg paiga ilmumise ja ärakasutamise alguse vahel lüheneb. Iga PHP-d kasutava saidi omanik peab oma serveri kohe uuendama. Laiemas pildis võivad interneti aastakümneid töötanud vanas koodis peituvad vead ilmsiks tulla palju kiiremini. Võrgus omapäi ringleva esimese programmi loo jutustasime [Creeperi loos](/yazi/creeper-ilk-virus-zararsizdi/).
