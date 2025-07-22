"use client";

import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("ComingSoon");

  return (
    <div className="sm:h-screen h-[75vh] flex items-center justify-center flex-col gap-7 text-center">
      <h4 className="text-[25px] font-semibold leading-[130%]">
        ⏳ {t("message")}
      </h4>
    </div>
  );
}
