import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-cream-200 bg-cream-50">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-stone-500 sm:flex-row">
        <div className="flex flex-wrap items-center gap-3">
          <Logo size={24} />
          <span>© {new Date().getFullYear()} KUME. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-brand-600">
            개인정보처리방침
          </a>
          <a href="#" className="hover:text-brand-600">
            이용약관
          </a>
        </div>
      </div>
    </footer>
  );
}
