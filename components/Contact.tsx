export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            프로젝트를 함께 시작해 볼까요?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            아이디어 단계라도 좋습니다. 우리가 가능한지부터 검토해 드릴게요.
          </p>

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-sm text-slate-400">이메일</p>
              <a
                href="mailto:hello@kume.co"
                className="mt-2 block text-base font-semibold text-white hover:text-brand-300"
              >
                hello@kume.co
              </a>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-sm text-slate-400">전화</p>
              <p className="mt-2 text-base font-semibold text-white">
                02-1234-5678
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <p className="text-sm text-slate-400">주소</p>
              <p className="mt-2 text-base font-semibold text-white">
                서울특별시 강남구
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="mailto:hello@kume.co"
              className="inline-block rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-400"
            >
              이메일로 문의하기 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
