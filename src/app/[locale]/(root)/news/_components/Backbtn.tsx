"use client"; // kerakli joyga yozish kerak

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChevronLeft } from 'lucide-react';


export default function Backbtn() {
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations("BackButton");

    return (
        <button
            onClick={() => router.push(`/${locale}/news`)}
            className="flex items-center gap-1 mb-6 text-[17px] max-sm:text-[15px] text-blue-600 hover:underline transition"
        >
            <ChevronLeft className="w-5 h-5"/>
            {t("label")}
        </button>

    )
}
