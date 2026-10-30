---
title: "文档 skill：教智能体处理 Word、Excel、PowerPoint 和 PDF"
excerpt: "Anthropic 的 docx、xlsx、pptx 和 pdf skill 能做什么，在哪里运行？真正适用于生成文档的官方及辅助 skill。"
hook: "报告、表格、演示文稿：一个 skill 全搞定"
fact: "4 种文档"
factLabel: "开箱即用的文档 skill 数量"
category: "人工智能"
---
对 AI 说“帮我写一份报告”很容易。难的是让这份报告变成一个真能打开、格式不乱、公式能运行的 Word 或 Excel 文件。skill 的第一个、或许也是最常用的类别，说的正是这个：办公文档。这篇文章里，我们只谈已经确认存在的 skill。

## 四块基石：docx、xlsx、pptx、pdf

按 Claude 的文档，Anthropic 提供四个预置（pre-built）的文档 skill。它们在 Claude 文件创建功能的背后运行，Anthropic 在 anthropics/skills 这个 GitHub 仓库里发布了源代码。

| Skill | 做什么？（来自官方描述） |
|---|---|
| docx | 创建、读取、编辑 Word 文档，包括格式和模板 |
| xlsx | 打开、编辑电子表格，添加公式和图表，清理杂乱的数据 |
| pptx | 创建演示文稿，编辑幻灯片，读取并解析 .pptx 内容 |
| pdf | 提取文本和表格，合并、拆分 PDF，填写表单，添加水印 |

仓库里的描述写得相当“执着”。例如 pptx skill 的描述说，只要 .pptx 文件“以任何方式”涉及输入或输出，就应使用它。这是我们上一篇文章里讲的“描述决定触发”规则的一个官方范例。

## 在哪里可以使用？

截至 2026 年 10 月，按 Claude 的文档，这四个 skill 在 claude.ai 创建文档时会自动起作用，在 Claude API 里也可以作为预置 skill 调用。在 Claude Code 中，预置的文档 skill 并不内置。不过，anthropics/skills 仓库可以作为 Claude Code 的插件市场添加，并可安装 document-skills 包。按仓库里的说明，先用 /plugin marketplace add anthropics/skills 命令添加市场，然后安装 document-skills@anthropic-agent-skills。

在许可证方面有一点区别。仓库里的许多 skill 是 Apache 2.0 许可的开源项目。但四个文档 skill 是以“非开源，但源码可见”（source-available）的方式分享的。也就是说，你可以查看代码来学习，但在自己的产品里自由再分发之前，需要读一读许可证文件。

> **你知道吗？** pdf skill 是渐进式加载的教科书式范例。据 Anthropic 的工程文章，填写表单的指令被从主 SKILL.md 中取出，搬到了单独的 forms.md 文件里。Claude 只有在真正填表时才会读取这个文件。如今在仓库的 pdf 文件夹里，既有 forms.md，也有 reference.md，还有一个 scripts 文件夹。

## 文档旁边的帮手

文档生成不止于文件格式。在 anthropics/skills 仓库里，还有其他专注于内容方面的官方示例：

- **doc-coauthoring：** 为共同撰写技术规格、提案、决策文档等结构化文本，提供了一套分步骤的工作流。包含传递背景、迭代修改和验证几个阶段。
- **internal-comms：** 汇集了帮助以公司偏好的格式撰写状态报告、管理层更新、公司通讯、常见问题等内部沟通文本的资源。文件夹里还有示例文本。
- **brand-guidelines：** 把 Anthropic 官方的品牌色和字体应用到输出上。它真正的价值在于，展示了你如何为自己的品牌建立类似的东西。
- **theme-factory：** 包含 10 套可应用于幻灯片、文档、报告或 HTML 页面的现成配色和字体主题，你需要时它还能即时生成新主题。

帮助中心还提到了 Notion、Figma 和 Atlassian 等合作伙伴，他们准备的 skill 可与自己的 MCP 连接器配合使用。这些在使用生成文档的工具（例如 Notion 页面）时很有用。

## 现实中怎么用？

最高效的用法，是把预置的文档 skill 与你自己的小 skill 组合起来。比如，xlsx skill 知道如何正确生成 Excel，但不知道你们公司的月度销售表里该有哪些列。如果你写一个说明这一点的简短 skill，两个 skill 配合起来，就能得到既格式正确、又符合你自己标准的文件。

有两点需要你记住。第一，anthropics/skills 仓库明确写着，这些 skill 是“用于演示和教学”的，Claude 自己的行为可能与这里的实现不同。第二，文档 skill 需要代码执行环境。据帮助中心，skill 要运行，需要开启代码执行功能。

下一篇我们转向屏幕这一侧：生成设计、前端和网页输出的 skill。

你在准备哪种文档时最浪费时间：表格、演示文稿，还是报告？
