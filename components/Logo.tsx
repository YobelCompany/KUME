import type { SVGProps } from "react";

/**
 * KUME 심볼:
 * "일어나 서 있는 여성"을 부드러운 실루엣으로 표현.
 * - 아래 지평선(horizon)에서 위로 일어선 형상
 * - 팔을 살짝 벌린 자세: 세상을 향해 열린 마음
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
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...rest}
    >
      <defs>
        <linearGradient id="kume-mark" x1="8" y1="4" x2="32" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#df8a62" />
          <stop offset="1" stopColor="#bd5732" />
        </linearGradient>
      </defs>
      {/* 지평선: 딛고 일어서는 땅 */}
      <path
        d="M4 33 Q20 30.5 36 33"
        stroke="url(#kume-mark)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
      {/* 머리 */}
      <circle cx="20" cy="11" r="3.4" fill="url(#kume-mark)" />
      {/* 몸통: 부드러운 A-line 실루엣 */}
      <path
        d="M13.5 30
           C13.5 22 15.5 17.5 20 16.5
           C24.5 17.5 26.5 22 26.5 30 Z"
        fill="url(#kume-mark)"
      />
      {/* 열린 두 팔 */}
      <path
        d="M14.5 21 L10.5 25.5"
        stroke="url(#kume-mark)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M25.5 21 L29.5 25.5"
        stroke="url(#kume-mark)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * 워드마크 + 심볼 조합.
 * 서체는 serif(명조)를 사용해 손편지 같은 따뜻한 느낌을 연출.
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
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark size={size} />
      {showText && (
        <span className="font-serif text-2xl font-bold italic tracking-tight text-stone-900">
          KUME
        </span>
      )}
    </span>
  );
}
