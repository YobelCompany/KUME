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
            "linear-gradient(135deg, #fdf6f2 0%, #faeae0 50%, #f3cfbb 100%)",
          padding: "80px",
          fontFamily:
            'Georgia, "Nanum Myeongjo", "Noto Serif KR", serif',
        }}
      >
        {/* Logo mark (일어난 여성 실루엣) */}
        <svg
          width="140"
          height="140"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mark" x1="8" y1="4" x2="32" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#df8a62" />
              <stop offset="1" stopColor="#bd5732" />
            </linearGradient>
          </defs>
          <path
            d="M4 33 Q20 30.5 36 33"
            stroke="url(#mark)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
          <circle cx="20" cy="11" r="3.4" fill="url(#mark)" />
          <path
            d="M13.5 30 C13.5 22 15.5 17.5 20 16.5 C24.5 17.5 26.5 22 26.5 30 Z"
            fill="url(#mark)"
          />
          <path
            d="M14.5 21 L10.5 25.5"
            stroke="url(#mark)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M25.5 21 L29.5 25.5"
            stroke="url(#mark)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 800,
            fontStyle: "italic",
            color: "#1c1917",
            marginTop: 24,
            letterSpacing: "-0.03em",
          }}
        >
          KUME
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#44403c",
            marginTop: 32,
            textAlign: "center",
          }}
        >
          다시 시작하는 당신의 성장 파트너
        </div>

        {/* 서브 — 탈리다 쿰 */}
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#9c4529",
            marginTop: 40,
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
