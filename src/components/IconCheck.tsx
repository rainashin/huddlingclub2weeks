import NextImage from "next/image";

// Figma: icon/check (2168:1074) — size=24(회색, 기본) / 32(파란색, SuccessIcon 안에서 쓰는 모양)
type IconCheckProps = {
  size?: 24 | 32;
  className?: string;
};

// Figma에서 받은 SVG 파일 (색이 파일 안에 들어 있다)
const sources = {
  24: "/icons/check.svg",
  32: "/icons/check-success.svg",
};

export default function IconCheck({ size = 24, className = "" }: IconCheckProps) {
  return (
    <NextImage
      src={sources[size]}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className={["shrink-0", className].join(" ")}
    />
  );
}
