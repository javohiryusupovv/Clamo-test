"use server";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft as BackIcon } from "lucide-react";

// This should match your dummy data structure
interface NewsItem {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  description: string;
}

// Fetch the news item (in a real app, this would be an API call)
async function getNewsItem(id: number): Promise<NewsItem | undefined> {
  const dummyData = new Array(20).fill(null).map((_, i) => ({
    id: i + 1,
    title: `CLAMO bilan yangi imkoniyatlarni kashf eting!`,
    date: "24.06.2024",
    time: "11:35",
    image: `/news/news${(i % 9) + 1}.png`,
    description:
      "O'zbekistonda yangi zamonaviy tibbiy markazlar tashkil etildi — CLAMO bilan rusumtona va litsenziyalangan xizmatlar taqdim etiladi. Ko'proq ma'lumotlar bu yerda...",
  }));

  return dummyData.find(item => item.id === Number(id));
}

export default async function NewsDetailPage({ params }: { params: Promise<{id: string}>}) {
  const { id } = await params;
  const newsItem = await getNewsItem(Number(id));

  if (!newsItem) {
    return <h5>Yangiliklar Topilmadi!</h5>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/news"
          className="mb-4 inline-flex items-center text-blue-500 hover:text-blue-700"
        >
          <BackIcon size={20} className="mr-1" />
          Orqaga
        </Link>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-60 sm:h-80 w-full">
            <Image
              src={newsItem?.image}
              alt={newsItem?.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="text-sm text-gray-500">
              {newsItem?.date} • {newsItem?.time}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold">{newsItem?.title}</h1>
            <div className="prose max-w-none">
              <p className="text-gray-700">{newsItem?.description}</p>
              {/* Add more content here as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}