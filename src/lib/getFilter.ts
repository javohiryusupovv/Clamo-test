import { FilterItem } from "../../app.types";

export async function getFilterFromAPI(): Promise<FilterItem[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/reyester/types/`,
    { next: { revalidate: 3600 } } // ✅ 60 → 3600 (tez-tez o'zgarmaydi)
  );

  if (!res.ok) throw new Error("Failed to fetch types");

  const data = await res.json();
  // ✅ bo'sh if (typeof window !== "undefined") olib tashlandi
  return data.results;
}