import { Clock } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface NewsDetail {
  id: number;
  title: string;
  description: string;
  image: string;
  content: string;
  created_at: string;
}

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(
    `https://clamo-production.up.railway.app/api/news/news/${params.slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return notFound();

  const data: NewsDetail = await res.json();

  function createMarkup() {
    return { __html: data.content };
  }

  console.log(data);

  return (
    <div className="container mt-12">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-600 mb-4">{data.description}</p>
      <article className="flex gap-2 mb-6">
        <Clock />
        <p className="text-gray-600">{data.created_at.slice(0, 10)}</p>
      </article>
      <Image
        src={data.image}
        alt={data.title}
        width={300}
        height={100}
        className=" object-cover object-center w-full lg:h-[500px] sm:h-[350px] rounded-[20px] mb-10"
      />
      <div dangerouslySetInnerHTML={createMarkup()} className="mb-16" />
    </div>
  );
}
