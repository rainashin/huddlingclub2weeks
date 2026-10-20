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

  // 필수값(이름, 참석 여부)이 비어 있으면 버튼을 비활성으로 둔다
  const canSubmit = name.trim() !== "" && status !== null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name.trim() === "" || status === null) return;
    onSubmit?.({ name: name.trim(), status, companions });
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

        <div className="flex w-full flex-col items-start gap-inline-md">
          <Label as="span" required>
            동반 인원
          </Label>
          <Stepper value={companions} onChange={setCompanions} min={0} />
          <p className="text-caption-md text-text-tertiary">
            본인을 제외하고 함께 오는 인원이에요.
          </p>
        </div>
      </div>

      <Button type="submit" size="lg" disabled={!canSubmit} className="w-full">
        참석 여부 보내기
      </Button>
    </form>
  );
}
