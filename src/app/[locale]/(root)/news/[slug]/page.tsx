import { Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import Backbtn from "../_components/Backbtn";
import StructuredData from "@/components/StructuredData";

interface NewsDetail {
  id: number;
  title: string;
  title_en: string;
  title_ru: string;
  title_uz: string;
  description: string;
  description_en: string;
  description_ru: string;
  description_uz: string;
  content: string;
  content_en: string;
  content_ru: string;
  content_uz: string;
  image: string;
  created_at: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/news/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return { title: "CLAMO News", description: "News not found." };

  const data: NewsDetail = await res.json();

  const title = data[`title_${locale}` as keyof NewsDetail] || data.title;
  const description =
    data[`description_${locale}` as keyof NewsDetail] || data.description;

  const baseUrl = "https://clamo.uz";
  const currentUrl = `${baseUrl}/${locale}/news/${slug}`;

  return {
    title,
    description,
    keywords: [
      "CLAMO",
      "yangiliklar",
      "news",
      "новости",
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
        'uz': `${baseUrl}/uz/news/${slug}`,
        'ru': `${baseUrl}/ru/news/${slug}`,
        'en': `${baseUrl}/en/news/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      type: "article",
      publishedTime: data.created_at,
      images: [data.image],
      siteName: "CLAMO",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [data.image],
    },
  };
}


export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/news/${slug}`,
    { cache: "no-store" }
  );
  

  if (!res.ok) return notFound();

  const data: NewsDetail = await res.json();

  const title = data[`title_${locale}` as keyof NewsDetail] || data.title;
  const description =
    data[`description_${locale}` as keyof NewsDetail] || data.description;
  const content = String(data[`content_${locale}` as keyof NewsDetail] || data.content);

  const createdAt = new Date(data.created_at);
  const day = String(createdAt.getDate()).padStart(2, "0");
  const month = String(createdAt.getMonth() + 1).padStart(2, "0");
  const year = createdAt.getFullYear();
  const date = `${day}-${month}-${year}`;

  const time = createdAt.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const breadcrumbItems = [
    { name: "Bosh sahifa", url: `https://clamo.uz/${locale}` },
    { name: "Yangiliklar", url: `https://clamo.uz/${locale}/news` },
    { name: title, url: `https://clamo.uz/${locale}/news/${slug}` }
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
          title: title,
          description: description,
          image: data.image,
          publishedAt: data.created_at,
          modifiedAt: data.created_at
        }} 
      />
      
      <Backbtn />
      <h1 className="lg:text-3xl md:text-2xl text-base text-[#3D445E] leading-[120%] font-black mb-4">
        {title}
      </h1>
      <p className="text-gray-600 mb-4 font-vk">{description}</p>
      <article className="flex items-center gap-2 mb-6">
        <Clock3 className="w-4 h-4" />
        <h6 className="text-[#697583]">{date}</h6>
        <p className="w-1 h-1 bg-[#697583] rounded-full"></p>{" "}
        <span className="text-[#697583]">{time}</span>
      </article>
      <img
        src={data.image}
        alt={data.title}
        width={300}
        height={100}
        className="object-cover object-center w-full lg:h-[500px] sm:h-[350px] rounded-[20px] mb-10"
      />
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="mb-16 font-vk text-base leading-[150%] text-gray-600"
      />
    </div>
  );
}
