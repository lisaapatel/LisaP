import React from 'react';

interface ProjectSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  subtitle,
  children
}) => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6">
        {title}
      </h2>
      {subtitle && (
        <h3 className="text-xl text-center mb-8 text-gray-600 dark:text-gray-300">
          {subtitle}
        </h3>
      )}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {children}
        </div>
      </div>
    </section>
  );
}; 