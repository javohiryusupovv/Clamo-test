"use client";

import Image from "next/image";
import Icon from "@/app/license/Icon";
import StepIcon from "./Iconstep";
import Klinikalar from "./klinikalar";
import BG from "../../../public/Bg.png"

const steps = [
  {
    id: 1,
    title: "Ariza topshirish",
    description:
      "Markazning rasmiy platformasi orqali litsenziya olish uchun murojaat qilish",
    icon: "form",
  },
  {
    id: 2,
    title: "Hujjatlarni tekshirish",
    description:
      "Muassasning sanitariya, texnik va huquqiy talablariga muvofiqligini tekshirish",
    icon: "check",
  },
  {
    id: 3,
    title: "Ekspert baholovi",
    description: "Mutaxassislar tomonidan tayyorgarlik darajasini baholash",
    icon: "review",
  },
  {
    id: 4,
    title: "Litsenziya qarori",
    description:
      "Talablar bajarilganda muassasalarga rasmiy litsenziya beriladi",
    icon: "decision",
  },
];

const Page = () => {
  return (
    <>
      {/* Hero section */}
      <div className="relative">
        <div className="absolute -left-32 top-16 h-[60%] w-[130px] shadow-hero-left z-[-1] hidden md:block"></div>

        <div className="container mx-auto px-4">
          <div className="w-full my-20 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 pt-12 md:h-[400px] md:pt-0">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="rounded-md bg-[#23B3FC] text-white px-3 py-2 text-sm font-medium w-max mx-auto md:mx-0">
                Litsenziyalash
              </h1>

              <div className="space-y-6 md:w-[45%] mx-auto md:mx-0">
                <h1 className="text-[28px] sm:text-[30px] md:text-[32px] font-semibold text-[#1B1B1B]">
                  <span className="text-[#23B3FC]">CLAMO</span> ruxsatnoma
                  Olishning Yangi Standarti
                </h1>
                <p className="text-[#012548CC] leading-[140%] text-[18px] sm:text-[20px] font-medium">
                  Tashkilotingiz uchun zarur litsenziyani tez va ishonchli
                  tarzda oling. Clamo sizning qonuniylikdagi ishonchli
                  hamkoringiz.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-8 justify-center md:justify-start">
                {["Xizmatlarimiz", "Murojaat qilish"].map((text, index) => (
                  <button
                    key={index}
                    className="group flex items-center justify-center gap-[4px] w-full sm:w-[273px] px-[24px] py-[10px] bg-[#23B3FC1F] text-[#23B3FC] rounded-lg hover:bg-[#23B3FC] hover:text-white transition"
                  >
                    <span className="text-[14px] font-medium">{text}</span>
                    <Icon className="w-5 h-5 text-[#23B3FC] group-hover:text-white transition" />
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex md:flex-1 justify-center items-center w-full md:w-[55%] h-auto mt-8 md:mt-0 md:absolute z-[-10] md:right-[-50px]">
              <Image
                src={BG}
                alt="Illyustratsiya"
                width={694}
                height={684}
                priority
                className="w-full h-[684px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Steps section */}
      <div className="container mx-auto px-4 my-[30px]">
        <section className="bg-gradient-to-b from-[#39a9f2] to-[#0653C9] text-white p-6 rounded-3xl max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 sm:w-[80%]">
                Litsenziya olish bosqichlari
              </h2>

              <p className="text-base md:text-[20px] leading-[150%] mb-6 sm:w-[72%]">
                Faoliyatingizni qonuniylashtirishni rejalashtiryapsizmi? Endi bu
                jarayonni onlayn va oson boshlang! Ruxsatnoma olish uchun ariza
                topshiring, hujjatlaringizni yuklang va litsenziyani qisqa
                muddatda qoʻlga kiriting!
              </p>

              <button className="group flex justify-center items-center gap-[4px] border-2 w-full sm:w-[273px] px-[24px] py-[10px] bg-[#23B3FC1F] text-[#FFFFFFFF] rounded-lg hover:bg-[#FFFFFFFF] hover:text-[#23B3FC] transition">
                <span className="text-[14px] font-medium">
                  Litsenziya olish portaliga o‘tish
                </span>
                <Icon className="w-5 h-5 text-[#FFFFFF] group-hover:text-[#23B3FC] transition" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="bg-white bg-opacity-10 rounded-2xl p-4 flex flex-col items-start"
                >
                  <div className="bg-white bg-opacity-20 p-[16px] rounded-[18px] mb-3">
                    <StepIcon type={step.icon as "form" | "check" | "review" | "decision"} />
                  </div>
                  <h3 className="font-bold text-[20px] mb-2">{step.title}</h3>
                  <p className="text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Klinikalar section */}
      <section className="container mx-auto px-4 py-[80px]">
        <Klinikalar />
      </section>
    </>
  );
};

export default Page;
