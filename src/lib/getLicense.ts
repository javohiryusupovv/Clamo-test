import { ReyesterItem } from "../../app.types";

export async function getReyestersFromAPI(): Promise<ReyesterItem[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/reyester/`, {
    next: { revalidate: 60 },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch reyesters");

  const data = await res.json();
  if (typeof window !== "undefined") {
    console.log("API /api/reyester/ response:", data);
  }

  return data.results; // Backend `results` ichida bo'lsa
}

export async function getReyesterTypes() {
  const res = await fetch("https://clamo-production.up.railway.app/api/reyester/types/", {
    cache: "no-store", // yoki ISR qilsangiz: next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error("Turlarni olishda xatolik");
  const data = await res.json();
  return data.results; // Backend `results` ichida bo'lsa
}
