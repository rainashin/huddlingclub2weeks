// Figma: Radio (2168:1079) — state=default/selected/disabled. 보이는 모양만 그린다 (실제 선택은 RadioOption의 input이 한다)
type RadioProps = {
  state?: "default" | "selected" | "disabled";
  className?: string;
};

const outerClasses = {
  default: "bg-text-tertiary",
  selected: "bg-action-primary",
  disabled: "bg-text-disabled",
};

export default function Radio({ state = "default", className = "" }: RadioProps) {
  return (
    <span
      aria-hidden="true"
      className={[
        "flex size-48 shrink-0 items-center justify-center",
        className,
      ].join(" ")}
    >
      <span
        className={[
          "flex size-20 items-center justify-center rounded-pill",
          outerClasses[state],
        ].join(" ")}
      >
        <span
          // 선택됨: 밝은 연두 원 위에서도 보이도록 안쪽 점을 어둡게 한다
          className={[
            "rounded-pill",
            state === "selected" ? "size-8 bg-text-strong" : "size-16 bg-surface-default",
          ].join(" ")}
        />
      </span>
    </span>
  );
}
