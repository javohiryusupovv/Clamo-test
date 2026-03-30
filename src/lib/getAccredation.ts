export async function getAccreditation() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/accreditation/`, {
      next: { revalidate: 3600 }
    });
  
  
  
    if (!res.ok) throw new Error("Yangiliklarni olishda xatolik");
  
    return res.json();
  }

  interface AccreditationResponse {
    id: number;
    page_name: string;
    page_link: string;
  }
  
  export async function getAccreditationBySlug(slug: string) {
    const data = await getAccreditation();
    return data.find((item: AccreditationResponse) => item.page_link === slug);
  }