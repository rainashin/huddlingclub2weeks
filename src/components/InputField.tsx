import type { InputHTMLAttributes } from "react";

// Figma: InputField (2168:1108) — 한 줄 입력 박스. state=default(빈 칸) / focus(입력 중) / active(값이 채워짐)
// focus는 Tailwind focus:, default/active는 placeholder 색과 입력값 색으로 자동 표현된다
type InputFieldProps = InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
  type = "text",
  className = "",
  ...props
}: InputFieldProps) {
  return (
    <input
      type={type}
      className={[
        "h-45 w-full rounded-control border border-border-subtle bg-surface-default px-stack-md text-body-lg text-text-primary",
        "placeholder:text-text-disabled",
        "outline-none focus:border-action-primary",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
