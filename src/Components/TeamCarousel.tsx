"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { TeamMemberCard } from "@/Components/TeamMemberCard";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/1.png";
import img6 from "../assets/2.png";
import img7 from "../assets/3.png";
import img8 from "../assets/4.png";
import { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type TeamMember = {
  id: number;
  name: string;
  title?: string;
  image: StaticImageData;
};

const members: TeamMember[] = [
  {
    id: 1,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: img1,
  },
  {
    id: 2,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: img2,
  },
  {
    id: 3,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: img3,
  },
  {
    id: 4,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: img4,
  },
  {
    id: 5,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: img5,
  },
  {
    id: 6,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: img6,
  },
  {
    id: 7,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: img7,
  },
  {
    id: 8,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: img8,
  },
];

export default function TeamCarousel() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-full py-12 container">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D445E] mb-3 text-start">Markaz jamoasi</h2>
        <p className="text-gray-600 mb-8 ">
          Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha xizmatlar bir joyda...
        </p>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={4}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="!pb-8"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
            1200: { slidesPerView: 4},
          }}
        >
          {members.map((member) => (
            <SwiperSlide key={member.id}>
              <TeamMemberCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation buttons pastda joylashadi */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            ref={prevRef}
            className="group p-2 bg-white border rounded-full hover:border-transparent hover:bg-[#23B3FC] transition-all duration-200 disabled:opacity-50"
          >
            <ChevronLeft className="stroke-[1.5] group-hover:stroke-white transition-all duration-200" />
          </button>
          <button
            ref={nextRef}
            className="group p-2 bg-white border rounded-full hover:border-transparent hover:bg-[#23B3FC] transition-all duration-200 disabled:opacity-50"
          >
            <ChevronRight className="stroke-[1.5] group-hover:stroke-white transition-all duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
}