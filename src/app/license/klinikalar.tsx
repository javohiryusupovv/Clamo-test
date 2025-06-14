"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, Search as SearchIcon } from "lucide-react";
import Image from "next/image";
import Locationicons from "../../assets/icons/location.png"

type Clinic = {
  id: number;
  title: string;
  location: string;
  license: string;
  website?: string;
  email?: string;
  phone?: string;
  status?: string;
  reyester_type?: Array<{
    // Change this to array
    id?: number;
    name?: string;
    name_uz?: string;
    name_en?: string;
    name_ru?: string;
    [key: string]: unknown;
  }>;
};

type ReyesterType = {
  id: number;
  name: string;
  name_uz: string;
  name_en: string;
  name_ru: string;
};

function KlinikalarReyesteri() {
  const [filters, setFilters] = useState<ReyesterType[]>([]);
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("0"); // Default to "All"
  const [page, setPage] = useState(1);
  const clinicsPerPage = 5;

  // Fetch filters from API
  useEffect(() => {
    async function fetchFilters() {
      const response = await fetch(
        "https://clamo-production.up.railway.app/api/reyester/types/"
      );
      if (!response.ok) throw new Error("Failed to fetch filters");
      const data = await response.json();
      // Add "All" option at the beginning
      setFilters([
        {
          id: 0,
          name: "Barchasi",
          name_uz: "Barchasi",
          name_en: "All",
          name_ru: "Все",
        },
        ...(data.results || []),
      ]);
    }
    fetchFilters();
  }, []);

  // console.log("====================================");
  // console.log("Filters:", filters);
  // console.log("====================================");

  useEffect(() => {
    async function fetchClinics() {
      setLoading(true);
      setError(null);
      try {
        let typeParam = "";
        if (selectedFilter && selectedFilter !== "0") {
          typeParam = `&reyester_type=${selectedFilter}`;
        }
        const response = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_BASE_URL
          }/reyester/?search=${encodeURIComponent(
            search
          )}${typeParam}&page=${page}&page_size=${clinicsPerPage}`
        );
        if (!response.ok) {
          throw new Error("Server error");
        }
        const data = await response.json();

        setClinics(data.results || []);
      } catch {
        setError("Klinikalarni yuklashda xatolik yuz berdi.");
      } finally {
        setLoading(false);
      }
    }

    fetchClinics();
  }, [search, page, selectedFilter]);

  // Pagination logic (pageCount from API if available, else fallback)
  const pageCount = Math.max(
    1,
    Math.ceil((clinics.length || 1) / clinicsPerPage)
  );
  const paginatedData = clinics;

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-4 md:p-6">
      <div className="md:flex justify-between items-center max-md:flex-col ">
        <h1 className="text-2xl sm:text-[28px] md:text-[32px] font-semibold mb-4 sm:mb-6 text-gray-800">
          Klinikalar Reyesteri
        </h1>
        {/* Filter + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="relative w-full sm:w-64">
            <select
              className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={selectedFilter}
              onChange={(e) => {
                setSelectedFilter(e.target.value);
                setPage(1);
              }}
            >
              {filters.map((filter) => (
                <option key={filter.id} value={filter.id}>
                  {filter.name_uz || filter.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 sm:right-3 top-2 sm:top-2.5 w-3 sm:w-4 h-3 sm:h-4 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative w-full sm:flex-1">
            <SearchIcon className="absolute left-2 sm:left-3 top-2 sm:top-2.5 w-3 sm:w-4 h-3 sm:h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Klinikalarni izlash"
              className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {loading && <p>Yuklanmoqda...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Card list */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {paginatedData.map((clinic) => (
          <div
            key={clinic.id}
            className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 sm:p-4 md:p-6"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start flex-wrap sm:flex-nowrap gap-2">
              {/* Left Side */}
              <div>
                <h2 className="text-sm sm:text-[16px] md:text-[20px] font-semibold mb-1 text-gray-800">
                  {clinic.title}
                </h2>

                <div className="flex flex-col sm:flex-row sm:items-center sm:flex-nowrap gap-1 sm:gap-1">
                  <div className="flex items-center gap-1">
                    <Image
                      src={Locationicons}
                      alt="map location icon"
                      width={24}
                      height={24}
                    />
                    <span className="text-[14px]">{clinic.location}</span>
                  </div>

                  <span className="bg-gray-100 text-gray-700 text-[10px] sm:text-xs px-[12px] sm:px-2 py-[4px] rounded-[8px] mt-1 sm:mt-0">
                    {clinic.reyester_type?.[0]?.name_uz ||
                      clinic.reyester_type?.[0]?.name ||
                      ""}
                  </span>
                </div>
              </div>

              {/* Right Side Button */}
              <button className="mt-2 sm:mt-0 text-[10px] sm:text-xs md:text-sm text-blue-600 font-medium bg-blue-50 px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-2 rounded-md hover:bg-blue-100 transition-colors">
                Litsenziyani ko‘rish
              </button>
            </div>

            {/* Custom Styled Info Block */}
            <div className="rounded-3xl p-2 sm:p-3 md:p-4 mt-3 sm:mt-4 font-sans max-w-5xl">
              <div className="flex flex-col border-t border-gray-200 mt-2">
                {/* 1-row */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 md:border-r md:border-gray-200 mt-2 sm:mt-3 ml-3 md:ml-4 border-b sm:border-b-0">
                    <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm ml-[-10px] md:ml-[-15px]">
                      Akkreditatsiya raqami
                    </p>
                    <p className="font-bold text-xs sm:text-sm md:text-base ml-[-10px] md:ml-[-15px]">
                      {clinic.license}
                    </p>
                  </div>
                  <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 md:border-r md:border-gray-200 mt-2 sm:mt-3 ml-0 md:ml-4 border-b sm:border-b-0">
                    <p className="text-gray-500 m-0 text-[10px] sm:text-xs md:text-sm">
                      Email manzil
                    </p>
                    <p className="font-bold text-xs sm:text-sm md:text-base">
                      {clinic.email || "N/A"}
                    </p>
                  </div>
                  <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 mt-2 sm:mt-3 border-b sm:border-b-0">
                    <p className="text-gray-500 m-0 text-[10px] sm:text-xs md:text-sm">
                      Telefon raqam
                    </p>
                    <p className="font-bold text-xs sm:text-sm md:text-base">
                      {clinic.phone || "N/A"}
                    </p>
                  </div>
                </div>

                {/* 2-row */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 md:border-r md:border-gray-200 ml-3 md:ml-4 border-b sm:border-b-0">
                    <p className="text-gray-500 m-0 text-[10px] sm:text-xs md:text-sm ml-[-10px] md:ml-[-15px]">
                      Vebsayt
                    </p>
                    <p className="font-bold text-xs sm:text-sm md:text-base ml-[-10px] md:ml-[-15px]">
                      {clinic.website || "N/A"}
                    </p>
                  </div>
                  <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 ml-0 md:ml-4 border-b sm:border-b-0">
                    <p className="text-gray-500 m-0 text-[10px] sm:text-xs md:text-sm">
                      Joylashuv
                    </p>
                    <p className="font-bold text-xs sm:text-sm md:text-base">
                      {clinic.location}
                    </p>
                  </div>
                  <div className="flex-1 min-w-[120px] border-l sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 mt-2 sm:mt-3">
                    <p className="text-gray-500 m-0 text-[10px] sm:text-xs md:text-sm">
                      Klinika nomi
                    </p>
                    <p className="font-bold text-xs sm:text-sm md:text-base">
                      {clinic.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-4 sm:mt-6">
        <div className="flex gap-1">
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-6 h-6 sm:w-7 md:w-8 sm:h-1 md:h-8 rounded-md text-[10px] sm:text-xs md:text-sm flex items-center justify-center border ${
                p === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-2  hover:bg-gray-100"
              } transition-colors`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KlinikalarReyesteri;
