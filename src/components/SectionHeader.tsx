// Figma: SectionHeader (2168:1122) — subtitle · title · description 묶음
// Figma의 showSubtitle/showTitle/showDescription 대신, 값을 넘기지 않은 줄은 그리지 않는다
// tone=inverse는 어두운 배경(InvitationCover) 위에서 쓰는 흰 글씨 모양 (Figma 커버 안 오버라이드)
type SectionHeaderProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  titleAs?: "h1" | "h2";
  tone?: "default" | "inverse";
  className?: string;
};

const toneClasses = {
  default: {
    subtitle: "text-action-secondary",
    title: "text-text-primary",
    description: "text-text-primary",
  },
  inverse: {
    subtitle: "text-text-inverse opacity-60",
    title: "text-text-inverse",
    description: "text-text-inverse",
  },
};

export default function SectionHeader({
  subtitle,
  title,
  description,
  titleAs = "h2",
  tone = "default",
  className = "",
}: SectionHeaderProps) {
  const TitleTag = titleAs;
  const colors = toneClasses[tone];
  return (
    <div
      className={[
        "flex w-full flex-col items-center gap-stack-md text-center",
        className,
      ].join(" ")}
    >
      {subtitle && (
        <p className={["w-full text-label-md", colors.subtitle].join(" ")}>
          {subtitle}
        </p>
      )}
      {title && (
        // whitespace-pre-line: 입력한 줄바꿈을 화면에 그대로 보여준다
        <TitleTag
          className={["w-full whitespace-pre-line text-title-lg", colors.title].join(" ")}
        >
          {title}
        </TitleTag>
      )}
      {description && (
        <p className={["w-full text-body-md", colors.description].join(" ")}>
          {description}
        </p>
      )}
    </div>
  );
}
