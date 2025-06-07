import Image from "next/image";
import Doctors from "@/assets/Doctors.png";

export default function Hero() {
  return (
    <div>
      {/* Shifokorlar */}
      <div className=" w-full h-[620px] rounded-[36px] bg-[#0653C9] -z-[2] container mb-[150px] relative flex flex-col justify-between gap-16 p-12">
        <div>
          <div>
            <p className="font-medium text-sm uppercase text-[#FFFFFF] opacity-[60%] pb-2">
              biz haqimizda
            </p>
            <h1 className="font-bold text-[32px] leading-[110%] text-[#FFFFFF] pb-7">
              Tibbiyot sohasidagi xalqaro <br /> hamkorlik va tajriba <br />{" "}
              almashinuvi
            </h1>
          </div>
          <div>
            <Image
              src={Doctors}
              width={400}
              height={400}
              alt="Doctors"
              className="object-cover pt-[5px] pl-[58px] absolute z-10"
            />
          </div>
          <div className="">
            <div className="bg-[url('@/assets/circleBlue.png')] bg-no-repeat bg-contain w-[550px] h-[200px] absolute -rotate-[20deg] top-[215px] left-[17px] -z-[1]"></div>
          </div>
        </div>
        <div className="bg-white">
          <p className=" absolute z-10 bottom-8 text-sm font-medium leading-[130%] text-[#FFFFFF]">CLAMO jahon standartlariga mos tibbiy xizmat ko‘rsatish maqsadida yetakchi xalqaro tibbiyot muassasalari va tashkilotlari bilan hamkorlik qiladi. Biz eng so‘nggi <br /> innovatsiyalar, ilg‘or texnologiyalar va tajriba almashinuviga tayanamiz.</p>
        </div>
      </div>
    </div>
  );
}
