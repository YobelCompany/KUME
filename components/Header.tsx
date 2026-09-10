import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  { href: "#about", label: "소개" },
  { href: "#programs", label: "프로그램" },
  { href: "#agency", label: "스튜디오" },
  { href: "#promise", label: "약속" },
  { href: "#story", label: "스토리" },
  { href: "#earlybird", label: "얼리버드" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream-200/70 bg-cream-50/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" aria-label="KUME 홈으로">
          <Logo size={32} />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#earlybird"
          className="hidden rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 md:inline-block"
        >
          함께 시작하기
        </a>
      </div>
    </header>
  );
}
