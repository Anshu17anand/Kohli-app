// src/app/milestones/page.tsx
'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const milestones = [
  {
    date: "April 18, 2008",
    title: "IPL Debut",
    description: "Made his IPL debut for Royal Challengers Bangalore.",
  },
  {
    date: "August 18, 2008",
    title: "ODI Debut",
    description: "Made his ODI debut for India vs Sri Lanka at Dambulla.",
  },
  {
    date: "June 12, 2010",
    title: "T20I Debut",
    description: "Made his T20I debut for India vs Zimbabwe at Harare.",
  },
  {
    date: "December 24, 2009",
    title: "First ODI Century",
    description: "Scored his first ODI century (107) vs Sri Lanka at Eden Gardens.",
  },
  {
    date: "August 20, 2011",
    title: "Test Debut",
    description: "Made his Test debut for India vs West Indies at Kingston.",
  },
  {
    date: "January 15, 2012",
    title: "First Test Century",
    description: "Scored his first Test century (116) vs Australia at Adelaide.",
  },
  {
    date: "September 22, 2012",
    title: "First T20I Fifty",
    description: "Scored his first T20I fifty (68*) vs England at Colombo.",
  },
  {
    date: "2013",
    title: "Fastest to 5000 ODI Runs",
    description: "Became the fastest player to reach 5000 ODI runs.",
  },
  {
    date: "2016",
    title: "IPL Orange Cap",
    description: "Scored 973 runs in IPL 2016, the most in a single season.",
  },
  {
    date: "October 22, 2017",
    title: "World No. 1 ODI Batsman",
    description: "Reached No. 1 in ICC ODI batting rankings.",
  },
  {
    date: "August 2018",
    title: "World No. 1 Test Batsman",
    description: "Reached No. 1 in ICC Test batting rankings.",
  },
  {
    date: "October 24, 2018",
    title: "Fastest to 10,000 ODI Runs",
    description: "Became the fastest player to reach 10,000 ODI runs.",
  },
  {
    date: "2017, 2018, 2019",
    title: "ICC Cricketer of the Year",
    description: "Won ICC Cricketer of the Year three years in a row.",
  },
  {
    date: "November 2022",
    title: "Most T20I Runs",
    description: "Became the highest run-scorer in T20I history.",
  },
  {
    date: "2023",
    title: "50th ODI Century",
    description: "Scored his 50th ODI century during the 2023 World Cup.",
  },
  {
    date: "May 2025",
    title: "IPL Champion",
    description: "Led Royal Challengers Bangalore to their first IPL trophy in the 18th season of the IPL.",
  },
];

export default function Milestones() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-90 py-12 relative">
      <Link
        href="/"
        className="absolute top-6 left-8 z-30 bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg font-semibold shadow-lg border-2 border-red-900 transition-colors"
      >
        &larr; Back
      </Link>
      <h1 className="text-4xl font-semibold text-white mb-8 tracking-tight">Milestone Timeline</h1>
      <div className="w-full max-w-2xl mx-auto">
        <ol className="relative border-l-4 border-red-700">
          {milestones.map((m, idx) => (
            <motion.li
              key={idx}
              className="mb-10 ml-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="absolute w-6 h-6 bg-red-700 rounded-full -left-3 border-4 border-black"></div>
              <div className={`rounded-xl shadow-lg p-6 border ${idx === milestones.length - 1 ? "bg-gradient-to-r from-red-700 via-black to-red-700 border-yellow-400" : "bg-black bg-opacity-80 border-red-700"}`}>
                <span className="block text-sm text-red-400 font-semibold mb-1">{m.date}</span>
                <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                <p className="text-white">{m.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}