export async function getCarousel() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/about/directions/`,
      {
        next: { revalidate: 3600 }
      }
    );

    if (!res.ok) throw new Error("Yangiliklarni olishda xatolik");

    return res.json();
  }
