"use client";

import { useState } from "react";
import ReyesterCard from "./ReyesterCard";
import { ReyesterItem } from "../../../../../../app.types";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";

interface ReyesterType {
  id: number;
  name: string;
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
      <div className="flex items-center justify-end gap-2 sm:gap-4 mb-6">
        <select
          className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="" className="font-inter">
            {t("all_section")}
          </option>
          {types.map((type) => (
            <option key={type.id} value={type.slug} className="font-inter">
              {type.name}
            </option>
          ))}
        </select>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("search_placeholder")}
            className="w-full font-inter bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2 text-sm text-[#97A0A9] focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-6">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <ReyesterCard
              key={item.id}
              title={item.title_uz}
              location={item.location_uz}
              accreditationNumber={item.accreditation_number}
              registrationDate={item.registration_date}
              reyesterType={item.reyester_type}
              website={item.website}
              shares={item.shares}
              email={item.email}
              phone={item.phone}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 italic flex items-center justify-center gap-2">
            <Search className="w-4 h-4" />
            Ma&apos;lumotlar topilmadi
          </p>
        )}
      </div>
    </div>
  );
}
