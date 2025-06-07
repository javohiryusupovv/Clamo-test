import { FC } from "react";
import Image from "next/image";

interface StepIconProps {
  className?: string;
  type: "form" | "check" | "review" | "decision";
}

const StepIcon: FC<StepIconProps> = ({ className = "", type }) => {
  const iconPath = {
    form: "/Vector2.png",
    check: "/Vector.png",
    review: "/Vector3.png",
    decision: "/Vector4.png",
  };

  return (
    <div className={`relative w-[24px] h-[32px] sm:w-[28px] sm:h-[37px] ${className}`}>
      <Image
        src={iconPath[type] || "/icons/default.svg"}
        alt={`${type} step icon`}
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  );
};

export default StepIcon;
