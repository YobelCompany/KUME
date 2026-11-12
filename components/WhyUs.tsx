const honestyPromises = [
  "결과를 과장하지 않고, 실제 수료 결과를 있는 그대로 공개해요",
  "가격 · 커리큘럼 · 환불 정책을 홈페이지에 완전히 공개해요",
  "“이런 분들에게는 맞지 않아요”를 먼저 말씀드려요",
  "매년 임팩트 리포트로 우리의 활동을 투명하게 나눠요",
];

const supportingPromises = [
  {
    num: "02",
    title: "완벽하지 않아도 괜찮아요",
    desc: "이력서의 공백, 흐릿한 방향, 두려움 — 모두 있는 그대로 환영합니다.",
  },
  {
    num: "03",
    title: "당신의 선택을 존중해요",
    desc: "다시 일할지, 창업할지, 잠시 더 쉴지 — 답을 정해두지 않습니다.",
  },
  {
    num: "04",
    title: "곁에서 오래 함께해요",
    desc: "프로그램이 끝나도 커뮤니티로, 동료로 계속 이어질 수 있도록.",
  },
];

export default function WhyUs() {
  return (
    <section id="promise" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Our Promise
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            우리가 당신에게 드리는 약속
          </h2>
        </div>

        {/* 정직 — Featured hero card */}
        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-brand-200 bg-white shadow-md">
          <div className="grid gap-0 lg:grid-cols-5">
            {/* Left: 정직 타이틀 */}
            <div className="flex flex-col justify-center bg-gradient-to-br from-brand-500 via-brand-500 to-brand-600 p-10 text-white lg:col-span-2 lg:p-12">
              <span className="font-serif text-6xl font-black opacity-30">
                01
              </span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-100">
                Our Core Value
              </p>
              <h3 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
                정직하게.
              </h3>
              <p className="mt-6 text-base leading-7 text-brand-50">
                &ldquo;정직한 기업만 살아남는다&rdquo;는 믿음으로,
                KUME는 이렇게 운영합니다.
              </p>
            </div>

            {/* Right: 정직 실천 약속 */}
            <div className="flex flex-col justify-center p-10 lg:col-span-3 lg:p-12">
              <ul className="space-y-4">
                {honestyPromises.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">
                      ✓
                    </span>
                    <span className="text-base leading-7 text-stone-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 부속 약속 3가지 */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
          {supportingPromises.map((p) => (
            <div
              key={p.num}
              className="relative rounded-3xl bg-gradient-to-br from-brand-50 to-cream-50 p-8"
            >
              <span className="font-serif text-5xl font-black text-brand-200">
                {p.num}
              </span>
              <h3 className="mt-4 font-serif text-xl font-bold text-stone-900">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
