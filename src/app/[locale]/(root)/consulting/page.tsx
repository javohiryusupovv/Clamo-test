import Firstpage from "./_components/firstpage";
import Secondpage from "./_components/secondpage";
import { getCarousel } from "@/lib/getCarousel"; // yoki sizga mos yo'l

import { getLocalizedValue } from "@/lib/utils";

interface Params {
  locale: string;
}

export async function generateMetadata({ params }: { params: Params }) {
  const content = {
    title_uz: "Konsultatsiya xizmati — endi yanada oson",
    description_uz: "Mutaxassislarimizdan tez, qulay va ishonchli maslahat oling. Clamo bilan konsultatsiya xizmati endi har qachongidan ham oson.",

    title_ru: "Консультационные услуги — теперь ещё проще",
    description_ru: "Получите быструю и надёжную консультацию от наших специалистов. С Clamo консультироваться стало проще, чем когда-либо.",

    title_en: "Consultation service — now even easier",
    description_en: "Get fast, reliable advice from our experts. With Clamo, consultations are easier than ever before.",
  };

  return {
    title: getLocalizedValue(params.locale, content, "title"),
    description: getLocalizedValue(params.locale, content, "description"),
  };
}


export default async function Page() {
  const carouselData = await getCarousel();

  return (
    <div>
      <Firstpage />
      <Secondpage carousel={carouselData} />
    </div>
  );
}
