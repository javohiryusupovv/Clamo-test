import Image, { StaticImageData } from "next/image";
import React from "react";

type TeamMember = {
  id: number;
  name: string;
  title?: string;
  image: StaticImageData;
};

type Props = {
  member: TeamMember;
};

export const TeamMemberCard = ({ member }: Props) => {
  return (
    <div className="relative rounded-2xl overflow-hidden w-64 h-96 shadow-md bg-white cursor-pointer teamcarousel group">
      {/* Rasm */}
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover teamcaruselimg"
      />

      {/* Ism */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-white transform transition-transform duration-300 group-hover:-translate-y-[80px]">
        <p className="font-semibold">{member.name}</p>
      </div>

      {/* Hoverda chiqadigan lavozim (title) va gradient fon */}
      {member.title && (
        <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-[#002b66] to-transparent px-4 text-white flex items-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="text-sm mb-[10px]">{member.title}</div>
        </div>
      )}
    </div>
  );
};
