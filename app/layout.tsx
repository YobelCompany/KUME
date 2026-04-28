import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KUME — 더 나은 비즈니스를 위한 파트너",
  description:
    "KUME는 고객의 비즈니스 성장에 필요한 디지털 솔루션과 컨설팅을 제공합니다.",
  openGraph: {
    title: "KUME",
    description:
      "KUME는 고객의 비즈니스 성장에 필요한 디지털 솔루션과 컨설팅을 제공합니다.",
    type: "website",
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
