"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { AccreditationType } from "@/types/type";
import { useState } from "react";

interface Props {
  pages: AccreditationType[];
}

export default function AccreditationAccordion({ pages }: Props) {
  const t = useTranslations("NavbarPage");
  const locale = useLocale();
  const [value, setValue] = useState<string | undefined>();

  const handleClose = () => {
    setValue(undefined); // accordion close
  };

  return (
    <Accordion
      type="single"
      collapsible
      value={value}
      onValueChange={setValue}
      className="w-full"
    >
      <AccordionItem value="accreditation" className=" !border-transparent">
        <AccordionTrigger className=" flex !justify-start gap-6 text-[15px] sm:text-[17px] font-medium sm:font-semibold text-[#3D445E] hover:no-underline">
          {t("accredation")}
        </AccordionTrigger>

        <AccordionContent className="pl-4 flex flex-col gap-3 py-4">
          <Link
            href={`/${locale}/accreditation`}
            onClick={handleClose}
            className="text-sm text-[#3D445E] hover:text-[#23B3FC]"
          >
            {t("accredation")}
          </Link>

          {pages.map((page) => (
            <Link
              key={page.id}
              href={`/${locale}/accreditation/${page.page_link}`}
              onClick={handleClose}
              className="text-sm text-[#3D445E] hover:text-[#23B3FC]"
            >
              {page.page_name}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
