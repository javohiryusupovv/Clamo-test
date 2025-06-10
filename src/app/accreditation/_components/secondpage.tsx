"use client";
import Image from "next/image";
import Img1 from "../../../../public/Images/img1.png";
import Img2 from "../../../../public/Images/img2.png";
import Img3 from "../../../../public/Images/img3.png";
import Img4 from "../../../../public/Images/img4.png";

const steps = [
  {
    icon: Img1,
    title: "Ariza topshirish",
    description:
      "Markazning rasmiy platformasi orqali litsenziya olish uchun murojaat qilish",
  },
  {
    icon: Img2,
    title: "Hujjatlarni tekshirish",
    description:
      "Muassasaning sanitariya, texnik va huquqiy talablariga muvofiqligini tekshirish",
  },
  {
    icon: Img3,
    title: "Ekspert baholovi",
    description: "Mutaxassislar tomonidan tayyorgarlik darajasini baholash",
  },
  {
    icon: Img4,
    title: "Litsenziya qarori",
    description:
      "Talablar bajarilganda muassasalarga rasmiy litsenziya beriladi",
  },
];

function SecondPage() {
  return (
    <div className="container mx-auto pb-16">
      <h1 className="font-vksans font-bold text-center text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-[#3D445E] leading-tight mb-6 sm:mb-8 lg:mb-12">
        Akkreditsiya olish bosqichlari
      </h1>

      <div className="grid grid-cols-1 max-w-[500px] sm:max-w-full mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-[28px] p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start sm:text-left"
          >
            <div className="w-full flex justify-start mb-4">
              <Image
                src={step.icon}
                alt={step.title}
                width={80}
                height={80}
                className="object-contain"
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

export default SecondPage;
