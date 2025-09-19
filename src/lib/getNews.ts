export async function getNews(p0: number, p1: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/news/news`, {
      next: { revalidate: 60 },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Yangiliklarni olishda xatolik");

    return res.json();
  }
