"use client";

import { useState } from "react";
import RSVPCard, { type RsvpResponse } from "@/components/RSVPCard";

// 참석 응답 카드. 제출하면 페이지 이동 없이 같은 자리에서 완료 화면으로 바뀐다
export default function RsvpSection() {
  const [submitted, setSubmitted] = useState<RsvpResponse | null>(null);

  function handleSubmit(response: RsvpResponse) {
    // TODO: Supabase에 응답 저장 (서버에서 이름·인원 다시 검사)
    setSubmitted(response);
  }

  return (
    <section className="w-full bg-background-subtle px-page-horizontal pt-section-lg pb-section-xl">
      <RSVPCard
        state={submitted ? "done" : "form"}
        response={submitted ?? undefined}
        onSubmit={handleSubmit}
      />
    </section>
  );
}
