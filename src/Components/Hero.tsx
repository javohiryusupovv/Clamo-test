
import Image from "next/image";
import Down from "@/assets/icons/whiteDown.png";
import BlueDown from "@/assets/icons/blueDown.png";
import Doctors from "@/assets/images/doctors.png";
import Home from "@/assets/images/home.png";
import File from "@/assets/images/file.png";
import True from "@/assets/images/true.png";
import ImageClamo from "@/assets/images/ImageClamo.png";
import LearnMore from "./LearnMoreButton";

export default function Hero() {
  return (
    <div className=" overflow-x-hidden">
      <div>
        {/* Ko'k soya */}
        <div className="absolute -top-[-230px] left-[-200px] w-4/5 h-[280px] bg-[rgb(35,179,252)] opacity-25 blur-[120px] rounded-full z-0"></div>
        <section className="container grid lg:grid-cols-2 grid-cols-1 lg:gap-20 lg:pb-10 lg:relative">
          <div className="lg:mt-[163px] md:mt-[90px] mt-[50px]">
            <p className="uppercase text-[#3D445E] md:text-[14px] text-[12px] font-medium lg:w-[582px] pb-[11px] max-sm:w-[250px]">
              Sog&apos;liqni saqlash vazirligi qoshidagi {""}
              <span className="md:text-sm text-[10px] font-bold bg-[#23B3FC] text-white py-[3px] px-2 rounded-md">
                Tibbiyot tashkilotlarini
              </span>
            </p>
            <h1 className="lg:w-[582px] lg:text-[40px] sm:text-[32px] text-[25px] font-bold uppercase text-[#3D445E] md:pb-5 pb-3 leading-[110%]">
              litsenziyalash va akkreditatsiyalash markazi davlat muassasi
            </h1>
            <div className="bg-white border border-white lg:max-w-max max-lg:w-full mb-4 px-4 rounded-[17px]">
              <article className="flex items-center max-md:justify-between gap-3 pb-4 pt-4">
                <button className="lg:w-[183px] h-[40px] w-full flex items-center justify-center gap-[11.5px] bg-[#23B3FC] rounded-lg text-sm font-medium text-white leading-[130%]">
                  Xizmatlarimiz <Image src={Down} alt="down strelka" />
                </button>
                <button className="lg:w-[183px] h-[40px] w-full flex items-center justify-center gap-[11.5px] bg-[#23B3FC33] rounded-lg text-sm font-medium text-[#23B3FC] leading-[130%]">
                  Murojaat qilish <Image src={BlueDown} alt="down strelka" />
                </button>
              </article>
              <p className="font-medium text-[12px] pb-4 lg:w-[379px]">
                Biz bilan tibbiy xizmat endi yanada yaqin! ClAMO orqali eng
                yaxshi mutaxassislar bilan bog&apos;laning va sog&apos;lig&apos;ingizni nazorat qiling
              </p>
            </div>
          </div>

          <Image
            src={ImageClamo}
            alt="HeroImage"
            className=" lg:ml-40 lg:absolute -right-44 -top-12 -z-[1] max-sm:-mb-16 max-md:-mb-[78px] max-lg:mb-[-90px]"
          />
          {/* oq soya */}
          <div className="absolute lg:-bottom-20 md:-bottom-64 sm:-bottom-[120px] -bottom-[100px] max-lg:left-0  lg:-right-40 xl:w-2/3 lg:w-3/4 w-[100%] h-[270px] bg-gradient-to-t from-white/60 to-transparent" />

        </section>
      </div>


      {/* Shifokorlar */}
      <div className="w-full min-h-[620px] sm:rounded-[36px] bg-[#0653C9] overflow-hidden relative z-0 container lg:mb-[150px] md:mb-[80px] mb-[50px] flex flex-col lg:flex-row justify-between gap-16 p-3 shadow-2xl shadow-blue-900/30">
        <div className="lg:flex block gap-6 lg:gap-10 w-full justify-center items-center md:p-[28px] py-[20px]">
          <div className="relative flex-1 mb-[30px] lg:mb-0">
            <p className="font-medium text-sm uppercase text-white/60 pb-2">
              biz haqimizda
            </p>
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-[32px] leading-tight text-white pb-7">
              Tibbiyot sohasidagi xalqaro  hamkorlik va tajriba almashinuvi
            </h1>
            <LearnMore />
            <Image
              src={Doctors}
              alt="Doctors"
              className="object-cover pt-4 pl-4 sm:pl-[58px] max-w-[90%] sm:max-w-[70%]"
            />
            <div className="absolute top-[270px] -left-[38px] -z-10 sm:w-[550px] w-[350px] h-[200px] bg-[url('../assets/images/circleBlue.png')] bg-no-repeat bg-contain"></div>
            <div className="absolute bottom-0 right-10 w-full h-[180px] bg-gradient-to-t from-blue-700/100 to-transparent" />
            <p className="absolute z-10 sm:bottom-1 -bottom-2 left-6 right-6 text-xs sm:text-sm font-medium leading-relaxed text-white">
              CLAMO jahon standartlariga mos tibbiy xizmat ko&apos;rsatish maqsadida
              yetakchi xalqaro tibbiyot muassasalari va tashkilotlari bilan
              hamkorlik qiladi. <br className="hidden md:block" />
              Biz eng so&apos;nggi innovatsiyalar, ilg&apos;or texnologiyalar va tajriba
              almashinuviga tayanamiz.
            </p>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl text-white flex flex-col p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image src={Home} alt="HomeIcons" width={48} height={48} />
                <div className="pt-10">
                  <h1 className="xl:text-[48px] lg:text-[39px] text-[36px] font-bold">
                    10 300+
                  </h1>
                  <p className="text-sm font-medium">Litsenziya soni</p>
                </div>
              </div>
              <div className="w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl text-white flex flex-col p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image src={True} alt="HomeIcons" width={48} height={48} />
                <div className="pt-10">
                  <h1 className="xl:text-[48px] lg:text-[39px] text-[36px] font-bold">
                    125+
                  </h1>
                  <p className="text-sm font-medium">
                    Ko&apos;rsatilgan konsalting xizmati
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-2xl text-white flex flex-col md:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image src={File} alt="HomeIcons" width={48} height={48} />
                <div className="pt-10">
                  <h1 className="xl:text-[48px] lg:text-[39px] text-[36px] font-bold">
                    8 300+
                  </h1>
                  <p className="text-sm font-medium">
                    Tashkilot tomonidan berilgan litsenziyalar soni
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
