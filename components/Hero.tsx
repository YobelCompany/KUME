import { LogoMark } from "./Logo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-cream-50 to-cream-50">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-32 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-200 to-brand-400 opacity-40 sm:w-[72rem]" />
      </div>

      <div className="container-page py-24 sm:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <LogoMark size={56} className="mb-6 opacity-90" />

          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            경력 단절 여성의 재도약을 함께합니다
          </span>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-6xl">
            잠시 멈춰 있었던
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              당신의 이야기가
            </span>
            <br />
            다시 시작될 시간
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
            KUME는 다시 시작하려는 여성들이
            <br className="hidden sm:inline" />
            자신의 속도로 성장할 수 있도록,
            <br className="hidden sm:inline" />
            {" "}교육과 커뮤니티로 함께합니다.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#earlybird"
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-600 hover:shadow-lg"
            >
              얼리버드 신청하기
            </a>
            <a
              href="#programs"
              className="rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:border-brand-400 hover:text-brand-800"
            >
              프로그램 살펴보기 →
            </a>
          </div>

          {/* KUME 이름 뿌리 살짝 언급 — 자세한 이야기는 #story 로 유도 */}
          <p className="mx-auto mt-14 max-w-md text-sm italic text-stone-500">
            &ldquo;<span className="font-serif text-base not-italic text-brand-700">탈리다 쿰</span>&rdquo;
            &nbsp;· &nbsp;여자여, 일어나라
          </p>
        </div>
      </div>
    </section>
  );
}
