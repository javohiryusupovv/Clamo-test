"use client";

import { useState } from "react";
import ReyesterCard from "./ReyesterCard";
import { ReyesterItem } from "../../../../../../app.types";
import { useLocale, useTranslations } from "next-intl";
import { Search } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getLocalizedValue } from "@/lib/getLocalization";

interface ReyesterType {
  id: number;
  name: string;
  name_uz?: string;
  name_ru?: string;
  name_en?: string;
  slug: string;
}

export default function ReyesterClient({
  reyesters,
  types,
}: {
  reyesters: ReyesterItem[];
  types: ReyesterType[];
}) {
  const [selectedType, setSelectedType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const t = useTranslations("LicensePage");
  const locale = useLocale()

  const filtered = reyesters
    .filter((r) =>
      selectedType
        ? r.reyester_type?.some((type) => type.slug === selectedType)
        : true
    )
    .filter((r) =>
      searchQuery
        ? r.reyester_type?.some((type) =>
          type.slug.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : true
    );

    

  return (
    <div>
      <div className="max-lg:flex-col flex  justify-between gap-2 sm:gap-4 mb-11">
        <h3 className="text-5xl mb-3 xl:mb-0 font-bold font-vk leading-[100%] text-[#3D445E]">{t("clinics_titile")}</h3>
        <div className="flex items-center gap-6 max-sm:flex-col max-sm:items-start">
          <Select
            value={selectedType || "all"}
            onValueChange={(value) => {
              if (value === "all") {
                setSelectedType("");
              } else {
                setSelectedType(value);
              }
            }}
          >
            <SelectTrigger className="w-[250px] max-sm:w-full rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 font-inter focus:ring-1 focus:ring-blue-500">
              <SelectValue placeholder={t("all_section")} />
            </SelectTrigger>
            <SelectContent className="font-inter">
              <SelectItem value="all">{t("all_section")}</SelectItem>
              {types.map((item) => {
                const localizedTitle = getLocalizedValue(
                  {
                    name: item.name,
                    name_uz: item.name_uz || "",
                    name_en: item.name_en || "",
                    name_ru: item.name_ru || "",
                  },
                  "name",
                  locale
                );
              
              return(
                <SelectItem key={item.id} value={item.slug}>
                  {localizedTitle}
                </SelectItem>
              )})}
            </SelectContent>
          </Select>
          <div className="max-ms:order-1 relative w-[350px] max-sm:w-full py-2 border rounded-xl bg-gray-50 focus-within:border-[#4489F7] focus-within:border-[1px] transition-all duration-200">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("search_placeholder")}
              className="w-full font-inter outline-none bg-transparent pl-10 pr-4 py-2 text-sm text-[#97A0A9]"
            />
          </div>

        </div>
      </div>

      <div className="space-y-6">
        {filtered.length > 0 ? (
          filtered.map((item) => {
          console.log(item);
          const localizedTitle = getLocalizedValue(
            {
              title: item.title || "",
              title_uz: item.title_uz || "",
              title_en: item.title_en || "",
              title_ru: item.title_ru || "",
            },
            "title",
            locale
          )
          const localizedLocation = getLocalizedValue({
            location: item.location || "",
            location_uz: item.location_uz || "",
            location_en: item.location_en || "",
            location_ru: item.location_ru || "",
          }, "location", locale)
          
          return(
            <ReyesterCard
              key={item.id}
              title={localizedTitle}
              location={localizedLocation}
              accreditationNumber={item.accreditation_number}
              registrationDate={item.registration_date}
              reyesterType={item.reyester_type}
              website={item.website}
              shares={item.shares}
              email={item.email}
              phone={item.phone}
            />
          )})
        ) : (
          <p className="text-center text-gray-500 italic flex items-center justify-center gap-2">
            <Search className="w-4 h-4" />
              {t("not_found")}
          </p>
        )}
      </div>
    </div>
  );
}
