import type { SVGProps } from "react";

/**
 * KUME 심볼 (v2 · 리파인):
 * - 원형 브랜드 컬러 배경에 모노라인 세리프 K
 * - 상하 대칭이 잡힌 정직한 형태로, 소형 뷰(파비콘 16px)에서도 뭉치지 않도록 얇은 스트로크
 * - 상단 대각선 끝에 미세한 세리프 캡이 있어 편집 디자인 뉘앙스
 */
export function LogoMark({
  size = 32,
  className,
  ...rest
}: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...rest}
    >
      {/* 브랜드 컬러 원판 (단색 · 그라디언트 X — 인쇄와 소셜 아이콘에 강한 인상) */}
      <circle cx="50" cy="50" r="50" fill="#bd5732" />

      {/*
        모노라인 세리프 K
        - 수직 스템, 두 대각선, 상하 세리프
        - 광학적 균형을 위해 대각선 교차점을 y=51 (중심에서 살짝 위)로 배치
      */}
      <g fill="#fdf6f2">
        {/* 수직 스템 */}
        <rect x="30" y="26" width="8" height="48" rx="0.5" />
        {/* 상단 세리프 */}
        <rect x="24" y="26" width="20" height="3" />
        {/* 하단 세리프 */}
        <rect x="24" y="71" width="20" height="3" />
        {/* 상단 대각선 */}
        <path d="M38 51 L60 26 L68 26 L46 51 Z" />
        {/* 하단 대각선 */}
        <path d="M46 51 L68 74 L60 74 L38 51 Z" />
        {/* 상단 대각선 끝 세리프 캡 (미세한 편집 뉘앙스) */}
        <rect x="58" y="26" width="12" height="3" />
        {/* 하단 대각선 끝 세리프 캡 */}
        <rect x="58" y="71" width="12" height="3" />
      </g>
    </svg>
  );
}

/**
 * 워드마크 + 심볼 조합.
 *
 * 리파인 포인트:
 * - 이탤릭 → 정체(regular)로 변경해 안정감/전문성 강화
 * - 대문자 + 트래킹(0.14em)으로 편집 디자인 하우스 톤
 * - 색상은 stone-900로 통일, 브랜드 컬러는 심볼에만 사용해 대비 강화
 */
export default function Logo({
  size = 32,
  showText = true,
  className,
}: {
  size?: number;
  showText?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark size={size} />
      {showText && (
        <span
          className="font-serif font-bold uppercase leading-none text-stone-900"
          style={{
            fontSize: `${Math.round(size * 0.62)}px`,
            letterSpacing: "0.14em",
          }}
        >
          KUME
        </span>
      )}
    </span>
  );
}
