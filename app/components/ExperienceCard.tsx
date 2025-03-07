import React from 'react';
import type { Experience } from '../types/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { title, company, location, period, description, highlights } = experience;
  
  return (
    <div className="mb-8 border-l-4 border-gray-200 pl-4 hover:border-blue-500 transition-colors">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="text-gray-600 mb-2">
        {company} | {location} | {period}
      </div>
      
      {typeof description === 'string' ? (
        <p className="mb-4">{description}</p>
      ) : (
        <ul className="list-disc pl-5 mb-4 space-y-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      
      {highlights && highlights.length > 0 && (
        <div className="mt-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="mb-3">
              <h4 className="font-semibold">{highlight.title}</h4>
              <ul className="list-disc pl-5 space-y-1">
                {highlight.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 