import React from 'react'
import Image from 'next/image'
import Servicec from "./_components/AboutService";
import TeamCarousel from './_components/TeamCarousel';
import Screenpage from '@/assets/Screenpagee.png';
import NavBuilding from '@/assets/NavBuilding.png';
import HeroSection from './_components/HeroSection';
import DepartmentSection from './_components/DepartmentSection';

export default function page() {
    return (
        <div className=''>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Matn bo‘limi */}
                    <div className="flex flex-col justify-center gap-4">
                        <p className="rounded-md bg-[#23B3FC] text-white text-sm sm:text-base px-4 py-1 w-fit">
                            Bizning rejalar:
                        </p>
                        <h2 className="text-[20px] sm:text-[28px] lg:text-[32px] text-[#1B1B1B] font-semibold leading-snug">
                            Tibbiyot muassasalarining sifati va xavfsizligini yanada oshirish.
                        </h2>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[rgba(1,37,72,0.8)] leading-relaxed">
                            Raqamli texnologiyalarni joriy etish orqali litsenziyalash va akkreditatsiya jarayonlarini soddalashtirish, xalqaro standartlarni to‘liq integratsiya qilish, shifokor va tibbiyot muassasalari uchun malaka oshirish tizimini kengaytirish va boshqalar.
                        </p>
                    </div>

                    {/* Rasm bo‘limi */}
                    <div className="relative w-full">
                        <Image
                            src={NavBuilding}
                            alt="Building"
                            width={1500}
                            height={600}
                            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover rounded-xl"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[150px] sm:h-[200px] md:h-[250px] bg-gradient-to-t from-white/100 to-transparent" />
                    </div>
                </div>
            </div>

            <Servicec />
            <div className="container ">
                <h1 className="text-[#3D445E] text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
                    Markaz tuzilmasi
                </h1>
                <p className="text-[rgba(1, 37, 72, 0.80)] text-sm sm:text-base md:text-lg font-medium text-center mb-8 ">
                    Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha xizmatlar bir joyda, qulay va samarali yechimlar bilan.
                </p>
                <div className="flex justify-center">
                    <Image
                        src={Screenpage}
                        alt="Markaz tuzilmasi"
                        width={1000}
                        height={700}
                        className="w-full max-w-5xl h-auto rounded-xl shadow-sm"
                    />
                </div>
            </div>

            <DepartmentSection />
            <TeamCarousel />
            <HeroSection />
        </div>
    )
}
