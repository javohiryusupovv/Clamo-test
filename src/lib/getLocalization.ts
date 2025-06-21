export function getLocalizedValue( data: Record<string, string>,key: string, lang: string, fallback: string = "uz"): string {
    return (
        data[`${key}_${lang}`] ||
        data[`${key}_${fallback}`] ||
        data[key] || ""
    );
}


export function pickStringProps<T extends object>(obj: T): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      result[key] = obj[key] as string;
    }
  }
  return result;
}