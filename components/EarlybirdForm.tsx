"use client";

import { useState, type FormEvent } from "react";

/**
 * 얼리버드 사전 신청 폼.
 *
 * 흐름:
 * 1) /api/earlybird 로 POST (Google Form 또는 Airtable에 저장)
 * 2) 백엔드가 501(unconfigured) 응답이면 mailto 폴백을 안내
 * 3) 그 외 오류는 화면에 표시
 *
 * 환경변수 설정은 프로젝트 README.md 참고.
 */
export default function EarlybirdForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const buildMailto = () => {
    const subject = encodeURIComponent("[얼리버드] KUME 프로그램 사전 신청");
    const body = encodeURIComponent(
      `이름: ${name}\n이메일: ${email}\n\n하고 싶은 이야기:\n${
        message.trim() || "(비어있음)"
      }\n\n— KUME 홈페이지에서 신청되었습니다.`,
    );
    return `mailto:hello@kume.kr?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("이름을 알려주세요.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("이메일 주소를 다시 확인해주세요.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/earlybird", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        unconfigured?: boolean;
      };

      if (res.ok && data.ok) {
        setSubmitted(true);
        return;
      }

      // 아직 백엔드 연동이 안 된 경우 → mailto 폴백
      if (res.status === 501 && data.unconfigured) {
        window.location.href = buildMailto();
        setSubmitted(true);
        return;
      }

      setError(
        data.error ||
          "저장에 실패했어요. 잠시 후 다시 시도하거나 hello@kume.kr로 직접 보내주세요.",
      );
    } catch {
      setError(
        "네트워크 오류가 발생했어요. 잠시 후 다시 시도하거나 hello@kume.kr로 직접 보내주세요.",
      );
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
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
            disabled={loading}
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
          disabled={loading}
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
          disabled={loading}
          className="w-full rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {loading ? "보내는 중..." : "얼리버드로 신청하기 →"}
        </button>
      </div>
    </form>
  );
}
