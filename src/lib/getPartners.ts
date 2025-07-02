export async function getPartners() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/home/partners/`, {
      next: { revalidate: 60 },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Partnyorlar olishda xatolik");

    return res.json();
  }
