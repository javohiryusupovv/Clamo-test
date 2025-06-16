"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Shahar from "../../../../../public/Imgs/Shahar.png";
import WhiteDown from "@/assets/icons/whiteDown.png";
import { useTranslations } from "next-intl";

export default function NewsPage() {
  const t = useTranslations("HomePage");

  return (
    <div className="container pb-10">
      <h1 className="font-bold text-[18px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] text-[#3D445E] leading-[120%]">
        {t("news_title")}
      </h1>
      <p className="font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] text-[#012548CC] pb-[16px] sm:pb-[20px] md:pb-[28px] leading-[150%]">
        {t("all_servises")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group relative rounded-[16px] sm:rounded-[24px] overflow-hidden">
          <Image
            src={Shahar}
            alt="City image"
            className="w-full h-full object-cover"
            width={300}
            height={200}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051425]/85 via-[#051425]/60 to-[#051425]/40"></div>
          <p className="absolute top-4 left-4 text-[#EDF0EF] font-normal text-[10px] sm:text-[14px] z-10">
            10.08.2023
          </p>
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h2 className="text-[14px] sm:text-[18px] md:text-[22px] xl:text-[28px] font-bold leading-[130%] pb-2">
              {t("img_title")}
            </h2>
            <Link
              href={`/news/1`}
              className="hover:underline text-white font-medium text-[12px] sm:text-[14px] flex items-center gap-4"
            >
              {t("detailed_button")}
              <div className="border border-[#74807B] py-2 px-2 rounded-full relative group-hover:border-[#23B3FC]">
                <FaArrowRightLong className="w-4 h-4 -translate-x-2 transition-all duration-200 group-hover:translate-x-0" />
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="group bg-[#F6F9FC] rounded-[16px] p-4 w-full">
              <p className="text-[10px] sm:text-[12px] md:text-[14px] pb-[48px]">
                10.08.2023
              </p>
              <h3 className="font-bold text-[12px] md:text-[15px] lg:text-[18px] leading-[130%] pb-3">
                {t("new_chance")}
              </h3>
              <Link
                href={`/news/2`}
                className="hover:underline text-[#74807B] font-medium text-[12px] sm:text-[14px] flex items-center gap-4"
              >
                {t("detailed_button")}
                <div className="border border-[#74807B] py-2 px-2 rounded-full relative group-hover:border-[#23B3FC]">
                  <FaArrowRightLong className="w-4 h-4 -translate-x-2 transition-all duration-200 group-hover:translate-x-0" />
                </div>
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="group bg-[#F6F9FC] rounded-[16px] p-4 w-full">
                <p className="text-[10px] sm:text-[12px] md:text-[14px] pb-[48px]">
                  10.08.2023
                </p>
                <h3 className="font-bold text-[12px] md:text-[15px] lg:text-[18px] leading-[130%] pb-3">
                  {t("new_chance")}
                </h3>
                <Link
                  href={`/news/2`}
                  className="hover:underline text-[#74807B] font-medium text-[12px] sm:text-[14px] flex items-center gap-4"
                >
                  {t("detailed_button")}
                  <div className="border border-[#74807B] py-2 px-2 rounded-full relative group-hover:border-[#23B3FC]">
                    <FaArrowRightLong className="w-4 h-4 -translate-x-2 transition-all duration-200 group-hover:translate-x-0" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="group bg-[#F6F9FC] rounded-[16px] p-4 w-full">
                <p className="text-[10px] sm:text-[12px] md:text-[14px] pb-[48px]">
                  10.08.2023
                </p>
                <h3 className="font-bold text-[12px] md:text-[15px] lg:text-[18px] leading-[130%] pb-3">
                  {t("new_chance")}
                </h3>
                <Link
                  href={`/news/2`}
                  className="hover:underline text-[#74807B] font-medium text-[12px] sm:text-[14px] flex items-center gap-4"
                >
                  {t("detailed_button")}
                  <div className="border border-[#74807B] py-2 px-2 rounded-full relative group-hover:border-[#23B3FC]">
                    <FaArrowRightLong className="w-4 h-4 -translate-x-2 transition-all duration-200 group-hover:translate-x-0" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex md:justify-end justify-center pt-6">
        <button className="group w-full max-w-[200px] h-[35px] sm:w-[250px] sm:h-[40px] flex items-center justify-center gap-3 bg-[#23B3FC] hover:bg-[#23B3FC]/[80%] rounded-lg text-xs sm:text-sm md:text-base font-medium text-white">
          {t("learn_more_button")}
        </button>
        <Image
          src={WhiteDown}
          alt="down strelka"
          className="w-4 h-4 group-hover:translate-x-2 transition-all duration-200"
        />
      </div>
    </div>
  );
}
