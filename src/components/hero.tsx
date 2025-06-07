import Image from "next/image";
import Down from "@/assets/icons/whiteDown.png";
import BlueDown from "@/assets/icons/blueDown.png";
import LearnMore from "./learnMore";
import Doctors from "@/assets/images/doctors.png";
import Home from "@/assets/images/home.png";
import File from "@/assets/images/file.png";
import True from "@/assets/images/true.png";

export default function Hero() {
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        {/* Ko‘k soya */}
        <div className="absolute -top-[-230px]  left-[-200px] w-[820px] h-[280px] bg-[#23B3FC] opacity-25 blur-[120px] rounded-full z-0"></div>
        <section className="relative z-10 container mx-auto px-4 pb-10">
          <div className="mt-[163px] mb-[161px]">
            <p className="font-medium text-sm uppercase text-[#3D445E] pb-2">
              Sog‘liqni saqlash vazirligi qoshidagi{" "}
              <span className="text-sm font-bold bg-[#23B3FC] text-white py-[3px] px-2 rounded-md">
                Tibbiyot tashkilotlarini
              </span>
            </p>
            <h1 className="text-[40px] font-bold uppercase text-[#3D445E] pb-5 leading-[110%]">
              litsenziyalash va <br /> akkreditatsiyalash markazi <br /> davlat
              muassasi
            </h1>
            <div className="bg-white border border-white max-w-max mb-4 px-4 rounded-[17px]">
              <article className="flex items-center gap-3 pb-4 pt-4">
                <button className="w-[183px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%]">
                  Xizmatlarimiz <Image src={Down} alt="down strelka" />
                </button>
                <button className="w-[183px] h-[40px] flex items-center justify-center gap-[11.5px] bg-[#23B3FC33] rounded-lg text-sm font-medium text-[#23B3FC] leading-[130%]">
                  Murojaat qilish <Image src={BlueDown} alt="down strelka" />
                </button>
              </article>
              <p className="font-medium text-xs pb-4">
                Biz bilan tibbiy xizmat endi yanada yaqin! ClAMO orqali eng
                yaxshi <br />
                mutaxassislar bilan bog‘laning va sog‘lig‘ingizni nazorat qiling
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Shifokorlar */}
      <div className=" w-full h-[620px] rounded-[36px] bg-[#0653C9] -z-[2] container mb-[150px] relative flex justify-between gap-16 p-12">
        <div>
          <p className="font-medium text-sm uppercase text-[#FFFFFF] opacity-[60%] pb-2">
            biz haqimizda
          </p>
          <h1 className="font-bold text-[32px] leading-[110%] text-[#FFFFFF] pb-7">
            Tibbiyot sohasidagi xalqaro <br /> hamkorlik va tajriba <br />{" "}
            almashinuvi
          </h1>
          <LearnMore />
          <Image
            src={Doctors}
            alt="Doctors"
            className="object-cover pt-[5px] pl-[58px] absolute z-10"
          />
          <div>
            <div className="bg-[url('../assets/images/circleBlue.png')] bg-no-repeat bg-contain w-[550px] h-[200px] absolute -rotate-[20deg] top-[215px] left-[17px] -z-[1]"></div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-[283px] bg-gradient-to-br from-blue-400 to-blue-600  rounded-2xl text-white flex flex-col p-6">
              <Image src={Home} alt="HomeIcons" width={48} height={48} />
              <div className="pt-12">
                <h1 className="text-[48px] font-bold">10 300+</h1>
                <p className="text-sm font-medium">Litsenziya soni</p>
              </div>
            </div>

            <div className="w-[283px] bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl text-white flex flex-col p-6">
              <Image src={True} alt="HomeIcons" width={48} height={48} />
              <div className="pt-12">
                <h1 className="text-[48px] font-bold">125+</h1>
                <p className="text-sm font-medium">
                  Ko&apos;rsatilgan konsalting xizmati
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-2xl text-white flex flex-col space-x-4 items-start md:col-span-2 bg-no-repeat bg-cover">
              <Image src={File} alt="HomeIcons" width={48} height={48} />
              <div className="pt-12">
                <h1 className="text-[48px] font-bold">8 300+</h1>
                <p className="text-sm font-medium">
                  Tashkilot tomonidan berilgan litsenziyalar soni
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className=" absolute z-10 bottom-8 text-sm font-medium leading-[130%] text-[#FFFFFF]">
          CLAMO jahon standartlariga mos tibbiy xizmat ko‘rsatish maqsadida
          yetakchi xalqaro tibbiyot muassasalari va tashkilotlari bilan
          hamkorlik qiladi. Biz eng so‘nggi <br /> innovatsiyalar, ilg‘or
          texnologiyalar va tajriba almashinuviga tayanamiz.
        </p>
      </div>
    </div>
  );
}
