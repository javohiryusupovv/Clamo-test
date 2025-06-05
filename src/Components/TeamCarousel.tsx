"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TeamMemberCard } from "@/Components/TeamMemberCard";

type TeamMember = {
  id: number;
  name: string;
  title?: string;
  image: string;
};

const members: TeamMember[] = [
  {
    id: 1,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: "/src/assets/1.png",
  },
  {
    id: 2,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: "/src/assets/2.png",
  },
  {
    id: 3,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: "/src/assets/3.png",
  },
  {
    id: 4,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: "/src/assets/4.png",
  },
    {
    id: 1,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: "/src/assets/1.png",
  },
  {
    id: 2,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: "/src/assets/2.png",
  },
  {
    id: 3,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: "/src/assets/3.png",
  },
  {
    id: 4,
    name: "Sativaldiyev Sanjar Yuldashvayevich",
    title: "Akkreditatsiyalash standartlarini tashkillashtirish, takomillashtirish va tashqi kompleks baholash bo‘limi boshlig‘i",
    image: "/src/assets/4.png",
  },
];

export default function TeamCarousel() {
  const [index, setIndex] = useState(0);

  const visible = members.slice(index, index + 4);

  const next = () => {
    if (index < members.length - 4) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="w-full py-12 container">
      <h2 className="text-3xl font-bold mb-2 text-[#3D445E]">Markaz jamoasi</h2>
      <p className="text-gray-600 mb-8 ">
        Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha xizmatlar bir joyda...
      </p>

      <div className="flex justify-center gap-6">
        {visible.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>

      <div className="mt-6 flex justify-center items-center gap-4">
        <button
          onClick={prev}
          disabled={index === 0}
          className="p-2 bg-white shadow rounded-full disabled:opacity-30"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          disabled={index >= members.length - 3}
          className="p-2 bg-white shadow rounded-full disabled:opacity-30"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
