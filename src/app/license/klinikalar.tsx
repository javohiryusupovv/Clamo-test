"use client";

import { useState, useMemo } from "react";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";

const clinicData = Array(20)
  .fill(null)
  .map((_, i) => ({
    id: i + 1,
    name: '"ALFA TERAPIYA" mas`uliyati cheklangan jamiyati',
    address: "Andijon viloyati, Andijon sh. 3-kichik dahа, 38-uy, 46-manzil",
    status:
      i % 3 === 0
        ? "Faoliyatni tugatish"
        : i % 3 === 1
        ? "Hujjatni o'zgartirish"
        : "Qayta ro'yhat",
    code: "L-29082988",
    date: "12.12.2024",
    reviews: 100,
    website: "Alfaterapiya.uz",
    email: "alfaterapiya@mail.ru",
    phone: "+998 90 123 45 67",
    image: "/location.png",
  }));

const filters = [
  "Faoliyatni boshlash",
  "Qayta ro'yhat",
  "Muddatni uzaytirish",
  "Hujjatni o'zgartirish",
  "Faoliyatni tugatish",
  "Faoliyatni vaqtincha to'xtatish",
];

export default function KlinikalarReyesteri() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const filteredClinics = useMemo(() => {
    return clinicData.filter(
      (clinic) =>
        (!selectedFilter || clinic.status === selectedFilter) &&
        clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedFilter, searchQuery]);

  const pageCount = Math.ceil(filteredClinics.length / pageSize);
  const paginatedData = filteredClinics.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-4 md:p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-[28px] md:text-[32px] font-semibold mb-4 sm:mb-6 text-gray-800">
          Klinikalar reyesteri
        </h1>

        {/* Filter + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="relative w-full sm:w-64">
            <select
              className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value="">Ariza turlari</option>
              {filters.map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 sm:right-3 top-2 sm:top-2.5 w-3 sm:w-4 h-3 sm:h-4 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative w-full sm:flex-1">
            <Search className="absolute left-2 sm:left-3 top-2 sm:top-2.5 w-3 sm:w-4 h-3 sm:h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Klinikalarni izlash"
              className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* Sarlavha */}

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
                  {clinic.name}
                </h2>

                <div className="flex flex-col sm:flex-row sm:items-center sm:flex-nowrap gap-1 sm:gap-1">
                  <div className="flex items-center gap-1">
                    <Image
                      src={clinic.image}
                      alt="map location icon"
                      width={24}
                      height={24}
                    />
                    <span className="text-[14px]">{clinic.address}</span>
                  </div>

                  <span className="bg-gray-100 text-gray-700 text-[10px] sm:text-xs px-[12px] sm:px-2 py-[4px] rounded-[8px] mt-1 sm:mt-0">
                    {clinic.status}
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
                      {clinic.code}
                    </p>
                  </div>
                  <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 md:border-r md:border-gray-200 mt-2 sm:mt-3 ml-0 md:ml-4 border-b sm:border-b-0">
                    <p className="text-gray-500 m-0 text-[10px] sm:text-xs md:text-sm">
                      Akkreditatsiya berilgan sana
                    </p>
                    <p className="font-bold text-xs sm:text-sm md:text-base">
                      {clinic.date}
                    </p>
                  </div>
                  <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 mt-2 sm:mt-3 border-b sm:border-b-0">
                    <p className="text-gray-500 m-0 text-[10px] sm:text-xs md:text-sm">
                      Email manzil
                    </p>
                    <p className="font-bold text-xs sm:text-sm md:text-base">
                      {clinic.email}
                    </p>
                  </div>
                </div>

                {/* 2-row */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2  md:border-r md:border-gray-200 ml-3 md:ml-4 border-b sm:border-b-0">
                    <p className="text-gray-500 m-0 text-[10px] sm:text-xs md:text-sm ml-[-10px] md:ml-[-15px]">
                      Sharhlar
                    </p>
                    <p className="font-bold text-xs sm:text-sm md:text-base ml-[-10px] md:ml-[-15px]">
                      {clinic.reviews}
                    </p>
                  </div>
                  <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 ml-0 md:ml-4 border-b sm:border-b-0">
                    <p className="text-gray-500 m-0 text-[10px] sm:text-xs md:text-sm">
                      Vebsayt
                    </p>
                    <p className="font-bold text-xs sm:text-sm md:text-base">
                      {clinic.website}
                    </p>
                  </div>
                  <div className="flex-1 min-w-[120px] border-l sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 mt-2 sm:mt-3">
                    <p className="text-gray-500 m-0 text-[10px] sm:text-xs md:text-sm">
                      Telefon raqam
                    </p>
                    <p className="font-bold text-xs sm:text-sm md:text-base">
                      {clinic.phone}
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
              className={`w-6 h-6 sm:w-7 md:w-8  sm:h-7 md:h-8 rounded-md text-[10px] sm:text-xs md:text-sm flex items-center justify-center border ${
                p === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
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
