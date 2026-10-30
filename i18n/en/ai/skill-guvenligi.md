---
title: "Skill Security: Everything to Read Before You Install"
excerpt: "Skills can run code and pull instructions from outside sources. A guide to trusted sources, reviewing SKILL.md and scripts, least privilege and secret keys."
hook: "Installing a skill is installing software"
fact: "13.4%"
factLabel: "Share of skills with critical flaws (Snyk, 2026)"
category: "Artificial Intelligence"
---

What makes skills so powerful also makes them risky: a skill can carry not just text but executable code. When the agent loads that skill, it follows the instructions in it as if they were its own and can run its scripts. That's why the recommendation in Claude's documentation can be summed up in one sentence: think of installing a skill like installing software.

## What do the official sources say?

The security section in Claude's documentation is quite direct. It recommends using skills only from trusted sources, that is, those you wrote yourself or got from Anthropic. If you have to use a skill from an unknown source, it asks you to be "extremely careful" and to audit it from start to finish before using it.

Anthropic's engineering article is along the same lines: for skills from less trusted sources, it recommends inspecting the bundled files, especially code dependencies and scripts, and checking instructions that tell the agent to connect to external networks. The documents also stress one risk in particular: skills that pull data from external addresses are dangerous, because the content they fetch can contain malicious instructions.

## What's happening in the field?

These warnings aren't theoretical. In its "ToxicSkills" study published on February 5, 2026, the security company Snyk scanned 3,984 skills from ClawHub and skills.sh. The results:

| Finding | Count |
|---|---|
| Skills scanned | 3,984 |
| With at least one security issue | 1,467 (36.82 percent) |
| Containing at least one critical issue | 534 (13.4 percent) |
| Confirmed malicious payloads | 76 |

According to the report, the skills.sh data covers only that site's selected top 100 skills, while the full market figures are for ClawHub. The attack types seen include installation instructions that steer the user into downloading and running untrusted software, obfuscated commands (disguised with Base64 or Unicode) that send credentials to the attacker, and attempts to disable security checks and plant backdoors. Prompt injection was used in 91 percent of the confirmed malicious skills.

> **Did you know?** According to the Claude Help Center, Enterprise organizations can turn on skill scanning, which checks uploaded skills and plugins for malicious content. But this is a safety net, not a substitute for reading. The best way to understand what a skill does is to open and read its SKILL.md and scripts yourself before installing it.

## Pre-install checklist

A practical list drawn from the recommendations in the documentation and findings in the field:

1. **Verify the source.** Whose repository is it? Is it an official company or a known developer, or a copy that closely resembles the name of a well-known package (typosquatting)?
2. **Read SKILL.md from start to finish.** Phrases like "first download and run this", "turn off the security setting" or "send it to this address" are warning signs.
3. **Inspect the scripts/ folder.** If there are lines you can't read, or that are obfuscated or Base64-encoded, don't install it.
4. **Check external links.** If a skill pulls instructions or data from a web address, remember that content can change at any moment.
5. **Install only what you need.** Choosing skills one by one instead of "install everything" shrinks both the context and the attack surface.

## Least privilege and secret keys

Where a skill runs matters too. According to Claude's documentation, in the Claude API environment skills have no network access and can't install packages at runtime. In claude.ai, network access can be full, partial or off depending on user and admin settings. In Claude Code, skills have as much network access as any program on your computer. That is, a skill you install in a local agent runs with your privileges.

That's why the principle of least privilege is critical. In Claude Code, the allowed-tools field in a skill's front matter lets certain tools be used without asking permission when that skill is invoked. According to the documentation, this permission resets with your next message. Still, if you see broad permissions in a skill written by someone else, it's a good habit not to install it without knowingly approving them.

The rule for secret keys is simple: never write API keys, passwords and access tokens into SKILL.md or the skill folder. When you share the skill or push it to a repository, everything in that folder goes along with it. Keep keys in environment variables or in the secure credential storage method of the tool you use, and tell the skill only how to access them.

As of October 2026 the skill ecosystem is growing very fast, and this growth recalls the security problems of the early years of app stores. The good news: reading a skill is much easier than reading an app's source code, because most of it is plain text.

Do you open and read a skill before installing it, or do you trust the star count and download numbers?
