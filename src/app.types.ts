
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
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  description: string;
}

export interface NewsType {
  id: number;
  slug: string;
  title: string;
  title_uz?: string;
  created_at?: string;
  image?: string;
};

export interface MedicalLegalProps {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  bgCircle: string;
  clamoFlag: string;
}

export type Partner = {
  id: number;
  image: string;
  title: string;
};
