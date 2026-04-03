export async function getNews() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/news/`, // ✅ / qo'shildi
    { next: { revalidate: 600 } } // ✅ 60 → 3600
  );

  if (!res.ok) throw new Error("Yangiliklarni olishda xatolik");
  return res.json();
}