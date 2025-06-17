export async function getTeamCarousel() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/about/team/`, {
      next: { revalidate: 60 },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Jamoa maʼlumotlarini olishda xatolik");

    return res.json();
  }
