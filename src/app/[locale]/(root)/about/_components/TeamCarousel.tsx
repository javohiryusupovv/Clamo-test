"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TeamMembers } from "../../../../../../app.types";
import { useLocale, useTranslations } from "next-intl";
import { getLocalizedValue, pickStringProps } from "@/lib/getLocalization";

export default function TeamCarousel({ members }: { members: TeamMembers[] }) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const t = useTranslations("AboutPage");

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setSwiperReady(true);
    }
  }, []);

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-full py-12 container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D445E] mb-3 text-start">
          {t("team_title")}
        </h2>
        <p className="text-gray-600 mb-8">{t("team_subtitle")}</p>
        {members.length > 0 && swiperReady ? (
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current!,
              nextEl: nextRef.current!,
            }}
            onBeforeInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean"
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            spaceBetween={24}
            slidesPerView={4}
            centeredSlides={true}
            className="!pb-8"
            breakpoints={{
              320: { slidesPerView: 1, centeredSlides: true },
              640: { slidesPerView: 2, centeredSlides: false },
              1000: { slidesPerView: 3, centeredSlides: false },
              1200: { slidesPerView: 4, centeredSlides: false },
            }}
          >
            {members.map((member) => (
              <SwiperSlide key={member.id}>
                <TeamMemberCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>Loading...</p>
        )}
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

function TeamMemberCard({ member }: { member: TeamMembers }) {
  const locale = useLocale();
  const stringLocale = pickStringProps(member);
  const descriptionLocale = getLocalizedValue(
    stringLocale,
    "full_name",
    locale
  );
  const localFullname = getLocalizedValue(stringLocale, "description", locale);
  return (
    <div className="relative rounded-2xl overflow-hidden w-64 h-96 shadow-md bg-black cursor-pointer teamcarousel group mx-auto">
      <Image
        src={member.image}
        alt={member.full_name}
        width={256}
        height={384}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 left-0 right-0 top-[220px] bg-gradient-to-t from-[#051425]/65 via-[#051425]/60 to-[#051425]/0"></div>

      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-white transform transition-transform duration-700 group-hover:-translate-y-[92px]">
        <p className="font-bold text-[17px]">{descriptionLocale}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-[#002b66] to-transparent px-4 text-white flex items-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="text-sm mb-[30px]">{localFullname}</div>
      </div>
    </div>
  );
}
