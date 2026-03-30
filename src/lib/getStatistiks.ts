export async function getStatistics() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}/dashboard/statistics/`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("getStatistics xatosi:", error);
    return null;
  }
}

export async function getStatisticsByRegion() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL_DEV}/dashboard/statistics-by-region/`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("getStatisticsByRegion xatosi:", error);
    return null;
  }
}