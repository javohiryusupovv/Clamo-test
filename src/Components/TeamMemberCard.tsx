import Image from "next/image";
import { motion } from "framer-motion";

type TeamMember = {
  id: number;
  name: string;
  title?: string;
  image: string;
};

type Props = {
  member: TeamMember;
};

export const TeamMemberCard = ({ member }: Props) => {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative rounded-2xl overflow-hidden w-64 h-96 shadow-md bg-white cursor-pointer teamcarousel"
    >
      {/* Rasm */}
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover teamcaruselimg"
      />

      {/* Pastki ism gradient fon bilan */}
      <motion.div
        variants={{
          rest: { y: 0 },
          hover: { y: -90 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute bottom-0 left-0 right-0 p-4 z-[9999999] text-white"
      >
        <p className="font-semibold">{member.name}</p>
      </motion.div>

      {/* Hoverda chiqadigan lavozim (title) va gradient fon */}
      {member.title && (
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-[#003780cc] to-transparent p-4 text-white flex items-end"
        >
          <div className="text-sm">{member.title}</div>
        </motion.div>
      )}
    </motion.div>
  );
};
