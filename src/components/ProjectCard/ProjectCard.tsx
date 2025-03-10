import type { FC } from 'react';
import Image from 'next/image';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const isDataViz = project.tags.includes("Data Visualization");

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group rounded-lg border border-border/50 bg-card hover:border-border/80 transition-all"
    >
      <div className="p-6 space-y-4">
        {project.image && (
          <div className="aspect-video relative rounded-md overflow-hidden bg-secondary">
            <Image
              src={project.image}
              alt={project.title}
              width={640}
              height={360}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        
        <div className="space-y-2">
          <h3 className="text-xl font-medium group-hover:text-foreground/80 transition-colors">
            {project.title}
          </h3>
          
          {Array.isArray(project.description) ? (
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {project.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">
              {project.description}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}; 