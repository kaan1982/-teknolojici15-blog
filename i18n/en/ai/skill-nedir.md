---
title: "What Is a Skill? The New 'Skill Folders' of AI Agents"
excerpt: "An Agent Skill is a folder made of a SKILL.md file and optional scripts. The agent loads it only when needed. How does it differ from a prompt, MCP and a plugin?"
hook: "Teach an agent a new skill with a folder"
fact: "3 LAYERS"
factLabel: "Progressive loading of skill content"
category: "Artificial Intelligence"
---

AI assistants know a little about everything, but they don't know your company's report template, your brand's colors or the tricks to handling a certain file type properly. What if, instead of explaining this at length in every chat, you could package it once and tell the agent "use this when needed"? That is exactly the idea of a "skill".

## In short: a folder and a SKILL.md

By Anthropic's definition, Agent Skills are modular packages that extend Claude's capabilities. Each skill holds instructions, metadata and optional resources (scripts, templates) together, and Claude uses them on its own when they're relevant. Anthropic's engineering blog puts it even more simply: skills are "organized folders of instructions, scripts and resources" that an agent loads on demand to get better at specific tasks.

Technically a skill is a folder that contains, at minimum, a file named SKILL.md. At the top of this file are two required fields in YAML format: name and description. Below them are instructions written in plain Markdown. If you want, you can add subfolders to the folder such as scripts/ (executable code), references/ (additional documents) and assets/ (templates, images, data).

Anthropic likens this structure to an onboarding guide prepared for a new employee. You leave the guide on the desk, and the employee opens and consults it when needed.

## The secret: not everything is loaded at once

What sets skills apart from an ordinary long prompt is a design called "progressive disclosure". According to Claude's documentation, content is loaded in three layers:

| Layer | When is it loaded? |
|---|---|
| 1. Metadata (name + description) | Always, at startup (about 100 tokens per skill) |
| 2. SKILL.md body | When the skill is triggered (under 5,000 tokens recommended) |
| 3. Additional files and scripts | Only when needed; only the output of scripts enters the context |

This way you can load dozens of skills into an agent without all of them filling the context window. Until one is triggered, only each skill's name and description sit "on the table". In the documentation's example, the PDF skill keeps its form-filling instructions in a separate forms.md file, and Claude reads that file only when it is actually filling out a form.

> **Did you know?** Anthropic announced Agent Skills on October 16, 2025 and on December 18, 2025 published the format as an open standard at agentskills.io. That is why, as of October 2026, you see the same SKILL.md structure in the documentation of other tools such as GitHub Copilot and OpenAI Codex. Copilot's documentation points directly to the agentskills.io specification for checking skills.

## Prompt, MCP, plugin: what are the differences?

These concepts are often confused, because they're all about "making the agent better". The distinctions in the Claude Help Center can be summarized like this:

- **Prompts or custom instructions:** General guidance that applies in each chat or in all chats. A skill, on the other hand, is task-specific and kicks in only when relevant.
- **Projects:** Fixed background knowledge that is always loaded in chats within a project. A skill is a procedure that opens when needed.
- **MCP (Model Context Protocol) connectors:** Connect Claude to external services and data sources. That is, they provide "access". A skill is the "know-how" that explains how to use that access. The help center says the two are often used together.
- **Plugins:** In Claude Code and Cowork, a plugin is the package for distributing several pieces (skills, connectors, commands, sub-agents) together. OpenAI's documentation makes a similar distinction: a skill is the authoring format, a plugin is the distribution format.

In short, MCP gives the agent a hand, a skill teaches that hand a skill, and a plugin delivers them in one box.

## Where does it work?

As of October 2026, according to Claude's documentation, skills can be used in the Claude apps (claude.ai), in Claude Code and, together with the code execution tool, in the Claude API. The help center says skills are offered on the Free, Pro, Max, Team and Enterprise plans and require the code execution feature to be turned on.

An important detail: custom skills don't sync across surfaces. A skill you upload to claude.ai is private to your account. A skill uploaded to the API is shared with the entire workspace. In Claude Code it's kept either in your personal folder (~/.claude/skills/) or in the project folder (.claude/skills/).

There's a security dimension as well. Because skills can run code, the documentation recommends treating them "like installing software" and using them only from trusted sources. We cover this separately in the last article of the series.

In the next articles of this section we'll write your own skill step by step and go through the skills that actually exist and are useful, category by category.

What's the task you explain to AI again and again every day, the one you think "I wish I could teach this just once"?
