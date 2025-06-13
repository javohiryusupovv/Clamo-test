"use client";
import { useEffect, useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function Questions() {
  const [answer, setAnswer] = useState<FAQ[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/faqs/`
        );
        const data = await res.json();
        setAnswer(data);
      } catch {
        setAnswer([]);
      }
    };
    fetchFAQs();
  }, []);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col gap-4">
      {answer.map((q, idx) => (
        <div
          key={idx}
          className={`${
            openIndex === idx ? "" : "bg-white"
          } rounded-lg border border-blue-100 hover:bg-slate-50`}
        >
          <button
            onClick={() => handleToggle(idx)}
            className={`w-full text-left px-6 py-5 text-lg font-medium cursor-pointer flex items-center justify-between ${
              openIndex === idx
                ? "border-x border-t border-blue-500 rounded-t-lg"
                : ""
            }`}
          >
            <span>{q.question}</span>
            <span
              className={`text-2xl ${
                openIndex === idx ? "text-blue-500" : "text-slate-400"
              }`}
            >
              {openIndex === idx ? "−" : "+"}
            </span>
          </button>
          {openIndex === idx && (
            <div className="px-6 pb-5 text-base text-slate-700 leading-relaxed border-x border-b border-blue-500 rounded-b-lg">
              {q.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
