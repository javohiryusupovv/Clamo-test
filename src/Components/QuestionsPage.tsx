"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function QuestionsPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [answer, setAnswer] = useState<any[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/faqs/`
        );
        const data = await res.json();
        setAnswer(data);
      } catch (error) {
        setAnswer([]);
      }
    };
    fetchFAQs();
  }, []);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="container md:py-16 py-8">
      <div className="flex items-center justify-between gap-1 md:pb-[28px] pb-[20px]">
        <h1 className="lg:text-[48px] md:text-[44px] text-[20px] font-bold text-[#3D445E]">
          Tez-tez beriladigan savollar
        </h1>
        <p className="sm:text-[16px] text-[13px] font-medium text-[#3D445E] cursor-pointer flex  items-center gap-1 hover:underline transition  group">
          Barcha savollar{" "}
          <FaAngleRight className=" group-hover:translate-x-2 transition" />
        </p>
      </div>
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
              className={`w-full text-left px-6 py-5 text-lg font-medium cursor-pointer flex items-center justify-between  ${
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
    </div>
  );
}
