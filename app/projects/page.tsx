import React from 'react';
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import type { Project } from "@/types";

const DATA_SCIENCE_PROJECTS: Project[] = [
  {
    title: "E-Commerce Customer Segmentation & Behavior Analysis",
    description: [
      "Predicted product recommendations depending on past 259k customer transactions; used K-means Clustering to aggregate frequently bought items together, which lead to a strategy for promoting market basket sales improving revenue on retail",
      "Performed RFM Analysis, to segment customers based on value from past transactions and Trend analysis to find purchase patterns over time"
    ],
    tags: ["Python", "Machine Learning", "K-means", "RFM Analysis"],
    link: "https://github.com/LISAPATEL98/E-Commerce-Analysis"
  },
  {
    title: "ARTICULATE : Article Summarizer",
    description: [
      "Web-Scraped data using Selenium to fetch articles from NY Times, summarized article lengths using techniques like TextRank, Similarity matrix",
      "Classified the comments on articles to positive/negative and truthful/deceptive using Sentimental analysis and Text analysis",
      "Predicted NYT's best pick comment using Logistic regression with 72% ROC; built an automatic comment generator using Tensorflow and LSTM"
    ],
    tags: ["NLP", "Machine Learning", "Python", "Tensorflow"],
    link: "https://github.com/LISAPATEL98/ARTICULATE"
  },
  {
    title: "Moderation System for Hate Speech Detection",
    description: [
      "Designed an interface that identifies abusive content which alerts users, and provides a timer to rethink before publishing hate content using BERT",
      "Performed data cleaning using Lemmatization, Stemming and did feature extraction with techniques like TF-IDF vectors, Lime Text Explainer",
      "Used oversampling- SMOTE and RandomOversampling on the imbalanced dataset"
    ],
    tags: ["NLP", "BERT", "Python", "Machine Learning"],
    link: "https://github.com/LISAPATEL98/Hate-Speech-Detection"
  },
  {
    title: "A/B test on Mobile Game Players",
    description: [
      "Conducted A/B test on mobile game data with ~90k players to determine the intensity of obstacles in-game level to increase player retention",
      "Implemented the hypothesis testing using statistical techniques like Chi-Square test, degree of freedom, p-value"
    ],
    tags: ["A/B Testing", "Statistics", "Python", "Data Analysis"],
    link: "https://github.com/LISAPATEL98/AB-Testing"
  }
];

const DATA_VIZ_PROJECTS: Project[] = [
  {
    title: "The Race Towards Sustainability",
    description: "Visualizing renewable energy adoption trends across Europe",
    image: "/images/sustainability.png",
    tags: ["Tableau", "Data Visualization"],
    link: "https://public.tableau.com/app/profile/lisa7954/viz/TheRaceTowardsSustainability/Dashboard1"
  },
  {
    title: "Perceived Obstacles to Gender Equality",
    description: "Analysis of global gender equality challenges",
    image: "/images/gender-equality.png",
    tags: ["Tableau", "Data Visualization"],
    link: "https://public.tableau.com/app/profile/lisa7954/viz/PerceivedObstaclestoGenderEquality/Dashboard1"
  },
  {
    title: "Earth is heating up, What are you doing for saving the Planet?",
    description: "Climate change impact visualization",
    image: "/images/climate-change.png",
    tags: ["Data Visualization"],
    link: "https://public.tableau.com/app/profile/lisa7954/viz/Earthisheatingup_16473048014710/Dashboard1"
  }
];

