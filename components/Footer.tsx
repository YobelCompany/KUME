export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-500 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-brand-600 text-xs font-bold text-white">
            K
          </span>
          <span className="font-semibold text-slate-700">KUME</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
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
