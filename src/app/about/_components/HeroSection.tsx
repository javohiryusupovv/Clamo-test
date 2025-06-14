
import "../../../styles/hero.css"


import { ChevronRight } from 'lucide-react';


export default function Hero() {
  return (
    <div className="bg-[#F6F9FC] h-[480px] pt-[50px]">
      <div className="container w-full h-[310px] relative">
        {/* Shifokorlar */}
        <div className="flex justify-between items-center w-full md:h-[310px] h-[450px] rounded-[36px] bg-[#0653C9] overflow-hidden circleCover">
          <div className="h-1/4">

          </div>
          <div className="w-11/12 md:w-7/12">
           
            <article className="relative top-0 left-0 z-[22]">
              <h3 className=" text-[24px] sm:text-[30px] md:text-[40px] font-bold text-white leading-[50px] md:mr-0 mr-[70px] md:mt-0 mt-[90px] sm:mt-[160px]">Tibbiyot Sohasidagi Xalqaro Hamkorlik va Tajriba Almashinuvi</h3>
              <p className="text-[16px] opacity-60 text-white mb-7">Soha bo&apos;yicha har qanday savolingizga javob beramiz</p>
              <button className="px-10 py-2 cursor-pointer rounded-md flex items-center gap-1 text-white bg-[#23B3FC] hover:bg-[#30B9FF]">Batafsil tanishish <ChevronRight className="stroke-white" /></button>
            </article>
          </div>
        </div>
        <div className="hidden xl:flex absolute top-[270px] w-[1008px] h-[130px] mb-[40px] items-center justify-center z-[20] bg-white rounded-lg left-1/2 transform -translate-x-1/2">
          <p className="w-[950px]">CLAMO jahon standartlariga mos tibbiy xizmat ko‘rsatish maqsadida yetakchi xalqaro tibbiyot muassasalari va tashkilotlari bilan hamkorlik qiladi. Biz eng so‘nggi innovatsiyalar, ilg‘or texnologiyalar va tajriba almashinuviga tayanamiz.</p>
        </div>
      </div>
    </div>
  );
}
