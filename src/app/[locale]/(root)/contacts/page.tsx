import { useTranslations } from "next-intl";
import Map from "./_components/Map";
import SochealMedia from "./_components/Sochealmedia";

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
