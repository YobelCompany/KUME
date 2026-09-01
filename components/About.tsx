export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              About KUME
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              당신의 &lsquo;다시 시작&rsquo;을
              <br />
              가장 가까이에서 응원합니다.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-stone-600">
              <p>
                결혼, 출산, 육아, 돌봄 — 인생의 어느 지점에서
                자신의 커리어를 잠시 내려놓아야 했던 여성들이 있습니다.
                그 시간은 결코 헛되지 않았지만,
                다시 세상으로 나오려 할 때는 두려움이 앞서곤 하죠.
              </p>
              <p>
                KUME는 그 두려움을 혼자 겪지 않도록,
                따뜻하게 손을 내미는 파트너가 되고 싶습니다.
                당신이 다시 자신을 발견하고,
                당당하게 세상 속에 설 수 있을 때까지 함께합니다.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "당신의 속도로",
                desc: "빠르게 갈 필요 없어요. 나만의 리듬으로 한 걸음씩.",
              },
              {
                title: "혼자가 아닌",
                desc: "같은 길을 걷는 동료들과 함께 서로를 응원해요.",
              },
              {
                title: "판단 없이",
                desc: "지나온 시간과 선택을 있는 그대로 존중합니다.",
              },
              {
                title: "진짜 나로",
                desc: "누구의 엄마·아내가 아닌, 이름 그대로의 나로.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-cream-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
              >
                <h3 className="font-serif text-lg font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">
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
