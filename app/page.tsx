import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` text-3xl text-green-600 font-bold ${inter.className}`}>
      <h1>Hello, this is starter for next js, prisma and tailwindcss</h1>
    </main>
  );
}
