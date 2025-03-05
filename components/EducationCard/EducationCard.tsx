import { Education } from '@/types';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationCardProps {
  education: Education;
  isLast: boolean;
}

export const EducationCard = ({ education, isLast }: EducationCardProps) => {
  return (
    <div className="group relative">
      {!isLast && (
        <div className="absolute left-8 top-16 bottom-0 w-px bg-border/40 group-hover:bg-border/60 transition-colors" />
      )}
      
      <div className="relative space-y-8">
        {/* Header */}
        <div className="flex items-start gap-6">
          <div className="p-4 rounded-xl bg-secondary/40 border border-border/40 group-hover:border-border/60 group-hover:bg-secondary/60 transition-all">
            <GraduationCap className="w-5 h-5 text-foreground/80" />
          </div>
          <div className="space-y-3">
            <div>
              <h3 className="text-xl font-semibold tracking-tight mb-1">
                {education.degree}
              </h3>
              <p className="font-medium text-foreground/90">
                {education.school}
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>{education.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{education.period}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="ml-[4.5rem] space-y-6">
          {/* Coursework */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground/80">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-secondary/40 border border-border/40 
                    text-sm text-muted-foreground hover:bg-secondary/60 hover:border-border/60 
                    transition-colors cursor-default"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Activities */}
          {education.activities && (
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground/80">
                Activities & Achievements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {education.activities.map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                    <span className="text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 