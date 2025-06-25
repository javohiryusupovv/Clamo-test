"use client";

import { useTranslations } from "next-intl";
import { Inter } from "next/font/google";
import Man from "../../../../../../public/Images/man.png";
import Woman from "../../../../../../public/Images/woman.png";
import Image from "next/image";
import "./style.css";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function firstpage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("ConsultingPage");

  return (
    <div className="">
      <div className=" bg-[#FFFFFF] relative z-10">
        <div
          className={` flex gap-[20px] container items-center text-[12px] font-inter ${inter.className} font-medium w-full h-[35px] `}
        >
          <h1 className=" text-[#3D445E]">{t("about_we")}</h1>
          <h1 className=" text-[#838CAF]">{t("consalting")}</h1>
        </div>
      </div>
      <div className=" bg-[#F6F9FC] car">
        <div className=" h-[721px] card1  overflov container flex w-full justify-between">
          <div className="max-w-[557px]  first-card h-[454px] card-1 mt-[122px] flex flex-col md:gap-[40px] ">
            <div className=" flex flex-col gap-2">
              <div className=" flex items-center font-inter font-medium text-[14px] leading-[1] gap-2 ">
                <h1 className=" text-[#FFFFFF] info bg-[#23B3FC] font-inter border-0 rounded-[6px] py-1 px-2 leading-[100%] w-fit ">
                  INFO@CLAMO.UZ
                </h1>
                <h1 className=" text-[#3D445E] email-none font-inter">
                  {t("email_letter")}
                </h1>
                <h1 className=" text-[#3D445E] email-flex font-inter">
                  {t("email_letter")}
                </h1>
              </div>
              <h1 className=" konsul text-[#3D445E] leading-[100%]  max-w-[509px] text-[32px] font-inter font-bold">
                {t("easy_sever")}
              </h1>
            </div>
            <div className=" w-full h-[320px] flex flex-col gap-[20px]">
              <div className=" w-full card11 little-card1 h-[137px] div bg-[#FFFFFF] rounded-3xl flex flex-col justify-center gap-[16px]">
                <h1 className=" ml-[24px] borders rounded-[40px] border w-[136px] text-[#23B3FC] font-inter font-bold text-[24px] leading-[1.3] h-[47px] flex items-center justify-center border-[#23B3FC]">
                  {t("step_one")}
                </h1>
                <h1 className=" ml-[24px] text-[20px] whites text-[#3D445E] leading-[1.3] font-inter font-medium">
                  {t("info_person")}
                </h1>
              </div>
              <div className=" bg-[#FFFFFF] div card12 little-card2 rounded-3xl w-full h-[163px] flex flex-col justify-center gap-[16px]">
                <h1 className=" ml-[24px] border borders rounded-[40px] w-[136px] text-[#FFFFFF] md:text-[#23B3FC] font-inter font-bold text-[24px] leading-[1.3] h-[47px] flex items-center justify-center border-[#FFFFFF] sm:border-[#23B3FC]">
                  {t("step_two")}
                </h1>
                <h1 className=" ml-[24px]  whites text-[20px] text-[#FFFFFF] sm:text-[#3D445E] leading-[1.3] font-inter font-medium">
                  {t("active_place")}
                </h1>
              </div>
            </div>
          </div>
          <div className=" bg-[#F6F9FC] bloc w-[559px] overflow-hidden relative  flex h-auto mt-9">
            <Image
              src={Man}
              alt="bayroq"
              className="object-contain ml-[-35px] z-0 absolute max-w-[494px] h-[704px] img1"
            />
            <Image
              src={Woman}
              alt="bayroq"
              className="object-contain absolute z-10 ml-36 mt-8 max-w-[494px] h-[704px] img2"
            />
            <div className="absolute bottom-0 left-0 w-full h-[120px] md:h-[180px] lg:h-[430px] bg-gradient-to-t z-20 from-[#F6F9FC]/100 opacity- to-transparent"></div>
          </div>
          <div className=" bg-[#F6F9FC] img-flex w-[559px] flex">
            <Image
              src={Man}
              alt="bayroq"
              className="object-contain man ml-[-35px] z-0 absolute max-w-[494px] h-[704px]"
            />
            <Image
              src={Woman}
              alt="bayroq"
              className="object-contain woman absolute z-10 ml-36 mt-8 max-w-[494px] h-[704px]"
            />
            <div className="absolute bottom-0 left-0 w-full h-[120px] md:h-[180px] lg:h-[430px] bg-gradient-to-t z-20 from-[#F6F9FC]/100 opacity- to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
