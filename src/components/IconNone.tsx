// Figma: icon/none (2168:967) — 빈 아이콘 슬롯. NavBar에서 아이콘이 없을 때 자리만 차지한다
type IconNoneProps = {
  className?: string;
};

export default function IconNone({ className = "" }: IconNoneProps) {
  return (
    <span
      aria-hidden="true"
      className={["block size-24 shrink-0", className].join(" ")}
    />
  );
}
