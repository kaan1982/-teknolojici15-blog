---
title: "設計與網頁技能：打造沒有範本味的介面"
excerpt: "frontend-design、web-artifacts-builder、canvas-design，以及 Vercel 的 web-design-guidelines 技能。真正能改善代理所產生介面的技能。"
hook: "為什麼人工智慧的設計總是一個樣？"
fact: "10 種主題"
factLabel: "theme-factory 中的現成主題數量"
category: "人工智慧"
---
如果你請人工智慧做過網頁，大概注意到：結果能用，但似曾相識。一樣的紫色漸層、一樣置中的標題、一樣的卡片排列。設計技能大部分都在處理這個問題：讓模型做出有意識的設計決定，而不是照「預設值」。

這篇文章中的每個技能我們都標明了來源。Anthropic 官方儲存庫是 anthropics/skills，社群或公司的儲存庫則另外標示。

## frontend-design：避開預設值

官方儲存庫中 frontend-design 技能的說明很明確：在建立新介面或重塑既有介面時，為「有意識、有辨識度的視覺設計」提供指引。它協助在美學方向、字體排印，以及「讀起來不像範本」的選擇上做決定。

這個技能的內文把模型放進設計工作室設計主管的角色，並假設客戶本來就會拒絕老套的建議，然後才開始工作。這也是撰寫好技能的一種技巧範例：與其堆砌資訊，不如給模型一個清晰的觀點。

## 網頁輸出：web-artifacts-builder 與 webapp-testing

- **web-artifacts-builder（官方）：** 在 claude.ai 中，以 React、Tailwind CSS 和 shadcn/ui 等現代前端技術，產生多元件、需要狀態管理或路由的複雜 HTML 輸出的工具組。它的說明也指出，簡單的單檔 HTML 工作不該使用它。資料夾中有啟動專案和打包成單一檔案的腳本。
- **webapp-testing（官方）：** 以 Playwright 測試本機網頁應用程式的工具組。可用來驗證前端功能、除錯介面問題、擷取螢幕畫面和讀取瀏覽器日誌。這是設計完成後，「它真的能用嗎？」這個問題的答案。

> **你知道嗎？** 官方儲存庫中的 theme-factory 技能，附有 10 組可套用到從簡報到 HTML 著陸頁的各種輸出的現成主題。資料夾中主題檔案的名稱本身就很有啟發性：「arctic-frost」、「midnight-galaxy」、「golden-hour」、「tech-innovation」等等。如果你想要，這個技能還能即時產生新主題。

## 視覺藝術：canvas-design、algorithmic-art、slack-gif-creator

Anthropic 的儲存庫中還有三個代表「創意」面向的技能：

- **canvas-design：** 採用「設計哲學」的做法，製作海報、藝術作品或靜態設計，輸出為 .png 和 .pdf。資料夾中有超過 80 個字型檔案。它的說明明確要求不得複製現有藝術家的作品。
- **algorithmic-art：** 以 p5.js，搭配種子式隨機（seeded randomness）和互動式參數，製作生成式藝術。針對流場、粒子系統等需求而設計。
- **slack-gif-creator：** 提供針對 Slack 最佳化的動態 GIF 製作所需的限制、驗證工具和動畫構想。適用於「幫我做一個 X 在做 Y 的 Slack GIF」這類需求。

## 來自社群：Vercel 的介面與 React 技能

在官方儲存庫之外，最知名的設計導向套件之一，是 Vercel 的 vercel-labs/agent-skills 儲存庫。截至 2026 年 10 月，儲存庫中有以下內容：

| 技能 | 做什麼？ |
|---|---|
| web-design-guidelines | 依涵蓋無障礙、效能與使用者體驗的 100 多條規則，稽核介面程式碼 |
| vercel-react-best-practices | Vercel 工程團隊的 React 與 Next.js 效能規則（8 個類別、40 多條） |
| vercel-composition-patterns | 可擴充的 React 元件組合模式 |
| vercel-react-view-transitions | 利用 React 的 View Transition API 製作流暢的轉場動畫 |
| vercel-react-native-skills | 針對 React Native 與 Expo 的效能與架構規則 |

這些技能不綁定單一工具。Vercel 的儲存庫建議以 npx skills add vercel-labs/agent-skills 指令安裝，這些技能可以在支援 Agent Skills 標準的不同代理中使用。

## 什麼時候該用哪個？

一個實用的順序可以是：用 frontend-design 決定設計方向，用 theme-factory 或你自己的品牌技能固定顏色與字型，用 web-artifacts-builder 產出成品，接著用 web-design-guidelines 稽核，再用 webapp-testing 在瀏覽器中試一試。每一個都是各自的專長，而且得益於漸進式載入，同時安裝它們全部也不會讓脈絡膨脹。

提醒一句：這些技能中有些（例如 web-artifacts-builder）會執行腳本。Claude 的文件建議像安裝軟體一樣對待技能，並且只從你信任的來源安裝。在安裝任何來自官方儲存庫以外的套件之前，先瀏覽它的 SKILL.md 和腳本，是個好習慣。

你覺得，用人工智慧做出的設計，會隨時間變得更多元，還是大家用著同樣的技能，會誕生一種新的「千篇一律」？
