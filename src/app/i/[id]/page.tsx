import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import InvitationCover from "@/components/InvitationCover";
import { mockInvitation } from "@/lib/mock";
import RsvpSection from "./RsvpSection";

// ISO 일시를 "2026년 11월 21일 (토) 18:00" 모양으로 바꾼다
// 한국 시간 기준으로 고정하고 서버에서만 계산하므로, 접속한 기기 시간대와 상관없이 같은 글자가 나온다
function formatDate(iso: string) {
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(iso));
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("year")}년 ${get("month")}월 ${get("day")}일 (${get("weekday")}) ${get("hour")}:${get("minute")}`;
}

// Figma: /i/[id] (2168:923) — 게스트용 초대장 보기 + 참석 응답 카드
// TODO: 지금은 주소의 id와 상관없이 가짜 데이터(mockInvitation)를 보여준다
export default function InvitationPage() {
  const invitation = mockInvitation;
  const date = formatDate(invitation.date);

  return (
    <main className="mx-auto flex w-full max-w-375 flex-col bg-surface-default">
      <InvitationCover
        subtitle={invitation.subtitle}
        title={invitation.title}
        date={date}
        location={invitation.location}
      />

      {/* 본문 */}
      <section className="flex w-full flex-col items-center gap-stack-md px-page-horizontal py-cover-inset">
        <Image type="flag" alt="" />
        <p className="w-full whitespace-pre-line wrap-break-word text-center text-body-compact text-text-primary">
          {invitation.body}
        </p>
      </section>

      {/* 일시·장소 정보 */}
      <div className="w-full px-page-horizontal pt-stack-lg pb-section-lg">
        <div className="flex w-full flex-col gap-control-compact rounded-card bg-surface-subtle p-page-horizontal">
          <InfoRow label="일시" value={date} />
          <InfoRow label="장소" value={invitation.location} />
        </div>
      </div>

      <RsvpSection />
    </main>
  );
}
