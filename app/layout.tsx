import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KUME — 다시 시작하는 당신의 성장 파트너",
  description:
    "KUME는 잠시 멈춰 있던 여성들이 자신의 속도로 다시 시작할 수 있도록, 교육과 커뮤니티로 함께합니다.",
  openGraph: {
    title: "KUME — 다시 시작하는 당신의 성장 파트너",
    description:
      "경력 단절 여성의 재도약을 돕는 교육과 커뮤니티. KUME와 함께 나만의 속도로 다시 시작해요.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
