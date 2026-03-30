// ✅ getStatistics va getStatisticsByRegion ga try/catch qo'shing
export async function getStatistics() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}/dashboard/statistics/`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error("getStatistics xatosi:", error);
    // ✅ Xato bo'lsa default qiymat qaytaradi — crash bo'lmaydi
    return {
      clinics_count: 0,
      employees_count: 0,
      licenses_count: 0,
      accreditations_count: 0,
    };
  }
}

export async function getStatisticsByRegion() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}/dashboard/statistics-by-region/`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error("getStatisticsByRegion xatosi:", error);
    return []; // ✅ bo'sh array
  }
}