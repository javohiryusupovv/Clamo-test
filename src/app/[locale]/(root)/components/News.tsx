"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { NewsTypes } from "../../../../../app.types";
import { getLocalizedValue, pickStringProps } from "@/lib/getLocalization";
import { FaAngleRight } from "react-icons/fa6";

export default function NewsPage({ news }: { news: NewsTypes[] }) {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const slicedNews = news.slice(0, 4); // faqat 4 ta elementni olamiz;

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.slice(0, 10).split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="container pb-10">
      <div className=" flex flex-col gap-[4px]">
        <h1 className="font-bold font-vk text-3xl md:text-[36px] lg:text-[44px] xl:text-[48px] text-[#3D445E] leading-[120%]">
          {t("news_title")}
        </h1>
        <p className="font-medium font-vk text-sm sm:text-base md:text-[20px] text-[#012548CC] pb-[16px] sm:pb-[20px] md:pb-[28px] leading-[150%]">
          {t("all_servises")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT big card (index === 0) */}
        {slicedNews[0] && (
          <Link
            href={`/${locale}/news/${slicedNews[0].slug}`}
            key={slicedNews[0].id}
          >
            <div className="relative group rounded-[16px] sm:rounded-[24px] overflow-hidden h-full sm:min-h-[480px] min-h-[300px]">
              <Image
                src={slicedNews[0].image}
                alt={getLocalizedValue(
                  pickStringProps(slicedNews[0]),
                  "title",
                  locale
                )}
                className="w-full h-full object-cover"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051425]/85 via-[#051425]/60 to-[#051425]/40"></div>
              <p className="absolute text-[#EDF0EF] top-4 left-4 font-vk text-[10px] sm:text-[16px] z-10">
                {formatDate(slicedNews[0].created_at)}
              </p>
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <h2 className="text-[14px] font-vk sm:text-[18px] md:text-[22px] xl:text-[28px] font-bold leading-[130%] pb-2">
                  {getLocalizedValue(
                    pickStringProps(slicedNews[0]),
                    "description",
                    locale
                  )}
                </h2>
                <button className="hover:underline font-vk text-white font-medium text-[12px] sm:text-[16px] flex items-center gap-4">
                  {t("detailed_button")}
                  <div className="border border-white py-2 px-2 rounded-full relative group-hover:border-[#23B3FC]">
                    <FaArrowRightLong className="w-4 h-4 -translate-x-2 transition-all duration-200 group-hover:translate-x-0" />
                  </div>
                </button>
              </div>
            </div>
          </Link>
        )}

        {/* RIGHT column with 3 cards */}
        <div className="flex flex-col gap-4">
          {/* Top tall card (index === 1) */}
          {slicedNews[1] && (
            <Link
              href={`/${locale}/news/${slicedNews[1].slug}`}
              key={slicedNews[1].id}
            >
              <div className="bg-[#F6F9FC] group hover:border-[#23B3FC] border border-transparent sm:p-6 p-4 rounded-[16px] sm:min-h-[240px] min-h-[140px] flex flex-col justify-between h-full">
                <p className="text-[10px] font-vk sm:text-[12px] md:text-[16px] text-[#74807B]">
                  {formatDate(slicedNews[0].created_at)}
                </p>
                <h3 className="font-bold font-vk text-[#3D445E] text-[14px] md:text-[16px] lg:text-[24px] leading-[130%] pb-3">
                  {getLocalizedValue(
                    pickStringProps(slicedNews[1]),
                    "title",
                    locale
                  )}
                </h3>
                <button className="hover:underline font-vk text-[#74807B] font-medium text-[12px] sm:text-[16px] flex items-center gap-4">
                  {t("detailed_button")}
                  <div className="border border-[#74807B] py-2 px-2 rounded-full relative group-hover:border-[#23B3FC]">
                    <FaArrowRightLong className="w-4 h-4 -translate-x-2 transition-all duration-200 group-hover:translate-x-0" />
                  </div>
                </button>
              </div>
            </Link>
          )}

          {/* Bottom 2 small cards side-by-side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:min-h-[220px] min-h-[140px]">
            {[2, 3].map(
              (i) =>
                slicedNews[i] && (
                  <Link
                    href={`/${locale}/news/${slicedNews[i].slug}`}
                    key={slicedNews[i].id}
                  >
                    <div className="bg-[#F6F9FC] group hover:border-[#23B3FC] border border-transparent p-4 rounded-[16px] h-full flex flex-col justify-between">
                      <p className="text-[10px] font-vk sm:text-[12px] md:text-[16px] text-[#74807B]">
                        {formatDate(slicedNews[0].created_at)}
                      </p>
                      <h3 className="font-bold font-vk line-clamp-2 text-[#3D445E] text-[14px] md:text-[16px] lg:text-[24px] leading-[130%]">
                        {getLocalizedValue(
                          pickStringProps(slicedNews[i]),
                          "title",
                          locale
                        )}
                      </h3>
                      <button className="hover:underline font-vk text-[#74807B] font-medium text-[12px] sm:text-[16px] flex items-center gap-4">
                        {t("detailed_button")}
                        <div className="border border-[#74807B] py-2 px-2 rounded-full relative group-hover:border-[#23B3FC]">
                          <FaArrowRightLong className="w-4 h-4 -translate-x-2 transition-all duration-200 group-hover:translate-x-0" />
                        </div>
                      </button>
                    </div>
                  </Link>
                )
            )}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex md:justify-end justify-center pt-6">
        <Link href={`/${locale}/news`}>
          <button className="group font-inter lg:w-[183px] w-full h-[40px] flex items-center justify-center gap-[11.5px] hover:bg-[#23B3FC]/[80%] bg-[#23B3FC] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] "> 
            {t("learn_more_button")}
            <FaAngleRight className="sm:group-hover:translate-x-2 transition-all duration-200" />
          </button>
        </Link>
      </div>
    </div>
  );
}
