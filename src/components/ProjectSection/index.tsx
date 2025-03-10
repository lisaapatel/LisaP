import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { cn } from "../../lib/utils";

interface ProjectSectionProps {
  title: string;
  description?: string;
  tabs?: {
    id: string;
    label: string;
    content: React.ReactNode;
  }[];
  children?: React.ReactNode;
}

export function ProjectSection({ 
  title, 
  description, 
  tabs,
  children 
}: ProjectSectionProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-center tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {tabs ? (
        <Tabs defaultValue={tabs[0].id} className="space-y-6">
          <div className="flex justify-center">
            <TabsList className="rounded-full bg-secondary/30 backdrop-blur-sm border border-border/50">
              {tabs.map((tab) => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id}
                  className="px-4 py-2 text-base font-medium tracking-tight rounded-full data-[state=active]:bg-background"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        children
      )}
    </section>
  );
} 