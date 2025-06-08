import React from 'react'
import Image from 'next/image'
import Servicec from "@/Components/AboutService"
import TeamCarousel from '@/Components/TeamCarousel';
import DirectionsSection from '@/Components/DirectionsSection';
import Screenpage from '@/assets/Screenpagee.png';
import NavBuilding from '@/assets/NavBuilding.png';
import HeroSection from '@/Components/HeroSection';
import DepartmentSection from '@/Components/DepartmentSection';

export default function page() {
    return (
        <div className=''>
            <div className='container'>
                <div className='grid items-center grid-cols-1 md:grid-cols-2 gap-[55px] relative'>
                    <div className='flex flex-col justify-center items-start gap-[16px] pt-[100px]'>
                        <p className='rounded-md bg-[#23B3FC] justify-center items-center flex w-[127px] text-white'>Bizning rejalar:</p>
                        <p className='w-[480px] text-[32px] text-[#1B1B1B] font-[600] pt-[16px]'>Tibbiyot muassasalarining sifati va xavfsizligini yanada oshirish.</p>
                        <p className='text-[20px] font-[500] text-[rgba(1, 37, 72, 0.80)] w-[535px]'>Raqamli texnologiyalarni joriy etish orqali litsenziyalash va akkreditatsiya jarayonlarini soddalashtirish,
                            Xalqaro standartlarni to‘liq integratsiya qilish,
                            Shifokor va tibbiyot muassasalari uchun malaka oshirish tizimini kengaytirish va boshqalar.</p>
                    </div>
                    <div className='relative'>
                        <Image
                            src={NavBuilding}
                            width={1500}
                            alt='Building'
                            height={600}
                            className='w-[1500px] h-[600px] object-cover'>
                        </Image>
                        <div className="absolute bottom-0 left-0 w-full h-[350px] bg-gradient-to-t from-white/100 to-transparent"></div>
                    </div>
                </div>
            </div>
            <Servicec />
            <div className='container'>
                <h1 className='text-[#3D445E] text-[48px] font-[700] text-center'>Markaz tuzilmasi</h1>
                <p className='text-[rgba(1, 37, 72, 0.80)] pb-6 text-center text-[20px] font-[500]'>Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha xizmatlar bir joyda, qulay va samarali yechimlar bilan.</p>
                <Image src={Screenpage} alt='screenpage' width={1000} height={700} className='m-auto pb-12'></Image>
            </div>
            <DepartmentSection />
            <TeamCarousel />
            <HeroSection />
            <DirectionsSection />
        </div>
    )
}
