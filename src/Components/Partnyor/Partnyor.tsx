"use client";

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

// import myTaxi from "../../assets/logo/mytaxi.svg";
// import suvtaminot from "../../assets/logo/uzsuvozi 1.svg";
// import asakabank from "../../assets/logo/horizontal.svg";
// import yoshlarishlar from "../../assets/logo/yoshlar.svg";
// import universitetyuridik from "../../assets/logo/yuridik.png";
import { useEffect, useState } from "react";

export default function Partnyor() {
  type Partner = {
    id: number;
    image: string;
    title: string;
  };

  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/partners/`
        );
        const data = await res.json();
        setPartners(data || []);
      } catch (error) {
        setPartners([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPartners();
  }, []);

  if (loading) return <div>Loading...</div>;

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
          {partners.map((img, i) => (
            <Link
              href={"#"}
              key={i}
              className="mx-2 sm:mx-[18px] bg-[#eaecef] border-white border-[3px] rounded-xl flex items-center justify-center  h-[80px] sm:h-[110px] w-[160px] sm:w-[220px] p-6 sm:p-8"
            >
              <Image
                src={img.image}
                alt={`Logo ${i}`}
                className="object-contain h-full w-auto"
                width={57}
                height={57}
              />
            </Link>
          ))}
        </Marquee>

        {/* 2-qator: chapga qarab harakat */}
        <Marquee direction="left" speed={30} gradient={true} pauseOnHover>
          {partners
            .slice()
            .reverse()
            .map((img, i) => (
              <Link
                href={"#"}
                key={i}
                className="mx-2 sm:mx-[18px] bg-[#eaecef] border-white border-[3px] rounded-xl flex items-center justify-center h-[80px] sm:h-[110px] w-[160px] sm:w-[220px] p-6 sm:p-8"
              >
                <Image
                  src={img.image}
                  alt={img.title}
                  className="object-contain h-full w-auto"
                  width={57}
                  height={57}
                />
              </Link>
            ))}
        </Marquee>
      </div>
    </div>
  );
}
