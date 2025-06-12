import Image from "next/image";
import "../styles/linerMainserver.css";
import { commentOpinion } from "@/types/type";
import Marquee from "react-fast-marquee";
export default function Izohlar() {
  const opinion = [
    {
      id: 1,
      icons: "/Imgs/sharh-logo.png",
      subtitle: "Fikr-mulohazalar",
      description:
        "O‘z fikr-mulohazalaringizni platformada qoldirishingiz mumkin",
    },
  ];

  const cardComment = [
    {
      id: 1,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 2,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 3,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 4,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 5,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 6,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 7,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
    {
      id: 8,
      img: "/Imgs/Umid.png",
      name: "Умид Гафуров",
      title: "Отзыв о",
      badge: "CLAMO",
      staricon: "/Imgs/Stars.png",
      time: "15 минут назад",
      comment:
        "Litsenziya olish jarayoni kutilganidan ham tez va shaffof bo‘ldi. Hamma bosqichlar raqamlashtirilgani ishimizni ancha yengillashtirdi.",
    },
  ];

  return (
    <div className="md:py-[64px] py-[30px]">
      <div className="container">
        {opinion.map((item: commentOpinion, id: number) => (
          <div key={id}>
            <Image
              src={item.icons}
              alt="Sharh Icons"
              width={124}
              height={32}
              className=" pb-1"
            />
            <h1 className="font-bold lg:text-[48px] sm:text-[44px] text-[20px] text-[#3D445E]">
              {item.subtitle}
            </h1>
            <p className="font-medium sm:text-[20px] text-[16px] text-[#012548CC] pb-[32.5]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      
        <div className="overflow-hidden w-full mb-[24px]">
          <div className="flex gap-4">
            <Marquee direction="right" speed={30} gradient={true} pauseOnHover>
              {cardComment.map((item, id) => (
                <div
                  key={id}
                  className="max-w-[343px] mx-4 border border-[#E3E8E9] rounded-[16px] p-[16px] bg-white"
                >
                  {/* Kartaning ichki qismi */}
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.img}
                      alt="Person people"
                      width={44}
                      height={44}
                      className="rounded-full object-contain border border-[#C6CFD733]"
                    />
                    <div>
                      <h2>{item.name}</h2>
                      <p className="text-xs font-normal text-[#8E9BA8]">
                        {item.title}{" "}
                        <span className="text-[#4489F7] font-medium">
                          {item.badge}
                        </span>
                      </p>
                    </div>
                  </div>
                  <hr className="my-[10px] text-[#F5F6F7]" />
                  <div className="flex items-center gap-1 ">
                    <Image
                      src={item.staricon}
                      alt="staricons"
                      width={88}
                      height={16}
                      className="object-contain"
                    />
                    <p className=" font-normal text-[14px] text-[#8E9BA8]">
                      {item.time}
                    </p>
                  </div>
                  <p className="font-normal text-[14px]">{item.comment}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="overflow-hidden w-full mb-[24px]">
          <div className="flex gap-4">
            <Marquee direction="left" speed={30} gradient={true} pauseOnHover>
              {cardComment
                .slice()
                .reverse()
                .map((item, id) => (
                  <div
                    key={id}
                    className="max-w-[343px] mx-4 border border-[#E3E8E9] rounded-[16px] sm:p-[16px] p-[8px] bg-white"
                  >
                    {/* Kartaning ichki qismi */}
                    <div className="flex items-center gap-2">
                      <Image
                        src={item.img}
                        alt="Person people"
                        width={44}
                        height={44}
                        className="rounded-full max-sm:w-[35px] max-sm:h-[35px] object-contain border border-[#C6CFD733]"
                      />
                      <div>
                        <h2 className=" font-semibold text-[16px]">{item.name}</h2>
                        <p className="text-xs font-normal text-[#8E9BA8]">
                          {item.title}{" "}
                          <span className="text-[#4489F7] font-medium">
                            {item.badge}
                          </span>
                        </p>
                      </div>
                    </div>
                    <hr className="my-[10px] text-[#F5F6F7]" />
                    <div className="flex items-center gap-1 ">
                      <Image
                        src={item.staricon}
                        alt="staricons"
                        width={88}
                        height={16}
                        className="object-contain"
                      />
                      <p className=" font-normal text-[14px] text-[#8E9BA8]">
                        {item.time}
                      </p>
                    </div>
                    <p className="font-normal text-[14px]">{item.comment}</p>
                  </div>
                ))}
            </Marquee>
          </div>
        </div>
      
    </div>
  );
}
