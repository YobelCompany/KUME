import { ImageResponse } from "next/og";

// SNS/카카오톡 공유 시 표시되는 대표 이미지
export const alt = "KUME — 다시 시작하는 당신의 성장 파트너";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #fdf6f2 0%, #faeae0 55%, #f3cfbb 100%)",
          padding: "80px",
          fontFamily:
            'Georgia, "Nanum Myeongjo", "Noto Serif KR", serif',
        }}
      >
        {/* Refined K monogram in warm circle */}
        <svg
          width="180"
          height="180"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" fill="#bd5732" />
          <g fill="#fdf6f2">
            <rect x="30" y="26" width="8" height="48" />
            <rect x="24" y="26" width="20" height="3" />
            <rect x="24" y="71" width="20" height="3" />
            <path d="M38 51 L60 26 L68 26 L46 51 Z" />
            <path d="M46 51 L68 74 L60 74 L38 51 Z" />
            <rect x="58" y="26" width="12" height="3" />
            <rect x="58" y="71" width="12" height="3" />
          </g>
        </svg>

        {/* Wordmark — 정체 대문자 + 트래킹 */}
        <div
          style={{
            display: "flex",
            fontSize: 110,
            fontWeight: 800,
            color: "#1c1917",
            marginTop: 32,
            letterSpacing: "0.14em",
          }}
        >
          KUME
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#44403c",
            marginTop: 28,
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          다시 시작하는 당신의 성장 파트너
        </div>

        {/* 서브 — 탈리다 쿰 */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#9c4529",
            marginTop: 44,
            fontStyle: "italic",
            letterSpacing: "0.05em",
          }}
        >
          &ldquo;탈리다 쿰&rdquo; · 여자여, 일어나라
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
