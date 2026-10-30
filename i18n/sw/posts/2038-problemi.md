---
title: "Tatizo la 2038: kwa nini baadhi ya kompyuta zitarudi 1901?"
excerpt: "Muda wa Unix wa biti 32 utajaa tarehe 19 Januari 2038 saa 03:14:07 UTC, na mifumo ya zamani inaweza kudhani tarehe ni 13 Desemba 1901. Tatizo la 2038 ni nini na linatatuliwaje?"
hook: "Kompyuta zitarudi 1901!"
fact: "03:14:07"
factLabel: "19 Januari 2038, UTC: kikomo cha biti 32"
category: "Kompyuta"
---
Tulipoingia mwaka 2000, dunia ilizungumzia hitilafu ya kompyuta iitwayo "Y2K". Sasa kuna tarehe nyingine inayosubiri: 19 Januari 2038. Siku hiyo, sekunde moja baada ya saa 03:14:07 (UTC), baadhi ya kompyuta za zamani zinaweza kubadilisha kalenda ghafla kuwa 1901. Hii si hadithi ya kisayansi ya kubuni, ni tatizo rahisi la hisabati.

## Kompyuta huhesabuje wakati?

Unix na mifumo mingi iliyotokana nayo hushika wakati si kama saa au kalenda, bali kama namba moja. Namba hiyo ni sekunde zilizopita tangu usiku wa manane wa 1 Januari 1970 (UTC). Hii inaitwa "muda wa Unix".

Tatizo ni kwamba katika mifumo mingi ya zamani namba hii huhifadhiwa kama nambari kamili yenye alama ya biti 32. Thamani kubwa zaidi nambari kamili yenye alama ya biti 32 inayoweza kuwa nayo ni 2,147,483,647, yaani 2 kwa nguvu ya 31 toa 1. Sekunde hizi ni sawa na takriban miaka 68. "Yenye alama" inamaanisha biti moja imetengwa kuonyesha kama namba ni chanya au hasi. Kwa hiyo si biti zote 32 bali 31 tu ndizo zinazotumika kwa ukubwa.

Ukiongeza miaka 68 kwa 1970, unafika 2038. Hesabu inaonyesha hasa 19 Januari 2038, saa 03:14:07 UTC.

## Sekunde moja baadaye kitatokea nini?

Kaunta ikishafikia thamani kubwa zaidi, sekunde moja baadaye huzidi. Fikiria vipima-kilomita vya zamani vya mitambo vya magari: baada ya 999,999 hurudi 000,000. Hapa pia kinatokea kitu kama hicho, lakini kwa sababu ni namba yenye alama, thamani hugeuka kuwa namba hasi kubwa sana.

Mfumo ulioathirika hufasiri namba hii hasi kama sekunde zinazohesabiwa kurudi nyuma kutoka 1970. Matokeo: tarehe inaonekana kuwa 13 Desemba 1901, saa 20:45:52 (UTC). Kompyuta iliyorudi nyuma ghafla kwa miaka 136; vyeti, vipima-muda, kumbukumbu na ulinganisho wa tarehe vinaweza kuanza kufanya kazi vibaya.

> **Je, ulijua?** Tatizo hili limejitokeza hata kwenye baadhi ya programu bila kusubiri 2038. Kulingana na Wikipedia, mwaka 2006 programu ya AOLserver ilivuka kikomo cha 2038 na kuanguka kwa sababu iliweka thamani ya muda wa kusubiri kuwa sekunde bilioni moja mbele. Yaani kila programu inayohesabu "tarehe ya baadaye" inaweza kugonga kikomo hicho tayari leo. Kikomo kama hicho cha biti 32 kilileta tatizo pia kwenye Microsoft Exchange mwaka 2022: nambari ya toleo la sasisho ilisomwa kama alama ya muda na ilipovuka kikomo, kazi za kuchanganua programu hasidi zilisimama.

## Nani yuko hatarini?

Simu na kompyuta nyingi za kisasa unazotumia kila siku sasa hutumia thamani za wakati za biti 64. Hatari halisi iko kwenye mifumo inayofanya kazi miaka mingi bila kusasishwa. Wikipedia inaangazia hasa mifumo ya zamani (legacy) na mifumo iliyopachikwa: vifaa vya kudhibiti viwanda, baadhi ya vifaa vya mtandao, mifumo ya ndani ya magari, yaani mashine zilizosakinishwa mara moja kisha kusahaulika.

Kwa kuwa vifaa kama hivi havisasishwi mara kwa mara, 2038 itakapofika huenda bado vina kipande kinachohesabu wakati kwa biti 32.

| Wakati wenye alama wa biti 32 | Wakati wenye alama wa biti 64 |
|---|---|
| Thamani kubwa zaidi ni 2,147,483,647 | Wigo mkubwa zaidi kwa mbali |
| Kikomo: 19 Januari 2038 | Kikomo: takriban miaka bilioni 292 baadaye |
| Mifumo ya zamani na iliyopachikwa | Mifumo ya kisasa ya uendeshaji |

## Suluhisho: kaunta kubwa zaidi

Ugumu hapa ni wa vitendo zaidi kuliko wa kiufundi. Kubadilisha ukubwa wa namba inayoshika wakati kunaweza kuathiri kila programu, kila muundo wa faili na kila sehemu ya hifadhidata inayoitumia. Kurekebisha mstari mmoja ni rahisi; kutafuta na kusasisha programu zote ndani ya kifaa kimoja kunaweza kuchukua miaka.

Suluhisho ni rahisi kwa wazo: kushika wakati kwa namba yenye alama ya biti 64. Kulingana na Wikipedia, hili linasogeza wakati wa kuzidi hadi takriban miaka bilioni 292 baadaye. Yaani mbali sana kupita umri wa sasa wa ulimwengu.

Mpito huu umeendelea kwa miaka. Kulingana na habari ya Phoronix ya Januari 2020, Linux 5.6 ilikuwa inaandaliwa kuwa toleo kuu la kwanza la kiini linaloweza kuweka msingi wa mifumo ya biti 32 kuendelea kufanya kazi baada ya 2038. Wikipedia inasema Linux 5.6, iliyotoka mwaka 2020, iliongeza usaidizi wa wakati wa biti 64 kwenye miundo ya biti 32. Ili hilo lifanye kazi, programu pia zinahitaji kukusanywa upya kwa wakati wa biti 64.

Pendekezo jingine la suluhisho ni kufanya namba iwe isiyo na alama (unsigned). Lakini hilo linasogeza kikomo hadi 2106 tu na linaharibu matumizi ya tarehe za kabla ya 1970. Ndiyo maana njia kuu inaonekana kuwa kuhamia biti 64.

Y2K haikugeuka kuwa maafa makubwa kwa sababu watu walifanya kazi mapema; unadhani ushujaa huo wa kimya utarudiwa katika miaka iliyobaki hadi 2038?
