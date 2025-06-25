import { useTranslations } from "next-intl";
import Image from "next/image";
import { getHamkorlar } from "../../../../../../constants/page";

export default function InternationalProject() {
  const t = useTranslations("InternationalPage");
  const hamkorlar = getHamkorlar(t);

  return (
    <div className="w-full py-16 mb-32">
      <div className="container">
        <h3 className="text-center font-bold text-3xl font-vk md:text-5xl text-[#3D445E] mb-[40px] md:mb-[71px]">
          {t("hamkorlarr")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 max-md:pt-8 md:gap-10">
          {hamkorlar.map((item, index) => (
            <div
              key={index}
              className="relative z-[5] flex flex-col items-center bg-[#0653C9] px-6 pb-6 pt-16 rounded-[24px] md:rounded-[36px] cardhamkorlar"
            >
              <article className="absolute top-6 z-[5] inline-flex p-5 rounded-full bg-white -translate-y-16">
                <Image
                  className="w-10 h-10 max-md:w-8 max-md:h-8"
                  width={200}
                  height={100}
                  src={item.icon}
                  alt={`Icon ${item.title}`}
                />
              </article>
              <h6 className="text-xl md:text-2xl font-bold font-vk text-white mb-3 md:mb-4">
                {item.title}
              </h6>
              <p className="text-[14px] font-vk font-normal text-white text-center">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
