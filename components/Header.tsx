import Link from "next/link";

const navItems = [
  { href: "#about", label: "회사소개" },
  { href: "#services", label: "서비스" },
  { href: "#why", label: "차별점" },
  { href: "#contact", label: "문의" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-600 text-sm font-bold text-white">
            K
          </span>
          <span className="text-lg font-bold tracking-tight">KUME</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 md:inline-block"
        >
          문의하기
        </a>
      </div>
    </header>
  );
}
