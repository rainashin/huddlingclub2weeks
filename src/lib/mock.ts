// 가짜 데이터: Supabase를 연결하기 전까지 화면을 확인하는 용도
// 나중에 Supabase 조회 함수로 바꾸면 이 파일은 지운다

export type Invitation = {
  id: string;
  subtitle?: string; // 커버 맨 위 작은 글자 (선택)
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
  subtitle: "Huddling Club Year-End Networking",
  title: "허들링 클럽 연말 네트워킹",
  date: "2026-12-19T18:00:00+09:00",
  location: "서울 성수동",
  body: "한 해 동안 함께해 준 3기 멤버와 퍼디·버디를 초대해요.\n따뜻한 음식과 이야기 나누며 편안하게 한 해를 마무리해요.",
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
