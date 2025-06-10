import { ChevronRight } from "lucide-react";
import Image from "next/image";

import "../../styles/international.css";
import Partnyor from "@/Components/Partnyor/Partnyor";

import FlagLogo1 from "../../assets/flag/flag1.png";
import FlagLogo2 from "../../assets/flag/flag2.png";
import acredetIcons from "../../assets/icons/1inter.png";
import litsenziyaIcons from "../../assets/icons/litsenziyaicons.png";
import memorandumIcons from "../../assets/icons/memorandum.png";
import FooterLayout from "../_components/Footer/Footer";

export default function InternationalMain() {
    return (
        <div className="">
            <div className="internationalparent overflow-hidden py-20">
                <div className="container pt-3 relative top-0 left-0 flex flex-col md:flex-row gap-10 md:gap-[65px] justify-between items-center w-full mb-12">
                    <article className="w-full md:w-[45%] relative z-[10]">
                        <p className="inline-flex px-2 py-1 bg-[#23B3FC] text-white rounded-md text-[14px] font-medium uppercase mb-4">
                            Xalqaro hamkorlik
                        </p>
                        <h3 className="font-semibold text-[24px] md:text-[32px] leading-9 md:leading-10 mb-2">
                            <span className="uppercase text-[#23B3FC] font-semibold">
                                Clamo
                            </span>{" "}
                            bilan akkreditsiyalash — zamonaviy yondashuv
                        </h3>
                        <p className="text-[#012548] text-base md:text-xl font-medium mb-6 md:mb-10">
                            Tashkilotingiz uchun zarur litsenziyani tez va ishonchli tarzda oling. Clamo sizning qonuniylikdagi ishonchli hamkoringiz
                        </p>
                        <article className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                            <button className="flex justify-center items-center gap-1 bg-[#23B3FC] text-white w-full sm:w-[272px] h-10 rounded-lg cursor-pointer text-[14px] font-medium transition-all duration-200 hover:bg-[#3cbeff]">
                                Xizmatlarimiz <ChevronRight className="w-5 h-5" />
                            </button>
                            <button className="flex justify-center items-center gap-1 bg-[#23B3FC]/[12%] text-[#23B3FC] w-full sm:w-[272px] h-10 rounded-lg cursor-pointer text-[14px] font-medium transition-all duration-200 hover:bg-[#23B3FC]/[30%]">
                                Murojaat qilish <ChevronRight className="w-5 h-5" />
                            </button>
                        </article>
                    </article>
                    <div className="w-full md:w-[55%] flex justify-center items-center relative">
                        <Image className="w-full max-w-[694px] z-[3]" src={FlagLogo1} alt="Flag Logo" />
                        <Image className="absolute top-10 right-0 z-[2] hidden md:block" src={FlagLogo2} alt="Flag blur Logo" />
                    </div>
                </div>
                <div className="shape" />
            </div>

            <Partnyor />

            <div className="w-full py-16 mb-32">
                <div className="container">
                    <h3 className="text-center font-bold text-3xl md:text-5xl text-[#3D445E] mb-[40px] md:mb-[71px]">
                        Hamkorlik loyihalari
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 max-md:pt-8 md:gap-10">
                        {[
                            {
                                icon: acredetIcons,
                                title: "Akkreditatsiyalash",
                                desc: "Tibbiyot tashkilotlarini akkreditatsiyalash va sifat menejmenti sohasida xalqaro hamkorlikni mustahkamlash maqsadida Hindiston Respublikasi Kasalxonalar va sog'liqni saqlash xizmatlarini akkreditatsiyalash milliy kengashi (NABH) bilan anglashuv memorandumi imzolandi. Ushbu memorandum tajriba almashinuvi, o'quv dasturlari va sifat standartlarini uyg'unlashtirish bo'yicha hamkorlikni nazarda tutadi.",
                            },
                            {
                                icon: litsenziyaIcons,
                                title: "Litsenziyalash",
                                desc: "Qozog'iston Respublikasi bilan hamkorlikda tibbiyot sohasida litsenziyalash tizimini takomillashtirishga qaratilgan qo'shma loyiha amalga oshirilmoqda. Loyihaning asosiy maqsadi — ikki davlat tajribasini o'rganish, ilg'or xalqaro standartlar asosida litsenziyalash jarayonini raqamlashtirish va tibbiyot tashkilotlariga qulay, ochiq va samarali tizim yaratishdan iborat.",
                            },
                            {
                                icon: memorandumIcons,
                                title: "Memorandum",
                                desc: "\"CLAMO\" loyihasi tibbiyot sohasida hamkorlikni rivojlantirishga qaratilgan platformadir. Ushbu loyiha tibbiyot mutaxassislari, tadqiqotchilar va tibbiy tashkilotlarni bir joyga jamlab, ularning o'zaro tajriba almashishiga, ilmiy hamkorlikni kuchaytirishga va innovatsion yechimlar ishlab chiqishiga yordam beradi.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="relative z-[5] flex flex-col items-center bg-[#0653C9] px-6 pb-6 pt-16 rounded-[24px] md:rounded-[36px] cardhamkorlar">
                                <article className="absolute top-6 z-[5] inline-flex p-5 rounded-full bg-white -translate-y-16">
                                    <Image className="w-10 h-10 max-md:w-8 max-md:h-8" src={item.icon} alt={`Icon ${item.title}`} />
                                </article>
                                <h6 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{item.title}</h6>
                                <p className="text-[14px] font-normal text-white text-center">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <FooterLayout />
        </div>
    );
}
