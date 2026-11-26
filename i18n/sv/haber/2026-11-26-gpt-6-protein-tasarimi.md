---
title: "OpenAI: GPT-6 designade ett protein på egen hand, 35 av 322 försök höll i labbet"
excerpt: "OpenAI säger att de allmänna GPT-6-modellerna designar proteinformer utan att anropa någon särskild biologimodell; i labbet band 35 av 322 designer till sitt mål."
hook: "Chattmodellen designade ett protein"
fact: "35/322"
factLabel: "designer som band i labbet"
category: "Nyheter"
---
Den 24 november meddelade OpenAI i ett preprint att de allmänna GPT-6-modellerna kan designa proteiner. Det avgörande i påståendet är detta: modellen tar fram tredimensionella proteinformer utan att anropa biologimodeller byggda just för uppgiften, bara genom att tänka i text och köra kod som den skriver själv.

## Vad hände i labbet?

Proteiner består av kedjor av byggstenar som kallas aminosyror; kedjans ordning avgör hur proteinet veckas, och veckningen avgör vilket arbete det utför. Tillsammans med forskningspartnern Onava tillverkade och testade OpenAI på riktigt de små proteiner (minibinders) som GPT-6.2 hade designat.

Resultatet: av 322 designer som prövades mot fem mål band 35, alltså 10,9 procent, till sitt mål. Målen var PD-L1, IL-7Rα, TrkA, VEGF-A och IL-17A; 18 av dem som band kom enbart från målet IL-17A. I enklare uppgifter, som att skriva en ny aminosyrasekvens till en befintlig struktur, var andelen mycket högre: vid omdesign av antikroppars loopar band 128 av 182 fragment, och bland terapeutiska antikroppsfragment 179 av 272.

## Vilken del ska man inte överdriva?

Modellen tog fram kedjans form, men resten av arbetet låg kvar hos de gamla verktygen: sekvenserna föreslogs av SolubleMPNN och ProteinMPNN, och vilka kandidater som gick till labbänken sållades fram av Boltz-2, OpenDDE och ESMFold2. OpenAI skriver själv att det inte är bevisat att företagets modeller kan ta fram ett protein från början till slut på egen hand.

Att utifrån en sekvens förutsäga hela proteinets struktur är modellen fortfarande svag på: medelvärdet för TM-poängen är 0,38 i den interna modellen mot 0,93 i specialmodellen ESMFold2. De starkaste mätresultaten kommer dessutom från en intern modell som inte namnges och som ingen kommer åt, och inget av dem har granskats utanför företaget.

## Varför är det viktigt?

Bindning är första steget på vägen mot ett läkemedel; selektivitet, stabilitet och säkerhetstester kommer efter. Ändå kan det faktum att en allmän modell klarar arbete inom området för modeller som i åratal tränats för en enda uppgift förändra hur labbprogram byggs i fortsättningen. I samma text säger OpenAI också att förmågan kan missbrukas och att företaget bedömt riskerna för biosäkerheten med sitt eget ramverk. Om du är nyfiken på dagarna när datorer föddes som vetenskapens räknemaskin finns [historien om det 30 ton tunga ENIAC](/yazi/eniac-30-ton/) här.
