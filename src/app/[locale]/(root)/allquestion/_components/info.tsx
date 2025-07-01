"use client"

import { useTranslations } from "next-intl";

export default function InfoTitle() {
    const t = useTranslations("HomePage");

  return (
    <div>
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-vk leading-[100%] lg:pb-8 md:pb-5 pb-3 max-sm:text-center font-bold text-[#3D445E]">
        {t("question_title")}
      </h1>
    </div>
  )
}
