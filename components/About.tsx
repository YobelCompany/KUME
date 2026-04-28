export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              About KUME
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              우리는 비즈니스에
              <br />
              새로운 가능성을 더합니다.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              KUME는 2017년부터 스타트업부터 대기업까지 다양한 고객과 함께
              디지털 프로덕트를 만들어 왔습니다. 우리는 단순한 외주가 아닌,
              비즈니스의 본질에 집중하는 진짜 파트너가 되기를 추구합니다.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              사람을 중심에 두는 디자인, 견고한 엔지니어링, 그리고
              데이터 기반의 의사결정을 통해 고객의 성장을 함께 만들어 갑니다.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "사람 중심",
                desc: "고객과 사용자 모두를 깊이 이해하는 것에서 시작합니다.",
              },
              {
                title: "기술 우선",
                desc: "최신 기술을 빠르게 흡수하고 안정적으로 적용합니다.",
              },
              {
                title: "결과 지향",
                desc: "겉모양이 아닌 비즈니스 임팩트로 결과를 증명합니다.",
              },
              {
                title: "지속 가능",
                desc: "일회성이 아닌 장기적으로 함께 성장할 파트너가 됩니다.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
