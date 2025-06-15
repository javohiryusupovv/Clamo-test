"use client"

import { ChevronRight } from "lucide-react";

import "../../../../styles/international.css";
import { useTranslations } from "next-intl";
import Partnyor from "../components/partnyor/Partnyor";
import Image from "next/image";
import { getHamkorlar } from "../../../../../constants/page";

export default function InternationalMain() {
    const t = useTranslations("InternationalPage")
    const hamkorlar = getHamkorlar(t);
    return (
        <div className="">
            <div className="internationalparent overflow-hidden py-20">
                <div className="container pt-3 relative top-0 left-0 flex flex-col md:flex-row gap-10 md:gap-[65px] justify-between items-center w-full mb-12">
                    <article className="w-full md:w-[45%] relative z-[10]">
                        <p className="inline-flex px-2 py-1 bg-[#23B3FC] text-white rounded-md text-[14px] font-medium uppercase mb-4">
                           {t("firstletter")}
                        </p>
                        <h3 className="font-semibold text-[24px] md:text-[32px] leading-9 md:leading-10 mb-2">
                            <span className="uppercase text-[#23B3FC] font-semibold">
                                {t("international_title")}
                            </span>{" "}
                            {t("international22")}
                        </h3>
                        <p className="text-[#012548] text-base md:text-xl font-medium mb-6 md:mb-10">
                            {t("international_des")}
                        </p>
                        <article className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                            <button className="flex justify-center items-center gap-1 bg-[#23B3FC] text-white w-full sm:w-[272px] h-10 rounded-lg cursor-pointer text-[14px] font-medium transition-all duration-200 hover:bg-[#3cbeff]">
                                {t("hamkorlar_btn")} <ChevronRight className="w-5 h-5" />
                            </button>
                            <button className="flex justify-center items-center gap-1 bg-[#23B3FC]/[12%] text-[#23B3FC] w-full sm:w-[272px] h-10 rounded-lg cursor-pointer text-[14px] font-medium transition-all duration-200 hover:bg-[#23B3FC]/[30%]">
                                {t("hamkorlar_btn2")} <ChevronRight className="w-5 h-5" />
                            </button>
                        </article>
                    </article>
                    <div className="w-full md:w-[55%] flex justify-center items-center relative">
                        <Image className="w-full max-w-[694px] z-[3]" width={400} height={200} src={"/flag/flag1.png"} alt="Flag Logo" />
                        <Image className="absolute top-10 right-0 z-[2] hidden md:block" width={400} height={200} src={"/flag/flag2.png"} alt="Flag blur Logo" />
                    </div>
                </div>
                <div className="shape" />
            </div>

            <Partnyor/>

            <div className="w-full py-16 mb-32">
                <div className="container">
                    <h3 className="text-center font-bold text-3xl md:text-5xl text-[#3D445E] mb-[40px] md:mb-[71px]">
                        {t("hamkorlarr")}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 max-md:pt-8 md:gap-10">
                        {hamkorlar.map((item, index) => (
                            <div key={index} className="relative z-[5] flex flex-col items-center bg-[#0653C9] px-6 pb-6 pt-16 rounded-[24px] md:rounded-[36px] cardhamkorlar">
                                <article className="absolute top-6 z-[5] inline-flex p-5 rounded-full bg-white -translate-y-16">
                                    <Image className="w-10 h-10 max-md:w-8 max-md:h-8" width={200} height={100} src={item.icon} alt={`Icon ${item.title}`} />
                                </article>
                                <h6 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{item.title}</h6>
                                <p className="text-[14px] font-normal text-white text-center">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}