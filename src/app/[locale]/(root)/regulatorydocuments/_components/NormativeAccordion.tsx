import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from "next-intl";

export default function ExamplePage() {
  const t = useTranslations("RegulatorydocumentsPage");

  const accordionItems = [
    {
      id: "item-0",
      title: t("law1Title"),
      content: t("law1Content"),
      link: "https://license.gov.uz/?fbclid=IwY2xjawLPBgVleHRuA2FlbQIxMABicmlkETFhclNHbklCWE9SNkpRT0dPAR6KKSsO-xpOgn3n43FTPgaDLanJNaeKBgbKRtWIVmiKEZ0Mi2E4wEIVneMAzw_aem_ETUjVRtZzjnY4D68nA5VSQ",
      linkText: t("linkText2"),
    },
    {
      id: "item-1",
      title: t("law2Title"),
      content: t("law2Content"),
      link: "https://license.gov.uz/?fbclid=IwY2xjawLPBgVleHRuA2FlbQIxMABicmlkETFhclNHbklCWE9SNkpRT0dPAR6KKSsO-xpOgn3n43FTPgaDLanJNaeKBgbKRtWIVmiKEZ0Mi2E4wEIVneMAzw_aem_ETUjVRtZzjnY4D68nA5VSQ",
      linkText: t("linkText2"),
    },
    {
      id: "item-2",
      title: t("law3Title"),
      content: t("law3Content"),
      link: "https://license.gov.uz/?fbclid=IwY2xjawLPBgVleHRuA2FlbQIxMABicmlkETFhclNHbklCWE9SNkpRT0dPAR6KKSsO-xpOgn3n43FTPgaDLanJNaeKBgbKRtWIVmiKEZ0Mi2E4wEIVneMAzw_aem_ETUjVRtZzjnY4D68nA5VSQ",
      linkText: t("linkText2"),
    },
    // Qo‘shimcha itemlar qo‘shishingiz mumkin
  ];


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
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="flex flex-col gap-4"
        >
          {accordionItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-[#E3E8E9] lg:rounded-3xl rounded-xl hover:bg-[#0653C9]/10 hover:border-[#0653C9] transition-all duration-200 md:py-2 px-8"
            >
              <AccordionTrigger className="text-lg font-semibold text-[#3D445E]">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#3D445E]">
                {item.content}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 underline hover:text-blue-800 transition"
                >
                  {item.linkText}
                </a>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>


      </div>
    </div>
  );
}
