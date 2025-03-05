import { Layout } from '../components/Layout/Layout';
import { ExperienceCard } from '../components/ExperienceCard';
import { EducationCard } from '../components/EducationCard';
import { EXPERIENCE, EDUCATION } from '../data/experience';

export default function Experience() {
  return (
    <Layout>
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Work Experience */}
          <section>
            <h1 className="section-title mb-12">Work Experience</h1>
            <div className="space-y-8">
              {EXPERIENCE.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  experience={experience}
                  previousCompany={index > 0 ? EXPERIENCE[index - 1].company : undefined}
                  showIcon={index === 0 || experience.company !== EXPERIENCE[index - 1].company}
                  isLastRole={index === EXPERIENCE.length - 1}
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
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
