---
title: "디자인과 웹 스킬: 템플릿 냄새가 나지 않는 인터페이스를 위해"
excerpt: "frontend-design, web-artifacts-builder, canvas-design, 그리고 Vercel의 web-design-guidelines 스킬. 에이전트가 만든 인터페이스를 개선해 주는 실제 스킬들."
hook: "AI 디자인은 왜 늘 똑같을까?"
fact: "테마 10개"
factLabel: "theme-factory의 기성 테마 수"
category: "인공지능"
---
AI에게 웹 페이지를 만들게 해 본 적이 있다면 아마 이걸 눈치챘을 겁니다. 결과는 작동하는데 어딘가 낯이 익습니다. 같은 보라색 그라데이션, 같은 가운데 정렬 제목, 같은 카드 배열. 디자인 스킬의 상당수는 바로 이 문제와 씨름합니다. 모델이 "기본값"이 아니라 의식적인 디자인 결정을 내리게 하는 것입니다.

이 글의 모든 스킬은 출처를 밝혔습니다. Anthropic의 공식 저장소는 anthropics/skills이고, 커뮤니티나 기업 저장소는 따로 표시했습니다.

## frontend-design: 기본값에서 벗어나기

공식 저장소의 frontend-design 스킬 설명은 명확합니다. 새 인터페이스를 만들거나 기존 인터페이스를 다시 다듬을 때 "의식적이고 차별화된 시각 디자인"을 위한 안내를 제공합니다. 미학적 방향, 타이포그래피, "템플릿처럼 읽히지 않는" 선택을 하도록 돕습니다.

스킬 본문은 모델을 디자인 스튜디오의 디자인 리드 역할에 놓고, 고객이 이미 뻔한 제안을 거절했다고 가정하며 작업을 시작하게 합니다. 이는 좋은 스킬 작성 기법의 예이기도 합니다. 정보를 쌓아 두기보다 모델에게 분명한 관점을 주는 것입니다.

## 웹 결과물: web-artifacts-builder와 webapp-testing

- **web-artifacts-builder (공식):** claude.ai에서 React, Tailwind CSS, shadcn/ui 같은 현대적인 프런트엔드 기술로, 여러 컴포넌트와 상태 관리나 라우팅이 필요한 복잡한 HTML 결과물을 만드는 도구 모음입니다. 설명은 단순한 단일 파일 HTML 작업에는 쓰지 말라고도 말합니다. 폴더에는 프로젝트를 초기화하고 한 파일로 묶는 스크립트가 있습니다.
- **webapp-testing (공식):** 로컬 웹 앱을 Playwright로 테스트하는 도구 모음입니다. 프런트엔드 기능 검증, UI 버그 디버깅, 스크린샷 촬영, 브라우저 로그 읽기에 쓰입니다. 디자인을 마친 뒤 "정말 작동하나?"라는 질문에 대한 답입니다.

> **알고 있었나요?** 공식 저장소의 theme-factory 스킬은 슬라이드부터 HTML 랜딩 페이지까지 어떤 결과물에도 적용할 수 있는 기성 테마 10가지를 제공합니다. 폴더의 테마 파일 이름부터 영감을 줍니다. "arctic-frost", "midnight-galaxy", "golden-hour", "tech-innovation" 같은 것들입니다. 원하면 스킬이 즉석에서 새 테마도 만들어 줍니다.

## 시각 예술: canvas-design, algorithmic-art, slack-gif-creator

Anthropic 저장소에는 "창작" 쪽을 대표하는 스킬이 세 개 더 있습니다.

- **canvas-design:** 포스터, 예술 작품, 정적 디자인을 .png와 .pdf로 만들기 위해 "디자인 철학" 접근을 씁니다. 폴더에는 글꼴 파일이 80개가 넘게 들어 있습니다. 설명은 기존 예술가의 작업을 베끼지 말라고 명확히 조건을 답니다.
- **algorithmic-art:** p5.js로 시드 기반 무작위성(seeded randomness)과 인터랙티브 매개변수를 이용한 생성 예술을 만듭니다. 플로 필드, 파티클 시스템 같은 요청을 위해 설계되었습니다.
- **slack-gif-creator:** Slack에 최적화된 애니메이션 GIF를 만들기 위한 제약 조건, 검증 도구, 애니메이션 아이디어를 제공합니다. "X가 Y를 하는 Slack GIF 만들어 줘" 같은 요청용입니다.

## 커뮤니티에서: Vercel의 인터페이스와 React 스킬

공식 저장소 밖에서 가장 잘 알려진 디자인 중심 패키지 중 하나는 Vercel의 vercel-labs/agent-skills 저장소입니다. 2026년 10월 기준 저장소에는 다음이 있습니다.

| 스킬 | 하는 일 |
|---|---|
| web-design-guidelines | 접근성, 성능, 사용자 경험을 아우르는 100개 이상의 규칙으로 인터페이스 코드를 점검 |
| vercel-react-best-practices | Vercel 엔지니어링의 React와 Next.js 성능 규칙 (8개 범주에 40개 이상) |
| vercel-composition-patterns | 확장 가능한 React 컴포넌트 합성 패턴 |
| vercel-react-view-transitions | React의 View Transition API를 이용한 부드러운 전환 애니메이션 |
| vercel-react-native-skills | React Native와 Expo의 성능 및 아키텍처 규칙 |

이 스킬들은 특정 도구에 묶여 있지 않습니다. Vercel의 저장소는 npx skills add vercel-labs/agent-skills 명령으로 설치하라고 안내하며, 스킬은 Agent Skills 표준을 지원하는 여러 에이전트에서 쓸 수 있습니다.

## 무엇을 언제 쓸까?

실용적인 순서는 이럴 수 있습니다. frontend-design으로 디자인 방향을 정하고, 색상과 글꼴은 theme-factory나 내 브랜드 스킬로 고정하고, web-artifacts-builder로 결과물을 만든 다음, web-design-guidelines로 점검하고 webapp-testing으로 브라우저에서 시험합니다. 각각이 별개의 전문 분야이고, 단계적 로딩 덕분에 전부 동시에 설치해 두어도 컨텍스트가 부풀지 않습니다.

한 가지 경고. 이 스킬 중 일부(예: web-artifacts-builder)는 스크립트를 실행합니다. Claude 문서는 스킬을 소프트웨어를 설치하듯 다루고 믿을 수 있는 출처에서만 설치하라고 권합니다. 공식 저장소 밖에서 온 패키지는 설치 전에 SKILL.md와 스크립트를 훑어보는 것이 좋은 습관입니다.

AI로 만드는 디자인은 시간이 지나면 더 다양해질까요, 아니면 모두가 같은 스킬을 쓰면서 새로운 "획일성"이 생길까요?
