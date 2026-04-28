const services = [
  {
    title: "프로덕트 개발",
    desc: "웹/모바일 서비스의 기획부터 출시, 운영까지 풀사이클로 함께합니다.",
    items: ["서비스 기획", "UI/UX 디자인", "프론트엔드/백엔드", "DevOps"],
  },
  {
    title: "디지털 전환",
    desc: "기존 비즈니스를 디지털 환경에 맞게 재설계하고 효율을 높입니다.",
    items: ["업무 자동화", "데이터 통합", "클라우드 마이그레이션", "AI 도입"],
  },
  {
    title: "브랜드 & 마케팅",
    desc: "고객의 마음에 닿는 브랜드 경험과 그로스 마케팅을 설계합니다.",
    items: ["브랜드 전략", "비주얼 아이덴티티", "퍼포먼스 마케팅", "콘텐츠"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            우리가 제공하는 서비스
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            비즈니스의 단계와 필요에 맞춰 가장 적합한 솔루션을 제안합니다.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-brand-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.desc}
              </p>
              <ul className="mt-6 space-y-2 border-t border-slate-100 pt-6">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
