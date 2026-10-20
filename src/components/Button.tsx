import type { ButtonHTMLAttributes } from "react";

// Figma: Button (2168:1089) — size=sm/md/lg, state=default/hover/disabled
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "gap-control-compact py-inline-sm text-label-md bg-action-primary",
  md: "h-48 gap-inline-compact py-control-x text-label-md bg-text-secondary",
  lg: "h-52 gap-control-compact py-inline-sm text-label-lg bg-action-primary",
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
        "inline-flex items-center justify-center whitespace-nowrap rounded-control px-control-y text-text-inverse",
        sizeClasses[size],
        // hover: 기본 배경 위에 hover-overlay 색을 덮는다
        "enabled:hover:bg-linear-to-r enabled:hover:from-action-hover-overlay enabled:hover:to-action-hover-overlay",
        // 비활성: 필수값이 비어 있을 때
        "disabled:bg-border-subtle",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
