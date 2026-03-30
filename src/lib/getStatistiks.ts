// ✅ Ikkalasi ham to'g'ri
export async function getStatistics() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}/dashboard/statistics/`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Statistikani olishda xatolik");
  return res.json();
}

export async function getStatisticsByRegion() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}/dashboard/statistics-by-region/`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Viloyatlar statistikasini olishda xatolik");
  return res.json();
}