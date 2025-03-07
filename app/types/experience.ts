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