import Link from "next/link";

const navItems = [
  { href: "#about", label: "소개" },
  { href: "#programs", label: "프로그램" },
  { href: "#promise", label: "우리의 약속" },
  { href: "#story", label: "스토리" },
  { href: "#contact", label: "문의" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream-200/70 bg-cream-50/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
            K
          </span>
          <span className="font-serif text-xl font-bold tracking-tight text-stone-900">
            KUME
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
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
          href="#contact"
          className="hidden rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 md:inline-block"
        >
          함께 시작하기
        </a>
      </div>
    </header>
  );
}
