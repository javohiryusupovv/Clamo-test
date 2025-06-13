import { z } from "zod";

const formSchema = z.object({
  names: z
    .string()
    .min(3, "Ism-familiya kamida 3 ta belgidan iborat bo‘lishi kerak")
    .refine((val) => /^[a-zA-Z\s\"']+$/.test(val), {
      message: "Ism-familiya faqat harflar, bo‘sh joylar va tirnoqlar bilan yozilishi mumkin",
    }),
  tashkilot: z
    .string()
    .min(2, "Tashkilot nomi kamida 2 ta belgidan iborat bo‘lishi kerak"),
  phoneNumber: z
    .string()
    .transform((val) => val.replace(/\s/g, "")) 
    .refine((val) => /^\d{9}$/.test(val), {
      message: "Telefon raqami aniq 9 ta raqamdan iborat bo‘lishi kerak",
    }),
});

export default formSchema;
