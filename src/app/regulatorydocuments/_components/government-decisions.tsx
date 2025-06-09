import React from 'react';
import WhiteDown from "@/assets/icons/whiteDown.png";
import Image from 'next/image';

const GovernmentDecisions: React.FC = () => {
    return (
        <div className="container font-sans bg-[white]">
            <div className="mb-8">
                <h1 className="text-[48px] sm:text-3xl md:text-4xl font-bold text-[#3D445E] mb-3 text-start">Hukumat qarorlari</h1>
                <p className="text-[20px] sm:text-base font-[500] text-[#012548CC]/80% md:max-w-full max-w-2xl text-start">
                    Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha xizmatlar bir joyda, qulay va samarali yechimlar bilan.
                </p>
            </div>
            <div className='text-[#3D445E] pb-8'>
                <div className="flex gap-2">
                    {/* Decision 1: President's Decision */}
                    <div className="w-[480px] bg-[#F6F9FC] p-6 rounded-xl">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold text-[#3D445E] mb-3">O&apos;zbekiston Respublikasi Prezidentining qarori</h2>
                        </div>
                        <button className="w-[272px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium  leading-[130%] mt-[50px] text-[white]">
                            Ma&apos;lumotni yuklab olish <Image src={WhiteDown} alt="down strelka" />
                        </button>
                    </div>
                    <div className="group w-[684px] hover:bg-[#4382E3] bg-[#F6F9FC] p-6 rounded-xl hover:cursor-pointer duration-300 transition-transform">
                        <p className='group-hover:text-white group-hover:cursor-pointer text-[22px] w-[601px] h-[141px] font-[500]'>O&apos;zbekiston Respublikasi Prezidentining 2023-yil 20-iyundagi PQ-197 sonli qarorining 7-bo&apos;lim b bandiga ko&apos;ra sog&apos;liqni saqlash tizimida litsenziyalash va akkreditatsiyalash davlat muassasasi tashkil etildi.

                        </p>
                    </div>
                </div>
                <div className='flex gap-6 mt-6'>
                    <div className="group w-[684px] hover:bg-[#4382E3] bg-[#F6F9FC] p-6 rounded-xl duration-300 transition-transform hover:cursor-pointer">
                        <p className="group-hover:text-white text-[22px] w-[601px] h-[141px] font-[500]">
                            O&apos;zbekiston Respublikasi Vazirlar Mahkamasining 2024-yil 24-iyuldagi 444-sonli qaroriga binoan O&apos;zbekiston Respublikasi Sog&apos;liqni Saqlash vazirligi huzuridagi tibbiyot tashkilotlarini litsenziyalash va akkreditatsiyalash markazi faoliyati yo&apos;lga qo&apos;yildi.
                        </p>
                    </div>
                    <div className="w-[480px] bg-[#F6F9FC] p-6 rounded-xl">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">O&apos;bekiston Respublikasi Vazirlar Mahkamasining qarori</h2>
                        </div>
                        <button className="w-[272px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%] mt-[50px]">
                            Ma&apos;lumotni yuklab olish <Image src={WhiteDown} alt="down strelka" />
                        </button>
                    </div>
                </div>
                <div className='gap-6 flex mt-6'>
                    <div className="w-[480px] bg-[#F6F9FC] rounded-xl p-6">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">O&apos;zbekiston Respublikasi Sog&apos;liqni Saqlash Vaziring buyrug&apos;i</h2>
                        </div>
                        <button className="w-[272px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%] mt-[50px]">
                            Ma&apos;lumotni yuklab olish <Image src={WhiteDown} alt="down strelka" />
                        </button>
                    </div>
                    <div className='group w-[684px] h-[220px] hover:bg-[#4382E3] bg-[#F6F9FC] p-6 rounded-lg hover:cursor-pointer'>
                        <p className="group-hover:text-white group-hover:cursor-pointer text-[22px] w-[601px] h-[141px] font-[500]">
                            O&apos;zbekiston Respublikasi Sog&apos;liqni Saqlash vazirining 2024-yil 04-oktabrdagi 311-sonli qaroriga binoan O&apos;zbekiston Respublikasi Sog&apos;liqni Saqlash vazirligi huzuridagi tibbiyot tashkilotlarini litsenziyalash va akkreditatsiyalash markazini faoliyatini tashkil etish chora-tadbirilari to&apos;g&apos;risidagi...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GovernmentDecisions;