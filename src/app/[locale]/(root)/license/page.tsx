import { getReyestersFromAPI, getReyesterTypes } from "@/lib/getLicense";
import LicenseHero from "./_components/LicenseHero";
import ReyesterClient from "./_components/ReyesterClinet";
import { getLocalizedValue } from "@/lib/getLocalization";


interface Params {
  locale: string;
}


export async function generateMetadata({ params }: { params: Promise<{locale: string }>}) {
  const {locale} = await params
  const content = {
    title_uz: "CLAMO ruxsatnoma olishning yangi standarti",
    description_uz: "Tashkilotingiz uchun zarur litsenziyani tez va ishonchli tarzda oling. Clamo sizning qonuniylikdagi ishonchli hamkoringiz.",

    title_ru: "Новый стандарт получения разрешений CLAMO",
    description_ru: "Получите необходимую лицензию для вашей организации быстро и надежно. Clamo — ваш надежный партнер в вопросах легализации.",

    title_en: "The New Standard for Getting a CLAMO Permit",
    description_en: "Obtain the required license for your organization quickly and reliably. Clamo is your trusted partner in legal compliance.",
  };

  return {
    title: getLocalizedValue(content, "title", locale),
    description: getLocalizedValue(content, "description", locale),
  };
}


export default async function Page() {
  const reyesters = await getReyestersFromAPI();
  const types = await getReyesterTypes();

  return (
    <div>
      <LicenseHero />

      <section className="container mx-auto px-4 py-[80px]">
        <ReyesterClient reyesters={reyesters} types={types} />
      </section>
    </div>
  );
}
