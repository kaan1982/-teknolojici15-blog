---
title: "마케팅, 영상, 콘텐츠 스킬: 제작자의 도구 가방"
excerpt: "Corey Haines의 marketingskills 저장소, Anthropic의 마케팅 플러그인, Remotion과 HeyGen HyperFrames 스킬. 콘텐츠와 영상을 위한 실제 추천 목록."
hook: "영상은 코드로, 글은 스킬로"
fact: "스킬 52개"
factLabel: "marketingskills 저장소의 스킬 수"
category: "인공지능"
---
이 블로그 뒤에서도 매일 짧은 영상과 커버, 글이 만들어집니다. 그래서 이 범주는 우리에게 조금 개인적입니다. 마케팅, 콘텐츠, 영상을 만드는 스킬입니다. 여기는 커뮤니티 스킬이 가장 빠르게 늘어나는 분야이기도 합니다. 우리는 저장소를 직접 열어 내용을 확인한 예시만 나열했습니다. 모든 수치는 2026년 10월 말 기준입니다.

## marketingskills: 52개 스킬의 마케팅 라이브러리

전환율 최적화 에이전시 Conversion Factory를 이끄는 Corey Haines의 MIT 라이선스 저장소 coreyhaines31/marketingskills는 이 분야에서 가장 포괄적인 커뮤니티 컬렉션 중 하나입니다. README에 따르면 기술 마케터와 창업자를 위해 만들어졌고, 전환율 최적화, 카피라이팅, SEO, 분석, 그로스 엔지니어링 같은 일에 초점을 맞춥니다. Claude Code, OpenAI Codex, Cursor 및 Agent Skills 표준을 지원하는 다른 에이전트와 작동한다고 밝힙니다.

저장소의 skills 폴더에는 스킬이 52개 있습니다. 몇 가지 예시입니다.

- **copywriting:** 홈페이지, 랜딩 페이지, 가격 페이지 등 모든 종류의 마케팅 페이지 문구를 쓰거나 개선할 때.
- **seo-audit:** 사이트의 SEO 문제를 점검하고 진단할 때.
- **ai-seo:** 콘텐츠를 AI 검색 엔진에 맞게 최적화할 때, 즉 대규모 언어 모델의 답변에서 출처로 인용되도록 할 때.
- **emails와 cold-email:** 이메일 시퀀스, 자동화 흐름, B2B 콜드 이메일 캠페인을 위해.
- **social:** LinkedIn, X, Instagram, TikTok, Facebook용 콘텐츠를 만들고 계획할 때.

설치는 README가 npx skills add coreyhaines31/marketingskills 명령을 권합니다. 스킬을 하나씩 고를 수도 있습니다.

## Anthropic의 마케팅 플러그인

Anthropic의 anthropics/knowledge-work-plugins 저장소는 직군별로 준비한 플러그인을 모아 둡니다. Claude Cowork용으로 만들었고 Claude Code와도 호환됩니다. 각 플러그인은 해당 업무를 위한 스킬, 커넥터, 슬래시 명령, 하위 에이전트를 한데 묶어 줍니다.

marketing 플러그인 안의 스킬은 다음과 같습니다. brand-review(초안을 브랜드 보이스와 스타일 가이드에 맞춰 점검하고 수정 전후를 제안), campaign-plan(목표, 타깃, 메시지, 채널 전략, 콘텐츠 캘린더가 담긴 캠페인 개요 작성), content-creation, draft-content, email-sequence, competitive-brief, performance-report, seo-audit입니다. README는 이 플러그인이 Slack, Canva, Figma, HubSpot, Ahrefs 같은 도구에 연결될 수 있다고 적어 두었습니다. 즉 여기서 스킬은 "방법"을, 커넥터는 "접근"을 제공합니다.

> **알고 있었나요?** 영상은 이제 타임라인에서 드래그 앤 드롭으로만 만드는 게 아니라 코드로도 만들 수 있고, 바로 여기서 스킬이 등장합니다. Remotion 팀은 React 기반 영상 프레임워크를 위한 자체 공식 스킬 세트를 공개합니다. HeyGen은 "HTML을 쓰고 영상을 렌더링한다"는 아이디어에 기반한 HyperFrames를 에이전트용 스킬과 함께 제공합니다.

## 영상용: Remotion과 HyperFrames

| 패키지 | 출처 | 제공하는 것 |
|---|---|---|
| remotion-dev/skills | Remotion 팀 (공식) | 스킬 12개: 영상 만들기, 애니메이션 규칙, 자막, 렌더, 미리보기 |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | HTML을 영상으로 바꾸는 프레임워크용 스킬과 기성 블록 |

**Remotion:** README에 따르면 Remotion은 Remotion 프로젝트에서 작업하는 모범 사례를 정의한 Agent Skills 목록을 관리합니다. 세트 안에는 새 영상을 만드는 remotion-create, 애니메이션과 배치 지식을 담은 remotion-markup, 자막 받아쓰기와 애니메이션용 remotion-captions, 내보내기용 remotion-render, 이 모두로 안내하는 remotion-best-practices 같은 스킬이 있습니다. 설치는 npx skills add remotion-dev/skills로 합니다.

**HyperFrames:** HeyGen의 저장소는 스스로를 "HTML을 쓰고, 영상을 렌더링한다, 에이전트를 위해 만들었다"라고 소개합니다. README에 따르면 기본 세트는 hyperframes(영상 제작과 편집), hyperframes-cli(프로젝트 뼈대, 미리보기, 렌더), hyperframes-registry(약 450개의 기성 전환, 제목, 자막, 그래픽 블록), media-use(음악, 효과음, 이미지, 내레이션 같은 미디어 작업) 스킬로 구성됩니다. 공개된 스킬은 모두 7개입니다.

흥미로운 점이 하나 있습니다. Corey Haines 저장소의 video 스킬 설명도 Remotion, HyperFrames, HeyGen 같은 이름을 트리거 단어로 나열합니다. 마케팅 스킬이 영상 스킬로 가는 다리 역할을 하도록 쓰인 셈입니다.

고를 때 무엇을 봐야 할까?

이 분야의 스킬 대부분은 커뮤니티나 기업에서 나오고 매우 빠르게 업데이트됩니다. 패키지를 설치하기 전에 세 가지를 물어보면 편합니다. 저장소는 누구 것이며 활발히 업데이트되고 있나요? SKILL.md 안에 외부 주소에 접속하거나 인증 정보를 요구하는 지침이 있나요? 정말 필요한 스킬 몇 개만 골라서 설치할 수 있나요? 대부분의 설치 도구는 "전부 설치" 대신 스킬을 하나씩 고르게 해 주며, 그러면 컨텍스트도 위험도 작아집니다.

콘텐츠 제작에서 여러분의 가장 큰 시간 도둑은 무엇인가요? 글쓰기인가요, 이미지 준비인가요, 영상 편집인가요?
