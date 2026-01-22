"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface NewsImg{
  id: number;
  image: string;
}

interface Props{
  newsImg: NewsImg[]
}

export default function NewsImageSwiper({newsImg}: Props) {
  console.log(newsImg);
  
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      navigation
      pagination={{ clickable: false }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={16}
      slidesPerView={1}
      className="mb-10 rounded-[20px] news-swiper"
    >
      {newsImg.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item.image}
            alt="imgs"
            className="w-full max-md:h-[300px] md:h-[550px] object-cover rounded-[20px]"
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
