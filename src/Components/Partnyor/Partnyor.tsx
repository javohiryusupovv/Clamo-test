import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import myTaxi from "../../assets/logo/mytaxi.svg";
import suvtaminot from "../../assets/logo/uzsuvozi 1.svg";
import asakabank from "../../assets/logo/horizontal.svg";
import yoshlarishlar from "../../assets/logo/yoshlar.svg";
import universitetyuridik from "../../assets/logo/yuridik.png";

export default function Partnyor() {
  const logos = [
    asakabank,
    suvtaminot,
    universitetyuridik,
    myTaxi,
    yoshlarishlar,
    universitetyuridik,
    myTaxi,
    suvtaminot,
    universitetyuridik,
  ];

  return (
    <div className="md:py-16 pt-9 mb-9 bg-[#F6F9FC]">
      <article className="container text-center mb-10 px-4 sm:px-0">
        <h3 className="text-2xl sm:text-4xl font-bold mb-2 text-[#012548]">
          Hamkorlarimiz
        </h3>
        <p className="text-base sm:text-lg text-[#012548] font-medium">
          Tibbiyot sifati va jarayonlarini yaxshilash uchun kerakli barcha
          xizmatlar bir joyda, qulay va samarali yechimlar bilan.
        </p>
      </article>

      <div className="w-full space-y-6 overflow-hidden">
        {/* 1-qator: o‘ngga qarab harakat */}
        <Marquee direction="right" speed={30} gradient={true} pauseOnHover>
          {logos.map((img, i) => (
            <Link
              href={"#"}
              key={i}
              className="mx-2 sm:mx-[18px] bg-[#eaecef] border-white border-[3px] rounded-xl flex items-center justify-center 
                                       h-[80px] sm:h-[110px] w-[160px] sm:w-[220px] p-6 sm:p-8"
            >
              <Image
                src={img}
                alt={`Logo ${i}`}
                className="object-contain h-full w-auto"
              />
            </Link>
          ))}
        </Marquee>

        {/* 2-qator: chapga qarab harakat */}
        <Marquee direction="left" speed={30} gradient={true} pauseOnHover>
          {logos
            .slice() // clone array to avoid reversing original
            .reverse()
            .map((img, i) => (
              <Link
                href={"#"}
                key={i}
                className="mx-2 sm:mx-[18px] bg-[#eaecef] border-white border-[3px] rounded-xl flex items-center justify-center 
                                           h-[80px] sm:h-[110px] w-[160px] sm:w-[220px] p-6 sm:p-8"
              >
                <Image
                  src={img}
                  alt={`Logo ${i}`}
                  className="object-contain h-full w-auto"
                />
              </Link>
            ))}
        </Marquee>
      </div>
    </div>
  );
}
