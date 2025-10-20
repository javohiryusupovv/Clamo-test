import {APISharhItem, CommentSharh} from "app.types";

export async function getReviews(): Promise<CommentSharh[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SHARH_URL}`,
    {
      next: { revalidate: 60 },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Sharhlarni olishda xatolik yuz berdi");
  }


  const data = await res.json();

    return data.results.map((item: APISharhItem) => ({
        ...item,
        author_name: item.user
            ? `${item.user.first_name} ${item.user.last_name}`
            : "Foydalanuvchi",
        comment: item.comment,
        created_at: item.created_at,
        rating: item.rating,
        short_url: item.short_url,
        og_image_url: item.og_image_url,
    }));
}
