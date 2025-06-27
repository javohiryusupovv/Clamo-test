"use client";

import { useTranslations } from "next-intl";
import Down from "@/assets/icons/whiteDown.png";
import Image from "next/image";

export default function LearnMore() {
  const t = useTranslations("HomePage");
  return (

      <button className="group font-vk hover:bg-[#23B3FC]/[80%] transition-all duration-200 w-[185px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%] cursor-pointer">
        {t("detailed_button")}
        <Image
          src={Down}
          alt="down strelka"
          className="group-hover:translate-x-2 transition-all duration-200"
        />
      </button>

  );
}
