export interface Project {
  title: string;
  description: string | string[];
  tags: string[];
  link: string;
  image?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  duration: string;
  description: string[];
  coursework?: string[];
}