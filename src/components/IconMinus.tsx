import NextImage from "next/image";

// Figma: icon/minus (2168:1018) — 빼기 아이콘. 기본 24px, StepButton 안에서는 20px. disabled면 회색
type IconMinusProps = {
  size?: 20 | 24;
  disabled?: boolean;
  className?: string;
};

export default function IconMinus({
  size = 24,
  disabled = false,
  className = "",
}: IconMinusProps) {
  return (
    <NextImage
      src={disabled ? "/icons/minus-disabled.svg" : "/icons/minus.svg"}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={["shrink-0", className].join(" ")}
    />
  );
}
