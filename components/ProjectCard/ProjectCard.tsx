import React from 'react';
import { Card, CardContent, CardHeader, Badge, HoverCard, HoverCardContent, HoverCardTrigger } from "../ui";
import { cn } from "../../lib/utils";

interface ProjectCardProps {
  title: string;
  link?: string;
  body?: string[];
  img?: string;
  tags?: string[];
  className?: string;
  children?: React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  link,
  body,
  img,
  tags,
  className = '',
  children
}) => {
  return (
    <Card className={`group overflow-hidden transition-all hover:shadow-lg ${className}`}>
      {img && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}
      <CardHeader>
        <HoverCard>
          <HoverCardTrigger asChild>
            <h3 className="text-xl font-bold">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>
          </HoverCardTrigger>
          {link && (
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Click to view project details on GitHub
                </p>
              </div>
            </HoverCardContent>
          )}
        </HoverCard>
      </CardHeader>
      <CardContent>
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {body && (
          <ul className="list-disc ml-4 space-y-2 text-muted-foreground">
            {body.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        )}
        {children}
      </CardContent>
    </Card>
  );
}; 