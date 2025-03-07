import { Experience, Education } from '../types';

export const EXPERIENCE: Experience[] = [
  {
    title: "Product Manager",
    company: "Upgrade, Inc.",
    location: "San Francisco, CA",
    period: "Feb 2024 - Present",
    description: "Led product development initiatives for financial services platform.",
    highlights: [
      {
        title: "Key Achievements",
        items: [
          "Streamlined customer onboarding process by optimizing authentication flow, eliminating unnecessary email verification steps and integrating essential platform links, resulting in 35% faster signups",
          "Architected and implemented a comprehensive disputes flow, transforming the existing process",
          "Developed critical self-service features to enhance customer experience",
          "Led the development of cross-sell flow, defining targeted customer criteria",
          "Collaborated with data science team to implement intelligent fraud detection rules",
          "Managed executive reporting, providing critical insights into product performance"
        ]
      }
    ]
  },
  {
    title: "Associate PM/Product Analyst",
    company: "Upgrade, Inc.",
    location: "San Francisco, CA",
    period: "Aug 2022 – Dec 2023",
    description: [
      "Analyzed user behavior and feedback to identify pain points and opportunities for product improvements.",
      "Developed and maintained product roadmap, ensuring alignment with business goals and customer needs.",
      "Created detailed product specifications and user stories for engineering team implementation.",
      "Streamlining customer experience by creating new features. Assisting in vendor selection, defining product specification by working cross-functionally with the engineering and product team.",
      "Leading analysis/reporting for Home improvement loans; defining metrics, data models, automating reports for tracking product health and improving overall user experience."
    ]
  },
  {
    title: "Product Data Analyst",
    company: "Blitz App, Inc.",
    location: "San Francisco, CA",
    period: "Jan 2022 - Dec 2023",
    description: "Analyzed product metrics and user behavior to drive product decisions.",
    highlights: [
      {
        title: "Key Achievements",
        items: [
          "Implemented data tracking systems that increased visibility into user behavior",
          "Created dashboards for monitoring key performance indicators",
          "Conducted A/B tests to optimize user experience"
        ]
      }
    ]
  },
  {
    title: "Analyst, Intern",
    company: "Okta, Inc.",
    location: "San Francisco, CA",
    period: "Mar 2021 - Sept 2021",
    description: [
      "Generating reports/dashboards on user search behaviors, product engagement insights to identify content gaps using Coveo Machine Learning, Google Analytics, Salesforce to provide recommendations to product strategy based on research for new content development.",
      "Implementing pipelines for data cleaning/manipulation using Python, SQL for ad-hoc analysis.",
      "Supporting launch of new product features and product testing by providing real-time analytics using Tableau based on internal/customer interactions.",
    ],
  },
  {
    title: "Data Scientist, Intern",
    company: "Gilead Sciences, Inc.",
    location: "Foster City, CA",
    period: "Apr 2020 - Dec 2020",
    description: [
      "Collaborated with data engineers to develop ETL workflows in Azure Data Factory to analyze over 2 million patient health claims.",
      "Wrote and optimized SQL queries to perform data extraction, developed data processing pipelines using python (Numpy, Pandas) and built ML models with 78% accuracy to identify target patients likely to switch on the new drug and predict quality target of the drug market.",
      "Created effective data visualization dashboards with Tableau and Matplotlib which provided business insights to the sales team for investing in the promotion of the product.",
    ],
  },
  {
    title: "Data Science Analyst, Intern",
    company: "BioMarin Pharmaceutical, Inc.",
    location: "San Rafael, CA",
    period: "Jun 2020 - Sept 2020",
    description: [
      "Led cleaning and processing of data with SQL, Python (Pandas, NumPy) from multiple data sources to a data warehouse.",
      "Conceptualized and implemented PowerBI Dashboards for the leadership team utilizing data to advise on strategic decisions like Promotion, Workforce Diversity, Employee Engagement, Office Capacity Planning, and Attrition.",
      "Independently designed KPIs on operational metrics in Python and PowerBI to analyze the gender and/or ethnicity pay gap.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Master of Science in Information Systems",
    school: "Santa Clara University, Leavey School of Business",
    location: "Santa Clara, CA",
    period: "2021",
    coursework: [
      "Data Science with Python",
      "Machine Learning",
      "NLP",
      "Database Management",
      "Cloud Computing",
      "Info. Systems Analysis & Design",
      "Object Oriented Analysis -Java",
      "Database Analysis & Modeling",
      "Data Warehousing",
      "Digital Strategies & Policies",
      "Software Project Management",
      "Women in Leadership"
    ],
    activities: [
      "Grace Hopper Celebration",
      "Rewriting the Code",
      "Women In Product",
      "Product Buds"
    ],
  },
  {
    degree: "Bachelor of Engineering in Information and Communication Technology",
    school: "Gujarat Technological University",
    location: "Gujarat, India",
    period: "2015 - 2019",
    coursework: [
      "Software Engineering",
      "Adv. Computer Networks",
      "Data Structures",
      "Operating Systems"
    ],
    activities: [
      "Lumina",
      "LJ Prayas",
      "LJ Tech fest"
    ],
  },
]; 