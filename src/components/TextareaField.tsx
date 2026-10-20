import type { TextareaHTMLAttributes } from "react";

// Figma: TextareaField (2168:1067) — 여러 줄 입력 박스. state=default(빈 칸) / focus(입력 중) / active(값이 채워짐)
// focus는 Tailwind focus:, default/active는 placeholder 색과 입력값 색으로 자동 표현된다
type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextareaField({
  className = "",
  ...props
}: TextareaFieldProps) {
  return (
    <textarea
      className={[
        "block w-full resize-none rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-body-lg text-text-primary",
        "placeholder:text-text-disabled",
        "outline-none focus:border-action-primary",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
