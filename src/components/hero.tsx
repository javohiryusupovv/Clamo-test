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
      <div className="w-full min-h-[620px] rounded-[36px] bg-[#0653C9] relative z-0 container mb-[150px] flex flex-col lg:flex-row justify-between gap-16 p-3 shadow-2xl shadow-blue-900/30">
        <div className="lg:flex block gap-6 lg:gap-10 w-full justify-center items-center">
          {/* Chap tomondagi matn va rasm */}
          <div className="relative flex-1 mb-[30px] lg:mb-0">
            <p className="font-medium text-sm uppercase text-white/60 pb-2 pl-6">biz haqimizda</p>
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-[32px] leading-tight text-white pb-7 pl-6">
              Tibbiyot sohasidagi xalqaro <br /> hamkorlik va tajriba <br /> almashinuvi
            </h1>
            <LearnMore />
            <Image
              src={Doctors}
              alt="Doctors"
              className="object-cover pt-4 pl-4 sm:pl-[58px] max-w-[90%] sm:max-w-[70%]"
            />


            {/* Background circle */}
            <div className="absolute top-[270px] left-[1px] -z-10 w-[550px] h-[200px] bg-[url('../assets/images/circleBlue.png')] bg-no-repeat bg-contain"></div>
            <div className="absolute bottom-0 left-0 w-full h-[80px] sm:h-[200px] md:h-[250px] bg-gradient-to-t from-blue-700/100 to-transparent" />
            <p className="absolute z-10 bottom-1 left-6 right-6 text-xs sm:text-sm font-medium leading-relaxed text-white">
              CLAMO jahon standartlariga mos tibbiy xizmat ko‘rsatish maqsadida yetakchi xalqaro tibbiyot muassasalari va tashkilotlari bilan hamkorlik qiladi. <br className="hidden md:block" />
              Biz eng so‘nggi innovatsiyalar, ilg‘or texnologiyalar va tajriba almashinuviga tayanamiz.
            </p>
          </div>

          {/* O'ng tomondagi statistik kartalar */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl text-white flex flex-col p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image src={Home} alt="HomeIcons" width={48} height={48} />
                <div className="pt-10">
                  <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold">10 300+</h1>
                  <p className="text-sm font-medium">Litsenziya soni</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl text-white flex flex-col p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image src={True} alt="HomeIcons" width={48} height={48} />
                <div className="pt-10">
                  <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold">125+</h1>
                  <p className="text-sm font-medium">Ko&apos;rsatilgan konsalting xizmati</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-2xl text-white flex flex-col md:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image src={File} alt="HomeIcons" width={48} height={48} />
                <div className="pt-10">
                  <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold">8 300+</h1>
                  <p className="text-sm font-medium">Tashkilot tomonidan berilgan litsenziyalar soni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
