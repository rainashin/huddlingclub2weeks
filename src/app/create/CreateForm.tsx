"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import CopyLinkField from "@/components/CopyLinkField";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import InvitationCover from "@/components/InvitationCover";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import SuccessIcon from "@/components/SuccessIcon";
import Textarea from "@/components/Textarea";

// 임시 초대장 id (아직 저장 기능이 없어 고정값)
const DEMO_ID = "demo";

// 입력 폼과 미리보기. 입력값을 가공하지 않고 그대로 미리보기에 보여준다
// "발행하기"를 누르면 같은 화면이 발행 완료 상태(Figma 2168:910)로 바뀐다
export default function CreateForm() {
  const router = useRouter();
  const [subtitle, setSubtitle] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [body, setBody] = useState("");
  // 발행 완료 후 링크 앞부분(예: http://localhost:3000). 비어 있으면 아직 발행 전
  const [origin, setOrigin] = useState("");

  const invitationPath = `/i/${DEMO_ID}`;
  // 필수값(제목·일시·장소·본문)이 모두 채워져야 발행할 수 있다. 부제는 선택
  const canPublish = [title, date, location, body].every((v) => v.trim() !== "");

  // TODO: Supabase 저장 후 실제 id로 바꾸기
  function handlePublish() {
    // origin은 브라우저에서만 알 수 있으므로 클릭할 때 읽어서 저장한다
    setOrigin(window.location.origin);
    window.scrollTo(0, 0);
  }

  if (origin) {
    return (
      <div className="flex w-full flex-col gap-page-horizontal">
        <NavBar title="발행 완료" />
        <div className="flex w-full flex-col gap-section-lg px-page-horizontal pb-cover-inset">
          <div className="flex w-full flex-col items-center gap-stack-sm py-stack-lg text-center">
            <SuccessIcon />
            <p className="text-title-lg text-text-strong">초대장이 발행됐어요!</p>
            <p className="text-body-md text-text-secondary">아래 두 링크를 복사해 두세요.</p>
          </div>
          <CopyLinkField
            title="초대장 링크"
            url={origin + invitationPath}
            description="게스트에게 공유하는 링크예요."
          />
          <CopyLinkField
            title="응답 현황 링크"
            url={`${origin}${invitationPath}/responses`}
            description="호스트용이에요. 이 링크를 아는 사람은 응답 목록을 볼 수 있어요."
          />
          <Button size="lg" className="w-full" onClick={() => router.push(invitationPath)}>
            내 초대장 보기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-control-compact">
      <NavBar title="초대장 만들기" />
      <div className="flex w-full flex-col gap-section-lg px-page-horizontal pb-cover-inset">
        {/* 입력 폼 */}
        <div className="flex w-full flex-col gap-stack-lg">
          <Input
            label="부제"
            placeholder="예) Huddling Club 2nd Meetup"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
          <Textarea
            label="제목"
            rows={2}
            required
            helper="엔터로 줄을 나눌 수 있어요 · 최대 2줄"
            placeholder={"예) 허들링 클럽 2번째\n오프라인 밋업"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            label="일시"
            required
            placeholder="예) 2026년 11월 14일 (토) 09:00"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            label="장소"
            required
            placeholder="예) 세종 남극 기지"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Textarea
            label="본문"
            rows={4}
            required
            placeholder="게스트에게 전할 초대 글을 적어주세요"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        {/* 실시간 미리보기 (안쪽만 스크롤) */}
        <section className="flex w-full flex-col gap-inline-md">
          <Label as="span">미리보기</Label>
          <div className="h-463 w-full overflow-y-auto rounded-control border border-border-subtle bg-surface-default">
            <InvitationCover subtitle={subtitle} title={title} date={date} location={location} />
            <div className="flex w-full flex-col items-center gap-stack-md px-page-horizontal py-cover-inset">
              <Image type="flag" alt="" />
              <p className="w-full whitespace-pre-line wrap-break-word text-center text-body-compact text-text-primary">
                {body}
              </p>
            </div>
            <div className="w-full px-page-horizontal pt-stack-lg pb-section-lg">
              <div className="flex w-full flex-col gap-control-compact rounded-card bg-surface-subtle p-page-horizontal">
                <InfoRow label="일시" value={date} />
                <InfoRow label="장소" value={location} />
              </div>
            </div>
          </div>
          <p className="text-caption-md text-text-tertiary">
            입력하는 내용이 바로 미리보기에 반영돼요.
          </p>
        </section>
      </div>

      {/* 발행 버튼: 화면 아래에 붙어 있다 */}
      <div className="sticky bottom-0 w-full bg-surface-default p-page-horizontal">
        <Button size="lg" className="w-full" disabled={!canPublish} onClick={handlePublish}>
          발행하기
        </Button>
      </div>
    </div>
  );
}
