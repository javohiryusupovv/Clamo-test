// pages/news.js
"use client"

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import WhiteDown from "@/assets/icons/whiteDown.png";

export default function NewsPage() {
    const news = [
        {
            id: 1,
            title: "O’zbekistonda yangi zamonaviy tibbiy markazlar tashkil etildi — CLAMO bilan ruxsatnoma va litsenziyalarni tez va oson oling!",
            description: "O’zbekistonda yangi zamonaviy tibbiy markazlar tashkil etildi...",
            image: "/Imgs/Shahar.png",
            date: "10.08.2023",
            link: "/news/1"
        },
        {
            id: 2,
            title: "CLAMO bilan yangi imkoniyatlarni kashf eting!",
            description: "CLAMO bilan yangi imkoniyatlarni kashf eting...",
            image: "",
            date: "10.08.2023",
            link: "/news/2"
        },
        {
            id: 3,
            title: "CLAMO — Sifatli tibbiy xizmatlar rivojiga hissa qo‘shing!",
            description: "",
            image: "",
            date: "10.08.2023",
            link: "/news/3"
        },
        {
            id: 4,
            title: "CLAMO bilan yangi imkoniyatlar eshigi ochildi!",
            description: "",
            image: "",
            date: "10.08.2023",
            link: "/news/4"
        }
    ];

    if (news.length === 0) return <div>Loading...</div>;

    return (
        <div className="container pb-16">
            <h1 className="font-bold lg:text-[48px] sm:text-[44px] text-[20px] text-[#3D445E]">Yangiliklar</h1>
            <p className="font-medium sm:text-[20px] text-[#012548CC] text-[16px] pb-[28px]">
                Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha xizmatlar bir joyda, qulay va samarali yechimlar bilan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-[480px] rounded-[24px] overflow-hidden">
                    <Image
                        src={news[0].image}
                        alt="City image"
                        className="w-full h-full object-cover"
                        width={300}
                        height={200}

                    />
                    {/* Overlay shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/50"></div>
                    <p className="absolute top-[32px] left-[32px] text-[#EDF0EF] font-normal text-[16px] z-10">{news[0].date}</p>
                    <div className="absolute bottom-8 left-8 text-white z-10">
                        <h2 className="text-[28px] font-bold leading-[136%]">{news[0].title}</h2>
                        <a href={news[0].link} className="hover:underline transition-all duration-150 text-white font-medium text-[16px] flex items-center gap-4">
                            Batafsil
                            <div className=" border border-[#74807B] py-4 px-4 rounded-full relative">
                                <FaArrowRightLong width={16} height={8} className=" absolute left-0 top-2" />
                            </div>

                        </a>
                    </div>
                </div>
                <div className="grid grid-rows-[auto_auto] gap-4 w-full mx-auto">
                    {news.slice(1, 2).map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#f5f8fa] rounded-[24px] p-6"
                        >
                            <p className="pb-[48px]">{item.date}</p>
                            <h3 className="font-bold text-[24px] leading-[136%] w-[318px] pb-[24px]">{item.title}</h3>
                            <a href={item.link} className="hover:underline transition-all duration-150 text-[#74807B] font-medium text-[16px] flex items-center gap-4">
                                Batafsil
                                <div className=" border border-[#74807B] py-4 px-4 rounded-full relative">
                                    <FaArrowRightLong width={16} height={8} className=" absolute left-0 top-2" />
                                </div>
                            </a>
                        </div>
                    ))}

                    <div className="grid grid-cols-2 gap-4">
                        {news.slice(2, 4).map((item) => (
                            <div
                                key={item.id}
                                className="bg-[#f5f8fa] rounded-[24px] p-6"
                            >
                                <p className="pb-[48px]">{item.date}</p>
                                <h3 className="font-bold text-[18px] leading-[136%]">{item.title}</h3>
                                <a href={item.link} className="hover:underline transition-all duration-150 text-[#74807B] font-medium text-[16px] flex items-center gap-4">
                                    Batafsil
                                    <div className=" border border-[#74807B] py-4 px-4 rounded-full relative">
                                        <FaArrowRightLong width={16} height={8} className=" absolute left-0 top-2" />
                                    </div>

                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end pt-[12px]">
                        <button className="w-[281px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%] cursor-pointer">
                            Batafsil tanishish <Image src={WhiteDown} alt="down strelka" />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}
