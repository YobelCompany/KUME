import type { SVGProps } from "react";

/**
 * KUME 심볼 (v3 · 일출 모티프):
 * - 지평선 위로 떠오르는 해 + 5개의 광선
 * - '탈리다 쿰(여자여, 일어나라)' = 아침이 밝아오는 이미지를 담음
 * - 얇은 스트로크와 단색 채움으로 편집 디자인 뉘앙스
 * - ROI de PASTRY, 오산제일교회 등 한국 편집형 브랜딩 톤 참조
 */
export function LogoMark({
  size = 32,
  className,
  ...rest
}: { size?: number } & SVGProps<SVGSVGElement>) {
  // 마크는 가로:세로 = 70:40 비율
  const w = size * 1.75;
  const h = size;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 70 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...rest}
    >
      {/* 5개의 광선 */}
      <g stroke="#bd5732" strokeWidth="1.4" strokeLinecap="round">
        <line x1="35" y1="3" x2="35" y2="11" />
        <line x1="25" y1="6" x2="28" y2="13" />
        <line x1="45" y1="6" x2="42" y2="13" />
        <line x1="16" y1="12" x2="21" y2="17" />
        <line x1="54" y1="12" x2="49" y2="17" />
      </g>
      {/* 지평선 위로 떠오르는 해 (반원) */}
      <path d="M23 28 A12 12 0 0 1 47 28 Z" fill="#bd5732" />
      {/* 지평선 */}
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
  );
}

/**
 * 워드마크 + 심볼 조합 (한/영 병기).
 *
 * - 영문: 정체 대문자 세리프, 트래킹 0.2em으로 편집 디자인 톤
 * - 한글: 나눔명조 세리프, 트래킹 0.35em으로 절제된 크기
 * - orientation 'horizontal'(기본) : 심볼 좌측, 워드마크 우측 스택
 * - orientation 'stack'            : 심볼 상단, 워드마크 하단 (Hero용)
 */
export default function Logo({
  size = 28,
  showText = true,
  orientation = "horizontal",
  className,
}: {
  size?: number;
  showText?: boolean;
  orientation?: "horizontal" | "stack";
  className?: string;
}) {
  const enSize = Math.round(size * 0.72);
  const koSize = Math.round(size * 0.42);

  if (orientation === "stack") {
    return (
      <span
        className={`inline-flex flex-col items-center gap-3 ${className ?? ""}`}
      >
        <LogoMark size={size} />
        {showText && (
          <span className="flex flex-col items-center leading-none">
            <span
              className="font-serif font-bold uppercase text-stone-900"
              style={{ fontSize: `${enSize}px`, letterSpacing: "0.22em" }}
            >
              KUME
            </span>
            <span
              className="mt-1.5 font-serif text-stone-600"
              style={{ fontSize: `${koSize}px`, letterSpacing: "0.35em" }}
            >
              쿠 메
            </span>
          </span>
        )}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark size={size} />
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className="font-serif font-bold uppercase text-stone-900"
            style={{ fontSize: `${enSize}px`, letterSpacing: "0.2em" }}
          >
            KUME
          </span>
          <span
            className="mt-1 font-serif text-stone-500"
            style={{ fontSize: `${koSize}px`, letterSpacing: "0.3em" }}
          >
            쿠 메
          </span>
        </span>
      )}
    </span>
  );
}
