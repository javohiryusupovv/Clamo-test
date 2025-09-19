"use client";

import { useTranslations } from "next-intl";
import { z } from "zod";

export function getFormSchema(zod: ReturnType<typeof useTranslations>) {
  return z.object({
    names: z
      .string()
      .min(
        3,
        zod("name_subtitle") || "Ism kamida 3 ta belgidan iborat bo'lishi kerak"
      )
      .refine((val) => /^[a-zA-Z\s'"`''-]+$/.test(val), {
        message: zod("name_invalid"),
      })
      .transform((val) => val.replace(/['"`'']/g, "")),

    tashkilot: z
      .string()
      .min(
        2,
        zod("organization_min") ||
          "Tashkilot nomi kamida 2 ta belgidan iborat bo'lishi kerak"
      ),

    phoneNumber: z
      .string()
      .transform((val) => val.replace(/\s/g, ""))
      .refine((val) => /^\d{9}$/.test(val), {
        message:
          zod("phone_invalid") ||
          "Telefon raqami aniq 9 ta raqamdan iborat bo'lishi kerak",
      }),

    recaptcha: z
      .string()
      .min(1, zod("recaptcha_required") || "reCAPTCHA tekshiruvini bajaring"),
  });
}
