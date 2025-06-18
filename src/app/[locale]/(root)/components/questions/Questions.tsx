"use client";
import { useState } from "react";
import { FAQItem } from "../../../../../../app.types";
import { useLocale } from "next-intl";
import { getLocalizedValue } from "@/lib/getLocalization";

interface Props {
  faqData: FAQItem[];
}

export default function FaqAccordion({ faqData }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const locale = useLocale();

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container md:py-16 py-8">
      <div className="flex flex-col gap-4">
        {faqData.map((item, index) => {
          const localQuestion = getLocalizedValue(item, "question", locale);
          const localAnswer = getLocalizedValue(item, "answer", locale);
          return (
            <div
              key={index}
              className={`${openIndex === index ? "" : "bg-white"
                } rounded-lg border border-blue-100 hover:bg-slate-50`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left px-6 py-5 text-lg font-medium cursor-pointer flex items-center justify-between ${openIndex === index
                  ? "border-x border-t border-blue-500 rounded-t-lg"
                  : ""
                  }`}
              >
                <span>{localQuestion}</span>
                <span
                  className={`text-2xl ${openIndex === index ? "text-blue-500" : "text-slate-400"
                    }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-base text-slate-700 leading-relaxed border-x border-b border-blue-500 rounded-b-lg">
                  {localAnswer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  );
}