const CASE_STUDIES: Project[] = [
  {
    title: "BioTech Companies Comparison | Finance Analysis",
    description: [
      "BioGen Vs Bristol Myers Squibb",
      "Conducted a comparative study by performing quantitative and qualitative analysis of both companies. Here, the two companies are chosen from the Pharmaceutical market segment. This analysis was conducted on the following elements:",
      "Key competitors & key drivers/challenges",
      "Most recent Earnings call, latest SEC filing & executive compensation structure",
      "Horizontal & Vertical Analysis",
      "Key ratios that are formative for each company",
      "Based on the analysis, each company was valued for investors.",
      "Used data visualization tools for in-depth analysis."
    ],
    tags: ["Financial Analysis", "Market Research", "Data Visualization"],
    link: "#"
  },
  {
    title: "Virtualization adoption in Retail Sector | Digital Strategy Consulting",
    description: [
      "Scenario: The CIO of Abacus(hypothetical online retail store) has decided that the company will adopt common virtualization across all of its data centers. The CIO's main objectives for virtualizing are:",
      "To reduce overall capital equipment and operating expenses",
      "To improve IT responsiveness to its internal customers",
      "Product Studied: VMware vSphere & Microsoft Hyper-v",
      "Steps done to accomplish the Objective:",
      "Identified challenges faced in the current state of IT Infrastructure for a hypothetical retail company called Abacus Inc.",
      "Evaluated Microsoft & VMware cloud services based on their ecosystem, feature comparison, cost structure, ROI, TCO, and risk factors",
      "Delivered virtualization implementation strategy, business benefits, and future state of the company"
    ],
    tags: ["Digital Strategy", "Cloud Computing", "ROI Analysis"],
    link: "#"
  },
  {
    title: "Ebay's Digital Strategy & Transformation: HelpBot | Digital Strategy Consulting",
    description: [
      "Analyzed the current user experience of eBay for understanding user pain points. Did User Surveys, and Affinity Mapping to come up with MVP features that would keep eBay updated in terms of the offer's in comparison to e-commerce like Amazon",
      "Formulated digital capabilities leveraging AI and Automation that helped drive the strategy and deliver value (Improved CX, Efficiency, Retention, and Loyalty, etc.)",
      "Performed capability assessment of current State (AI & automation capabilities), GAP Analysis, SWOT Analysis",
      "Designed Future State Design – customer journey maps, process map, digital systems/architecture, roadmap",
      "Laid out risks involved in undertaking this initiative and recommended mitigation of these risk",
      "Business Goals:",
      "Ease in Customer Service",
      "Customer Retention"
    ],
    tags: ["Digital Strategy", "UX Research", "AI/ML", "Customer Experience"],
    link: "#"
  },
  {
    title: "Hassle-Free Travel Planner | New Product Development",
    description: [
      "Creating scheduler syncing calendars for group travels, providing plan recommendations upon the user selections",
      "Conducting user interviews, journey mapping & affinity mapping; deducing problems from user pain points"
    ],
    tags: ["Product Development", "UX Research", "Product Strategy"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <div className="section-container">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Exploration & Creativity Section */}
        <section className="relative">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center tracking-tight">
              Exploration & Creativity
            </h2>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is where I'll be sharing some of my latest experiments, creative projects, and cool finds! First up is an article I recently wrote about building a 0-to-1 web app with Cursor. It's a quick dive into how I built Spectogo Live in just 2 hours—check it out!
              </p>
              <a 
                href="https://medium.com/@lisaapatel/building-a-0to1-web-app-with-cursor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg text-blue-500 hover:text-blue-600 transition-all hover:translate-x-1"
              >
                Read: Building a 0to1 web app with Cursor 
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Previous Projects Section */}
        <section className="relative">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center tracking-tight">
              Previous Projects
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Here's a collection of projects I worked on during grad school, organized into three sections: Data Science, Data Visualization, and Case Studies. It's a mix of hands-on work and creative problem-solving from that time!
              </p>
            </div>
          </div>
        </section>

        {/* Section Navigation */}
        <div className="flex justify-center">
          <nav className="flex gap-8 p-1 rounded-full bg-secondary/30 backdrop-blur-sm border border-border/50">
            {[
              { href: "#data-science", label: "Data Science" },
              { href: "#data-viz", label: "Data Visualization" },
              { href: "#case-studies", label: "Case Studies" }
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-6 py-2 text-lg font-medium tracking-tight rounded-full transition-all hover:bg-background/80 hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Project Sections */}
        <section id="data-science" className="space-y-6">
          <h2 className="text-3xl font-bold text-center tracking-tight">Data Science Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATA_SCIENCE_PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="data-viz" className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Data Visualization Projects</h2>
            <p className="text-lg text-muted-foreground">
              View my complete portfolio in{" "}
              <a 
                href="https://public.tableau.com/app/profile/lisa7954"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-foreground/80 transition-colors"
              >
                Tableau Gallery
              </a>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {DATA_VIZ_PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="case-studies" className="space-y-6">
          <h2 className="text-3xl font-bold text-center tracking-tight">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
