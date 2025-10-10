import { notFound } from "next/navigation";
import Backbtn from "../news/_components/Backbtn";
import StructuredData from "@/components/StructuredData";
import { StaticPageData } from "@/types/type";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/static-pages/1/`,
    { cache: "no-store" }
  );

  if (!res.ok) return { title: "CLAMO - Fight Against Corruption", description: "Fight Against Corruption page not found." };

  const data: StaticPageData = await res.json();

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
    { cache: "no-store" }
  );

  if (!res.ok) return notFound();

  const data: StaticPageData = await res.json();

  const breadcrumbItems = [
    { name: "Bosh sahifa", url: `https://clamo.uz/${locale}` },
    { name: "Korruptsiyaga qarshi kurash", url: `https://clamo.uz/${locale}/fight-against-corruption` }
  ];

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
        className="object-cover object-center w-full lg:h-[500px] sm:h-[350px] rounded-[20px] mb-10"
      />
      <div
        dangerouslySetInnerHTML={{ __html: data.content }}
        className="mb-16 font-vk text-base leading-[150%] text-gray-600"
      />
    </div>
  );
}
