---
title: "面向开发者的 skill：skill-creator、mcp-builder 等"
excerpt: "会写 skill 的 skill、搭建 MCP 服务器的 skill、带来测试和调试纪律的 skill 套件。为开发者精选并核实过的清单。"
hook: "有一个会写 skill 的 skill"
fact: "20 条查询"
factLabel: "触发测试的建议样本数"
category: "人工智能"
---
对开发软件的人来说，skill 有两方面的看点。第一，有帮你更快、可衡量地编写自己 skill 的“生产者”skill。第二，有给智能体带来工程纪律（测试、规划、调试）的套件。这篇文章里，我们两者都谈，只用已确认存在的例子。

## skill-creator：会写 skill 的 skill

Anthropic 官方 anthropics/skills 仓库里的 skill-creator，是为创建新 skill、编辑改进现有 skill 并衡量其表现而设计的。据它的描述，它还承担运行评估（eval）、用方差分析比较结果，以及优化 skill 描述使其更容易被触发的工作。

它的工作流描述得相当人性化：决定要什么，写草稿，准备几条测试消息，用这些消息运行带 skill 的 Claude，一起评估结果，重写，重复。文件夹里有运行评估、生成对比报告和改进描述的独立脚本，还有一个用来直观查看结果的“eval-viewer”。

agentskills.io 的描述优化指南也以这个 skill 为例。按指南，skill-creator 把这个循环从头到尾自动化了：拆分测试集，并行衡量触发率，让 Claude 提出描述的改进建议，并生成实时的 HTML 报告。

> **你知道吗？** agentskills.io 建议的触发测试使用约 20 条示例消息，每条运行 3 次。也就是说，试一个描述就是 60 次运行。为防止过拟合（overfitting），约 60% 的消息用于改进，40% 只用于验证。指南说，多数情况下五轮就够了。

## mcp-builder 和 claude-api：给搭建集成的人

- **mcp-builder（官方）：** 开发 MCP 服务器的指南，让大语言模型通过设计良好的工具与外部服务对话。可使用 Python（FastMCP）或 Node/TypeScript（MCP SDK）。skill 把过程分成四个阶段：研究和规划、实现、审查和测试、创建评估。文件夹里有按语言区分的参考文档和评估脚本。
- **claude-api（官方）：** 面向 Claude API 和 Anthropic SDK 的参考 skill。涵盖模型标识、参数、流式输出（streaming）、工具使用、缓存等主题，并含有多种编程语言的独立文件夹。按 Claude 的文档，这个开源 skill 随 Claude Code 一起提供。
- **webapp-testing（官方）：** 用 Playwright 测试本地 Web 应用的工具集。对于前端开发者，这是我们在设计文章里也提到的一个实用帮手。

## 来自社区：用 Superpowers 带来工程纪律

在官方仓库之外，开发者中讨论最多的套件之一，是 Jesse Vincent 的 MIT 许可仓库 obra/superpowers。它把自己定义为面向编码智能体的“完整软件开发方法论”。截至 2026 年 10 月，仓库里有以下 skill（精选）：

| Skill | 何时起作用？ |
|---|---|
| brainstorming | 开始一个新功能或创意工作之前 |
| writing-plans | 为多步骤工作，在动代码之前编写计划时 |
| test-driven-development | 实现过程中：先写失败的测试，再写最少的代码 |
| systematic-debugging | 遇到错误或失败的测试时，在提出修复之前 |
| verification-before-completion | 在说“完成”之前，运行验证命令 |

仓库 README 除了 Claude Code，还为 Codex、Cursor、Gemini CLI 和 GitHub Copilot CLI 等多个智能体提供了安装说明，并指出它在 Claude Code 方面已列入 Anthropic 的官方插件市场。这就是 Agent Skills 成为开放标准的实际结果：同一个 skill 可以在不同的工具里运行。

## 其他平台也是同一个思路

OpenAI 的 ChatGPT 和 Codex 文档也把 skill 描述为建立在“开放的 agent skills 标准”之上。截至 2026 年 10 月，文档里突出了两个内置的帮手：根据你描述的工作创建 skill 的 skill-creator（在 Codex 中用 $skill-creator 调用），以及从 openai/skills 仓库或其他仓库安装现成 skill 的 skill-installer。Codex 在项目和用户层面，从 .agents/skills 文件夹读取本地 skill。

对开发者来说，最有价值的习惯或许是：把每一段你反复讲的冗长说明、代码审查清单或部署步骤，变成一个 skill，放进项目的仓库里。在 Claude Code 中，放在 .claude/skills 文件夹里的 skill 会随仓库一起传给团队。但别忘了读你所安装的每个社区 skill 的脚本，因为这些 skill 可以在你的电脑上以你的权限运行代码。

在你的开发流程中，哪一步最让你想说“要是有个 skill 就好了”：测试、代码审查，还是部署？
