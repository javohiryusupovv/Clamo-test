"use client";

import { useTranslations } from "next-intl";

export default function LearnMore() {
    const t = useTranslations("HomePage");
  return (
    <button className="group hover:bg-[#23B3FC]/[80%] transition-all duration-200 w-[185px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%] cursor-pointer">
      {t("detailed_button")}
    </button>
  );
}
