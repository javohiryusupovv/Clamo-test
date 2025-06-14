"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dummy data
const dummyData = new Array(20).fill(null).map((_, i) => ({
  id: i + 1,
  title: `CLAMO bilan yangi imkoniyatlarni kashf eting!`,
  date: "24.06.2024",
  time: "11:35",
  image: `/news/news${(i % 9) + 1}.png`,
  description:
    "O'zbekistonda yangi zamonaviy tibbiy markazlar tashkil etildi — CLAMO bilan rusumtona va litsenziyalangan xizmatlar taqdim etiladi. Ko'proq ma'lumotlar bu yerda...",
}));

export default function NewsGrid() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 9;

  const filtered = dummyData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Yangiliklar</h1>
        <div className="w-full sm:w-1/3">
          <div className="relative">
            <input
              placeholder="Yangiliklarni izlash"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {paginated.map((item) => (
          <Link key={item.id} href={`/news/${item.id}`} passHref>
            <div className="bg-white rounded-2xl border border-white hover:border-blue-400 hover:shadow-md transition duration-300 cursor-pointer">
              <div className="m-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-2xl"
                  width={349}
                  height={196}
                  priority={false}
                />
              </div>
              <div className="p-4 space-y-2">
                <div className="text-sm text-gray-500">
                  {item.date} • {item.time}
                </div>
                <h2 className="text-lg font-semibold leading-snug">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <div className="text-sm">
          Ko&#39;rsatilmoqda {paginated.length} ta yangilik (Jami {filtered.length})
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-gray-300 hover:bg-gray-100"
          >
            <ChevronLeft size={16} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-8 h-8 px-0 rounded-full border inline-flex items-center justify-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                page === i + 1
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border border-gray-300 hover:bg-gray-100"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}