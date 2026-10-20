import type { ButtonHTMLAttributes } from "react";
import IconMinus from "@/components/IconMinus";
import IconPlus from "@/components/IconPlus";

// Figma: StepButton (2168:1020) — icon=minus/plus(인스턴스 스왑), state=default/disabled. Stepper의 −/+ 버튼
type StepButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: "minus" | "plus";
};

export default function StepButton({
  icon = "minus",
  type = "button",
  disabled = false,
  className = "",
  ...props
}: StepButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={[
        "flex size-44 shrink-0 items-center justify-center rounded-control border border-border-default bg-surface-default",
        "focus-visible:outline-2 focus-visible:outline-border-accent",
        className,
      ].join(" ")}
      {...props}
    >
      {icon === "minus" ? (
        <IconMinus size={20} disabled={disabled} />
      ) : (
        <IconPlus size={20} />
      )}
    </button>
  );
}
