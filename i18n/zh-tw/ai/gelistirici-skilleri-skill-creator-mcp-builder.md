---
title: "開發者適用的技能：skill-creator、mcp-builder 等"
excerpt: "會寫技能的技能、能建立 MCP 伺服器的技能、帶來測試與除錯紀律的技能套件。為開發者精選且已查證的清單。"
hook: "有一個會寫技能的技能"
fact: "20 則查詢"
factLabel: "建議用於觸發測試的範例數量"
category: "人工智慧"
---
對開發軟體的人來說，技能有兩個有趣之處。第一，有一類「產生者」技能，可以幫你更快、更可衡量地撰寫自己的技能。第二，有一些套件能為代理帶來工程紀律（測試、規劃、除錯）。在這篇文章裡，我們兩者都談，而且只舉已確認存在的例子。

## skill-creator：寫技能的技能

Anthropic 官方 anthropics/skills 儲存庫中的 skill-creator，設計用來建立新技能、編輯並改善現有技能，以及衡量它們的表現。根據它的說明，它還負責執行評估（eval）、以變異數分析比較結果，以及把技能說明最佳化，讓它更容易被觸發。

工作流程描述得相當人性化：決定你要什麼、寫出草稿、準備幾則測試訊息、讓帶有技能的 Claude 用這些訊息執行、一起評估結果、重寫、重複。資料夾中有分別負責執行評估、產出比較報告和改善說明的腳本，另外還有一個用來視覺化檢視結果的「eval-viewer」。

agentskills.io 的說明最佳化指南也以這個技能為例。依該指南，skill-creator 把這個循環從頭到尾自動化：分割測試集、並行測量觸發率、與 Claude 一起提出說明的改進建議，並產出即時的 HTML 報告。

> **你知道嗎？** agentskills.io 建議的觸發測試用了大約 20 則範例訊息，每則執行 3 次。也就是說，嘗試一個說明就要 60 次執行。為了避免過度擬合（overfitting），大約 60% 的訊息用於改進，40% 則只用於驗證。該指南說，多半五輪就夠了。

## mcp-builder 與 claude-api：給建置整合的人

- **mcp-builder（官方）：** 開發 MCP 伺服器的指南，讓大型語言模型能透過設計良好的工具與外部服務對話。可使用 Python（FastMCP）或 Node/TypeScript（MCP SDK）。這個技能把流程分成四個階段：研究與規劃、實作、審查與測試、建立評估。資料夾中有各語言的參考文件和評估腳本。
- **claude-api（官方）：** Claude API 和 Anthropic SDK 的參考技能。涵蓋模型 ID、參數、串流（streaming）、工具使用、快取等主題，並包含許多程式語言各自的資料夾。根據 Claude 的文件，這個開放原始碼技能隨 Claude Code 一起提供。
- **webapp-testing（官方）：** 以 Playwright 測試本機網頁應用程式的工具組。對前端開發者來說，是我們在設計文章中也提過的實用輔助工具。

## 來自社群：用 Superpowers 建立工程紀律

在官方儲存庫之外，開發者之間討論最多的套件之一，是 Jesse Vincent 以 MIT 授權發布的 obra/superpowers 儲存庫。它自稱是程式碼代理的「完整軟體開發方法論」。截至 2026 年 10 月，儲存庫中有以下技能（精選）：

| 技能 | 何時啟動？ |
|---|---|
| brainstorming | 開始一項新功能或創意工作之前 |
| writing-plans | 為多步驟工作，在動程式碼之前撰寫計畫時 |
| test-driven-development | 實作期間：先寫失敗的測試，再寫最少的程式碼 |
| systematic-debugging | 遇到錯誤或失敗的測試時，在提出修正之前 |
| verification-before-completion | 在說「完成了」之前執行驗證指令 |

儲存庫的 README 除了 Claude Code，也為 Codex、Cursor、Gemini CLI 和 GitHub Copilot CLI 等許多代理提供安裝說明，並指出在 Claude Code 方面，已列入 Anthropic 的官方外掛市集。這是 Agent Skills 作為開放標準的實際結果：同一個技能可以在不同工具中運作。

## 其他平台也是同一個想法

OpenAI 的 ChatGPT 和 Codex 文件，同樣把技能描述為建立在「開放的 agent skills 標準」之上。截至 2026 年 10 月，文件中有兩個內建輔助工具特別突出：根據你描述的工作建立技能的 skill-creator（在 Codex 中以 $skill-creator 呼叫），以及從 openai/skills 儲存庫或其他儲存庫安裝現成技能的 skill-installer。Codex 從專案與使用者層級的 .agents/skills 資料夾讀取本機技能。

對開發者來說，最有價值的習慣或許是：把你每次重複的長篇說明、程式碼審查檢查清單或部署步驟，變成一個技能並放進專案儲存庫。在 Claude Code 中，放在 .claude/skills 資料夾的技能會隨儲存庫一起交給團隊。不過，別忘了閱讀你安裝的每個社群技能的腳本，因為這些技能可以在你的電腦上以你的權限執行程式碼。

在你的開發流程裡，哪一個步驟最讓你想說「要是有個技能就好了」：測試、程式碼審查，還是部署？
