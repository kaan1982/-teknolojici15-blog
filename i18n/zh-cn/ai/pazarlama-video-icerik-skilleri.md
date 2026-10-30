---
title: "营销、视频与内容 skill：创作者的工具箱"
excerpt: "Corey Haines 的 marketingskills 仓库、Anthropic 的营销插件、Remotion 和 HeyGen HyperFrames skill。面向内容和视频的真实精选。"
hook: "用代码做视频，用 skill 写文案"
fact: "52 个 skill"
factLabel: "marketingskills 仓库中的 skill 数量"
category: "人工智能"
---
这个博客背后每天也在制作短视频、封面和文字。所以这个类别对我们有点个人色彩：生产营销、内容和视频的 skill。这里也是社区 skill 增长最快的领域。我们只列出了打开仓库、检查过内容的示例。所有数字均截至 2026 年 10 月底。

## marketingskills：52 个 skill 的营销库

Corey Haines 以 MIT 许可发布的 coreyhaines31/marketingskills 仓库（他是转化优化机构 Conversion Factory 背后的人），是这个领域最全面的社区合集之一。按 README，它面向技术型营销人员和创始人，专注于转化优化、文案写作、SEO、分析和增长工程等工作。它说明可与 Claude Code、OpenAI Codex、Cursor 以及其他支持 Agent Skills 标准的智能体一起使用。

仓库的 skills 文件夹里有 52 个 skill。几个例子：

- **copywriting：** 用于撰写或改进主页、落地页、定价页等各种营销页面的文案。
- **seo-audit：** 用于审查并诊断网站上的 SEO 问题。
- **ai-seo：** 为 AI 搜索引擎优化内容，也就是争取在大语言模型的回答中被引为来源。
- **emails 和 cold-email：** 用于邮件序列、自动化流程和 B2B 陌生开发邮件活动。
- **social：** 用于为 LinkedIn、X、Instagram、TikTok 和 Facebook 创作和规划内容。

安装方面，README 建议使用 npx skills add coreyhaines31/marketingskills 命令。也可以逐个选择 skill。

## Anthropic 的营销插件

Anthropic 的 anthropics/knowledge-work-plugins 仓库收集了按职业群体准备的插件。它们是为 Claude Cowork 制作的，也与 Claude Code 兼容。每个插件把针对该工作的 skill、连接器、斜杠命令和子智能体打包在一起。

marketing 插件里的 skill 有：brand-review（根据品牌声音和风格指南审查草稿，并提出修改前后的建议）、campaign-plan（给出包含目标、受众、信息、渠道策略和内容日历的活动摘要）、content-creation、draft-content、email-sequence、competitive-brief、performance-report 和 seo-audit。README 列出这个插件可以连接 Slack、Canva、Figma、HubSpot 和 Ahrefs 等工具。也就是说，在这里 skill 提供“方法”，连接器提供“访问”。

> **你知道吗？** 视频如今不只可以在时间线上拖放制作，也可以用代码生成，而 skill 恰好在这里派上用场。Remotion 团队为其基于 React 的视频框架发布了自己的官方 skill 集。HeyGen 则为智能体推出了基于“写 HTML，渲染视频”理念的 HyperFrames，并附带 skill。

## 做视频：Remotion 和 HyperFrames

| 套件 | 来源 | 提供什么？ |
|---|---|---|
| remotion-dev/skills | Remotion 团队（官方） | 12 个 skill：视频创建、动画规则、字幕、渲染、预览 |
| heygen-com/hyperframes | HeyGen（Apache 2.0） | 把 HTML 变成视频的框架的 skill 和现成模块 |

**Remotion：** 按 README，Remotion 维护着一份 Agent Skills 清单，规定了在 Remotion 项目中工作的最佳实践。套件里有创建新视频的 remotion-create、承载动画和布局知识的 remotion-markup、用于字幕转写和动画的 remotion-captions、用于导出的 remotion-render，以及指向所有这些的 remotion-best-practices 等 skill。安装用 npx skills add remotion-dev/skills 完成。

**HyperFrames：** HeyGen 的仓库把自己介绍为“写 HTML，渲染视频，为智能体而造”。按 README，基础套件由 hyperframes（制作和编辑视频）、hyperframes-cli（项目脚手架、预览、渲染）、hyperframes-registry（约 450 个现成的转场、标题、字幕和图形模块）和 media-use（音乐、音效、图片、配音等媒体工作）等 skill 构成。总共有 7 个已发布的 skill。

一个有趣的细节：Corey Haines 仓库中视频 skill 的描述，也把 Remotion、HyperFrames 和 HeyGen 等名字列为触发词。也就是说，这个营销 skill 被写成了通向视频 skill 的一座桥。

## 挑选时要看什么？

这个领域的大多数 skill 来自社区或公司，更新非常快。安装一个套件之前，问这三个问题会让事情更容易：仓库是谁的，有在积极更新吗？SKILL.md 里有没有连接外部地址或索要凭据的指令？你能不能只挑选真正需要的几个 skill 来安装？大多数安装工具都允许选择单个 skill，而不是“全都装上”，这既缩小上下文，也降低风险。

在内容创作上，对你来说最大的时间小偷是哪一个：写文案、做图，还是剪视频？
