"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import WhiteDown from "@/assets/icons/whiteDown.png";
import Link from "next/link";
import { useEffect, useState } from "react";
// import Shahar from "../../public/Imgs/Shahar.png";

type NewsType = {
  id: number;
  slug: string;
  title: string;
  title_uz?: string;
  created_at?: string;
  image?: string;
};


export default function NewsPage() {
  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/news/?t=${Date.now()}`,
          { cache: "no-store" }
        );
        const data = await res.json();
        setNews(data.slice(0, 4));
      } catch {
        setNews([]);
      }
    };
    fetchNews();
  }, []);

  if (!news || news.length === 0) return <div>No news found.</div>;

  return (
    <div className="container pb-10">
      <h1 className="font-bold text-[18px] sm:text-[28px] md:text-[36px] lg:text-[44px] xl:text-[48px] text-[#3D445E] leading-[120%]">
        Yangiliklar
      </h1>
      <p className="font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[20px] text-[#012548CC] pb-[16px] sm:pb-[20px] md:pb-[28px] leading-[150%]">
        Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha
        xizmatlar bir joyda, qulay va samarali yechimlar bilan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid grid-cols-1 gap-4">
          {news.slice(1, 2).map((item) => (
            <div
              key={item.id}
              className="group bg-[#F6F9FC] rounded-[16px] p-4"
            >
              <p className="text-[10px] sm:text-[12px] md:text-[14px] pb-[48px]">
                {item.created_at
                  ? new Date(item.created_at).toLocaleDateString()
                  : ""}
              </p>
              <h3 className="font-bold text-[13px] sm:text-[16px] md:text-[18px] leading-[130%] pb-[24px]">
                {item.title_uz || item.title}
              </h3>
              <Link
                href={`/news/${item.slug}`}
                className="hover:underline text-[#74807B] font-medium text-[12px] sm:text-[14px] flex items-center gap-4"
              >
                Batafsil
                <div className="border border-[#74807B] py-2 px-2 rounded-full relative group-hover:border-[#23B3FC]">
                  <FaArrowRightLong className="w-4 h-4 -translate-x-2 transition-all duration-200 group-hover:translate-x-0" />
                </div>
              </Link>
            </div>
          ))}
          <div className="flex flex-col sm:flex-row gap-4">
            {news.slice(1, 4).map((item) => (
              <div
                key={item.id}
                className="group bg-[#F6F9FC] rounded-[16px] p-4 w-full"
              >
                <p className="text-[10px] sm:text-[12px] md:text-[14px] pb-[48px]">
                  {item.created_at
                    ? new Date(item.created_at).toLocaleDateString()
                    : ""}
                </p>
                <h3 className="font-bold text-[12px] md:text-[15px] lg:text-[18px] leading-[130%] pb-3">
                  {item.title_uz || item.title}
                </h3>
                <Link
                  href={`/news/${item.id}`}
                  className="hover:underline text-[#74807B] font-medium text-[12px] sm:text-[14px] flex items-center gap-4"
                >
                  Batafsil
                  <div className="border border-[#74807B] py-2 px-2 rounded-full relative group-hover:border-[#23B3FC]">
                    <FaArrowRightLong className="w-4 h-4 -translate-x-2 transition-all duration-200 group-hover:translate-x-0" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex md:justify-end justify-center pt-6">
        <button className="group w-full max-w-[200px] h-[35px] sm:w-[250px] sm:h-[40px] flex items-center justify-center gap-3 bg-[#23B3FC] hover:bg-[#23B3FC]/[80%] rounded-lg text-xs sm:text-sm md:text-base font-medium text-white">
          Batafsil tanishish
          <Image
            src={WhiteDown}
            alt="down strelka"
            className="w-4 h-4 group-hover:translate-x-2 transition-all duration-200"
          />
        </button>
      </div>
    </div>
  );
}
