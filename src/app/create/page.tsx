import CreateForm from "./CreateForm";

// Figma: /create (2168:886) 입력 상태, (2168:910) 발행 완료 상태
// NavBar 제목이 상태에 따라 바뀌므로 NavBar는 CreateForm(클라이언트 컴포넌트) 안에 있다
export default function CreatePage() {
  return (
    <main className="mx-auto flex w-full max-w-375 flex-col bg-surface-default">
      <CreateForm />
    </main>
  );
}
