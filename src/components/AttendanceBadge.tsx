import type { HTMLAttributes } from "react";

// Figma: AttendanceBadge (2168:972) — status=yes(참석) / no(불참). DB rsvps.status 값과 맞춘다
type AttendanceBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  status?: "yes" | "no";
};

const statusClasses = {
  yes: "bg-info-subtle text-info-strong",
  no: "bg-background-subtle text-text-secondary",
};

export default function AttendanceBadge({
  status = "yes",
  className = "",
  ...props
}: AttendanceBadgeProps) {
  return (
    <span
      className={[
        "inline-flex shrink-0 items-center whitespace-nowrap rounded-pill px-control-compact py-inline-sm text-label-md",
        statusClasses[status],
        className,
      ].join(" ")}
      {...props}
    >
      {status === "yes" ? "참석" : "불참"}
    </span>
  );
}
