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

export default function DropMenyu() {
  const t = useTranslations("NavbarPage");
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <li
          className="text-sm font-medium text-[#3D445E] cursor-pointer flex items-center gap-[6px]"
        >
          {t("abouts")}
          <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${ open ? "-rotate-90 text-[#23B3FC]" : "rotate-90"}`} />
        </li>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <ul className="bg-white shadow-md rounded py-2">
          <Link href={`/${locale}/about`} onClick={handleClose}>
            <li className="text-sm font-medium text-[#3D445E] py-1 px-4 hover:text-[#23B3FC] transition-all duration-200">
              {t("aboutss")}
            </li>
          </Link>
          <Link href={`/${locale}/regulatorydocuments`} onClick={handleClose}>
            <li className="text-sm font-medium text-[#3D445E] py-1 px-4 hover:text-[#23B3FC] transition-all duration-200">
              {t("regulatorydocuments")}
            </li>
          </Link>
          <Link href={`/${locale}/international`} onClick={handleClose}>
            <li className="text-sm font-medium text-[#3D445E] py-1 px-4 hover:text-[#23B3FC] transition-all duration-200">
              {t("international")}
            </li>
          </Link>
          <Link href={`/${locale}/consulting`} onClick={handleClose}>
            <li className="text-sm font-medium text-[#3D445E] py-1 px-4 hover:text-[#23B3FC] transition-all duration-200">
              {t("consulting")}
            </li>
          </Link>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
