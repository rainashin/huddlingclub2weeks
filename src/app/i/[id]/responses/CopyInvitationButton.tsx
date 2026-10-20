"use client";

import Button from "@/components/Button";
import { useCopy } from "@/lib/useCopy";

// 응답 현황 화면 맨 아래 "초대장 링크 복사하기" 버튼 (Figma 2168:964)
// 지금 주소(/i/[id]/responses)에서 /responses를 떼면 초대장 링크가 된다
export default function CopyInvitationButton() {
  const { result, copy } = useCopy();

  function handleClick() {
    const path = window.location.pathname.replace(/\/responses\/?$/, "");
    copy(window.location.origin + path);
  }

  return (
    <Button size="lg" className="w-full" onClick={handleClick}>
      {result === "copied"
        ? "복사됐어요"
        : result === "failed"
          ? "복사하지 못했어요"
          : "초대장 링크 복사하기"}
    </Button>
  );
}
