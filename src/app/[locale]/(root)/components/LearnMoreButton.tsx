"use client";

import { useTranslations } from "next-intl";
import { FaAngleRight } from "react-icons/fa6";

export default function LearnMore() {
  const t = useTranslations("HomePage");
  return (
    <button className="group font-inter lg:w-[183px] w-full h-[40px] flex items-center justify-center gap-[11.5px] hover:bg-[#23B3FC]/[80%] bg-[#23B3FC] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] "> 
      {t("learn_more_button")}
      <FaAngleRight className="group-hover:translate-x-2 transition-all duration-200" />
    </button>

  );
}
