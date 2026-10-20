import NextImage from "next/image";

// Figma: icon/plus (2168:1016) — 더하기 아이콘. 기본 24px, StepButton 안에서는 20px
type IconPlusProps = {
  size?: 20 | 24;
  className?: string;
};

export default function IconPlus({ size = 24, className = "" }: IconPlusProps) {
  return (
    <NextImage
      src="/icons/plus.svg"
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={["shrink-0", className].join(" ")}
    />
  );
}
