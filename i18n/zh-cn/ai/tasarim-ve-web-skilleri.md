---
title: "设计与网页 skill：让界面不再有模板味"
excerpt: "frontend-design、web-artifacts-builder、canvas-design，以及 Vercel 的 web-design-guidelines skill。能改善智能体生成界面的真实 skill。"
hook: "AI 的设计为什么总是千篇一律？"
fact: "10 个主题"
factLabel: "theme-factory 里的现成主题数量"
category: "人工智能"
---
如果你让 AI 做过一个网页，多半会发现：结果能用，但总觉得眼熟。同样的紫色渐变，同样居中的标题，同样的卡片排布。大部分设计 skill 对付的就是这个问题：让模型做出有意识的设计决定，而不是采用“默认值”。

这篇文章里的每个 skill 我们都标明了来源。Anthropic 的官方仓库是 anthropics/skills，社区或公司的仓库另行标出。

## frontend-design：逃离默认值

官方仓库里的 frontend-design skill，描述很明确：在搭建新界面或重塑现有界面时，为“有意识的、有辨识度的视觉设计”提供指导。它在确定审美方向、字体排印，以及做出“读起来不像模板”的选择方面提供帮助。

skill 的正文让模型扮演一家设计工作室的设计负责人，并假定客户本来就会拒绝陈词滥调的建议，从这个前提开始工作。这也是编写好 skill 的一个技巧范例：与其堆砌信息，不如给模型一个明确的视角。

## 网页输出：web-artifacts-builder 和 webapp-testing

- **web-artifacts-builder（官方）：** 在 claude.ai 中，用 React、Tailwind CSS 和 shadcn/ui 等现代前端技术，生成需要状态管理或路由的多组件复杂 HTML 输出的工具集。它的描述还指出，不要用在简单的单文件 HTML 工作上。文件夹里有初始化项目和打包成单个文件的脚本。
- **webapp-testing（官方）：** 用 Playwright 测试本地 Web 应用的工具集。可用于验证前端功能、调试界面问题、截取屏幕截图和读取浏览器日志。设计完成后，“它真的能用吗？”这个问题的答案。

> **你知道吗？** 官方仓库里的 theme-factory skill 附带 10 套可应用于从幻灯片到 HTML 落地页的各种输出的现成主题。文件夹里主题文件的名字都很有启发性：“arctic-frost”“midnight-galaxy”“golden-hour”“tech-innovation”等。你需要的话，这个 skill 还能即时生成新的主题。

## 视觉艺术：canvas-design、algorithmic-art、slack-gif-creator

Anthropic 的仓库里还有三个代表“创意”一面的 skill：

- **canvas-design：** 采用一种“设计哲学”的方式，生成海报、艺术作品或静态设计，输出为 .png 和 .pdf。文件夹里有 80 多个字体文件。它的描述明确要求不得复制现有艺术家的作品。
- **algorithmic-art：** 用 p5.js，借助带种子的随机性（seeded randomness）和交互参数来创作生成艺术。为流场、粒子系统这类需求而设计。
- **slack-gif-creator：** 提供为 Slack 优化的动图 GIF 的约束、验证工具和动画创意。适用于“给我做一个 X 做 Y 的 Slack GIF”这样的请求。

## 来自社区：Vercel 的界面与 React skill

在官方仓库之外，最知名的以设计为重点的套件之一，是 Vercel 的 vercel-labs/agent-skills 仓库。截至 2026 年 10 月，仓库里有这些：

| Skill | 做什么？ |
|---|---|
| web-design-guidelines | 根据涵盖无障碍、性能和用户体验的 100 多条规则审查界面代码 |
| vercel-react-best-practices | Vercel 工程团队的 React 和 Next.js 性能规则（8 个类别中的 40 多条） |
| vercel-composition-patterns | 可扩展的 React 组件组合模式 |
| vercel-react-view-transitions | 借助 React 的 View Transition API 实现流畅的过渡动画 |
| vercel-react-native-skills | 面向 React Native 和 Expo 的性能与架构规则 |

这些 skill 并不绑定某一个工具。Vercel 的仓库建议用 npx skills add vercel-labs/agent-skills 命令安装，这些 skill 可以在支持 Agent Skills 标准的不同智能体中使用。

## 什么时候用哪个？

一个实用的顺序可以是：用 frontend-design 确定设计方向，用 theme-factory 或你自己的品牌 skill 固定颜色和字体，用 web-artifacts-builder 生成输出，然后用 web-design-guidelines 审查，再用 webapp-testing 在浏览器里试一试。每一个都是独立的专长，而且由于渐进式加载，同时装着它们全部也不会撑大上下文。

提醒一下：其中一些 skill（例如 web-artifacts-builder）会运行脚本。Claude 的文档建议把 skill 当作安装软件一样对待，只从你信任的来源安装。安装任何来自官方仓库之外的套件之前，瞄一眼它的 SKILL.md 和脚本是个好习惯。

你觉得 AI 做出的设计会随着时间变得更多样，还是当大家都用同样的 skill 时，又会诞生新的“千篇一律”？
