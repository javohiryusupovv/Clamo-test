"use client";

import { useEffect, useState } from "react";
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
} from "@/components/ui/select";
import { getLocalizedValue } from "@/lib/getLocalization";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getPaginationPages } from "@/lib/getPagination";
import { FaSpinner } from "react-icons/fa";
import { useDebounce } from "@/lib/useDebounce";


interface ReyesterType {
  id: number;
  name: string;
  name_uz?: string;
  name_ru?: string;
  name_en?: string;
  slug?: string;
}

export default function ReyesterClient({
  initialData,
  initialCount,
  types,
}: {
  initialData: ReyesterItem[];
  initialCount: number;
  types: ReyesterType[];
}) {
  const [data, setData] = useState<ReyesterItem[]>(initialData);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(() =>
    initialData.length > 0 ? Math.ceil(initialCount / initialData.length) : 1
  );
  const [loading, setLoading] = useState(false);

  const [selectedType, setSelectedType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const t = useTranslations("LicensePage");
  const locale = useLocale();
  const debouncedSearch = useDebounce(searchQuery, 500);

  const fetchPage = async (newPage: number, search = "", type = "") => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(newPage),
      });

      if (search.trim()) params.append("search", search);
      if (type) params.append("type", type);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/reyester/?${params.toString()}`
      );
      const json = await res.json();

      const items: ReyesterItem[] = json.results || [];
      const total = json.count;

      setData(items);
      setPage(newPage);
      if (total && items.length > 0) {
        const pageSize = items.length;
        setTotalPages(Math.ceil(total / pageSize));
      }
    } catch (err) {
      console.error("Pagination error:", err);
    } finally {
      setLoading(false);
    }
  };

  console.log(data);
  



  useEffect(() => {
    fetchPage(1, debouncedSearch, selectedType);
  }, [debouncedSearch, selectedType]);




  return (
    <div>
      {/* Filters */}
      <div className="max-lg:flex-col flex justify-between gap-2 sm:gap-4 lg:mb-11 md:mb-6 mb-4">
        <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold font-vk text-[#3D445E]">{t("clinics_titile")}</h3>
        <div className="flex items-center lg:gap-6 gap-3 max-sm:flex-col max-sm:items-start">
          <Select
            value={selectedType || "all"}
            onValueChange={(value) => setSelectedType(value === "all" ? "" : value)}
          >
            <SelectTrigger className="w-[250px] max-sm:w-full rounded-lg border bg-gray-50 text-sm text-gray-700 font-inter">
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
                const itemValue = item.slug?.trim() || String(item.id);
                return (
                  <SelectItem key={item.id} value={itemValue}>
                    {localizedTitle}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>

          <div className="relative w-[350px] max-sm:w-full py-2 border rounded-xl bg-gray-50">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="search"
              value={searchQuery}
              autoComplete="off"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("search_placeholder")}
              className="w-full font-inter bg-transparent pl-10 pr-4 text-sm text-[#5d6268] outline-none"
            />
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <FaSpinner className="w-8 h-8 text-blue-500 animate-spin" />
        </div>
      ) : (
        <>
          {/* Results */}
          <div className="space-y-6">
            {data.length > 0 ? (
              data.map((item) => {
                const localizedTitle = getLocalizedValue(
                  {
                    title: item.title || "",
                    title_uz: item.title_uz || "",
                    title_en: item.title_en || "",
                    title_ru: item.title_ru || "",
                  },
                  "title",
                  locale
                );
                const localizedLocation = getLocalizedValue(
                  {
                    location: item.location || "",
                    location_uz: item.location_uz || "",
                    location_en: item.location_en || "",
                    location_ru: item.location_ru || "",
                  },
                  "location",
                  locale
                );

                return (
                  <ReyesterCard
                    key={item.id}
                    title={localizedTitle}
                    location={localizedLocation}
                    accreditationNumber={item.accreditation_number}
                    registrationDate={item.registration_date}
                    reyesterType={item.reyester_type}
                    website={item.website}
                    email={item.email}
                    phone={item.phone}
                    reviews={item.reviews}
                  />
                );
              })
            ) : (
              <p className="text-center text-gray-500 italic flex items-center justify-center gap-2">
                <Search className="w-4 h-4" />
                {t("not_found")}
              </p>
            )}
          </div>

          {/* Pagination */}
          {totalPages && totalPages > 1 && (
            <Pagination className="mt-10 flex justify-end">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (page > 1) fetchPage(page - 1, searchQuery, selectedType);
                    }}
                    className={page === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>

                {/* Visible Page Links */}
                {getPaginationPages(page, totalPages).map((p) => (
                  <PaginationItem key={p}>
                    <PaginationLink
                      href="#"
                      isActive={p === page}
                      onClick={(e) => {
                        e.preventDefault();
                        if (p !== page) fetchPage(p, searchQuery, selectedType);
                      }}
                      className={p === page ? "bg-blue-500 text-white hover:bg-blue-600" : ""}
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                ))}


                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (page < totalPages) fetchPage(page + 1, searchQuery, selectedType);
                    }}
                    className={page === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}

    </div>
  )
}
