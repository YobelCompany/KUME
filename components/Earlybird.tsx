import EarlybirdForm from "./EarlybirdForm";

export default function Earlybird() {
  return (
    <section
      id="earlybird"
      className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-brand-50 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -left-24 bottom-16 h-72 w-72 rounded-full bg-brand-300/25 blur-3xl"
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Early Bird
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            첫 기수에 함께할 분들을 모십니다
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone-600">
            첫 기수 얼리버드에게는 <span className="font-semibold text-brand-700">특별 참가비 혜택</span>과{" "}
            <br className="hidden sm:inline" />
            프로그램 설계 과정을 함께 만드는 초대장을 드립니다.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <EarlybirdForm />
        </div>
      </div>
    </section>
  );
}
