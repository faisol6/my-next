import List from "./list/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between 2xl:p-24 p-[3vh] bg-black">
      <List/>
    </main>
  );
}
