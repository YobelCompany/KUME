# KUME

경력 단절 여성의 재도약을 함께하는 KUME 홈페이지.
Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## 로컬 개발

```bash
npm install
cp .env.example .env.local   # 필요한 값을 채워 넣으세요
npm run dev
```

브라우저에서 http://localhost:3000 접속.

## 스크립트

- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드
- `npm run start` — 프로덕션 서버 실행 (빌드 후)
- `npm run lint` — ESLint 검사

## 프로젝트 구조

```
app/
  layout.tsx           # 루트 레이아웃, 메타데이터
  page.tsx             # 홈페이지 (모든 섹션 조립)
  globals.css          # Tailwind 진입점, 전역 스타일
  icon.svg             # 파비콘 (KUME 심볼)
  opengraph-image.tsx  # SNS 공유 시 표시되는 OG 이미지 (동적 생성)
  api/
    earlybird/route.ts # 얼리버드 폼 → Google Form/Airtable 저장

components/
  Header.tsx  Hero.tsx  About.tsx  Services.tsx  Agency.tsx
  WhyUs.tsx   Story.tsx  Earlybird.tsx  EarlybirdForm.tsx
  Contact.tsx Footer.tsx Logo.tsx
```

## 얼리버드 폼 백엔드 연동

`.env.local`에 아래 중 **한 세트**만 채우면 됩니다.
설정하지 않아도 홈페이지는 정상 동작하며,
얼리버드 폼은 사용자의 메일 앱을 여는 mailto 폴백으로 안내됩니다.

### 옵션 A · Google Form (가장 쉬움)

1. Google Forms에서 새 폼 생성. 필드: `이름`, `이메일`, `이야기(선택)`
2. 폼 상단 &ldquo;미리보기(👁)&rdquo; → 브라우저 개발자 도구(F12) 열기
3. 각 `<input>`의 `name` 속성 확인 — `entry.1234567890` 형태
4. `<form>`의 `action` 속성 확인 —
   `https://docs.google.com/forms/d/e/{FORM_ID}/formResponse`
5. `.env.local`에 아래처럼 입력:

```env
GOOGLE_FORM_ACTION_URL="https://docs.google.com/forms/d/e/FORM_ID/formResponse"
GOOGLE_FORM_NAME_ENTRY="entry.1111111111"
GOOGLE_FORM_EMAIL_ENTRY="entry.2222222222"
GOOGLE_FORM_MESSAGE_ENTRY="entry.3333333333"
```

### 옵션 B · Airtable

1. https://airtable.com/create/tokens 에서 Personal Access Token 발급
   Scopes: `data.records:write` · Access: 해당 base
2. Base ID: base URL의 `appXXXXXXXXXXXXXX`
3. Table name: 예) `Earlybird`
4. 필드: `Name`, `Email`, `Message` (다른 이름을 쓰면 FIELD_* 변수로 지정)
5. `.env.local`:

```env
AIRTABLE_API_KEY="patXXXXXXXXXXXXXX"
AIRTABLE_BASE_ID="appXXXXXXXXXXXXXX"
AIRTABLE_TABLE_NAME="Earlybird"
```

두 세트가 모두 있으면 Google Form이 우선입니다.

## 배포

- [Vercel](https://vercel.com/) 배포 권장 (Next.js 만든 곳)
- 환경변수는 Vercel 프로젝트 설정 → Environment Variables에 추가

## 브랜드 자산

- **로고 심볼**: 일어나 서 있는 여성의 부드러운 실루엣 (`components/Logo.tsx`)
- **브랜드 컬러**: 따뜻한 코럴/블러시 톤 — `brand.500` `#d16c44`
- **서체**: 명조체 이탤릭 워드마크 (Nanum Myeongjo 계열)
- **이름의 뿌리**: 탈리다 쿰(Talitha koum, 아람어) — &ldquo;여자여, 일어나라&rdquo;
