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