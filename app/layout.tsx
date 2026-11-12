import type { Metadata } from "next";
import { Nanum_Myeongjo, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

// 실제 한글 세리프/산세리프 폰트 로드 (편집 디자인 톤)
const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  preload: false,
});

const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  variable: "--font-serif",
  preload: false,
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kume.kr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "KUME — 다시 시작하는 당신의 성장 파트너",
  description:
    "KUME는 잠시 멈춰 있던 여성들이 자신의 속도로 다시 시작할 수 있도록, 교육과 커뮤니티로 함께합니다.",
  openGraph: {
    title: "KUME — 다시 시작하는 당신의 성장 파트너",
    description:
      "경력 단절 여성의 재도약을 돕는 교육과 커뮤니티. KUME와 함께 나만의 속도로 다시 시작해요.",
    type: "website",
    locale: "ko_KR",
    siteName: "KUME",
  },
  twitter: {
    card: "summary_large_image",
    title: "KUME — 다시 시작하는 당신의 성장 파트너",
    description:
      "경력 단절 여성의 재도약을 돕는 교육과 커뮤니티.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${nanumMyeongjo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
