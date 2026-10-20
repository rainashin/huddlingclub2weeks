// Figma: InfoRow (2168:1008) — type=inline(라벨 | 값 붙여서) / spread(양끝 정렬). 라벨-값 한 줄
type InfoRowProps = {
  label: string;
  value: string;
  type?: "inline" | "spread";
  className?: string;
};

export default function InfoRow({
  label,
  value,
  type = "inline",
  className = "",
}: InfoRowProps) {
  if (type === "spread") {
    return (
      <div
        className={["flex w-full items-center gap-control-compact", className].join(" ")}
      >
        <span className="whitespace-nowrap text-body-md text-text-secondary">
          {label}
        </span>
        <span className="min-w-0 flex-1 text-right text-label-md text-text-strong">
          {value}
        </span>
      </div>
    );
  }

  return (
    <div className={["flex items-center gap-control-compact", className].join(" ")}>
      <span className="whitespace-nowrap text-label-lg text-text-secondary">
        {label}
      </span>
      <span aria-hidden="true" className="h-14 w-1 shrink-0 bg-border-default" />
      <span className="min-w-0 text-label-lg text-text-strong">{value}</span>
    </div>
  );
}
