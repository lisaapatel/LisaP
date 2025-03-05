import { Experience, Education } from '../types';

export const EXPERIENCE: Experience[] = [
  {
    title: "Product Manager",
    company: "Upgrade, Inc.",
    location: "San Francisco, CA",
    period: "Jan 2024 – Present",
    description: [
      "Driving high-impact product initiatives for a business that scaled from MVP to $1 billion in origination volume.",
      "Leading the development of dispute resolution, cross-sell opportunities, and fraud prevention features to enhance user trust and retention.",
      "Collaborating cross-functionally with legal, design, compliance, sales, and operations to ensure seamless feature rollouts.",
      "Spearheading product analytics, optimizing key funnels, and leveraging insights from heatmaps and A/B testing to improve user engagement.",
      "Managing refund workflows and identifying areas of improvement to streamline operations and reduce friction."
    ]
  },
  {
    title: "Product Analyst/APM",
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
    period: "Sept 2021 - July 2022",
    highlights: [
      {
        title: "Platform Analytics",
        items: [
          "Performed acquisition and behavioral cohort analysis, and created dashboards to track early retention issues and user churn trends.",
          "Built comprehensive reporting pipelines for trackings insights and trends in user growth which resulted in easy-of-use tracking in overall company performance.",
        ],
      },
      {
        title: "Subscription Analytics",
        items: [
          "Automated reporting of Advance subscription metrics, to help the product team manage and understand subscription profitability and MRR, LTV, CAC, churn rates and more.",
          "Partnered with the product team to drive product strategy and features through data-informed insights on comparing game engagement of pro vs non-pro users.",
        ],
      },
      {
        title: "Marketing Analytics",
        items: [
          "Designed KPIs for understanding Ad revenue in correlation to user journey, provided reports informing Ad touchpoints and placements ensuring marketing campaign success.",
        ],
      },
      {
        title: "Product Sales Analytics",
        items: [
          "Designed interfaces to provide real-time overview of key business metrics and revenue helping depict the overall health of the product offering.",
        ],
      },
      {
        title: "Data Engineering",
        items: [
          "Transformed and processed raw data for historic back-fills and automated daily events. Orchestrated a combination of notebooks, SQL, Spark to build ETL pipelines across large datasets.",
        ],
      },
    ],
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