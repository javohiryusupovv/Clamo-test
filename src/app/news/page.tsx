"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X as XIcon } from "lucide-react";

// Local Button component
function Button({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <button
      className={`inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Local Input component
function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}

// Local Card components
function Card({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <div
      className={`bg-white rounded-2xl border border-[#ffff] hover:border-[#23B3FC] hover:border-1 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

// Dummy data
const dummyData = new Array(20).fill(null).map((_, i) => ({
  id: i + 1,
  title: `CLAMO bilan yangi imkoniyatlarni kashf eting!`,
  date: "24.06.2024",
  time: "11:35",
  image: `/news/news${(i % 9) + 1}.png`,
  description:
    "O‘zbekistonda yangi zamonaviy tibbiy markazlar tashkil etildi — CLAMO bilan rusumtona va litsenziyalangan xizmatlar taqdim etiladi. Ko‘proq ma’lumotlar bu yerda...",
}));

export default function NewsGrid() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState<
    null | (typeof dummyData)[0]
  >(null);
  const perPage = 9;

  const filtered = dummyData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="relative">
      {/* Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center px-4">
          <button
            onClick={() => setSelectedNews(null)}
            className="absolute top-4 right-4 text-white hover:text-blue-400 z-50"
          >
            <XIcon size={36} />
          </button>
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl h-[80vh] overflow-y-auto relative z-50">
            <Image
              src={selectedNews.image}
              alt={selectedNews.title}
              className="w-full h-60 object-cover rounded-t-xl"
              width={800}
              height={360}
            />
            <div className="p-6 space-y-3">
              <div className="text-sm text-gray-500">
                {selectedNews.date} • {selectedNews.time}
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold">{selectedNews.title}</h2>
              <p className="text-gray-700 text-sm">{selectedNews.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="container mx-auto px-4">
        <div className={`p-4 ${selectedNews ? "blur-sm pointer-events-none" : ""}`}>
          {/* Header and Search */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold">Yangiliklar</h1>
            <div className="w-full sm:w-1/3">
              <Input
                placeholder="Klinikalarni izlash"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {paginated.map((item) => (
              <Card
                key={item.id}
                className="transition duration-300 cursor-pointer"
                onClick={() => setSelectedNews(item)}
              >
                <div className="m-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-2xl"
                    width={349}
                    height={196}
                  />
                </div>
                <CardContent className="space-y-2">
                  <div className="text-sm text-gray-500">
                    {item.date} • {item.time}
                  </div>
                  <h2 className="text-lg font-semibold leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
            <div className="text-sm">Ko‘rsatilmoqda {perPage} ta yangilik</div>
            <div className="flex items-center gap-2 flex-wrap">
              <Button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="border border-gray-300 hover:bg-gray-100"
              >
                <ChevronLeft size={16} />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-8 h-8 px-0 rounded-full border ${
                    page === i + 1
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="border border-gray-300 hover:bg-gray-100"
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
