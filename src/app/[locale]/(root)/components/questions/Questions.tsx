"use client";
import { useState } from "react";
import { FAQItem } from "../../../../../../app.types";
import { useLocale } from "next-intl";
import { getLocalizedValue, pickStringProps } from "@/lib/getLocalization";

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
    <div className="container">
      <div className="flex flex-col gap-4">
        {faqData.map((item, index) => {
          const stringItem = pickStringProps(item);
          const localQuestion = getLocalizedValue(
            stringItem,
            "question",
            locale
          );
          const localAnswer = getLocalizedValue(stringItem, "answer", locale);
          return (
            <div
              key={index}
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
                <span className="font-vk text-[#3D445E]">{localQuestion}</span>
                <span
                  className={`text-2xl ${
                    openIndex === index ? "text-blue-500" : "text-slate-400"
                  }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-base text-[#3D445E] font-vk leading-relaxed border-x border-b border-blue-500 rounded-b-lg ">
                  {localAnswer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
