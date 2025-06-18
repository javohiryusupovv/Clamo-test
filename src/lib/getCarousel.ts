export async function getCarousel() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/about/directions/`,
      {
        next: { revalidate: 60 },
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Yangiliklarni olishda xatolik");

    return res.json();
  }
