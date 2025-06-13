'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type TeamMember = {
  id: number;
  full_name_uz: string;
  description_uz?: string;
  image: string;
};

export default function TeamCarousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('https://clamo-production.up.railway.app/api/about/team/');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error('Failed to fetch team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  // Swiper buttons rendering check
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setSwiperReady(true);
    }
  }, [prevRef, nextRef]);

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-full py-12 container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D445E] mb-3 text-start">
          Markaz jamoasi
        </h2>
        <p className="text-gray-600 mb-8">
          Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha xizmatlar bir joyda...
        </p>
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
                typeof swiper.params.navigation !== 'boolean'
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            spaceBetween={24}
            slidesPerView={4}
            centeredSlides={true} // bu yer markazlash uchun
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

type Props = {
  member: TeamMember;
};

const TeamMemberCard = ({ member }: Props) => {
  const imageUrl = member.image.startsWith('http')
    ? member.image
    : `https://clamo-production.up.railway.app${member.image}`;

  return (
    <div className="relative rounded-2xl overflow-hidden w-64 h-96 shadow-md bg-white cursor-pointer teamcarousel group mx-auto">
      <Image
        src={imageUrl}
        alt={member.full_name_uz}
        width={256}
        height={384}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-white transform transition-transform duration-300 group-hover:-translate-y-[80px]">
        <p className="font-semibold">{member.full_name_uz}</p>
      </div>
      {member.description_uz && (
        <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-[#002b66] to-transparent px-4 text-white flex items-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="text-sm mb-[10px]">{member.description_uz}</div>
        </div>
      )}
    </div>
  );
};
