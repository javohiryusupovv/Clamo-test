"use client";

import "../../../../styles/linerMainserver.css";
import Image from "next/image";
import { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { getPlatforms } from "../../../../../constants/page";
import {  useTranslations } from "next-intl";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function MainService() {
  const t = useTranslations("HomePage");
  const platforms = getPlatforms(t);

 useEffect(() => {
     const loadAOS = async () => {
       const AOS = await import("aos");
       AOS.init({ duration: 1000 });
       AOS.refresh();
     };
 
     if (typeof window !== "undefined") {
       loadAOS();
     }
   }, [usePathname()]);

  return (
    <section className="bg-[#F6F9FC]">
      <section className="container  sm:pb-[58px] pt-2 lg:overflow-hidden">
        {platforms.map((item, id) => (
          <div
            key={id}
            className="grid grid-cols-1 lg:grid-cols-2  w-full bg-[#0653C9] lg:rounded-[36px] rounded-2xl text-white  md:mb-7"
          >
            <div className="lg:block hidden">
              <div className="flex justify-start bg-[url('/Images/bgMain.png')] bg-no-repeat bg-cover bg-center">
                <img
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
              <h1 className="font-bold font-vk lg:text-[40px] md:text-[34px] text-[28px] leading-[110%] pb-[8px]">
                {item.title}
              </h1>
              <p className="font-medium font-vk text-base text-white/60 md:pb-7 pb-2">
                {item.description}
              </p>
              <div className="flex md:gap-[28px] gap-3 items-center">
                <Link href="https://office.clamo.uz" aria-label="Litsensiya">
                  <button className="group font-inter lg:px-6 px-5 w-full h-[40px] flex items-center justify-center gap-[11.5px] hover:bg-[hsl(200,97%,65%)] bg-[#23b3fc] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] ">                    
                    {item.buttonText}
                    <FaAngleRight className="group-hover:translate-x-2 transition-all duration-200" />
                  </button>
                </Link>
                <Link href="tel:1369" aria-label="Phone" className="flex items-center gap-[10px]">
                  <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#23B3FC] group hover:bg-[#23B3FC]/[80%] transition-all duration-200 rounded-lg cursor-pointer">
                    <FaPhoneAlt size={19.83} />
                  </div>
                  <div>
                    <p className="md:text-sm text-xs font-vk font-normal text-[#FFFFFF]">
                      {item.phoneTitle}
                    </p>
                    <p className="text-2xl font-bold font-vk">{item.phoneNumber}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
