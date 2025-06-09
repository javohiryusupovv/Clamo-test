import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import Huawie from "@/assets/icons/huawie.png";
import QR from "@/assets/icons/QR.png";

export default function InstallPage() {
  return (
    <section className="w-full flex justify-center items-center bg-[#0666e6] rounded-[36px] container relative mb-16">
      <div>
        <Image
          src="/Imgs/iPhone15Pro.png"
          alt="iPhone img"
          width={448}
          height={379}
          className=""
          priority
        />
      </div>
      <div className="flex flex-col justify-center items-start  flex-1 min-w-[320px]">
        <h1 className="font-bold text-[28px] text-white mb-2">
          Mobil ilovamizni yuklab oling
        </h1>
        <p className="font-medium text-[14px] opacity-80 leading-[130%] text-white mb-6">
          Xususiy klinikalar faoliyatidan norozi bo‘lsangiz, klinikaga o‘rnatilgan QR-kod orqali yoki 1369 qisqa raqami orqali murojaat qiling. Sizning fikringiz muhim!
        </p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 border border-white rounded-lg w-[150px] h-[44px] bg-white/10 px-3">
            <SiApple className="w-6 h-6 text-white" />
            <div>
              <p className="text-[10px] text-white">Download on the</p>
              <h2 className="text-[15px] font-bold text-white">App Store</h2>
            </div>
          </div>
          <div className="flex items-center gap-2 border border-white rounded-lg w-[150px] h-[44px] bg-white/10 px-3">
            <FaGooglePlay className="w-6 h-6 text-white" />
            <div>
              <p className="text-[10px] text-white uppercase">Get it on</p>
              <h2 className="text-[15px] font-bold text-white">Google Play</h2>
            </div>
          </div>
          <div className="flex items-center gap-2 border border-white rounded-lg w-[150px] h-[44px] bg-white/10 px-3">
            <Image
              src={Huawie}
              alt="huawie logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <div>
              <p className="text-[10px] text-white uppercase">Explore it on</p>
              <h2 className="text-[15px] font-bold text-white">AppGallery</h2>
            </div>
          </div>
        </div>
      </div>
      {/* QR kod */}
        <Image
          src={QR}
          alt="QR code"
          width={222}
          height={222}
          className="object-contain"
        />
    </section>
  );
}
