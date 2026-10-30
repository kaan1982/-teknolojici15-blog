---
title: "Document Skills: Teaching an Agent Word, Excel, PowerPoint and PDF"
excerpt: "What do Anthropic's docx, xlsx, pptx and pdf skills do, and where do they work? The official and helper skills that really help with document creation."
hook: "Report, spreadsheet, presentation: all in a skill"
fact: "4 DOCS"
factLabel: "Number of document skills that come ready-made"
category: "Artificial Intelligence"
---

Telling an AI "prepare me a report" is easy. The hard part is getting the report as a Word or Excel file that actually opens, whose formatting isn't broken and whose formulas work. The first and perhaps most used category of skills is exactly this: office documents. In this article we cover only skills whose existence we have verified.

## Four cornerstones: docx, xlsx, pptx, pdf

According to Claude's documentation, there are four pre-built document skills that Anthropic provides. They work behind the scenes of Claude's file creation feature, and Anthropic publishes their source code in the anthropics/skills GitHub repository.

| Skill | What does it do? (from the official descriptions) |
|---|---|
| docx | Creates, reads and edits Word documents. Including formatting and templates |
| xlsx | Opens and edits spreadsheets, adds formulas and charts, cleans up messy data |
| pptx | Creates presentations, edits slides, reads and parses .pptx content |
| pdf | Extracts text and tables, merges and splits PDFs, fills forms, adds watermarks |

The descriptions in the repository are written quite "insistently". For example, the pptx skill's description says it should be used whenever a .pptx file is involved "in any way" as input or output. This is an official example of the "the description triggers" rule we covered in the previous article.

## Where can you use them?

As of October 2026, according to Claude's documentation, these four skills are active automatically when creating documents in claude.ai and can also be called as ready-made skills in the Claude API. In Claude Code, the ready-made document skills don't come built in. But the anthropics/skills repository can be added as a plugin marketplace for Claude Code, and the document-skills package can be installed. According to the instructions in the repository, you first add the marketplace with the command /plugin marketplace add anthropics/skills and then install document-skills@anthropic-agent-skills.

There is a distinction on licensing. Many skills in the repository are open source under the Apache 2.0 license. The four document skills, however, are shared as "source-available", not open source. That is, you can read the code and learn from it, but you need to read the license file before freely redistributing it in your own product.

> **Did you know?** The pdf skill is a textbook example of progressive loading. According to Anthropic's engineering article, the form-filling instructions were pulled out of the main SKILL.md into a separate forms.md file. Claude reads that file only when it is actually filling out a form. Today the pdf folder in the repository holds forms.md, reference.md and a scripts folder.

## Helpers alongside documents

Document creation doesn't end with the file format. The anthropics/skills repository has other official examples focused on the content side:

- **doc-coauthoring:** Offers a step-by-step workflow for co-writing structured texts such as technical specifications, proposals and decision documents. It takes you through context transfer, iterative refinement and verification stages.
- **internal-comms:** Gathers resources to help write internal communications such as status reports, leadership updates, company newsletters and FAQs in the formats a company prefers. There are sample texts in the folder too.
- **brand-guidelines:** Applies Anthropic's official brand colors and typography to an output. Its real value is showing how you can build a similar one for your own brand.
- **theme-factory:** Contains 10 ready-made color and font themes that can be applied to a slide, document, report or HTML page, and generates a new theme on the spot if you like.

The Help Center also mentions skills prepared by partners such as Notion, Figma and Atlassian to work together with their own MCP connectors. These are useful when working with the tools where documents are produced (e.g. Notion pages).

## How is it used in real life?

The most productive use is to combine the ready-made document skills with a small skill of your own. For example, the xlsx skill knows how to produce Excel properly, but it doesn't know which columns your company's monthly sales table should have. If you write a short skill that describes this, the two skills work together and produce a file that is both correctly formatted and in line with your standard.

There are two notes to remember. First, the anthropics/skills repository states clearly that these skills are "for demonstration and educational purposes" and that Claude's own behavior may differ from the implementations here. Second, document skills need a code execution environment. According to the Help Center, the code execution feature must be turned on for skills to work.

In the next article we move to the screen side: skills that produce design, front-end and web output.

Which type of document do you lose the most time preparing: spreadsheets, presentations or reports?
