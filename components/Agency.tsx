const pillars = [
  {
    icon: "🌱",
    title: "여성 창업가·1인 사업자 지원",
    desc: "예산이 넉넉하지 않아 브랜딩·웹을 시작하지 못했던 여성 창업가에게 합리적인 가격으로 함께합니다.",
  },
  {
    icon: "🎯",
    title: "수료생의 실전 무대",
    desc: "부트캠프를 마친 수료생이 실제 프로젝트에 참여하며 첫 포트폴리오와 첫 수입을 만들어 갑니다.",
  },
  {
    icon: "🤝",
    title: "프로보노 이니셔티브",
    desc: "저소득·한부모 여성 창업가를 위한 무상 브랜딩·웹 프로젝트를 매년 정해진 수만큼 진행합니다.",
  },
];

const services = [
  "브랜드 아이덴티티 · 로고 · 가이드",
  "웹사이트 · 랜딩페이지 제작",
  "소셜 콘텐츠 · 인스타 그리드 기획",
  "브랜드 사진 · 촬영 디렉션",
];

export default function Agency() {
  return (
    <section id="agency" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            KUME Studio
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            여성이 만들고, 여성과 함께 만드는
            <br />
            브랜딩 스튜디오
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            KUME는 학교이자 스튜디오입니다.
            <br className="hidden sm:inline" />
            수료생과 함께 만든 결과물이 다시 여성들의 이야기를 세상에 전합니다.
          </p>
        </div>

        {/* 3 pillars */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl border border-cream-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-2xl">
                {p.icon}
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-stone-900">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{p.desc}</p>
            </article>
          ))}
        </div>

        {/* Services + CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-50 to-cream-50 p-10 sm:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h3 className="font-serif text-2xl font-bold text-stone-900 sm:text-3xl">
                KUME Studio가 함께 만드는 것들
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2 text-sm text-stone-700"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
                      ✓
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm text-stone-600">
                  브랜드를 함께 만들어 갈 파트너를 찾고 계신가요?
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-block w-full rounded-full bg-brand-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
                >
                  프로젝트 문의하기 →
                </a>
                <p className="mt-3 text-xs text-stone-500">
                  여성 창업가·소상공인 · 여성 사회적 기업 우선
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
