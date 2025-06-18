// src/app/stats/page.tsx
'use client';

import { useAuthRedirect } from '@/lib/useauth';
import Link from "next/link";

const battingStats = [
  {
    format: 'Test',
    M: 123, Inn: 210, Runs: 9230, BF: 16608, HS: 254, Avg: 46.85, SR: 55.58, NO: 13, '4s': 1027, '6s': 30, '50': 31, '100': 30, '200': 7,
  },
  {
    format: 'ODI',
    M: 302, Inn: 290, Runs: 14181, BF: 15192, HS: 183, Avg: 57.88, SR: 93.35, NO: 45, '4s': 1325, '6s': 153, '50': 74, '100': 51, '200': 0,
  },
  {
    format: 'T20',
    M: 125, Inn: 117, Runs: 4188, BF: 3056, HS: 122, Avg: 48.7, SR: 137.05, NO: 31, '4s': 369, '6s': 124, '50': 38, '100': 1, '200': 0,
  },
  {
    format: 'IPL',
    M: 267, Inn: 259, Runs: 8661, BF: 6519, HS: 113, Avg: 39.55, SR: 132.86, NO: 40, '4s': 771, '6s': 291, '50': 63, '100': 8, '200': 0,
  },
];

const bowlingStats = [
  {
    format: 'Test',
    M: 123, Inn: 11, B: 175, Runs: 84, Wkts: 0, Avg: 0.0, Econ: 2.88, SR: 0.0, BBI: '0/0', BBM: '0/0', '5w': 0, '10w': 0,
  },
  {
    format: 'ODI',
    M: 302, Inn: 50, B: 662, Runs: 680, Wkts: 5, Avg: 136.0, Econ: 6.16, SR: 132.4, BBI: '1/13', BBM: '1/13', '5w': 0, '10w': 0,
  },
  {
    format: 'T20',
    M: 125, Inn: 13, B: 152, Runs: 204, Wkts: 4, Avg: 51.0, Econ: 8.05, SR: 38.0, BBI: '1/13', BBM: '1/13', '5w': 0, '10w': 0,
  },
  {
    format: 'IPL',
    M: 267, Inn: 26, B: 251, Runs: 368, Wkts: 4, Avg: 92.0, Econ: 8.8, SR: 62.75, BBI: '2/25', BBM: '2/25', '5w': 0, '10w': 0,
  },
];

const battingHeaders = ['M', 'Inn', 'Runs', 'BF', 'HS', 'Avg', 'SR', 'NO', '4s', '6s', '50', '100', '200'];
const bowlingHeaders = ['M', 'Inn', 'B', 'Runs', 'Wkts', 'Avg', 'Econ', 'SR', 'BBI', 'BBM', '5w', '10w'];

function StatTable({ title, headers, data }: { title: string, headers: string[], data: { format: string; [key: string]: string | number }[] }) {
  return (
    <div className="w-full max-w-5xl mb-10">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <div className="overflow-x-auto rounded-xl border-2 border-red-700 bg-black bg-opacity-80">
        <table className="min-w-full text-white text-center">
          <thead>
            <tr>
              <th className="py-2 px-3 font-bold text-lg bg-red-700"> </th>
              {headers.map((h) => (
                <th key={h} className="py-2 px-3 font-bold text-lg bg-red-700">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.format} className="border-b border-red-900">
                <td className="py-2 px-3 font-bold text-lg">{row.format}</td>
                {headers.map((h) => (
                  <td key={h} className="py-2 px-3">{row[h]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Stats() {
  const loading = useAuthRedirect();
  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-90 py-12">
      {/* Back Button */}
      <Link
        href="/dashboard"
        className="absolute top-6 left-8 z-30 bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg font-semibold shadow-lg border-2 border-red-900 transition-colors"
      >
        &larr; Back
      </Link>
      <StatTable title="Batting Career Summary" headers={battingHeaders} data={battingStats} />
      <StatTable title="Bowling Career Summary" headers={bowlingHeaders} data={bowlingStats} />
    </div>
  );
}