import Button from "@/components/Button";

// 실습용 테스트 페이지: 컴포넌트를 종류별로 띄워 눈으로 확인한다
const sizes = ["sm", "md", "lg"] as const;

export default function TestPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[430px] flex-col gap-section px-page-horizontal py-section">
      <h1 className="text-heading-lg">Button 테스트</h1>
      <p className="text-body-md text-text-secondary">
        기본 버튼에 마우스를 올리면 hover 상태를 볼 수 있어요.
      </p>

      {sizes.map((size) => (
        <section key={size} className="flex flex-col gap-stack-sm">
          <h2 className="text-heading-md">size = {size}</h2>
          <div className="flex flex-wrap items-center gap-stack-sm">
            <Button size={size}>기본</Button>
            <Button size={size} disabled>
              비활성
            </Button>
          </div>
          <Button size={size} className="w-full">
            가로 꽉 채우기
          </Button>
        </section>
      ))}
    </main>
  );
}
