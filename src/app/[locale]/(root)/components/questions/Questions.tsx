"use client";
import { useEffect, useState } from "react";
import { FaqItem } from "../../../../../../app.types";

export default function FaqAccordion() {
  const [faqData, setFaqData] = useState<FaqItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/faqs/`)
      .then((res) => res.json())
      .then((data) => setFaqData(data))
      .catch((err) => console.error("FAQ fetch error:", err));
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container md:py-16 py-8">
      <div className="flex flex-col gap-4">
        {faqData.map((item, index) => (
          <div
            key={item.id}
            className={`${
              openIndex === index ? "" : "bg-white"
            } rounded-lg border border-blue-100 hover:bg-slate-50`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full text-left px-6 py-5 text-lg font-medium cursor-pointer flex items-center justify-between ${
                openIndex === index
                  ? "border-x border-t border-blue-500 rounded-t-lg"
                  : ""
              }`}
            >
              <span>{item.question_uz}</span>
              <span
                className={`text-2xl ${
                  openIndex === index ? "text-blue-500" : "text-slate-400"
                }`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-5 text-base text-slate-700 leading-relaxed border-x border-b border-blue-500 rounded-b-lg">
                {item.answer_uz}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
