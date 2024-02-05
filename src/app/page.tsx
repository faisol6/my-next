"use client"; // 👈 use it here
import Image from "next/image";
import ListItem from "./components/listItem";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ListItem />
    </main>
  );
}

// let token: string | null = "";
//   if (typeof window !== "undefined") {
//     token = localStorage.getItem("webplatformToken");
//   }
