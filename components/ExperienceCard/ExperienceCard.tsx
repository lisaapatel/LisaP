import type { Experience } from '../../types';
import { Building2 } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  previousCompany?: string;
  showIcon?: boolean;
  isLastRole?: boolean;
}

export function ExperienceCard({ 
  experience, 
  previousCompany, 
  showIcon = true,
  isLastRole = false 
}: ExperienceCardProps) {
  const showCompany = experience.company !== previousCompany;

  return (
    <div className="group relative">
      <div className="flex gap-6">
        {/* Company Logo/Icon */}
        <div className="flex-shrink-0 w-12 relative">
          {showIcon && (
            <div className="w-12 h-12 rounded-full bg-card border border-border/40 flex items-center justify-center overflow-hidden">
              <Building2 className="w-6 h-6 text-muted-foreground" />
            </div>
          )}
          {/* Vertical Line Connector */}
          {!isLastRole && (
            <div className="absolute left-6 top-12 w-[1px] h-[calc(100%+2rem)] bg-border/60" />
          )}
        </div>

        {/* Content */}
        <div className="flex-grow space-y-4 pb-8">
          {/* Header */}
          <div className="space-y-1">
            <h3 className="experience-title text-xl">{experience.title}</h3>
            <div className="space-y-0.5">
              {showCompany && (
                <h4 className="experience-company text-base">{experience.company}</h4>
              )}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{experience.period}</span>
                <span>•</span>
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          {Array.isArray(experience.description) && (
            <ul className="space-y-3">
              {experience.description.map((item, i) => (
                <li 
                  key={i} 
                  className="description-text relative pl-6 before:absolute before:left-0 before:top-[0.6875rem] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Highlights */}
          {experience.highlights?.map((highlight, i) => (
            <div key={i} className="space-y-2">
              <h4 className="card-title text-base font-medium">{highlight.title}</h4>
              <ul className="space-y-3">
                {highlight.items.map((item, j) => (
                  <li 
                    key={j} 
                    className="description-text relative pl-6 before:absolute before:left-0 before:top-[0.6875rem] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 