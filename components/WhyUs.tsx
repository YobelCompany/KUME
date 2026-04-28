const reasons = [
  {
    num: "01",
    title: "검증된 전문성",
    desc: "8년간 다양한 산업의 100개 이상 프로젝트를 성공적으로 수행했습니다.",
  },
  {
    num: "02",
    title: "투명한 협업",
    desc: "프로젝트의 모든 과정을 공유하여 고객과 같은 방향을 바라봅니다.",
  },
  {
    num: "03",
    title: "End-to-End 실행력",
    desc: "전략 수립부터 출시 후 운영까지 한 팀으로 끝까지 책임집니다.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Why KUME
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            왜 KUME인가요?
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.num}
              className="relative rounded-2xl bg-gradient-to-br from-brand-50 to-white p-8"
            >
              <span className="text-5xl font-black text-brand-200">
                {r.num}
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
