import { Experience } from '../types/experience';
import React from 'react';

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="mb-16">
      <h2 className="text-4xl font-bold mb-8">{experience.title}</h2>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">{experience.company}</h3>
        <p className="text-gray-600 text-xl">{experience.location}</p>
        <p className="text-gray-600 text-xl">{experience.duration}</p>
      </div>
      <ul className="list-disc pl-8 space-y-6">
        {experience.points.map((point, index) => (
          <li key={index} className="text-xl leading-relaxed">
            {point.split('\n').map((line, i) => (
              <p key={i} className={i === 0 ? '' : 'ml-6 mt-3'}>
                {line}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </article>
  );
} 