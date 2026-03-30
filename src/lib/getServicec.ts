export async function getServicec() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/services/
`,
    {
      next: { revalidate: 3600 }
    }
  );

  if (!res.ok) throw new Error("Yangiliklarni olishda xatolik");

  return res.json();
}
