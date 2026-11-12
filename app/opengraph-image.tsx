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
        {/* 일출 마크 (크게) */}
        <svg
          width="280"
          height="160"
          viewBox="0 0 70 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#bd5732" strokeWidth="1.4" strokeLinecap="round">
            <line x1="35" y1="3" x2="35" y2="11" />
            <line x1="25" y1="6" x2="28" y2="13" />
            <line x1="45" y1="6" x2="42" y2="13" />
            <line x1="16" y1="12" x2="21" y2="17" />
            <line x1="54" y1="12" x2="49" y2="17" />
          </g>
          <path d="M23 28 A12 12 0 0 1 47 28 Z" fill="#bd5732" />
          <line
            x1="4"
            y1="28"
            x2="66"
            y2="28"
            stroke="#bd5732"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>

        {/* Wordmark 영문 */}
        <div
          style={{
            display: "flex",
            fontSize: 100,
            fontWeight: 800,
            color: "#1c1917",
            marginTop: 24,
            letterSpacing: "0.22em",
          }}
        >
          KUME
        </div>

        {/* 한글 병기 */}
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#57534e",
            marginTop: 12,
            letterSpacing: "0.4em",
          }}
        >
          쿠 메
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#44403c",
            marginTop: 40,
            textAlign: "center",
          }}
        >
          다시 시작하는 당신의 성장 파트너
        </div>

        {/* 서브 — 탈리다 쿰 */}
        <div
          style={{
            display: "flex",
            fontSize: 20,
            color: "#9c4529",
            marginTop: 32,
            fontStyle: "italic",
            letterSpacing: "0.08em",
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
