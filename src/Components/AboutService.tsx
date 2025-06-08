import React from "react";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const services: ServiceCardProps[] = [
  {
    icon: "/Imgs/License.svg",
    title: "Litsenziyalash",
    description: "Markangizni tibbiyot muassasalariga litsenziya olishda yordam beradi. Hujjat tayyorlash, ariza topshirish",
    link: "#",
  },
  {
    icon: "/Imgs/Accreditation.svg",
    title: "Akkreditatsiyalash",
    description: "Tibbiyot tashkilotlarining xizmat sifatini baholaymiz va akkreditatsiya qilishni taminlaymiz",
    link: "#",
  },
  {
    icon: "/Imgs/Konsulting.svg",
    title: "Konsalting xizmati",
    description: "Klinikalar va shifoxonalar tashkil etish jarayonida huquqiy, metodik va texnik maslahatlar beramiz",
    link: "#",
  },
  {
    icon: "/imgs/Malaka.svg",
    title: "Malaka oshirish",
    description: "Shifokorlar, tibbiyot xodimlari va boshqalar uchun malaka oshirish kurslarini tashkil etamiz",
    link: "#",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F6F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-[48px] font-bold text-[#3D445E] mb-2">Markaz ko'rsatadigan xizmatlar</h2>
          <p className="text-gray-600 text-base">
            Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha xizmatlar bir joyda, qulay va samarali yechimlar bilan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between transition cursor-pointer">
              <div>
                <Image src={service.icon} alt={service.title} className="mb-4" width={40} height={40}></Image>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>

              <div className="mt-4 flex gap-3 justify-end items-center">
                <Link href={service.link} className="opacity-0 group-hover:opacity-100 text-sm text-[#23B3FC] font-normal transition-opacity duration-200">
                  Batafsil
                </Link>
                <div className="bg-blue-100 p-3 rounded-full group-hover:bg-[#23B3FC] transition-all duration-200">
                  <ArrowRight className="stroke-[2] text-[#23B3FC] w-5 h-5 group-hover:text-white group-hover:-rotate-45 transition-all duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
