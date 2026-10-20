import EmptyState from "@/components/EmptyState";
import NavBar from "@/components/NavBar";
import ResponseRowTrue from "@/components/ResponseRowTrue";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import { mockInvitation, mockRsvps } from "@/lib/mock";
import CopyInvitationButton from "./CopyInvitationButton";

// ISO 일시를 "2026년 11월 21일 (토) 18:00" 모양으로 바꾼다 (/i/[id] 화면과 같은 방식, 한국 시간 고정)
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

// Figma: /i/[id]/responses (2168:871) — 호스트용 응답 현황 (통계 카드 3개 + 응답 목록)
// TODO: 지금은 주소의 id와 상관없이 가짜 데이터(mockInvitation, mockRsvps)를 전부 보여준다
export default function ResponsesPage() {
  const invitation = mockInvitation;
  const rsvps = mockRsvps;

  const attending = rsvps.filter((r) => r.status === "yes");
  const declinedCount = rsvps.length - attending.length;
  // 참석 인원 합계 = 참석한 사람 + 그 사람들의 동반 인원 (Figma 안내 문구 기준)
  const totalPeople = attending.reduce((sum, r) => sum + 1 + r.companions, 0);

  return (
    <main className="mx-auto flex w-full max-w-375 flex-col gap-page-horizontal bg-surface-default">
      <NavBar title="응답 현황" />

      <div className="flex w-full flex-col gap-section-lg px-page-horizontal pb-cover-inset">
        <SectionHeader
          subtitle="Responses"
          title={invitation.title}
          titleAs="h1"
          description={`${formatDate(invitation.date)} · ${invitation.location}`}
        />

        <div className="grid w-full grid-cols-3 gap-inline-md">
          <StatCard label="참석" value={`${attending.length}명`} />
          <StatCard label="불참" value={`${declinedCount}명`} />
          <StatCard label="참석 인원 합계" value={`${totalPeople}명`} highlight />
        </div>

        <p className="text-caption-md text-text-tertiary">
          참석 인원 합계 = 참석한 사람 + 동반 인원
        </p>

        <section className="flex w-full flex-col gap-inline-md">
          <h2 className="text-heading-md text-text-strong">응답 목록</h2>
          {rsvps.length === 0 ? (
            <EmptyState />
          ) : (
            rsvps.map((r) => (
              <ResponseRowTrue
                key={r.id}
                name={r.name}
                status={r.status}
                // 불참이면 동반 인원을 보여주지 않는다 (Figma 설명)
                meta={r.status === "yes" ? `동반 ${r.companions}명` : undefined}
              />
            ))
          )}
        </section>

        <CopyInvitationButton />
      </div>
    </main>
  );
}
