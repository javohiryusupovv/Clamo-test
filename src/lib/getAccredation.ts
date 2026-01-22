export async function getAccreditation() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/accreditation/`, {
      next: { revalidate: 60 },
      cache: "no-store",
    });
  
  
  
    if (!res.ok) throw new Error("Yangiliklarni olishda xatolik");
  
    return res.json();
  }
  
  export async function getAccreditationBySlug(slug: string) {
    const data = await getAccreditation();
    return data.find((item: any) => item.page_link === slug);
  }