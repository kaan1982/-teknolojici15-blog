---
title: "Skill 是什么？AI 智能体全新的“技能文件夹”"
excerpt: "Agent Skill 是一个由 SKILL.md 文件和可选脚本组成的文件夹。智能体只在需要时才加载它。它与提示词、MCP 和插件有什么区别？"
hook: "用一个文件夹教会智能体新技能"
fact: "3 层"
factLabel: "Skill 内容的渐进式加载"
category: "人工智能"
---
AI 助手什么都懂一点，却不知道你们公司的报告模板、品牌的配色，或者正确处理某种文件类型的诀窍。与其在每次对话里长篇大论地解释，不如打包一次，对智能体说“需要时就用它”，岂不是更好？“skill”（技能）说的正是这个想法。

## 简单说：一个文件夹和一个 SKILL.md

按 Anthropic 的定义，Agent Skills 是扩展 Claude 能力的模块化包。每个 skill 把指令、元数据和可选资源（脚本、模板）放在一起，Claude 在相关时会自动使用它们。Anthropic 的工程博客说得更简洁：skill 是智能体为了在特定工作上做得更好，在需要时加载的“经过整理的指令、脚本和资源的文件夹”。

从技术上讲，一个 skill 至少是一个里面有名为 SKILL.md 文件的文件夹。这个文件的开头是 YAML 格式的两个必填字段：name（名称）和 description（描述）。下面则是用普通 Markdown 写成的指令。你还可以在文件夹里加入 scripts/（可执行代码）、references/（补充文档）和 assets/（模板、图片、数据）等子文件夹。

Anthropic 把这种结构比作给新员工准备的入职指南。你把指南放在桌上，员工需要时翻开看看。

## 秘诀：并非一次性全部加载

让 skill 区别于普通长提示词的，是一种叫“渐进式披露”（progressive disclosure）的设计。按 Claude 的文档，内容分三层加载：

| 层级 | 何时加载？ |
|---|---|
| 1. 元数据（名称 + 描述） | 始终加载，启动时（每个 skill 约 100 token） |
| 2. SKILL.md 正文 | skill 被触发时（建议低于 5,000 token） |
| 3. 附加文件和脚本 | 仅在需要时；脚本只有输出会进入上下文 |

这样你可以给智能体装上几十个 skill，却不会把上下文窗口塞满。在被触发之前，每个 skill 只有名称和描述“摆在桌上”。文档里的例子是，PDF skill 把填写表单的指令放在单独的 forms.md 文件里，Claude 只有在真正填表时才会读取这个文件。

> **你知道吗？** Anthropic 于 2025 年 10 月 16 日宣布了 Agent Skills，并于 2025 年 12 月 18 日把这一格式作为开放标准发布在 agentskills.io。因此，截至 2026 年 10 月，你在 GitHub Copilot 和 OpenAI Codex 等其他工具的文档中也能看到同样的 SKILL.md 结构。Copilot 的文档在检查 skill 时，直接指向 agentskills.io 的规范。

## 提示词、MCP、插件：区别是什么？

这些概念经常被混淆，因为它们都和“让智能体变得更好”有关。Claude 帮助中心的区分可以概括如下：

- **提示词或自定义指令：** 对每次对话或全部对话生效的通用引导。skill 则针对具体任务，只在相关时才起作用。
- **项目（Projects）：** 在项目内的对话中始终加载的固定背景信息。skill 则是需要时才打开的流程。
- **MCP（Model Context Protocol）连接器：** 把 Claude 连接到外部服务和数据源。也就是提供“访问”。skill 则是说明如何使用这种访问的“方法知识”。帮助中心说两者经常一起使用。
- **插件（plugin）：** 在 Claude Code 和 Cowork 中，插件是把多个部件（skill、连接器、命令、子智能体）一起分发的包。OpenAI 的文档也做了类似的区分：skill 是编写格式，插件是分发方式。

简而言之，MCP 给智能体一双手，skill 教这双手本领，插件则把这些装在一个盒子里交付。

## 在哪里可以用？

截至 2026 年 10 月，按 Claude 的文档，skill 可用于 Claude 应用（claude.ai）、Claude Code，以及搭配代码执行工具的 Claude API。帮助中心指出，skill 在 Free、Pro、Max、Team 和 Enterprise 套餐中提供，并且需要开启代码执行功能。

一个重要的细节：自定义 skill 不会在各平台间同步。你上传到 claude.ai 的 skill 只属于你的账户。上传到 API 的 skill 会与整个工作区共享。在 Claude Code 中，则保存在个人目录（~/.claude/skills/）或项目文件夹（.claude/skills/）里。

还有安全这一面。由于 skill 可以执行代码，文档建议把它们“当作安装软件一样”对待，只使用来自可信来源的 skill。我们会在系列的最后一篇文章里专门讨论这一点。

在这一部分后面的文章里，我们会一步步教你写自己的 skill，并分类介绍真实存在、确实好用的 skill。

有什么事是你每天都在对 AI 一遍遍解释，让你不禁想“要是我只教一次就好了”的？
