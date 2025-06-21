"use client";

import "../../../../styles/linerMainserver.css";
import Image from "next/image";
import { useEffect } from "react";
import { FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import { getPlatforms } from "../../../../../constants/page";
import { useTranslations } from "next-intl";

export default function MainService() {
  const t = useTranslations("HomePage");
  const platforms = getPlatforms(t);

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
      <section className="container  sm:pb-[58px] overflow-hidden">
        {platforms.map((item, id) => (
          <div
            key={id}
            className="grid grid-cols-1 lg:grid-cols-2  bg-[#0653C9] sm:rounded-[36px] rounded-2xl text-white  mb-7"
          >
            <div className="lg:block hidden">
              <div className="flex justify-start bg-[url('/Images/bgMain.png')] bg-no-repeat bg-cover bg-center">
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

            <div className=" mt-6 lg:p-0 max-sm:mx-1 mx-6 my-6 px-4">
              <h1 className="font-bold lg:text-[40px] md:text-[34px] text-[28px] leading-[110%] pb-[8px]">
                {item.title}
              </h1>
              <p className="font-medium text-base text-white/60 md:pb-7 pb-2">
                {item.description}
              </p>
              <div className="flex md:gap-[28px] gap-3 items-center">
                <button className="md:w-[185px] w-[150px] h-[40px] flex items-center justify-center sm:gap-[11.5px] gap-1 bg-[#23B3FC] group hover:bg-[#23B3FC]/[80%] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] cursor-pointer">
                  {item.buttonText}
                  <FaChevronRight className="group-hover:translate-x-2 transition-all duration-200" />
                </button>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#23B3FC] group hover:bg-[#23B3FC]/[80%] transition-all duration-200 rounded-lg cursor-pointer">
                    <FaPhoneAlt size={19.83} />
                  </div>
                  <div>
                    <p className="md:text-sm text-xs font-normal">
                      {item.phoneTitle}
                    </p>
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
