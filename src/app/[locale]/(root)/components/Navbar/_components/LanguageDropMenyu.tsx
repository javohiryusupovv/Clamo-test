"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";

const LANGUAGES = [
  {
    code: "uz",
    label: "UZ",
    flag: "/icons/flags/uzbekistan-flag.svg",
  },
  {
    code: "en",
    label: "ENG",
    flag: "/icons/flags/united-kingdom-flag.svg",
  },
  {
    code: "ru",
    label: "RU",
    flag: "/icons/flags/russia-flag.svg",
  },
];

export default function DropLanguage() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleLangChange = (code: string) => {
    const newPath = `/${code}${pathname.slice(3)}`; // remove old lang prefix
    router.push(newPath);
    setOpen(false);
  };

  const current = LANGUAGES.find((l) => l.code === locale);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="text-sm font-medium text-[#3D445E] cursor-pointer flex items-center gap-[6px]">
          {current ? (
            <>
              <img src={current.flag} alt="" width={20} height={20} />
              {current.label}
            </>
          ) : (
            "Lang"
          )}
          <ChevronRight
            className={`w-5 h-5 transition-transform duration-300 ${
              open ? "-rotate-90 text-[#23B3FC]" : "rotate-90"
            }`}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <ul className="bg-[#E8F4FC] shadow-md rounded py-2">
          {LANGUAGES.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleLangChange(lang.code)}
              className="flex items-center gap-2 cursor-pointer hover:bg-[#D2EDFD] transition-all duration-200 px-4 py-2"
            >
              <img src={lang.flag} alt="" width={20} height={20} />
              <span className="text-sm font-medium text-[#3D445E]">{lang.label}</span>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
