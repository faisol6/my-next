import List from "./list/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <List/>
    </main>
  );
}

// let token: string | null = "";
//   if (typeof window !== "undefined") {
//     token = localStorage.getItem("webplatformToken");
//   }
