"use client";
import "../../../../../styles/international.css";
import { ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function International() {
  const t = useTranslations("InternationalPage");
  const locale = useLocale();

  return (
    <div className="internationalparent overflow-hidden lg:pb-16 pb-8">
      <div className="container relative top-0 left-0 flex flex-col md:flex-row gap-6 md:gap-[65px] justify-between items-center w-full md:mb-12">
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
          <article className="flex max-sm:flex-col items-center max-md:justify-between gap-3 pb-4 pt-4">
            <Link href={`/${locale}/about#services-center`} className="w-full">
              <button className="group font-inter w-full h-[40px] flex items-center justify-center gap-[11.5px] hover:bg-[#23B3FC]/[80%] bg-[#23B3FC] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] ">
                {t("hamkorlar_btn")}{" "}
                <ChevronRight className="group-hover:translate-x-1 transition-all duration-200" />
              </button>
            </Link>

            <Link
              href={`${locale}/contacts`}
              aria-label="Contact user"
              className="w-full"
            >
              <button className="group font-inter w-full h-[40px] flex items-center justify-center gap-[11.5px] hover:bg-[#23B3FC]/[30%] bg-[#23B3FC]/[12%] transition-all duration-200 rounded-lg text-sm font-medium text-[#23B3FC]  leading-[130%] ">
                {t("hamkorlar_btn2")}{" "}
                <ChevronRight className="group-hover:translate-x-1 transition-all duration-200" />
              </button>
            </Link>
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
      {/* <div className="shape" /> */}
    </div>
  );
}
