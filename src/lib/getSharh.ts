export async function getReviews() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/reviews/reviews/`,
      {
        next: { revalidate: 60 },
        cache: "no-store",
      }
    );
  
    if (!res.ok) {
      throw new Error("Sharhlarni olishda xatolik yuz berdi");
    }
  
    return res.json();
  }
  