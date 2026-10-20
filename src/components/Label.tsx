import type { LabelHTMLAttributes } from "react";

// Figma: Label (2168:1076) — 입력 필드 위 라벨. required=true면 "필수" 표시가 붙는다
type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
  // 다른 <label> 안에 들어갈 때(RadioOption)나 그룹 제목일 때는 span으로 그린다
  as?: "label" | "span";
};

export default function Label({
  required = false,
  as = "label",
  className = "",
  children,
  ...props
}: LabelProps) {
  const Tag = as;
  return (
    <Tag
      className={[
        "inline-flex items-center gap-inline-sm whitespace-nowrap",
        className,
      ].join(" ")}
      {...props}
    >
      <span className="text-label-lg text-text-strong">{children}</span>
      {required && (
        <span className="text-caption-md text-feedback-error">필수</span>
      )}
    </Tag>
  );
}
