"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NewsTypes } from "../../../../../../app.types";
import { useLocale, useTranslations } from "next-intl";
import { getLocalizedValue, pickStringProps } from "@/lib/getLocalization";

export default function NewsGrid({ news }: { news: NewsTypes[] }) {
  const [search, setSearch] = useState<string>("");
  const t = useTranslations("HomePage");
  const locale = useLocale();


  return (
    <section className=" bg-[#f6f9fc]">
      <div className="container px-4 py-8">
        {/* Header and Search */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h1 className="text-2xl sm:text-5xl font-bold text-[#3D445E]">{t("news_title")}</h1>
          <div className="w-full sm:w-1/3">
            <div className="relative">
              <input
                placeholder={t("search_place")}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {news
            .filter((item) => {
              const stringItem = pickStringProps(item);
              const title = getLocalizedValue(
                stringItem,
                "title",
                locale
              ).toLowerCase();
              const description = getLocalizedValue(
                stringItem,
                "description",
                locale
              ).toLowerCase();
              return (
                title.includes(search.toLowerCase()) ||
                description.includes(search.toLowerCase())
              );
            })
            .map((item) => {
              const stringItem = pickStringProps(item);
              const localeTitle = getLocalizedValue(stringItem, "title", locale);
              const localeDescription = getLocalizedValue(
                stringItem,
                "description",
                locale
              );
              return (
                <Link key={item.id} href={`/${locale}/news/${item.slug}`}>
                  <div className="bg-white rounded-2xl border border-white hover:border-blue-400 hover:shadow-md transition duration-300 cursor-pointer h-[380px]">
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
                      <p className="text-sm text-gray-500">
                        {item.created_at.slice(0, 10)}
                      </p>
                      <h2 className="text-lg font-semibold leading-snug line-clamp-2">
                        {localeTitle}
                      </h2>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {localeDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}
