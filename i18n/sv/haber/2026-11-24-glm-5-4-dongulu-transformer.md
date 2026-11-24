---
title: "Kinesiska Zhipu släpper GLM-5.4, en modell som kör sina lager två gånger"
excerpt: "Zhipus GLM-5.4 för över Loop Transformer-arkitekturen, som kör 28 lager i två varv, till en stor modell; den har också en kontext på 1 miljon tokens och bildinmatning."
hook: "Modellen som går igenom samma lager två gånger"
fact: "750 miljarder"
factLabel: "parametrar i grundmodellen"
category: "Nyheter"
---
Det kinesiska AI-bolaget Zhipu (Z.ai) gjorde den 23 november modellen GLM-5.4 tillgänglig. Den verkliga nyheten ligger i arkitekturen: det är bolagets första flaggskepp av typen "Loop Transformer".

## Vad gör slingan?

I en klassisk språkmodell körs varje lager en gång. GLM-5.4 kör i stället de 28 lagren i grundmodellen GLM-5, som har omkring 750 miljarder parametrar, i två varv; det andra varvet bearbetar och förbättrar de mellanresultat som det första varvet tagit fram. På så sätt kan modellen tänka "djupare" utan att nya vikter läggs till. Zhipu säger att man därigenom når en intelligensnivå jämförbar med modeller på 2 till 3 biljoner parametrar. Enligt bolaget klarar modellen dessutom samma uppgifter i tester som GPQA-Diamond och MMLU-Pro med svar som är 10 till 14 procent kortare.

Modellen erbjuder ett kontextfönster på 1 miljon tokens och kan nu även läsa bilder: utvecklare kan lämna en skärmbild av ett trasigt gränssnitt tillsammans med koden.

## Var kan den användas?

GLM-5.4 finns tills vidare i abonnemanget GLM Coding Plan, i kodverktyget ZCode och på Z.ai:s chattsajt. Enligt WinBuzzer har abonnenternas kvot ökat med 50 procent och kostnaden för 10 000 inmatningstokens har sjunkit från 6,9 till 4,6 krediter. Det allmänna API:et och öppna vikter kommer först efter en säkerhetsutvärdering.

Oberoende mätningar är mer försiktiga: i kodtestet KingBench 4, som WinBuzzer refererar till, hamnade modellen på sjunde plats av 19 modeller med 55,3 procent av poängen. Bolaget har ännu inte publicerat några detaljerade testresultat.

## Varför är det viktigt?

Att låta lagren gå i slinga framstår som ett nytt sätt att göra modeller starkare utan att göra dem större, och ett av de första bolagen att prova det i stor skala är kinesiskt. För att förstå hur stor en kontext på 1 miljon tokens är räcker det att titta på [den första disketten på 80 KB](/yazi/ilk-disket-ibm-1971-80-kb/).
