"use client";

import { useState, type FormEvent } from "react";

/**
 * 얼리버드 사전 신청 폼.
 * 현재는 백엔드가 없어 사용자의 기본 이메일 클라이언트를 열어
 * hello@kume.kr 로 신청 내용을 전송합니다.
 * 추후 Google Form / Airtable / 자체 API 등에 연동하면
 * handleSubmit 내부만 교체하면 됩니다.
 */
export default function EarlybirdForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("이름을 알려주세요.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("이메일 주소를 다시 확인해주세요.");
      return;
    }

    const subject = encodeURIComponent("[얼리버드] KUME 프로그램 사전 신청");
    const body = encodeURIComponent(
      `이름: ${name}\n이메일: ${email}\n\n하고 싶은 이야기:\n${
        message.trim() || "(비어있음)"
      }\n\n— KUME 홈페이지에서 신청되었습니다.`,
    );
    // 사용자의 메일 앱을 열어 실제 문의로 발송
    window.location.href = `mailto:hello@kume.kr?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setError("");
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-brand-200 bg-white/80 p-10 text-center shadow-sm">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-2xl text-brand-600">
          ♥
        </div>
        <h3 className="mt-5 font-serif text-2xl font-bold text-stone-900">
          이야기가 잘 전달되었어요
        </h3>
        <p className="mt-3 text-stone-600">
          곧 hello@kume.kr에서 따뜻하게 답장드릴게요.
          <br />
          함께해주셔서 감사합니다.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-cream-200 bg-white/90 p-8 shadow-sm backdrop-blur sm:p-10"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-stone-700">이름</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="어떻게 불러드리면 좋을까요?"
            className="mt-2 w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200"
            required
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-stone-700">이메일</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200"
            required
          />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="text-sm font-semibold text-stone-700">
          하고 싶은 이야기 <span className="text-stone-400">(선택)</span>
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="지금의 마음, 궁금한 점, 무엇이든 편하게 남겨주세요."
          className="mt-2 w-full resize-none rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-stone-900 placeholder:text-stone-400 focus:border-brand-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
      </label>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-stone-500">
          입력하신 정보는 사전 신청 확인 목적으로만 사용됩니다.
        </p>
        <button
          type="submit"
          className="w-full rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-600 hover:shadow-lg sm:w-auto"
        >
          얼리버드로 신청하기 →
        </button>
      </div>
    </form>
  );
}
