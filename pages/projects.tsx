import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { ProjectSection } from "../components/ProjectSection/ProjectSection";
import { ThemeToggle } from "../components/ThemeToggle/ThemeToggle";

const PROJECTS = [
  {
    title: "E-Commerce Customer Segmentation & Behavior Analysis",
    link: "https://github.com/LISAPATEL98/EcommerceCustomers",
    body: [
      "Predicted product recommendations depending on past 259k customer transactions; used K-means Clustering to aggregate frequently bought items together, which lead to a strategy for promoting market basket sales improving revenue on retail",
      "Performed RFM Analysis, to segment customers based on value from past transactions and Trend analysis to find purchase patterns over time",
    ],
  },

  {
    title: "ARTICULATE : Article Summarizer",
    link: "https://github.com/LISAPATEL98/Articlesummarizer",
    body: [
      "Web-Scraped data using Selenium to fetch articles from NY Times, summarized article lengths using techniques like TextRank, Similarity matrix",
      "Classified the comments on articles to positive/negative and truthful/deceptive using Sentimental analysis and Text analysis",
      "Predicted NYT's best pick comment using Logistic regression with 72% ROC; built an automatic comment generator using Tensorflow and LSTM",
    ],
  },

  {
    title: "Moderation System for Hate Speech Detection",
    link: "https://github.com/LISAPATEL98/HateSpeech-moderationSystem",
    body: [
      "Designed an interface that identifies abusive content which alerts users, and provides a timer to rethink before publishing hate content using BERT",
      "Performed data cleaning using Lemmatization, Stemming and did feature extraction with techniques like TF-IDF vectors, Lime Text Explainer",
      "Used oversampling- SMOTE and RandomOversampling on the imbalance data to achieve the accuracy of 95%",
    ],
  },

  {
    title: "A/B test on Mobile Game Players",
    link: "https://github.com/LISAPATEL98/AB_testing-",
    body: [
      "Conducted A/B test on mobile game data with ~90k players to determine the intensity of obstacles in-game level to increase player retention",
      "Implemented the hypothesis testing using statistical techniques like Chi-Square test, degree of freedom, p-value",
    ],
  },
  {
    title: "HR Employee Management",
    link: "",
    body: [
      "Applied HR Analytics using ML on IBM's dataset, created a strategic plan for employee churn model & retention rate",
      "Reduced attrition rate by determining KPI's & flagging employees at risk; Logistic regression, SVM with 82% accuracy",
    ],
  },

  {
    title: "LinkedIn Messages & Connection Analysis",
    link: "https://github.com/LISAPATEL98/LinkdeIn-Analysis",
    body: [
      "Performed analysis on my current LinkedIn Messages and connections for detecting language & to determine the tone of msgs I've been getting.",
    ],
  },
];

const TABLEAU_PROJECTS = [
  {
    title: "The Earth is heating up, What are you doing for saving the Planet?",
    link: "https://public.tableau.com/views/TheEarthisheatingupWhatareyoudoingforsavingthePlanet/TheEarthisgettingwarmer?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Th/TheEarthisheatingupWhatareyoudoingforsavingthePlanet/TheEarthisgettingwarmer/4_3.png",
  },
  {
    title: "Perceived Obstacles to Gender Equality",
    link: "https://public.tableau.com/views/PerceivedObstaclestoGenderEquality_16128250632890/PerceivedObstaclestoGenderEquality?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Pe/PerceivedObstaclestoGenderEquality_16128250632890/PerceivedObstaclestoGenderEquality/4_3.png",
  },
  {
    title: "The Race Towards Sustainability",
    link: "https://public.tableau.com/views/TheRaceTowardsSustainability/RenewablesovertakeFossils?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Th/TheRaceTowardsSustainability/RenewablesovertakeFossils/4_3.png",
  },
  {
    title: "Coal Production in India",
    link: "https://public.tableau.com/views/CoalProductioninIndia_16116160336180/CoalProductioninIndia?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Co/CoalProductioninIndia_16116160336180/CoalProductioninIndia/4_3.png",
  },
  {
    title: "Gender Inequality and HIV-AIDS among Adolescents",
    link: "https://public.tableau.com/views/GenderInequalityandHIV-AIDSamongAdolescents/GenderInequalityandHIVAIDS?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Ge/GenderInequalityandHIV-AIDSamongAdolescents/GenderInequalityandHIVAIDS/4_3.png",
  },
  {
    title: "San Francisco's Airbnb Listings Analysis",
    link: "https://public.tableau.com/views/SanFranciscosAirbnbListingsAnalysis/Airbnb?:language=en-US&:display_count=n&:origin=viz_share_link",
    img: "https://public.tableau.com/static/images/Sa/SanFranciscosAirbnbListingsAnalysis/Airbnb/4_3.png",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-8">
        <Tabs defaultValue="visualization" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="visualization">Data Visualization</TabsTrigger>
            <TabsTrigger value="datascience">Data Science</TabsTrigger>
            <TabsTrigger value="casestudies">Case Studies</TabsTrigger>
          </TabsList>

          <TabsContent value="visualization">
            <ProjectSection 
              title="Data Visualization Projects"
              subtitle={
                <>
                  You can find all the vizzes in my{" "}
                  <a
                    href="https://public.tableau.com/app/profile/lisa7954#!/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Tableau Gallery
                  </a>
                </>
              }
            >
              {TABLEAU_PROJECTS.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  tags={["Tableau", "Data Visualization"]}
                />
              ))}
            </ProjectSection>
          </TabsContent>

          <TabsContent value="datascience">
            <ProjectSection title="Data Science Projects">
              {PROJECTS.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  tags={["Data Science", "Machine Learning"]}
                />
              ))}
            </ProjectSection>
          </TabsContent>

          <TabsContent value="casestudies">
            <ProjectSection title="Case Studies">
              <ProjectCard
                title="Virtualization adoption in Retail Sector"
                link="https://github.com/LISAPATEL98/CaseStudies-/blob/main/Virtualization%20In%20Retail%20Compaines.pdf"
                tags={["Digital Strategy", "Consulting"]}
                body={[
                  "Analyzed virtualization adoption for a hypothetical retail company",
                  "Evaluated Microsoft & VMware cloud services",
                  "Delivered implementation strategy and business benefits"
                ]}
              />
              
              <ProjectCard
                title="Ebay's Digital Strategy & Transformation: HelpBot"
                link="https://github.com/LISAPATEL98/CaseStudies-/blob/main/eBay'%20digital%20transformation%20-%20Helpbot.pdf"
                tags={["Digital Strategy", "UX Research"]}
                body={[
                  "Analyzed user experience and pain points through surveys",
                  "Formulated AI and Automation capabilities",
                  "Designed future state customer journey maps"
                ]}
              />

              <ProjectCard
                title="BioTech Companies Comparison"
                link="https://github.com/LISAPATEL98/BioTechCompaniesComparision"
                tags={["Finance", "Analysis"]}
                body={[
                  "Comparative study of BioGen vs Bristol Myers Squibb",
                  "Performed quantitative and qualitative analysis",
                  "Analyzed earnings calls, SEC filings, and key ratios"
                ]}
              />
            </ProjectSection>
          </TabsContent>
        </Tabs>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Projects;
