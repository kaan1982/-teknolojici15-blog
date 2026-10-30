---
title: "Isulat ang sarili mong skill: ang unang kasanayan mo gamit ang SKILL.md, hakbang-hakbang"
excerpt: "Isang folder, isang SKILL.md at isang mahusay na paglalarawan. Ang mga hakbang sa pagsulat ng sarili mong Agent Skill, ang halaga ng description field at ang paraan ng pagsubok."
hook: "Ang paglalarawan ang nagti-trigger sa skill"
fact: "1,024"
factLabel: "Pinakamaraming karakter para sa description field"
category: "Artificial Intelligence"
---

Hindi mo kailangang maging programmer para magsulat ng skill. Sa pinakasimpleng anyo, sapat na ang isang folder na may isang text file. Pero ang pagkakaiba ng skill na gumagana nang maayos at skill na hindi kailanman na-trigger ay madalas nakatago sa iisang pangungusap: ang paglalarawan. Sa artikulong ito, susulat tayo ng maliit pero totoong skill mula sa simula.

## Hakbang 1: Gawin ang folder at ang SKILL.md

Ayon sa Agent Skills specification, ang skill ay isang folder na may kahit isang SKILL.md file. Nasa pinakasimula ng file ang YAML frontmatter, at dalawang field ang kailangan:

- **name:** Hanggang 64 karakter. Maliliit na titik, numero at gitling lang. Hindi ito maaaring magsimula o magtapos sa gitling, hindi maaaring may magkasunod na dalawang gitling, at dapat kapareho ng pangalan ng folder. Binabanggit din ng docs ng Claude na hindi puwedeng gamitin sa pangalan ang mga salitang "anthropic" at "claude".
- **description:** Hindi puwedeng walang laman, hanggang 1,024 karakter. Dapat nitong ilarawan kung ano ang ginagawa ng skill at kailan ito gagamitin.

May mga opsyonal na field din (license, compatibility, metadata at ang eksperimental na allowed-tools), pero hindi ito kailangan ng karamihan ng skill.

## Hakbang 2: Isulat nang maingat ang paglalarawan

Bakit ba napakahalaga ng paglalarawan? Dahil sa simula, pangalan at paglalarawan lang ng bawat skill ang binabasa ng agent. Sa pananalita ng agentskills.io, nasa balikat ng paglalarawan ang "buong bigat" ng pag-trigger. Kung hindi sinasabi ng paglalarawan kung kailan magagamit ang skill, hindi ito aabutin ng agent.

Maibubuod ang mga rekomendasyon ng mga source:

- Isulat kung **ano ang ginagawa** at **kailan ito gagamitin**.
- Inirerekomenda ng docs ng Claude na isulat ang paglalarawan sa **ikatlong panauhan**, dahil idinadagdag ito sa system prompt ("Pinoproseso ang mga Excel file", hindi "Matutulungan kita").
- Inirerekomenda ng agentskills.io na ilista rin nang tahasan ang mga sitwasyong hindi binabanggit ng user ang larangan sa pangalan nito.
- Gawing maikli: ilang pangungusap, pinakamarami ay isang maikling talata. Pinuputol ng Claude Code ang paglalarawan sa 1,536 karakter sa listahan, kaya dapat nasa simula ang pinakamahalagang gamit.

## Hakbang 3: Gawing maikli ang katawan, at maging matalino sa script

Bilang halimbawa, mag-isip tayo ng skill na sumusunod sa sariling alituntunin sa pagsulat ng blog na ito: walang em dash at en dash sa teksto. Ganito ang istruktura ng folder:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

At ito lang ang laman ng SKILL.md:

