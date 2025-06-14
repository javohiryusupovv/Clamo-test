import Image from "next/image";
import { getSteps } from "../../../../constants/page";

export default function AccredationMain() {
  const Steps = getSteps;
  return (
    <div className="container mx-auto pb-16 lg:pt-6 sm:pt-9 pt-8 md:pt-12 xl:pt-0">
      <h1 className="font-vksans font-bold sm:text-center akkreditsiya sm:ml-0 ml-1 text-[#3D445E] font-vksans text-[30px] sm:w-full sm:text-[35px] md:text-[40px] leading-tight md:mb-10 sm:mb-8 mb-5 lg:mb-12">
        Akkreditsiya olish bosqichlari
      </h1>
      <div className="grid grid-cols-1 max-w-[500px] sm:max-w-full mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-[28px] md:p-6 p-4 lg:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start sm:text-left"
          >
            <div className="w-full flex justify-start mb-4">
              <Image
                src={step.icon}
                alt={step.title}
                width={80}
                height={80}
                sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                className="object-contain w-12 h-12 sm:w-16 sm:h-16  lg:w-20 lg:h-20"
              />
            </div>
            <h3 className="text-[20px] font-bold font-vksans text-[#3D445E] leading-snug mb-2">
              {step.title}
            </h3>
            <p className="text-[#3D445E] text-[14px] font-vksans font-normal leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}