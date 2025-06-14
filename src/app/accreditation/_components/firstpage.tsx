"use client";
import { ChevronRight } from "lucide-react";
import { Inter } from "next/font/google";
import "./style.css";
import { useEffect } from "react";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
import "aos/dist/aos.css";


function FirstPage() {

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1000 });
      });
    }
  }, []);

  return (
    <div
      className={`container relative bg-transparent h-auto xl:h-[720px] lg:h-[650px] flex flex-col lg:flex-row lg:gap-10 px-4 md:px-10 ${inter.className} font-inter`}
    >
      {/* Left Content */}
      <div className="z-10 flex-1">
        <div className="max-w-full lg:max-w-[557px] relative z-10 flex flex-col gap-[16px] pt-[25px] sm:pt-[35px] lg:pt-[176px] px-1">
          <h2 className="bg-[#23B3FC] border-0 rounded-[6px] py-1 px-2 leading-[100%] w-fit text-[#FFFFFF] text-[14px]">
            AKKREDITSIYALASH
          </h2>
          <div className="flex flex-col gap-[8px]">
            <h1 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#1B1B1B] leading-[120%]">
              <strong className="text-[#23B3FC]">CLAMO</strong> bilan
              akkreditsiyalash — zamonaviy yondashuv
            </h1>
            <p className="font-vksans font-medium text-[#012548CC] text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] tracking-wide">
              Tashkilotingiz uchun zarur litsenziyani tez va ishonchli tarzda
              oling. Clamo sizning qonuniylikdagi ishonchli hamkoringiz.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-[10px] md:mt-[30px] lg:mt-[40px] flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button className="group bg-[#23B3FC] hover:bg-[#23B3FC]/80 w-full sm:w-[200px] md:w-[240px] lg:w-[272px] py-[10px] gap-[5px] border-0 rounded-lg justify-center flex items-center text-[#FFFFFF] text-[14px] leading-[1.3] font-medium">
              Xizmatlarimiz{" "}
              <ChevronRight
                className="group-hover:translate-x-2 transition-all duration-200"
                size={22}
              />
            </button>
            <button className="group bg-[#23B3FC1F] hover:bg-[#23B3FC] hover:text-white w-full sm:w-[200px] md:w-[240px] lg:w-[272px] py-[10px] gap-[5px] border-0 rounded-lg justify-center flex items-center text-[#23B3FC] text-[14px] leading-[1.3] font-medium">
              Murojaat qilish{" "}
              <ChevronRight
                className="group-hover:translate-x-2 transition-all duration-200"
                size={22}
              />
            </button>
          </div>
        </div>
        {/* Blur Background Circle */}
        <div className="hidden lg:block absolute -top-[-260px] left-[-200px] w-[820px] h-[280px] bg-[#23B3FC] opacity-20 blur-[120px] rounded-full z-0"></div>
      </div>

      {/* Right Image — faqat lg (≥1024px) da ko‘rinadi */}
      <div className="hidden xl:flex w-full justify-end">
        
      </div>

      <div className="hidden lg:flex lg:pt-20 xl:hidden w-full justify-end">
            
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] md:h-[180px] lg:h-[440px] bg-gradient-to-t from-[#F6F9FC]/100 opacity- to-transparent"></div>
      {/* <div className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[120px] md:after:h-[180px] lg:after:h-[440px] after:bg-gradient-to-t after:from-white after:to-transparent after:z-10 after:pointer-events-none"></div> */}
    </div>
  );
}

export default FirstPage;
