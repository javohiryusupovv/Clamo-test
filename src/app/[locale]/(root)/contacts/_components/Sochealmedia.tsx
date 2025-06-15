"use client";

import Image from "next/image";
import { getSochealMedia } from "../../../../../../constants/page";

export default function SochealMedia() {
  const media = getSochealMedia;
  return (
    <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-3 items-center justify-center bg-[#F6F9FC] mb-10 py-6 max-md:mt-[420px] rounded-2xl">
      {media.map((item) => (
        <div
          key={item.id}
          className="flex items-center md:justify-center md:gap-5 ml-5 gap-2 group hover:cursor-pointer"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DFE9F7] transition duration-200 group-hover:bg-blue-700 cursor-pointer">
            <Image
              src={item.icon}
              alt={item.name}
              width={20}
              height={20}
              className="object-contain transition duration-200 group-hover:brightness-0 group-hover:invert"
            />
          </div>

          <div className="flex flex-col -space-y-1">
            <h2 className="text-sm">{item.name}</h2>
            <p className="font-medium">{item.link}</p>
          </div>
        </div>
      ))}
    </div>
  );
}