export async function getCompany() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/company/`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Kompaniya ma'lumotlarini olishda xatolik");

  return res.json();
}
