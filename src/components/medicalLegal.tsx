import LearnMore from "./learnMore";
import ClamoFlag from "@/assets/images/clamoFlag.png";
import Image from "next/image";

export default function MedicalLegal() {
  interface MedicalLegalProps {
    title: string;
    subtitle: string;
    badge: string;
    description: string;
    bgCircle: string;
    clamoFlag: string;
  }

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
    <div className="container mb-[132px] max-[380px]:mb-[80px]">
      {medical.map((item, id) => (
        <div key={id} className="flex items-start justify-between relative">
          <div className="sm:w-1/2">
            <p className="font-medium text-sm uppercase pb-3 max-[380px]:text-xs">
              {item.subtitle}{" "}
              <span className="bg-[#23B3FC] rounded-md px-2 py-[3px] text-white max-[380px]:text-[10px]">
                {item.badge}
              </span>
            </p>
            <h1 className="font-bold lg:text-[48px] md:text-[44px] text-[36px] leading-[110%] pb-[10px] max-[380px]:text-[28px] max-[380px]:pb-2">
              {item.title}
            </h1>
            <p className="font-medium text-[20px] text-[#012548CC] pb-7 max-[380px]:text-[14px] max-[380px]:pb-4">
              {item.description}
            </p>
            <LearnMore />
          </div>
          <div className="">
            <div
              className="bg-[url('@/assets/images/twoCircle.png')] bg-no-repeat bg-contain bg-center w-[500px] h-[500px] rotate-180 scale-125 absolute top-10 right-8"

            />
            <Image
              src={ClamoFlag}
              alt="TwoCircLe"
              width={500}
              height={450}
              className="absolute z-[1]  left-1/2 -top-4 max-[380px]:hidden"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
