export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  highlights?: {
    title: string;
    items: string[];
  }[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  coursework: string[];
  activities?: string[];
}

export interface Project {
  title: string;
  description: string | string[];
  image?: string;
  tags: string[];
  link: string;
} 