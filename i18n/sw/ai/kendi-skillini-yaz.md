---
title: "Andika skill yako mwenyewe: ujuzi wako wa kwanza hatua kwa hatua kwa SKILL.md"
excerpt: "Folda moja, SKILL.md moja na maelezo yaliyoandikwa vizuri. Hatua za kuandika Agent Skill yako mwenyewe, umuhimu wa sehemu ya description na njia ya kuijaribu."
hook: "Maelezo ndiyo yanayoamsha skill"
fact: "1,024"
factLabel: "Idadi ya juu ya herufi kwa sehemu ya description"
category: "Akili Bandia"
---

Huhitaji kuwa mpangaji programu ili kuandika skill. Kwa umbo lake rahisi zaidi, folda na faili moja la maandishi ndani yake vinatosha. Lakini tofauti kati ya skill inayofanya kazi vizuri na skill isiyoamka kamwe mara nyingi imejificha katika sentensi moja: maelezo. Katika makala hii tunaandika skill ndogo lakini halisi kuanzia mwanzo.

## Hatua ya 1: Unda folda na SKILL.md

Kulingana na vipimo vya Agent Skills, skill ni folda yenye angalau faili moja la SKILL.md. Mwanzoni mwa faili kuna taarifa ya awali ya YAML (frontmatter), na sehemu mbili ni za lazima:

- **name:** Herufi 64 kwa upeo. Herufi ndogo, tarakimu na deshi fupi tu. Haiwezi kuanza wala kuishia na deshi, haiwezi kuwa na deshi mbili mfululizo, na lazima ilingane na jina la folda. Nyaraka za Claude pia zinasema maneno "anthropic" na "claude" hayawezi kutumika ndani ya jina.
- **description:** Haiwezi kuwa tupu, herufi 1,024 kwa upeo. Lazima ieleze skill inafanya nini na itumike lini.

Kuna pia sehemu za hiari (license, compatibility, metadata na allowed-tools ya majaribio), lakini skill nyingi hazizihitaji.

## Hatua ya 2: Andika maelezo kwa uangalifu

Kwa nini maelezo ni muhimu kiasi hiki? Kwa sababu wakala, wakati wa kuanza, husoma jina na maelezo tu ya kila skill. Kwa maneno ya agentskills.io, "mzigo wote" wa kuamsha skill uko mabegani mwa maelezo. Maelezo yasipoeleza kazi hiyo inafaa lini, wakala hataifikia skill hiyo.

Mapendekezo ya vyanzo yanaweza kufupishwa hivi:

- Andika **inachofanya** na **inapotumika** zote mbili.
- Nyaraka za Claude zinapendekeza maelezo yaandikwe kwa **nafsi ya tatu** kwa sababu huingizwa kwenye maelekezo ya mfumo ("Hushughulikia faili za Excel", si "Naweza kukusaidia").
- agentskills.io inapendekeza kutaja waziwazi pia hali ambazo mtumiaji hajataja eneo hilo kwa jina lake.
- Yafupishe: sentensi chache, aya fupi kwa upeo. Claude Code hukata maelezo kwenye orodha baada ya herufi 1,536, kwa hivyo hali muhimu zaidi ya matumizi iwe mwanzoni.

## Hatua ya 3: Weka mwili mfupi, tumia hati ya msimbo kwa busara

Tuchukue mfano wa skill inayofuata kanuni ya uandishi ya blogu hii: maandishi yasibaki na deshi ndefu (em dash) wala deshi ya kati (en dash). Muundo wa folda uwe hivi:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

Na faili la SKILL.md liwe fupi kiasi hiki:

