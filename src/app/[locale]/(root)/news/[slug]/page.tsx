import { Clock } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

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

  return (
    <div className="container mt-12">
      <h1 className="text-3xl font-bold mb-4 font-vk">{title}</h1>
      <p className="text-gray-600 mb-4 font-vk">{description}</p>
      <article className="flex gap-2 mb-6">
        <Clock />
        <p className="text-gray-600">{data.created_at.slice(0, 10)}</p>
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
        className="mb-16 font-vk"
      />
    </div>
  );
}
