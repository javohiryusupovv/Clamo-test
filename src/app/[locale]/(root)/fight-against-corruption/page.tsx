import { notFound } from "next/navigation";
import Backbtn from "../news/_components/Backbtn";
import StructuredData from "@/components/StructuredData";
import SectionNavigation from "./_components/SectionNavigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/static-pages/1/`,
    { 
      cache: "no-store",
      headers: {
        'Accept-Language': locale
      }
    }
  );

  if (!res.ok) return { title: "CLAMO - Fight Against Corruption", description: "Fight Against Corruption page not found." };

  const data = await res.json();

  const baseUrl = "https://clamo.uz";
  const currentUrl = `${baseUrl}/${locale}/fight-against-corruption`;

  return {
    title: data.title,
    description: data.title,
    keywords: [
      "CLAMO",
      "fight against corruption",
      "korruptsiyaga qarshi kurash",
      "борьба с коррупцией",
      "litsenziya",
      "akkreditatsiya",
      "лицензия",
      "аккредитация",
      "licensing",
      "accreditation"
    ],
    alternates: {
      canonical: currentUrl,
      languages: {
        'uz': `${baseUrl}/uz/fight-against-corruption`,
        'ru': `${baseUrl}/ru/fight-against-corruption`,
        'en': `${baseUrl}/en/fight-against-corruption`,
      },
    },
    openGraph: {
      title: data.title,
      description: data.title,
      url: currentUrl,
      type: "article",
      images: [data.photo],
      siteName: "CLAMO",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.title,
      images: [data.photo],
    },
  };
}

export default async function FightAgainstCorruptionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/static-pages/1/`,
    { 
      cache: "no-store",
      headers: {
        'Accept-Language': locale
      }
    }
  );

  if (!res.ok) return notFound();

  const data = await res.json();

  // Breadcrumb translations
  const breadcrumbTranslations = {
    uz: {
      home: "Bosh sahifa",
      current: "Korruptsiyaga qarshi kurash"
    },
    ru: {
      home: "Главная страница",
      current: "Борьба с коррупцией"
    },
    en: {
      home: "Home",
      current: "Fight Against Corruption"
    }
  };

  const breadcrumbText = breadcrumbTranslations[locale as keyof typeof breadcrumbTranslations] || breadcrumbTranslations.uz;

  const breadcrumbItems = [
    { name: breadcrumbText.home, url: `https://clamo.uz/${locale}` },
    { name: breadcrumbText.current, url: `https://clamo.uz/${locale}/fight-against-corruption` }
  ];

  // 6 ta bob - 3 tilda
  const sectionsData = {
    uz: [
      { id: "bob-1", title: "1-Bob: Umumiy qoidalar" },
      { id: "bob-2", title: "2-Bob: Korruptsiya turlari" },
      { id: "bob-3", title: "3-Bob: Nazorat mexanizmlari" },
      { id: "bob-4", title: "4-Bob: Javobgarlik choralari" },
      { id: "bob-5", title: "5-Bob: Profilaktika ishlari" },
      { id: "bob-6", title: "6-Bob: Yakuniy qoidalar" },
    ],
    ru: [
      { id: "bob-1", title: "Глава 1: Общие положения" },
      { id: "bob-2", title: "Глава 2: Виды коррупции" },
      { id: "bob-3", title: "Глава 3: Механизмы контроля" },
      { id: "bob-4", title: "Глава 4: Меры ответственности" },
      { id: "bob-5", title: "Глава 5: Профилактические работы" },
      { id: "bob-6", title: "Глава 6: Заключительные положения" },
    ],
    en: [
      { id: "bob-1", title: "Chapter 1: General Provisions" },
      { id: "bob-2", title: "Chapter 2: Types of Corruption" },
      { id: "bob-3", title: "Chapter 3: Control Mechanisms" },
      { id: "bob-4", title: "Chapter 4: Accountability Measures" },
      { id: "bob-5", title: "Chapter 5: Preventive Activities" },
      { id: "bob-6", title: "Chapter 6: Final Provisions" },
    ],
  };
  
  const sections = sectionsData[locale as keyof typeof sectionsData] || sectionsData.uz;

  return (
    <div className="container lg:mt-12">
      <StructuredData 
        type="BreadcrumbList" 
        data={{ items: breadcrumbItems }} 
      />
      <StructuredData 
        type="Article" 
        data={{
          title: data.title,
          description: data.title,
          image: data.photo,
        }} 
      />
      
      <Backbtn href={`/${locale}`} />
      
      <h1 className="lg:text-3xl md:text-2xl text-base text-[#3D445E] leading-[120%] font-black mb-4">
        {data.title}
      </h1>
      
      <img
        src={data.photo}
        alt={data.title}
        width={300}
        height={100}
        className="object-cover object-center w-full lg:h-[500px] sm:h-[350px] rounded-[20px] mb-6 lg:mb-10"
      />

      {/* Mobile Sticky Navigation */}
      <div className="lg:hidden -mx-4 sm:mx-0">
        <SectionNavigation sections={sections} />
      </div>

      <div className="flex gap-8 mb-16 mt-6 lg:mt-0">
        {/* Desktop Sticky Navigation */}
        <aside className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-24">
            <SectionNavigation sections={sections} />
          </div>
        </aside>

        {/* Content with scroll */}
        <main className="flex-1 min-w-0">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-12 scroll-mt-24 lg:scroll-mt-24"
            >
              <h2 className="text-xl lg:text-2xl font-bold text-[#3D445E] mb-4 lg:mb-6">
                {section.title}
              </h2>
              
              <div className="prose prose-gray max-w-none">
                <div
                  dangerouslySetInnerHTML={{ __html: data.content }}
                  className="font-vk text-sm lg:text-base leading-[150%] text-gray-600"
                />
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}