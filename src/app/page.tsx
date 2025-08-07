'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/kohli_india.jpg")' }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <main className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full">
        {/* Main options at the bottom */}
        <div className="fixed left-0 bottom-0 w-full flex flex-row justify-center gap-6 pb-12 z-20">
          <Link href="/stats" className="bg-red-700 hover:bg-red-800 text-white rounded-xl p-8 text-center shadow-lg transition-colors border-2 border-red-900 font-semibold text-xl mx-2 min-w-[180px]">
            View Stats
          </Link>
          <Link href="/milestones" className="bg-red-700 hover:bg-red-800 text-white rounded-xl p-8 text-center shadow-lg transition-colors border-2 border-red-900 font-semibold text-xl mx-2 min-w-[180px]">
            Milestone Timeline
          </Link>
          <Link href="/quiz" className="bg-red-700 hover:bg-red-800 text-white rounded-xl p-8 text-center shadow-lg transition-colors border-2 border-red-900 font-semibold text-xl mx-2 min-w-[180px]">
            Quiz / Trivia
          </Link>
          <Link href="/personalinfo" className="bg-red-700 hover:bg-red-800 text-white rounded-xl p-8 text-center shadow-lg transition-colors border-2 border-red-900 font-semibold text-xl mx-2 min-w-[180px]">
            Personal Information
          </Link>
        </div>
      </main>
    </div>
  );
}
