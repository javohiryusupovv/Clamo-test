
export function getLocalizedValue(obj: Record<string, any>, key: string, locale: string): string {
  const localizedKey = `${key}_${locale}`;
  console.log(localizedKey);
  
  return obj[localizedKey] || obj[key] || "";
}
