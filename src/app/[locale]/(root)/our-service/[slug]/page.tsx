import { getAccreditationBySlug } from "@/lib/getAccredation";

export default async function AccreditationDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;

  const page = await getAccreditationBySlug(slug);

  if (!page) {
    return <div>Page topilmadi</div>;
  }

  return (
    <div className="container pb-7">
      {/* HTML contentni chiqarish */}
      <div
        dangerouslySetInnerHTML={{
          __html: page[`content_${locale}`] || page.content,
        }}
      />
    </div>
  );
}
