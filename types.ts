export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string | string[];
  highlights?: {
    title: string;
    items: string[];
  }[];
};

export type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  coursework: string[];
  activities: string[];
};

export type Project = {
  title: string;
  description: string | string[];
  image?: string;
  tags: string[];
  link?: string;
  github?: string;
}; 