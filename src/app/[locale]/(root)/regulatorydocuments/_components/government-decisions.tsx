import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import WhiteDown from "@/assets/icons/whiteDown.png";

const GovernmentDecisions: React.FC = () => {
  const t = useTranslations("RegulatorydocumentsPage");
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-sans bg-[white]">
      <div className="mb-8 mt-12 lg:mt-20">
        {" "}
        {/* Added responsive top margin */}
        {/* Responsive font size and text alignment */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-[#3D445E] mb-3 text-center sm:text-start">
          {t("govDecisionsTitle")}
        </h1>
        {/* Responsive font size, max-width, and text alignment */}
        <p className="text-base sm:text-lg lg:text-[20px] font-medium text-[#012548CC]/80% max-w-full md:max-w-3xl lg:max-w-4xl text-center sm:text-start mx-auto sm:mx-0">
          {t("govDecisionsDesc")}
        </p>
      </div>
      <div className="text-[#3D445E] pb-8">
        {/* Responsive flex container: stacks columns on smaller screens, then arranges in rows */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6">
          {/* Decision 1: President's Decision - Responsive width */}
          <div className="w-full lg:w-1/2 xl:w-[480px] bg-[#F6F9FC] p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-[#3D445E] mb-3">
                {t("govDecision1Title")}
              </h2>
            </div>
            {/* Responsive button width and margin-top */}
            <button className="group hover:bg-[#23B3FC]/[80%] w-full sm:w-[272px] h-10 flex items-center justify-center gap-2 bg-[#23B3FC] rounded-lg text-sm font-medium leading-tight mt-6 sm:mt-8 lg:mt-12 text-white mx-auto lg:mx-0">
              {t("downloadBtn")} <Image src={WhiteDown} alt="down strelka" className="md:group-hover:translate-x-2 transition-all duration-200" />
            </button>
          </div>
          {/* Decision 1 Description - Responsive width and text size, removed fixed height */}
          <div className="group w-full lg:w-1/2 xl:w-[684px] hover:bg-[#4382E3] bg-[#F6F9FC] p-6 rounded-xl hover:cursor-pointer duration-300 transition-transform flex items-center">
            <p className="group-hover:text-white group-hover:cursor-pointer text-base sm:text-lg md:text-xl lg:text-[22px] font-medium leading-relaxed w-full">
              {t("govDecision1Text")}
            </p>
          </div>
        </div>

        {/* Second row of decisions - Responsive flex container */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          {/* Decision 2 Description - Responsive width and text size */}
          <div className="group w-full lg:w-1/2 xl:w-[684px] hover:bg-[#4382E3] bg-[#F6F9FC] p-6 rounded-xl duration-300 transition-transform hover:cursor-pointer flex items-center">
            <p className="group-hover:text-white text-base sm:text-lg md:text-xl lg:text-[22px] font-medium leading-relaxed w-full">
              {t("govDecision2Text")}
            </p>
          </div>
          {/* Decision 2: Cabinet of Ministers - Responsive width */}
          <div className="w-full lg:w-1/2 xl:w-[480px] bg-[#F6F9FC] p-6 rounded-xl flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-[#3D445E] mb-3">
                {t("govDecision2Title")}
              </h2>
            </div>
            {/* Responsive button width and margin-top */}
            <button className="group hover:bg-[#23B3FC]/[80%] w-full sm:w-[272px] h-10 flex items-center justify-center gap-2 bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-tight mt-6 sm:mt-8 lg:mt-12 mx-auto lg:mx-0">
              {t("downloadBtn")}{" "}
              <Image
                src={WhiteDown}
                alt="down strelka"
                className="md:group-hover:translate-x-2 transition-all duration-200"
              />
            </button>
          </div>
        </div>

        {/* Third row of decisions - Responsive flex container */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          {/* Decision 3: Minister's Order - Responsive width */}
          <div className="w-full lg:w-1/2 xl:w-[480px] bg-[#F6F9FC] rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-[#3D445E] mb-3">
                {t("govDecision3Title")}
              </h2>
            </div>
            {/* Responsive button width and margin-top */}
            <button className="group hover:bg-[#23B3FC]/[80%] w-full sm:w-[272px] h-10 flex items-center justify-center gap-2 bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-tight mt-6 sm:mt-8 lg:mt-12 mx-auto lg:mx-0">
              {t("downloadBtn")}
              <Image
                src={WhiteDown}
                alt="down strelka"
                className="md:group-hover:translate-x-2 transition-all duration-200"
              />
            </button>
          </div>
          {/* Decision 3 Description - Responsive width and text size, removed fixed height */}
          <div className="group w-full lg:w-1/2 xl:w-[684px] hover:bg-[#4382E3] bg-[#F6F9FC] p-6 rounded-xl hover:cursor-pointer flex items-center">
            <p className="group-hover:text-white group-hover:cursor-pointer text-base sm:text-lg md:text-xl lg:text-[22px] font-medium leading-relaxed w-full">
              {t("govDecision3Text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentDecisions;
