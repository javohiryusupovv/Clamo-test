"use client"; // kerakli joyga yozish kerak

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChevronLeft } from 'lucide-react';

interface BackbtnProps {
    href?: string;
}

export default function Backbtn({ href }: BackbtnProps) {
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations("BackButton");

    const handleClick = () => {
        if (href) {
            router.push(href);
        } else {
            router.push(`/${locale}/news`);
        }
    };

    return (
        <button
            onClick={handleClick}
            className="flex items-center gap-1 mb-6 text-[17px] max-sm:text-[15px] text-blue-600 hover:underline transition"
        >
            <ChevronLeft className="w-5 h-5"/>
            {t("label")}
        </button>

    )
}
