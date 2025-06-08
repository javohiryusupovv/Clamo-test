import { ChevronRight } from "lucide-react";
import Image from "next/image";


import "../../styles/international.css"; // Import the CSS file for styles
import Partnyor from "@/Components/Partnyor/Partnyor";

import FlagLogo1 from "../../assets/flag/flag1.png";
import FlagLogo2 from "../../assets/flag/flag2.png";
import acredetIcons from "../../assets/icons/1inter.png"
import litsenziyaIcons from "../../assets/icons/litsenziyaicons.png"
import memorandumIcons from "../../assets/icons/memorandum.png"
import FooterLayout from "../_components/Footer/Footer";



export default function InternationalMain() {
    return (
        <div className="bg-[#F6F9FC]">
            <div className="internationalparent overflow-hidden">
                <div className="container pt-3 relative top-0 left-0 flex gap-[65px] justify-between items-center w-full mb-12">
                    <article className="w-[45%] relative top-0 left-0 z-[10]">
                        <p className=" inline-flex px-2 py-1 bg-[#23B3FC] text-white rounded-md text-[14px] font-medium uppercase mb-4">Xalqaro hamkorlik</p>
                        <h3 className="font-semibold text-[32px] leading-10 mb-2"><span className="uppercase text-[#23B3FC] font-semibold text-[32px]">Clamo</span> bilan akkreditsiyalash — zamonaviy yondashuv</h3>
                        <p className="text-[#012548] text-xl font-medium mb-10">Tashkilotingiz uchun zarur litsenziyani tez va ishonchli tarzda oling. Clamo sizning qonuniylikdagi ishonchli hamkoringiz</p>
                        <article className="flex items-center gap-3">
                            <button className="flex justify-center items-center gap-1 bg-[#23B3FC] text-white w-[272px] h-10 rounded-lg cursor-pointer text-[14px] font-medium transition-all duration-200 hover:bg-[#3cbeff]">Xizmatlarimiz <ChevronRight className="w-5 h-5" /></button>
                            <button className="flex justify-center items-center gap-1 bg-[#23B3FC]/[12%] text-[#23B3FC] w-[272px] h-10 rounded-lg cursor-pointer text-[14px] font-medium transition-all duration-200 hover:bg-[#23B3FC]/[30%]">Murojaat qilish <ChevronRight className="w-5 h-5" /></button>
                        </article>
                    </article>
                    <div className="w-[55%] flex justify-center items-center relative">
                        <Image className="w-[694px] z-[3]" src={FlagLogo1} alt="Flag Logo" />
                        <Image className="absolute top-14 right-0 z-[2]" src={FlagLogo2} alt="Flag blur Logo" />
                    </div>
                </div>
                <div className="shape" />
            </div>
            <Partnyor/>
            <div className="w-full py-16 mb-32">
                <div className="container">
                    <h3 className="text-center font-bold text-5xl text-[#3D445E] mb-[71px]">Hamkorlik loyihalari</h3>
                    <div className="grid grid-cols-3 w-full justify-center gap-10">
                        <div className="relative top-0 left-0 z-[5] flex flex-col items-center bg-[#0653C9] px-6 pb-6 pt-16 rounded-[36px] cardhamkorlar">
                            <article className="absolute top-6 z-[5] inline-flex p-5 rounded-full bg-white -translate-y-16">
                                <Image className="w-10 h-10" src={acredetIcons} alt="Icons Accredetsiyalash"/> 
                            </article>
                            <h6 className="relative top-0 left-0 z-[5] text-2xl font-bold text-white mb-4">Akkreditatsiyalash</h6>
                            <p className="relative top-0 left-0 z-[5] text-[14px] font-normal text-white text-center">Tibbiyot tashkilotlarini akkreditatsiyalash va sifat menejmenti sohasida xalqaro hamkorlikni mustahkamlash maqsadida Hindiston Respublikasi Kasalxonalar va sog‘liqni saqlash xizmatlarini akkreditatsiyalash milliy kengashi (NABH) bilan anglashuv memorandumi imzolandi. Ushbu memorandum tajriba almashinuvi, o‘quv dasturlari va sifat standartlarini uyg‘unlashtirish bo‘yicha hamkorlikni nazarda tutadi.</p>
                        </div>
                        <div className="relative top-0 left-0 z-[5] flex flex-col items-center bg-[#0653C9] px-6 pb-6 pt-16 rounded-[36px] cardhamkorlar">
                            <article className="absolute top-6 z-[5] inline-flex p-5 rounded-full bg-white -translate-y-16">
                                <Image className="w-10 h-10" src={litsenziyaIcons} alt="Icons Accredetsiyalash"/> 
                            </article>
                            <h6 className="relative top-0 left-0 z-[5] text-2xl font-bold text-white mb-4">Litsenziyalash</h6>
                            <p className="relative top-0 left-0 z-[5] text-[14px] font-normal text-white text-center">Qozog‘iston Respublikasi bilan hamkorlikda tibbiyot sohasida litsenziyalash tizimini takomillashtirishga qaratilgan qo‘shma loyiha amalga oshirilmoqda. Loyihaning asosiy maqsadi — ikki davlat tajribasini o‘rganish, ilg‘or xalqaro standartlar asosida litsenziyalash jarayonini raqamlashtirish va tibbiyot tashkilotlariga qulay, ochiq va samarali tizim yaratishdan iborat. Hamkorlik doirasida tajriba almashinuvi, o‘quv seminarlar va ekspertlar ishtirokidagi uchrashuvlar rejalashtirilgan.</p>
                        </div>
                        <div className="relative top-0 left-0 z-[5] flex flex-col items-center bg-[#0653C9] px-6 pb-6 pt-16 rounded-[36px] cardhamkorlar">
                            <article className="absolute top-6 z-[5] inline-flex p-5 rounded-full bg-white -translate-y-16">
                                <Image className="w-10 h-10" src={memorandumIcons} alt="Icons Accredetsiyalash"/> 
                            </article>
                            <h6 className="relative top-0 left-0 z-[5] text-2xl font-bold text-white mb-4">Memorandum</h6>
                            <p className="relative top-0 left-0 z-[5] text-[14px] font-normal text-white text-center">"CLAMO" loyihasi tibbiyot sohasida hamkorlikni rivojlantirishga qaratilgan platformadir. Ushbu loyiha tibbiyot mutaxassislari, tadqiqotchilar va tibbiy tashkilotlarni bir joyga jamlab, ularning o‘zaro tajriba almashishiga, ilmiy hamkorlikni kuchaytirishga va innovatsion yechimlar ishlab chiqishiga yordam beradi.</p>
                        </div>
                    </div>
                </div>
            </div>
            <FooterLayout/>
        </div>
    )
}

// 6EB8E8
