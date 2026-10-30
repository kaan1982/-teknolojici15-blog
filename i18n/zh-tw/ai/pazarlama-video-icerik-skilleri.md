---
title: "行銷、影片與內容技能：創作者的工具箱"
excerpt: "Corey Haines 的 marketingskills 儲存庫、Anthropic 的行銷外掛、Remotion 與 HeyGen HyperFrames 技能。為內容與影片精選的真實清單。"
hook: "用程式碼做影片，用技能寫文案"
fact: "52 個技能"
factLabel: "marketingskills 儲存庫中的技能數量"
category: "人工智慧"
---
這個部落格背後每天也在製作短影片、封面和文字。所以這個類別對我們來說有點個人色彩：產生行銷、內容與影片的技能。這裡也是社群技能增加得最快的領域。我們只列出打開儲存庫、檢查過內容的範例。所有數字都以 2026 年 10 月底為準。

## marketingskills：52 個技能的行銷函式庫

轉換率優化機構 Conversion Factory 背後的 Corey Haines，其以 MIT 授權發布的 coreyhaines31/marketingskills 儲存庫，是這個領域中最完整的社群收藏之一。根據 README，它是為技術型行銷人員和創辦人準備的，專注於轉換率優化、文案撰寫、SEO、分析和成長工程等工作。它說明可與 Claude Code、OpenAI Codex、Cursor 以及其他支援 Agent Skills 標準的代理搭配運作。

儲存庫的 skills 資料夾中有 52 個技能。幾個例子：

- **copywriting：** 用來撰寫或改進首頁、著陸頁、定價頁等各種行銷頁面的文案。
- **seo-audit：** 用來稽核並診斷網站的 SEO 問題。
- **ai-seo：** 為人工智慧搜尋引擎最佳化內容，也就是讓內容被大型語言模型當作回答的來源引用。
- **emails 與 cold-email：** 用於電子郵件序列、自動化流程和 B2B 陌生開發電子郵件活動。
- **social：** 用於為 LinkedIn、X、Instagram、TikTok 和 Facebook 建立並規劃內容。

安裝方面，README 建議使用 npx skills add coreyhaines31/marketingskills 指令。也可以逐一選擇個別技能。

## Anthropic 的行銷外掛

Anthropic 的 anthropics/knowledge-work-plugins 儲存庫，彙整了依職業類別準備的外掛。它們是為 Claude Cowork 製作的，也與 Claude Code 相容。每個外掛都把該項工作的技能、連接器、斜線指令和子代理打包在一起。

行銷外掛中的技能有：brand-review（依品牌語調與風格指南審查草稿，並提出前後修改建議）、campaign-plan（以目標、受眾、訊息、通路策略與內容日曆產出活動簡報）、content-creation、draft-content、email-sequence、competitive-brief、performance-report 和 seo-audit。README 列出這個外掛可連接 Slack、Canva、Figma、HubSpot 和 Ahrefs 等工具。也就是說，在這裡技能提供的是「方法」，連接器提供的是「存取」。

> **你知道嗎？** 影片現在不再只能靠在時間軸上拖放來製作，也可以用程式碼產生，而技能正是在這一點上派上用場。Remotion 團隊為其以 React 為基礎的影片框架，發布了自己的官方技能集。HeyGen 則提供以「寫 HTML，渲染成影片」為構想的 HyperFrames，並附有給代理用的技能。

## 影片方面：Remotion 與 HyperFrames

| 套件 | 來源 | 提供什麼？ |
|---|---|---|
| remotion-dev/skills | Remotion 團隊（官方） | 12 個技能：建立影片、動畫規則、字幕、渲染、預覽 |
| heygen-com/hyperframes | HeyGen（Apache 2.0） | 把 HTML 轉成影片的框架所用的技能與現成區塊 |

**Remotion：** 根據 README，Remotion 維護一份 Agent Skills 清單，定義了在 Remotion 專案中工作的最佳實踐。這個集合中有建立新影片的 remotion-create、承載動畫與版面知識的 remotion-markup、用於字幕轉錄與動畫的 remotion-captions、用於匯出的 remotion-render，以及導向所有技能的 remotion-best-practices 等技能。安裝使用 npx skills add remotion-dev/skills。

**HyperFrames：** HeyGen 的儲存庫自我介紹為「寫 HTML，渲染影片，為代理而生」。根據 README，基本集合由 hyperframes（製作與編輯影片）、hyperframes-cli（專案骨架、預覽、渲染）、hyperframes-registry（約 450 個現成的轉場、標題、字幕與圖表區塊）和 media-use（音樂、音效、圖像、配音等媒體工作）等技能組成。總共有 7 個已發布的技能。

一個有趣的細節：Corey Haines 儲存庫中的影片技能，其說明也把 Remotion、HyperFrames 和 HeyGen 等名稱列為觸發詞。也就是說，這個行銷技能是被寫成一座通往影片技能的橋樑。

## 挑選時該注意什麼？

這個領域的技能多半來自社群或公司，更新得非常快。在安裝一個套件之前，問這三個問題會讓你輕鬆些：這個儲存庫是誰的，有在積極更新嗎？SKILL.md 裡有沒有連到外部網址或索取憑證的指示？你能不能只挑出真正需要的幾個技能來安裝？大多數安裝工具都允許選擇單一技能，而不是「全部安裝」，這既縮小了脈絡，也降低了風險。

在內容製作上，對你來說最大的時間小偷是哪一個：寫文案、準備視覺素材，還是剪輯影片？
