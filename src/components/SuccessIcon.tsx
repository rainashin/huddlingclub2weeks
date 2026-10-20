import IconCheck from "@/components/IconCheck";

// Figma: SuccessIcon (2168:1006) — 완료 표시 아이콘(체크). 발행 완료·참석 신청 완료 상태에서 쓴다
type SuccessIconProps = {
  className?: string;
};

export default function SuccessIcon({ className = "" }: SuccessIconProps) {
  return (
    <div
      className={[
        "flex size-64 shrink-0 items-center justify-center rounded-pill bg-info-subtle",
        className,
      ].join(" ")}
    >
      <IconCheck size={32} />
    </div>
  );
}
