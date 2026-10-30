---
title: "Skills for Developers: skill-creator, mcp-builder and More"
excerpt: "A skill that writes skills, a skill that builds MCP servers, and skill packs that bring discipline to testing and debugging. Verified picks for developers."
hook: "There is a skill that writes skills"
fact: "20 QUERIES"
factLabel: "Recommended sample size for trigger testing"
category: "Artificial Intelligence"
---

For someone who develops software, skills are interesting in two ways. First, there are "producer" skills that help you write your own skills faster and in a measurable way. Second, there are packs that give the agent engineering discipline (testing, planning, debugging). In this article we cover both, using only examples whose existence we have verified.

## skill-creator: the skill that writes skills

The skill-creator in Anthropic's official anthropics/skills repository is designed for creating new skills, editing and improving existing ones, and measuring their performance. According to its description, it also takes on running evaluations (evals), comparing results with variance analysis and optimizing the skill description so that it triggers better.

The workflow is described in a very human way: decide what you want, write a draft, prepare a few test messages, run Claude with the skill on those messages, evaluate the results together, rewrite, repeat. In the folder there are separate scripts for running evaluations, producing benchmark reports and improving the description, plus an "eval-viewer" for inspecting results visually.

agentskills.io's guide to description optimization also cites this skill as an example. According to the guide, skill-creator automates this loop from start to finish: it splits the test set, measures trigger rates in parallel, suggests description improvements with Claude and produces a live HTML report.

> **Did you know?** The trigger test that agentskills.io recommends uses about 20 sample messages, each run 3 times. So trying a single description means 60 runs. To prevent overfitting, about 60 percent of the messages are set aside for improvement and 40 percent only for validation. The guide says five rounds are usually enough.

## mcp-builder and claude-api: for those building integrations

- **mcp-builder (official):** A guide for developing MCP servers that let large language models talk to external services through well-designed tools. It works with Python (FastMCP) or Node/TypeScript (the MCP SDK). The skill divides the process into four phases: research and planning, implementation, review and testing, and creating evaluations. The folder has language-specific reference documents and evaluation scripts.
- **claude-api (official):** A reference skill for the Claude API and Anthropic SDKs. It covers topics such as model IDs, parameters, streaming, tool use and caching, and includes separate folders for many programming languages. According to Claude's documentation, this open-source skill comes with Claude Code.
- **webapp-testing (official):** A toolkit for testing local web apps with Playwright. A practical helper for front-end developers, which we also mention in the design article.

## From the community: engineering discipline with Superpowers

Outside the official repository, one of the most talked-about packs among developers is Jesse Vincent's MIT-licensed obra/superpowers repository. It describes itself as "a complete software development methodology" for coding agents. As of October 2026 the repository contains these skills (a selection):

| Skill | When does it kick in? |
|---|---|
| brainstorming | Before starting a new feature or creative work |
| writing-plans | When writing a plan, before touching code, for a multi-step job |
| test-driven-development | During implementation: a failing test first, then the least code |
| systematic-debugging | When you hit a bug or a failing test, before proposing a fix |
| verification-before-completion | To run verification commands before saying "done" |

The repository README gives installation instructions for many agents such as Codex, Cursor, Gemini CLI and GitHub Copilot CLI in addition to Claude Code, and says that on the Claude Code side it is listed in Anthropic's official plugin marketplace. This is the practical result of Agent Skills being an open standard: the same skill can work in different tools.

## The same idea on other platforms

OpenAI's ChatGPT and Codex documentation also describes skills as built on the "open agent skills standard". As of October 2026 two built-in helpers stand out in the documentation: skill-creator, which creates a skill from a job you describe (called in Codex with $skill-creator), and skill-installer, which installs ready-made skills from the openai/skills repository or other repositories. Codex reads local skills from .agents/skills folders at the project and user level.

The most valuable habit for a developer might be this: turn every long explanation you repeat, your code review checklist or your deployment steps into a skill and put it in the project's repository. In Claude Code, skills placed in the .claude/skills folder travel to the team along with the repository. But don't forget to read the scripts of every community skill you install, because these skills can run code on your computer with your privileges.

Which step in your development process makes you say "I wish there were a skill for this" the most: testing, code review or deployment?
