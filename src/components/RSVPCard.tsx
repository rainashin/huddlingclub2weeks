"use client";

import { useId, useState, type FormEvent } from "react";
import Input from "@/components/Input";
import Label from "@/components/Label";
import RadioOption from "@/components/RadioOption";
import Stepper from "@/components/Stepper";
import Button from "@/components/Button";
import SuccessIcon from "@/components/SuccessIcon";
import InfoRow from "@/components/InfoRow";

// Figma: RSVPCard (2168:1029) — state=form(제출 전) / done(제출 후, 같은 자리에서 바뀜)
// 게스트 보기 화면(/i/[id])의 참석 응답 카드. 저장(Supabase)은 부모가 onSubmit에서 처리한다
export type RsvpResponse = {
  name: string;
  status: "yes" | "no";
  companions: number;
};

const NAME_MAX = 20; // 이름 최대 글자 수
const COMPANIONS_MAX = 10; // 동반 인원 최대

type RSVPCardProps = {
  state?: "form" | "done";
  // 제출 버튼을 누르면 입력값을 넘겨준다
  onSubmit?: (response: RsvpResponse) => void;
  // done 화면에 보여줄 응답 (없으면 방금 입력한 값을 보여준다)
  response?: RsvpResponse;
  className?: string;
};

export default function RSVPCard({
  state = "form",
  onSubmit,
  response,
  className = "",
}: RSVPCardProps) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"yes" | "no" | null>(null);
  const [companions, setCompanions] = useState(0);
  const statusLabelId = useId();

  // 필수값(이름, 참석 여부)이 비어 있거나 이름이 너무 길면 버튼을 비활성으로 둔다
  // (화면 검사일 뿐이라, 저장할 때 서버에서 다시 검사해야 한다)
  const trimmedName = name.trim();
  const canSubmit =
    trimmedName !== "" && trimmedName.length <= NAME_MAX && status !== null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit || status === null) return;
    // 불참이면 동반 인원은 0명으로 보낸다
    const count = status === "no" ? 0 : Math.min(Math.max(companions, 0), COMPANIONS_MAX);
    onSubmit?.({ name: trimmedName, status, companions: count });
  }

  const cardClasses = [
    "flex w-full flex-col items-start gap-stack-lg rounded-card bg-surface-default px-page-horizontal py-stack-lg",
    className,
  ].join(" ");

  if (state === "done") {
    const shown = response ?? { name, status: status ?? "yes", companions };
    return (
      <div className={cardClasses}>
        <div className="flex w-full flex-col items-center gap-stack-sm py-section-lg text-center">
          <SuccessIcon />
          <p className="text-title-lg text-text-strong">참석 여부를 보냈어요</p>
          <p className="text-body-md text-text-secondary">
            호스트에게 응답이 전달됐어요.
          </p>
        </div>
        <div className="flex w-full flex-col gap-inline-md rounded-card bg-surface-subtle p-stack-md">
          <InfoRow type="spread" label="이름" value={shown.name} />
          <InfoRow
            type="spread"
            label="참석 여부"
            value={shown.status === "yes" ? "참석" : "불참"}
          />
          <InfoRow type="spread" label="동반 인원" value={`${shown.companions}명`} />
        </div>
      </div>
    );
  }

  return (
    <form className={cardClasses} onSubmit={handleSubmit}>
      <div className="flex w-full flex-col items-center gap-inline-compact text-center">
        <h2 className="text-heading-lg text-text-strong">참석 여부 알려주기</h2>
        <p className="text-body-md text-text-secondary">
          이름과 참석 여부를 남겨주세요.
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-stack-lg">
        <Input
          label="이름"
          name="name"
          required
          maxLength={NAME_MAX}
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <div className="flex w-full flex-col items-start gap-inline-md">
          <Label as="span" id={statusLabelId} required>
            참석 여부
          </Label>
          <div
            role="radiogroup"
            aria-labelledby={statusLabelId}
            className="flex w-full items-center"
          >
            <RadioOption
              label="참석"
              name="status"
              value="yes"
              checked={status === "yes"}
              onChange={() => setStatus("yes")}
              className="min-w-0 flex-1"
            />
            <RadioOption
              label="불참"
              name="status"
              value="no"
              checked={status === "no"}
              onChange={() => setStatus("no")}
              className="min-w-0 flex-1"
            />
          </div>
        </div>

        {/* 불참을 고르면 동반 인원은 숨긴다 (0명으로 보낸다) */}
        {status !== "no" && (
          <div className="flex w-full flex-col items-start gap-inline-md">
            <Label as="span" required>
              동반 인원
            </Label>
            <Stepper
              value={companions}
              onChange={setCompanions}
              min={0}
              max={COMPANIONS_MAX}
            />
            <p className="text-caption-md text-text-tertiary">
              본인을 제외하고 함께 오는 인원이에요.
            </p>
          </div>
        )}
      </div>

      <Button type="submit" size="lg" disabled={!canSubmit} className="w-full">
        참석 여부 보내기
      </Button>
    </form>
  );
}
