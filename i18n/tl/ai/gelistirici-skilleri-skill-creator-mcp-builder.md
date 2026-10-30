---
title: "Mga skill para sa developer: skill-creator, mcp-builder at iba pa"
excerpt: "Mga skill na sumusulat ng skill, nagtatayo ng MCP server, at mga skill package na nagdadala ng disiplina sa pagsusuri at pag-debug. Mga napatunayang pagpipilian para sa developer."
hook: "May skill na sumusulat ng skill"
fact: "20 QUERY"
factLabel: "Inirerekomendang bilang ng halimbawa para sa pagsubok ng trigger"
category: "Artificial Intelligence"
---
Para sa gumagawa ng software, kawili-wili ang mga skill sa dalawang paraan. Una, may mga "tagagawa" na skill na tumutulong sa iyong magsulat ng sarili mong mga skill nang mas mabilis at masusukat. Ikalawa, may mga package na nagbibigay sa agent ng disiplina sa engineering (test, plano, pag-debug). Sa artikulong ito, tatalakayin namin ang dalawa, gamit lang ang mga halimbawang nakumpirma naming umiiral.

## skill-creator: ang skill na sumusulat ng skill

Ang skill-creator sa opisyal na repository ng Anthropic na anthropics/skills ay dinisenyo para gumawa ng mga bagong skill, mag-edit at magpahusay ng mga umiiral, at sukatin ang performance ng mga ito. Ayon sa paglalarawan nito, ito rin ang humahawak sa pagpapatakbo ng evaluation (eval), paghahambing ng resulta gamit ang variance analysis, at pag-optimize ng paglalarawan ng skill para mas maayos na ma-trigger.

Medyo makatao ang pagkakalarawan sa workflow: magpasya kung ano ang gusto mo, magsulat ng draft, maghanda ng ilang test na mensahe, patakbuhin si Claude na may skill gamit ang mga mensaheng ito, magkasamang suriin ang mga resulta, isulat muli, at ulitin. Sa folder, may magkakahiwalay na script na nagpapatakbo ng evaluation, gumagawa ng comparison report at nagpapahusay ng paglalarawan, pati isang "eval-viewer" para suriin ang mga resulta nang biswal.

Ginagamit din ng gabay ng agentskills.io sa pag-optimize ng paglalarawan ang skill na ito bilang halimbawa. Ayon sa gabay, ino-automate ng skill-creator ang buong siklong ito: hinahati nito ang test set, sabay-sabay na sinusukat ang rate ng pag-trigger, nagmumungkahi ng mga pagpapahusay sa paglalarawan kasama si Claude, at gumagawa ng live na HTML report.

> **Alam mo ba?** Sa pagsubok ng pag-trigger na inirerekomenda ng agentskills.io, mga 20 halimbawang mensahe ang ginagamit at 3 beses pinapatakbo ang bawat isa. Ibig sabihin, 60 takbo ang kailangan para subukan ang iisang paglalarawan. Para maiwasan ang overfitting, humigit-kumulang 60 porsiyento ng mga mensahe ang inilalaan sa pagpapahusay at 40 porsiyento ay para sa beripikasyon lang. Sinasabi ng gabay na kadalasang sapat na ang limang round.

## mcp-builder at claude-api: para sa gumagawa ng integration

- **mcp-builder (opisyal):** Gabay sa pagbuo ng mga MCP server na nagpapahintulot sa malalaking language model na makipag-usap sa mga panlabas na serbisyo sa pamamagitan ng mahusay na disenyong mga tool. Gumagana ito sa Python (FastMCP) o Node/TypeScript (MCP SDK). Hinahati ng skill ang proseso sa apat na yugto: pananaliksik at pagpaplano, implementasyon, pagrerepaso at pagsubok, at paggawa ng evaluation. May mga reference document sa bawat wika at mga script ng evaluation sa folder.
- **claude-api (opisyal):** Reference skill para sa Claude API at mga Anthropic SDK. Sinasaklaw nito ang mga paksang gaya ng model ID, parameter, streaming, paggamit ng tool at caching, at may hiwalay na folder para sa maraming programming language. Ayon sa docs ng Claude, kasama ng Claude Code ang open source na skill na ito.
- **webapp-testing (opisyal):** Toolkit para sa pagsubok ng mga lokal na web app gamit ang Playwright. Praktikal na katulong ito para sa mga gumagawa ng front end, na binanggit din namin sa artikulo tungkol sa disenyo.

## Mula sa komunidad: disiplina sa engineering gamit ang Superpowers

Bukod sa opisyal na repository, isa sa mga pinakapinag-uusapang package sa mga developer ay ang MIT-licensed na repository na obra/superpowers ni Jesse Vincent. Inilalarawan nito ang sarili bilang "kumpletong metodolohiya sa software development" para sa mga coding agent. Hanggang Oktubre 2026, ito ang mga skill na nasa repository (piling listahan):

| Skill | Kailan ito gumagana? |
|---|---|
| brainstorming | Bago magsimula ng bagong feature o malikhaing gawain |
| writing-plans | Sa pagsusulat ng plano bago hawakan ang code para sa gawaing maraming hakbang |
| test-driven-development | Habang ginagawa: unang pumapalpak na test, saka pinakakaunting code |
| systematic-debugging | Kapag may bug o pumalpak na test, bago magmungkahi ng ayos |
| verification-before-completion | Para patakbuhin ang mga verification command bago sabihing "tapos na" |

Bukod sa Claude Code, nagbibigay ang README ng repository ng tagubilin sa pag-install para sa maraming agent gaya ng Codex, Cursor, Gemini CLI at GitHub Copilot CLI, at binabanggit nitong nasa opisyal na plugin marketplace ng Anthropic ito sa panig ng Claude Code. Ito ang praktikal na resulta ng pagiging open standard ng Agent Skills: puwedeng gumana ang parehong skill sa iba't ibang tool.

## Parehong ideya sa ibang platform

Inilalarawan din ng docs ng ChatGPT at Codex ng OpenAI ang mga skill bilang nakabatay sa "open agent skills standard". Hanggang Oktubre 2026, dalawang built-in na katulong ang tampok sa docs: ang skill-creator na gumagawa ng skill mula sa gawaing inilalarawan mo (tinatawag sa Codex gamit ang $skill-creator), at ang skill-installer na nag-i-install ng mga handang skill mula sa repository na openai/skills o iba pang repository. Binabasa ng Codex ang mga lokal na skill mula sa mga folder na .agents/skills sa antas ng proyekto at user.

Para sa isang developer, marahil ito ang pinakamahalagang ugali: gawing skill ang bawat mahabang paliwanag na inuulit mo, ang checklist mo sa code review o ang mga hakbang sa deployment, at ilagay ito sa repository ng proyekto. Sa Claude Code, ang mga skill na nasa folder na .claude/skills ay napupunta rin sa team kasama ng repository. Pero huwag kalimutang basahin ang mga script ng bawat skill ng komunidad na ini-install mo, dahil nakapagpapatakbo ang mga skill na ito ng code sa computer mo gamit ang mga pahintulot mo.

Aling hakbang sa proseso ng development mo ang pinakamadalas magpasabi sa iyo ng "sana may skill para dito": test, code review o deployment?
