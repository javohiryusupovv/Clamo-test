// lib/getFaqs.ts
import { FAQItem } from "../../app.types";

export async function getFaqs(): Promise<FAQItem[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/faqs/`);
    if (!res.ok) throw new Error("Failed to fetch FAQs");
    return res.json();
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return [];
  }
}
