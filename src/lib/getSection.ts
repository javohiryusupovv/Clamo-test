export async function getSection() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/about/agent-sections/`,
      {
        next: { revalidate: 3600 }
      }
    );
    if (!res.ok) throw new Error("Ma'lumotni olishda xatolik");
    return res.json();
  }
