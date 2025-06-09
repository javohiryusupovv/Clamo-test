import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";
import { SiApple } from "react-icons/si";
import Huawie from "@/assets/icons/huawie.png";
import QR from "@/assets/icons/QR.png";

export default function InstallPage() {
  return (
    <section className="w-full flex max-md:flex-col justify-center items-center bg-[#0666e6] sm:rounded-[36px] container relative mb-16">
      <div className="">
        <Image
          src="/Imgs/iPhone15Pro.png"
          alt="iPhone img"
          width={376}
          height={379}
          className=" max-md:hidden"
          priority
        />
      </div>
      <div className="flex flex-col justify-center items-start flex-1 min-w-[320px] max-md:p-4">
        <h1 className="font-bold lg:text-[28px] text-[24px] text-white mb-2">
          Mobil ilovamizni yuklab oling
        </h1>
        <p className="font-medium text-[14px] opacity-80 leading-[130%] text-white mb-6">
          Xususiy klinikalar faoliyatidan norozi bo‘lsangiz, klinikaga
          o‘rnatilgan QR-kod orqali yoki 1369 qisqa raqami orqali murojaat
          qiling. Sizning fikringiz muhim!
        </p>
        <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-[16px] gap-y-[4px] items-center justify-center max-md:hidden">
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
        <div className="flex justify-between w-full md:hidden">
          <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-[16px] gap-y-[4px] items-center justify-center">
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
                <h2 className="text-[15px] font-bold text-white">
                  Google Play
                </h2>
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
                <p className="text-[10px] text-white uppercase">
                  Explore it on
                </p>
                <h2 className="text-[15px] font-bold text-white">AppGallery</h2>
              </div>
            </div>
          </div>
          <Image
            src={QR}
            alt="QR code"
            width={222}
            height={222}
            className="object-contain"
          />
        </div>
      </div>
      {/* QR kod */}
      <Image
        src={QR}
        alt="QR code"
        width={222}
        height={222}
        className="object-contain max-md:hidden"
      />
    </section>
  );
}
