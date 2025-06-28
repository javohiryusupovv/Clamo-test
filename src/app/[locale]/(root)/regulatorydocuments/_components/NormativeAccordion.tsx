import AccordionItem from "./AccordionItem";
import { useTranslations } from "next-intl";

export default function ExamplePage() {
  const t = useTranslations("RegulatorydocumentsPage");

  return (
    <div className="bg-white z-50 w-full">
      <div className="space-y-4 md:py-[96px] pt-[70px] bg-white container">
        <div className="lg:mb-11 sm:mb-4 flex flex-col gap-[4px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[100%] text-[#3D445E] font-vk text-start">
            {t("pageTitle")}
          </h2>
          <p className="text-[#012548CC] md:mb-8 font-vk font-medium md:text-[20px] sm:text-base text-sm">
            {t("pageDescription")}
          </p>
        </div>
        <AccordionItem
          title={t("law1Title")}
          content={t("law1Content")}
          link="https://lex.uz/docs/-5511879"
        />
        <AccordionItem title={t("law2Title")} content={t("law2Content")} />
        <AccordionItem title={t("law3Title")} content={t("law3Content")} />
      </div>
    </div>
  );
}
