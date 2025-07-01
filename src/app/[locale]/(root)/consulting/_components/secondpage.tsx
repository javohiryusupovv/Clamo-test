"use client";

import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useLocale, useTranslations } from "next-intl";
import { CarouselData } from "../../../../../../app.types";
import { getLocalizedValue, pickStringProps } from "@/lib/getLocalization";

export default function secondpage({ carousel }: { carousel: CarouselData[] }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("ConsultingPage");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale();

  return (
    <div className=" h-[518px] second-div w-full bg-[#ffffff]">
      <div className="flex flex-col gap-[4px] font-vksans lg:mb-[44px] md:mb-[37px] mb-[25px] sm:pt-[40px] md:pt-[50px] lg:pt-[64px] container">
        <h1 className="font-bold font-vk text-[#3D445E] md:text-4xl text-3xl lg:text-5xl leading-[100% ]">
          {t("work_direction")}
        </h1>
        <p className="text-[#012548CC] font-vk leading-[140%] font-medium lg:text-[20px] sm:text-base text-sm">
          {t("work_direction_subtitle")}
        </p>
      </div>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          510: {
            slidesPerView: 1.2,
          },
          600: {
            slidesPerView: 1.4,
          },
          700: {
            slidesPerView: 1.5,
          },
          800: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.5,
          },
          1184: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        allowTouchMove={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="md:h-[284px] sm:h-[210px] h-[235px] container swipers sm:pl-12 md:pl-2"
      >
        {carousel.map((ssss: CarouselData, index: number) => {
          const stringItem = pickStringProps(ssss);
          const localTitle = getLocalizedValue(stringItem, "title", locale);
          const localDescription = getLocalizedValue(
            stringItem,
            "description",
            locale
          );

          return (
            <SwiperSlide key={index}>
              <div className="hover:bg-[#0653C9] text-[#3D445E] hover:text-[#FFFFFF] border duration-300 p-4 sm:p-6 !border-[#E3E8E9] rounded-[28px] h-full flex flex-col cursor-pointer">
                <h3 className="sm:mb-2 mb-1 font-bold md:text-[28px] text-[20px] font-vksans leading-[150%]">
                  {localTitle}
                </h3>
                <p className="font-normal  font-vksans text-[14px] sm:text-[15px] md:text-[16px] leading-[150%]">
                  {localDescription}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
