import { Inter } from "next/font/google";
import Man from "../../../../public/Images/man.png";
import Woman from "../../../../public/Images/woman.png";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function firstpage() {
  return (
    <div className=" ">
      <div
        className={` flex gap-[20px] container items-center text-[12px] font-inter ${inter.className} font-medium w-full h-[35px] bg-[#FFFFFF]`}
      >
        <h1 className=" text-[#3D445E]">Biz haqimizda</h1>
        <h1 className=" text-[#838CAF]">Konsalting</h1>
      </div>
      <div className=" bg-[#F6F9FC]">
        <div className=" h-[721px] container flex w-full justify-between around">
          <div className="w-[557px] h-[454px] mt-[122px] flex flex-col gap-[40px]">
            <div className=" flex flex-col gap-2">
              <div className=" flex items-center font-inter font-medium text-[14px] leading-[1] gap-2 ">
                <h1 className=" text-[#FFFFFF] bg-[#23B3FC] border-0 rounded-[6px] py-1 px-2 leading-[100%] w-fit ">
                  INFO@CLAMO.UZ
                </h1>
                <h1 className=" text-[#3D445E]">
                  {" "}
                  E-MAIL ORQALI MUROJAAT XATI YUBORING
                </h1>
              </div>
              <h1 className=" text-[#3D445E] leading-[100%] max-w-[509px] text-[32px] font-inter font-bold">
                KONSULTATSIYA XIZMATI — ENDI YANADA OSON
              </h1>
            </div>
            <div className=" w-full h-[320px] flex flex-col gap-[20px]">
              <div className=" w-full h-[137px] bg-[#FFFFFF] rounded-3xl flex flex-col justify-center gap-[16px]">
                <h1 className=" ml-[24px] border rounded-[40px] w-[136px] text-[#23B3FC] font-inter font-bold text-[24px] leading-[1.3] h-[47px] flex items-center justify-center border-[#23B3FC]">
                  1-qadam
                </h1>
                <h1 className=" ml-[24px] text-[20px] text-[#3D445E] leading-[1.3] font-inter font-medium">
                  Yuridik shaxs haqida ma’lumotlar
                </h1>
              </div>
              <div className=" bg-[#FFFFFF] rounded-3xl w-full h-[163px] flex flex-col justify-center gap-[16px]">
                <h1 className=" ml-[24px] border rounded-[40px] w-[136px] text-[#23B3FC] font-inter font-bold text-[24px] leading-[1.3] h-[47px] flex items-center justify-center border-[#23B3FC]">
                  2-qadam
                </h1>
                <h1 className=" ml-[24px] text-[20px] text-[#3D445E] leading-[1.3] font-inter font-medium">
                  Faolga oshirish joyi va ixtisoslik turlari haqida ma’lumotlar
                </h1>
              </div>
            </div>
          </div>
          <div className=" bg-[#F6F9FC] w-[559px] overflow-hidden relative  flex h-auto mt-9">
            <Image
              src={Man}
              alt="bayroq"
              className="object-contain ml-[-35px] z-0 absolute max-w-[494px] h-[704px]"
            />
            <Image
              src={Woman}
              alt="bayroq"
              className="object-contain absolute z-10 ml-36 mt-8 max-w-[494px] h-[704px]"
            />
            <div className="absolute bottom-0 left-0 w-full h-[120px] z-10 md:h-[180px] lg:h-[300px] bg-gradient-to-t from-white/100 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default firstpage;
