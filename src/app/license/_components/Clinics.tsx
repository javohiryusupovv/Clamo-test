"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, SearchIcon } from "lucide-react";
import { getFilter, getPaginatedData } from "../../../../constants/page";
import Location from "../../../../public/Map.svg";
import Link from "next/link";
import ClinikStrelka from "../../../../public/CliniksStrelka.svg"

export default function Clinics() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("0");
  const [page, setPage] = useState(1);
  const clinicsPerPage = 5;
  const filter = getFilter;

  const allClinics = getPaginatedData;
  const [filteredClinics, setFilteredClinics] = useState(allClinics);

  useEffect(() => {
    let result = allClinics;
    if (selectedFilter !== "0") {
      result = result.filter((clinic) =>
        clinic.reyester_type.some(
          (type) => type.id.toString() === selectedFilter
        )
      );
    }

    if (search) {
      const searchTerm = search.toLowerCase();
      result = result.filter(
        (clinic) =>
          clinic.title.toLowerCase().includes(searchTerm) ||
          clinic.location.toLowerCase().includes(searchTerm) ||
          clinic.accreditation_number.toLowerCase().includes(searchTerm) ||
          clinic.email?.toLowerCase().includes(searchTerm) ||
          clinic.phone?.toLowerCase().includes(searchTerm) ||
          clinic.website?.toLowerCase().includes(searchTerm)
      );
    }

    setFilteredClinics(result);
    setPage(1);
  }, [search, selectedFilter, allClinics]);

  const pageCount = Math.ceil(filteredClinics.length / clinicsPerPage);
  const paginatedData = filteredClinics.slice(
    (page - 1) * clinicsPerPage,
    page * clinicsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto p-3 sm:p-4 md:p-6">
      <div className="md:flex justify-between items-center max-md:flex-col ">
        <h1 className="text-2xl sm:text-[28px] md:text-[32px] font-semibold mb-4 sm:mb-6 text-gray-800">
          Klinikalar Reyesteri
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="relative w-full sm:w-64">
            <select
              className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={selectedFilter}
              onChange={(e) => {
                setSelectedFilter(e.target.value);
              }}
            >
              <option value="0">Barchasi</option>
              {filter.map((filter) => (
                <option key={filter.id} value={filter.id}>
                  {filter.name}
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

      <div className="flex flex-col gap-3 sm:gap-4">
        {paginatedData.length > 0 ? (
          paginatedData.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 sm:p-4 md:p-6"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start flex-wrap sm:flex-nowrap gap-2">
                <div>
                  <h2 className="text-sm sm:text-[16px] md:text-[24px] font-semibold mb-1 text-gray-800 pb-2">
                    {clinic.title}
                  </h2>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:flex-nowrap gap-2 sm:gap-4">
                    <div className="flex items-center gap-1">
                      <Image
                        src={Location}
                        alt="map location icon"
                        width={24}
                        height={24}
                      />
                      <span className="text-[14px] font-normal text-[#3D445E]">{clinic.location}</span>
                    </div>

                    <span className="bg-[#E3E8ED] rounded-lg text-[#3D445E] text-[10px] sm:text-xs sm:px-[14px] py-[4px] mt-1 sm:mt-0">
                      {clinic.reyester_type?.[0]?.name ||
                        clinic.reyester_type?.[0]?.name ||
                        ""}
                    </span>
                  </div>
                </div>

                <button className="group flex items-center gap-1 mt-2 sm:mt-0 text-[10px] sm:text-xs md:text-sm text-[#23B3FC] font-medium bg-blue-50 px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-2 rounded-md hover:bg-blue-100 transition-colors">
                  Litsenziyani ko&apos;rish
                  <Image src={ClinikStrelka} alt="Strelka" className=" group-hover:rotate-45 group-hover:scale-105 transition-all duration-100"/>
                </button>
              </div>

              <div className="rounded-3xl p-2 sm:p-3 md:p-4 mt-3 sm:mt-4 font-sans max-w-5xl">
                <div className="flex flex-col border-t border-gray-200 mt-2">
                  {/* 1-row */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 md:border-r md:border-gray-200 mt-2 sm:mt-3 ml-3 md:ml-4 border-b sm:border-b-0">
                      <p className="text-[#808597] font-normal text-[10px] sm:text-[14px] md:text-sm ml-[-10px] md:ml-[-15px] pb-[8px]">
                        Akkreditatsiya raqami
                      </p>
                      <p className="font-semibold text-xs sm:text-sm md:text-[18px] ml-[-10px] md:ml-[-15px] text-[#3D445E]">
                        {clinic.accreditation_number}
                      </p>
                    </div>
                    <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 md:border-r md:border-gray-200 mt-2 sm:mt-3 ml-0 md:ml-4 border-b sm:border-b-0">
                      <p className="text-[#808597] m-0 text-[10px] sm:text-xs md:text-sm pb-2">
                        {clinic.data}
                      </p>
                      <p className="font-semibold text-xs sm:text-sm md:text-[18px] text-[#3D445E]">
                        {clinic.dayMonthYear}
                      </p>
                    </div>
                    <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 mt-2 sm:mt-3 border-b sm:border-b-0">
                      <p className="text-[#808597] m-0 text-[10px] sm:text-xs md:text-sm pb-2">
                        {clinic.emailLocation}
                      </p>
                      <p className="font-bold text-xs sm:text-sm md:text-[18px] text-[#3D445E]">
                        {clinic.email}
                      </p>
                    </div>
                  </div>

                  {/* 2-row */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 md:border-r md:border-gray-200 ml-3 md:ml-4 border-b sm:border-b-0">
                      <p className="text-[#808597] font-normal m-0 text-[10px] sm:text-xs md:text-sm ml-[-10px] md:ml-[-15px] pb-2">
                        {clinic.comment}
                      </p>
                      <p className="font-semibold text-[#3D445E] text-xs sm:text-sm md:text-[18px] ml-[-10px] md:ml-[-15px]">
                        {clinic.comment_number}
                      </p>
                    </div>
                    <div className="flex-1 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 ml-0 md:ml-4 border-b sm:border-b-0">
                      <p className="text-[#808597] m-0 text-[10px] sm:text-xs md:text-sm pb-2">
                        Vebsayt
                      </p>
                      <Link href={clinic.websiteLink || "#"} target="blank">
                        <p className="font-semibold text-[#3D445E] text-xs sm:text-sm md:text-[18px]">
                          {clinic.websiteName}
                        </p>
                      </Link>
                    </div>
                    <div className="flex-1 min-w-[120px] md:border-l sm:min-w-[150px] md:min-w-[200px] p-1 sm:p-2 mt-2 sm:mt-3">
                      <p className="text-[#808597] m-0 text-[10px] sm:text-xs md:text-sm pb-2">
                        Telfon raqam
                      </p>
                      <p className="font-bold text-xs sm:text-sm md:text-[18px] text-[#3D445E]">
                        {clinic.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            Hech qanday natija topilmadi
          </div>
        )}
      </div>

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="flex justify-end items-center mt-4 sm:mt-6">
          <div className="flex gap-1">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 rounded-md text-[10px] sm:text-xs md:text-sm flex items-center justify-center border ${
                  p === page
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                } transition-colors`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}