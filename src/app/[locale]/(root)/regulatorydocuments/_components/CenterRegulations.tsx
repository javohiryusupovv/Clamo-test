"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import WhiteDown from "@/assets/icons/whiteDown.png";

const CenterRegulations: React.FC = () => {
  const t = useTranslations("RegulatorydocumentsPage");
  return (
    <div className="container md:mt-[100px] mt-8 md:mb-16 mb-8">
      {/* Header Section */}
      <div className="mb-8 text-start">
        <h1 className="text-[48px] max-md:text-[26px] font-vk font-bold text-[#3D445E] mb-1">
          {t("centerRegulationsTitle")}
        </h1>
        <p className="text-[#012548CC] font-vk text-lg md:text-xl leading-relaxed">
          {t("centerRegulationsDescription")}
        </p>
      </div>

      {/* Main Content Section */}
      <div className="relative bg-white rounded-lg shadow-lg p-6 md:p-10 overflow-hidden">
        {/* Background Watermark (Anchor icon - you might need an actual SVG or image here) */}
        {/* For demonstration, I'll use a large, faded text character.
            In a real project, you'd use an SVG icon for better quality. */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-bold text-gray-200 opacity-20 z-0 select-none pointer-events-none">
          ⎈
        </div>

        <div className="relative z-10">
          {" "}
          {/* Ensure content is above the watermark */}
          <h2 className="text-2xl font-vk md:text-3xl font-semibold text-[#3D445E] mb-4">
            {t("centerRegulationsSubtitle")}
          </h2>
          <p className="font-vk leading-relaxed mb-4 text-[#3D445E]">
            {t("centerRegulationsParagraph1")}
          </p>
          <p className="text-[#3D445E] font-vk leading-relaxed mb-6">
            {t("centerRegulationsParagraph2")}
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#3D445E] font-vk mb-6">
            <li>{t("centerRegulationsList1")}</li>
            <li>{t("centerRegulationsList2")}</li>
            <li>{t("centerRegulationsList3")}</li>
            <li>{t("centerRegulationsList4")}</li>
          </ul>
          <p className="text-[#3D445E] font-vk leading-relaxed mb-6">
            {t("centerRegulationsParagraph3")}
          </p>
          <button className="group font-vk hover:bg-[#23B3FC]/[80%] w-[272px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium  leading-[130%] mt-[50px] text-[white]">
            {t("downloadButton")}{" "}
            <Image
              src={WhiteDown}
              alt="down strelka"
              className="md:group-hover:translate-x-2 transition-all duration-200"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CenterRegulations;
