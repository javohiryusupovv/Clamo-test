"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NewsTypes } from "../../../../../../app.types";
import { useLocale, useTranslations } from "next-intl";
import { getLocalizedValue, pickStringProps } from "@/lib/getLocalization";
import { Clock3, SearchIcon, SearchSlash, LoaderCircle } from 'lucide-react';


export default function NewsGrid({ news }: { news: NewsTypes[] }) {
  const [search, setSearch] = useState<string>("");
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);



  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoading(false);
    }, 1000); // 1s = 1000ms
  };

  // Faqat matnli qidiruvga moslashtirilgan yangiliklar ro'yxati
  const filteredNews = news.filter((item) => {
    const stringItem = pickStringProps(item);
    const title = getLocalizedValue(stringItem, "title", locale).toLowerCase();
    const description = getLocalizedValue(stringItem, "description", locale).toLowerCase();
    return (
      title.includes(search.toLowerCase()) ||
      description.includes(search.toLowerCase())
    );
  });

  return (
    <section className="bg-[#f6f9fc]">
      <div className="container px-4 py-8">
        {/* Header and Search */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h1 className="text-2xl sm:text-5xl font-bold text-[#3D445E] font-vk">{t("news_title")}</h1>
          <div className="w-full sm:w-1/4">
            <article className="relative w-full flex items-center gap-2 border focus-within:border-none focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 rounded-md px-3 shadow-sm bg-[#F6F9FC] transition">
              <SearchIcon className="stroke-1 text-gray-700" />
              <input
                placeholder={t("search_place")}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full font-vk py-2 border-none bg-[#F6F9FC] focus:outline-none"
              />
            </article>

          </div>
        </div>

        {/* Grid or Not Found Message */}
        {filteredNews.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {filteredNews.slice(0, visibleCount).map((item) => {
                const stringItem = pickStringProps(item);
                const localeTitle = getLocalizedValue(stringItem, "title", locale);
                const localeDescription = getLocalizedValue(stringItem, "description", locale);
                const createdAt = new Date(item.created_at);
                const date = createdAt.toLocaleDateString('en-CA'); // YYYY-MM-DD
                const time = createdAt.toLocaleTimeString('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit'
                });

                return (
                  <Link key={item.id} href={`/${locale}/news/${item.slug}`}>
                    <div className="bg-white rounded-2xl border border-white hover:border-blue-400 hover:shadow-md transition duration-300 cursor-pointer h-[378px]">
                      <div className="m-3">
                        <Image
                          src={item.image}
                          alt={localeTitle}
                          className="w-full h-40 object-cover rounded-2xl"
                          width={349}
                          height={196}
                        />
                      </div>
                      <div className="p-4 space-y-2">
                        <h6 className="flex items-center gap-2 text-sm text-[#697583] font-vk">
                          <Clock3 className="w-4 h-4" /> {date}
                          <p className="w-1 h-1 bg-[#697583] rounded-full"></p>
                          <span>{time}</span>
                        </h6>
                        <h2 className="text-lg font-semibold leading-snug line-clamp-2 font-vk">{localeTitle}</h2>
                        <p className="text-sm text-gray-600 line-clamp-2 font-vk">{localeDescription}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            {visibleCount < filteredNews.length && (
              <div className="w-full flex justify-center">
                <button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  className={`px-10 py-2 m-a border rounded-lg cursor-pointer bg-[#23B3FC] text-white ${isLoading ? "" : "hover:bg-[#23B3FC]/80"} flex items-center gap-2 justify-center transition ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                  {isLoading ? (
                    <>
                      <LoaderCircle className="animate-spin w-4 h-4" />
                      {t("loading_text")}...
                    </>
                  ) : (
                    t("more_btn")
                  )}
                </button>
              </div>
            )}

          </>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <h5 className="flex items-center gap-2 text-gray-500">
              <SearchSlash className="w-7 h-7 stroke-[1.5]" />
              {t("notDataTitle")}
            </h5>
          </div>
        )}
      </div>
    </section>
  );
}
