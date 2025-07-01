import { Clock3 } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Backbtn from "../_components/Backbtn";

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
    `https://clamo-production.up.railway.app/api/news/news/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return { title: "Clamo News", description: "News not found." };

  const data: NewsDetail = await res.json();

  const title = data[`title_${locale}` as keyof NewsDetail] || data.title;
  const description =
    data[`description_${locale}` as keyof NewsDetail] || data.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [data.image],
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
    `https://clamo-production.up.railway.app/api/news/news/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return notFound();

  const data: NewsDetail = await res.json();

  const title = data[`title_${locale}` as keyof NewsDetail] || data.title;
  const description =
    data[`description_${locale}` as keyof NewsDetail] || data.description;
  const content = data[`content_${locale}` as keyof NewsDetail] || data.content;

  const createdAt = new Date(data.created_at);
  const day = String(createdAt.getDate()).padStart(2, "0");
  const month = String(createdAt.getMonth() + 1).padStart(2, "0");
  const year = createdAt.getFullYear();
  const date = `${day}-${month}-${year}`;

  const time = createdAt.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="container lg:mt-12">
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
      <Image
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
