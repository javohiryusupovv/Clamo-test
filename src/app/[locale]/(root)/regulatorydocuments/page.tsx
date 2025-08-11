
import "../../../../styles/documents.css";
// import NormativeAccordion from "./_components/NormativeAccordion";
import GovernmentDecisionsPage from "./_components/government-decisions";
import CenterRegulations from "./_components/CenterRegulations";
import { getLocalizedValue } from "@/lib/getLocalization";
import DocumentsHero from "./_components/DocumentsHero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = {
    title_uz: "Tibbiyotdagi asosiy meʼyoriy hujjatlar",
    description_uz:
      "Tashkilotingiz uchun zarur litsenziyani tez va ishonchli tarzda oling. Clamo sizning qonuniylikdagi ishonchli hamkoringiz.",

    title_ru: "Основные нормативные документы в медицине",
    description_ru:
      "Получите необходимую лицензию для вашей организации быстро и надежно. Clamo — ваш надежный партнер в вопросах легализации.",

    title_en: "Key Regulatory Documents in Medicine",
    description_en:
      "Obtain the required license for your organization quickly and reliably. Clamo is your trusted partner in legal compliance.",
  };

  return {
    title: getLocalizedValue(content, "title", locale),
    description: getLocalizedValue(content, "description", locale),
  };
}

export default function NormativeDocuments() {
  return (
    <div className="bg-white w-full">
      <DocumentsHero/>
      {/* <NormativeAccordion /> */}
      <GovernmentDecisionsPage />
      <CenterRegulations />
    </div>
  );
}
