// 가짜 데이터: Supabase를 연결하기 전까지 화면을 확인하는 용도
// 나중에 Supabase 조회 함수로 바꾸면 이 파일은 지운다

export type Invitation = {
  id: string;
  title: string;
  date: string; // ISO 형식 일시 (한국 시간)
  location: string; // 주소를 글자로만 표시
  body: string;
};

export type Rsvp = {
  id: string;
  invitationId: string;
  name: string;
  status: "yes" | "no"; // 참석 / 불참 (AttendanceBadge와 같은 값)
  companions: number; // 본인을 뺀 동반 인원. 불참이면 0
};

export const mockInvitation: Invitation = {
  id: "3f9c2a7e-5b1d-4e8a-9c6f-2d7b8e1a4c90",
  title: "민지의 집들이에 초대합니다",
  date: "2026-11-21T18:00:00+09:00",
  location: "서울특별시 마포구 월드컵북로 396, 101동 1203호",
  body: "새 집으로 이사했어요!\n맛있는 음식 준비해 둘게요. 편하게 놀러 오세요.",
};

export const mockRsvps: Rsvp[] = [
  {
    id: "a1b2c3d4-0001-4000-8000-000000000001",
    invitationId: mockInvitation.id,
    name: "김서준",
    status: "yes",
    companions: 2,
  },
  {
    id: "a1b2c3d4-0002-4000-8000-000000000002",
    invitationId: mockInvitation.id,
    name: "이하은",
    status: "yes",
    companions: 0,
  },
  {
    id: "a1b2c3d4-0003-4000-8000-000000000003",
    invitationId: mockInvitation.id,
    name: "박도윤",
    status: "no",
    companions: 0,
  },
];
