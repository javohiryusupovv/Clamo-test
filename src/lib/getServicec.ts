export async function getServices() { // ✅ typo tuzatildi: getServicec → getServices
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/services/`, // ✅ \n olib tashlandi
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) throw new Error("Yangiliklarni olishda xatolik");
  return res.json();
}
