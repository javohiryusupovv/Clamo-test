"use client";

import Image from "next/image";
import Doctors from "@/assets/Doctors.png";
import gbCircle from "../../../../../../public/herobg.png";
import shape from "../../../../../../public/shape.png";
import { useLocale, useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("AboutPage");
  const locale = useLocale()

  useEffect(() => {
    import("aos").then((AOS) => AOS.init({ duration: 1000 }));
  }, []);

  return (
    <div className="md:pt-[50px] max-md:my-8 lg:pb-[150px]">
      <div className="container relative h-auto">
        <div className="relative rounded-[36px] bg-[#0653C9] overflow-hidden h-[500px] max-ll:h-[550px] md:h-[300px] flex max-xl:gap-7 flex-col-reverse md:flex-row items-center">
          {/* Chap rasm */}
          <div className="relative md:w-[30%] w-full h-[310px] md:h-full">
            <Image
              src={Doctors}
              alt="Doctors"
              className="absolute bottom-0 left-10 w-[260px] md:w-[290px] z-[10] circleCover max-md:order-2 max-ll:right-1"
              data-aos="fade-up"
            />
            <Image
              src={shape}
              alt="shape"
              className="absolute bottom-0 left-0 z-[5]"
            />
          </div>

            <Image
              src={gbCircle}
              alt="bg Circle"
              className="absolute right-0 top-0 scale-[1.4] opacity-[0.7] z-[8] max-md:hidden"
            />
          {/* Matn qismi */}
          <div className="relative z-[15] md:w-[70%] w-full px-4 py-6 md:py-0 md:pl-10 max-md:order-1">
            <h3 className="text-white font-bold font-vk leading-[44px] text-[25px] md:leading-[40px] md:text-[27px] lg:text-[35px] xl:text-[40px] mb-3">
              {t("hero_title")}
            </h3>
            <p className="text-white opacity-60 text-[16px] font-vk font-medium mb-5">
              {t("hero_des")}
            </p>
            <Link href={`/${locale}/international`} className="group font-inter cursor-pointer lg:px-20 px-10 h-[40px] inline-flex items-center justify-center gap-[11.5px] hover:bg-[#48bdf7] bg-[#23B3FC] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] ">               {t("hero_btn")}
              <ChevronRight className="stroke-white sm:group-hover:translate-x-2 transition-all duration-200" />
            </Link>
          </div>
        </div>

        {/* Pastdagi kartochka */}
        <div className="hidden lg:flex absolute top-[270px] left-1/2 transform -translate-x-1/2 w-[800px] xl:w-[1008px] h-[130px] items-center justify-center z-[20] bg-white border border-gray-100 rounded-lg px-2">
          <p className="w-[90%] text-[#3D445E] text-[20px] font-vk font-normal">
            {t("hero_clamo")}
          </p>
        </div>

      </div>
    </div>
  )
}
