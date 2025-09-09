"use client";
import { useTranslations } from "next-intl";

export default function Structure() {
  const t = useTranslations("AboutPage");

  return (
    <div className="container ">
      <h1 className="text-[#3D445E] text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
        {t("abouttitle2")}
      </h1>
      <p className="text-[rgba(1, 37, 72, 0.80)] text-sm sm:text-base md:text-lg font-medium text-center mb-8 ">
        {t("about_des2")}
      </p>
      <div className="flex justify-center">
        <img src="/Images/Screenpagee.png" alt="Strukture college" />
      </div>
    </div>
  );
}
