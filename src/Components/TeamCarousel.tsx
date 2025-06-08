"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const visibleCount = 4; // 1 sahifada ko'rinadigan kartalar soni
  const totalCount = members.length;

  // Maksimal index - shu holatda, shuni hisoblash kerakki,
  // oxirgi ko'rinadigan karta 4-chi bo'lsa, indeks 4 ta qolgan bo'lishi kerak:
  const maxIndex = totalCount - visibleCount; // 8 - 4 = 4

  const [index, setIndex] = useState(0); // karta indeksi (qayerdan boshlanadi)

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  return (
    <div className="w-full py-12 container">
      <h2 className="text-3xl font-bold mb-2 text-[#3D445E]">Markaz jamoasi</h2>
      <p className="text-gray-600 mb-8 ">
        Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha xizmatlar bir joyda...
      </p>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            // Siljish bitta kartaning kengligi * index (foizda)
            transform: `translateX(-${(100 / totalCount) * index}%)`,
            // To'liq kenglik (karta soni * har bir kartaning kengligi %)
            width: `${(100 / visibleCount) * totalCount}%`,
          }}
        >
          {members.map((member) => (
            <div
              key={member.id}
              style={{ width: `${100 / totalCount}%` }} // har karta kengligi
              className="flex-shrink-0"
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center items-center gap-4">
        <button
          onClick={prev}
          disabled={index === 0}
          className="group p-2 bg-white border rounded-full hover:border-transparent hover:bg-[#23B3FC] transition-all duration-200 disabled:opacity-50"
        >
          <ChevronLeft className="stroke-[1.5] group-hover:stroke-white transition-all duration-200" />
        </button>
        <button
          onClick={next}
          disabled={index >= maxIndex}
          className="group p-2 bg-white border rounded-full hover:border-transparent hover:bg-[#23B3FC] transition-all duration-200 disabled:opacity-50"
        >
          <ChevronRight className="stroke-[1.5] group-hover:stroke-white transition-all duration-200" />
        </button>
      </div>
    </div>
  );
}
