// Figma: StatCard (2168:993) — highlight=false/true. 응답 현황 숫자 카드. highlight는 참석 인원 합계에만 쓴다
// 너비는 부모가 정한다 (Figma 107px = 375px 화면에서 3칸 grid 한 칸)
type StatCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
  className?: string;
};

export default function StatCard({
  label,
  value,
  highlight = false,
  className = "",
}: StatCardProps) {
  return (
    <div
      className={[
        // justify-between: 좁은 화면에서 라벨이 2줄이 돼도 숫자는 세 카드 모두 아래에 맞춰진다
        "flex w-full flex-col items-center justify-between gap-inline-sm rounded-card px-control-x py-stack-md",
        highlight ? "bg-info-subtle" : "bg-surface-subtle",
        className,
      ].join(" ")}
    >
      {/* break-keep: 줄이 바뀌어도 단어 중간에서 끊지 않는다 */}
      <span className="break-keep text-center text-caption-md text-text-secondary">{label}</span>
      <span
        className={[
          "whitespace-nowrap text-title-lg",
          highlight ? "text-info-strong" : "text-text-strong",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}
