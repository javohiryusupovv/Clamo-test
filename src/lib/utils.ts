import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getLocalizedValue(locale: string, obj: any, keyBase: string) {
  return obj?.[`${keyBase}_${locale}`] || obj?.[`${keyBase}_en`] || "";
}
