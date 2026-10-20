"use client";

import { useState } from "react";

// 글자를 클립보드에 복사하고, 결과("copied" / "failed")를 2초 동안 알려준다
// 복사는 https나 localhost에서만 되므로, 다른 주소에서는 실패할 수 있다
export function useCopy() {
  const [result, setResult] = useState<"copied" | "failed" | null>(null);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setResult("copied");
    } catch {
      setResult("failed");
    }
    setTimeout(() => setResult(null), 2000);
  }

  return { result, copy };
}
