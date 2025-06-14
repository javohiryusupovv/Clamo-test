
export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface Department {
  id: number;
  title: string;
  description: string;
}

export type TeamMember = {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
};