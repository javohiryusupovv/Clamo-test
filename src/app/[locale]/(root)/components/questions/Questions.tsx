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
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="flex flex-col gap-4"
        >
          {faqData.map((item, index) => {
            const stringItem = pickStringProps(item);
            const localQuestion = getLocalizedValue(stringItem, "question", locale);
            const localAnswer = getLocalizedValue(stringItem, "answer", locale);

            return (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#E3E8E9] lg:rounded-3xl rounded-xl hover:bg-[#0653C9]/10 hover:border-[#0653C9] transition-all duration-200"
              >
                <AccordionTrigger className="md:text-2xl text-base text-[#3D445E] font-vk font-extrabold px-8 h-[80px] py-2">
                  {localQuestion}
                </AccordionTrigger>
                <AccordionContent className="md:text-[18px] text-[14px] font-normal leading-[140%] text-[#3D445E] font-vk px-8 md:py-2">
                  {localAnswer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
