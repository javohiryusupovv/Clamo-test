"use client";
import Image from "next/image";
import NavBuilding from "@/assets/NavBuilding.png";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function AboutMain() {
  const t = useTranslations("AboutPage");
  useEffect(() => {
      import("aos").then((AOS) => AOS.init({ duration: 1000 }));
    }, []);

  return (
    <div className="relative w-full overflow-visible h-screen pt-10 lg:pt-20 pb-10 lg:pb-32">
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Matn bo‘limi */}
        <div className="flex flex-col justify-center">
          <p className="rounded-md font-inter font-medium bg-[#23B3FC] leading-[100%] text-white text-sm sm:text-base px-4 py-1 w-fit mb-4">
            {t("plan")}
          </p>
          <h2 className="text-[20px] sm:text-[28px] lg:text-[32px] font-semibold text-[#1B1B1B] pb-2">
            {t("abouttitle")}
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[20px] text-[#012548CC] leading-[140%]">
            {t("about_des1")}
          </p>
        </div>
      </div>

      {/* Bino rasmi (o‘ng tomonga chiqib turadi) */}
<div
  className="
    absolute block z-0
    transition-all duration-700 ease-in-out
    bottom-0 -right-36 max-sm:right-[-120px]
    lg:top-0 lg:right-0 lg:w-[55%] lg:h-full
    md:bottom-[150px] md:right-[-30px] md:scale-90
    sm:bottom-[-66px] sm:top-auto sm:right-[-164px] sm:w-[729px] sm:h-[486px] max-sm:w-[350px] max-sm:h-[370px]
  "
>
    <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-white to-transparent sm:hidden z-10" />

        <Image
          src={NavBuilding}
          alt="Building"
          fill
          className="object-cover"
          priority
          data-aos="fade-left"
        />
        <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
}
