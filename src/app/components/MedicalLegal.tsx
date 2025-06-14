"use client"

import LearnMore from "./LearnMoreButton";
import { useEffect } from "react";

interface MedicalLegalProps {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  bgCircle: string;
  clamoFlag: string;
}

export default function MedicalLegal() {

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then(AOS => {
        AOS.init({ duration: 1000 });
      });
    }
  }, []);

  const medical: MedicalLegalProps[] = [
    {
      subtitle: "Sizning sog'lig'ingiz biz uchun",
      badge: "Muhim!",
      title: "CLAMO bilan tibbiy faoliyatingizni qonuniylashtiring!",
      description:
        "Biz tibbiy tashkilotlarga O'zbekistonda ruxsatnoma va litsenziya olishda yordam beramiz. CLAMO bilan faoliyatingizni qonuniy boshlang va sifatli xizmat ko'rsatishga yo'l oching!",
      bgCircle: "/images/twoCircle.png",
      clamoFlag: "@/assets/flag/flag1.png",
    },
  ];

  return (
    <div className="container">
      {medical.map((item, id) => (
        <div
          key={id}
          className="flex justify-between flex-col lg:flex-row items-center gap-8 md:pb-[132px] pb-5"
        >
          <div className="w-full lg:w-1/2 ">
            <div className="flex items-center gap-2 mb-3">
              <p className="font-medium text-sm uppercase text-gray-900">
                {item.subtitle}
              </p>
              <span className="bg-[#23B3FC] rounded-md px-2 py-1 text-white text-xs">
                {item.badge}
              </span>
            </div>
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight text-[#3D445E] mb-4">
              {item.title}
            </h1>
            <p className="font-medium text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
              {item.description}
            </p>
            <LearnMore />
          </div>

          <div className="relative bottom-0 z-[60] lg:h-[400px] overflow-hidden">
            <div className="bg-[url('../assets/images/twoCircle.png')] bg-no-repeat bg-center bg-contain w-full h-[950px] absolute -top-[480px] hidden lg:block -z-[1]"></div>
        
          </div>
        </div>
      ))}
    </div>
  );
}
