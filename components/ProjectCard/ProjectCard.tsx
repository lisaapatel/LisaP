import React from 'react';
import Image from 'next/image';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isDataViz = project.tags.includes("Data Visualization");

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card rounded-lg border border-border/40 hover:border-border/60 transition-colors overflow-hidden"
    >
      {/* Preview Image for Data Viz */}
      {isDataViz && project.image && (
        <div className="aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={338}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-blue-500">
          {project.title}
        </h3>
        
        {Array.isArray(project.description) ? (
          <ul className="list-disc space-y-2 ml-4 text-sm text-muted-foreground">
            {project.description.map((item, i) => (
              <li key={i} className={`${i === 0 ? 'font-medium list-none -ml-4' : ''}`}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">
            {project.description}
          </p>
        )}

        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs text-muted-foreground bg-secondary rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
} 