"use client"
import { FaGooglePlay } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import "../../styles/InstalPage.css";
import { useEffect } from "react";

export default function InstallPage() {

  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos");
      AOS.init({ duration: 1000 });
    };

    if (typeof window !== "undefined") {
      loadAOS();
    }
  }, []);

  return (
    <section className="w-full px-4">
      <div className="container mx-auto bg-[#0653C9] flex flex-wrap lg:flex-nowrap justify-end items-center max-sm:items-start w-full min-h-[304px] max-sm:h-[700px] max-xxs:h-[670px] rounded-[36px] max-sm:rounded-2xl p-4 lg:p-8 relative   ">

        {/* Phone Image */}
        <div className="absolute bottom-0 left-[-40px] lg:left-[-60px] z-10 max-w-full sm:max-w-[200px] lg:max-w-none overflow-hidden">
        
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 z-20 mt-6 lg:mt-0">
          <h6 className="text-[20px] sm:text-[24px] font-bold text-white mb-2">
            Mobil ilovamizni yuklab oling
          </h6>
          <p className="text-sm text-white opacity-60 leading-relaxed mb-4">
            Xususiy klinikalar faoliyatidan norozi bo‘lsangiz, klinikaga o‘rnatilgan QR-kod orqali yoki 1369 qisqa raqami orqali murojaat qiling. Sizning fikringiz muhim!
          </p>
          <article className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* App Store Button */}
            <button className="flex items-center px-4 py-2 bg-white/20 rounded-lg gap-2">
              <SiApple className="w-[30px] h-[30px] text-white" />
              <div className="text-left">
                <p className="text-xs text-white">Download on the</p>
                <p className="text-base text-white font-medium">App Store</p>
              </div>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center px-4 py-2 bg-white/20 rounded-lg gap-2">
              <FaGooglePlay className="w-[30px] h-[30px] text-white" />
              <div className="text-left">
                <p className="text-xs text-white uppercase">Get it on</p>
                <p className="text-base text-white font-medium">Google Play</p>
              </div>
            </button>

            {/* Huawei AppGallery */}
            <button className="flex items-center px-4 py-2 bg-white/20 rounded-lg gap-2">
              
              <div className="text-left">
                <p className="text-xs text-white uppercase">Explore it on</p>
                <p className="text-base text-white font-medium">AppGallery</p>
              </div>
            </button>
          </article>
        </div>

        {/* QR Code */}
        <div className="w-full lg:w-auto mt-6 lg:mt-0 z-20 flex justify-center lg:justify-end">
        
        </div>
      </div>
    </section>
  );
}
