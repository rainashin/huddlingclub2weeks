import type { ButtonHTMLAttributes } from "react";

// Figma: Button (2168:1089) — size=sm/md/lg, state=default/hover/disabled
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
};

// 밝은 action-primary(연두) 배경에는 어두운 글자, 어두운 md 배경에는 흰 글자
// sm은 손가락으로 누르기 쉽게 최소 높이 44px
const sizeClasses = {
  sm: "min-h-44 gap-control-compact py-inline-sm text-label-md bg-action-primary text-text-strong",
  md: "h-48 gap-inline-compact py-control-x text-label-md bg-text-secondary text-text-inverse",
  lg: "h-52 gap-control-compact py-inline-sm text-label-lg bg-action-primary text-text-strong",
};

export default function Button({
  size = "sm",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        "inline-flex items-center justify-center whitespace-nowrap rounded-control px-control-y",
        sizeClasses[size],
        // hover: 기본 배경 위에 검정을 10%만 덮어 살짝 어둡게 한다
        "enabled:hover:bg-linear-to-r enabled:hover:from-text-strong/10 enabled:hover:to-text-strong/10",
        // 비활성: 필수값이 비어 있을 때
        "disabled:bg-border-subtle disabled:text-text-disabled",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
