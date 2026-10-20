import NextImage from "next/image";

// Figma: Image (2168:1126) — type=character(201px 펭귄 캐릭터) / flag(48px 깃발)
type ImageProps = {
  type?: "character" | "flag";
  alt?: string;
  // 화면 첫 부분(초대장 커버)에 보이는 이미지라면 true로 미리 불러온다
  preload?: boolean;
  className?: string;
};

const typeClasses = {
  character: "size-201",
  flag: "size-48 overflow-hidden rounded-media",
};

const sources = {
  character: "/images/character.png",
  flag: "/images/flag.png",
};

const sizes = {
  character: "201px",
  flag: "48px",
};

export default function Image({
  type = "character",
  alt = "",
  preload = false,
  className = "",
}: ImageProps) {
  return (
    <div
      className={["relative shrink-0", typeClasses[type], className].join(" ")}
    >
      <NextImage
        src={sources[type]}
        alt={alt}
        fill
        sizes={sizes[type]}
        preload={preload}
        className="object-cover"
      />
    </div>
  );
}