```markdown
---
name: tire-denetimi
description: Hupata matumizi ya deshi ndefu (U+2014) na deshi ya kati (U+2013) katika makala za blogu za Kituruki na kupendekeza marekebisho. Hutumika mtumiaji anapoandaa makala ya Markdown kwa ajili ya kuchapishwa, anaposema "kagua deshi", "inafuata kanuni za uandishi?", au hata bila kutaja jina, anapotaka ukaguzi wa mwisho kabla ya kuchapisha.
---

# Ukaguzi wa deshi

1. Endesha amri `python scripts/tire_bul.py <dosya.md>`.
2. Kwa kila mstari kwenye matokeo, pendekeza kubadilisha deshi na nukta, koma, nukta pacha au mabano.
3. Usibadilishe maana. Mwulize mtumiaji kuhusu mistari usiyoiamini.
4. Mwishoni, eleza kwa sentensi moja ni mistari mingapi uliyorekebisha.
```

Nyaraka za Claude zinaona dirisha la muktadha kama "rasilimali ya pamoja" na zinapendekeza kuongeza tu maarifa ambayo modeli haijayajua tayari. Mwili uwe chini ya mistari 500. Marejeo marefu yahamishiwe kwenye faili tofauti, na viungo vya faili hizo vitoke SKILL.md kwa ngazi moja tu.

Kanuni kwa hati za msimbo pia iko wazi: "tatua, usitupe mpira". Yaani hati ishughulikie hali za makosa yenyewe, isiandikwe kwa mtazamo wa "ilipuke tu, Claude atapata njia". Hati inapoendeshwa, ni matokeo yake tu yanayoingia kwenye muktadha, si msimbo wenyewe. Hili linafanya hati kuwa ya kuaminika zaidi kuliko maelekezo kwa kazi zinazorudiwa na zisizovumilia makosa.

> **Je, ulijua?** Katika Claude Code, "amri maalum za mkwaju" za zamani ziliunganishwa na skill. Faili la .claude/commands/deploy.md na faili la .claude/skills/deploy/SKILL.md huunda amri ileile ya /deploy. Ikiwa hutaki skill iamshwe yenyewe, unaweza kuongeza disable-model-invocation: true kwenye frontmatter na kuiita kwa mkono tu.

## Hatua ya 4: Jaribu, kisha jaribu tena

Mwongozo wa mbinu bora wa Claude unapendekeza kuandaa mazingira ya tathmini kabla ya kuandika nyaraka ndefu, na orodha ya ukaguzi kabla ya kuchapisha inajumuisha angalau tathmini tatu pamoja na majaribio tofauti kwenye modeli za Haiku, Sonnet na Opus. Sababu ni rahisi: maelekezo yanayofanya kazi kikamilifu kwenye Opus yanaweza kuhitaji maelezo zaidi kwa Haiku.

Kujaribu kuamka kwa skill, pendekezo la agentskills.io ni mahususi: andaa takriban jumbe 20 za mfano za mtumiaji. Kati ya hizo, 8 hadi 10 ziamshe skill na 8 hadi 10 zisiiamshe. Mifano hasi yenye thamani zaidi ni ile "inayokaribia kukosa", yaani jumbe zinazoshiriki maneno yaleyale lakini zinaomba kazi nyingine. Kwa kuwa tabia ya modeli si ileile kila mara, inapendekezwa kuendesha kila ujumbe mara kadhaa (3 kwa kuanzia) na kuangalia kiwango cha kuamka.

| Maelezo mabaya | Maelezo mazuri |
|---|---|
| "Husaidia na PDF." | Husema inafanya nini na itumike lini |
| Maelezo ya kiufundi pekee | Huelezea nia ya mtumiaji |
| Hufunika kila kitu | Pia hutaja isichofanya |

Usakinishaji pia ni rahisi: katika Claude Code inatosha kuweka folda chini ya ~/.claude/skills/ (ya kibinafsi) au kwenye folda ya .claude/skills/ ya mradi. Claude Code hufuatilia folda hizi na hutambua mabadiliko katika kikao kilekile bila kuhitaji kuanza upya. Katika claude.ai, unaweza kupakia skill kama zip kutoka kwenye mipangilio.

Skill yako ya kwanza ingeendesha kiotomatiki kazi gani inayojirudia?
