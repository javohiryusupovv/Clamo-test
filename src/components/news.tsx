import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import WhiteDown from "@/assets/icons/whiteDown.png";
import Link from "next/link";

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title:
        "O’zbekistonda yangi zamonaviy tibbiy markazlar tashkil etildi — CLAMO bilan ruxsatnoma va litsenziyalarni tez va oson oling!",
      description:
        "O’zbekistonda yangi zamonaviy tibbiy markazlar tashkil etildi...",
      image: "/Imgs/Shahar.png",
      date: "10.08.2023",
      link: "/news/1",
    },
    {
      id: 2,
      title: "CLAMO bilan yangi imkoniyatlarni kashf eting!",
      description: "CLAMO bilan yangi imkoniyatlarni kashf eting...",
      image: "",
      date: "10.08.2023",
      link: "/news/2",
    },
    {
      id: 3,
      title: "CLAMO — Sifatli tibbiy xizmatlar rivojiga hissa qo‘shing!",
      description: "",
      image: "",
      date: "10.08.2023",
      link: "/news/3",
    },
    {
      id: 4,
      title: "CLAMO bilan yangi imkoniyatlar eshigi ochildi!",
      description: "",
      image: "",
      date: "10.08.2023",
      link: "/news/4",
    },
  ];

  if (news.length === 0) return <div>Loading...</div>;

  return (
    <div className="container pb-10 px-4">
      <h1 className="font-bold text-[18px] sm:text-[28px] md:text-[36px] lg:text-[44px] text-[#3D445E] leading-[120%]">
        Yangiliklar
      </h1>
      <p className="font-medium text-[12px] sm:text-[14px] md:text-[16px] text-[#012548CC] pb-[16px] sm:pb-[20px] md:pb-[28px] leading-[150%]">
        Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha
        xizmatlar bir joyda, qulay va samarali yechimlar bilan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative rounded-[16px] sm:rounded-[24px] overflow-hidden">
          <Image
            src={news[0].image}
            alt="City image"
            className="w-full h-full object-cover"
            width={300}
            height={200}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/50"></div>
          <p className="absolute top-4 left-4 text-[#EDF0EF] font-normal text-[10px] sm:text-[14px] z-10">
            {news[0].date}
          </p>
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h2 className="text-[14px] sm:text-[18px] md:text-[22px] font-bold leading-[130%] pb-2">
              {news[0].title}
            </h2>
            <Link
              href={news[0].link}
              className="hover:underline text-white font-medium text-[12px] sm:text-[14px] flex items-center gap-3"
            >
              Batafsil
              <div className="border border-[#74807B] py-2 px-2 rounded-full relative">
                <FaArrowRightLong className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {news.slice(1, 2).map((item) => (
            <div key={item.id} className="bg-[#f5f8fa] rounded-[16px] p-4">
              <p className="text-[10px] sm:text-[12px] md:text-[14px] pb-[48px]">
                {item.date}
              </p>
              <h3 className="font-bold text-[13px] sm:text-[16px] md:text-[18px] leading-[130%] pb-[24px]">
                {item.title}
              </h3>
              <Link
                href={item.link}
                className="hover:underline text-[#74807B] font-medium text-[12px] sm:text-[14px] flex items-center gap-3"
              >
                Batafsil
                <div className="border border-[#74807B] py-2 px-2 rounded-full relative">
                  <FaArrowRightLong className="w-4 h-4" />
                </div>
              </Link>
            </div>
          ))}
          <div className="flex flex-col sm:flex-row gap-4">
            {news.slice(2, 4).map((item) => (
              <div key={item.id} className="bg-[#f5f8fa] rounded-[16px] p-4 w-full">
                <p className="text-[10px] sm:text-[12px] md:text-[14px] pb-[48px]">
                  {item.date}
                </p>
                <h3 className="font-bold text-[12px] md:text-[15px] lg:text-[18px] leading-[130%] pb-3">
                  {item.title}
                </h3>
                <Link
                  href={item.link}
                  className="hover:underline text-[#74807B] font-medium text-[12px] sm:text-[14px] flex items-center gap-3"
                >
                  Batafsil
                  <div className="border border-[#74807B] py-2 px-2 rounded-full relative">
                    <FaArrowRightLong className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex md:justify-end justify-center pt-6">
        <button className="w-full max-w-[200px] h-[35px] sm:w-[250px] sm:h-[40px] flex items-center justify-center gap-3 bg-[#23B3FC] rounded-lg text-xs sm:text-sm md:text-base font-medium text-white">
          Batafsil tanishish
          <Image src={WhiteDown} alt="down strelka" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
