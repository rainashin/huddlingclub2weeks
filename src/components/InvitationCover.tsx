import SectionHeader from "@/components/SectionHeader";
import Image from "@/components/Image";

// Figma: InvitationCover (2168:982) — 초대장 상단 커버 (SectionHeader + Image(character) + 일시·장소)
// /create 미리보기와 /i/[id]에서 같은 컴포넌트를 쓴다
type InvitationCoverProps = {
  title: string;
  date: string;
  location: string;
  subtitle?: string;
  className?: string;
};

// 일시·장소 한 묶음 (작은 라벨 칩 + 값)
function CoverDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-inline-md">
      <span className="rounded-control bg-info-subtle px-inline-compact py-inline-xs text-caption-md font-semibold text-info-strong">
        {label}
      </span>
      <p className="w-full text-center text-label-md text-text-inverse">{value}</p>
    </div>
  );
}

export default function InvitationCover({
  title,
  date,
  location,
  subtitle,
  className = "",
}: InvitationCoverProps) {
  return (
    <section
      className={[
        // 배경 그라데이션: Figma 색(cover-gradient)이 토큰에 없어 가장 가까운 토큰으로 근사
        "flex w-full flex-col items-center justify-center gap-page-horizontal overflow-hidden bg-linear-to-b from-text-strong to-text-tertiary px-page-horizontal py-cover-inset",
        className,
      ].join(" ")}
    >
      <SectionHeader subtitle={subtitle} title={title} titleAs="h1" tone="inverse" />
      <Image type="character" alt="" preload />
      <CoverDetail label="일시" value={date} />
      <CoverDetail label="장소" value={location} />
    </section>
  );
}
