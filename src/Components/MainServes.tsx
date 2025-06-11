"use client"
import "../styles/linerMainserver.css";
import ServicesSection from "@/app/about/_components/AboutService";
import Image from "next/image";
import { useEffect } from "react";
import { FaChevronRight, FaPhoneAlt } from "react-icons/fa";
// import "@/style/linerMainserver.css";


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

  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos");
      AOS.init({ duration: 1000 });
    };

    if (typeof window !== "undefined") {
      loadAOS();
    }
  }, []);


  return (
    <section className="pt-16 bg-[#F6F9FC]">
      <ServicesSection />

      <section className="container max-sm:bg-[#0653C9] sm:pb-[58px] overflow-hidden">
        {platforms.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-2  bg-[#0653C9] sm:rounded-[36px] text-white  mb-7"
          >
            <div className="lg:block hidden">
              <div className="flex justify-start">
                <Image
                  src={item.image}
                  alt="Clamo Logo on Laptop"
                  width={500}
                  height={273}
                  className="w-[510px] h-[300px] rounded-bl-[36px]"
                  data-aos="fade-right"
                />
              </div>
            </div>
            <div className="lg:w-[436px] max-w-[800px] flex flex-col justify-center lg:h-[246px] md:h-[300px] gap-4 mt-6 lg:p-0 max-sm:mx-1 mx-6 my-6">
              <h1 className="font-bold lg:text-[40px] md:text-[34px] text-[28px] leading-[110%]">
                {item.title}
              </h1>
              <p className="font-medium text-base text-white/60 md:pb-7 pb-2">
                {item.description}
              </p>

              <div className="flex md:gap-[28px] gap-3   items-center">
                <button className="md:w-[185px] w-[160px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%] cursor-pointer">
                  {item.buttonText}
                  <FaChevronRight />
                </button>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#23B3FC] rounded-lg">
                    <FaPhoneAlt size={19.83} />
                  </div>
                  <div>
                    <p className="md:text-sm text-xs font-normal">{item.phoneTitle}</p>
                    <p className="text-2xl font-bold">{item.phoneNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
