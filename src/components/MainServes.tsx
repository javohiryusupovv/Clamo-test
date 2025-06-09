import React from "react";
import Image from "next/image";
// import Link from "next/link";
// import { BsArrowRight } from "react-icons/bs";
// import { MainServiceCardProps, platformsMain } from "@/types/type";
import { FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import "@/style/linerMainserver.css";

// const services = [
//   {
//     icon: "/Imgs/License.svg",
//     title: "Litsenziyalash",
//     description:
//       "Markangizni tibbiyot muassasalariga litsenziya olishda yordam beradi. Hujjat tayyorlash, ariza topshirish",
//     link: "#",
//   },
//   {
//     icon: "/Imgs/Accreditation.svg",
//     title: "Akkreditatsiyalash",
//     description:
//       "Tibbiyot tashkilotlarining xizmat sifatini baholaymiz va akkreditatsiya qilishni taminlaymiz",
//     link: "#",
//   },
//   {
//     icon: "/Imgs/Konsulting.svg",
//     title: "Konsalting xizmati",
//     description:
//       "Klinikalar va shifoxonalar tashkil etish jarayonida huquqiy, metodik va texnik maslahatlar beramiz",
//     link: "#",
//   },
//   {
//     icon: "/Imgs/Malaka.svg",
//     title: "Malaka oshirish",
//     description:
//       "Shifokorlar, tibbiyot xodimlari va boshqalar uchun malaka oshirish kurslarini tashkil etamiz",
//     link: "#",
//   },
// ];

const platforms = [
  {
    id: 1,
    title: "Litsenziyalash va akkreditatsiyalash platformasiga o‘ting",
    description: "Soha bo‘yicha har qanday savolingizga javob beramiz",
    buttonText: "Batafsil tanishish",
    buttonLink: "#",
    phoneTitle: "Qisqa raqam",
    phoneNumber: "1369",
    image: "/Imgs/Mockup.png",
  },
];

export default function MainService() {
  return (
    <section className="pt-16 bg-[#F6F9FC]">
      {/* Ramziddindan component qilib olaman */}
      {/* <div className="container">
        <div className="mb-12">
          <h2 className="text-[48px] font-bold text-[#3D445E] mb-2">
            Markaz ko&apos;rsatadigan xizmatlar
          </h2>
          <p className="text-gray-600 text-base">
            Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha
            xizmatlar bir joyda, qulay va samarali yechimlar bilan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-[80px]">
          {services.map((service: MainServiceCardProps, id: number) => (
            <div
              key={id}
              className="group bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between transition cursor-pointer"
            >
              <div>
                <Image
                  src={service.icon}
                  alt={service.title}
                  className="mb-4"
                  width={40}
                  height={40}
                ></Image>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
              <div className="mt-4 flex gap-3 justify-end items-center group">
                <Link
                  href={service.link}
                  className="opacity-0 group-hover:opacity-100 text-sm text-[#23B3FC] font-normal transition-opacity duration-300 delay-100"
                >
                  Batafsil
                </Link>
                <div className="bg-blue-100 p-3 rounded-full transition-all duration-300 ease-in-out group-hover:bg-[#23B3FC]">
                  <BsArrowRight className=" text-[#23B3FC] w-5 h-5 transition-all duration-300 ease-in-out group-hover:text-white group-hover:rotate-[-45deg] " />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}


      <section className="container">
        {platforms.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between rounded-[36px] text-white bg-[#0653C9] mb-52"
          >
            <div className="w-full md:w-1/2 flex justify-start  backgroundLiner py-10 relative">
              <Image
                src={item.image}
                alt="Clamo Logo on Laptop"
                width={273}
                height={273}
                className="w-[473px] h-[273px] rounded-2x "
                // className="object-contain rounded-bl-[20px] scale-[1.3] absolute -top-[108.8px] left-[70px]"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4">
              <h1 className="font-bold text-[40px] leading-[110%]">
                {item.title}
              </h1>
              <p className="font-medium text-base text-white/60 pb-7">
                {item.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-[28px] items-start sm:items-center">
                <button className="w-[185px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%] cursor-pointer">
                  {item.buttonText}
                  <FaChevronRight/>
                </button>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#23B3FC] rounded-lg">
                    <FaPhoneAlt size={19.83} />
                  </div>
                  <div>
                    <p className="text-sm font-normal">{item.phoneTitle}</p>
                    <p className="text-2xl font-bold">{item.phoneNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
