"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function QuestionsPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [answer, setAnswer] = useState<any[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!API_URL) {
      console.error("API_BASE_URL is not defined");
      return;
    }
    axios
      .get(`${API_URL}/home/faqs/?page=1&page_size=100`)
      .then((response) => {
        setAnswer(response.data.results || []);
      })
      .catch((error) => console.error("Failed to fetch license data:", error));
  }, [API_URL]);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="container md:py-16 py-8">
      <div className="flex items-center justify-between gap-1 md:pb-[28px] pb-[20px]">
        <h1 className="lg:text-[48px] md:text-[44px] text-[20px] font-bold text-[#3D445E]">
          Tez-tez beriladigan savollar
        </h1>
        <p className="sm:text-[16px] text-[13px] font-medium text-[#3D445E] cursor-pointer flex items-center gap-1 hover:underline transition  group">
          Barcha savollar <FaAngleRight className=" group-hover:translate-x-2 transition" />
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {answer.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-lg border ${openIndex === idx ? "border-blue-500" : "border-blue-100"} bg-white transition hover:bg-slate-50`}
          >
            <button
              onClick={() => handleToggle(idx)}
              className="w-full text-left px-6 py-5 text-lg font-medium cursor-pointer flex items-center justify-between"
            >
              <span>{item.question}</span>
              <span className={`text-2xl ${openIndex === idx ? "text-blue-500" : "text-slate-400"}`}>
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>

            {/* Border tashqi divda qoladi. Ichki content max-height bilan animatsiya qiladi */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? "max-h-[500px] py-3 px-6" : "max-h-0 px-6"
              }`}
            >
              <div className="text-base text-slate-700 leading-relaxed">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