```markdown
---
name: tire-denetimi
description: Hinahanap ang paggamit ng em dash (U+2014) at en dash (U+2013) sa mga blog post at nagmumungkahi ng pagwawasto. Ginagamit kapag inihahanda ng user ang isang Markdown post para i-publish, kapag sinabi niyang "suriin ang mga gitling", "sumusunod ba ito sa mga alituntunin sa pagsulat", o kapag humiling siya ng huling pagsusuri bago mag-publish kahit hindi niya ito pinangalanan.
---

# Pagsusuri ng gitling

1. Patakbuhin ang command na `python scripts/tire_bul.py <file.md>`.
2. Para sa bawat linya sa output, imungkahing palitan ang gitling ng tuldok, kuwit, tutuldok o panaklong.
3. Huwag baguhin ang kahulugan. Itanong sa user ang mga linyang hindi ka sigurado.
4. Sa dulo, iulat sa isang pangungusap kung ilang linya ang naitama.
```

Itinuturing ng docs ng Claude ang context window bilang "pinagsasaluhang yaman" at inirerekomendang idagdag lang ang impormasyong hindi pa alam ng model. Dapat wala pang 500 linya ang katawan. Dapat ilipat sa hiwalay na mga file ang mahahabang reference, at dapat isang antas lang ang link mula sa SKILL.md papunta sa mga file na ito.

Malinaw rin ang tuntunin para sa mga script: "lutasin, huwag ipasa ang problema". Ibig sabihin, dapat ang script mismo ang humawak sa mga error, hindi isinulat nang may lohikang "bahala na, makakahanap si Claude ng paraan". Kapag tumakbo ang script, output lang nito ang pumapasok sa context, hindi ang mismong code. Dahil dito, mas maaasahan ang script kaysa sa tagubilin para sa mga paulit-ulit na gawaing hindi puwedeng magkamali.

> **Alam mo ba?** Sa Claude Code, nagsanib na ang dating "custom slash commands" at ang mga skill. Ang file na .claude/commands/deploy.md at ang .claude/skills/deploy/SKILL.md ay lumilikha ng parehong /deploy command. Kung ayaw mong awtomatikong ma-trigger ang isang skill, magdagdag ng disable-model-invocation: true sa frontmatter para manu-mano mo lang itong matawag.

## Hakbang 4: Subukan, at subukan ulit

Inirerekomenda ng gabay ng Claude sa best practices na maghanda ng mga senaryo ng pagsusuri bago magsulat ng mahabang dokumento, at kasama sa checklist bago mag-publish ang hindi bababa sa tatlong evaluation at hiwalay na pagsubok sa mga model na Haiku, Sonnet at Opus. Simple ang dahilan: ang tagubiling perpektong gumagana sa Opus ay maaaring mangailangan ng mas maraming detalye para sa Haiku.

Para subukan ang pag-trigger, konkreto ang mungkahi ng agentskills.io: maghanda ng mga 20 halimbawang mensahe ng user. Dapat ma-trigger ng 8 hanggang 10 sa mga ito ang skill, at hindi dapat ma-trigger ng 8 hanggang 10. Ang pinakamahalagang negatibong halimbawa ay ang mga "muntik nang tumama", ibig sabihin, mga mensaheng may magkakaparehong salita pero ibang gawain ang hinihingi. Dahil hindi laging pareho ang kilos ng model, inirerekomendang patakbuhin ang bawat mensahe nang ilang beses (3 sa simula) at tingnan ang rate ng pag-trigger.

| Masamang paglalarawan | Mahusay na paglalarawan |
|---|---|
| "Tumutulong sa mga PDF." | Sinasabi kung ano ang ginagawa at kailan gagamitin |
| Teknikal na detalye lang | Inilalarawan ang layunin ng user |
| Sinasaklaw ang lahat | Sinasabi rin kung ano ang hindi ginagawa |

Simple rin ang pag-install: sa Claude Code, ilagay lang ang folder sa ~/.claude/skills/ (personal) o sa folder na .claude/skills/ ng proyekto. Binabantayan ng Claude Code ang mga folder na ito at nakikita ang mga pagbabago sa parehong session nang hindi kailangang mag-restart. Sa claude.ai naman, maaari mong i-upload ang skill bilang zip mula sa settings.

Aling paulit-ulit mong gawain ang gagawin mong awtomatiko ng una mong skill?
