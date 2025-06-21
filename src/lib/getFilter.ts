import { FilterItem } from '../../app.types';

export async function getFilterFromAPI(): Promise<FilterItem[]> {
const res = await fetch(`https://clamo-production.up.railway.app/uz/api/reyester/types/`, {
    next: { revalidate: 60 },
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch types');

  const data = await res.json();
  if (typeof window !== 'undefined') {
    // Debug log for browser
    console.log('API /api/reyester/types/ response:', data);
}
  // Return all types from the API for the select
  return data.results;
}
