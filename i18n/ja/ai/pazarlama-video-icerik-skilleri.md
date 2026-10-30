---
title: "マーケティング・動画・コンテンツのスキル: 作り手の道具箱"
excerpt: "Corey Hainesのmarketingskillsリポジトリ、Anthropicのマーケティングプラグイン、RemotionとHeyGen HyperFramesのスキル。コンテンツと動画のための実在する厳選リストです。"
hook: "動画はコードで、文章はスキルで"
fact: "52スキル"
factLabel: "marketingskillsリポジトリのスキル数"
category: "AI"
---
このブログの裏側でも、毎日短い動画、カバー画像、文章が作られています。だからこのカテゴリは、私たちにとって少し個人的です。マーケティング、コンテンツ、動画を作るスキルのことです。ここはコミュニティスキルがいちばん速く増えている分野でもあります。私たちは、リポジトリを開いて中身を確認した例だけを載せました。数字はすべて2026年10月末時点のものです。

## marketingskills: 52スキルのマーケティングライブラリ

コンバージョン最適化の代理店Conversion Factoryの背後にいるCorey Hainesさんの、MITライセンスのcoreyhaines31/marketingskillsリポジトリは、この分野で最も包括的なコミュニティコレクションの1つです。READMEによれば、技術志向のマーケターや創業者向けに作られていて、コンバージョン最適化、コピーライティング、SEO、アナリティクス、グロースエンジニアリングといった仕事に焦点を当てています。Claude Code、OpenAI Codex、Cursor、そしてAgent Skills標準をサポートする他のエージェントと動くと述べています。

リポジトリのskillsフォルダには52のスキルがあります。いくつか例を挙げます。

- **copywriting:** ホームページ、ランディングページ、料金ページなど、あらゆるマーケティングページの文章を書いたり改善したりするためのもの。
- **seo-audit:** サイトのSEO上の問題を監査し、診断するためのもの。
- **ai-seo:** コンテンツをAI検索エンジン向けに最適化する、つまり大規模言語モデルの回答で出典として示されるようにするためのもの。
- **emailsとcold-email:** メールシーケンス、自動フロー、BtoBのコールドメールキャンペーンのためのもの。
- **social:** LinkedIn、X、Instagram、TikTok、Facebook向けのコンテンツを作り、計画するためのもの。

導入には、READMEがnpx skills add coreyhaines31/marketingskillsコマンドを勧めています。スキルを1つずつ選ぶこともできます。

## Anthropicのマーケティングプラグイン

Anthropicのanthropics/knowledge-work-plugins リポジトリは、職種別に用意されたプラグインを集めています。これらはClaude Cowork向けに作られていて、Claude Codeとも互換性があります。各プラグインは、その仕事のためのスキル、コネクタ、スラッシュコマンド、サブエージェントを1つにまとめています。

marketingプラグインに含まれるスキルは次のとおりです。brand-review(下書きをブランドの声やスタイルガイドに照らして点検し、修正前後を提案する)、campaign-plan(目標、オーディエンス、メッセージ、チャネル戦略、コンテンツカレンダーを含むキャンペーン概要を出す)、content-creation、draft-content、email-sequence、competitive-brief、performance-report、seo-audit。READMEは、このプラグインがSlack、Canva、Figma、HubSpot、Ahrefsなどのツールにつなげられると記しています。つまりここでは、スキルが「やり方」を、コネクタが「アクセス」を担います。

> **知っていましたか?** 動画は、タイムライン上のドラッグ&ドロップだけでなく、コードでも作れるようになりました。スキルが活躍するのはまさにここです。Remotionチームは、Reactベースの動画フレームワーク用に、公式のスキルセットを公開しています。HeyGenは「HTMLを書いて、動画をレンダリングする」という発想のHyperFramesを、エージェント用のスキルと一緒に提供しています。

## 動画のために: RemotionとHyperFrames

| パッケージ | 提供元 | 何を提供する? |
|---|---|---|
| remotion-dev/skills | Remotionチーム(公式) | 12スキル: 動画の作成、アニメーションのルール、字幕、レンダリング、プレビュー |
| heygen-com/hyperframes | HeyGen(Apache 2.0) | HTMLを動画に変えるフレームワーク用のスキルと既成ブロック |

**Remotion:** READMEによれば、RemotionはRemotionプロジェクトで作業する際のベストプラクティスを定めたAgent Skillsのリストを維持しています。セットには、新しい動画を作るremotion-create、アニメーションとレイアウトの知識を持つremotion-markup、字幕の書き起こしとアニメーション用のremotion-captions、書き出し用のremotion-render、そのすべてへ案内するremotion-best-practicesなどのスキルがあります。導入はnpx skills add remotion-dev/skillsで行います。

**HyperFrames:** HeyGenのリポジトリは、自らを「HTMLを書いて、動画をレンダリング、エージェントのために作られた」と紹介しています。READMEによれば、基本セットは、hyperframes(動画の作成と編集)、hyperframes-cli(プロジェクトの骨組み、プレビュー、レンダリング)、hyperframes-registry(約450の既成のトランジション、タイトル、字幕、グラフィックのブロック)、media-use(音楽、効果音、画像、ナレーションなどのメディア作業)のスキルでできています。公開されているスキルは合計7つです。

面白い点が1つあります。Corey Hainesさんのリポジトリにあるvideoスキルの説明も、Remotion、HyperFrames、HeyGenといった名前を起動キーワードとして挙げているのです。つまり、マーケティングのスキルが、動画スキルへの橋渡しとして働くように書かれています。

## 選ぶときは何を見る?

この分野のスキルの多くはコミュニティや企業によるもので、更新がとても速いのが特徴です。パッケージを導入する前に、次の3つの質問をすると楽になります。リポジトリは誰のもので、活発に更新されているか。SKILL.mdの中に、外部アドレスにつなぐ指示や認証情報を求める指示はないか。ほんとうに必要な数個のスキルだけを選んで導入できるか。多くの導入ツールは「全部入れる」の代わりに1つずつ選べるようになっていて、これはコンテキストとリスクの両方を小さくします。

コンテンツ制作で、あなたにとっていちばんの時間泥棒はどれですか。文章を書くこと、ビジュアルを用意すること、それとも動画の編集ですか?
