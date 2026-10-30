---
title: "Write Your Own Skill: Your First Skill, Step by Step with SKILL.md"
excerpt: "A folder, a SKILL.md and a well-written description. The steps to writing your own Agent Skill, the importance of the description field and how to test."
hook: "The description triggers the skill"
fact: "1,024"
factLabel: "Maximum characters for the description field"
category: "Artificial Intelligence"
---

You don't have to be a programmer to write a skill. In its simplest form, a folder with a single text file in it is enough. But the difference between a skill that works well and one that never triggers is often hidden in a single sentence: the description. In this article we write a small but real skill from scratch.

## Step 1: Create the folder and SKILL.md

According to the Agent Skills specification, a skill is a folder containing at least a SKILL.md file. At the very start of the file is YAML front matter, and two fields are required:

- **name:** At most 64 characters. Only lowercase letters, digits and hyphens. It can't start or end with a hyphen, can't contain two hyphens in a row and must match the folder's name. Claude's documentation also notes that the words "anthropic" and "claude" can't be used in the name.
- **description:** Can't be empty, at most 1,024 characters. It must explain what the skill does and when to use it.

There are optional fields too (license, compatibility, metadata and the experimental allowed-tools), but most skills don't need them.

## Step 2: Write the description with care

Why is the description so important? Because at startup the agent reads only each skill's name and description. In agentskills.io's words, the "whole burden" of triggering rests on the description. If the description doesn't say when the skill will be useful, the agent doesn't reach for it.

The sources' recommendations can be summarized like this:

- Write both **what it does** and **when to use it**.
- Because the description is added to the system prompt, Claude's documentation recommends writing it in the **third person** ("Processes Excel files", not "I can help you").
- agentskills.io recommends also listing explicitly the cases where the user doesn't name the domain.
- Keep it short: a few sentences, at most a short paragraph. Claude Code truncates the description at 1,536 characters in the listing, so the most important use case should come first.

## Step 3: Keep the body short and the script smart

As an example, let's imagine a skill that follows this blog's own writing rule: no long dash (em dash) or medium dash (en dash) should be left in the text. Let the folder structure be:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

And the SKILL.md file is just this:

```markdown
---
name: tire-denetimi
description: Finds the use of em dashes (U+2014) and en dashes (U+2013) in blog posts and suggests fixes. Used when the user is getting a Markdown post ready for publication, says "check the dashes" or "does it follow the writing rules", or, even without naming it, asks for a final check before publishing.
---

# Dash check

1. Run the command `python scripts/tire_bul.py <file.md>`.
2. For each line in the output, suggest replacing the dash with a period, comma, colon or parentheses.
3. Don't change the meaning. Ask the user about lines you're not sure of.
4. At the end, report in one sentence how many lines you fixed.
```

Claude's documentation sees the context window as a "shared resource" and recommends adding only information the model doesn't already know. The body should stay under 500 lines. Long reference texts should be moved into separate files, and those files should be linked from SKILL.md one level deep.

The rule for scripts is clear too: "solve, don't punt". That is, the script should handle error cases itself, not be written with a "let it crash, Claude will find a way" mindset. When a script runs, it is not the code itself but only its output that enters the context. This makes a script more reliable than instructions for tasks that are repeated and can't tolerate errors.

> **Did you know?** In Claude Code the old "custom slash commands" have merged with skills. The file .claude/commands/deploy.md and .claude/skills/deploy/SKILL.md create the same /deploy command. If you don't want a skill to trigger automatically, you can add disable-model-invocation: true to the front matter and call it manually only.

## Step 4: Test, then test again

Claude's best practices guide recommends preparing evaluation scenarios before writing long documents, and its pre-release checklist includes at least three evaluations and separate testing on Haiku, Sonnet and Opus models. The reasoning is simple: an instruction that works flawlessly on Opus may need more detail for Haiku.

For testing triggering, agentskills.io's suggestion is concrete: prepare about 20 sample user messages. 8 to 10 of them should trigger the skill and 8 to 10 should not. The most valuable negative examples are "near misses", that is, messages that share the same words but ask for a different job. Since model behavior isn't the same every time, it's recommended to run each message several times (3 to start with) and look at the trigger rate.

| Bad description | Good description |
|---|---|
| "Helps with PDFs." | Says what it does and when to use it |
| Only technical detail | Describes the user's intent |
| Covers everything | Also states what it doesn't do |

Installation is simple too: in Claude Code it's enough to put the folder under ~/.claude/skills/ (personal) or in the project's .claude/skills/ folder. Claude Code watches these folders and picks up changes in the same session without needing a restart. In claude.ai you can upload the skill as a zip from the settings.

Which repetitive task of yours would your first skill automate?
