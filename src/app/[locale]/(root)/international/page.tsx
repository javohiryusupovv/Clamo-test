import { getPartners } from "@/lib/getPartners";
import Partnyor from "../components/partnyor/Partnyor";
import International from "./_components/International";
import InternationalProject from "./_components/InternationalProject";


import { getLocalizedValue } from "@/lib/utils";

interface Params {
  locale: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  const content = {
    title_uz: "Clamo — bilan xalqaro hamkorliklar",
    description_uz: "CLAMO xalqaro darajada o'z o'rniga ega bo'lgan tashkilotlar bilan hamkorlik qilish orqali, sifat va natijani taqdim qiladi.",

    title_ru: "Clamo — международное сотрудничество",
    description_ru: "CLAMO обеспечивает качество и результативность за счёт сотрудничества с организациями, занимающими прочное положение на международной арене.",

    title_en: "Clamo — International Partnerships",
    description_en: "Through collaboration with internationally established organizations, CLAMO delivers quality and results.",
  };

  return {
    title: getLocalizedValue(params.locale, content, "title"),
    description: getLocalizedValue(params.locale, content, "description"),
  };
}



export default async function InternationalMain() {
  const part = await getPartners();

  return (
    <div>
      <International />

      <Partnyor partners={part} />

      <InternationalProject />
    </div>
  );
}
