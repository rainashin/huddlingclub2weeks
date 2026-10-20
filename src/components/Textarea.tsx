import { useId, type TextareaHTMLAttributes } from "react";
import Label from "@/components/Label";
import TextareaField from "@/components/TextareaField";

// Figma: Textarea (2168:1058) — rows=2(제목, 최대 2줄, 높이 72px) / rows=4(본문, 높이 120px)
// Label + TextareaField + 안내 문구. Figma의 showHelper 대신, helper 문구를 넘기면 보여준다
type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "rows"> & {
  label: string;
  rows?: 2 | 4;
  helper?: string;
};

const rowsClasses = {
  2: "h-72",
  4: "h-120",
};

export default function Textarea({
  label,
  rows = 4,
  helper,
  required = false,
  id,
  className = "",
  ...props
}: TextareaProps) {
  const autoId = useId();
  const textareaId = id ?? autoId;
  const helperId = `${textareaId}-helper`;

  return (
    <div className={["flex w-full flex-col items-start gap-inline-compact", className].join(" ")}>
      <Label htmlFor={textareaId} required={required}>
        {label}
      </Label>
      <TextareaField
        id={textareaId}
        rows={rows}
        required={required}
        aria-describedby={helper ? helperId : undefined}
        className={rowsClasses[rows]}
        {...props}
      />
      {helper && (
        <p id={helperId} className="text-caption-md text-text-tertiary">
          {helper}
        </p>
      )}
    </div>
  );
}
