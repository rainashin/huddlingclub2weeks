import type { InputHTMLAttributes } from "react";
import Radio from "@/components/Radio";
import Label from "@/components/Label";

// Figma: RadioOption (2168:1119) — Radio + Label 한 줄. 참석/불참 선택에 쓴다
// 실제 선택은 화면에 안 보이는 <input type="radio">가 하고, 모양은 Radio가 그린다 (checked/disabled로 state 결정)
type RadioOptionProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};

export default function RadioOption({
  label,
  checked = false,
  disabled = false,
  required = false,
  className = "",
  ...props
}: RadioOptionProps) {
  const state = disabled ? "disabled" : checked ? "selected" : "default";

  return (
    <label
      className={[
        "flex items-center rounded-control",
        "has-focus-visible:outline-2 has-focus-visible:outline-border-accent",
        disabled ? "" : "cursor-pointer",
        className,
      ].join(" ")}
    >
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        required={required}
        className="sr-only"
        {...props}
      />
      <Radio state={state} />
      <Label as="span">{label}</Label>
    </label>
  );
}
