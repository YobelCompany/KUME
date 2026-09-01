export default function Story() {
  return (
    <section id="story" className="bg-cream-100 py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-brand-600">
            Our Story
          </p>
          <h2 className="mt-3 text-center font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            KUME가 시작된 이야기
          </h2>

          <div className="mt-12 space-y-6 rounded-3xl bg-white p-8 text-lg leading-8 text-stone-700 shadow-sm sm:p-12">
            <p>
              KUME는 &ldquo;그동안 뭐 했어요?&rdquo;라는 질문에
              선뜻 답하지 못했던 어떤 시간에서 시작되었습니다.
            </p>
            <p>
              누군가의 엄마로, 딸로, 아내로 살아온 시간은
              분명 값진 것이었지만,
              세상으로 나오려 할 때 그 시간을 어떻게 설명해야 할지 몰라
              문 앞에서 오래 서성였던 여성들이 있었습니다.
            </p>
            <p>
              KUME는 그 문 앞에 조용히 함께 서주는 사람이 되고 싶습니다.
              화려한 성공을 약속하기보다,
              <span className="font-semibold text-brand-700">
                {" "}당신이 다시 당신다워지는 그 여정을{" "}
              </span>
              가장 가까이에서 응원하는 파트너가 되겠습니다.
            </p>
            <p className="border-t border-cream-200 pt-6 text-base italic text-stone-500">
              &mdash; 첫 기수 멤버들과의 이야기를 여기에 함께 담아갈 예정입니다.
              당신의 이야기도 들려주세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
