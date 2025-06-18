'use client';

import { useAuthRedirect } from '@/lib/useauth';
import Link from "next/link";

const infoRows = [
  { label: "Born", value: "November 05, 1988 (36 years)" },
  { label: "Birth Place", value: "Delhi" },
  { label: "Height", value: "5 ft 9 in (175 cm)" },
  { label: "Role", value: "Batsman" },
  { label: "Batting Style", value: "Right Handed Bat" },
  { label: "Bowling Style", value: "Right-arm medium" },
  { label: "Top fan", value: "King Anshu" },
];

export default function PersonalInfo() {
  const loading = useAuthRedirect();
  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-90 py-12">
      <Link
        href="/dashboard"
        className="absolute top-6 left-8 z-30 bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg font-semibold shadow-lg border-2 border-red-900 transition-colors"
      >
        &larr; Back
      </Link>
      <h1 className="text-4xl font-semibold text-white mb-8 tracking-tight">Personal Information</h1>
      <div className="backdrop-blur-sm bg-white/10 border border-white/40 rounded-2xl shadow-2xl p-8 w-96">
        <table className="w-full">
          <tbody>
            {infoRows.map((row) => (
              <tr key={row.label}>
                <td className="py-2 pr-4 font-bold text-right text-white">{row.label}</td>
                <td className="py-2 text-left text-white">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 