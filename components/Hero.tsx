export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-32 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-300 to-brand-600 opacity-30 sm:w-[72rem]" />
      </div>

      <div className="container-page py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            새로운 시대의 비즈니스 파트너, KUME
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            성장하는 비즈니스를 위한
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              가장 단단한 파트너
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            KUME는 디지털 전환, 제품 개발, 브랜드 컨설팅까지
            비즈니스 성장에 필요한 모든 것을 한 곳에서 제공합니다.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-700 hover:shadow-lg"
            >
              프로젝트 시작하기
            </a>
            <a
              href="#services"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
            >
              서비스 살펴보기 →
            </a>
          </div>
        </div>

        <dl className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { label: "프로젝트", value: "120+" },
            { label: "파트너사", value: "45+" },
            { label: "운영 연수", value: "8년" },
            { label: "고객 만족도", value: "98%" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <dt className="text-sm text-slate-500">{stat.label}</dt>
              <dd className="mt-1 text-3xl font-bold text-slate-900">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
