"use client";

import { useId } from "react";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

// Figma: CopyLinkField (2168:1000) — title · 링크 칸(InputField) · 복사 버튼(Button sm) · description
// 발행 후 초대장 링크와 응답 현황 링크에 두 번 쓴다
type CopyLinkFieldProps = {
  url: string;
  title?: string;
  description?: string;
  className?: string;
};

export default function CopyLinkField({
  url,
  title = "초대장 링크",
  description = "게스트에게 공유하는 링크예요.",
  className = "",
}: CopyLinkFieldProps) {
  const fieldId = useId();

  return (
    <div
      className={[
        "flex w-full flex-col items-start gap-inline-md rounded-card bg-surface-subtle p-stack-md",
        className,
      ].join(" ")}
    >
      <label htmlFor={fieldId} className="text-label-lg text-text-strong">
        {title}
      </label>
      <div className="flex w-full items-center gap-inline-md">
        <InputField id={fieldId} value={url} readOnly className="min-w-0 flex-1" />
        <Button size="sm" onClick={() => navigator.clipboard.writeText(url)}>
          복사
        </Button>
      </div>
      <p className="text-caption-md text-text-tertiary">{description}</p>
    </div>
  );
}
