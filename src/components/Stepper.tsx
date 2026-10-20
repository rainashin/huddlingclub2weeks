"use client";

import StepButton from "@/components/StepButton";

// Figma: Stepper (2168:1025) — StepButton(minus) · 값 · StepButton(plus). 동반 인원 입력
// 값이 최솟값(min)이면 빼기 버튼이 disabled, 최댓값(max)이면 더하기 버튼이 disabled
type StepperProps = {
  value: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  unit?: string;
  className?: string;
};

export default function Stepper({
  value,
  onChange,
  min = 0,
  max,
  unit = "명",
  className = "",
}: StepperProps) {
  const canDecrease = value > min;
  const canIncrease = max === undefined || value < max;

  return (
    <div className={["flex items-center gap-stack-sm", className].join(" ")}>
      <StepButton
        icon="minus"
        aria-label="줄이기"
        disabled={!canDecrease}
        onClick={() => onChange?.(value - 1)}
      />
      <span
        aria-live="polite"
        className="whitespace-nowrap text-heading-md text-text-strong"
      >
        {value}
        {unit}
      </span>
      <StepButton
        icon="plus"
        aria-label="늘리기"
        disabled={!canIncrease}
        onClick={() => onChange?.(value + 1)}
      />
    </div>
  );
}
