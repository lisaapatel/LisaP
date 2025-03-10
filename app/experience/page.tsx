import { ExperienceCard } from '../../components/ExperienceCard/ExperienceCard';
import EducationCard from '../../components/EducationCard/EducationCard';
import { EDUCATION, EXPERIENCE } from '../../components/data/experience';
import type { NextPage } from "next";

// Define interface for Experience type
interface Experience {
  company: string;
  title: string;
  timePeriod: string;
  location: string;
  description: string[];
  period: string; // Add the period field that's required by ExperienceCard
}

// Update EXPERIENCES to include the period field
const EXPERIENCES: Experience[] = [
  {
    company: "Upgrade, Inc.",
    title: "Product Manager",
    timePeriod: "Feb 2024 - Present",
    period: "Aug 2022 - Present",
    location: "San Francisco, CA",
    description: [
      "Streamlined customer onboarding process by optimizing authentication flow, eliminating unnecessary email verification steps and integrating essential platform links, resulting in 35% faster signups",
      "Architected and implemented a comprehensive disputes flow, transforming the existing process by:\n- Developing a structured workflow with improved reliability and customer support\n- Creating detailed audit logs for enhanced transparency\n- Establishing clear documentation for investor insights\n- Streamlining compliance and troubleshooting processes",
      "Developed critical self-service features to enhance customer experience, including hardship enrollment, payment date modification, auto-enrollment options, and interactive interest savings calculator",
      "Led the development of cross-sell flow, defining targeted customer criteria and directing users to appropriate product solutions, improving product discovery and conversion",
      "Collaborated with data science team to implement intelligent fraud detection rules, directing suspicious payment activities to agent review while maintaining frictionless experience for legitimate users",
      "Managed executive reporting, providing critical insights into product performance and strategic opportunities that informed leadership decision-making"
    ]
  },
  {
    company: "Upgrade, Inc.",
    title: "APM/Product Analyst",
    timePeriod: "Aug 2022 - Jan 2024",
    period: "Aug 2022 - Present", // Add this required field
    location: "San Francisco, CA",
    description: [
      "Streamling customer experience by creating new features. Assisting in vendor selection, defining product specification by working cross-funtioncaly with the engineering and product team.",
      "Leading analysis/reporting for Home improvement loans; defining metrics, data models, automating reports for tracking product health and improving overall user experience."
    ]
  },
  {
    company: "Blitz App, Inc.",
    title: "Product Data Analyst",
    timePeriod: "Sept 2021 - July 2022",
    period: "Sept 2021 - July 2022",
    location: "San Francisco, CA",
    description: [
      "Performed acquisition and behavioral cohort analysis, and created dashboards to track early retention issues and user churn trends.",
      "Built comprehensive reporting pipelines for trackings insights and trends in user growth which resulted in easy-of-use tracking in overall company performance.",
      "Automated reporting of Advance subscription metrics, to help the product team manage and understand subscription profitability and MRR, LTV, CAC, churn rates and more.",
      "Partnered with the product team to drive product strategy and features through data-informed insights on comparing game engagement of pro vs non-pro users.",
      "Designed KPIs for understanding Ad revenue in correlation to user journey, provided reports informing Ad touchpoints and placements ensuring marketing campaign success.",
      "Designed interfaces to provide real-time overview of key business metrics and revenue helping depict the overall health of the product offering.",
      "Transformed and processed raw data for historic back-fills and automated daily events.",
      "Worked with partner teams on different tech stack such as SQL, Databricks, Tableau, Spark, Snowflake, Python to solve an array of problems."
    ]
  },
  {
    company: "Okta, Inc.",
    title: "Analyst, Intern",
    timePeriod: "Mar 2021 - Sept 2021",
    period: "Mar 2021 - Sept 2021",
    location: "San Francisco, CA",
    description: [
      "Generating reports/dashboards on user search behaviors, product engagement insights to identify content gaps using Coveo Machine Learning, Google Analytics, Salesforce to provide recommendations to product strategy based on research for new content development.",
      "Implementing pipelines for data cleaning/manipulation using Python, SQL for ad-hoc analysis.",
      "Supporting launch of new product features and product testing by providing real-time analytics using Tableau based on internal/customer interactions."
    ]
  },
  {
    company: "Gilead Sciences, Inc.",
    title: "Data Scientist, Intern",
    timePeriod: "Apr 2020 - Dec 2020",
    period: "Apr 2020 - Dec 2020",
    location: "Foster City, CA",
    description: [
      "Collaborated with data engineers to develop ETL workflows in Azure Data Factory to analyze over 2 million patient health claims.",
      "Wrote and optimized SQL queries to perform data extraction, developed data processing pipelines using python (Numpy, Pandas) and built ML models with 78% accuracy to identify target patients likely to switch on the new drug and predict quality target of the drug market.",
      "Created effective data visualization dashboards with Tableau and Matplotlib which provided business insights to the sales team for investing in the promotion of the product."
    ]
  },
  {
    company: "BioMarin Pharmaceutical, Inc.",
    title: "Data Science Analyst, Intern",
    timePeriod: "Jun 2020 - Sept 2020",
    period: "Jun 2020 - Sept 2020",
    location: "San Rafael, CA",
    description: [
      "Led cleaning and processing of data with SQL, Python (Pandas, NumPy) from multiple data sources to a data warehouse.",
      "Conceptualized and implemented PowerBI Dashboards for the leadership team utilizing data to advise on strategic decisions like Promotion, Workforce Diversity, Employee Engagement, Office Capacity Planning, and Attrition.",
      "Independently designed KPIs on operational metrics in Python and PowerBI to analyze the gender and/or ethnicity pay gap."
    ]
  }
];

const Experience: NextPage = () => {
  return (
    <div className="section-container">
      <div className="max-w-4xl mx-auto space-y-24">
        {/* Work Experience */}
        <section>
          <h1 className="section-title mb-12">Work Experience</h1>
          <div className="space-y-8">
            {EXPERIENCES.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                previousCompany={index > 0 ? EXPERIENCES[index - 1].company : undefined}
                showIcon={index === 0 || experience.company !== EXPERIENCES[index - 1].company}
                isLastRole={index === EXPERIENCES.length - 1}
              />
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h1 className="section-title mb-12">Education</h1>
          <div className="space-y-8">
            {EDUCATION.map((education, index) => (
              <EducationCard
                key={index}
                education={education}
                isLast={index === EDUCATION.length - 1}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
