---
title: "Mga skill para sa dokumento: pagtuturo sa agent ng Word, Excel, PowerPoint at PDF"
excerpt: "Ano ang ginagawa ng docx, xlsx, pptx at pdf skill ng Anthropic, at saan gumagana ang mga ito? Mga opisyal at pantulong na skill na talagang kapaki-pakinabang sa paggawa ng dokumento."
hook: "Ulat, talahanayan, presentasyon: lahat ay skill"
fact: "4 NA DOKUMENTO"
factLabel: "Bilang ng mga skill sa dokumentong kasama na"
category: "Artificial Intelligence"
---
Madaling sabihin sa AI na "gawan mo ako ng ulat". Ang mahirap ay makuha ang ulat bilang Word o Excel file na talagang nabubuksan, hindi nasisira ang format at gumagana ang mga formula. Ang unang kategorya ng mga skill, at marahil ang pinakamadalas gamitin, ay tiyak na ito: mga dokumento sa opisina. Sa artikulong ito, tatalakayin lang namin ang mga skill na nakumpirma naming umiiral.

## Apat na pundasyon: docx, xlsx, pptx, pdf

Ayon sa docs ng Claude, may apat na pre-built na skill sa dokumento na iniaalok ng Anthropic. Gumagana ang mga ito sa likod ng kakayahan ni Claude sa paggawa ng file, at inilalathala ng Anthropic ang source code sa GitHub repository na anthropics/skills.

| Skill | Ano ang ginagawa? (mula sa mga opisyal na paglalarawan) |
|---|---|
| docx | Gumagawa, bumabasa at nag-eedit ng mga Word document. Kasama ang formatting at mga template |
| xlsx | Nagbubukas at nag-eedit ng spreadsheet, nagdadagdag ng formula at chart, naglilinis ng magulong data |
| pptx | Gumagawa ng presentasyon, nag-eedit ng slide, bumabasa at nag-a-analyze ng nilalaman ng .pptx |
| pdf | Kumukuha ng text at talahanayan, nagsasama at naghahati ng PDF, pumupuno ng form, nagdadagdag ng watermark |

Medyo "mapilit" ang pagkakasulat ng mga paglalarawan sa repository. Halimbawa, sinasabi ng paglalarawan ng pptx skill na dapat itong gamitin kapag sangkot ang isang .pptx file "sa anumang paraan," bilang input man o output. Opisyal itong halimbawa ng tuntuning "ang paglalarawan ang nagti-trigger" na ipinaliwanag namin sa naunang artikulo.

## Saan mo ito magagamit?

Hanggang Oktubre 2026, ayon sa docs ng Claude, kusang gumagana ang apat na skill na ito sa claude.ai kapag gumagawa ng dokumento, at maaari rin silang tawagin bilang handa nang skill sa Claude API. Sa Claude Code, hindi built-in ang mga handa nang skill sa dokumento. Pero maaaring idagdag ang repository na anthropics/skills bilang plugin marketplace para sa Claude Code at i-install ang package na document-skills. Ayon sa tagubilin sa repository, idinadagdag muna ang marketplace gamit ang command na /plugin marketplace add anthropics/skills, saka ini-install ang document-skills@anthropic-agent-skills.

May pagkakaiba sa lisensya. Karamihan ng skill sa repository ay open source sa ilalim ng Apache 2.0. Pero ibinahagi ang apat na skill sa dokumento bilang "hindi open source, kundi source-available." Ibig sabihin, puwede mong suriin at pag-aralan ang code, pero dapat mong basahin ang license file bago ito malayang ipamahagi muli sa sarili mong produkto.

> **Alam mo ba?** Aklat-aralin na halimbawa ng progressive disclosure ang pdf skill. Ayon sa engineering article ng Anthropic, inalis sa pangunahing SKILL.md ang mga tagubilin sa pagpuno ng form at inilipat sa hiwalay na file na forms.md. Binabasa lang ni Claude ang file na ito kapag talagang pumupuno ng form. Ngayon, nasa loob ng pdf folder sa repository ang forms.md, reference.md at isang scripts folder.

## Mga katulong sa tabi ng dokumento

Hindi natatapos sa format ng file ang paggawa ng dokumento. May iba pang opisyal na halimbawa sa repository na anthropics/skills na nakatuon sa panig ng nilalaman:

- **doc-coauthoring:** Nag-aalok ng hakbang-hakbang na workflow para sa sama-samang pagsulat ng mga nakabalangkas na teksto gaya ng technical specification, panukala at decision document. Dumadaan ito sa mga yugto ng paglilipat ng context, paulit-ulit na pagwawasto at beripikasyon.
- **internal-comms:** Nagtitipon ng mga resource na tumutulong sa pagsulat ng mga internal na komunikasyon, gaya ng status report, management update, company newsletter at FAQ, sa mga format na gusto ng kumpanya. May mga halimbawang teksto rin sa folder.
- **brand-guidelines:** Inilalapat ang opisyal na mga kulay at typography ng brand ng Anthropic sa isang output. Ang tunay na halaga nito ay ipinapakita kung paano ka makakabuo ng katulad para sa sarili mong brand.
- **theme-factory:** May 10 handa nang tema ng kulay at font na maaaring ilapat sa slide, dokumento, ulat o HTML page, at kung gusto mo, agad din itong gumagawa ng bagong tema.

Binabanggit din ng Help Center ang mga skill na inihanda ng mga partner gaya ng Notion, Figma at Atlassian para gumana kasama ng sarili nilang MCP connector. Kapaki-pakinabang ang mga ito kapag nagtatrabaho sa mga tool kung saan ginagawa ang mga dokumento (hal. mga pahina ng Notion).

## Paano ito ginagamit sa totoong buhay?

Ang pinakamabisang paggamit ay pagsamahin ang mga handa nang skill sa dokumento at ang sarili mong maliit na skill. Halimbawa, alam ng xlsx skill kung paano gumawa ng maayos na Excel, pero hindi nito alam kung anong mga column ang dapat nasa buwanang sales table ng kumpanya mo. Kung susulatan mo ng maikling skill na naglalarawan nito, magtutulungan ang dalawang skill at lalabas ang file na tama ang format at sumusunod sa pamantayan mo.

May dalawang bagay na dapat tandaan. Una, tahasang isinusulat ng repository na anthropics/skills na ang mga skill na ito ay "para sa demonstrasyon at edukasyon" at maaaring iba ang aktuwal na kilos ni Claude sa mga implementasyon dito. Ikalawa, nangangailangan ng code execution environment ang mga skill sa dokumento. Ayon sa Help Center, kailangang naka-on ang code execution para gumana ang mga skill.

Sa susunod na artikulo, lilipat tayo sa panig ng screen: mga skill na gumagawa ng disenyo, front end at web output.

Anong uri ng dokumento ang pinakamarami mong naaaksayang oras kapag ginagawa: talahanayan, presentasyon o ulat?
