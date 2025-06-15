// components/CenterRegulations.tsx
import React from 'react';


const CenterRegulations: React.FC = () => {
    return (
        <div className="container mt-[100px]">
            {/* Header Section */}
            <div className="mb-8 text-start">
                <h1 className="text-[48px] max-md:text-[26px]  font-bold text-[#3D445E] mb-2">Markaz Nizomi va Ichki qoidalari</h1>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                    Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha xizmatlar bir joyda, qulay va samarali yechimlar bilan.
                </p>
            </div>

            {/* Main Content Section */}
            <div className="relative bg-white rounded-lg shadow-lg p-6 md:p-10 overflow-hidden">
                {/* Background Watermark (Anchor icon - you might need an actual SVG or image here) */}
                {/* For demonstration, I'll use a large, faded text character.
            In a real project, you'd use an SVG icon for better quality. */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-bold text-gray-200 opacity-20 z-0 select-none pointer-events-none">
                    ⎈
                </div>

                <div className="relative z-10"> {/* Ensure content is above the watermark */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Markaz nizomlari</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Markazimiz faoliyati O&apos;    zbekiston Respublikasi qonunlariga, sog&apos;liqni saqlash sohasidagi normativ-huquqiy hujjatlarga,
                        shuningdek, Markazning ichki nizomi va belgilangan vazifalariga muvofiq amalga oshiriladi.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Nizomga ko&apos;ra, Markaz quyidagi tamoyillar asosida ish yuritadi:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                        <li>Ochiqlik, shaffoflik va qonuniylik;</li>
                        <li>Tibbiy tashkilotlarga sifatli xizmat ko&apos;rsatish va metodik ko&apos;mak berish; Xalqaro tajribaga asoslangan akkreditatsiya va litsenziyalash standartlarini joriy etish;</li>
                        <li>Korrupsiyaga qarshi kurashish va manfaatlarni to&apos;qnashuviga yo&apos;l qo&apos;ymaslik;</li>
                        <li>Mutaxassislarning uzluksiz rivojlanishini qo&apos;llab-quvvatlash.</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Markazning barcha faoliyati belgilangan ustuvor yo&apos;nalishlar va yillik ish rejasiga muvofiq amalga oshiriladi.
                    </p>
                    <button className="w-[272px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium  leading-[130%] mt-[50px] text-[white]">
                        Ma&apos;lumotni yuklab olish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CenterRegulations;