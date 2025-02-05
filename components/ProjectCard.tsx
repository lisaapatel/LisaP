import React from 'react';

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
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-102 ${className}`}>
      {img && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {body && (
          <ul className="list-disc ml-4 space-y-2">
            {body.map((text, i) => (
              <li key={i} className="text-gray-600 dark:text-gray-300">{text}</li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </div>
  );
}; 