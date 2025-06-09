import LearnMore from "./LearnMore";
import ClamoFlag from "@/assets/images/clamoFlag.png";
import Image from "next/image";

interface MedicalLegalProps {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  bgCircle: string;
  clamoFlag: string;
}

export default function MedicalLegal() {
  const medical: MedicalLegalProps[] = [
    {
      subtitle: "Sizning sog'lig'ingiz biz uchun",
      badge: "Muhim!",
      title: "CLAMO bilan tibbiy faoliyatingizni qonuniylashtiring!",
      description:
        "Biz tibbiy tashkilotlarga O'zbekistonda ruxsatnoma va litsenziya olishda yordam beramiz. CLAMO bilan faoliyatingizni qonuniy boshlang va sifatli xizmat ko'rsatishga yo'l oching!",
      bgCircle: "/images/twoCircle.png",
      clamoFlag: "@/assets/images/clamoFlag.png",
    },
  ];

  return (
    <div className="container">
      {medical.map((item, id) => (
        <div
          key={id}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
        >
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-3">
              <p className="font-medium text-sm uppercase text-gray-900">
                {item.subtitle}
              </p>
              <span className="bg-[#23B3FC] rounded-md px-2 py-1 text-white text-xs">
                {item.badge}
              </span>
            </div>
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight text-gray-900 mb-4">
              {item.title}
            </h1>
            <p className="font-medium text-base sm:text-lg lg:text-xl text-gray-700 mb-6">
              {item.description}
            </p>
            <LearnMore />
          </div>

          <div className="relative">
            <div className="bg-[url('@/assets/images/twoCircle.png')] bg-no-repeat bg-cover bg-center w-full h-[500px] rotate-180 absolute -z-[1]"></div>
            <Image
              src={ClamoFlag}
              alt="Clamo Flag"
              width={420}
              height={380}
              />
          </div>
        </div>
      ))}
    </div>
  );
}
