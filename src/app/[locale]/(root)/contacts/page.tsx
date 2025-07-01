import { useTranslations } from "next-intl";
import Map from "./_components/Map";
import SochealMedia from "./_components/Sochealmedia";
import { getLocalizedValue } from "@/lib/getLocalization";

interface Params {
  locale: string;
}

export async function generateMetadata({ params }: { params: Promise<{locale: string }>}) {
  const {locale} = await params
    const content = {
    title_uz: "Biz bilan bog‘laning — CLAMO",
    description_uz: "Savollaringiz bormi? CLAMO jamoasi bilan tez va oson bog‘laning. Sizga yordam berishga tayyormiz!",

    title_ru: "Свяжитесь с нами — CLAMO",
    description_ru: "Есть вопросы? Свяжитесь с командой CLAMO быстро и удобно. Мы всегда готовы помочь!",

    title_en: "Contact Us — CLAMO",
    description_en: "Have questions? Reach out to the CLAMO team quickly and easily. We’re here to help!",
  };

  return {
    title: getLocalizedValue(content, "title", locale),
    description: getLocalizedValue(content, "description", locale),
  };
}



export default function Contacts() {
  const t = useTranslations("ContactPageLayout");

  return (
    <div className="container">
      <div className="flex flex-col gap-[4px] md:mb-[40px] mb-[20px]">
        <h1 className="font-bold font-vk lg:text-5xl md:text-4xl text-3xl mt-3 text-[20px] text-[#3D445E] leading-[100%] ">
          {t("contact_title")}
        </h1>
        <p className="font-medium font-vk sm:text-base text-sm md:text-[20px] text-[#012548CC] leading-[140%]">
          {t("contact_subtitle")}
        </p>
      </div>
      {/* <span></span> */}
      <Map />
      <SochealMedia />
    </div>
  );
}
