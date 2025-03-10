import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import type { EducationItem } from '../../types';

interface EducationCardProps {
  education: EducationItem;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-md bg-secondary/30 backdrop-blur-sm border border-border/40">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div className="space-y-1.5">
          <h3 className="font-medium">{education.degree}</h3>
          <p className="text-muted-foreground">{education.school}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {education.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {education.duration}
            </span>
          </div>
        </div>
      </div>

      <div className="ml-14 space-y-4">
        <ul className="list-disc space-y-1 ml-4 text-muted-foreground">
          {education.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {education.coursework && (
          <div className="space-y-2">
            <h4 className="font-medium">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="px-2 py-1 text-sm rounded-full bg-secondary/30 backdrop-blur-sm border border-border/40 text-muted-foreground"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 