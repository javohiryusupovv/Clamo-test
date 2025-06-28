"use client";
import "../../../../../styles/international.css";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function International() {
  const t = useTranslations("InternationalPage");

  return (
    <div className="internationalparent overflow-hidden md:py-20 pt-5 pb-16">
      <div className="container pt-3 relative top-0 left-0 flex flex-col md:flex-row gap-10 md:gap-[65px] justify-between items-center w-full md:mb-12">
        <article className="w-full md:w-[45%] relative z-[10]">
          <p className="inline-flex px-2 py-1 font-inter bg-[#23B3FC] text-white rounded-md text-[14px] leading-[100%] font-medium uppercase mb-4">
            {t("firstletter")}
          </p>
          <h3 className="font-semibold font-inter text-[24px] md:text-[32px] leading-9 md:leading-10 mb-2">
            <span className="uppercase text-[#23B3FC] font-semibold">
              {t("international_title")}
            </span>{" "}
            {t("international22")}
          </h3>
          <p className="text-[#012548CC] leading-[140%] font-vk text-base md:text-xl font-medium mb-6 md:mb-10">
            {t("international_des")}
          </p>
          <article className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button className="group font-vk flex justify-center items-center gap-1 bg-[#23B3FC] text-white w-full sm:w-[272px] h-10 rounded-lg cursor-pointer text-[14px] font-medium transition-all duration-200 hover:bg-[#3cbeff]">
              {t("hamkorlar_btn")}{" "}
              <ChevronRight className="w-5 h-5 md:group-hover:translate-x-2 transition-all duration-200" />
            </button>
            <button className="group font-vk flex justify-center items-center gap-1 bg-[#23B3FC]/[12%] text-[#23B3FC] w-full sm:w-[272px] h-10 rounded-lg cursor-pointer text-[14px] font-medium transition-all duration-200 hover:bg-[#23B3FC]/[30%]">
              {t("hamkorlar_btn2")}{" "}
              <ChevronRight className="w-5 h-5 md:group-hover:translate-x-2 transition-all duration-200" />
            </button>
          </article>
        </article>
        <div className="w-full md:w-[55%] flex justify-center items-center relative">
          <Image
            className="w-full max-w-[694px] z-[3]"
            width={400}
            height={200}
            src={"/flag/flag1.png"}
            alt="Flag Logo"
          />
          <Image
            className="absolute top-10 right-0 z-[2] hidden md:block"
            width={400}
            height={200}
            src={"/flag/flag2.png"}
            alt="Flag blur Logo"
          />
        </div>
      </div>
      <div className="shape" />
    </div>
  );
}
