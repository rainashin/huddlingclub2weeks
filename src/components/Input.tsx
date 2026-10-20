import { useId, type InputHTMLAttributes } from "react";
import Label from "@/components/Label";
import InputField from "@/components/InputField";

// Figma: Input (2168:1115) — Label + InputField + 안내 문구. 일시·장소·이름처럼 한 줄 값에 쓴다
// Figma의 showHelper 대신, helper 문구를 넘기면 보여준다
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helper?: string;
};

export default function Input({
  label,
  helper,
  required = false,
  id,
  className = "",
  ...props
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const helperId = `${inputId}-helper`;

  return (
    <div className={["flex w-full flex-col items-start gap-inline-compact", className].join(" ")}>
      <Label htmlFor={inputId} required={required}>
        {label}
      </Label>
      <InputField
        id={inputId}
        required={required}
        aria-describedby={helper ? helperId : undefined}
        {...props}
      />
      {helper && (
        <p id={helperId} className="w-full text-caption-md text-text-tertiary">
          {helper}
        </p>
      )}
    </div>
  );
}
