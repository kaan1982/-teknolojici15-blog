---
title: "Apollo 11 arvuti: mida \"4 KB mälu\" tegelikult tähendab?"
excerpt: "Arvutil, mis Apollo 11 Kuule maandas, oli umbes 4 KB RAM-i. Programmid asusid aga umbes 72 KB suuruses nöörimisega kootud ROM-is."
hook: "Kuule maandusid nad 4 KB RAM-iga"
fact: "4 KB"
factLabel: "AGC kustutatav mälu (RAM)"
category: "Arvuti"
---
Oled kindlasti kuulnud lauset "Kuule lennanud arvuti mälu oli väiksem kui üks foto". Ka meie ütlesime videos "4 KB". See arv on õige, kuid üksi jääb poolikuks. Sest Apollo juhtimisarvutil (Apollo Guidance Computer, lühidalt AGC) oli tegelikult kaks eraldi mälu ja "4 KB" kirjeldab neist ainult väiksemat.

Avame koos selle kuulsa arvu sisu.

## Mida "4 KB" täpselt kirjeldab?

AGC töömälu, ehk kustutatav mälu, mida me praegu nimetaksime RAM-iks, koosnes 2048 "sõnast". Iga sõna oli 16 bitti pikk: 15 bitti andmeid ja 1 bitt pariteeti veakontrolliks. Kui lugeda sõna kaheks baidiks, on 2048 sõna umbes 4 KB. Ehk "4 KB" on arvuti lennu ajal arvutamiseks kasutatava mustandipaberi suurus.

Selles mälus programme ei asunud. Seal hoiti hetkeasukohta, kiirust, loendureid ja ülesannete vahel edastatavaid vahetulemusi. Mälu oli tehtud väikestest magnetsüdamiku (core) rõngastest ja säilitas oma sisu ka siis, kui vool kadus.

Programmid asusid aga hoopis teises kohas: 36 864 sõna suuruses püsimälus, ehk ROM-is. Sama arvutuse järgi on see umbes 72 KB. Lühidalt, õigem lause on: Apollo 11 maandus Kuule umbes 4 KB RAM-i ja umbes 72 KB ROM-iga.

## Programmid olid kootud nööri

AGC ROM oli "core rope" (südamikunöör) mälu ja seda kooti sõna otseses mõttes käsitsi. Kui traat läks läbi magnetsüdamiku, oli see bitt 1, kui möödus südamikust, oli 0. Ehk tarkvara muudeti riistvaraks kudumise teel nagu riiet.

Seda tööd tegid Massachusettsi Walthamis Raytheoni töötajad. Ken Shirriffi üksikasjaliku uurimuse järgi oli oluline osa palgatutest õmblusoskuse tõttu kohalikust tekstiilitööstusest tulnud naised. Ühe mooduli kudumine võttis umbes 8 nädalat ja läks maksma 15 000 dollarit. Iga moodul mahutas 6 tuhat sõna ja kuus moodulit moodustasid kokku 36 864 sõna.

Selle kõrvalmõju oli oluline: tarkvara tuli lennust kuid ette külmutada. Viimase hetke paika ei olnud olemas, sest vea parandamine tähendas uuesti kudumist.

> **Kas teadsid?** Apollo 11-l ei olnud üks, vaid kaks AGC-d: üks Käsumoodulis, teine Kuumoodulis. Kumbki kaalus umbes 32 kg ja töötas 2,048 MHz kristallkella peal.

## Alarm minutid enne maandumist

20. juulil 1969 maandumise ajal andis Kuumooduli arvuti ekraanile kõigepealt alarmi 1202 ja seejärel 1201. Mõlemad tähendasid "täitja ületäitumist": arvutile oli antud rohkem tööd, kui ta jaksas kanda. Wikipedia üksikasjaliku kirjelduse järgi oli põhjus see, et ooterežiimi jäetud kohtumisradari valesignaalid hoidsid protsessori hõivatud. Probleem ei olnud ei programmeerimisviga, pilooditeo viga ega riistvara rike. See tulenes põhimõtteliselt kahe süsteemi vahelise liidese dokumendi veast.

Tegelikult huvitav on see, mida tarkvara sellises olukorras tegi. AGC töötas prioriteedipõhise ajastajaga. Ületäituse korral taaskäivitas ta end kiiresti, loobus madala prioriteediga töödest ja jätkas kriitilisi ülesandeid, nagu maandumise juhtimine. Ehk see kuulus väike mälu piisas, sest seda hallati nutikalt.

Asja raskendas veel üks detail. Buzz Aldrini maandumise ajal arvutisse sisestatud käsk 1668 pani ka niigi kimpus protsessorile lisakoormuse ja vallandas veel ühe 1202 alarmi. Tarkvara pääses sellestki samamoodi ja Kotkas (Eagle) maandus Kuu pinnale.

Tarkvara arendati MIT Instrumentatsioonilaboris. Käsumooduli tarkvara (COLOSSUS) ja Kuumooduli tarkvara (LUMINARY) tegid eri meeskonnad. Üksikasjade teostamine oli aga Margaret Hamiltoni juhitud meeskonna käes.

## Siis / praegu

| Apollo juhtimisarvuti (1969) | Tänapäeva mobiiltelefon |
|---|---|
| Umbes 4 KB kustutatavat mälu (RAM) | Gigabaitides RAM-i |
| Umbes 72 KB käsitsi kootud ROM | Sadu gigabaite salvestusruumi |
| Tarkvarauuenduseks kuid kudumist | Öösel iseenesest alla tulevad uuendused |
| Umbes 32 kg | Mahub peopessa |

## Arvu tegelik õppetund

Arvu "4 KB" räägitakse sageli stiilis "vaata, kui primitiivne". Loo tuum on aga vastupidine: piiratud mälu sundis insenere iga biti eest aru andma. Seetõttu sündis tarkvara, mis seab ülesanded prioriteetidesse ja taastub ülekoormuse korral.

Täna on meie taskuseadmetel võrreldamatult rohkem mälu, kuid enamik rakendusi ei ole nii hoolikalt kirjutatud. Isegi ühe sõnumirakenduse üksainus uuendus võib olla mitu korda suurem kui kogu Apollo tarkvara.

Kas sinu arvates kasvatavad piirangud paremaid insenere või külluslikkus?
