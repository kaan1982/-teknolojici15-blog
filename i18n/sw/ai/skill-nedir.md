---
title: "Skill ni nini? \"Folda za ujuzi\" mpya za mawakala wa akili bandia"
excerpt: "Agent Skill ni folda inayoundwa na faili la SKILL.md na hati za msimbo za hiari. Wakala huipakia tu inapohitajika. Inatofautianaje na prompt, MCP na programu-jalizi?"
hook: "Mfundishe wakala ujuzi mpya kwa folda moja"
fact: "NGAZI 3"
factLabel: "Upakiaji wa hatua kwa hatua wa maudhui ya skill"
category: "Akili Bandia"
---

Wasaidizi wa akili bandia wanajua kila kitu kidogo, lakini hawajui kiolezo cha ripoti cha kampuni yako, rangi za chapa yako, wala mbinu za kushughulikia aina fulani ya faili ipasavyo. Badala ya kueleza haya yote kwa urefu katika kila mazungumzo, je, ungeweza kuyapakia mara moja na kumwambia wakala "yatumie inapobidi"? Hilo ndilo wazo hasa la "skill" (ujuzi).

## Kwa ufupi: folda na SKILL.md

Kwa ufafanuzi wa Anthropic, Agent Skills ni vifurushi vya kimoduli vinavyopanua uwezo wa Claude. Kila skill huhifadhi pamoja maelekezo, metadata na rasilimali za hiari (hati za msimbo, violezo), na Claude huzitumia zenyewe pale zinapohusika. Blogu ya uhandisi ya Anthropic inalisema hili kwa urahisi zaidi: skill ni "folda zilizopangwa za maelekezo, hati za msimbo na rasilimali" ambazo wakala huzipakia anapozihitaji ili kuwa bora zaidi katika kazi fulani.

Kitaalamu, skill ni folda yenye angalau faili moja liitwalo SKILL.md. Mwanzoni mwa faili hili kuna sehemu mbili za lazima kwa muundo wa YAML: name (jina) na description (maelezo). Chini yake kuna maelekezo yaliyoandikwa kwa Markdown ya kawaida. Ukitaka, unaweza kuongeza kwenye folda hiyo folda ndogo kama scripts/ (msimbo unaoweza kuendeshwa), references/ (nyaraka za ziada) na assets/ (violezo, picha, data).

Anthropic inafananisha muundo huu na mwongozo wa mafunzo unaomwandalia mfanyakazi mpya. Unauweka mezani, na mfanyakazi huufungua na kuangalia anapouhitaji.

## Siri yake: si kila kitu kinapakiwa mara moja

Kinachotofautisha skill na prompt ndefu ya kawaida ni muundo unaoitwa "ufunuo wa hatua kwa hatua" (progressive disclosure). Kulingana na nyaraka za Claude, maudhui hupakiwa katika ngazi tatu:

| Ngazi | Hupakiwa lini? |
|---|---|
| 1. Metadata (jina + maelezo) | Daima, wakati wa kuanza (takriban tokeni 100 kwa kila skill) |
| 2. Mwili wa SKILL.md | Skill inapoamshwa (inapendekezwa chini ya tokeni 5,000) |
| 3. Faili za ziada na hati za msimbo | Tu pale zinapohitajika; ni matokeo ya hati pekee yanayoingia kwenye muktadha |

Kwa njia hii unaweza kupakia skill kadhaa kwa wakala bila zote kujaza dirisha la muktadha. Hadi skill iamshwe, ni jina na maelezo yake tu vinavyobaki "mezani". Katika mfano wa nyaraka, skill ya PDF huhifadhi maelekezo ya kujaza fomu kwenye faili tofauti liitwalo forms.md, na Claude hulisoma faili hilo tu anapojaza fomu kweli.

> **Je, ulijua?** Anthropic ilitangaza Agent Skills tarehe 16 Oktoba 2025, na tarehe 18 Desemba 2025 ikachapisha muundo huo kama kiwango huria kwenye agentskills.io. Ndiyo maana kufikia Oktoba 2026 unaona muundo uleule wa SKILL.md kwenye nyaraka za zana nyingine kama GitHub Copilot na OpenAI Codex. Nyaraka za Copilot zinakuelekeza moja kwa moja kwenye vipimo vya agentskills.io ili kukagua skill.

## Prompt, MCP, programu-jalizi: tofauti ni nini?

Dhana hizi huchanganywa mara kwa mara kwa sababu zote zinahusu "kumfanya wakala kuwa bora zaidi". Tofauti kama inavyofupishwa na Kituo cha Msaada cha Claude ni hii:

- **Prompt au maelekezo maalum:** Mwelekeo wa jumla unaotumika katika mazungumzo moja au mazungumzo yako yote. Skill, kwa upande wake, ni mahususi kwa kazi na huingia kazini tu inapohusika.
- **Miradi:** Maarifa ya msingi yasiyobadilika yaliyopakiwa daima katika mazungumzo ya ndani ya mradi. Skill ni utaratibu unaofunguliwa inapobidi.
- **Viunganishi vya MCP (Model Context Protocol):** Vinaunganisha Claude na huduma za nje na vyanzo vya data. Yaani vinatoa "ufikiaji". Skill ni "maarifa ya njia" yanayoeleza jinsi ya kutumia ufikiaji huo. Kituo cha msaada kinasema mara nyingi hutumiwa pamoja.
- **Programu-jalizi (plugin):** Katika Claude Code na Cowork, programu-jalizi ni kifurushi cha kusambaza vipande kadhaa pamoja (skill, viunganishi, amri, mawakala wasaidizi). Nyaraka za OpenAI pia zinatofautisha vivyo hivyo: skill ni muundo wa uandishi, programu-jalizi ni namna ya usambazaji.

Kwa ufupi, MCP humpa wakala mkono, skill huufundisha mkono huo ujuzi, na programu-jalizi huvikabidhi vyote ndani ya boksi moja.

## Inafanya kazi wapi?

Kufikia Oktoba 2026, kulingana na nyaraka za Claude, skill zinaweza kutumika katika programu za Claude (claude.ai), katika Claude Code, na katika Claude API pamoja na zana ya kuendesha msimbo. Kituo cha msaada kinasema skill zinapatikana katika mipango ya Free, Pro, Max, Team na Enterprise, na zinahitaji kipengele cha kuendesha msimbo kiwe kimewashwa.

Maelezo muhimu: skill maalum hazisawazishwi kati ya majukwaa. Skill uliyopakia kwenye claude.ai ni ya akaunti yako tu. Skill iliyopakiwa kwenye API inashirikiwa na eneo lote la kazi. Katika Claude Code, huhifadhiwa kama ya kibinafsi (~/.claude/skills/) au ndani ya folda ya mradi (.claude/skills/).

Pia kuna upande wa usalama. Kwa kuwa skill zinaweza kuendesha msimbo, nyaraka zinapendekeza kuzichukulia "kama kusakinisha programu" na kuzitumia kutoka vyanzo vinavyoaminika tu. Tunalishughulikia hili kando katika makala ya mwisho ya mfululizo.

Katika makala zinazofuata za sehemu hii tutaandika skill yako hatua kwa hatua, na kuchunguza kategoria kwa kategoria skill zilizopo kweli na zenye manufaa.

Ni kazi gani unayomwelezea akili bandia tena na tena kila siku, ukisema "laiti ningeifundisha mara moja tu"?
