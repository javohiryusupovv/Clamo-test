"use client";
import { FAQItem } from "../../../../../../app.types";
import { useLocale } from "next-intl";
import { getLocalizedValue, pickStringProps } from "@/lib/getLocalization";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Props {
  faqData: FAQItem[];
}

export default function FaqAccordion({ faqData }: Props) {
  const locale = useLocale();


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
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value="item-1" className="border border-[#E3E8E9] rounded-3xl hover:bg-[#0653C9]/10 hover:border-[#0653C9] transition-all duration-200 py-2 px-8 ">
                <AccordionTrigger className="text-2xl text-[#3D445E] font-vk font-extrabold">{localQuestion}</AccordionTrigger>
                <AccordionContent className="text-[18px] font-normal leading-[140%] text-[#3D445E] font-vk">
                  {localAnswer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
