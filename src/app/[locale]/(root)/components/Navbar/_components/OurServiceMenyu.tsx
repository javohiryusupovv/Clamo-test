"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLocale, useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { services } from "constants/page";

export default function OurServiceMenyu() {
  const t = useTranslations("NavbarPage");

  type Locale = "uz" | "ru" | "en";

  const locale = useLocale() as Locale;
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const pages = services;

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <li className="text-sm font-medium text-[#3D445E] cursor-pointer flex items-center gap-[6px]">
            {t("our-service")}
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-300 ${
                open ? "-rotate-90 text-[#23B3FC]" : "rotate-90"
              }`}
            />
          </li>
        </PopoverTrigger>

        <PopoverContent className="p-0">
          <ul className="bg-[#E8F4FC] shadow-md rounded py-2">
            {pages.map((page, id) => (
              <Link
                key={id}
                href={`/${locale}/${page.slug}`}
                onClick={handleClose}
              >
                <li className="text-sm font-medium text-[#3D445E] py-[6px] px-4 hover:text-[#23B3FC] hover:bg-[#D2EDFD] transition-all duration-200">
                  {page.label[locale]}
                </li>
              </Link>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}