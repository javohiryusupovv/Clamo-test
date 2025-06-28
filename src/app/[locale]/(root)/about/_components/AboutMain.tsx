"use client";
import NavBuilding from "@/assets/NavBuilding.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutMain() {
  const t = useTranslations("AboutPage");

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Matn bo‘limi */}
        <div className="flex flex-col justify-center">
          <p className="rounded-md font-inter font-medium bg-[#23B3FC] leading-[100%] text-white text-sm sm:text-base px-4 py-1 w-fit mb-[16px]">
            {t("plan")}
          </p>
          <h2 className="text-[20px] sm:text-[28px] font-inter lg:text-[32px] leading-[110%] text-[#1B1B1B] font-semibold pb-2">
            {t("abouttitle")}
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[20px] font-vk text-[#012548CC] leading-[140%]">
            {t("about_des1")}
          </p>
        </div>

        {/* Rasm bo‘limi */}
        <div className="relative w-full">
          <Image
            src={NavBuilding}
            alt="Building"
            width={1500}
            height={600}
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover rounded-xl"
          />
          <div className="absolute bottom-0 left-0 w-full h-[150px] sm:h-[200px] md:h-[250px] bg-gradient-to-t from-white/100 to-transparent" />
        </div>
      </div>
    </div>
  );
}
