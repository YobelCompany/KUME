const promises = [
  {
    num: "01",
    title: "완벽하지 않아도 괜찮아요",
    desc: "이력서의 공백, 흐릿한 방향, 두려움 — 모두 있는 그대로 환영합니다.",
  },
  {
    num: "02",
    title: "당신의 선택을 존중해요",
    desc: "다시 일할지, 창업할지, 잠시 더 쉴지 — 답을 정해두지 않습니다.",
  },
  {
    num: "03",
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

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {promises.map((p) => (
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
