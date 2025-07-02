"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("ComingSoon");

  return (
    <div className="sm:h-screen h-[65vh] flex items-center justify-center flex-col gap-7 text-center">
      <h4 className="text-[25px] font-semibold">
        ⏳ {t("message")}
      </h4>
      <Link
        href="https://cabinet.clamo.uz/"
        target="_blank"
        className="px-14 py-2 rounded-md cursor-pointer text-white bg-[#45b2fc] transition-all duration-200 hover:bg-[#70c6ff]"
      >
        {t("button")}
      </Link>
    </div>
  );
}
