const programs = [
  {
    tag: "8주 코스",
    title: "리부트 클래스",
    desc: "지난 시간을 정리하고 앞으로의 방향을 찾는 8주 집중 프로그램.",
    items: [
      "1~2주차 · 나를 다시 만나기",
      "3~4주차 · 강점과 자원 발견",
      "5~6주차 · 커리어 방향 설계",
      "7~8주차 · 첫 걸음 실행 계획",
    ],
    highlight: "매 기수 소규모(10명 내외)로 진행",
  },
  {
    tag: "1:1 세션",
    title: "커리어 코칭",
    desc: "전문 코치와 함께 나만의 다음 챕터를 그려보는 개인 맞춤 세션.",
    items: [
      "지금의 나 진단",
      "가능성 있는 방향 탐색",
      "구체적인 실행 계획",
      "정서적 지지와 동행",
    ],
    highlight: "월 1~2회 · 60분 세션",
  },
  {
    tag: "커뮤니티",
    title: "위클리 모임",
    desc: "같은 길을 걷는 동료들과 매주 만나며 성장을 나누는 공간.",
    items: [
      "온라인 위클리 체크인",
      "월 1회 오프라인 모임",
      "주제별 소그룹 스터디",
      "선배 멤버 멘토링",
    ],
    highlight: "누구나 편하게 참여 가능",
  },
];

export default function Services() {
  return (
    <section id="programs" className="bg-cream-100 py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Programs
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            우리가 함께하는 방식
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            혼자서는 어렵지만, 함께라면 다시 시작할 수 있어요.
            <br className="hidden sm:inline" />
            지금 나에게 필요한 걸음을 골라 보세요.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="group flex flex-col rounded-3xl border border-cream-200 bg-white p-8 shadow-sm transition hover:border-brand-300 hover:shadow-lg"
            >
              <span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {program.tag}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-bold text-stone-900">
                {program.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {program.desc}
              </p>
              <ul className="mt-6 space-y-2 border-t border-cream-200 pt-6">
                {program.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-stone-700"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-stone-500">
                {program.highlight}
              </p>
            </article>
          ))}
        </div>

        {/* 곧 오픈: 12주 브랜딩·디자인·웹 부트캠프 (사전 알림 유도) */}
        <div className="mt-8 overflow-hidden rounded-3xl border-2 border-dashed border-brand-300 bg-gradient-to-br from-brand-50 to-cream-50 p-8 sm:p-10">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                곧 오픈 · Coming Soon
              </span>
              <h3 className="mt-4 font-serif text-2xl font-bold text-stone-900 sm:text-3xl">
                12주 브랜딩·디자인·웹 부트캠프
              </h3>
              <p className="mt-3 text-base leading-7 text-stone-600">
                재택으로 첫 수입을 만들 수 있는 실전 기술을 함께 배우고,
                수료 후에는 KUME의 실제 프로젝트로 데뷔할 수 있도록 연결합니다.
                &ldquo;배우는 것&rdquo;에서 그치지 않고
                <span className="font-semibold text-brand-700">
                  {" "}&ldquo;일하는 것&rdquo;까지{" "}
                </span>
                이어지도록 설계 중이에요.
              </p>
            </div>
            <a
              href="#earlybird"
              className="w-full flex-shrink-0 rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200 transition hover:bg-brand-50 hover:ring-brand-400 lg:w-auto"
            >
              사전 알림 신청 →
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-brand-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-stone-600">
            프로그램은 <span className="font-semibold text-brand-700">첫 기수</span>를 준비 중이에요.
            <br className="hidden sm:inline" />
            얼리버드로 함께하실 분들을 모시고 있습니다.
          </p>
          <a
            href="#earlybird"
            className="mt-4 inline-block rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            얼리버드 신청하기 →
          </a>
        </div>
      </div>
    </section>
  );
}
