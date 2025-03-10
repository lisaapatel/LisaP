interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
}

interface EducationItem {
  degree: string;
  school: string;
  location: string;
  duration: string;
  description: string[];
  coursework?: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Data Analyst",
    company: "Upgrade",
    location: "San Francisco Bay Area",
    duration: "2022 - Present",
    description: [
      "Lead data analysis initiatives to optimize customer acquisition and retention strategies",
      "Develop and maintain dashboards for monitoring key business metrics",
      "Collaborate with cross-functional teams to implement data-driven solutions"
    ],
    technologies: ["SQL", "Python", "Tableau", "Data Analysis"]
  },
  {
    title: "Data Science Intern",
    company: "Tech Company",
    location: "San Francisco",
    duration: "2021 - 2022",
    description: [
      "Developed machine learning models for customer segmentation",
      "Analyzed large datasets to identify business opportunities",
      "Created automated reporting systems"
    ],
    technologies: ["Python", "Machine Learning", "SQL", "Data Visualization"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master's in Information Systems",
    school: "Santa Clara University",
    location: "Santa Clara, CA",
    duration: "2020 - 2022",
    description: [
      "Focus on Data Science and Business Analytics",
      "Relevant coursework in Machine Learning, Big Data, and Business Intelligence"
    ],
    coursework: [
      "Machine Learning",
      "Data Science",
      "Business Intelligence",
      "Database Management"
    ]
  },
  {
    degree: "Bachelor's in Computer Engineering",
    school: "University",
    location: "India",
    duration: "2016 - 2020",
    description: [
      "Focus on Computer Science fundamentals",
      "Graduated with honors"
    ],
    coursework: [
      "Data Structures",
      "Algorithms",
      "Software Engineering",
      "Web Development"
    ]
  }
]; 