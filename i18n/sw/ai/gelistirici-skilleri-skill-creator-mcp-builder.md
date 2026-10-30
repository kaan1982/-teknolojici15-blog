---
title: "Skill kwa wasanidi programu: skill-creator, mcp-builder na zaidi"
excerpt: "Skill inayoandika skill, skill inayojenga seva za MCP, na vifurushi vya skill vinavyoleta nidhamu ya majaribio na utatuzi wa hitilafu. Uteuzi uliothibitishwa kwa wasanidi."
hook: "Kuna skill inayoandika skill"
fact: "MASWALI 20"
factLabel: "Mifano inayopendekezwa kwa jaribio la kuamka"
category: "Akili Bandia"
---

Kwa anayeunda programu, skill zinavutia kwa sababu mbili. Ya kwanza, kuna skill za "kuzalisha" zinazokusaidia kuandika skill zako mwenyewe kwa haraka zaidi na kwa njia inayopimika. Ya pili, kuna vifurushi vinavyompa wakala nidhamu ya kihandisi (majaribio, mipango, utatuzi wa hitilafu). Katika makala hii tunazungumzia vyote viwili, kwa mifano ambayo tumethibitisha tu kuwepo kwake.

## skill-creator: skill inayoandika skill

skill-creator, iliyoko kwenye hazina rasmi ya Anthropic ya anthropics/skills, imeundwa kwa ajili ya kuunda skill mpya, kuhariri na kuboresha skill zilizopo, na kupima utendaji wake. Kulingana na maelezo yake, pia inashughulikia kuendesha tathmini (eval), kulinganisha matokeo kwa uchambuzi wa tofauti, na kuboresha maelezo ya skill ili iamke vizuri zaidi.

Mtiririko wa kazi umeelezwa kwa njia ya kibinadamu kabisa: amua unachotaka, andika rasimu, andaa jumbe chache za majaribio, endesha Claude mwenye skill kwa jumbe hizo, tathmini matokeo pamoja, andika upya, rudia. Kwenye folda kuna hati tofauti za kuendesha tathmini, kutoa ripoti ya ulinganisho na kuboresha maelezo, pamoja na "eval-viewer" ya kukagua matokeo kwa macho.

Mwongozo wa agentskills.io wa kuboresha maelezo pia unaitaja skill hii kama mfano. Kulingana na mwongozo, skill-creator huendesha mzunguko huu wote kiotomatiki: hugawa seti ya majaribio, hupima viwango vya kuamka kwa sambamba, hupendekeza maboresho ya maelezo kwa kutumia Claude na huzalisha ripoti hai ya HTML.

> **Je, ulijua?** Katika jaribio la kuamka linalopendekezwa na agentskills.io, hutumika takriban jumbe 20 za mfano na kila moja huendeshwa mara 3. Yaani kujaribu maelezo moja tu kunamaanisha uendeshaji 60. Ili kuzuia kujizoeza kupita kiasi (overfitting), takriban asilimia 60 ya jumbe hutengwa kwa ajili ya kuboresha na asilimia 40 kwa ajili ya kuthibitisha tu. Mwongozo unasema mara nyingi raundi tano zinatosha.

## mcp-builder na claude-api: kwa wanaojenga miunganisho

- **mcp-builder (rasmi):** Mwongozo wa kutengeneza seva za MCP zinazowezesha modeli kubwa za lugha kuzungumza na huduma za nje kupitia zana zilizosanifiwa vizuri. Hufanya kazi na Python (FastMCP) au Node/TypeScript (MCP SDK). Skill inagawa mchakato katika hatua nne: utafiti na mipango, utekelezaji, ukaguzi na majaribio, na kuunda tathmini. Kwenye folda kuna nyaraka za marejeo kwa kila lugha na hati za tathmini.
- **claude-api (rasmi):** Skill ya marejeo kwa Claude API na SDK za Anthropic. Inashughulikia mada kama vitambulisho vya modeli, vigezo, utiririshaji (streaming), matumizi ya zana na uhifadhi wa muda (caching), na ina folda tofauti kwa lugha nyingi za programu. Kulingana na nyaraka za Claude, skill hii ya chanzo huria huja pamoja na Claude Code.
- **webapp-testing (rasmi):** Seti ya zana ya kujaribu programu za wavuti za ndani kwa Playwright. Ni msaidizi wa vitendo kwa wanaounda sehemu ya mbele, ambaye pia tumemtaja kwenye makala ya usanifu.

## Kutoka jamii: nidhamu ya kihandisi kwa Superpowers

Nje ya hazina rasmi, mojawapo ya vifurushi vinavyozungumzwa zaidi miongoni mwa wasanidi ni hazina ya obra/superpowers ya Jesse Vincent yenye leseni ya MIT. Inajieleza kama "mbinu kamili ya uundaji programu" kwa mawakala wa uandishi wa msimbo. Kufikia Oktoba 2026, hazina ina skill hizi (uteuzi):

| Skill | Huingia kazini lini? |
|---|---|
| brainstorming | Kabla ya kuanza kipengele kipya au kazi ya ubunifu |
| writing-plans | Unapoandika mpango kabla ya kugusa msimbo kwa kazi yenye hatua nyingi |
| test-driven-development | Wakati wa utekelezaji: kwanza jaribio linalofeli, kisha msimbo mdogo kabisa |
| systematic-debugging | Unapokutana na hitilafu au jaribio lililofeli, kabla ya kupendekeza marekebisho |
| verification-before-completion | Kuendesha amri za uthibitishaji kabla ya kusema "imekamilika" |

README ya hazina inatoa maelekezo ya usakinishaji kwa mawakala wengi kama Codex, Cursor, Gemini CLI na GitHub Copilot CLI pamoja na Claude Code, na inasema kwamba upande wa Claude Code iko kwenye soko rasmi la programu-jalizi la Anthropic. Hii ndiyo matokeo ya vitendo ya Agent Skills kuwa kiwango huria: skill ileile inaweza kufanya kazi katika zana tofauti.

## Wazo lilelile kwenye majukwaa mengine

Nyaraka za OpenAI za ChatGPT na Codex pia zinaeleza skill kama zilizojengwa juu ya "kiwango huria cha agent skills". Kufikia Oktoba 2026, wasaidizi wawili waliojengwa ndani wanajitokeza kwenye nyaraka: skill-creator inayotengeneza skill kutokana na kazi unayoielezea (inaitwa kwa $skill-creator ndani ya Codex) na skill-installer inayosakinisha skill zilizo tayari kutoka hazina ya openai/skills au hazina nyingine. Codex husoma skill za ndani kutoka kwenye folda za .agents/skills kwa ngazi ya mradi na ya mtumiaji.

Tabia yenye thamani zaidi kwa msanidi inaweza kuwa hii: kila maelezo marefu unayoyarudia, orodha yako ya ukaguzi wa msimbo au hatua zako za kusambaza, yageuze kuwa skill na uyaweke kwenye hazina ya mradi. Katika Claude Code, skill zilizowekwa kwenye folda ya .claude/skills huenda kwa timu pamoja na hazina. Lakini usisahau kusoma hati za msimbo za kila skill ya jamii unayosakinisha, kwa sababu skill hizi zinaweza kuendesha msimbo kwenye kompyuta yako kwa ruhusa zako.

Katika mchakato wako wa uundaji programu, ni hatua gani inayokufanya useme zaidi "laiti ingekuwa skill": majaribio, ukaguzi wa msimbo, au usambazaji?
