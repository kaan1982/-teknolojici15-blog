---
title: "Seguridad ng skill: lahat ng dapat mong basahin bago mag-install"
excerpt: "Nakapagpapatakbo ng code ang mga skill at maaaring humila ng tagubilin mula sa labas. Gabay sa mapagkakatiwalaang source, pagsusuri ng SKILL.md at script, pinakamababang pahintulot at mga lihim na key."
hook: "Ang pag-install ng skill ay pag-install ng software"
fact: "13.4%"
factLabel: "Bahagdan ng skill na may kritikal na butas (Snyk, 2026)"
category: "Artificial Intelligence"
---

Ang nagpapalakas sa mga skill ay siya ring nagpapadelikado sa kanila: hindi lang teksto ang dala ng skill, kundi maaari ring code na maipapatakbo. Kapag nilo-load ng agent ang skill na iyon, sinusunod nito ang mga tagubilin sa loob na parang sarili nitong tagubilin at puwede nitong patakbuhin ang mga script. Kaya maibubuod sa isang pangungusap ang rekomendasyon ng docs ng Claude: ituring ang pag-install ng skill na parang pag-install ng software.

## Ano ang sinasabi ng mga opisyal na source?

Medyo diretso ang seksyon ng seguridad sa docs ng Claude. Inirerekomenda nitong gumamit lang ng skill mula sa mapagkakatiwalaang source, ibig sabihin, ang isinulat mo mismo o ang galing sa Anthropic. Kung kailangan mong gumamit ng skill mula sa hindi kilalang source, hinihiling nitong maging "lubhang maingat" ka at suriin ito mula simula hanggang dulo bago gamitin.

Ganito rin ang linya ng engineering article ng Anthropic: para sa mga skill mula sa mga source na mas mababa ang tiwala, inirerekomenda nitong suriin ang mga kasamang file, lalo na ang mga code dependency at script, at tingnan ang mga tagubiling nagsasabing kumonekta sa mga panlabas na network. Tahasan ding binibigyang-diin ng docs ang isang panganib: delikado ang mga skill na humihila ng data mula sa mga panlabas na address, dahil maaaring may masamang tagubilin ang nahila na nilalaman.

## Ano ang nangyayari sa totoong mundo?

Hindi teoretikal ang mga babalang ito. Sa pananaliksik na "ToxicSkills" na inilathala noong Pebrero 5, 2026, sinuri ng security company na Snyk ang 3,984 skill mula sa ClawHub at skills.sh. Ito ang mga resulta:

| Natuklasan | Bilang |
|---|---|
| Mga sinuring skill | 3,984 |
| May kahit isang problema sa seguridad | 1,467 (36.82 porsiyento) |
| May kahit isang kritikal na problema | 534 (13.4 porsiyento) |
| Kumpirmadong malisyosong payload | 76 |

Ayon sa ulat, ang data ng skills.sh ay sumasaklaw lang sa piniling nangungunang 100 skill ng site na iyon, habang ang buong bilang ng merkado ay para sa ClawHub. Kabilang sa mga uri ng atakeng nakita ang mga tagubilin sa pag-install na nag-uutos sa user na mag-download at magpatakbo ng hindi mapagkakatiwalaang software, mga nakatagong command (nakabalatkayo gamit ang Base64 o Unicode) na nagpapadala ng credential sa umaatake, at mga pagtatangkang patayin ang mga security check at magtanim ng backdoor. Sa 91 porsiyento ng mga kumpirmadong malisyosong skill, ginamit ang prompt injection.

> **Alam mo ba?** Ayon sa Claude Help Center, maaaring i-on ng mga organisasyong Enterprise ang skill scanning, na sinusuri ang mga na-upload na skill at plugin para sa malisyosong nilalaman. Pero safety net lang ito at hindi kapalit ng pagbabasa. Pinakamainam mong maiintindihan kung ano ang ginagawa ng isang skill sa pamamagitan ng pagbubukas at pagbabasa mismo ng SKILL.md at mga script nito bago i-install.

## Checklist bago mag-install

Praktikal na listahang hinango namin mula sa mga rekomendasyon ng docs at sa mga natuklasan sa field:

1. **Beripikahin ang source.** Kanino ang repository? Opisyal na kumpanya o kilalang developer ba, o kopyang halos kapareho ng pangalan ng kilalang package (typosquatting)?
2. **Basahin ang buong SKILL.md.** Mga palatandaan ng panganib ang mga ekspresyong gaya ng "i-download muna ito at patakbuhin", "patayin ang security setting" o "ipadala sa address na ito".
3. **Suriin ang folder na scripts/.** Kung may mga linyang hindi mo mabasa, nakatago o naka-encode sa Base64, huwag i-install.
4. **Tingnan ang mga panlabas na link.** Kung humihila ang skill ng tagubilin o data mula sa web address, tandaang maaaring magbago anumang oras ang nilalamang iyon.
5. **I-install lang ang kailangan mo.** Mas maliit ang context at ang attack surface kapag pumipili ka ng isa-isang skill sa halip na "i-install lahat."

## Pinakamababang pahintulot at mga lihim na key

Mahalaga rin kung saan tumatakbo ang skill. Ayon sa docs ng Claude, sa kapaligiran ng Claude API, walang network access ang mga skill at hindi sila makakapag-install ng package habang tumatakbo. Sa claude.ai, maaaring buo, bahagya o sarado ang network access depende sa setting ng user at admin. Sa Claude Code naman, kasing-lawak ng network access ng anumang programa sa computer mo ang access ng mga skill. Ibig sabihin, ang skill na ini-install mo sa lokal na agent ay tumatakbo gamit ang mga pahintulot mo.

Kaya kritikal ang prinsipyo ng pinakamababang pahintulot. Sa Claude Code, pinapayagan ng allowed-tools field sa frontmatter ng skill na magamit ang ilang tool nang hindi humihingi ng pahintulot kapag tinawag ang skill na iyon. Ayon sa docs, nare-reset ang pahintulot na ito sa susunod mong mensahe. Gayunman, kung makakita ka ng malalawak na pahintulot sa skill na isinulat ng iba, mabuting ugaling huwag itong i-install nang hindi mo ito sinasadyang inaprubahan.

Simple ang tuntunin para sa mga lihim na key: huwag kailanman isulat ang mga API key, password at access token sa SKILL.md o sa folder ng skill. Kapag ibinahagi mo ang skill o ipinadala sa repository, kasama ang lahat ng nasa folder na iyon. Itago ang mga key sa mga environment variable o sa ligtas na paraan ng pag-iimbak ng credential ng tool na ginagamit mo, at sabihin lang sa skill kung paano ito aabutin.

Hanggang Oktubre 2026, napakabilis lumaki ng ecosystem ng mga skill, at ipinapaalala ng paglagong ito ang mga problema sa seguridad noong mga unang taon ng app store. Ang magandang balita: mas madaling basahin ang isang skill kaysa sa source code ng isang app, dahil karamihan nito ay payak na teksto.

Binubuksan at binabasa mo ba ang loob ng isang skill bago mo ito i-install, o nagtitiwala ka sa bilang ng star at download?
