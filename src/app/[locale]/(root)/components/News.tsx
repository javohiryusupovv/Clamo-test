"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Down from "@/assets/icons/whiteDown.png";
import { NewsTypes } from "../../../../../app.types";
import { getLocalizedValue, pickStringProps } from "@/lib/getLocalization";

export default function NewsPage({ news }: { news: NewsTypes[] }) {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const slicedNews = news.slice(0, 4); // faqat 4 ta elementni olamiz

  return (
    <div className="container pb-10">
      <h1 className="font-bold text-[18px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] text-[#3D445E] leading-[120%]">
        {t("news_title")}
      </h1>
      <p className="font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] text-[#012548CC] pb-[16px] sm:pb-[20px] md:pb-[28px] leading-[150%]">
        {t("all_servises")}
      </p>

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
              <p className="absolute top-4 left-4 text-[#EDF0EF] text-[10px] sm:text-[14px] z-10">
                {slicedNews[0].created_at?.slice(0, 10)}
              </p>
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <h2 className="text-[14px] sm:text-[18px] md:text-[22px] xl:text-[28px] font-bold leading-[130%] pb-2">
                  {getLocalizedValue(
                    pickStringProps(slicedNews[0]),
                    "description",
                    locale
                  )}
                </h2>
                <button className="hover:underline text-white font-medium text-[12px] sm:text-[14px] flex items-center gap-4">
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
              <div className="bg-[#F6F9FC] group sm:p-6 p-4 rounded-[16px] sm:min-h-[240px] min-h-[140px] flex flex-col justify-between h-full">
                <p className="text-[10px] sm:text-[12px] md:text-[14px]">
                  {slicedNews[1].created_at?.slice(0, 10)}
                </p>
                <h3 className="font-bold text-[#3D445E] text-[14px] md:text-[16px] lg:text-[24px] leading-[130%] pb-3">
                  {getLocalizedValue(
                    pickStringProps(slicedNews[1]),
                    "title",
                    locale
                  )}
                </h3>
                <button className="hover:underline text-[#74807B] font-medium text-[12px] sm:text-[14px] flex items-center gap-4">
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
                    <div className="bg-[#F6F9FC] group p-4 rounded-[16px] h-full flex flex-col justify-between">
                      <p className="text-[10px] sm:text-[12px] md:text-[14px]">
                        {slicedNews[i].created_at?.slice(0, 10)}
                      </p>
                      <h3 className="font-bold text-[#3D445E] text-[14px] md:text-[16px] lg:text-[24px] leading-[130%] pb-3">
                        {getLocalizedValue(
                          pickStringProps(slicedNews[i]),
                          "title",
                          locale
                        )}
                      </h3>
                      <button className="hover:underline text-[#74807B] font-medium text-[12px] sm:text-[14px] flex items-center gap-4">
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
          <button className="group w-48 h-[35px] sm:w-[250px] sm:h-[40px] flex items-center justify-center gap-3 bg-[#23B3FC] hover:bg-[#23B3FC]/[80%] rounded-lg text-xs sm:text-sm md:text-base font-medium text-white">
            {t("learn_more_button")}
            <Image
              src={Down}
              alt="down strelka"
              className="sm:group-hover:translate-x-2 transition-all duration-200"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
