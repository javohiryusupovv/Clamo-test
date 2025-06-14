"use client";

import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules"; // 🔹 autoplay moduli
import { getcardData } from '../../../../constants/page';


export default function secondpage() {

  const cardData = getcardData

  return (
    <div className=" h-[518px] second-div w-full bg-[#ffffff]">
      <div className=" flex flex-col font-vksans lg:mb-[44px] md:mb-[37px] mb-[25px] lg:gap-1 sm:pt-[40px] md:pt-[50px] lg:pt-[64px] container">
        <h1 className=" font-bold text-[#3D445E] md:text-[40px] sm:text-[35px] text-[32px] lg:text-[48px] leading-[100% ]">
          Ishlash yo‘nalishlari
        </h1>
        <p className=" text-[#012548CC] leading-[140%] font-medium md:text-lg lg:text-[20px]">
          Bizning bo‘limlariz bilan tanishing, bizda barcha bo‘limlariz xizmati
          juda qulay va siz uchun mos keladi.
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
        className="md:h-[254px] sm:h-[210px] h-[170px] container swipers sm:pl-12 md:pl-2"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="hover:bg-[#0653C9] text-[#3D445E] hover:text-[#FFFFFF] border duration-300 p-4 sm:p-6 !border-[#E3E8E9] rounded-[28px] h-full flex flex-col cursor-pointer">
              <h3 className="sm:mb-2 font-bold md:text-[28px] sm:text-[25px] font-vksans leading-[150%]">
                {card.title}
              </h3>
              <p className="font-normal font-vksans text-[14px] sm:text-[15px] md:text-[16px] leading-[150%]">
                {card.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
