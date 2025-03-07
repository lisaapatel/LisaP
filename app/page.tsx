import { experiences } from './data/experience';
import ExperienceCard from './components/ExperienceCard';
import React from 'react';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen p-8">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </main>
    </>
  );
} 