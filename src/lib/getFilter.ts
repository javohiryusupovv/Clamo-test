import { FilterItem } from "../../app.types";

export async function getFilterFromAPI(): Promise<FilterItem[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/reyester/types/`,
    {
      next: { revalidate: 60 }
    }
  );

  if (!res.ok) throw new Error("Failed to fetch types");

  const data = await res.json();
  if (typeof window !== "undefined") {
  }
  return data.results;
}
