import { ReyesterItem } from "../../app.types";

interface PaginatedReyesterResponse {
  results: ReyesterItem[];
  count: number; // umumiy elementlar soni
  next: string | null;
  previous: string | null;
}

export async function getReyestersFromAPI(page = 1): Promise<PaginatedReyesterResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/reyester/?page=${page}`,
    {
      next: { revalidate: 60 },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch reyesters");

  const data = await res.json();

  if (typeof window !== "undefined") {
    console.log(`API /reyester/?page=${page} response:`, data);
  }

  return {
    results: data.results || [],
    count: data.count || 0,
    next: data.next || null,
    previous: data.previous || null,
  };
}


export async function getReyesterTypes() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/reyester/types/`, {
    cache: "no-store", // yoki ISR qilsangiz: next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error("Turlarni olishda xatolik");
  const data = await res.json();
  return data.results; // Backend `results` ichida bo'lsa
}


