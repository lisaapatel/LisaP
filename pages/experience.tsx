import React from 'react';
import { Layout } from '../components/Layout/Layout';
import ExperienceCard from '../app/components/ExperienceCard';
import EducationCard from '../components/EducationCard/EducationCard';
import type { Experience } from '../app/types/experience';
import type { Education } from '../types';
import { EXPERIENCE, EDUCATION } from '../data/experience';

const EXPERIENCE_DATA: Experience[] = EXPERIENCE;
const EDUCATION_DATA: Education[] = EDUCATION;

const ExperiencePage = () => {
  return (
    <Layout>
      <div className="section-container">
        <div className="max-w-5xl mx-auto space-y-24 py-12">
          <section className="space-y-12">
            <h1 className="text-4xl font-bold text-center">Experience</h1>
            <div className="space-y-8">
              {EXPERIENCE_DATA.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </div>
          </section>

          <section className="space-y-12">
            <h2 className="text-3xl font-bold text-center">Education</h2>
            <div className="space-y-8">
              {EDUCATION_DATA.map((education, index) => (
                <EducationCard 
                  key={index} 
                  education={education} 
                  isLast={index === EDUCATION_DATA.length - 1} 
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ExperiencePage;
