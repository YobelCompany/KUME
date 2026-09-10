export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400 py-24 sm:py-32"
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-100">
            Contact
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            지금, 조심스레 문을 두드려 보세요.
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-50">
            아직 마음이 정리되지 않아도 괜찮습니다.
            <br className="hidden sm:inline" />
            {" "}그저 궁금한 이야기, 작은 고민 무엇이든 편하게 남겨주세요.
          </p>

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
              <p className="text-sm text-brand-100">이메일</p>
              <a
                href="mailto:hello@kume.kr"
                className="mt-2 block text-base font-semibold text-white hover:text-cream-100"
              >
                hello@kume.kr
              </a>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
              <p className="text-sm text-brand-100">카카오톡 채널</p>
              <p className="mt-2 text-base font-semibold text-white">
                @KUME
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur">
              <p className="text-sm text-brand-100">운영시간</p>
              <p className="mt-2 text-base font-semibold text-white">
                평일 10:00 – 18:00
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="mailto:hello@kume.kr"
              className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-cream-50"
            >
              이메일로 이야기 시작하기 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
