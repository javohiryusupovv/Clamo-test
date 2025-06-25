import { useTranslations } from "next-intl";
import Map from "./_components/Map";
import SochealMedia from "./_components/Sochealmedia";

export default function Contacts() {
  const t = useTranslations("ContactPageLayout");

  return (
    <div className="container">
      <h1 className="font-bold font-vk lg:text-[48px] md:text-[44px] mt-3 text-[20px] text-[#3D445E]">
        {t("contact_title")}
      </h1>
      <p className="font-medium font-vk sm:text-[20px] text-[14px] text-[#012548CC] md:mb-[40px] mb-[20px]">
        {t("contact_subtitle")}
      </p>
      <Map />
      <SochealMedia />
    </div>
  );
}
