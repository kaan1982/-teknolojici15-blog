---
title: "Moonshot släpper vikterna till Kimi K3.1 Pro med 2,8 biljoner parametrar"
excerpt: "Kinesiska Moonshot AI har publicerat modellvikterna till Kimi K3.1 Pro på Hugging Face; företaget säger att det medvetet har skurit ner modellens förmåga till cyberattacker."
hook: "Attackförmågan medvetet nedskuren"
fact: "2,8 biljoner"
factLabel: "Totalt antal parametrar"
category: "Nyheter"
---
Det kinesiska AI-företaget Moonshot AI har publicerat vikterna till sin flaggskeppsmodell Kimi K3.1 Pro på Hugging Face. Enligt en artikel från TechNode den 5 november är modellen därmed inte längre tillgänglig bara via Kimi-apparna och API:t: vem som helst kan nu köra den på sina egna servrar. Företaget presenterade modellen i slutet av oktober och hade meddelat att vikterna skulle släppas senast den 4 november.

## Enorm men selektiv

Enligt TechNode är K3.1 Pro en "mixture of experts"-modell (MoE). Den har totalt cirka 2,8 biljoner parametrar, men bara ungefär 104 miljarder av dem används för varje svar. Kontextfönstret är omkring 1 miljon token, och modellen kan hantera bilder utöver text. Träningen fokuserade på kodning, 3D-design, finansiell analys och långvariga agentuppgifter. Huawei meddelade dessutom stöd för att köra modellen på sina egna Ascend-chip.

Enligt Moonshots egna mätningar, som The Next Web återger, fick modellen 65,7 procent på Terminal-Bench 4.0, som testar kodningsagenter. Det ligger mycket nära Claude Opus 5.5:s 66,4 procent och över GPT-6 Astras 58,2 procent. Företaget säger också att andelen felaktiga påståenden från modellen har sjunkit från 23,4 till 8,3 procent. Siffrorna har ännu inte bekräftats oberoende.

## En förmåga som försvagats med flit

Den mest uppseendeväckande delen av nyheten gäller säkerheten. Moonshot uppgav att företaget tog bort träningsmaterial om cyberattacker före den öppna lanseringen. I företagets interna test löste den icke nedskurna versionen 90,5 procent av uppgifterna som gick ut på att utnyttja verkliga sårbarheter i programvara, medan den publicerade modellen stannade på 81 procent. Experter påminner dock om att öppna vikter inte går att kalla tillbaka när de väl har laddats ner.

## Varför det spelar roll

Skillnaden mellan modeller med öppna vikter och slutna amerikanska modeller krymper hela tiden. För utvecklare innebär det ett billigt och flexibelt alternativ; för tillsynsmyndigheter ett kraftfullt verktyg som blir allt svårare att kontrollera. Hur man använder AI-verktyg på ett säkert sätt förklarar vi i vårt kapitel om [skill-säkerhet](/yapay-zeka/skill-guvenligi/).
