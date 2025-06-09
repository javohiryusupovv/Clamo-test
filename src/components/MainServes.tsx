import React from "react";
import Image from "next/image";
import { FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import "@/style/linerMainserver.css";
import ServicesSection from "@/app/about/_components/AboutService";

const platforms = [
  {
    id: 1,
    title: "Litsenziyalash va akkreditatsiyalash platformasiga o‘ting",
    description: "Soha bo‘yicha har qanday savolingizga javob beramiz",
    buttonText: "Batafsil tanishish",
    buttonLink: "#",
    phoneTitle: "Qisqa raqam",
    phoneNumber: "1369",
    image: "/Imgs/Mockup.png",
  },
];

export default function MainService() {
  return (
    <section className="pt-16 bg-[#F6F9FC]">
      <ServicesSection />

      {/* <section className="container">
        {platforms.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between rounded-[36px] text-white bg-[#0653C9] mb-7"
          >
            <div className="w-full md:w-1/2 flex justify-start backgroundLiner py-10 relative">
              <Image
                src={item.image}
                alt="Clamo Logo on Laptop"
                width={473}
                height={273}
                className="w-[473px] h-[273px] rounded-bl-[36px] absolute -left-[68px] -top-[0]"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4">
              <h1 className="font-bold text-[40px] leading-[110%]">
                {item.title}
              </h1>
              <p className="font-medium text-base text-white/60 pb-7">
                {item.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-[28px] items-start sm:items-center">
                <button className="w-[185px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%] cursor-pointer">
                  {item.buttonText}
                  <FaChevronRight />
                </button>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#23B3FC] rounded-lg">
                    <FaPhoneAlt size={19.83} />
                  </div>
                  <div>
                    <p className="text-sm font-normal">{item.phoneTitle}</p>
                    <p className="text-2xl font-bold">{item.phoneNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section> */}
    </section>
  );
}
