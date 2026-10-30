---
title: "Ano ang skill? Ang bagong 'folder ng kasanayan' ng mga AI agent"
excerpt: "Ang Agent Skill ay isang folder na may SKILL.md file at opsyonal na mga script. Nilo-load lang ito ng agent kapag kailangan. Ano ang pagkakaiba nito sa prompt, MCP at plugin?"
hook: "Magturo ng bagong kasanayan sa agent gamit ang isang folder"
fact: "3 LAYER"
factLabel: "Paunti-unting pag-load ng nilalaman ng skill"
category: "Artificial Intelligence"
---

May alam nang kaunti sa lahat ang mga AI assistant, pero hindi nila alam ang template ng ulat ng kumpanya mo, ang mga kulay ng brand mo, o ang mga trick sa tamang pagproseso ng isang uri ng file. Paano kung, sa halip na ipaliwanag ito nang mahaba sa bawat chat, mapa-package mo ito nang isang beses at masabi sa agent na "gamitin mo kapag kailangan"? Ito mismo ang ideya ng "skill" (kasanayan).

## Sa madaling salita: isang folder at isang SKILL.md

Sa depinisyon ng Anthropic, ang Agent Skills ay mga modular na package na nagpapalawak sa kakayahan ni Claude. Pinagsasama ng bawat skill ang mga tagubilin, metadata at opsyonal na resources (mga script, template), at kusa itong ginagamit ni Claude kapag nauugnay ito sa gawain. Mas simple pa ang pagkakasabi ng engineering blog ng Anthropic: ang mga skill ay "mga inayos na folder ng tagubilin, script at resources" na nilo-load ng agent kapag kailangan para gumaling sa partikular na gawain.

Sa teknikal na usapan, ang skill ay isang folder na may kahit isang file na pinangalanang SKILL.md. Sa simula ng file na ito, may dalawang kinakailangang field sa YAML format: name (pangalan) at description (paglalarawan). Sa ibaba nito ang mga tagubiling nakasulat sa payak na Markdown. Kung gusto mo, maaari kang magdagdag sa folder ng mga subfolder gaya ng scripts/ (code na maipapatakbo), references/ (karagdagang dokumento) at assets/ (template, larawan, data).

Inihahambing ito ng Anthropic sa gabay sa onboarding na inihahanda para sa bagong empleyado. Iiwan mo ang gabay sa mesa, at bubuksan at titingnan ito ng empleyado kapag kailangan.

## Ang sikreto: hindi lahat ay nilo-load nang sabay

Ang nagpapaiba sa mga skill sa karaniwang mahabang prompt ay ang disenyong tinatawag na "progressive disclosure" (paunti-unting paglalantad). Ayon sa docs ng Claude, nilo-load ang nilalaman sa tatlong layer:

| Layer | Kailan nilo-load? |
|---|---|
| 1. Metadata (pangalan + paglalarawan) | Palagi, sa simula (mga 100 token bawat skill) |
| 2. Katawan ng SKILL.md | Kapag na-trigger ang skill (inirerekomendang wala pang 5,000 token) |
| 3. Mga karagdagang file at script | Kapag kailangan lang; output lang ng mga script ang pumapasok sa context |

Dahil dito, makakapag-load ka ng dose-dosenang skill sa agent pero hindi nito pupunuin ang context window. Hanggang hindi na-trigger, pangalan at paglalarawan lang ng bawat skill ang "nasa mesa". Sa halimbawa sa dokumento, nasa hiwalay na file na forms.md ang tagubilin sa pagpuno ng form ng PDF skill, at binabasa lang ito ni Claude kapag talagang pumupuno ng form.

> **Alam mo ba?** Inanunsyo ng Anthropic ang Agent Skills noong Oktubre 16, 2025, at noong Disyembre 18, 2025 inilabas nito ang format bilang open standard sa agentskills.io. Kaya hanggang Oktubre 2026, makikita mo na rin ang parehong istruktura ng SKILL.md sa dokumentasyon ng iba pang tool gaya ng GitHub Copilot at OpenAI Codex. Direktang itinuturo ng docs ng Copilot ang specification ng agentskills.io para suriin ang mga skill.

## Prompt, MCP, plugin: ano ang pagkakaiba?

Madalas pagkalitu-labuin ang mga konseptong ito dahil lahat ay tungkol sa "paggawang mas mahusay ng agent". Maibubuod ang pagkakaiba ayon sa Claude Help Center:

- **Prompt o custom instructions:** Mga pangkalahatang gabay na may bisa sa bawat chat o sa lahat ng chat. Ang skill naman ay para sa partikular na gawain at gumagana lang kapag nauugnay.
- **Projects:** Nakapirming background na impormasyon na laging naka-load sa mga chat sa loob ng isang proyekto. Ang skill ay prosesong bumubukas kapag kailangan.
- **MCP (Model Context Protocol) connectors:** Ikinakabit si Claude sa mga panlabas na serbisyo at pinagmumulan ng data. Ibig sabihin, nagbibigay sila ng "access". Ang skill ay "kaalaman sa paraan" kung paano gagamitin ang access na iyon. Sinasabi ng help center na madalas gamitin nang magkasama ang dalawa.
- **Mga plugin:** Sa panig ng Claude Code at Cowork, ang plugin ay package para ipamahagi nang magkasama ang maraming bahagi (mga skill, connector, command, sub-agent). Ganito rin ang pagkakaiba sa docs ng OpenAI: ang skill ang format ng pagsulat, ang plugin ang paraan ng pamamahagi.

Sa madaling sabi, binibigyan ng MCP ang agent ng kamay, tinuturuan ng skill ang kamay na iyon ng kasanayan, at ihinahatid ng plugin ang lahat ng ito sa isang kahon.

## Saan ito gumagana?

Hanggang Oktubre 2026, ayon sa docs ng Claude, magagamit ang mga skill sa mga Claude app (claude.ai), sa Claude Code, at sa Claude API kasama ng code execution tool. Sinasabi ng help center na inaalok ang mga skill sa mga planong Free, Pro, Max, Team at Enterprise, at kailangang naka-on ang code execution.

Isang mahalagang detalye: hindi nagsi-sync ang mga custom skill sa iba't ibang surface. Ang skill na ina-upload mo sa claude.ai ay para lang sa account mo. Ang skill na ina-upload sa API ay ibinabahagi sa buong workspace. Sa Claude Code naman, nakatago ito sa personal na folder (~/.claude/skills/) o sa folder ng proyekto (.claude/skills/).

May aspeto rin ng seguridad. Dahil nakapagpapatakbo ng code ang mga skill, inirerekomenda ng docs na ituring ang mga ito na "gaya ng pag-install ng software" at gamitin lang mula sa mapagkakatiwalaang source. Tatalakayin namin ito nang hiwalay sa huling artikulo ng serye.

Sa mga susunod na artikulo ng seksyong ito, isusulat natin nang hakbang-hakbang ang sarili mong skill at susuriin, kategorya bawat kategorya, ang mga skill na talagang umiiral at kapaki-pakinabang.

Alin ang gawaing paulit-ulit mong ipinapaliwanag sa AI araw-araw, iyong tipong "sana naituro ko na lang ito nang isang beses"?
