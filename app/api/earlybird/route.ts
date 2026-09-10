import { NextResponse } from "next/server";

/**
 * 얼리버드 사전 신청 저장 엔드포인트.
 *
 * 환경변수 우선순위:
 * 1) Google Form
 *    - GOOGLE_FORM_ACTION_URL          형식: https://docs.google.com/forms/d/e/{FORM_ID}/formResponse
 *    - GOOGLE_FORM_NAME_ENTRY          예: "entry.123456789"
 *    - GOOGLE_FORM_EMAIL_ENTRY         예: "entry.234567890"
 *    - GOOGLE_FORM_MESSAGE_ENTRY       (선택)
 *
 * 2) Airtable
 *    - AIRTABLE_API_KEY                (Personal Access Token 권장)
 *    - AIRTABLE_BASE_ID                예: appXXXXXXXXXXXXXX
 *    - AIRTABLE_TABLE_NAME             예: Earlybird
 *    - AIRTABLE_FIELD_NAME             (선택, 기본: Name)
 *    - AIRTABLE_FIELD_EMAIL            (선택, 기본: Email)
 *    - AIRTABLE_FIELD_MESSAGE          (선택, 기본: Message)
 *
 * 어느 것도 설정되지 않았다면 501을 반환합니다.
 * (프론트엔드는 501을 받으면 mailto 폴백으로 안내합니다.)
 */

type Payload = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "잘못된 요청 형식이에요." },
      { status: 400 },
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name) {
    return NextResponse.json(
      { ok: false, error: "이름을 알려주세요." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "이메일 주소를 다시 확인해주세요." },
      { status: 400 },
    );
  }

  // --- 1) Google Form 우선 시도 ---
  const gFormUrl = process.env.GOOGLE_FORM_ACTION_URL;
  const gFormName = process.env.GOOGLE_FORM_NAME_ENTRY;
  const gFormEmail = process.env.GOOGLE_FORM_EMAIL_ENTRY;
  const gFormMessage = process.env.GOOGLE_FORM_MESSAGE_ENTRY;

  if (gFormUrl && gFormName && gFormEmail) {
    try {
      const formData = new FormData();
      formData.append(gFormName, name);
      formData.append(gFormEmail, email);
      if (gFormMessage && message) formData.append(gFormMessage, message);

      const res = await fetch(gFormUrl, {
        method: "POST",
        body: formData,
        // Google Form은 리다이렉트 응답을 주므로 follow=manual로 두어도 OK
        redirect: "follow",
      });

      // Google Form은 성공 시 200/302를 반환합니다.
      if (res.ok || res.status === 302) {
        return NextResponse.json({ ok: true, provider: "google-form" });
      }
      console.error("[earlybird] google form non-2xx:", res.status);
    } catch (err) {
      console.error("[earlybird] google form error:", err);
    }
    return NextResponse.json(
      { ok: false, error: "일시적인 저장 오류가 발생했어요. 잠시 후 다시 시도해주세요." },
      { status: 502 },
    );
  }

  // --- 2) Airtable ---
  const atKey = process.env.AIRTABLE_API_KEY;
  const atBase = process.env.AIRTABLE_BASE_ID;
  const atTable = process.env.AIRTABLE_TABLE_NAME;
  if (atKey && atBase && atTable) {
    const fieldName = process.env.AIRTABLE_FIELD_NAME ?? "Name";
    const fieldEmail = process.env.AIRTABLE_FIELD_EMAIL ?? "Email";
    const fieldMessage = process.env.AIRTABLE_FIELD_MESSAGE ?? "Message";

    try {
      const res = await fetch(
        `https://api.airtable.com/v0/${atBase}/${encodeURIComponent(atTable)}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${atKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  [fieldName]: name,
                  [fieldEmail]: email,
                  [fieldMessage]: message,
                },
              },
            ],
          }),
        },
      );

      if (res.ok) {
        return NextResponse.json({ ok: true, provider: "airtable" });
      }
      const errText = await res.text();
      console.error("[earlybird] airtable non-2xx:", res.status, errText);
    } catch (err) {
      console.error("[earlybird] airtable error:", err);
    }
    return NextResponse.json(
      { ok: false, error: "일시적인 저장 오류가 발생했어요. 잠시 후 다시 시도해주세요." },
      { status: 502 },
    );
  }

  // --- 3) 아무 것도 설정되지 않음 ---
  return NextResponse.json(
    {
      ok: false,
      error: "얼리버드 폼이 아직 연동되지 않았어요. hello@kume.kr로 직접 보내주시겠어요?",
      unconfigured: true,
    },
    { status: 501 },
  );
}
