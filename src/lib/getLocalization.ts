export function getLocalizedValue( data: Record<string, any>,key: string, lang: string, fallback: string = "uz"): string {
    return (
        data[`${key}_${lang}`] ||
        data[`${key}_${fallback}`] ||
        data[key] || ""
    );
}
