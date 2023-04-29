import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` text-xl text-green-600 font-semibold ${inter.className} min-h-screen overflow-hidden relative bg-gradient-to-t from-gray-600`}
    >
      <div className="w-1/3 border-[1px] border-red-400 bg-gray-300 rounded-lg z-10 absolute right-16 bottom-[25vh] p-4">
        Hello, this is starter for next js, prisma and tailwindcss
      </div>
      <div className="w-big h-big rounded-full bg-gray-600 absolute inset-x-0 -z-10 mx-auto -bottom-24"></div>
      <div className="text-4xl font-bold text-gray-700 absolute top-[30vh] left-24 w-70 flex flex-col space-y-2">
        <span>Freelancer</span>
        <span className="text-red-600">Designer</span>
      </div>
    </main>
  );
}
