---
title: "Marketing, Video and Content Skills: The Creator's Toolbox"
excerpt: "Corey Haines's marketingskills repository, Anthropic's marketing plugin, and the Remotion and HeyGen HyperFrames skills. Real picks for content and video."
hook: "Code the video, write the copy with a skill"
fact: "52 SKILLS"
factLabel: "Number of skills in the marketingskills repository"
category: "Artificial Intelligence"
---

Short videos, covers and copy are produced every day behind this blog too. So this category is a bit personal for us: skills that produce marketing, content and video. This is also the area where community skills multiply fastest. We have listed only examples whose repositories we opened and checked. All numbers are as of the end of October 2026.

## marketingskills: a 52-skill marketing library

The MIT-licensed coreyhaines31/marketingskills repository by Corey Haines, the name behind the conversion optimization agency Conversion Factory, is one of the most comprehensive community collections in this area. According to the README, it was prepared for technical marketers and founders; it focuses on work such as conversion optimization, copywriting, SEO, analytics and growth engineering. It says it works with Claude Code, OpenAI Codex, Cursor and other agents that support the Agent Skills standard.

There are 52 skills in the repository's skills folder. A few examples:

- **copywriting:** For writing or improving the copy of any kind of marketing page, such as a home page, landing page or pricing page.
- **seo-audit:** For auditing and diagnosing SEO problems on a site.
- **ai-seo:** For optimizing content for AI search engines, that is, to be cited as a source in the answers of large language models.
- **emails and cold-email:** For email sequences, automated flows and B2B cold email campaigns.
- **social:** For creating and planning content for LinkedIn, X, Instagram, TikTok and Facebook.

For installation the README suggests the command npx skills add coreyhaines31/marketingskills. You can also pick individual skills.

## Anthropic's marketing plugin

Anthropic's anthropics/knowledge-work-plugins repository collects plugins prepared for professional groups. They are made for Claude Cowork and are compatible with Claude Code too. Each plugin packages together the skills, connectors, slash commands and sub-agents for that job.

The skills inside the marketing plugin are: brand-review (audits a draft against the brand voice and style guide and suggests before/after fixes), campaign-plan (produces a campaign brief with goal, audience, message, channel strategy and content calendar), content-creation, draft-content, email-sequence, competitive-brief, performance-report and seo-audit. The README lists that this plugin can connect to tools such as Slack, Canva, Figma, HubSpot and Ahrefs. So here the skill provides the "method" and the connector provides the "access".

> **Did you know?** Videos can now be produced not just by dragging and dropping on a timeline but with code, and this is exactly where skills step in. The Remotion team publishes its own official skill set for its React-based video framework. HeyGen offers HyperFrames, built on the idea of "write HTML, render video", together with skills for agents.

## For video: Remotion and HyperFrames

| Package | Source | What does it offer? |
|---|---|---|
| remotion-dev/skills | The Remotion team (official) | 12 skills: video creation, animation rules, captions, rendering, preview |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skills and ready-made blocks for the framework that turns HTML into video |

**Remotion:** According to the README, Remotion maintains a list of Agent Skills that define best practices for working in Remotion projects. In the set are skills such as remotion-create, which creates a new video, remotion-markup, which carries animation and layout knowledge, remotion-captions for transcribing and animating captions, remotion-render for export, and remotion-best-practices, which routes to all of them. Installation is done with npx skills add remotion-dev/skills.

**HyperFrames:** HeyGen's repository introduces itself as "write HTML, render video, built for agents". According to the README, the core set consists of the skills hyperframes (making and editing video), hyperframes-cli (project scaffolding, preview, render), hyperframes-registry (about 450 ready-made transition, title, caption and graphic blocks) and media-use (media jobs such as music, sound effects, images and voiceover). In total there are 7 published skills.

An interesting detail: the description of the video skill in Corey Haines's repository also lists names such as Remotion, HyperFrames and HeyGen as trigger words. So the marketing skill was written to work like a bridge to the video skills.

## What to look for when choosing

Most skills in this area are community- or company-made and update very fast. Asking these three questions before installing a package makes things easier: Whose repository is it, and is it actively updated? Does SKILL.md contain an instruction that connects to external addresses or asks for credentials? Can you pick and install just the few skills you actually need? Most installation tools let you choose a single skill instead of "install everything", and that reduces both context and risk.

In content creation, what is the biggest time thief for you: writing copy, preparing visuals or editing the video?
