export const getSharhCount = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SHARH_URL_RATING}`, {
    next: { revalidate: 1000 },
  });

  if (!res.ok) throw new Error("Sharhlarni olishda xatolik");
  const data = await res.json();
  return data;
};
