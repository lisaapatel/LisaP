import type { FC } from 'react';
import { Building2, MapPin, Calendar } from 'lucide-react';

interface ExperienceCardProps {
  experience: {
    company: string;
    title: string;
    location: string;
    timePeriod: string;
    description: string[];
  };
  previousCompany?: string;
  showIcon?: boolean;
  isLastRole?: boolean;
}

export const ExperienceCard: FC<ExperienceCardProps> = ({
  experience,
  previousCompany,
  showIcon = true,
  isLastRole = false
}) => {
  const showCompanyIcon = showIcon && (!previousCompany || experience.company !== previousCompany);

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        {showCompanyIcon && (
          <div className="p-2 rounded-md bg-secondary/30 backdrop-blur-sm border border-border/40">
            <Building2 className="w-5 h-5" />
          </div>
        )}
        <div className="space-y-1.5">
          <h3 className="font-medium">{experience.title}</h3>
          <p className="text-muted-foreground">{experience.company}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {experience.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {experience.timePeriod}
            </span>
          </div>
        </div>
      </div>

      <div className={`space-y-4 ${showCompanyIcon ? 'ml-14' : 'ml-0'}`}>
        <ul className="list-disc space-y-1 ml-4 text-muted-foreground">
          {experience.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}; 