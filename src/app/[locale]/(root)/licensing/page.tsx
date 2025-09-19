import { getReyestersFromAPI, getReyesterTypes } from "@/lib/getLicense";
import LicenseHero from "./_components/LicenseHero";
import ReyesterClient from "./_components/ReyesterClinet";
import { getLocalizedValue } from "@/lib/getLocalization";
import StructuredData from "@/components/StructuredData";





export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const content = {
    title_uz: "CLAMO ruxsatnoma olishning yangi standarti",
    description_uz: "Tashkilotingiz uchun zarur litsenziyani tez va ishonchli tarzda oling. Clamo sizning qonuniylikdagi ishonchli hamkoringiz.",

    title_ru: "Новый стандарт получения разрешений CLAMO",
    description_ru: "Получите необходимую лицензию для вашей организации быстро и надежно. Clamo — ваш надежный партнер в вопросах легализации.",

    title_en: "The New Standard for Getting a CLAMO Permit",
    description_en: "Obtain the required license for your organization quickly and reliably. Clamo is your trusted partner in legal compliance.",
  };

  const baseUrl = "https://clamo.uz";
  const currentUrl = `${baseUrl}/${locale}/licensing`;

  return {
    title: getLocalizedValue(content, "title", locale),
    description: getLocalizedValue(content, "description", locale),
    keywords: [
      "litsenziya",
      "ruxsatnoma",
      "litsenziyalash",
      "CLAMO",
      "лицензия",
      "разрешение",
      "лицензирование",
      "licensing",
      "permit",
      "license",
      "медицинская лицензия",
      "образовательная лицензия",
      "ta'lim litsenziyasi",
      "sog'liqni saqlash litsenziyasi"
    ],
    alternates: {
      canonical: currentUrl,
      languages: {
        'uz': `${baseUrl}/uz/licensing`,
        'ru': `${baseUrl}/ru/licensing`,
        'en': `${baseUrl}/en/licensing`,
      },
    },
    openGraph: {
      title: getLocalizedValue(content, "title", locale),
      description: getLocalizedValue(content, "description", locale),
      url: currentUrl,
      type: "website",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: getLocalizedValue(content, "title", locale),
        },
      ],
    },
  };
}


export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { results: firstPageData, count } = await getReyestersFromAPI(1);
  const types = await getReyesterTypes();

  const breadcrumbItems = [
    { name: "Bosh sahifa", url: `https://clamo.uz/${locale}` },
    { name: "Litsenziyalash", url: `https://clamo.uz/${locale}/licensing` }
  ];

  return (
    <div>
      <StructuredData 
        type="BreadcrumbList" 
        data={{ items: breadcrumbItems }} 
      />
      <StructuredData 
        type="Service" 
        data={{
          name: "Litsenziyalash xizmati",
          description: "Tashkilotlarni litsenziyalash va ruxsatnoma berish xizmatlari",
          serviceType: "Licensing Service"
        }} 
      />
      
      <LicenseHero />

      <section className="container mx-auto px-4 py-[80px]">
        <ReyesterClient initialData={firstPageData} initialCount={count} types={types} />
      </section>
    </div>
  );
}
