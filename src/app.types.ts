import type { StaticImageData } from "next/image";

export interface ServiceCardProps {
  icon: string | StaticImageData;
  title: string;
  description: string;
  link: string;
}