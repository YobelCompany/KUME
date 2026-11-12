export default function Story() {
  return (
    <section id="story" className="bg-cream-100 py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand-600">
            Our Story
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            KUME라는 이름에 담긴 뜻
          </h2>

          {/* 이름의 뿌리: 탈리다 쿰 */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-sm">
            <div className="bg-gradient-to-br from-brand-50 to-cream-50 p-10 text-center sm:p-14">
              <p className="font-serif text-4xl font-bold tracking-tight text-brand-700 sm:text-5xl">
                탈리다 쿰
              </p>
              <p className="mt-3 text-sm italic tracking-wider text-stone-500">
                Talitha koum · 아람어
              </p>
              <p className="mx-auto mt-8 max-w-xl font-serif text-2xl leading-relaxed text-stone-800 sm:text-3xl">
                &ldquo;여자여, 일어나라&rdquo;
              </p>
              <p className="mt-4 text-sm text-stone-500">
                예수님께서 죽은 소녀의 손을 잡고 하신 말씀 · 마가복음 5:41
              </p>
            </div>

            <div className="space-y-5 p-10 text-lg leading-8 text-stone-700 sm:p-14">
              <p>
                KUME(쿠메)는 &lsquo;탈리다 쿰&rsquo;에서 왔습니다.
                누워 있던 아이의 손을 잡고
                &ldquo;일어나라&rdquo;고 말씀하신 그 목소리를,
                이 시대의 여성들에게도 다시 들려주고 싶었습니다.
              </p>
              <p>
                결혼, 출산, 육아, 돌봄 — 사랑하는 사람을 위해
                자신의 자리를 잠시 내려놓았던 여성들이 있습니다.
                그 시간은 결코 무너진 시간이 아니라,
                다시 일어설 힘을 조용히 길러온 시간입니다.
              </p>
              <p>
                KUME는 그 손을 잡아드리는 사람이 되고 싶습니다.
                <span className="font-semibold text-brand-700">
                  {" "}당신이 다시 당신답게 일어서는 그 여정을{" "}
                </span>
                가장 가까이에서 응원하는 파트너가 되겠습니다.
              </p>
            </div>
          </div>

          {/* 창업자 노트: 짧고 담담한 자기 소개 */}
          <div className="mt-8 rounded-3xl border border-cream-200 bg-white/70 p-8 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
              Founder&apos;s Note
            </p>
            <p className="mt-4 font-serif text-xl leading-relaxed text-stone-800 sm:text-2xl">
              &ldquo;이전 회사를 이끌다 무너져 본 창업자가,
              다시 시작합니다. 그래서 이 여정의 무게를 조금은 압니다.&rdquo;
            </p>
            <p className="mt-6 text-sm italic text-stone-500">
              — KUME 창업자 드림
            </p>
            <p className="mt-6 border-t border-cream-200 pt-6 text-sm leading-6 text-stone-500">
              첫 기수 멤버들과의 이야기를 이곳에 함께 담아갈 예정입니다.
              당신의 이야기도 들려주세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
