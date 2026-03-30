import React from "react";
import { useTranslations } from "next-intl";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

const GovernmentDecisions: React.FC = () => {
  const t = useTranslations("RegulatorydocumentsPage");
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-sans bg-white">
      <div className="md:mb-8 mb-4 mt-12 lg:mt-20 flex flex-col gap-[4px]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D445E] leading-[100%] font-vk text-center sm:text-start">
          {t("govDecisionsTitle")}
        </h1>
        <p className="text-sm sm:text-base font-vk md:text-[20px] font-medium text-[#012548CC] max-w-full text-center sm:text-start sm:mx-0">
          {t("govDecisionsDesc")}
        </p>
      </div>
      <div className="text-[#3D445E] md:pb-8">
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          <div className="group w-full lg:w-1/2 xl:w-[480px] bg-[#F6F9FC] hover:bg-[#4382E3] p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h2 className=" group-hover:text-white text-xl font-vk md:text-2xl font-semibold text-[#3D445E] mb-3">
                {t("govDecision1Title")}
              </h2>
            </div>
            <Link
              href={
                "https://drive.google.com/file/d/1e5sC3gxg08Ix63cFm94ngFSMGv3IgEkm/view"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
                 <button className="group font-inter w-full sm:w-[272px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23b3fc] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] ">                    
                {t("downloadBtn")}{" "}
                <FaAngleRight />
              </button>
            </Link>
          </div>
          <div className="group w-full lg:w-1/2 xl:w-[684px] hover:bg-[#4382E3] bg-[#F6F9FC] p-6 rounded-xl hover:cursor-pointer duration-300 transition-transform flex items-center">
            <p className="group-hover:text-white font-vk group-hover:cursor-pointer text-base sm:text-lg md:text-xl lg:text-[22px] font-medium leading-relaxed w-full">
              {t("govDecision1Text")}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className="group w-full lg:w-1/2 xl:w-[684px] hover:bg-[#4382E3] bg-[#F6F9FC] p-6 rounded-xl duration-300 transition-transform hover:cursor-pointer flex items-center">
            <p className="group-hover:text-white font-vk text-base sm:text-lg md:text-xl lg:text-[22px] font-medium leading-relaxed w-full">
              {t("govDecision2Text")}
            </p>
          </div>

          <div className=" group w-full lg:w-1/2 xl:w-[480px] bg-[#F6F9FC] hover:bg-[#4382E3] cursor-pointer p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-vk md:text-2xl font-semibold text-[#3D445E] group-hover:text-white mb-3">
                {t("govDecision2Title")}
              </h2>
            </div>
            <Link
              href={
                "https://drive.google.com/file/d/1Wooo7lz4YjjMgTowweq8_QvvXxhd2oUR/view"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
                 <button className="group font-inter w-full sm:w-[272px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23b3fc] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] ">                    
                {t("downloadBtn")}{" "}
                <FaAngleRight/>
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className="group w-full lg:w-1/2 xl:w-[480px] bg-[#F6F9FC] hover:bg-[#4382E3] cursor-pointer rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-vk md:text-2xl font-semibold text-[#3D445E] group-hover:text-white mb-3">
                {t("govDecision3Title")}
              </h2>
            </div>
            <Link
              href={
                "https://drive.google.com/file/d/1PxNyLM_huofYpB_9y6NeiZyZb-IOE3ZR/view"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group font-inter w-full sm:w-[272px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23b3fc] transition-all duration-200 rounded-lg text-sm font-medium text-white leading-[130%] ">                    
                {t("downloadBtn")}
                <FaAngleRight />
              </button>
            </Link>
          </div>
          <div className="group w-full lg:w-1/2 xl:w-[684px] hover:bg-[#4382E3] bg-[#F6F9FC] p-6 rounded-xl hover:cursor-pointer flex items-center">
            <p className="group-hover:text-white font-vk group-hover:cursor-pointer text-base sm:text-lg md:text-xl lg:text-[22px] font-medium leading-relaxed w-full">
              {t("govDecision3Text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentDecisions;
