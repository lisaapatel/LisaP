import type { NextPage } from "next";
import { Section, TextBlock } from "../components";

const EXPERIENCES = [
  {
    company: "Upgrade, Inc.",
    title: "Product Analyst",
    timePeriod: "Aug 2022 - Present",
    location: "San Francisco, CA",
    body: [
      "Streamling customer experience by creating new features. Assisting in vendor selection, defining product specification by working cross-funtioncaly with the engineering and product team.",
      "Leading analysis/reporting for Home improvement loans; defining metrics, data models, automating reports for tracking product health and improving overall user experience.",
    ],
  },
  {
    company: "Blitz App, Inc.",
    title: "Product Data Analyst",
    timePeriod: "Sept 2021 - July 2022",
    location: "San Francisco, CA",
    body: [
      {
        title: "Platform Analytics",
        body: [
          "Performed acquisition and behavioral cohort analysis, and created dashboards to track early retention issues and user churn trends.",
          "Built comprehensive reporting pipelines for trackings insights and trends in user growth which resulted in easy-of-use tracking in overall company performance.",
        ],
      },
      {
        title: "Subscription Analytics",
        body: [
          "Automated reporting of Advance subscription metrics, to help the product team manage and understand subscription profitability and MRR, LTV, CAC, churn rates and more.",
          "Partnered with the product team to drive product strategy and features through data-informed insights on comparing game engagement of pro vs non-pro users.",
        ],
      },
      "<strong>Marketing Analytics</strong>: Designed KPIs for understanding Ad revenue in correlation to user journey, provided reports informing Ad touchpoints and placements ensuring marketing campaign success.",
      "<strong>Product Sales Analytics</strong>: Designed interfaces to provide real-time overview of key business metrics and revenue helping depict the overall health of the product offering.",
      {
        title: "Data Engineering",
        body: [
          "Transformed and processed raw data for historic back-fills and automated daily events. Orchestrated a combination of notebooks, SQL, Spark to build ETL pipelines across large game player data sets (~100m new rows daily) to trigger daily workflows.",
          "Worked with partner teams on different tech stack such as SQL, Databricks, Tableau, Spark, Snowflake, Python to solve an array of problems.",
        ],
      },
    ],
  },
  {
    company: "Okta, Inc.",
    title: "Analyst, Intern",
    timePeriod: "Mar 2021 - Sept 2021",
    location: "San Francisco, CA",
    body: [
      "Generating reports/dashboards on user search behaviors, product engagement insights to identify content gaps using Coveo Machine Learning, Google Analytics, Salesforce to provide recommendations to product strategy based on research for new content development.",
      "Implementing pipelines for data cleaning/manipulation using Python, SQL for ad-hoc analysis.",
      "Supporting launch of new product features and product testing by providing real-time analytics using Tableau based on internal/customer interactions.",
    ],
  },
  {
    company: "Gilead Sciences, Inc.",
    title: "Data Scientist, Intern",
    timePeriod: "Apr 2020 - Dec 2020",
    location: "Foster City, CA",
    body: [
      "Collaborated with data engineers to develop ETL workflows in Azure Data Factory to analyze over 2 million patient health claims.",
      "Wrote and optimized SQL queries to perform data extraction, developed data processing pipelines using python (Numpy, Pandas) and built ML models with 78% accuracy to identify target patients likely to switch on the new drug and predict quality target of the drug market.",
      "Created effective data visualization dashboards with Tableau and Matplotlib which provided business insights to the sales team for investing in the promotion of the product.",
    ],
  },
  {
    company: "BioMarin Pharmaceutical, Inc.",
    title: "Data Science Analyst, Intern",
    timePeriod: "Jun 2020 - Sept 2020",
    location: "San Rafael, CA",
    body: [
      "Led cleaning and processing of data with SQL, Python (Pandas, NumPy) from multiple data sources to a data warehouse.",
      "Conceptualized and implemented PowerBI Dashboards for the leadership team utilizing data to advise on strategic decisions like Promotion, Workforce Diversity, Employee Engagement, Office Capacity Planning, and Attrition.",
      "Independently designed KPIs on operational metrics in Python and PowerBI to analyze the gender and/or ethnicity pay gap.",
    ],
  },
];

const Experience: NextPage = () => {
  return (
    <Section type="light">
      <div className="container">
        <h3 className="text-3xl font-bold my-4">Work</h3>
        {EXPERIENCES.map((e) => (
          <div className="mb-6 last:border-b-0 border-b-2 pb-6" key={e.company}>
            <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h3 className="text-xl font-bold flex flex-col mb-2 sm:mb-0">
                <span>{e.title}</span>
                <span>{e.company}</span>
              </h3>
              <h3 className="text-lg flex flex-col items-start sm:items-end">
                <span>{e.timePeriod}</span>
                <span>{e.location}</span>
              </h3>
            </div>
            <ul className="list-disc ml-4">
              {e.body.map((b, i) => {
                if (typeof b === "object") {
                  return (
                    <li key={i}>
                      <strong>{b.title}</strong>
                      <ul className="list-disc ml-8">
                        {b.body.map((b2, i2) => (
                          <li
                            key={i2}
                            dangerouslySetInnerHTML={{ __html: b2 }}
                          />
                        ))}
                      </ul>
                    </li>
                  );
                }
                return <li key={i} dangerouslySetInnerHTML={{ __html: b }} />;
              })}
            </ul>
          </div>
        ))}
        <h3 className="text-3xl font-bold my-4">Education</h3>
        <div className="flex flex-cols sm:flex-row justify-between items-center">
          <div>
            <TextBlock
              header="Master of Science in Information Systems"
              subtext="Santa Clara University, Leavey School of Business"
            />
            <i>
              <span>
                Coursework: Data Science with Python, Machine Learning, NLP,
                Database Management, Cloud Computing, Info. Systems Analysis &
                Design, Object Oriented Analysis -Java, Database Analysis &
                Modeling, Data Warehousing, Digital Strategies & Policies,
                Software Project Management, Women in Leadership
              </span>
            </i>
            <p>
              <i>
                <span>
                  Activities : Grace Hopper Celebration, Rewriting the Code,
                  Women In Product, Product Buds
                </span>
              </i>
            </p>
          </div>
          <span className="font-bold">2021</span>
        </div>

        <div className="flex flex-cols sm:flex-row justify-between items-center">
          <div>
            <TextBlock
              header="Bachelor of Engineering in Information and Communication Technology"
              subtext="Gujarat Technological University"
            />
            <i>
              <span>
                Coursework: Software Engineering, Adv. Computer Networks, Data
                Structures, Operating Systems
              </span>
            </i>
            <p>
              <i>
                <span>Activities : Lumina, LJ Prayas, LJ Tech fest</span>
              </i>
            </p>
          </div>
          <span className="font-bold">2019</span>
        </div>
        <div className="flex flex-cols sm:flex-row justify-between items-center">
          <div>
            <br></br>
            <p>
              <b>Product School</b>:{" "}
              <a href="https://drive.google.com/file/d/1RwyfV5OnrZhhmykiD5OktQ44rHQgPUom/view">
                <u>Product Analytics</u>
              </a>
            </p>
            <i>
              <span>
                Coursework: Web Analytics, Intro to SQL, Advance SQL, Data
                Visualization, Understanding Data & Statistics, Intro to Machine
                Learning, Data Visualization & Big Data, Capstone
              </span>
            </i>
          </div>
          <span className="font-bold"></span>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
